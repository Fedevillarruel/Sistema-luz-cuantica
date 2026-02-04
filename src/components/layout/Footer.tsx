'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CookieSettingsLink } from '@/components/layout/CookieSettingsLink';
import { useRegion } from '@/hooks/useRegion';
import { useLanguage } from '@/hooks/useLanguage';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p>{t.footer.whatsapp}: +54 9 2657 283150</p>
              <p className="text-xs text-gray-500">Tel. Fijo: 2657 816401</p>
            </div>
          </div>
        </div>

  <div className="mt-8 pt-8 border-t border-quantum-orange/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t.footer.brand}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
