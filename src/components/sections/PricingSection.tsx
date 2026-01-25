'use client';

import type { Region } from '@/types';
import { Button } from '@/components/ui/Button';
import { CreditCard, MessageCircle, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/hooks/useLanguage';

export function PricingSection(props: {
  region: Region;
  currency: string;
  regionName: string;
  onOpenPayments: () => void;
}) {
  const { currency } = props;
  const { t } = useLanguage();

  function copyRegion() {
    navigator.clipboard.writeText(`${props.regionName} (${currency})`).then(
      () => toast.success(t.common.copied),
      () => toast.error(t.common.error)
    );
  }

  return (
    <section id="precios" className="relative py-20 bg-quantum-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
              <CreditCard className="h-4 w-4 text-quantum-orange" />
              {t.pricing.subtitle}
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {t.pricing.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl">
              {t.pricing.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={props.onOpenPayments}>
              {t.pricing.viewPaymentMethods}
            </Button>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs text-white/60 flex items-start gap-3">
          <ShieldCheck className="h-4 w-4 text-quantum-gold mt-0.5" />
          <p>
            {t.services.accessNote}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <div className="text-sm font-semibold text-white">{t.pricing.importantNotes}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
              <li>{t.pricing.note1}</li>
              <li>{t.pricing.note2}</li>
              <li>{t.pricing.note3}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm font-semibold text-white">Monto</div>
            <p className="mt-3 text-sm text-white/70">
              <span className="text-white">Precio a confirmar tras evaluación</span> (cuando aplique) o al momento de reservar.
              El monto se comunica por WhatsApp junto con el medio de pago recomendado para tu región.
            </p>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-xs text-white/60">
              Tip: copiá tu región ({props.regionName} / {currency}) para agilizar la confirmación.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <div className="text-sm font-semibold text-white">Medios de pago</div>
            <p className="mt-3 text-sm text-white/70">
              Transferencia según región (ARS / USD / EUR). Podés ver los datos bancarios en el modal.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button onClick={props.onOpenPayments}>Ver datos bancarios</Button>
              <Button variant="outline" onClick={copyRegion}>
                <MessageCircle className="h-4 w-4" />
                Copiar región
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
