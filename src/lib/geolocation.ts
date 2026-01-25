import type { GeoLocation, Region } from '@/types';

const CACHE_KEY = 'slc_geo_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

export async function detectRegion(): Promise<GeoLocation> {
  // 1. Intentar leer del cache
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < CACHE_DURATION) {
          return { country: data.country, region: data.region, cached: true };
        }
      } catch (e) {
        // Ignore cache errors
      }
    }
  }

  // 2. En producción (Vercel), intentar headers del edge
  // Esto se puede mejorar con middleware en Vercel
  // Por ahora, fallback directo a API pública
  
  try {
    const response = await fetch('https://ipapi.co/json/', {
      cache: 'no-store',
    });
    
    if (!response.ok) throw new Error('Geolocation API failed');
    
    const data = await response.json();
    const country = data.country_code || 'US';
    const region = countryToRegion(country);
    
    // Guardar en cache
    if (typeof window !== 'undefined') {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        country,
        region,
        timestamp: Date.now(),
      }));
    }
    
    return { country, region, cached: false };
  } catch (error) {
    console.warn('Geolocation failed, using default:', error);
    return { country: 'US', region: 'INTL', cached: false };
  }
}

export function countryToRegion(countryCode: string): Region {
  const euCountries = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
    'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
    'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  ];

  if (countryCode === 'AR') return 'AR';
  if (euCountries.includes(countryCode)) return 'EU';
  if (countryCode === 'US') return 'US';
  return 'INTL';
}

export function clearGeoCache() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CACHE_KEY);
  }
}
