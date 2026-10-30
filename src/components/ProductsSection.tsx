import React, { useState, useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { MessageSquare, Sparkles, Droplets, Check, ShieldCheck } from 'lucide-react';

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export const ProductsSection: React.FC = () => {
  const headerRef = useReveal();
  const gridRef = useReveal();
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights'>('overview');

  return (
    <section id="products" className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* ── Ambient Water Background Highlights ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, rgba(74,226,242,0.18) 0%, rgba(10,61,145,0.06) 50%, transparent 75%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 backdrop-blur-sm mb-3">
            <Droplets className="w-3.5 h-3.5 text-[#0A3D91]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0A3D91]">
              The Collection
            </p>
          </div>

          <h2
            className="font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Two Formats. Pure Excellence.
          </h2>

          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base max-w-lg mx-auto">
            Purified to the highest standards and enriched with Calcium and Magnesium.
            Select a format below to inspect packaging details.
          </p>

          {/* Interactive View Toggle */}
          <div className="inline-flex p-1 rounded-full bg-slate-100 mt-6 border border-slate-200/80 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-[#0A3D91] shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Overview &amp; Bottles
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('highlights')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'highlights'
                  ? 'bg-white text-[#0A3D91] shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Specifications &amp; Features
            </button>
          </div>
        </div>

        {/* Products Showcase: Side-by-side on tablet/desktop, stacked on mobile */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal delay-200 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto items-stretch"
        >
          {brandConfig.productVariants.map((variant, idx) => (
            <div
              key={variant.id}
              className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#F8FBFF] to-white border border-slate-200/80 hover:border-cyan-400/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A3D91] text-white text-xs font-bold tracking-wider shadow-sm">
                  {variant.volume}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" aria-hidden="true" />
                  Ca + Mg Enriched
                </span>
              </div>

              {/* Pedestal & Bottle Showcase with Water Floor Reflection */}
              <div className="relative py-8 flex flex-col items-center justify-center my-auto">
                {/* Frosted Water Circle Halo behind bottle */}
                <div
                  className="absolute w-48 h-48 rounded-full bg-blue-100/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Bottle Image */}
                <div className={`relative z-10 transition-transform duration-500 group-hover:scale-105 ${idx === 0 ? 'animate-float-1' : 'animate-float-2'}`}>
                  <img
                    src={variant.image}
                    alt={`APEX Premium Packaged Drinking Water – ${variant.volume}`}
                    className="object-contain drop-shadow-[0_20px_30px_rgba(10,61,145,0.22)]"
                    style={{
                      height: idx === 0 ? '240px' : '265px',
                      width: 'auto',
                      maxWidth: '100%',
                    }}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Mirrored Water Reflection Pedestal */}
                <div
                  className="w-36 h-4 rounded-full mt-3"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(74,226,242,0.6) 0%, rgba(10,61,145,0.18) 50%, transparent 75%)',
                    filter: 'blur(5px)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Product Details & Actions */}
              <div className="pt-6 border-t border-slate-100 flex flex-col space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    APEX {variant.volume}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {variant.description}
                  </p>
                </div>

                {/* Conditional Content based on Active Tab */}
                {activeTab === 'highlights' ? (
                  <div className="space-y-2 py-2">
                    {variant.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-medium pt-1">
                    <span className="flex items-center gap-1 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A3D91]" />
                      5-Stage Purified
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                      Tamper-Evident Cap
                    </span>
                  </div>
                )}

                {/* WhatsApp Action with tactile state */}
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(`Hello APEX Water Team, I am interested in the ${variant.volume} product. Please share pricing and distribution details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-liquid w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#0A3D91] via-[#0C48A9] to-[#0D52BD] hover:from-[#083075] hover:to-[#0A3D91] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-300 flex-shrink-0" aria-hidden="true" />
                  <span>Enquire for {variant.volume}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Fluid Wave Transition into Purification Section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none"
        style={{ height: '44px' }}
        aria-hidden="true"
      >
        <div className="wave-animate" style={{ width: '200%', height: '100%' }}>
          <svg
            viewBox="0 0 1440 44"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path
              d="M0,18 C280,40 560,0 840,22 C1120,44 1300,10 1440,18 L1440,44 L0,44 Z"
              fill="#F4F9FD"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
