import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Log en desarrollo
    console.log('📩 Nuevo lead recibido:', {
      timestamp: new Date().toISOString(),
      data,
    });

    // Si hay webhook configurado, enviar
    const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          console.error('Error enviando a webhook:', response.statusText);
        }
      } catch (webhookError) {
        console.error('Error en webhook:', webhookError);
        // No fallar aunque el webhook falle
      }
    }

    // Respuesta exitosa
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
      {
        success: false,
        message: 'Error al procesar la solicitud. Por favor intente nuevamente.',
      },
      { status: 500 }
    );
  }
}
