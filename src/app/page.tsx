'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { Hero } from '@/components/sections/Hero';
import { WhatIs } from '@/components/sections/WhatIs';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ProtocolSection } from '@/components/sections/ProtocolSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { IntakeSection } from '@/components/sections/IntakeSection';
import { PaymentsModal } from '@/components/modals/PaymentsModal';
import { useRegion } from '@/hooks/useRegion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import { ContactForm } from '@/components/forms/ContactForm';

export default function HomePage() {
  const { region, loading, changeRegion, regionConfig } = useRegion();
  const [evaluationModalOpen, setEvaluationModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [paymentsOpen, setPaymentsOpen] = useState(false);

  const isEU = region === 'EU';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-quantum-darker">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-quantum-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-quantum-darker quantum-stars">
      <Header
        region={region}
        onRegionChange={changeRegion}
        onOpenEvaluation={() => setEvaluationModalOpen(true)}
      />

      <main>
        <Hero
          onOpenEvaluation={() => setEvaluationModalOpen(true)}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

  <VideoShowcase />

        <WhatIs />

        <ServicesSection
          region={region}
          currency={regionConfig.currency}
          onRequestEvaluation={() => setEvaluationModalOpen(true)}
          onRequestBioLinkAnimal={() => {
            const el = document.getElementById('intake');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          onRequestBioLinkHabitat={() => {
            const el = document.getElementById('intake');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />

        <PricingSection
          region={region}
          currency={regionConfig.currency}
          regionName={regionConfig.name}
          onOpenPayments={() => setPaymentsOpen(true)}
        />

        <ProtocolSection />

        <section id="intake">
          <IntakeSection
            regionLabel={`${regionConfig.name} (${regionConfig.currency})`}
            onOpenEvaluation={() => setEvaluationModalOpen(true)}
          />
        </section>

        <FaqSection />

        <section id="contacto" className="py-20 bg-quantum-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Contacto</h2>
              <p className="text-gray-400 mb-8 text-center">
                Completa el formulario para solicitar tu Evaluación Energética S.L.C
              </p>
              <div className="bg-quantum-dark p-8 rounded-lg border border-quantum-cyan/30">
                <ContactForm onSuccess={() => setEvaluationModalOpen(false)} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CookieBanner isEU={isEU} />

  <PaymentsModal open={paymentsOpen} onOpenChange={setPaymentsOpen} region={region} />

      {/* Modal Evaluación */}
      <Dialog open={evaluationModalOpen} onOpenChange={setEvaluationModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Solicitar Evaluación Energética S.L.C</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setEvaluationModalOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Modal Video */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Presentación del Sistema</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-quantum-darker rounded-lg flex items-center justify-center text-gray-500">
            <p>Video placeholder - Configurar NEXT_PUBLIC_VIDEO_URL</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
