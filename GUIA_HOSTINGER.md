# 🎯 GUÍA RÁPIDA: Configurar Next.js en Hostinger Node.js

## ⚡ SOLUCIÓN EN 3 PASOS

### PASO 1️⃣: Verificar/Crear Node.js Application

1. **Login a Hostinger** → Panel hPanel
2. Click en **Websites** (barra lateral)
3. Seleccioná tu sitio: `darkcyan-walrus-608135.hostingersite.com`
4. Buscá la sección **Node.js** en el menú lateral
5. Si NO existe app:
   - Click **Create Application**
   - Completá:
     ```
     Application mode:      Production
     Application root:      /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
     Application URL:       https://darkcyan-walrus-608135.hostingersite.com
     Application startup:   npm start
     ```
   - Click **Create**

6. Si YA existe app, verificá que los valores sean exactamente esos ↑

---

### PASO 2️⃣: Deploy desde Git (AUTOMÁTICO)

**Opción A: Si ya conectaste Git**

1. En panel Hostinger → **Git**
2. Click **Pull & Deploy**
3. Esperá que termine (puede tardar 1-2 min)
4. Vas a ver: "Deployment successful"

**Opción B: Conectar Git por primera vez**

1. En panel Hostinger → **Git**
2. Click **Connect to Git**
3. Elegí **GitHub**
4. Autorizá Hostinger
5. Seleccioná repo: `Fedevillarruel/Sistema-luz-cuantica`
6. Branch: `main`
7. Deployment path: `/domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica`
8. Click **Connect**

Ahora cada push a `main` va a deployar automáticamente.

**Opción C: Deploy manual vía SSH**

Si preferís control total:

```bash
# 1. Conectate por SSH (panel → SSH Access → copiar comando)
ssh u123456789@yourdomain.com

# 2. Navegá al proyecto
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica

# 3. Pull últimos cambios
git pull origin main

# 4. Instalá dependencias
npm install

# 5. Rebuild
npm run build

# 6. Reiniciá (hacelo desde el panel, ver paso 3)
```

---

### PASO 3️⃣: Reiniciar Application

Después de cualquier deploy:

1. Panel Hostinger → **Node.js**
2. Vas a ver tu app con estado "Running" o "Stopped"
3. Click en **⚙️ Manage**
4. Click **Restart Application** (botón naranja)
5. Esperá 10-15 segundos
6. Verificá que estado = "Running" ✅

---

## 🔍 VERIFICACIÓN

Abrí tu sitio: https://darkcyan-walrus-608135.hostingersite.com

**✅ Funciona si:**
- La página carga sin "Cargando..." infinito
- DevTools (F12) → Network: NO hay errores 404 en `/_next/static`
- Los estilos se ven correctos
- El selector de idioma funciona

**❌ Sigue fallando?** Seguí con paso 4 ↓

---

## 🛠️ PASO 4: Troubleshooting Avanzado

### 4.1 Correr script de diagnóstico

```bash
# Por SSH:
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
bash diagnostico.sh
```

El script va a mostrar:
- ✅ Qué está bien
- ❌ Qué está mal
- 🔧 Cómo arreglarlo

### 4.2 Problemas comunes

#### "Application Root" incorrecto

**Síntoma:** 404 en todo, o "Cannot find package.json"

**Fix:**
1. Panel → Node.js → Manage
2. Edit Settings
3. Application root debe ser: `/domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica`
   - ⚠️ **NO** debe terminar en `/public` o `/out`
   - ⚠️ **NO** debe tener espacios extra
4. Save → Restart

#### Build viejo en cache

**Síntoma:** Errores 404 en archivos con hash viejo (ej: `7e899b56a6f34625.css`)

**Fix:**
```bash
# SSH:
cd /domains/.../Sistema-luz-cuantica
rm -rf .next node_modules
npm install
npm run build
# Luego Restart desde panel
```

#### Puerto incorrecto

**Síntoma:** App dice "Running" pero el sitio no carga

**Fix:**
1. Verificá en SSH qué puerto usa Hostinger:
   ```bash
   echo $PORT
   ```
2. Panel → Node.js → Manage → Edit
3. Si "Application startup" es `npm start`, asegurate que `package.json` tenga:
   ```json
   "scripts": {
     "start": "next start -p $PORT"
   }
   ```
4. Save → Restart

#### Node version vieja

**Síntoma:** Errores al buildear, warnings sobre versión

**Fix:**
1. Panel → Node.js → Manage
2. Node.js version: cambiá a **18.x** o superior
3. Save → Restart

---

## 📋 CHECKLIST FINAL

Antes de dar por terminado:

- [ ] Panel Hostinger → Node.js: estado = "Running" ✅
- [ ] Sitio carga en menos de 3 segundos
- [ ] DevTools: 0 errores 404
- [ ] Estilos se ven correctos (no todo blanco o sin CSS)
- [ ] Header y footer aparecen
- [ ] Selector de idioma cambia textos
- [ ] Selector de región cambia precios
- [ ] Video de YouTube carga
- [ ] Formulario de contacto envía (probá con email de prueba)

---

## 🚀 OPTIMIZACIONES POST-DEPLOY

Una vez funcionando:

### 1. Variables de entorno

Si necesitás agregar secrets (API keys, etc):

1. Panel → Node.js → Manage
2. Section: **Environment Variables**
3. Add variable:
   ```
   Key: NEXT_PUBLIC_WEBHOOK_URL
   Value: https://tu-webhook.com/endpoint
   ```
4. Save → Restart

### 2. Custom Domain

Si querés usar tu dominio propio:

1. Panel → Domains → Add Domain
2. Seguí el wizard
3. Una vez conectado, actualizá `Application URL` en Node.js settings

### 3. SSL/HTTPS

Hostinger activa SSL automáticamente. Si no:

1. Panel → SSL
2. Click **Install SSL** (gratis con Let's Encrypt)

### 4. CDN y Cache

Para máximo performance:

1. Panel → Speed → CDN
2. Enable Hostinger CDN
3. Purge cache después de cada deploy

---

## 🆘 ÚLTIMO RECURSO

Si NADA funciona:

### Plan B: Deploy en Vercel (5 minutos, GRATIS)

Next.js es de Vercel, es literalmente plug & play:

```bash
# En tu Mac:
npm install -g vercel
cd "/Applications/Proyectos/Luz Cuántica"
vercel login
vercel --prod
```

Te va a dar una URL tipo: `luz-cuantica.vercel.app`

Podés conectar tu dominio custom desde panel Vercel.

**Ventajas Vercel vs Hostinger:**
- ✅ Zero config (funciona al primer deploy)
- ✅ CDN global automático
- ✅ HTTPS automático
- ✅ Deploy preview por cada push
- ✅ Rollback con 1 click
- ✅ Analytics incluído
- ✅ 100GB bandwidth gratis/mes

**Desventajas:**
- Limitado a 100GB/mes (suficiente para empezar)
- Si después necesitás más, pasás a plan Pro ($20/mes)

---

## 📞 SOPORTE

Si después de todo esto seguís con problemas:

1. Corrí el script: `bash diagnostico.sh`
2. Copiá TODO el output
3. Mandame screenshot del panel Node.js (sección Settings)
4. Decime qué mensaje de error exacto ves en el navegador

Con eso te doy el fix exacto en minutos.

---

**Última actualización:** 28 enero 2026  
**Versión Next.js:** 14.2.35  
**Node version recomendada:** 18.x o superior
