/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'DENY' },
  // Stop MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Control referrer information
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable browser features not needed
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Enable HSTS (only served over HTTPS in production)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Content Security Policy – allows only trusted sources
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Scripts: self + Next.js inline scripts (required) + Google Fonts
      "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Styles: self + inline (Tailwind/CSS-in-JS) + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs (for base64 images)
      "img-src 'self' data: blob:",
      // Connections: self + WhatsApp API + webhook (wildcard covers n8n/Zapier)
      "connect-src 'self' https://wa.me https://api.whatsapp.com",
      // Frames: none
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
  // Prevent XSS in older browsers
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
