'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { RegionSelector } from '../RegionSelector';
import { LanguageSelector } from '../LanguageSelector';
import { Button } from '../ui/Button';
import { scrollToSection } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import type { Region } from '@/types';

interface HeaderProps {
  region: Region;
  onRegionChange: (region: Region) => void;
  onOpenEvaluation: () => void;
}

export function Header({ region, onRegionChange, onOpenEvaluation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.header.services, id: 'servicios' },
    { label: t.header.pricing, id: 'precios' },
    { label: t.header.protocol, id: 'protocolo' },
    { label: t.header.faq, id: 'faq' },
    { label: t.header.contact, id: 'contacto' },
  ];

  return (
  <header className="fixed top-0 w-full z-40 bg-gradient-to-r from-quantum-orange/20 via-quantum-darker/75 to-quantum-orange/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-black/20">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-quantum-orange/25 via-transparent to-quantum-cyan/20" />
                <div className="absolute -inset-6 bg-quantum-orange/10 blur-2xl" aria-hidden="true" />
                <Image src="/logo.webp" alt="Sistema Luz Cuántica" fill className="relative object-contain p-1.5" priority />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-white">Sistema Luz Cuántica</div>
                <div className="text-xs text-quantum-cyan">S.L.C.</div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-300 hover:text-quantum-cyan transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <RegionSelector currentRegion={region} onRegionChange={onRegionChange} />
            
            <Button
              onClick={onOpenEvaluation}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t.header.requestEvaluation}
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-quantum-cyan/30 hover:bg-quantum-cyan/10"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
  <div className="md:hidden border-t border-white/10 bg-gradient-to-b from-quantum-orange/15 to-quantum-dark">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:text-quantum-cyan hover:bg-quantum-cyan/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                onOpenEvaluation();
                setMobileMenuOpen(false);
              }}
              className="w-full"
            >
              {t.header.requestEvaluation}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
