'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Layers, Zap } from 'lucide-react';

export function WhatIs() {
  const features = [
    {
      icon: Shield,
      title: 'Arquitectura Cerrada',
      description: 'Sistema soberano e incorruptible con protocolos técnicos definidos. No es autoservicio ni método replicable.',
    },
    {
      icon: Target,
      title: 'Límites Claros',
      description: 'Derecho de admisión absoluto. Acceso por evaluación previa. No garantizamos resultados específicos.',
    },
    {
      icon: Layers,
      title: 'Planos de Operación',
      description: 'Intervención en capas energéticas, informacionales y de conciencia. No es salud ni terapia convencional.',
    },
    {
      icon: Zap,
      title: 'Excelencia Operativa',
      description: 'Coherencia entre estructura, protocolo y ejecución. Sin dramatización, sin sugestión, sin dogmas.',
    },
  ];

  return (
    <section className="py-20 bg-quantum-dark" id="que-es">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Qué es el Sistema Luz Cuántica?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Una estructura de transformación consciente que opera bajo protocolos técnicos rigurosos, sin misticismo ni promesas infundadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-quantum-cyan/30 bg-quantum-darker/50 hover:border-quantum-cyan hover:bg-quantum-cyan/5 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-quantum-cyan to-quantum-purple flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg border border-quantum-gold/30 bg-quantum-gold/5">
          <h3 className="text-xl font-bold text-quantum-gold mb-4">Marco Profesional</h3>
          <div className="space-y-3 text-gray-300">
            <p>
              • <strong>NO somos salud:</strong> No diagnosticamos, no prescribimos, no tratamos enfermedades. No reemplazamos atención médica, psicológica ni psiquiátrica.
            </p>
            <p>
              • <strong>Naturaleza intangible:</strong> Operamos en planos energético e informacional. Los procesos son experienciales y variables.
            </p>
            <p>
              • <strong>Sin garantías:</strong> No garantizamos resultados específicos ni tiempos definidos. Autonomía y responsabilidad personal.
            </p>
            <p>
              • <strong>Decisión soberana:</strong> El núcleo central bajo conducción de Sergio Andrés López Madeo determina aptitud, herramientas y continuidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
