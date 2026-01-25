import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-quantum-darker text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-quantum-cyan hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">NO Somos Servicios de Salud</h2>
            <p className="font-semibold text-quantum-gold">
              Sistema Luz Cuántica®️ NO es un servicio médico, psicológico, psiquiátrico ni de salud convencional.
            </p>
            <p className="mt-2">
              NO diagnosticamos enfermedades. NO prescribimos medicamentos ni tratamientos. NO reemplazamos atención médica, psicológica ni psiquiátrica profesional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Alcance de los Servicios</h2>
            <p>
              Operamos en planos energético, informacional y de conciencia. Los servicios son de naturaleza intangible y experiencial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Declaración Sanitaria</h2>
            <p>
              Si tiene o sospecha tener una condición médica, psicológica o psiquiátrica, debe consultar a un profesional de salud licenciado.
            </p>
            <p className="mt-2">
              NO interferimos con tratamientos médicos. NO recomendamos suspender, modificar o ignorar prescripciones médicas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Sin Garantías de Resultados</h2>
            <p>
              NO garantizamos resultados específicos, tiempos definidos ni cambios particulares. Los procesos son variables según cada individuo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Autonomía y Responsabilidad Personal</h2>
            <p>
              El usuario mantiene total autonomía y responsabilidad personal sobre sus decisiones y su salud. S.L.C. no asume responsabilidad por decisiones tomadas por el usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">BioLink Animal S.L.C®️</h2>
            <p>
              NO reemplaza atención veterinaria. Requiere que el animal esté bajo supervisión veterinaria activa. NO es comunicación telepática ni mediúmnica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">BioLink Habitat & Mobility S.L.C®️</h2>
            <p>
              NO es limpieza energética ni feng shui. NO reemplaza ingeniería, arquitectura, mecánica ni mantenimiento profesional. Servicio intangible sin garantía de resultados económicos ni operativos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Uso de la Información</h2>
            <p>
              La información en este sitio es informativa. NO debe interpretarse como consejo médico, legal ni profesional.
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
