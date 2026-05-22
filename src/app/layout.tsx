import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sistema Luz Cuántica® | Arquitectura de Transformación Consciente',
  description: 'Estructura técnica de transformación consciente. Arquitectura cerrada, protocolos definidos, excelencia operativa. Evaluación Energética, Reiki Energy Quantum, Constelaciones Familiares Cuánticas Estelares y más.',
  keywords: 'evaluación energética, reiki cuántico, constelaciones familiares, GENETIC QUANTY, biolink animal, transformación consciente, coherencia energética',
  authors: [{ name: 'Sergio Andrés López Madeo' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://luzcuantica.com',
    title: 'Sistema Luz Cuántica®',
    description: 'Estructura técnica de transformación consciente. Arquitectura cerrada, protocolos definidos, excelencia operativa.',
    siteName: 'Sistema Luz Cuántica®',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistema Luz Cuántica®',
    description: 'Estructura técnica de transformación consciente.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#050810" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Sistema Luz Cuántica®',
              description: 'Estructura técnica de transformación consciente',
              url: 'https://luzcuantica.com',
              logo: 'https://luzcuantica.com/icon-512.png',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['Spanish'],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        <Toaster position="top-right" theme="dark" richColors />
      </body>
    </html>
  );
}
