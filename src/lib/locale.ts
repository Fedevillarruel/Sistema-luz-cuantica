import type { Language } from '@/lib/i18n';
import type { Region } from '@/types';
import { countryToRegion } from '@/lib/geolocation';

export type LocaleHints = {
  country?: string;
};

const HISPANOHABLANTES = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GQ', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PR',
  'PY', 'SV', 'UY', 'VE',
]);

const PORTUGUES = new Set(['BR', 'PT']);

export function countryToLanguage(countryCode?: string): Language {
  const cc = (countryCode || '').toUpperCase();
  if (PORTUGUES.has(cc)) return 'pt';
  if (HISPANOHABLANTES.has(cc)) return 'es';
  return 'en';
}

export function countryToAppRegion(countryCode?: string): Region {
  const cc = (countryCode || '').toUpperCase();
  return countryToRegion(cc);
}
