'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '@/hooks/useLanguage';

interface HeroProps {
  onOpenEvaluation: () => void;
  onOpenVideo: () => void;
}

export function Hero({ onOpenEvaluation, onOpenVideo }: HeroProps) {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat scale-[0.95]" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantum-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantum-purple/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">{t.hero.title}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={onOpenEvaluation} size="lg">
              {t.hero.ctaEvaluation}
            </Button>
            <Button onClick={onOpenVideo} variant="outline" size="lg">
              <Play className="w-5 h-5" />
              {t.hero.ctaVideo}
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
            <span>{t.hero.scrollLabel}</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20"
              aria-hidden
            >
              <ChevronDown className="h-5 w-5 text-quantum-orange" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
