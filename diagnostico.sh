#!/bin/bash
# Script de diagnóstico para Hostinger Node.js deployment
# Corre esto en SSH: bash diagnostico.sh

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 DIAGNÓSTICO HOSTINGER - Sistema Luz Cuántica"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1. Ubicación actual
echo "📁 1. Directorio actual:"
pwd
echo ""

# 2. Archivos en root
echo "📄 2. Archivos en root del proyecto:"
ls -lah | grep -E "(package.json|next.config|.next|node_modules)"
echo ""

# 3. Verificar .next existe
echo "🏗️  3. Build .next/:"
if [ -d ".next" ]; then
    echo "✅ Folder .next/ existe"
    echo "   Tamaño: $(du -sh .next | cut -f1)"
    echo "   Última modificación: $(stat -c %y .next 2>/dev/null || stat -f "%Sm" .next)"
else
    echo "❌ Folder .next/ NO EXISTE - necesitás hacer npm run build"
fi
echo ""

# 4. CSS files
echo "🎨 4. Archivos CSS generados:"
if [ -d ".next/static/css" ]; then
    ls -lh .next/static/css/ | tail -n +2
    echo ""
    echo "   Hashes encontrados:"
    ls .next/static/css/*.css 2>/dev/null | xargs -n1 basename | sed 's/\.css$//'
else
    echo "❌ No hay archivos CSS - build incompleto"
fi
echo ""

# 5. Chunks JS
echo "📦 5. Chunks JavaScript:"
if [ -d ".next/static/chunks" ]; then
    echo "   Total chunks: $(find .next/static/chunks -name "*.js" | wc -l)"
    echo "   Primeros 5:"
    find .next/static/chunks -name "*.js" | head -5 | xargs -n1 basename
else
    echo "❌ No hay chunks - build incompleto"
fi
echo ""

# 6. Node version
echo "🟢 6. Node version:"
node --version
echo ""

# 7. npm version
echo "📦 7. npm version:"
npm --version
echo ""

# 8. package.json scripts
echo "📜 8. Scripts en package.json:"
if [ -f "package.json" ]; then
    cat package.json | grep -A 10 '"scripts"'
else
    echo "❌ package.json NO ENCONTRADO"
fi
echo ""

# 9. Procesos Node corriendo
echo "⚙️  9. Procesos Node activos:"
ps aux | grep -E "[n]ode|[n]pm|[n]ext" | head -5
NODECOUNT=$(ps aux | grep -E "[n]ode|[n]pm|[n]ext" | wc -l)
if [ "$NODECOUNT" -eq 0 ]; then
    echo "❌ NO HAY PROCESOS NODE CORRIENDO"
    echo "   → La app necesita estar corriendo para servir /_next/static"
else
    echo "✅ Hay $NODECOUNT proceso(s) Node corriendo"
fi
echo ""

# 10. Variables de entorno
echo "🔐 10. Variables de entorno relevantes:"
env | grep -E "PORT|NODE_ENV|HOSTNAME" | sort
echo ""

# 11. .env files
echo "📝 11. Archivos de configuración:"
ls -lah | grep -E "\.env"
if [ $? -ne 0 ]; then
    echo "   (No hay archivos .env)"
fi
echo ""

# 12. Espacio en disco
echo "💾 12. Espacio en disco:"
df -h . | tail -1
echo ""

# 13. Permisos
echo "🔒 13. Permisos del proyecto:"
ls -ld .
ls -ld .next 2>/dev/null
echo ""

# 14. Test de puerto local
echo "🌐 14. Test de servidor local:"
for port in 3000 8080 8000 5000; do
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:$port --max-time 2 | grep -q "200\|301\|302"; then
        echo "✅ Puerto $port responde"
    fi
done
echo ""

# 15. .next/BUILD_ID
echo "🆔 15. Build ID:"
if [ -f ".next/BUILD_ID" ]; then
    echo "   Build ID: $(cat .next/BUILD_ID)"
else
    echo "❌ No existe .next/BUILD_ID"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RESUMEN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Resumen de problemas
PROBLEMAS=0

if [ ! -d ".next" ]; then
    echo "❌ PROBLEMA: .next/ no existe → Corré: npm run build"
    PROBLEMAS=$((PROBLEMAS + 1))
fi

if [ ! -d ".next/static/css" ] || [ -z "$(ls -A .next/static/css 2>/dev/null)" ]; then
    echo "❌ PROBLEMA: No hay archivos CSS → Build incompleto"
    PROBLEMAS=$((PROBLEMAS + 1))
fi

if [ "$NODECOUNT" -eq 0 ]; then
    echo "❌ PROBLEMA: Node no está corriendo → Iniciá la app en panel Hostinger"
    PROBLEMAS=$((PROBLEMAS + 1))
fi

if [ ! -f "package.json" ]; then
    echo "❌ PROBLEMA: package.json no está en este directorio"
    echo "   → Verificá Application Root en panel Hostinger"
    PROBLEMAS=$((PROBLEMAS + 1))
fi

if [ "$PROBLEMAS" -eq 0 ]; then
    echo "✅ No se detectaron problemas obvios"
    echo ""
    echo "Si seguís con error 404 en /_next/static:"
    echo "1. Reiniciá la app en panel Hostinger (Node.js App → Restart)"
    echo "2. Limpiá cache del navegador (Ctrl+Shift+R)"
    echo "3. Verificá que Application Root apunte a: $(pwd)"
else
    echo ""
    echo "Total de problemas encontrados: $PROBLEMAS"
    echo ""
    echo "🔧 PRÓXIMOS PASOS:"
    echo "1. Corregí los problemas listados arriba"
    echo "2. Corré este script de nuevo: bash diagnostico.sh"
    echo "3. Si persiste, mandá el output completo de este script"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Diagnóstico completado: $(date)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
