# 🚀 DEPLOY A HOSTINGER - Guía Paso a Paso

**Fecha:** 4 de febrero de 2026  
**Proyecto:** Sistema Luz Cuántica®  
**URL:** https://darkcyan-walrus-608135.hostingersite.com

---

## ✅ QUÉ YA ESTÁ LISTO

- ✅ Código pusheado a GitHub (commit `7ce310f`)
- ✅ Build local exitoso (0 errores)
- ✅ Traducciones completas
- ✅ Contactos oficiales actualizados
- ✅ Trademark ® aplicado

---

## 🎯 OPCIÓN 1: Deploy Automático con Git (RECOMENDADO)

### Paso 1: Configurar Git en Hostinger (solo 1ra vez)

1. **Login a Hostinger**: https://hpanel.hostinger.com
2. **Websites** → Seleccionar tu sitio
3. **Git** (menú lateral)
4. **Connect to Git**
5. Seleccionar **GitHub**
6. Autorizar Hostinger
7. Configurar:
   ```
   Repository: Fedevillarruel/Sistema-luz-cuantica
   Branch: main
   Deployment path: /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
   ```
8. **Connect**

### Paso 2: Deploy Automático

Cada vez que hagas `git push origin main`:

1. Hostinger detecta el cambio
2. Hace `git pull` automáticamente
3. Ejecuta build scripts (si están configurados)

**O manualmente:**

1. Panel Hostinger → **Git**
2. Click **Pull & Deploy**
3. Esperar confirmación "Deployment successful"

### Paso 3: Rebuild y Reiniciar

Después del pull:

1. Panel → **Node.js**
2. **Manage** → **Restart Application**
3. Esperar 10-15 segundos
4. Verificar estado = "Running" ✅

---

## 🎯 OPCIÓN 2: Deploy Manual por SSH

### Paso 1: Conectar por SSH

```bash
# Copiar comando SSH desde panel Hostinger → SSH Access
ssh u123456789@darkcyan-walrus-608135.hostingersite.com
```

### Paso 2: Navegar al Proyecto

```bash
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
```

### Paso 3: Pull Cambios

```bash
git pull origin main
```

### Paso 4: Instalar Dependencias

```bash
npm install
```

### Paso 5: Build

```bash
npm run build
```

Esto genera la carpeta `.next/` optimizada.

### Paso 6: Reiniciar

Desde el panel Hostinger:
- **Node.js** → **Manage** → **Restart Application**

---

## 🎯 OPCIÓN 3: Deploy Manual con FTP (NO RECOMENDADO)

Si por alguna razón no podés usar Git:

### Archivos a Subir

```
✅ SUBIR:
├── .next/                  ← Build completo (carpeta entera)
├── public/                 ← Imágenes, robots.txt, etc.
├── node_modules/           ← Solo si no hay npm en servidor
├── package.json
├── package-lock.json
├── next.config.js
└── .env.local              ← Si tenés variables de entorno

❌ NO SUBIR:
├── src/                    ← Código fuente (no necesario en producción)
├── .git/                   ← Repositorio Git
├── node_modules/           ← Si el servidor tiene npm
└── TRADUCCIONES_*.md       ← Documentación
```

### Pasos FTP

1. **Panel Hostinger** → **File Manager** o usar cliente FTP
2. **Conectar:**
   - Host: `ftp.darkcyan-walrus-608135.hostingersite.com`
   - Usuario: (ver en panel)
   - Puerto: 21
3. **Navegar a:**
   ```
   /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
   ```
4. **Subir:**
   - `.next/` (toda la carpeta)
   - `public/`
   - `package.json`
   - `next.config.js`
5. **Desde SSH ejecutar:**
   ```bash
   cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
   npm install
   ```
6. **Reiniciar** desde panel Node.js

---

## 📋 CHECKLIST PRE-DEPLOY

Antes de deployar, verificá:

- [ ] Build local exitoso: `npm run build`
- [ ] No hay errores de TypeScript
- [ ] `.env.local` tiene las variables correctas (si es necesario)
- [ ] Git tiene todos los commits pusheados
- [ ] `package.json` tiene script `"start": "next start"`

---

## 🔧 Configuración Node.js en Hostinger

Verificar que esté configurado así:

```
Application mode:      Production
Application root:      /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
Application URL:       https://darkcyan-walrus-608135.hostingersite.com
Application startup:   npm start
Node.js version:       18.x o superior
```

---

## 🐛 TROUBLESHOOTING

### Problema 1: Errores 404 en `/_next/static/*`

**Causa:** Build antiguo en servidor

**Solución:**
```bash
# Por SSH:
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
rm -rf .next
npm run build
# Luego reiniciar desde panel
```

### Problema 2: "Application failed to start"

**Causa:** Falta `npm install` o error en build

**Solución:**
```bash
# Por SSH:
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
npm install
npm run build
# Verificar logs:
cat /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica/logs/error.log
```

### Problema 3: Cambios no se ven

**Causa:** Caché del navegador o servidor

**Solución:**
1. Reiniciar aplicación en panel
2. Limpiar caché del navegador (Ctrl+Shift+R)
3. Verificar que hiciste `git push` correctamente

### Problema 4: Estilos rotos

**Causa:** Archivos estáticos no encontrados

**Solución:**
- Verificar que `.next/static/` existe en el servidor
- Verificar que `public/` está subido
- Reiniciar aplicación

---

## ✅ VERIFICACIÓN POST-DEPLOY

1. **Abrir:** https://darkcyan-walrus-608135.hostingersite.com

2. **Verificar visualmente:**
   - [ ] Logo y estilos cargan correctamente
   - [ ] Imágenes visibles
   - [ ] Selector de idioma funciona (ES/EN/PT)
   - [ ] Formularios funcionan
   - [ ] WhatsApp links correctos (+54 9 2657 283150)

3. **DevTools (F12) → Console:**
   - [ ] No hay errores rojos
   - [ ] No hay warnings de recursos faltantes

4. **DevTools → Network:**
   - [ ] No hay 404 en `/_next/static/`
   - [ ] CSS carga correctamente
   - [ ] JavaScript chunks cargan

5. **Lighthouse (opcional):**
   - Performance > 80
   - SEO > 90
   - Best Practices > 90

---

## 🚀 DEPLOY RÁPIDO (Resumen)

Si ya configuraste Git:

```bash
# 1. En tu computadora:
git add -A
git commit -m "feat: Tu mensaje"
git push origin main

# 2. En panel Hostinger:
# Git → Pull & Deploy
# Node.js → Manage → Restart Application

# 3. Verificar:
# Abrir https://darkcyan-walrus-608135.hostingersite.com
```

**Tiempo total:** 2-3 minutos ⚡

---

## 📞 CONTACTO SOPORTE

Si tenés problemas:

- **Hostinger Support:** https://www.hostinger.com/contact
- **Chat en vivo:** Disponible 24/7 en panel
- **Documentación:** https://support.hostinger.com

---

## 📝 NOTAS IMPORTANTES

1. **NUNCA editar archivos directamente en el servidor** (usar Git)
2. **Siempre hacer backup antes de cambios mayores**
3. **Verificar build local antes de pushear**
4. **Usar variables de entorno para datos sensibles**
5. **Mantener Node.js actualizado** (mínimo v18)

---

## 🎉 BONUS: Deploy con Vercel (Alternativa)

Si Hostinger da problemas, Vercel es **MUCHO más fácil**:

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# Listo! URL en 30 segundos
```

**Ventajas Vercel:**
- Deploy automático con cada push
- Preview deployments en cada PR
- Edge functions gratis
- Analytics incluido
- SSL automático
- No config necesaria

---

**Última actualización:** 4 de febrero de 2026  
**Build actual:** 7ce310f  
**Estado:** ✅ Listo para deploy
