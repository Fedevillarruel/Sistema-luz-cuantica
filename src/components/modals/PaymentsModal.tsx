'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { PAYMENT_METHODS } from '@/config/payment';
import type { Region } from '@/types';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
  toast.success('Copiado');
}

export function PaymentsModal(props: { open: boolean; onOpenChange: (v: boolean) => void; region: Region }) {
  const methods = PAYMENT_METHODS[props.region] ?? [];

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Medios de pago ({props.region})</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {methods.length ? (
            methods.map((m) => (
              <div key={m.type} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white">{m.label}</div>
                    {m.fields?.length ? (
                      <div className="mt-2 space-y-1 text-sm text-white/70">
                        {m.fields.map((f) => (
                          <div key={f.label} className="flex items-center justify-between gap-3">
                            <span className="truncate">
                              <span className="text-white/60">{f.label}:</span> {f.value}
                            </span>
                            {f.copyable ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copy(f.value)}
                                className="text-white/70 hover:text-white"
                              >
                                <Copy className="h-4 w-4" />
                                Copiar
                              </Button>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {m.notes?.length ? (
                      <div className="mt-3 space-y-1 text-xs text-white/55">
                        {m.notes.map((n) => (
                          <div key={n}>• {n}</div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
              No hay métodos configurados para esta región todavía.
            </div>
          )}

          <div className="rounded-2xl border border-quantum-gold/25 bg-quantum-gold/10 p-4 text-xs text-white/80">
            Pagos: definitivos y no reembolsables. El envío de comprobante es requerido para confirmar agenda.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
