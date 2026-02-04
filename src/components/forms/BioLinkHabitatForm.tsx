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
import { useLanguage } from '@/hooks/useLanguage';

function createSchema(t: any) {
  return z.object({
    company: z.string().min(2, t.forms.required),
    taxId: z.string().min(4, t.forms.required),
    contactName: z.string().min(2, t.forms.nameMinLength),
    contactRole: z.string().min(2, t.forms.required),
    contactEmail: z.string().email(t.forms.emailInvalid),
    contactWhatsApp: z.string().min(6, t.forms.whatsappMinLength),
    country: z.string().min(2, t.forms.countryMinLength),

    assetType: z.enum(['espacio', 'vehiculo', 'maquinaria', 'otro']),
    assetLocation: z.string().min(3, t.forms.required),
    objective: z.string().min(30, t.bioLinkHabitat.objectiveMinLength),

    acceptProtocol: z.literal(true, { errorMap: () => ({ message: t.forms.mustAcceptProtocol }) }),
    acceptNoGuarantees: z.literal(true, { errorMap: () => ({ message: t.forms.mustAcceptProtocol }) }),
  });
}

export function BioLinkHabitatForm(props: { regionLabel?: string; onSuccess?: () => void }) {
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();

  const Schema = useMemo(() => createSchema(t), [t]);
  type Values = z.infer<typeof Schema>;

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
      toast.success(t.bioLinkHabitat.successMessage);
      props.onSuccess?.();
      form.reset();
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.bioLinkHabitat.company}>
          <Input {...form.register('company')} placeholder={t.bioLinkHabitat.companyPlaceholder} />
          <Err msg={form.formState.errors.company?.message} />
        </Field>
        <Field label={t.bioLinkHabitat.taxId}>
          <Input {...form.register('taxId')} placeholder={t.bioLinkHabitat.taxIdPlaceholder} />
          <Err msg={form.formState.errors.taxId?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.bioLinkHabitat.contactName}>
          <Input {...form.register('contactName')} placeholder={t.forms.namePlaceholder} />
          <Err msg={form.formState.errors.contactName?.message} />
        </Field>
        <Field label={t.bioLinkHabitat.contactRole}>
          <Input {...form.register('contactRole')} placeholder={t.bioLinkHabitat.rolePlaceholder} />
          <Err msg={form.formState.errors.contactRole?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label={t.bioLinkHabitat.contactEmail}>
          <EmailInput
            value={form.watch('contactEmail') ?? ''}
            onChange={(v) => form.setValue('contactEmail', v, { shouldValidate: true, shouldDirty: true })}
            placeholder={t.forms.emailPlaceholder}
          />
          <Err msg={form.formState.errors.contactEmail?.message} />
        </Field>
        <Field label={t.bioLinkHabitat.contactWhatsApp}>
          <CountryPhoneInput
            value={form.watch('contactWhatsApp') ?? ''}
            onChange={(v) => form.setValue('contactWhatsApp', v, { shouldValidate: true, shouldDirty: true })}
            placeholder={t.forms.whatsappPlaceholder}
            defaultCountry="AR"
          />
          <Err msg={form.formState.errors.contactWhatsApp?.message} />
        </Field>
        <Field label={t.forms.countryLabel}>
          <Input {...form.register('country')} placeholder={t.forms.countryPlaceholder} />
          <Err msg={form.formState.errors.country?.message} />
        </Field>
      </div>

      <Field label={t.bioLinkHabitat.assetType}>
        <div className="flex flex-wrap gap-3 text-sm text-white/80">
          {(
            [
              { v: 'espacio', l: t.bioLinkHabitat.assetTypeSpace },
              { v: 'vehiculo', l: t.bioLinkHabitat.assetTypeVehicle },
              { v: 'maquinaria', l: t.bioLinkHabitat.assetTypeMachinery },
              { v: 'otro', l: t.bioLinkHabitat.assetTypeOther },
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

      <Field label={t.bioLinkHabitat.assetLocation}>
        <Input {...form.register('assetLocation')} placeholder={t.bioLinkHabitat.assetLocationPlaceholder} />
        <Err msg={form.formState.errors.assetLocation?.message} />
      </Field>

      <Field label={t.bioLinkHabitat.objective}>
        <textarea
          {...form.register('objective')}
          className="min-h-[160px] w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-quantum-orange/40"
          placeholder={t.bioLinkHabitat.objectivePlaceholder}
        />
        <Err msg={form.formState.errors.objective?.message} />
      </Field>

      <div className="space-y-2 text-sm text-white/75">
        <label className="flex items-start gap-2">
          <input type="checkbox" {...form.register('acceptProtocol')} />
          <span>{t.bioLinkHabitat.protocolText}</span>
        </label>
        <Err msg={form.formState.errors.acceptProtocol?.message} />

        <label className="flex items-start gap-2">
          <input type="checkbox" {...form.register('acceptNoGuarantees')} />
          <span>{t.bioLinkHabitat.noGuaranteesText}</span>
        </label>
        <Err msg={form.formState.errors.acceptNoGuarantees?.message} />
      </div>

      <Button type="submit" disabled={sending} className="w-full">
        {sending ? t.bioLinkHabitat.sendingButton : t.bioLinkHabitat.sendButton}
      </Button>

      <p className="text-xs text-white/50">
        {t.forms.whatsappNote}
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
