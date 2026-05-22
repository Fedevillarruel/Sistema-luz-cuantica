import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Simple in-memory rate limiter (resets on cold start – fine for edge/serverless)
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT = 5; // max 5 requests per IP per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  country: z.string().min(2).max(100),
  whatsapp: z.string().min(6).max(30),
  message: z.string().min(20).max(2000),
  serviceLabel: z.string().max(200).optional(),
  regionLabel: z.string().max(100).optional(),
});

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: 'Demasiadas solicitudes. Intente en un momento.' },
      { status: 429 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Formato de solicitud inválido.' },
        { status: 400 }
      );
    }

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: 'Datos de formulario inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // LEAD_WEBHOOK_URL (server-side only – no NEXT_PUBLIC_ prefix)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          console.error('Error enviando a webhook:', response.status);
        }
      } catch (webhookError) {
        console.error('Error en webhook:', webhookError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud recibida correctamente. Nos contactaremos a la brevedad.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error procesando lead:', error);
    return NextResponse.json(
      { success: false, message: 'Error al procesar la solicitud. Por favor intente nuevamente.' },
      { status: 500 }
    );
  }
}
