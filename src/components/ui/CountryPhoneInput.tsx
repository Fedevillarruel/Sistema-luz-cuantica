'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type Country = {
  code: string;
  name: string;
  dialCode: string;
};

const COUNTRIES: Country[] = [
  { code: 'AR', name: 'Argentina', dialCode: '+54' },
  { code: 'US', name: 'Estados Unidos', dialCode: '+1' },
  { code: 'MX', name: 'México', dialCode: '+52' },
  { code: 'ES', name: 'España', dialCode: '+34' },
  { code: 'BR', name: 'Brasil', dialCode: '+55' },
  { code: 'CL', name: 'Chile', dialCode: '+56' },
  { code: 'CO', name: 'Colombia', dialCode: '+57' },
  { code: 'PE', name: 'Perú', dialCode: '+51' },
  { code: 'UY', name: 'Uruguay', dialCode: '+598' },
  { code: 'PY', name: 'Paraguay', dialCode: '+595' },
  { code: 'BO', name: 'Bolivia', dialCode: '+591' },
  { code: 'EC', name: 'Ecuador', dialCode: '+593' },
  { code: 'VE', name: 'Venezuela', dialCode: '+58' },
  { code: 'PA', name: 'Panamá', dialCode: '+507' },
  { code: 'CR', name: 'Costa Rica', dialCode: '+506' },
  { code: 'DO', name: 'República Dominicana', dialCode: '+1' },
  { code: 'GB', name: 'Reino Unido', dialCode: '+44' },
  { code: 'FR', name: 'Francia', dialCode: '+33' },
  { code: 'DE', name: 'Alemania', dialCode: '+49' },
  { code: 'IT', name: 'Italia', dialCode: '+39' },
  { code: 'PT', name: 'Portugal', dialCode: '+351' },
  { code: 'NL', name: 'Países Bajos', dialCode: '+31' },
];

function flagEmoji(iso2: string) {
  return iso2
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

function sanitizeLocalPhone(raw: string) {
  return (raw || '').replace(/[^0-9\s()-]/g, '');
}

export function CountryPhoneInput(props: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  defaultCountry?: string;
  name?: string;
  onBlur?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const rootRef = useRef<HTMLDivElement | null>(null);

  const initial = useMemo(() => {
    const byCode = COUNTRIES.find((c) => c.code === (props.defaultCountry || 'AR'));
    return byCode ?? COUNTRIES[0];
  }, [props.defaultCountry]);

  const [country, setCountry] = useState<Country>(initial);

  const localNumber = useMemo(() => {
    const v = props.value || '';
    if (v.startsWith('+')) {
      // Intenta extraer el dial code actual.
      const match = COUNTRIES
        .slice()
        .sort((a, b) => b.dialCode.length - a.dialCode.length)
        .find((c) => v.startsWith(c.dialCode));
      if (match) return v.slice(match.dialCode.length).trimStart();
      return v;
    }
    return v;
  }, [props.value]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(t)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.dialCode.includes(q)
    );
  }, [query]);

  function commit(nextCountry: Country, nextLocal: string) {
    const next = `${nextCountry.dialCode} ${sanitizeLocalPhone(nextLocal)}`.trim();
    props.onChange(next);
  }

  return (
    <div ref={rootRef} className={cn('relative', props.className)}>
      <input type="hidden" name={props.name} value={props.value} />
      <div className="flex overflow-hidden rounded-md border border-quantum-cyan/30 bg-quantum-dark">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 px-3 py-2 text-sm text-white/85 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-quantum-orange/40"
          aria-label="Seleccionar país"
        >
          <span className="text-base leading-none">{flagEmoji(country.code)}</span>
          <span className="text-xs text-white/70">{country.dialCode}</span>
          <span className="text-[10px] text-white/40">▾</span>
        </button>
        <input
          value={localNumber}
          onChange={(e) => commit(country, e.target.value)}
          onBlur={props.onBlur}
          placeholder={props.placeholder ?? 'Tu número'}
          className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none"
          inputMode="tel"
          autoComplete="tel"
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-quantum-darker shadow-xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-3 py-2">
            <Search className="h-4 w-4 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar país o código"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <div className="max-h-72 overflow-auto">
            {filtered.map((c) => (
              <button
                key={`${c.code}-${c.dialCode}`}
                type="button"
                onClick={() => {
                  setCountry(c);
                  setOpen(false);
                  commit(c, localNumber);
                }}
                className={cn(
                  'flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm hover:bg-white/5',
                  c.code === country.code && c.dialCode === country.dialCode && 'bg-white/5'
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base leading-none">{flagEmoji(c.code)}</span>
                  <span className="text-white/85">{c.name}</span>
                  <span className="text-xs text-white/40">({c.code})</span>
                </span>
                <span className="text-xs text-white/70">{c.dialCode}</span>
              </button>
            ))}

            {!filtered.length && (
              <div className="px-3 py-3 text-xs text-white/60">Sin resultados.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
