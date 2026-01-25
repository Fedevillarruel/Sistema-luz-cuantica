'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';

export function CookieSettingsLink(props: { isEU: boolean; className?: string }) {
  const { reopenSettings } = useCookieConsent(props.isEU);

  if (!props.isEU) return null;

  return (
    <button
      type="button"
      onClick={() => reopenSettings()}
      className={
        props.className ??
        'text-sm text-gray-400 hover:text-quantum-cyan transition-colors underline underline-offset-4'
      }
    >
      Cookie settings
    </button>
  );
}
