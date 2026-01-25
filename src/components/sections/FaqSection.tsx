'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = [
  {
    q: '¿Esto reemplaza medicina, psicología o veterinaria?',
    a: 'No. Es un marco energético e informacional. No reemplaza ni sustituye atención médica, psicológica, psiquiátrica o veterinaria.',
  },
  {
    q: '¿Hay garantías o resultados asegurados?',
    a: 'No. No se ofrecen garantías ni promesas. Cada caso es distinto y opera dentro de límites explícitos.',
  },
  {
    q: '¿Por qué la Evaluación es el punto de partida?',
    a: 'Porque define compatibilidad, alcance y herramienta coherente. No es un trámite: es el filtro técnico del sistema.',
  },
  {
    q: '¿Qué servicio puedo comprar directamente?',
    a: 'Reiki Energy Quantum es la única herramienta que puede reservarse sin evaluación previa obligatoria. El resto requiere evaluación y/o aprobación.',
  },
  {
    q: '¿Los pagos son reembolsables?',
    a: 'No. Los pagos son definitivos y no reembolsables por tratarse de servicios intangibles y reserva de agenda/recursos.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 bg-quantum-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
            <HelpCircle className="h-4 w-4 text-quantum-cyan" />
            FAQ
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Respuestas cortas y explícitas, para que puedas decidir con claridad.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 sm:p-6">
          <Accordion type="single" collapsible>
            {FAQ.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
