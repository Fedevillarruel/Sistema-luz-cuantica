# 🌐 AUDITORÍA DE TRADUCCIONES - Sistema Luz Cuántica

## ✅ ESTADO ACTUAL

### Archivos actualizados con traducciones completas:

#### 1. **`src/lib/i18n.ts`** ✅ COMPLETO
- ✅ Hero section
- ✅ Header/Footer
- ✅ Services section
- ✅ Pricing section + modal
- ✅ Protocol section
- ✅ FAQ section
- ✅ Forms (ContactForm)
- ✅ BioLink Animal (formulario completo)
- ✅ BioLink Habitat (formulario completo)
- ✅ Cookies banner
- ✅ Common (botones, acciones, estados)

**Total traducciones:** 150+ keys en 3 idiomas (ES/EN/PT)

#### 2. **`src/components/forms/ContactForm.tsx`** ✅ ACTUALIZADO
- Usa `useLanguage()` hook
- Todos los labels/placeholders traducidos
- Mensajes de error traducidos
- Toast messages traducidos
- Validaciones Zod con mensajes en idioma activo

---

## 📋 COMPONENTES PENDIENTES DE ACTUALIZACIÓN

### 🔴 PRIORIDAD ALTA (visibles en home/modales)

#### 1. **`src/components/modals/PaymentsModal.tsx`**
Textos hardcodeados a traducir:
```tsx
- "Medios de pago"
- "No hay métodos configurados para esta región todavía."
- "Pagos: definitivos y no reembolsables..."
- "Copiar"
- "Copiado"
```
**Keys ya disponibles:** `t.pricing.paymentsModalTitle`, `t.pricing.noMethodsAvailable`, `t.pricing.paymentNotice`, `t.common.copy`, `t.common.copied`

#### 2. **`src/components/layout/CookieBanner.tsx`**
Textos hardcodeados:
```tsx
- "Uso de Cookies"
- "Utilizamos cookies necesarias..."
- "Más información"
- "Necesarias" / "Analíticas" / "Marketing"
- "Siempre activas" / "Medición anónima" / etc
- "Aceptar todo" / "Rechazar" / "Configurar" / "Guardar" / "Volver"
- "Permitir" / "Activas"
```
**Keys ya disponibles:** Todo en `t.cookies.*`

#### 3. **`src/components/sections/ServicesSection.tsx`**
Textos hardcodeados:
```tsx
- "Cerrar" (modal)
- "Precio a confirmar tras evaluación..."
- "Precio a confirmar por WhatsApp..."
```
**Keys ya disponibles:** `t.common.close`, `t.services.priceConfirmEvaluation`, `t.services.priceConfirmWhatsApp`

#### 4. **`src/components/sections/PricingSection.tsx`**
```tsx
- "Precio a confirmar tras evaluación (cuando aplique)..."
```
**Key disponible:** `t.services.priceConfirmEvaluation`

#### 5. **`src/components/sections/ProtocolSection.tsx`**
```tsx
- "Un marco explícito para evitar confusiones..."
- "Antes de enviar cualquier formulario..."
```
**Keys disponibles:** `t.protocol.description`, `t.protocol.beforeSubmit`

#### 6. **`src/components/sections/IntakeSection.tsx`**
```tsx
- "Al enviar, se abrirá WhatsApp con el mensaje prearmado para confirmar."
```
**Key disponible:** `t.forms.whatsappNote`

### 🟡 PRIORIDAD MEDIA (formularios específicos)

#### 7. **`src/components/forms/BioLinkAnimalForm.tsx`**
TODO el formulario está en español hardcodeado:
```tsx
- Labels: "Nombre y apellido (responsable)", "País", "Nombre del animal", "Especie", "Edad", "Supervisión veterinaria activa", "Contexto / Motivo"
- Placeholders: "Nombre", "Perro, gato, caballo...", "2 años", "Contá la situación del animal..."
- Checkboxes: "Acepto el Protocolo...", "Debés aceptar..."
- Botones: "Enviar por WhatsApp", "Preparando WhatsApp…"
- Toast: "Listo. Abrimos WhatsApp..."
```
**Keys disponibles:** Todo en `t.bioLinkAnimal.*`

#### 8. **`src/components/forms/BioLinkHabitatForm.tsx`**
Similar a BioLinkAnimal, TODO hardcodeado:
```tsx
- Labels empresa/contacto/activo
- Enum de tipos de activo
- Checkboxes de protocolo y garantías
```
**Keys disponibles:** Todo en `t.bioLinkHabitat.*`

### 🟢 PRIORIDAD BAJA (contenido legal, menos crítico)

#### 9-13. **Páginas `/legal/*`**
Las páginas legales están 100% en español:
- `/legal/terminos`
- `/legal/privacidad`
- `/legal/cookies`
- `/legal/disclaimer`
- `/legal/reembolsos`

**Recomendación:** Estas pueden quedar en español primero y traducirse después (contenido legal extenso).

---

## 🎯 PLAN DE IMPLEMENTACIÓN

### Fase 1: Componentes críticos (HOY) ✅
- [x] `i18n.ts` - Todas las traducciones
- [x] `ContactForm.tsx`
- [ ] `PaymentsModal.tsx`
- [ ] `CookieBanner.tsx`
- [ ] `ServicesSection.tsx`
- [ ] `PricingSection.tsx`
- [ ] `ProtocolSection.tsx`

### Fase 2: Formularios BioLink (SIGUIENTES)
- [ ] `BioLinkAnimalForm.tsx`
- [ ] `BioLinkHabitatForm.tsx`
- [ ] `IntakeSection.tsx`

### Fase 3: Páginas legales (OPCIONAL)
- [ ] Traducir contenido `/legal/*` o marcarlo como "ES only" temporalmente

---

## 🔧 PATRÓN DE ACTUALIZACIÓN

Para cada componente:

```tsx
// 1. Importar hook
import { useLanguage } from '@/hooks/useLanguage';

// 2. Usar en componente
export function MyComponent() {
  const { t } = useLanguage();
  
  // 3. Reemplazar strings hardcodeados
  return (
    <>
      <h1>{t.section.title}</h1>  {/* antes: "Mi Título" */}
      <button>{t.common.close}</button>  {/* antes: "Cerrar" */}
    </>
  );
}
```

Para validaciones Zod con traducciones:

```tsx
import { useMemo } from 'react';
import type { Translations } from '@/lib/i18n';

function createSchema(t: Translations) {
  return z.object({
    field: z.string().min(2, t.forms.fieldMinLength),
  });
}

export function Form() {
  const { t } = useLanguage();
  const schema = useMemo(() => createSchema(t), [t]);
  
  const form = useForm({
    resolver: zodResolver(schema),
  });
}
```

---

## 📊 COBERTURA ACTUAL

- **Traducciones definidas:** 150+ keys × 3 idiomas = **450+ traducciones**
- **Componentes actualizados:** 1/13 (8%)
- **Componentes críticos pendientes:** 6
- **Estimado de actualización:** 2-3 horas para todos los componentes

---

## ✅ TESTING CHECKLIST

Después de actualizar cada componente:

- [ ] Cambiar idioma a ES → verificar textos
- [ ] Cambiar idioma a EN → verificar textos
- [ ] Cambiar idioma a PT → verificar textos
- [ ] Verificar que NO haya "undefined" o "[object Object]"
- [ ] Validar formularios con mensajes de error en cada idioma
- [ ] Verificar modales (abrir/cerrar)
- [ ] Probar toasts de éxito/error

---

## 🚀 PRÓXIMOS PASOS INMEDIATOS

1. Actualizar `PaymentsModal.tsx` (5 min)
2. Actualizar `CookieBanner.tsx` (10 min)
3. Actualizar `ServicesSection.tsx` (10 min)
4. Actualizar `PricingSection.tsx` (5 min)
5. Actualizar `ProtocolSection.tsx` (5 min)
6. Build + test en los 3 idiomas
7. Commit & push

**Total estimado:** 45 min para componentes críticos.

¿Procedemos con la actualización automática de todos estos componentes?
