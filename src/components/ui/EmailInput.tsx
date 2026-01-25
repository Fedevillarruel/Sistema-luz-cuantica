'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

const COMMON_DOMAINS = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'yahoo.com',
  'proton.me',
  'protonmail.com',
  'live.com',
];

export function EmailInput(props: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  onBlur?: () => void;
}) {
  const [open, setOpen] = useState(false);

  const { user, hasAt, domainPart } = useMemo(() => {
    const v = props.value || '';
    const idx = v.indexOf('@');
    if (idx === -1) return { user: v, hasAt: false, domainPart: '' };
    return { user: v.slice(0, idx), hasAt: true, domainPart: v.slice(idx + 1) };
  }, [props.value]);

  const suggestions = useMemo(() => {
    if (!hasAt) return [];
    const q = (domainPart || '').toLowerCase();
    return COMMON_DOMAINS.filter((d) => d.startsWith(q)).slice(0, 6);
  }, [hasAt, domainPart]);

  function apply(domain: string) {
    const next = `${user}@${domain}`;
    props.onChange(next);
    setOpen(false);
  }

  return (
    <div className={cn('relative', props.className)}>
      <input
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
          const v = e.target.value;
          const idx = v.indexOf('@');
          if (idx !== -1) setOpen(true);
          else setOpen(false);
        }}
        onBlur={() => {
          // small delay so click can register
          setTimeout(() => setOpen(false), 120);
          props.onBlur?.();
        }}
        onFocus={() => {
          if ((props.value || '').includes('@')) setOpen(true);
        }}
        type="email"
        autoComplete="email"
        placeholder={props.placeholder ?? 'tu@email.com'}
        className="flex h-10 w-full rounded-md border border-quantum-cyan/30 bg-quantum-dark px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-quantum-cyan focus:ring-offset-2 focus:ring-offset-quantum-darker"
      />

      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-quantum-darker shadow-xl shadow-black/40">
          {suggestions.map((d) => (
            <button
              key={d}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => apply(d)}
              className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-white/85 hover:bg-white/5"
            >
              <span className="truncate">{user}@{d}</span>
              <span className="text-xs text-white/50">enter</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
