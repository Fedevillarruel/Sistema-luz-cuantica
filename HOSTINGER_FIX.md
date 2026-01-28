# 🚨 FIX URGENTE: Error 404 en /_next/static

## ❌ Problema actual

El navegador pide: `/_next/static/css/7e899b56a6f34625.css` (404)  
El build actual tiene: `/_next/static/css/3d1b2a0d0040cd2b.css`

**Causa:** Hostinger está sirviendo un HTML viejo que no matchea con los assets del build actual.

---

## ✅ SOLUCIÓN (elegí la que aplique a tu hosting)

### Opción 1: Hostinger Node.js App (RECOMENDADO)

Si configuraste un "Node.js App" en Hostinger:

#### Paso 1: Verificar configuración en panel Hostinger

1. Ve a **Websites** → tu sitio → **Node.js App**
2. **CRÍTICO - Verifica estos campos:**

   ```
   Application Root:     /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
   Application URL:      https://darkcyan-walrus-608135.hostingersite.com
   Application Startup:  npm run start
   Node version:         18.x o superior
   ```

   **⚠️ IMPORTANTE:** El `Application Root` debe ser la carpeta donde está `package.json`, NO una subcarpeta.

#### Paso 2: Forzar rebuild en Hostinger

**Opción A - Via Git (si conectaste el repo):**

1. En el panel Hostinger, ve a **Git** → **Pull & Deploy**
2. Click en **Pull Changes**
3. Espera a que termine
4. Ve a **Node.js App** → Click **Restart Application**

**Opción B - Rebuild manual vía SSH:**

```bash
# Conectate por SSH (panel Hostinger → SSH Access)
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica

# Limpia cache viejo
rm -rf .next node_modules

# Instala y rebuildea
npm install
npm run build

# Reinicia la app
# (En el panel: Node.js App → Restart)
```

#### Paso 3: Verificar que el proceso esté corriendo

En SSH:

```bash
ps aux | grep node
# Deberías ver algo como: node .next/standalone/server.js
# O: node_modules/.bin/next start
```

Si NO aparece ningún proceso Node:
1. Ve al panel Hostinger
2. Node.js App → **Start Application**

---

### Opción 2: Hosting Estático (NO RECOMENDADO - no funciona con Next.js SSR)

Si usaste hosting estático (Apache/Nginx), **necesitás cambiar a Node.js App** porque Next.js necesita un servidor Node corriendo.

**Alternativa temporal:** Exportar estático (pero perdés SSR, API routes, etc):

1. Edita `next.config.js`:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',  // ← Agrega esto
     images: {
       unoptimized: true,  // ← Agrega esto
       formats: ['image/avif', 'image/webp'],
     },
   }
   
   module.exports = nextConfig
   ```

2. Rebuildea:

   ```bash
   npm run build
   ```

3. Sube todo el contenido de la carpeta `out/` (no `.next/`) vía FTP al directorio público

**⚠️ ADVERTENCIA:** Con `output: 'export'` perdés:
- API routes (`/api/lead` no va a funcionar)
- Geolocalización server-side
- Middleware
- ISR y SSR

---

### Opción 3: Deploy en Vercel (SOLUCIÓN MÁS FÁCIL)

Next.js es de Vercel, deployment es zero-config:

```bash
# Instala Vercel CLI
npm install -g vercel

# Logueate
vercel login

# Deploy
vercel --prod
```

Vercel te da:
- HTTPS automático
- CDN global
- Builds automáticos desde Git
- Zero downtime deploys
- **GRATIS** hasta 100GB bandwidth/mes

---

## 🔍 DIAGNÓSTICO: Verificar qué está fallando

### Test 1: ¿El servidor Node está corriendo?

```bash
# En SSH de Hostinger:
curl -I http://localhost:3000
# O el puerto que uses (puede ser 8080, etc)

# Deberías ver: HTTP/1.1 200 OK
# Si da "Connection refused" → el server NO está corriendo
```

### Test 2: ¿Los archivos existen?

```bash
# En SSH:
ls -la /domains/tu-dominio/Sistema-luz-cuantica/.next/static/css/

# Deberías ver archivos .css
# Si está vacío o no existe → el build no se completó
```

### Test 3: ¿El HTML matchea el build?

```bash
# En local (tu Mac):
cd "/Applications/Proyectos/Luz Cuántica"
grep -r "7e899b56a6f34625" .next/

# Si NO aparece → ese hash es de un build viejo
# Necesitás forzar rebuild en Hostinger
```

---

## 📋 CHECKLIST Post-Deploy

Una vez que lo arregles:

- [ ] `https://darkcyan-walrus-608135.hostingersite.com/` carga sin errores
- [ ] No hay 404 en DevTools (F12 → Network)
- [ ] CSS se aplica correctamente (no ves estilos rotos)
- [ ] JavaScript funciona (botones, formularios, etc)
- [ ] Selector de idioma funciona
- [ ] Formulario de contacto envía datos

---

## 🆘 Si nada funciona

**Mándame esta info:**

1. Captura del panel Hostinger mostrando:
   - Application Root
   - Application Startup command
   - Node version

2. Output de estos comandos en SSH:

   ```bash
   pwd
   ls -la
   cat package.json | grep -A 5 scripts
   ls -la .next/static/css/
   ps aux | grep node
   ```

3. ¿Usaste Git deploy o FTP manual?

Con eso te doy el fix exacto.

---

## 📞 Contacto Rápido

Si necesitás ayuda inmediata, pegame screenshot del panel de Hostinger (sección Node.js App) y te guío paso a paso.
