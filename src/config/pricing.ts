import type { Region } from '@/types';

// PLACEHOLDER PRICES - Editar aquí tus precios finales
export const PRICING = {
  'evaluacion-energetica': {
    AR: 50000,
    EU: 120,
    US: 130,
    INTL: 130,
  },
  'reiki-energy-quantum': {
    AR: 40000,
    EU: 100,
    US: 110,
    INTL: 110,
  },
  'constelaciones-familiares': {
    AR: 80000,
    EU: 180,
    US: 200,
    INTL: 200,
  },
  'genetic-quanty': {
    AR: 150000,
    EU: 350,
    US: 380,
    INTL: 380,
  },
  'biolink-animal': {
    AR: 60000,
    EU: 140,
    US: 150,
    INTL: 150,
  },
  'biolink-habitat': {
    AR: 200000,
    EU: 500,
    US: 550,
    INTL: 550,
  },
  'advanced-quantum-research': {
    AR: 300000,
    EU: 700,
    US: 750,
    INTL: 750,
  },
  'reordenamiento-coherencia': {
    AR: 100000,
    EU: 220,
    US: 240,
    INTL: 240,
  },
} as const;

export function getPrice(serviceId: keyof typeof PRICING, region: Region): number {
  return PRICING[serviceId][region];
}
