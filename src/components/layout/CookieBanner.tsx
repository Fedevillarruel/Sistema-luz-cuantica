'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Button } from '../ui/Button';
import { useState } from 'react';

interface CookieBannerProps {
  isEU: boolean;
}

export function CookieBanner({ isEU }: CookieBannerProps) {
  const { showBanner, acceptAll, rejectAll, saveConsent } = useCookieConsent(isEU);
  const [mode, setMode] = useState<'simple' | 'settings'>('simple');
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-quantum-dark/98 border-t border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">Uso de Cookies</h3>
            <p className="text-sm text-gray-300">
              Utilizamos cookies necesarias para el funcionamiento del sitio. También usamos cookies opcionales para analíticas y marketing que solo se activarán con tu consentimiento. 
              <a href="/legal/cookies" className="text-quantum-cyan hover:underline ml-1">
                Más información
              </a>
            </p>
            {mode === 'settings' ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white font-medium">Necesarias</div>
                  <div className="text-white/60 text-xs mt-1">Siempre activas</div>
                  <div className="mt-3">
                    <label className="inline-flex items-center gap-2 text-white/70">
                      <input type="checkbox" checked disabled />
                      Activas
                    </label>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white font-medium">Analíticas</div>
                  <div className="text-white/60 text-xs mt-1">Medición anónima</div>
                  <div className="mt-3">
                    <label className="inline-flex items-center gap-2 text-white/70">
                      <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
                      Permitir
                    </label>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white font-medium">Marketing</div>
                  <div className="text-white/60 text-xs mt-1">Preferencias/remarketing</div>
                  <div className="mt-3">
                    <label className="inline-flex items-center gap-2 text-white/70">
                      <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
                      Permitir
                    </label>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {mode === 'settings' ? (
              <>
                <Button
                  onClick={() => {
                    saveConsent({ necessary: true, analytics, marketing });
                  }}
                  size="sm"
                >
                  Guardar
                </Button>
                <Button onClick={() => setMode('simple')} variant="outline" size="sm">
                  Volver
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => setMode('settings')} variant="outline" size="sm">
                  Configurar
                </Button>
                <Button onClick={rejectAll} variant="outline" size="sm">
                  Rechazar
                </Button>
                <Button onClick={acceptAll} size="sm">
                  Aceptar todo
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
