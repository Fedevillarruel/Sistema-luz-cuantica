'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Layers, Zap } from 'lucide-react';
import Image from 'next/image';

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
            ¿Qué es el Sistema Luz Cuántica®?
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

        <div className="mt-16 overflow-hidden rounded-2xl border border-quantum-gold/30">
          {/* Banner de imagen con fade inferior */}
          <div className="relative w-full">
            <Image
              src="/WhatsApp%20Image%202026-06-06%20at%2009.52.24.jpeg"
              alt="Genetic Quanty — Marco Profesional"
              width={2400}
              height={1200}
              className="block w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
              priority
            />
            {/* Fade inferior para transición suave al contenido */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-quantum-darker to-transparent" />
          </div>

          {/* Contenido */}
          <div className="bg-quantum-darker px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-quantum-gold mb-2 tracking-wide text-center">
              Marco Profesional
            </h3>
            <div className="mx-auto mb-8 w-16 h-px bg-gradient-to-r from-transparent via-quantum-gold to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'NO somos salud', desc: 'No diagnosticamos, no prescribimos, no tratamos enfermedades. No reemplazamos atención médica, psicológica ni psiquiátrica.' },
                { title: 'Naturaleza intangible', desc: 'Operamos en planos energético e informacional. Los procesos son experienciales y variables.' },
                { title: 'Sin garantías', desc: 'No garantizamos resultados específicos ni tiempos definidos. Autonomía y responsabilidad personal.' },
                { title: 'Decisión soberana', desc: 'El núcleo central bajo conducción de Sergio Andrés López Madeo determina aptitud, herramientas y continuidad.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-quantum-gold/5 border border-quantum-gold/15 hover:border-quantum-gold/35 transition-colors">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-quantum-gold/70 mt-2" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-quantum-gold/90 font-semibold">{item.title}:</strong>{' '}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Email CTA */}
            <div className="flex justify-center">
              <a
                href="mailto:geneticquanty@sistemaluzcuantica.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-quantum-gold/50 bg-quantum-gold/10 text-quantum-gold font-semibold text-sm hover:bg-quantum-gold/20 hover:border-quantum-gold transition-all tracking-wide"
              >
                <span>✉</span>
                geneticquanty@sistemaluzcuantica.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
