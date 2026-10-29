import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustPillars } from './components/TrustPillars';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { PurificationSection } from './components/PurificationSection';
import { QualityLicences } from './components/QualityLicences';
import { ArmyCommitment } from './components/ArmyCommitment';
import { DistributorSection } from './components/DistributorSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { OwnerChecklistModal } from './components/OwnerChecklistModal';

export function App() {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <Header onOpenChecklist={() => setIsChecklistOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TrustPillars />
        <AboutSection />
        <ProductsSection />
        <PurificationSection />
        <QualityLicences />
        <ArmyCommitment />
        <DistributorSection />
      </main>

      {/* Footer */}
      <Footer onOpenChecklist={() => setIsChecklistOpen(true)} />

      {/* Sticky QR Mobile Quick Access Bar */}
      <MobileQuickBar />

      {/* Owner & Data Integrity Verification Modal */}
      <OwnerChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />
    </div>
  );
}

export default App;
