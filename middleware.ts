import { NextResponse, type NextRequest } from 'next/server';
import { countryToAppRegion, countryToLanguage } from '@/lib/locale';

// Cookies para que el cliente pueda inicializar estado sin depender de una API externa.
const COOKIE_REGION = 'slc_region_auto';
const COOKIE_LANG = 'slc_lang_auto';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // En Vercel suele venir como x-vercel-ip-country.
  // En otras plataformas puede venir como cf-ipcountry (Cloudflare) o vacío.
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    undefined;

  const region = countryToAppRegion(country);
  const lang = countryToLanguage(country);

  // Cookies suaves (no HttpOnly) así el cliente puede leerlas.
  response.cookies.set(COOKIE_REGION, region, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });

  response.cookies.set(COOKIE_LANG, lang, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)'],
};
