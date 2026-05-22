/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

// script-src needs 'unsafe-eval' in dev for Next.js Fast Refresh (HMR)
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com"
  : "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com";

// HSTS only makes sense over HTTPS (production)
const hstsHeader = isDev
  ? []
  : [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }];

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  ...hstsHeader,
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://wa.me https://api.whatsapp.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
];

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
