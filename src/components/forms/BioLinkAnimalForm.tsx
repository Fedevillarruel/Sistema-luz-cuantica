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
    responsibleName: z.string().min(2, t.bioLinkAnimal.responsibleNameRequired),
    responsibleEmail: z.string().email(t.bioLinkAnimal.responsibleEmailInvalid),
    responsibleWhatsApp: z.string().min(6, t.bioLinkAnimal.responsibleWhatsAppRequired),
    country: z.string().min(2, t.bioLinkAnimal.countryRequired),

    animalName: z.string().min(2, t.bioLinkAnimal.animalNameRequired),
    species: z.string().min(2, t.bioLinkAnimal.speciesRequired),
    age: z.string().min(1, t.bioLinkAnimal.ageRequired),

    veterinaryStatus: z.enum(['si', 'no']),
    context: z.string().min(30, t.bioLinkAnimal.contextMinLength),

    acceptProtocol: z.literal(true, { errorMap: () => ({ message: t.bioLinkAnimal.mustAcceptProtocol }) }),
    acceptDisclaimer: z.literal(true, { errorMap: () => ({ message: t.bioLinkAnimal.mustAcceptDisclaimer }) }),
  });
}

export function BioLinkAnimalForm(props: { regionLabel?: string; onSuccess?: () => void }) {
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();

  const Schema = useMemo(() => createSchema(t), [t]);
  type Values = z.infer<typeof Schema>;

  const form = useForm<Values>({
    resolver: zodResolver(Schema),
    defaultValues: {
      veterinaryStatus: 'si',
    },
    mode: 'onTouched',
  });

  const protocolText = useMemo(
    () => t.bioLinkAnimal.protocolText,
    [t]
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
      toast.success(t.bioLinkAnimal.successMessage);
      props.onSuccess?.();
      form.reset();
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.bioLinkAnimal.responsibleName}>
          <Input {...form.register('responsibleName')} placeholder={t.bioLinkAnimal.responsibleName} />
          <Err msg={form.formState.errors.responsibleName?.message} />
        </Field>
        <Field label={t.forms.countryLabel}>
          <Input {...form.register('country')} placeholder={t.forms.countryPlaceholder} />
          <Err msg={form.formState.errors.country?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.bioLinkAnimal.responsibleEmail}>
          <EmailInput
            value={form.watch('responsibleEmail') ?? ''}
            onChange={(v) => form.setValue('responsibleEmail', v, { shouldValidate: true, shouldDirty: true })}
            placeholder={t.forms.emailPlaceholder}
          />
          <Err msg={form.formState.errors.responsibleEmail?.message} />
        </Field>
        <Field label={t.bioLinkAnimal.responsibleWhatsApp}>
          <CountryPhoneInput
            value={form.watch('responsibleWhatsApp') ?? ''}
            onChange={(v) => form.setValue('responsibleWhatsApp', v, { shouldValidate: true, shouldDirty: true })}
            placeholder={t.forms.whatsappPlaceholder}
            defaultCountry="AR"
          />
          <Err msg={form.formState.errors.responsibleWhatsApp?.message} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label={t.bioLinkAnimal.animalName}>
          <Input {...form.register('animalName')} placeholder={t.bioLinkAnimal.animalNamePlaceholder} />
          <Err msg={form.formState.errors.animalName?.message} />
        </Field>
        <Field label={t.bioLinkAnimal.species}>
          <Input {...form.register('species')} placeholder={t.bioLinkAnimal.speciesPlaceholder} />
          <Err msg={form.formState.errors.species?.message} />
        </Field>
        <Field label={t.bioLinkAnimal.age}>
          <Input {...form.register('age')} placeholder={t.bioLinkAnimal.agePlaceholder} />
          <Err msg={form.formState.errors.age?.message} />
        </Field>
      </div>

      <Field label={t.bioLinkAnimal.veterinaryStatus}>
        <div className="flex flex-wrap gap-3 text-sm text-white/80">
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="si" {...form.register('veterinaryStatus')} />
            {t.bioLinkAnimal.veterinaryYes}
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="no" {...form.register('veterinaryStatus')} />
            {t.bioLinkAnimal.veterinaryNo}
          </label>
        </div>
        <Err msg={form.formState.errors.veterinaryStatus?.message as any} />
      </Field>

      <Field label={t.bioLinkAnimal.context}>
        <textarea
          {...form.register('context')}
          className="min-h-[140px] w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-quantum-orange/40"
          placeholder={t.bioLinkAnimal.contextPlaceholder}
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
          <span>{t.bioLinkAnimal.disclaimerText}</span>
        </label>
        <Err msg={form.formState.errors.acceptDisclaimer?.message} />
      </div>

      <Button type="submit" disabled={sending} className="w-full">
        {sending ? t.bioLinkAnimal.sendingButton : t.bioLinkAnimal.sendButton}
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
