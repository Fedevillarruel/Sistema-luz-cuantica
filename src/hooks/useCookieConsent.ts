'use client';

import { useState, useEffect } from 'react';
import type { CookieConsent } from '@/types';

const CONSENT_KEY = 'slc_cookie_consent';

export function useCookieConsent(isEU: boolean) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!isEU) {
      // No mostrar banner fuera de UE
      setShowBanner(false);
      return;
    }

    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored) as CookieConsent;
        setConsent(data);
        setShowBanner(false);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, [isEU]);

  const saveConsent = (newConsent: Omit<CookieConsent, 'timestamp'>) => {
    const fullConsent: CookieConsent = {
      ...newConsent,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(fullConsent));
    setConsent(fullConsent);
    setShowBanner(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const reopenSettings = () => {
    setShowBanner(true);
  };

  return {
    consent,
    showBanner,
    acceptAll,
    rejectAll,
    saveConsent,
    reopenSettings,
  };
}
