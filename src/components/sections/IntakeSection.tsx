'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { BioLinkAnimalForm } from '@/components/forms/BioLinkAnimalForm';
import { BioLinkHabitatForm } from '@/components/forms/BioLinkHabitatForm';
import { useState } from 'react';
import { ClipboardList } from 'lucide-react';

export function IntakeSection(props: {
  regionLabel: string;
  onOpenEvaluation: () => void;
}) {
  const [animalOpen, setAnimalOpen] = useState(false);
  const [habitatOpen, setHabitatOpen] = useState(false);

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
              <ClipboardList className="h-4 w-4 text-quantum-orange" />
              Formularios
            </div>
            <h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Ingresos especializados
            </h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Para BioLink Animal y BioLink Habitat & Mobility hay formularios específicos. La Evaluación sigue siendo el punto de partida para el resto del sistema.
            </p>

            <div className="mt-5 space-y-3">
              <Button onClick={props.onOpenEvaluation} className="w-full">
                Solicitar Evaluación
              </Button>
              <Button variant="outline" onClick={() => setAnimalOpen(true)} className="w-full">
                BioLink Animal — Formulario
              </Button>
              <Button variant="outline" onClick={() => setHabitatOpen(true)} className="w-full">
                BioLink Habitat & Mobility — Formulario
              </Button>
            </div>

            <p className="mt-5 text-xs text-white/50">
              Al enviar, se abrirá WhatsApp con el mensaje prearmado para confirmar.
            </p>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-white">Reglas rápidas</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc pl-5">
              <li>Sin promesas, sin garantías, sin afirmaciones clínicas.</li>
              <li>Servicio intangible: pagos definitivos y no reembolsables.</li>
              <li>Derecho de admisión reservado.</li>
              <li>Para animales: supervisión veterinaria activa obligatoria.</li>
              <li>Para corporate: no reemplaza ingeniería/arquitectura/mecánica.</li>
            </ul>
          </div>
        </div>
      </div>

      <Dialog open={animalOpen} onOpenChange={setAnimalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>BioLink Animal — Formulario de ingreso</DialogTitle>
          </DialogHeader>
          <BioLinkAnimalForm regionLabel={props.regionLabel} onSuccess={() => setAnimalOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={habitatOpen} onOpenChange={setHabitatOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>BioLink Habitat & Mobility — Formulario de compatibilidad</DialogTitle>
          </DialogHeader>
          <BioLinkHabitatForm regionLabel={props.regionLabel} onSuccess={() => setHabitatOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
}
