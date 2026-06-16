'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CookieSettingsLink } from '@/components/layout/CookieSettingsLink';
import { useRegion } from '@/hooks/useRegion';
import { useLanguage } from '@/hooks/useLanguage';

const SOCIAL_LINKS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@SistemaLuzCuantica',
    label: '@SistemaLuzCuantica',
    color: 'text-red-500',
    bg: 'hover:bg-red-600/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sistema.luz.cuantica/',
    label: '@sistema.luz.cuantica',
    color: 'text-pink-400',
    bg: 'hover:bg-pink-600/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/S_LUZ_CUANTICA',
    label: '@S_LUZ_CUANTICA',
    color: 'text-gray-200',
    bg: 'hover:bg-white/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@sistema.luz.cuant',
    label: '@sistema.luz.cuant',
    color: 'text-teal-400',
    bg: 'hover:bg-teal-600/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-8.83a8.23 8.23 0 0 0 4.79 1.52V4.56a4.85 4.85 0 0 1-1.01-.13z" />
      </svg>
    ),
  },
];

export function Footer() {
  const { region } = useRegion();
  const { t } = useLanguage();
  const isEU = region === 'EU';

  const legalLinks = [
    { label: t.footer.terms, href: '/legal/terminos' },
    { label: t.footer.privacy, href: '/legal/privacidad' },
    { label: t.footer.cookies, href: '/legal/cookies' },
    { label: t.footer.disclaimer, href: '/legal/disclaimer' },
    { label: t.footer.refunds, href: '/legal/reembolsos' },
  ];

  return (
  <footer className="bg-gradient-to-b from-quantum-orange/10 to-quantum-dark mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-black/20">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-quantum-orange/25 via-transparent to-quantum-cyan/20" />
                <div className="absolute -inset-6 bg-quantum-orange/10 blur-2xl" aria-hidden="true" />
                <Image src="/logo.webp" alt="Sistema Luz Cuántica®" fill className="relative object-contain p-1.5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Sistema Luz Cuántica®</div>
                <div className="text-xs text-quantum-cyan">S.L.C.</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.brand} - Arquitectura de transformación consciente.
            </p>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Síguenos</h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm text-gray-400 transition-colors rounded-md px-1 py-0.5 -ml-1 ${s.color} ${s.bg}`}
                  >
                    {s.icon}
                    <span className="truncate">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-quantum-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsLink isEU={isEU} className="text-sm text-gray-400 hover:text-quantum-cyan transition-colors" />
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t.footer.contact}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{t.footer.email}: sistemaluzcuantica@gmail.com</p>
              <p>
                Empresas/Instituciones:{' '}
                <a
                  href="mailto:geneticquanty@sistemaluzcuantica.com"
                  className="text-quantum-cyan hover:text-quantum-gold transition-colors"
                >
                  geneticquanty@sistemaluzcuantica.com
                </a>
              </p>
              <p>{t.footer.whatsapp}: +54 9 2657 283150</p>
              <p className="text-xs text-gray-500">Tel. Fijo: 2657 816401</p>
            </div>
          </div>
        </div>

  <div className="mt-8 pt-8 border-t border-quantum-orange/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t.footer.brand}. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`text-gray-500 transition-colors ${s.color} ${s.bg} p-1.5 rounded-full`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
