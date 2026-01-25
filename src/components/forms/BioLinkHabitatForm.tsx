'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { EmailInput } from '@/components/ui/EmailInput';
import { CountryPhoneInput } from '@/components/ui/CountryPhoneInput';
import { toast } from 'sonner';
import { WHATSAPP_DESTINATION } from '@/config/whatsapp';
import { buildWhatsAppUrl, formatLeadMessage, normalizePhone } from '@/lib/whatsapp';

const Schema = z.object({
  company: z.string().min(2, 'Empresa requerida'),
  taxId: z.string().min(4, 'ID fiscal / CUIT requerido'),
  contactName: z.string().min(2, 'Nombre requerido'),
  contactRole: z.string().min(2, 'Rol requerido'),
  contactEmail: z.string().email('Email inválido'),
  contactWhatsApp: z.string().min(6, 'WhatsApp requerido'),
  country: z.string().min(2, 'País requerido'),

  assetType: z.enum(['espacio', 'vehiculo', 'maquinaria', 'otro']),
  assetLocation: z.string().min(3, 'Ubicación requerida'),
  objective: z.string().min(30, 'Objetivo/contexto (mín. 30 caracteres)'),

  acceptProtocol: z.literal(true, { errorMap: () => ({ message: 'Debés aceptar el protocolo' }) }),
  acceptNoGuarantees: z.literal(true, { errorMap: () => ({ message: 'Debés aceptar la cláusula de no garantías' }) }),
});

type Values = z.infer<typeof Schema>;

export function BioLinkHabitatForm(props: { regionLabel?: string; onSuccess?: () => void }) {
  const [sending, setSending] = useState(false);

  const form = useForm<Values>({
    resolver: zodResolver(Schema),
    defaultValues: {
      assetType: 'espacio',
    },
    mode: 'onTouched',
  });

  async function onSubmit(values: Values) {
    try {
      setSending(true);

      const phone = normalizePhone(WHATSAPP_DESTINATION);
      const msg = formatLeadMessage({
        serviceLabel: 'BioLink Habitat & Mobility',
        name: `${values.contactName} (${values.company})`,
        email: values.contactEmail,
        whatsapp: values.contactWhatsApp,
        country: values.country,
        message: [
          `Empresa: ${values.company}`,
          `ID fiscal/CUIT: ${values.taxId}`,
          `Rol: ${values.contactRole}`,
          `Activo: ${values.assetType}`,
          `Ubicación: ${values.assetLocation}`,
          '',
          `Objetivo / contexto:`,
          values.objective,
          '',
          'Confirmaciones:',
          '- Acepto Protocolo de Ingreso.',
          '- Entiendo que no reemplaza ingeniería/arquitectura/mecánica ni mantenimiento.',
          '- Entiendo que no hay garantías de resultados económicos u operativos.',
        ].join('\n'),
        regionLabel: props.regionLabel,
      });

      const url = buildWhatsAppUrl(phone, msg);
      window.open(url, '_blank', 'noopener,noreferrer');
      toast.success('Listo. Abrimos WhatsApp con tu solicitud.');
      props.onSuccess?.();
      form.reset();
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Empresa">
          <Input {...form.register('company')} placeholder="Nombre legal" />
          <Err msg={form.formState.errors.company?.message} />
        </Field>
        <Field label="ID fiscal / CUIT">
          <Input {...form.register('taxId')} placeholder="CUIT / VAT / TAX ID" />
          <Err msg={form.formState.errors.taxId?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nombre de contacto">
          <Input {...form.register('contactName')} placeholder="Nombre" />
          <Err msg={form.formState.errors.contactName?.message} />
        </Field>
        <Field label="Rol">
          <Input {...form.register('contactRole')} placeholder="Director, Ops, RRHH..." />
          <Err msg={form.formState.errors.contactRole?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Email">
          <EmailInput
            value={form.watch('contactEmail') ?? ''}
            onChange={(v) => form.setValue('contactEmail', v, { shouldValidate: true, shouldDirty: true })}
            placeholder="tu@email.com"
          />
          <Err msg={form.formState.errors.contactEmail?.message} />
        </Field>
        <Field label="WhatsApp">
          <CountryPhoneInput
            value={form.watch('contactWhatsApp') ?? ''}
            onChange={(v) => form.setValue('contactWhatsApp', v, { shouldValidate: true, shouldDirty: true })}
            placeholder="Número"
            defaultCountry="AR"
          />
          <Err msg={form.formState.errors.contactWhatsApp?.message} />
        </Field>
        <Field label="País">
          <Input {...form.register('country')} placeholder="País" />
          <Err msg={form.formState.errors.country?.message} />
        </Field>
      </div>

      <Field label="Tipo de activo">
        <div className="flex flex-wrap gap-3 text-sm text-white/80">
          {(
            [
              { v: 'espacio', l: 'Espacio' },
              { v: 'vehiculo', l: 'Vehículo' },
              { v: 'maquinaria', l: 'Maquinaria' },
              { v: 'otro', l: 'Otro' },
            ] as const
          ).map((opt) => (
            <label key={opt.v} className="inline-flex items-center gap-2">
              <input type="radio" value={opt.v} {...form.register('assetType')} />
              {opt.l}
            </label>
          ))}
        </div>
        <Err msg={form.formState.errors.assetType?.message as any} />
      </Field>

      <Field label="Ubicación del activo">
        <Input {...form.register('assetLocation')} placeholder="Ciudad / País" />
        <Err msg={form.formState.errors.assetLocation?.message} />
      </Field>

      <Field label="Objetivo / contexto (mín. 5 líneas recomendadas)">
        <textarea
          {...form.register('objective')}
          className="min-h-[160px] w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-quantum-orange/40"
          placeholder="Contanos el activo, contexto operativo, limitaciones, y por qué están evaluando compatibilidad..."
        />
        <Err msg={form.formState.errors.objective?.message} />
      </Field>

      <div className="space-y-2 text-sm text-white/75">
        <label className="flex items-start gap-2">
          <input type="checkbox" {...form.register('acceptProtocol')} />
          <span>Acepto el Protocolo de Ingreso.</span>
        </label>
        <Err msg={form.formState.errors.acceptProtocol?.message} />

        <label className="flex items-start gap-2">
          <input type="checkbox" {...form.register('acceptNoGuarantees')} />
          <span>
            Entiendo que es un servicio intangible, sin garantías de resultados económicos u operativos, y no reemplaza ingeniería/arquitectura/mecánica.
          </span>
        </label>
        <Err msg={form.formState.errors.acceptNoGuarantees?.message} />
      </div>

      <Button type="submit" disabled={sending} className="w-full">
        {sending ? 'Preparando WhatsApp…' : 'Enviar por WhatsApp'}
      </Button>

      <p className="text-xs text-white/50">
        Al enviar, se abrirá WhatsApp con el mensaje listo para confirmar.
      </p>
    </form>
  );
}

function Field(props: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-white/60 mb-1">{props.label}</div>
      {props.children}
    </div>
  );
}

function Err(props: { msg?: string }) {
  if (!props.msg) return null;
  return <div className="mt-1 text-xs text-red-400">{props.msg}</div>;
}
