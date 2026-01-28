'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';
import { useMemo, useState } from 'react';

const VIDEO_IFRAME_URL =
  'https://www.youtube.com/embed/CCHiYGJgKEQ?si=G23vnT3KhbC4cNAc';

export function VideoShowcase() {
  const [open, setOpen] = useState(false);
  const videoUrl = useMemo(() => VIDEO_IFRAME_URL, []);

  return (
    <section className="relative py-16" aria-label="Presentación en video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd36a]/20 bg-[#ffd36a]/10 px-3 py-1 text-xs text-[#ffd36a]">
                Presentación
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Una arquitectura cerrada, diseñada para alta exigencia.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                Conocé el marco operativo del Sistema Luz Cuántica: criterios de evaluación, protocolos definidos y límites claros.
                Sin dogmas, sin promesas, sin dependencia.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => setOpen(true)}>
                  <Play className="h-4 w-4" />
                  Ver video
                </Button>
                <a href="#servicios" className="text-sm text-white/70 hover:text-white underline underline-offset-4">
                  Ver servicios
                </a>
              </div>

              <p className="mt-6 text-xs text-white/45">
                Video oficial del Sistema Luz Cuántica.
              </p>
            </div>

            <div className="lg:col-span-3 relative">
              <div className="aspect-video w-full bg-[radial-gradient(1200px_600px_at_30%_30%,rgba(124,58,237,0.35),transparent_60%),radial-gradient(900px_600px_at_70%_60%,rgba(59,130,246,0.28),transparent_65%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] border-l border-white/10">
                <button
                  onClick={() => setOpen(true)}
                  className="group absolute inset-0 flex items-center justify-center"
                  aria-label="Reproducir video"
                >
                  <span className="flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-5 py-3 backdrop-blur-md transition group-hover:bg-black/20">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd36a]/15 ring-1 ring-[#ffd36a]/25">
                      <Play className="h-5 w-5 text-[#ffd36a]" />
                    </span>
                    <span className="text-sm font-medium text-white">Reproducir</span>
                  </span>
                </button>

                <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
                  <div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-[#ffd36a]/10 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7c3aed]/15 blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Presentación del Sistema Luz Cuántica</DialogTitle>
          </DialogHeader>

          <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black">
            <iframe
              className="h-full w-full"
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
