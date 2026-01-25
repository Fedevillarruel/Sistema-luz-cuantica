'use client';

import { useState } from 'react';
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

const formSchema = z.object({
  name: z.string().min(2, 'Nombre requerido (mínimo 2 caracteres)'),
  email: z.string().email('Email inválido'),
  country: z.string().min(2, 'País requerido'),
  whatsapp: z.string().min(6, 'WhatsApp requerido'),
  message: z.string().min(20, 'Por favor describe tu motivo (mínimo 20 caracteres)'),
  acceptProtocol: z.boolean().refine((val) => val === true, 'Debes aceptar el protocolo'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
  serviceLabel?: string;
  regionLabel?: string;
}

export function ContactForm({ onSuccess, serviceLabel = 'Evaluación Energética S.L.C®️', regionLabel }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      toast.success('Listo. Abrimos WhatsApp con tu solicitud', {
        description: 'Revisá el mensaje y enviá para confirmar.',
      });

      reset();
      onSuccess?.();
    } catch (error) {
      toast.error('No pudimos abrir WhatsApp', {
        description: 'Por favor, intentá nuevamente o desactivá el bloqueador de popups.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Nombre completo *
        </label>
        <Input {...register('name')} placeholder="Juan Pérez" />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email *
        </label>
        <EmailInput
          value={email}
          onChange={(v) => setValue('email', v, { shouldValidate: true, shouldDirty: true })}
          placeholder="tu@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
          País *
        </label>
        <Input {...register('country')} placeholder="Argentina" />
        {errors.country && <p className="mt-1 text-xs text-red-400">{errors.country.message}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
          WhatsApp (con código de país) *
        </label>
        <CountryPhoneInput
          value={whatsapp}
          onChange={(v) => setValue('whatsapp', v, { shouldValidate: true, shouldDirty: true })}
          placeholder="Número"
          defaultCountry="AR"
        />
        {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Motivo de consulta *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="flex w-full rounded-md border border-quantum-cyan/30 bg-quantum-dark px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-quantum-cyan focus:ring-offset-2 focus:ring-offset-quantum-darker"
          placeholder="Describe brevemente tu motivo de consulta..."
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
          Acepto el{' '}
          <button type="button" className="text-quantum-cyan hover:underline">
            Protocolo de Ingreso
          </button>{' '}
          y comprendo que la Evaluación no garantiza acceso automático a otros servicios. *
        </label>
      </div>
      {errors.acceptProtocol && <p className="text-xs text-red-400">{errors.acceptProtocol.message}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Los campos marcados con * son obligatorios. No reembolsable una vez abonado.
      </p>
    </form>
  );
}
