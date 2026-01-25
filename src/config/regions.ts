export const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
];

export const REGIONS = {
  AR: {
    code: 'AR' as const,
    name: 'Argentina',
    currency: 'ARS' as const,
    flag: '🇦🇷',
  },
  EU: {
    code: 'EU' as const,
    name: 'Unión Europea',
    currency: 'EUR' as const,
    flag: '🇪🇺',
  },
  US: {
    code: 'US' as const,
    name: 'Estados Unidos',
    currency: 'USD' as const,
    flag: '🇺🇸',
  },
  INTL: {
    code: 'INTL' as const,
    name: 'Internacional',
    currency: 'USD' as const,
    flag: '🌍',
  },
};
