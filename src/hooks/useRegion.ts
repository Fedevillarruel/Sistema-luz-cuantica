'use client';

import { useState, useEffect } from 'react';
import type { Region } from '@/types';
import { detectRegion } from '@/lib/geolocation';
import { REGIONS } from '@/config/regions';

const REGION_STORAGE_KEY = 'slc_selected_region';
const REGION_AUTO_COOKIE = 'slc_region_auto';

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  if (!match) return undefined;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

export function useRegion() {
  const [region, setRegion] = useState<Region>('INTL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initRegion() {
      // 1. Revisar si hay región manual seleccionada
      const stored = localStorage.getItem(REGION_STORAGE_KEY);
      if (stored && stored in REGIONS) {
        setRegion(stored as Region);
        setLoading(false);
        return;
      }

      // 2. Leer cookie automática (seteada server-side por middleware)
      const cookieRegion = readCookie(REGION_AUTO_COOKIE);
      if (cookieRegion && cookieRegion in REGIONS) {
        setRegion(cookieRegion as Region);
        setLoading(false);
        return;
      }

      // 3. Detectar por geolocalización (fallback)
      try {
        const geo = await detectRegion();
        setRegion(geo.region);
      } catch (error) {
        console.warn('Region detection failed:', error);
        setRegion('INTL');
      } finally {
        setLoading(false);
      }
    }

    initRegion();
  }, []);

  const changeRegion = (newRegion: Region) => {
    setRegion(newRegion);
    localStorage.setItem(REGION_STORAGE_KEY, newRegion);
  };

  return {
    region,
    loading,
    changeRegion,
    regionConfig: REGIONS[region],
  };
}
