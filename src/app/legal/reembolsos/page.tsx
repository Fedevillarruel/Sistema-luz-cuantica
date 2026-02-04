import Link from 'next/link';

export default function ReembolsosPage() {
  return (
    <div className="min-h-screen bg-quantum-darker text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-quantum-cyan hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-8">Política de Reembolsos</h1>

        <div className="space-y-6 text-gray-300">
          <section className="p-6 border-2 border-quantum-gold/50 bg-quantum-gold/5 rounded-lg">
            <p className="text-xl font-bold text-quantum-gold">
              TODOS LOS PAGOS SON NO REEMBOLSABLES
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Política General</h2>
            <p>
              Todos los pagos realizados por servicios del Sistema Luz Cuántica® son definitivos y NO reembolsables bajo ninguna circunstancia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Sin Cancelaciones con Devolución</h2>
            <p>
              No se aceptan cancelaciones con devolución de dinero. Una vez realizado el pago, se considera definitivo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Sin Reclamo Económico</h2>
            <p>
              No existe derecho a reclamo económico posterior al pago. Al abonar, el usuario acepta esta condición de manera irrevocable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Naturaleza de los Servicios</h2>
            <p>
              Los servicios son de naturaleza experiencial, intangible e informacional. No garantizamos resultados específicos, por lo tanto no proceden reembolsos por "resultados no obtenidos".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Evaluación Energética S.L.C</h2>
            <p>
              El pago de la Evaluación Energética NO garantiza acceso automático a otros servicios del sistema. La evaluación es un servicio en sí mismo, no reembolsable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Derecho de Admisión</h2>
            <p>
              El ejercicio del derecho de admisión (denegación o discontinuación de servicios) no genera derecho a reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Errores de Pago</h2>
            <p>
              En caso de error técnico en el procesamiento de pago (pago duplicado, monto incorrecto por error del sistema), contacte inmediatamente a sistemaluzcuantica@gmail.com. Cada caso será evaluado individualmente.
            </p>
            <p className="mt-2">
              Los errores de usuario (pago del servicio equivocado, cambio de opinión, etc.) NO generan derecho a reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Aceptación Obligatoria</h2>
            <p>
              Al realizar cualquier pago, el usuario declara haber leído, comprendido y aceptado esta Política de Reembolsos de manera irrevocable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Contacto</h2>
            <p>
              Consultas: sistemaluzcuantica@gmail.com
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
