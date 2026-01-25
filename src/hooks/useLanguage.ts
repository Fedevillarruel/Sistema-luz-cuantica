'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Language, getTranslations, type Translations } from '@/lib/i18n';

const LANG_AUTO_COOKIE = 'slc_lang_auto';

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

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
  language: (readCookie(LANG_AUTO_COOKIE) as Language) || 'es',
  t: getTranslations(((readCookie(LANG_AUTO_COOKIE) as Language) || 'es') as Language),
      setLanguage: (language: Language) => set({ language, t: getTranslations(language) }),
    }),
    {
      name: 'slc-language',
      // Si el usuario tiene un estado persistido viejo (sin `t.pricing`, etc.),
      // nos aseguramos de recalcular `t` siempre a partir de `language`.
      merge: (persisted, current) => {
        const persistedState = persisted as Partial<LanguageState> | undefined;
        const language = persistedState?.language ?? current.language;

        return {
          ...current,
          ...persistedState,
          language,
          t: getTranslations(language),
        } as LanguageState;
      },
    }
  )
);
