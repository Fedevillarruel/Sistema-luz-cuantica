'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { EmailInput } from '@/components/ui/EmailInput';
import { CountryPhoneInput } from '@/components/ui/CountryPhoneInput';
import { WHATSAPP_DESTINATION } from '@/config/whatsapp';
import { buildWhatsAppUrl, formatLeadMessage, normalizePhone } from '@/lib/whatsapp';
import { useLanguage } from '@/hooks/useLanguage';
import type { Translations } from '@/lib/i18n';

function createFormSchema(t: Translations) {
  return z.object({
    name: z.string().min(2, t.forms.nameMinLength),
    email: z.string().email(t.forms.emailInvalid),
    country: z.string().min(2, t.forms.countryMinLength),
    whatsapp: z.string().min(6, t.forms.whatsappMinLength),
    message: z.string().min(20, t.forms.messageMinLength),
    acceptProtocol: z.boolean().refine((val) => val === true, t.forms.mustAcceptProtocol),
  });
}

type FormData = {
  name: string;
  email: string;
  country: string;
  whatsapp: string;
  message: string;
  acceptProtocol: boolean;
};

interface ContactFormProps {
  onSuccess?: () => void;
  serviceLabel?: string;
  regionLabel?: string;
}

export function ContactForm({ onSuccess, serviceLabel = 'Evaluación Energética S.L.C', regionLabel }: ContactFormProps) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = useMemo(() => createFormSchema(t), [t]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const email = watch('email') ?? '';
  const whatsapp = watch('whatsapp') ?? '';

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const waMessage = formatLeadMessage({
        serviceLabel,
        name: data.name,
        email: data.email,
        country: data.country,
        whatsapp: data.whatsapp,
        message: data.message,
        regionLabel,
      });

      const url = buildWhatsAppUrl(normalizePhone(WHATSAPP_DESTINATION), waMessage);
      window.open(url, '_blank', 'noopener,noreferrer');

      toast.success(t.forms.successTitle, {
        description: t.forms.successDescription,
      });

      reset();
      onSuccess?.();
    } catch (error) {
      toast.error(t.forms.errorTitle, {
        description: t.forms.errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          {t.forms.nameLabel} {t.forms.required}
        </label>
        <Input {...register('name')} placeholder={t.forms.namePlaceholder} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          {t.forms.emailLabel} {t.forms.required}
        </label>
        <EmailInput
          value={email}
          onChange={(v) => setValue('email', v, { shouldValidate: true, shouldDirty: true })}
          placeholder={t.forms.emailPlaceholder}
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
          {t.forms.countryLabel} {t.forms.required}
        </label>
        <Input {...register('country')} placeholder={t.forms.countryPlaceholder} />
        {errors.country && <p className="mt-1 text-xs text-red-400">{errors.country.message}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
          {t.forms.whatsappLabel} {t.forms.required}
        </label>
        <CountryPhoneInput
          value={whatsapp}
          onChange={(v) => setValue('whatsapp', v, { shouldValidate: true, shouldDirty: true })}
          placeholder={t.forms.whatsappPlaceholder}
          defaultCountry="AR"
        />
        {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          {t.forms.messageLabel} {t.forms.required}
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="flex w-full rounded-md border border-quantum-cyan/30 bg-quantum-dark px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-quantum-cyan focus:ring-offset-2 focus:ring-offset-quantum-darker"
          placeholder={t.forms.messagePlaceholder}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-2">
        <input
          {...register('acceptProtocol')}
          type="checkbox"
          className="mt-1 rounded border-quantum-cyan/30 bg-quantum-dark text-quantum-cyan focus:ring-quantum-cyan"
        />
        <label className="text-sm text-gray-300">
          {t.forms.acceptProtocol} {t.forms.required}
        </label>
      </div>
      {errors.acceptProtocol && <p className="text-xs text-red-400">{errors.acceptProtocol.message}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t.forms.submittingButton : t.forms.submitButton}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        {t.forms.whatsappNote}
      </p>
    </form>
  );
}
