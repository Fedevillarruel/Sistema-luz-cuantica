import Link from 'next/link';

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-quantum-darker text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-quantum-cyan hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar los servicios del Sistema Luz Cuántica® (en adelante "S.L.C."), usted acepta estar vinculado por estos Términos y Condiciones. Si no está de acuerdo, no utilice nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Naturaleza de los Servicios</h2>
            <p>
              Los servicios ofrecidos por S.L.C. operan en planos energético, informacional y de conciencia. NO son servicios médicos, psicológicos, psiquiátricos ni de salud convencional.
            </p>
            <p className="mt-2">
              NO diagnosticamos enfermedades, NO prescribimos tratamientos, NO reemplazamos atención médica profesional. El usuario mantiene autonomía y responsabilidad personal sobre su salud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Evaluación Previa Obligatoria</h2>
            <p>
              El acceso a la mayoría de los servicios del sistema requiere Evaluación Energética S.L.C previa, excepto Reiki Energy Quantum.
            </p>
            <p className="mt-2">
              La Evaluación NO garantiza acceso automático a otros servicios. El núcleo central bajo conducción de Sergio Andrés López Madeo determina aptitud, herramientas coherentes y decisión de continuidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Derecho de Admisión</h2>
            <p>
              S.L.C. se reserva el derecho de admisión absoluto. Podemos denegar o discontinuar servicios sin necesidad de justificación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Pagos y Reembolsos</h2>
            <p>
              Todos los pagos son definitivos y NO reembolsables. No se aceptan cancelaciones con devolución de dinero. No existe reclamo económico posterior al pago.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Sin Garantías de Resultados</h2>
            <p>
              Los servicios son de naturaleza experiencial e intangible. NO garantizamos resultados específicos, tiempos definidos ni cambios particulares.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Propiedad Intelectual</h2>
            <p>
              "Sistema Luz Cuántica®", "S.L.C", "Reiki Energy Quantum", "GENETIC QUANTY", "BioLink Animal S.L.C", "BioLink Habitat & Mobility S.L.C" y demás marcas son propiedad exclusiva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Modificaciones</h2>
            <p>
              S.L.C. se reserva el derecho de modificar estos términos en cualquier momento. El uso continuado del sitio implica aceptación de las modificaciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Contacto</h2>
            <p>
              Para consultas sobre estos términos: sistemaluzcuantica@gmail.com
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
