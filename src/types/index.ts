export type Region = 'AR' | 'EU' | 'US' | 'INTL';
export type Currency = 'ARS' | 'EUR' | 'USD';

export interface RegionConfig {
  code: Region;
  name: string;
  currency: Currency;
  flag: string;
}

export interface PaymentMethod {
  type: string;
  label: string;
  fields: PaymentField[];
  notes?: string[];
}

export interface PaymentField {
  label: string;
  value: string;
  copyable: boolean;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  requiresEvaluation: boolean;
  category: 'personal' | 'animal' | 'corporate' | 'research';
  ctaText: string;
  featured?: boolean;
  restrictions?: string[];
}

export interface PricingTier {
  serviceId: string;
  prices: Record<Region, number>;
}

export interface FormData {
  name: string;
  email: string;
  country: string;
  whatsapp: string;
  message: string;
  acceptProtocol: boolean;
  [key: string]: any;
}

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export interface GeoLocation {
  country: string;
  region: Region;
  cached?: boolean;
}
