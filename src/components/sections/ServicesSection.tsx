'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { SERVICES } from '@/config/services';
import type { Region, Service } from '@/types';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon, ShieldAlert, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// Mapeo de servicios a imágenes
const SERVICE_IMAGES: Record<string, string> = {
  'evaluacion-energetica': '/energy-evaluacion.webp',
  'reiki-energy-quantum': '/reiki-energy-quantum.webp',
  'constelaciones-familiares': '/constelaciones-familiares.webp',
  'genetic-quanty': '/genetic-quanty.webp',
  'biolink-animal': '/biolink-animal.webp',
  'biolink-habitat': '/biolink-habitat-mobility.webp',
  'reordenamiento-coherencia': '/coherencia-energetica.webp',
  'advanced-quantum-research': '/advenced-quantum.webp',
};

function categoryLabel(category: Service['category']): string {
  switch (category) {
    case 'personal':
      return 'Personal';
    case 'animal':
      return 'BioLink Animal';
    case 'corporate':
      return 'Corporate';
    case 'research':
      return 'Research';
    default:
      return 'Servicios';
  }
}

export function ServicesSection(props: {
  region: Region;
  currency: string;
  onRequestEvaluation: () => void;
  onRequestBioLinkAnimal: () => void;
  onRequestBioLinkHabitat: () => void;
}) {
  const { region } = props;
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Service | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const featured = useMemo(() => {
    const list = [...SERVICES];
    list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return list;
  }, []);

  function openService(s: Service) {
    setActive(s);
  setCarouselIndex(0);
    setOpen(true);
  }

  function handleCTA(s: Service) {
    if (s.id === 'reiki-energy-quantum') {
      // Compra directa permitida.
      props.onRequestEvaluation();
      return;
    }

    if (s.id === 'biolink-animal') {
      props.onRequestBioLinkAnimal();
      return;
    }

    if (s.id === 'biolink-habitat') {
      props.onRequestBioLinkHabitat();
      return;
    }

    // Todo lo demás: evaluación como puerta de entrada.
    props.onRequestEvaluation();
  }

  return (
    <section id="servicios" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
            <Sparkles className="h-4 w-4 text-quantum-gold" />
            {t.services.sectionSubtitle}
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            {t.services.sectionTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/70 leading-relaxed">
            {t.services.sectionDescription}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s) => {
            const priceLabel = s.requiresEvaluation
              ? t.services.priceConfirmEvaluation
              : t.services.priceConfirmWhatsApp;

            return (
              <div
                key={s.id}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden"
              >
                <ServiceMediaStrip service={s} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-white/50">{categoryLabel(s.category)}</div>
                      <h3 className="mt-1 text-lg font-semibold text-white leading-snug">{s.name}</h3>
                      <p className="mt-2 text-sm text-white/70">{s.tagline}</p>
                    </div>
                    {s.featured ? (
                      <div className="shrink-0 rounded-full border border-quantum-orange/25 bg-quantum-orange/10 px-3 py-1 text-[11px] text-quantum-orange">
                        {t.services.featured}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs text-white/50">{t.services.amount}</div>
                    <div className="mt-1 flex items-baseline justify-between gap-3">
                      <div className="text-sm font-semibold text-white">{priceLabel}</div>
                      <div className="text-xs text-white/50">{region}</div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button variant="outline" onClick={() => openService(s)}>
                      {t.services.viewDetails}
                    </Button>
                    <Button onClick={() => handleCTA(s)}>
                      {s.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {s.requiresEvaluation && s.id !== 'biolink-animal' && s.id !== 'biolink-habitat' ? (
                    <div className="mt-4 flex items-start gap-2 text-xs text-white/55">
                      <ShieldAlert className="h-4 w-4 text-quantum-gold mt-0.5" />
                      <p>
                        {t.services.accessNote}
                      </p>
                    </div>
                  ) : null}
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-quantum-purple/15 blur-3xl" />
                  <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-quantum-orange/10 blur-3xl" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
          <p>
            Nota: Los servicios no sustituyen atención médica, psicológica o veterinaria. No se realizan afirmaciones clínicas ni promesas de resultados.
          </p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{active?.name ?? 'Detalle del servicio'}</DialogTitle>
          </DialogHeader>

          {active ? (
            <div className="space-y-5">
              <ServiceCarousel
                service={active}
                index={carouselIndex}
                onPrev={() => setCarouselIndex((v) => Math.max(0, v - 1))}
                onNext={() => setCarouselIndex((v) => Math.min(getCarouselSlides(active).length - 1, v + 1))}
              />

              <p className="text-white/70">{active.description}</p>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/50">Incluye</div>
                <ul className="mt-3 space-y-2 text-sm text-white/75 list-disc pl-5">
                  {active.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              {active.restrictions?.length ? (
                <div className="rounded-xl border border-quantum-gold/25 bg-quantum-gold/10 p-4">
                  <div className="text-xs text-quantum-gold">Restricciones / notas</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
                    {active.restrictions.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3">
                <Button onClick={() => active && handleCTA(active)}>
                  {active.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cerrar
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function getCarouselSlides(service: Service): Array<{ title: string; subtitle: string }> {
  switch (service.id) {
    case 'evaluacion-energetica':
      return [
        { title: 'Evaluación', subtitle: 'Punto de partida del sistema' },
        { title: 'Criterios', subtitle: 'Compatibilidad y trazado de protocolo' },
        { title: 'Reserva', subtitle: 'Confirmación por WhatsApp' },
      ];
    case 'reiki-energy-quantum':
      return [
        { title: 'Reiki Energy Quantum', subtitle: 'Reserva directa (sin evaluación obligatoria)' },
        { title: 'Formato', subtitle: 'Virtual o presencial' },
        { title: 'Protocolo', subtitle: '3 a 5 sesiones según el caso' },
      ];
    case 'biolink-animal':
      return [
        { title: 'BioLink Animal', subtitle: 'Lectura informacional (no veterinaria)' },
        { title: 'Requisito', subtitle: 'Supervisión veterinaria activa' },
        { title: 'Ingreso', subtitle: 'Formulario obligatorio' },
      ];
    case 'biolink-habitat':
      return [
        { title: 'BioLink Habitat', subtitle: 'Espacios, vehículos y activos' },
        { title: 'Alcance', subtitle: 'No reemplaza ingeniería/mantenimiento' },
        { title: 'Ingreso', subtitle: 'Formulario de compatibilidad' },
      ];
    default:
      return [
        { title: service.name, subtitle: service.tagline },
        { title: 'Acceso', subtitle: service.requiresEvaluation ? 'Requiere evaluación previa' : 'Confirmación por WhatsApp' },
        { title: 'Protocolo', subtitle: 'Se define tras evaluación y disponibilidad' },
      ];
  }
}

function ServiceMediaStrip(props: { service: Service }) {
  const slides = getCarouselSlides(props.service);
  const imageSrc = SERVICE_IMAGES[props.service.id] || '/logo.webp';
  
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-black">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={props.service.name}
        fill
        className="object-cover opacity-80"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs text-white/80 font-medium">{props.service.name}</div>
            <div className="truncate text-xs text-white/60">{slides[0]?.subtitle}</div>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur-sm">
            <ImageIcon className="h-5 w-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCarousel(props: {
  service: Service;
  index: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const slides = getCarouselSlides(props.service);
  const canPrev = props.index > 0;
  const canNext = props.index < slides.length - 1;
  const active = slides[props.index] ?? slides[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <div className="relative aspect-video w-full bg-[radial-gradient(950px_520px_at_30%_25%,rgba(124,58,237,0.42),transparent_60%),radial-gradient(800px_500px_at_70%_70%,rgba(59,130,246,0.28),transparent_65%),radial-gradient(650px_420px_at_90%_15%,rgba(251,146,60,0.18),transparent_60%)]">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center px-6">
            <div className="text-xs text-white/60">Slide {props.index + 1} / {slides.length}</div>
            <div className="mt-1 text-xl font-semibold text-white">{active?.title}</div>
            <div className="mt-1 text-sm text-white/70">{active?.subtitle}</div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={props.onPrev}
              disabled={!canPrev}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs text-white/80 disabled:opacity-40"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={
                    'h-1.5 w-6 rounded-full border transition ' +
                    (i === props.index
                      ? 'border-quantum-orange/40 bg-quantum-orange/40'
                      : 'border-white/15 bg-white/10')
                  }
                />
              ))}
            </div>

            <button
              type="button"
              onClick={props.onNext}
              disabled={!canNext}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs text-white/80 disabled:opacity-40"
              aria-label="Siguiente"
            >
              Siguiente
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-white/60">Nota de precio</div>
        <div className="mt-1 text-sm text-white/80">
          {props.service.requiresEvaluation
            ? 'Precio a confirmar tras evaluación. Se informa por WhatsApp.'
            : 'Precio a confirmar por WhatsApp al reservar.'}
        </div>
      </div>
    </div>
  );
}
