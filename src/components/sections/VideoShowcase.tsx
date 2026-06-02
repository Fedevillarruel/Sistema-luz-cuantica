'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const VIDEO_SRC = '/WhatsApp%20Video%202026-06-02%20at%2014.17.45.mp4';

const SOCIAL_LINKS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@SistemaLuzCuantica',
    bg: 'bg-red-600/15 hover:bg-red-600/30 border-red-600/20',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sistema.luz.cuantica/',
    bg: 'bg-pink-600/15 hover:bg-pink-600/30 border-pink-500/20',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/S_LUZ_CUANTICA',
    bg: 'bg-white/10 hover:bg-white/20 border-white/15',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@sistema.luz.cuant',
    bg: 'bg-teal-500/15 hover:bg-teal-500/30 border-teal-500/20',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-8.83a8.23 8.23 0 0 0 4.79 1.52V4.56a4.85 4.85 0 0 1-1.01-.13z" />
      </svg>
    ),
  },
];

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    videoRef.current?.play();
    setStarted(true);
  };

  return (
    <section id="video" className="relative py-16 bg-gradient-to-b from-transparent to-quantum-dark/20" aria-label="Presentación en video">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ffd36a]/20 bg-[#ffd36a]/10 px-3 py-1 text-xs text-[#ffd36a] mb-4">
            Presentación Oficial
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Conocé el Sistema Luz Cuántica®
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Una arquitectura cerrada, diseñada para alta exigencia. Sin dogmas, sin promesas, sin dependencia.
          </p>
        </div>

        {/* Video player */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl shadow-black/50">
          <div className="aspect-video relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={started}
              playsInline
              preload="metadata"
              onPlay={() => setStarted(true)}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
            {!started && (
              <button
                onClick={handleStart}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 hover:bg-black/40 transition group"
                aria-label="Reproducir presentación"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-quantum-orange/90 shadow-lg shadow-quantum-orange/30 transition group-hover:scale-110 group-hover:bg-quantum-orange">
                  <Play className="h-9 w-9 text-white" fill="white" />
                </div>
                <span className="mt-4 text-sm text-white/80 font-medium">Ver presentación</span>
              </button>
            )}
          </div>
        </div>

        {/* Social media strip */}
        <div className="mt-10 text-center">
          <p className="text-xs text-white/40 mb-5 uppercase tracking-widest">Síguenos en redes sociales</p>
          <div className="flex flex-wrap justify-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-white text-sm font-medium transition-all hover:scale-105 ${s.bg}`}
              >
                {s.icon}
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
