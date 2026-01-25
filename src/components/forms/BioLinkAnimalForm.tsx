'use client';

import { useMemo, useState } from 'react';
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
  responsibleName: z.string().min(2, 'Nombre requerido'),
  responsibleEmail: z.string().email('Email inválido'),
  responsibleWhatsApp: z.string().min(6, 'WhatsApp requerido'),
  country: z.string().min(2, 'País requerido'),

  animalName: z.string().min(2, 'Nombre del animal requerido'),
  species: z.string().min(2, 'Especie requerida'),
  age: z.string().min(1, 'Edad requerida'),

  veterinaryStatus: z.enum(['si', 'no']),
  context: z.string().min(30, 'Contá el contexto (mín. 30 caracteres)'),

  acceptProtocol: z.literal(true, { errorMap: () => ({ message: 'Debés aceptar el protocolo' }) }),
  acceptDisclaimer: z.literal(true, { errorMap: () => ({ message: 'Debés aceptar el disclaimer' }) }),
});

type Values = z.infer<typeof Schema>;

export function BioLinkAnimalForm(props: { regionLabel?: string; onSuccess?: () => void }) {
  const [sending, setSending] = useState(false);

  const form = useForm<Values>({
    resolver: zodResolver(Schema),
    defaultValues: {
      veterinaryStatus: 'si',
    },
    mode: 'onTouched',
  });

  const protocolText = useMemo(
    () =>
      'Acepto el Protocolo de Ingreso y confirmo que BioLink Animal no reemplaza veterinaria.',
    []
  );

  async function onSubmit(values: Values) {
    try {
      setSending(true);

      const phone = normalizePhone(WHATSAPP_DESTINATION);
      const msg = [
        formatLeadMessage({
          serviceLabel: 'BioLink Animal',
          name: values.responsibleName,
          email: values.responsibleEmail,
          whatsapp: values.responsibleWhatsApp,
          country: values.country,
          message: [
            `Animal: ${values.animalName}`,
            `Especie: ${values.species}`,
            `Edad: ${values.age}`,
            `Supervisión veterinaria activa: ${values.veterinaryStatus === 'si' ? 'Sí' : 'No'}`,
            '',
            values.context,
          ].join('\n'),
          regionLabel: props.regionLabel,
        }),
        '',
        `Confirmación: ${protocolText}`,
      ].join('\n');

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
        <Field label="Nombre y apellido (responsable)">
          <Input {...form.register('responsibleName')} placeholder="Nombre" />
          <Err msg={form.formState.errors.responsibleName?.message} />
        </Field>
        <Field label="País">
          <Input {...form.register('country')} placeholder="País" />
          <Err msg={form.formState.errors.country?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email">
          <EmailInput
            value={form.watch('responsibleEmail') ?? ''}
            onChange={(v) => form.setValue('responsibleEmail', v, { shouldValidate: true, shouldDirty: true })}
            placeholder="tu@email.com"
          />
          <Err msg={form.formState.errors.responsibleEmail?.message} />
        </Field>
        <Field label="WhatsApp">
          <CountryPhoneInput
            value={form.watch('responsibleWhatsApp') ?? ''}
            onChange={(v) => form.setValue('responsibleWhatsApp', v, { shouldValidate: true, shouldDirty: true })}
            placeholder="Número"
            defaultCountry="AR"
          />
          <Err msg={form.formState.errors.responsibleWhatsApp?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Nombre del animal">
          <Input {...form.register('animalName')} placeholder="Nombre" />
          <Err msg={form.formState.errors.animalName?.message} />
        </Field>
        <Field label="Especie">
          <Input {...form.register('species')} placeholder="Perro, gato, etc." />
          <Err msg={form.formState.errors.species?.message} />
        </Field>
        <Field label="Edad">
          <Input {...form.register('age')} placeholder="Ej: 5 años" />
          <Err msg={form.formState.errors.age?.message} />
        </Field>
      </div>

      <Field label="¿Está bajo supervisión veterinaria activa?">
        <div className="flex flex-wrap gap-3 text-sm text-white/80">
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="si" {...form.register('veterinaryStatus')} />
            Sí
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="no" {...form.register('veterinaryStatus')} />
            No
          </label>
        </div>
        <Err msg={form.formState.errors.veterinaryStatus?.message as any} />
      </Field>

      <Field label="Contexto (mín. 5 líneas recomendadas)">
        <textarea
          {...form.register('context')}
          className="min-h-[140px] w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-quantum-orange/40"
          placeholder="Contanos situación, antecedentes, contexto actual, y qué querés observar en el proceso..."
        />
        <Err msg={form.formState.errors.context?.message} />
      </Field>

      <div className="space-y-2 text-sm text-white/75">
        <label className="flex items-start gap-2">
          <input type="checkbox" {...form.register('acceptProtocol')} />
          <span>{protocolText}</span>
        </label>
        <Err msg={form.formState.errors.acceptProtocol?.message} />

        <label className="flex items-start gap-2">
          <input type="checkbox" {...form.register('acceptDisclaimer')} />
          <span>
            Entiendo que este servicio no reemplaza atención veterinaria ni implica diagnóstico o tratamiento.
          </span>
        </label>
        <Err msg={form.formState.errors.acceptDisclaimer?.message} />
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
