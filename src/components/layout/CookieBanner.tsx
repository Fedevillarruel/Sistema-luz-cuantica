'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '../ui/Button';
import { useState } from 'react';

interface CookieBannerProps {
  isEU: boolean;
}

export function CookieBanner({ isEU }: CookieBannerProps) {
  const { t } = useLanguage();
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
            <h3 className="text-lg font-semibold text-white mb-2">{t.cookies.bannerTitle}</h3>
            <p className="text-sm text-gray-300">
              {t.cookies.bannerDescription}{' '}
              <a href="/legal/cookies" className="text-quantum-cyan hover:underline ml-1">
                {t.cookies.moreInfo}
              </a>
            </p>
            {mode === 'settings' ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white font-medium">{t.cookies.necessary}</div>
                  <div className="text-white/60 text-xs mt-1">{t.cookies.necessaryDescription}</div>
                  <div className="mt-3">
                    <label className="inline-flex items-center gap-2 text-white/70">
                      <input type="checkbox" checked disabled />
                      {t.cookies.active}
                    </label>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white font-medium">{t.cookies.analytics}</div>
                  <div className="text-white/60 text-xs mt-1">{t.cookies.analyticsDescription}</div>
                  <div className="mt-3">
                    <label className="inline-flex items-center gap-2 text-white/70">
                      <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
                      {t.cookies.allow}
                    </label>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white font-medium">{t.cookies.marketing}</div>
                  <div className="text-white/60 text-xs mt-1">{t.cookies.marketingDescription}</div>
                  <div className="mt-3">
                    <label className="inline-flex items-center gap-2 text-white/70">
                      <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
                      {t.cookies.allow}
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
                  {t.cookies.save}
                </Button>
                <Button onClick={() => setMode('simple')} variant="outline" size="sm">
                  {t.cookies.back}
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => setMode('settings')} variant="outline" size="sm">
                  {t.cookies.configure}
                </Button>
                <Button onClick={rejectAll} variant="outline" size="sm">
                  {t.cookies.rejectAll}
                </Button>
                <Button onClick={acceptAll} size="sm">
                  {t.cookies.acceptAll}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
