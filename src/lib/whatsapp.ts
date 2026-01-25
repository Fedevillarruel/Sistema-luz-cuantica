export function normalizePhone(raw: string): string {
  // Mantiene solo dígitos. WhatsApp acepta e164 sin +.
  return (raw || '').replace(/\D/g, '');
}

export function buildWhatsAppUrl(phoneE164Digits: string, message: string): string {
  const base = `https://wa.me/${phoneE164Digits}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

export function formatLeadMessage(params: {
  serviceLabel: string;
  name: string;
  email: string;
  country: string;
  whatsapp: string;
  message: string;
  regionLabel?: string;
}): string {
  const lines = [
  `Hola. Quiero iniciar el proceso con *${params.serviceLabel}* dentro del Sistema Luz Cuántica.`,
    '',
    '*Datos del solicitante*',
    `• Nombre: ${params.name}`,
    `• Email: ${params.email}`,
    `• País: ${params.country}`,
    `• WhatsApp: ${params.whatsapp}`,
    params.regionLabel ? `• Región/Moneda: ${params.regionLabel}` : undefined,
    '',
    '*Motivo / Contexto*',
    params.message,
    '',
    '*Confirmación de monto y pago*',
    'Solicito la confirmación del monto final y el medio de pago disponible para mi región (ARS / USD / EUR).',
    'Entiendo que la confirmación depende de evaluación, disponibilidad y criterios de admisión.',
    '',
    'Declaro que leí y acepto el Protocolo de Ingreso del Sistema Luz Cuántica. Los pagos son definitivos y no reembolsables.',
  ].filter(Boolean) as string[];

  return lines.join('\n');
}
