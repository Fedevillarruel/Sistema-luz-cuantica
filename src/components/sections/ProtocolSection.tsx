'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { Shield, FileText } from 'lucide-react';
import { useState } from 'react';

const PROTOCOL_POINTS = [
  {
    q: '1) Evaluación como puerta de acceso',
    a: 'La Evaluación Energética define si el caso es compatible con el sistema y qué herramienta (si corresponde) es coherente. No es un "sí" automático para otros servicios.',
  },
  {
    q: '2) Derecho de admisión',
    a: 'El sistema se reserva el derecho de admisión y continuidad. Si el caso no es compatible, se comunica y se finaliza el proceso.',
  },
  {
    q: '3) No hay garantías ni promesas',
    a: 'No se ofrecen garantías, resultados asegurados ni afirmaciones clínicas. Se trabaja con marcos energéticos e informacionales con límites explícitos.',
  },
  {
    q: '4) Confidencialidad y conducta',
    a: 'Se exige respeto, confidencialidad y conducta adecuada. Cualquier intento de manipulación, hostigamiento o invasión de límites implica cierre inmediato.',
  },
  {
    q: '5) Pagos y no reembolso',
    a: 'Los pagos son definitivos y no reembolsables por tratarse de servicios intangibles y reserva de agenda/recursos. Se informan medios por región.',
  },
];

const FULL_PROTOCOL = `Protocolo de Ingreso — Sistema Luz Cuántica®️

1) Marco del servicio
- Se trabaja sobre planos energéticos e informacionales.
- No es un servicio médico, psicológico, psiquiátrico ni veterinario.
- No se realizan promesas, garantías ni afirmaciones clínicas.

2) Evaluación
- La Evaluación es el punto de partida.
- Define compatibilidad y ruta posible.
- No implica acceso automático a herramientas avanzadas.

3) Derecho de admisión
- El sistema se reserva el derecho de admisión y continuidad.

4) Conducta
- Respeto, límites claros, confidencialidad.

5) Pagos
- Servicio intangible.
- Pagos definitivos y no reembolsables.
`;

export function ProtocolSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="protocolo" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
            <Shield className="h-4 w-4 text-quantum-gold" />
            Protocolo
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Protocolo de ingreso</h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">
            Un marco explícito para evitar confusiones: límites, criterios, conducta y condiciones. Se debe aceptar antes de iniciar cualquier proceso.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <Accordion type="single" collapsible>
              {PROTOCOL_POINTS.map((p) => (
                <AccordionItem key={p.q} value={p.q}>
                  <AccordionTrigger>{p.q}</AccordionTrigger>
                  <AccordionContent>{p.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <FileText className="h-4 w-4 text-quantum-orange" />
              Lectura completa
            </div>
            <p className="mt-3 text-sm text-white/70">
              Antes de enviar cualquier formulario se solicita aceptación explícita del protocolo. Podés leerlo completo aquí.
            </p>
            <div className="mt-5">
              <Button onClick={() => setOpen(true)}>
                Ver protocolo completo
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/50">
              Este texto es informativo y no constituye asesoramiento legal.
            </p>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Protocolo de ingreso</DialogTitle>
          </DialogHeader>
          <div className="max-h-[70vh] overflow-auto rounded-lg border border-white/10 bg-black/30 p-4">
            <pre className="whitespace-pre-wrap text-sm text-white/80 leading-relaxed">{FULL_PROTOCOL}</pre>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
