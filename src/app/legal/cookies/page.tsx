import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-quantum-darker text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-quantum-cyan hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio recuerde sus preferencias y mejoren su experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Cookies que Utilizamos</h2>

            <div className="space-y-4 mt-4">
              <div className="p-4 border border-quantum-cyan/30 rounded-lg bg-quantum-dark">
                <h3 className="font-semibold text-white mb-2">1. Cookies Necesarias (Obligatorias)</h3>
                <p className="text-sm">
                  Esenciales para el funcionamiento del sitio. Permiten navegación básica, selección de región/moneda, y preferencias de cookies.
                </p>
                <p className="text-xs text-gray-500 mt-2">No se pueden desactivar sin afectar funcionalidad.</p>
              </div>

              <div className="p-4 border border-quantum-cyan/30 rounded-lg bg-quantum-dark">
                <h3 className="font-semibold text-white mb-2">2. Cookies de Analíticas (Opcionales)</h3>
                <p className="text-sm">
                  Nos ayudan a entender cómo los visitantes interactúan con el sitio. Información anónima sobre páginas visitadas, tiempo de permanencia, etc.
                </p>
                <p className="text-xs text-gray-500 mt-2">Solo se activan con su consentimiento.</p>
              </div>

              <div className="p-4 border border-quantum-cyan/30 rounded-lg bg-quantum-dark">
                <h3 className="font-semibold text-white mb-2">3. Cookies de Marketing (Opcionales)</h3>
                <p className="text-sm">
                  Permiten mostrar contenido relevante y medir efectividad de campañas. Pueden ser compartidas con terceros para publicidad.
                </p>
                <p className="text-xs text-gray-500 mt-2">Solo se activan con su consentimiento explícito.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">LocalStorage</h2>
            <p>
              Además de cookies, utilizamos localStorage del navegador para guardar:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Región seleccionada manualmente</li>
              <li>Caché de geolocalización (24h)</li>
              <li>Preferencias de cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Gestión de Consentimiento (GDPR - UE)</h2>
            <p>
              Si reside en la Unión Europea, se mostrará un banner de cookies al visitar el sitio por primera vez. Puede:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Aceptar todas las cookies</li>
              <li>Rechazar cookies opcionales (solo necesarias)</li>
              <li>Configurar preferencias específicas</li>
            </ul>
            <p className="mt-2">
              Su consentimiento se guarda localmente y puede modificarlo en cualquier momento desde el footer del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Cookies de Terceros</h2>
            <p>
              Actualmente no utilizamos cookies de terceros para analíticas ni publicidad. Si en el futuro integramos servicios de terceros (Google Analytics, etc.), actualizaremos esta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Cómo Bloquear Cookies</h2>
            <p>
              Puede bloquear cookies desde la configuración de su navegador:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
              <li>Firefox: Opciones &gt; Privacidad y seguridad</li>
              <li>Safari: Preferencias &gt; Privacidad</li>
            </ul>
            <p className="mt-2 text-sm text-yellow-400">
              Nota: Bloquear todas las cookies puede afectar funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Actualización de la Política</h2>
            <p>
              Podemos actualizar esta política periódicamente. Cambios significativos serán notificados mediante banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contacto</h2>
            <p>
              Consultas sobre cookies: contacto@luzcuantica.com
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Última actualización: Enero 2026
          </p>
        </div>
      </div>
    </div>
  );
}
