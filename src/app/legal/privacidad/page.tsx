import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-quantum-darker text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-quantum-cyan hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Información que Recopilamos</h2>
            <p>
              Recopilamos información personal que usted nos proporciona voluntariamente al solicitar servicios: nombre, email, país, WhatsApp, y motivo de consulta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Uso de la Información</h2>
            <p>Utilizamos su información para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Procesar evaluaciones y servicios solicitados</li>
              <li>Comunicarnos con usted sobre su solicitud</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir obligaciones legales si aplica</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. No Compartimos su Información</h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea legalmente requerido o con su consentimiento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Sus Derechos (GDPR - Usuarios UE)</h2>
            <p>Si reside en la Unión Europea, tiene derecho a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Solicitar portabilidad de datos</li>
            </ul>
            <p className="mt-2">Para ejercer estos derechos: contacto@luzcuantica.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Cookies</h2>
            <p>
              Consulte nuestra <Link href="/legal/cookies" className="text-quantum-cyan hover:underline">Política de Cookies</Link> para información sobre el uso de cookies en este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Contacto</h2>
            <p>
              Para consultas sobre privacidad: contacto@luzcuantica.com
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
