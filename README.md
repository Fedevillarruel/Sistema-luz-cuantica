# Sistema Luz Cuántica - Landing Page

Landing page profesional para el Sistema Luz Cuántica construida con Next.js 14, TypeScript, TailwindCSS y Framer Motion.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **UI Components**: Radix UI
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Toasts**: Sonner
- **Icons**: Lucide React

## 📋 Características

- ✅ Detección automática de región por geolocalización (con fallback)
- ✅ Selector manual de región/moneda (AR/EU/US/INTL)
- ✅ Precios dinámicos según región
- ✅ Sistema de pagos regionalizado
- ✅ Formularios validados (evaluación, BioLink Animal, BioLink Habitat)
- ✅ Modales accesibles (servicios, video, protocolo, pagos)
- ✅ Banner de cookies GDPR para UE
- ✅ Páginas legales completas
- ✅ SEO optimizado con metadata y JSON-LD
- ✅ Responsive mobile-first
- ✅ Animaciones sutiles con Framer Motion
- ✅ Accesibilidad (navegación por teclado, focus trap, contraste)
- ✅ Performance optimizada

## 📦 Instalación

### 1. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 2. Configurar variables de entorno (opcional)

Crea un archivo `.env.local` en la raíz:

\`\`\`bash
# OPCIONAL: URL del webhook para enviar leads (n8n, Zapier, etc.)
NEXT_PUBLIC_LEAD_WEBHOOK_URL=https://tu-webhook.com/endpoint

# OPCIONAL: URL del video de presentación (YouTube, Vimeo o MP4)
NEXT_PUBLIC_VIDEO_URL=https://www.youtube.com/embed/YOUR_VIDEO_ID
\`\`\`

**Nota**: La aplicación funciona completamente SIN estas variables. Los leads se mostrarán en consola y el video mostrará un placeholder.

### 3. Agregar el logo

Coloca tu logo oficial en:
\`\`\`
public/logo.svg
\`\`\`

Si el archivo se llama diferente, actualiza las referencias en:
- `src/app/layout.tsx` (favicon)
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`

### 4. Ejecutar en desarrollo

\`\`\`bash
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ⚙️ Configuración de Precios

Edita los precios en `src/config/pricing.ts`:

\`\`\`typescript
export const PRICING = {
  'evaluacion-energetica': {
    AR: 50000,   // ARS
    EU: 120,     // EUR
    US: 130,     // USD
    INTL: 130,   // USD
  },
  // ... más servicios
};
\`\`\`

## 🌍 Geolocalización

El sistema detecta automáticamente la región del usuario:

1. **Primera prioridad**: Región seleccionada manualmente (guardada en localStorage)
2. **Segunda prioridad**: Cache de geolocalización (24h en localStorage)
3. **Tercera prioridad**: API pública `ipapi.co` (con manejo de errores)
4. **Fallback**: International (USD)

En producción (Vercel), puedes mejorar esto usando headers del edge:
- `x-vercel-ip-country`
- `request.geo.country`

## 🏗️ Build de Producción

\`\`\`bash
npm run build
npm start
\`\`\`

## 🚢 Deploy en Vercel (Recomendado)

### Opción 1: Desde GitHub

1. Sube tu código a GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. Configura las variables de entorno (opcionales)
5. Deploy automático

### Opción 2: Desde CLI

\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

### Variables de Entorno en Vercel

En el dashboard de Vercel, ve a Settings → Environment Variables:

- `NEXT_PUBLIC_LEAD_WEBHOOK_URL` (opcional)
- `NEXT_PUBLIC_VIDEO_URL` (opcional)

## 📁 Estructura del Proyecto

\`\`\`
src/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Página home
│   ├── globals.css             # Estilos globales
│   ├── api/
│   │   └── lead/route.ts       # Endpoint para leads
│   └── legal/
│       ├── terminos/
│       ├── privacidad/
│       ├── cookies/
│       ├── disclaimer/
│       └── reembolsos/
├── components/
│   ├── layout/                 # Header, Footer, CookieBanner
│   ├── sections/               # Hero, WhatIs, Services, etc.
│   ├── forms/                  # Formularios
│   ├── modals/                 # Modales
│   └── ui/                     # Componentes UI base
├── config/
│   ├── pricing.ts              # Precios por región
│   ├── regions.ts              # Configuración de regiones
│   ├── services.ts             # Definición de servicios
│   └── payment.ts              # Métodos de pago
├── hooks/
│   ├── useRegion.ts            # Hook de región
│   └── useCookieConsent.ts     # Hook de cookies
├── lib/
│   ├── utils.ts                # Utilidades
│   └── geolocation.ts          # Detección de región
└── types/
    └── index.ts                # Tipos TypeScript
\`\`\`

## 🎨 Personalización de Diseño

### Colores

Edita `tailwind.config.ts`:

\`\`\`typescript
colors: {
  quantum: {
    dark: '#0a0e17',
    darker: '#050810',
    blue: '#1e40af',
    cyan: '#06b6d4',
    gold: '#fbbf24',
    purple: '#7c3aed',
  },
},
\`\`\`

### Fuentes

Cambia la fuente en `src/app/layout.tsx`:

\`\`\`typescript
import { Inter } from 'next/font/google';
// Cambiar por otra fuente de Google Fonts
\`\`\`

## 🔌 Integración con Webhooks

Para enviar leads automáticamente a n8n, Zapier, Make, etc.:

1. Configura tu webhook endpoint
2. Agrega la URL a `.env.local`:
   \`\`\`
   NEXT_PUBLIC_LEAD_WEBHOOK_URL=https://tu-webhook.com/endpoint
   \`\`\`
3. El sistema enviará POST con:
   \`\`\`json
   {
     "name": "...",
     "email": "...",
     "country": "...",
     "whatsapp": "...",
     "message": "...",
     "acceptProtocol": true,
     "type": "evaluacion-energetica",
     "timestamp": "2026-01-25T..."
   }
   \`\`\`

## 📱 Testing

### Local
- Cambia manualmente la región para probar precios/pagos
- Prueba formularios
- Verifica cookies en navegador de UE (cambia región a EU)

### Responsive
- Chrome DevTools → Toggle device toolbar
- Probar mobile, tablet, desktop

### Accesibilidad
- Navegación por teclado (Tab, Enter, Escape)
- Screen readers
- Contraste de colores

## 🐛 Troubleshooting

### Error: Cannot find module 'react'
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Geolocalización no funciona
- Verifica conexión a internet
- API ipapi.co puede tener rate limits (cacheado 24h)
- Fallback a "International" es normal

### Build falla
\`\`\`bash
npm run lint
npm run build
\`\`\`
Revisa errores de TypeScript

## 📝 Notas Importantes

- **No uses la palabra "sanación"** en ningún contenido
- **No hagas claims médicos**
- **Mantén el marco profesional**: intangible, informacional, sin garantías
- **Precios en `pricing.ts`** son placeholder - actualiza con tus precios reales
- **Contacto en Footer** es placeholder - actualiza con tus datos reales
- **Logo oficial** debe estar en `public/logo.svg`

## 🆘 Soporte

Para consultas técnicas sobre el código:
- Revisar documentación de Next.js: https://nextjs.org/docs
- TailwindCSS: https://tailwindcss.com/docs
- Radix UI: https://www.radix-ui.com/

---

**Sistema Luz Cuántica** - Marca Registrada
Última actualización: Enero 2026
