import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { PurificationSection } from './components/PurificationSection';
import { ArmyCommitment } from './components/ArmyCommitment';
import { DistributorSection } from './components/DistributorSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ArmyCommitment />
        <AboutSection />
        <ProductsSection />
        <PurificationSection />
        <DistributorSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
