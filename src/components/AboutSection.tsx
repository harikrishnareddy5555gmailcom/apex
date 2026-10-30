import React, { useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { Droplets, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

function useReveal(direction: 'up' | 'left' | 'right' = 'up') {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cls = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
    el.classList.add(cls);
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction]);
  return ref;
}

export const AboutSection: React.FC = () => {
  const imageRef = useReveal('left');
  const copyRef = useReveal('right');

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F4F9FD] overflow-hidden"
    >
      {/* ── Ambient Fluid Water Elements ── */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(74,226,242,0.25) 0%, rgba(10,61,145,0.05) 60%, transparent 80%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div
        className="absolute bottom-10 left-0 w-80 h-80 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(96,165,250,0.2) 0%, transparent 70%)',
          filter: 'blur(35px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ════ Visual Column: Floating Bottle on Water Reflection Pedestal ════ */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="relative order-2 lg:order-1 flex flex-col items-center justify-center"
          >
            {/* Soft Frosted Glass Halo */}
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_20px_50px_rgba(10,61,145,0.08)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Ambient Water Ripple Texture */}
            <div
              className="absolute inset-0 max-w-sm mx-auto pointer-events-none opacity-10 rounded-3xl"
              style={{
                backgroundImage: `url('/assets/apex-water-ripple.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
              }}
              aria-hidden="true"
            />

            {/* The 1L Bottle with Water Floor Reflection */}
            <div className="relative z-10 py-6 sm:py-8 flex flex-col items-center">
              <div className="animate-float-1 drop-shadow-[0_20px_35px_rgba(10,61,145,0.18)]">
                <img
                  src="/assets/apex_bottle_1liter.jpg"
                  alt="APEX Premium Packaged Drinking Water — 1 Litre bottle"
                  className="object-contain"
                  style={{
                    height: 'clamp(280px, 40vw, 400px)',
                    width: 'auto',
                    maxWidth: '100%',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Water Reflection Ring underneath bottle */}
              <div
                className="w-44 sm:w-56 h-6 rounded-full mt-2"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(74,226,242,0.5) 0%, rgba(10,61,145,0.18) 50%, transparent 75%)',
                  filter: 'blur(6px)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* ════ Copy Column: Editorial Storytelling ════ */}
          <div
            ref={copyRef as React.RefObject<HTMLDivElement>}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/50 backdrop-blur-sm">
                <Droplets className="w-3.5 h-3.5 text-[#0A3D91]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0A3D91]">
                  Purity &amp; Heritage
                </p>
              </div>

              <h2
                className="font-black text-slate-900 tracking-tight leading-[1.12]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Pristine Clarity.<br />
                <span className="text-[#0A3D91]">Purpose in Every Drop.</span>
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                <strong className="text-slate-900">APEX Premium Water</strong> represents the
                finest standard in packaged drinking water. Crafted at our state-of-the-art
                bottling facility in Hyderabad, Telangana, our water provides refreshing
                vitality and uncompromised taste.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                From source collection through five sequential purification barriers to the
                re-introduction of natural Calcium and Magnesium, every bottle is sealed with a
                tamper-evident cap to guarantee pure hydration.
              </p>
            </div>

            {/* Fluid Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel-light p-4 rounded-2xl border border-white/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-[#0A3D91]">
                  <Droplets className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">5-Stage Treatment</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Sand, Carbon, Ultra Filtration, Reverse Osmosis &amp; Ozonation.
                  </p>
                </div>
              </div>

              <div className="glass-panel-light p-4 rounded-2xl border border-white/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Mineral Enriched</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Fortified with Calcium and Magnesium for smooth, balanced taste.
                  </p>
                </div>
              </div>

              <div className="glass-panel-light p-4 rounded-2xl border border-white/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Tamper-Evident</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Hermetically sealed cap ensuring safety, hygiene, and freshness.
                  </p>
                </div>
              </div>

              <div className="glass-panel-light p-4 rounded-2xl border border-white/80 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 flex items-center justify-center flex-shrink-0 text-slate-700">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Bottled in Hyderabad</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {brandConfig.manufacturer.companyName}, Uppal facility.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── Wave Divider into Products Section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none"
        style={{ height: '48px' }}
        aria-hidden="true"
      >
        <div className="wave-animate" style={{ width: '200%', height: '100%' }}>
          <svg
            viewBox="0 0 1440 48"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path
              d="M0,20 C360,45 720,5 1080,25 C1260,35 1380,15 1440,20 L1440,48 L0,48 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
