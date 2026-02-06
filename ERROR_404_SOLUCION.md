# 🚨 ERROR 404: Build Desactualizado en Hostinger

**Fecha:** 6 de febrero de 2026  
**Error:** ChunkLoadError - Loading chunk 931 failed  
**Causa:** Build antiguo en servidor, HTML desactualizado

---

## ❌ Error Detectado

```
Failed to load resource: 
https://darkcyan-walrus-608135.hostingersite.com/_next/static/chunks/app/page-7414f922fe740288.js
404 (Not Found)

ChunkLoadError: Loading chunk 931 failed.
```

**Diagnóstico:**
- ✅ Git push exitoso (commit `412ad0f`)
- ✅ Build local exitoso
- ❌ Servidor sirviendo build antiguo
- ❌ HTML desactualizado apuntando a chunks inexistentes

---

## ✅ SOLUCIÓN RÁPIDA (3 pasos)

### Opción A: Desde Panel Hostinger (RECOMENDADO)

1. **Ir a Hostinger Panel:** https://hpanel.hostinger.com
2. **Git → Pull & Deploy:**
   - Click en "Pull & Deploy"
   - Esperar mensaje "Deployment successful"
3. **Node.js → Restart:**
   - Click en "Manage"
   - Click en "Restart Application"
   - Esperar estado "Running" ✅

**Tiempo:** 2-3 minutos

---

### Opción B: Por SSH (Avanzado)

```bash
# 1. Conectar por SSH
ssh u123456789@darkcyan-walrus-608135.hostingersite.com

# 2. Ir al proyecto
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica

# 3. Pull cambios
git pull origin main

# 4. Ver qué cambió
git log --oneline -5

# 5. IMPORTANTE: Borrar build viejo
rm -rf .next

# 6. Reinstalar dependencias (por si acaso)
npm install

# 7. Rebuild
npm run build

# 8. Verificar que .next existe
ls -la .next/

# 9. Salir
exit
```

Luego desde panel: **Node.js → Manage → Restart Application**

---

## 🔍 Verificación

### 1. Verificar que Git está actualizado

```bash
ssh u123456789@darkcyan-walrus-608135.hostingersite.com
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
git log --oneline -1
# Debe mostrar: 412ad0f feat: Agregado servicio 'Libros y Novedades'...
```

### 2. Verificar que build existe

```bash
ls -la .next/static/chunks/app/
# Debe listar: page-7414f922fe740288.js
```

### 3. Verificar en navegador

1. Abrir: https://darkcyan-walrus-608135.hostingersite.com
2. **Ctrl+Shift+R** (hard refresh, limpia caché)
3. Abrir DevTools (F12) → Console
4. **NO debe haber errores 404**

---

## 🧪 Comandos de Diagnóstico

### Script Automático

```bash
#!/bin/bash
# diagnostico-hostinger.sh

echo "=== DIAGNÓSTICO HOSTINGER ==="
echo ""

# 1. Verificar Git
echo "1. Último commit en servidor:"
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
git log --oneline -1

# 2. Verificar rama
echo ""
echo "2. Rama actual:"
git branch

# 3. Verificar que está sincronizado
echo ""
echo "3. Estado Git:"
git status

# 4. Verificar build
echo ""
echo "4. Carpeta .next existe:"
if [ -d ".next" ]; then
    echo "✅ .next existe"
    echo "   Tamaño: $(du -sh .next | cut -f1)"
else
    echo "❌ .next NO existe - NECESITA REBUILD"
fi

# 5. Verificar chunks
echo ""
echo "5. Chunks de app:"
ls -lh .next/static/chunks/app/ | head -10

# 6. Verificar node_modules
echo ""
echo "6. node_modules existe:"
if [ -d "node_modules" ]; then
    echo "✅ node_modules existe"
else
    echo "❌ node_modules NO existe - NECESITA npm install"
fi

# 7. Verificar package.json
echo ""
echo "7. Script start en package.json:"
grep '"start"' package.json

echo ""
echo "=== FIN DIAGNÓSTICO ==="
```

### Ejecutar diagnóstico:

```bash
ssh u123456789@darkcyan-walrus-608135.hostingersite.com 'bash -s' < diagnostico-hostinger.sh
```

---

## 📋 Checklist de Troubleshooting

- [ ] **Git actualizado:**
  ```bash
  git log --oneline -1
  # Debe mostrar: 412ad0f
  ```

- [ ] **Build existe:**
  ```bash
  ls .next/static/chunks/app/page-*.js
  # Debe listar archivos
  ```

- [ ] **Node modules instalados:**
  ```bash
  ls node_modules/next
  # Debe existir
  ```

- [ ] **Aplicación corriendo:**
  - Panel → Node.js → Estado = "Running"

- [ ] **Navegador actualizado:**
  - Ctrl+Shift+R (hard refresh)
  - Incógnito para verificar sin caché

---

## 🔄 Proceso de Deploy Completo

### Cada vez que hagas cambios:

```bash
# 1. LOCAL: Build y push
npm run build          # Verificar que compila
git add -A
git commit -m "..."
git push origin main

# 2. HOSTINGER PANEL:
# → Git → Pull & Deploy
# → Node.js → Restart Application

# 3. VERIFICAR:
# → Abrir sitio en incógnito
# → F12 → Console (no debe haber errores)
```

---

## 🚨 Si Sigue Fallando

### Reset Total del Build

```bash
# Por SSH:
cd /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica

# 1. Borrar TODO el build viejo
rm -rf .next
rm -rf node_modules

# 2. Pull fresco
git reset --hard origin/main
git pull origin main

# 3. Reinstalar TODO
npm install

# 4. Build desde cero
npm run build

# 5. Verificar
ls -la .next/static/chunks/app/
```

Luego: **Panel → Node.js → Restart**

---

## 💡 Prevención

### Configurar Auto-Deploy en Hostinger

1. **Panel → Git → Settings**
2. Activar **"Auto-deploy on push"**
3. Configurar:
   ```
   Branch: main
   Build command: npm run build
   Deploy path: /domains/darkcyan-walrus-608135.hostingersite.com/Sistema-luz-cuantica
   ```

Así cada `git push` hace auto-deploy.

---

## 🆘 Migrar a Vercel (Plan B)

Si Hostinger sigue dando problemas:

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# Listo en 30 segundos 🚀
```

**Ventajas Vercel:**
- Deploy automático con cada push
- Preview deployments
- SSL gratis
- CDN global
- CERO configuración
- CERO problemas de build

---

## 📞 Soporte

**Hostinger Chat:** https://www.hostinger.com/contact  
**Disponible:** 24/7 en español

**Documentación:**
- HOSTINGER_FIX.md
- GUIA_HOSTINGER.md
- DEPLOY_HOSTINGER.md

---

**Estado Actual:**
- ✅ Local: Build exitoso (commit 412ad0f)
- ❌ Hostinger: Build antiguo (necesita pull + rebuild + restart)
- 🎯 Solución: Opción A (Panel) o Opción B (SSH)

**Tiempo estimado:** 2-5 minutos
