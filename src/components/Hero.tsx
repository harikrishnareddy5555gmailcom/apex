import React, { useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { ChevronDown, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export const Hero: React.FC = () => {
  const copyRef = useReveal();
  const bottleRef = useReveal();
  const bgRef = useRef<HTMLImageElement | null>(null);

  // Restrained parallax background drift
  useEffect(() => {
    if (prefersReducedMotion) return;
    const img = bgRef.current;
    if (!img) return;
    const onScroll = () => {
      const y = window.scrollY;
      img.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollDown = () => {
    const el = document.querySelector('#commitment');
    if (!el) return;
    const headerOffset = 70;
    const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const handleProductScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#products');
    if (!el) return;
    const headerOffset = 70;
    const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const handleDistributorScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#distributor');
    if (!el) return;
    const headerOffset = 70;
    const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#041026]"
    >
      {/* ── Layer 1: Photographic Water World & Mountain Landscape ── */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef as React.RefObject<HTMLImageElement>}
          src="/assets/apex-hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 35%', willChange: 'transform' }}
          fetchPriority="high"
        />

        {/* ── Layer 2: Directional liquid-depth gradient ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(4,16,38,0.96) 0%, rgba(4,16,38,0.85) 42%, rgba(4,16,38,0.52) 70%, rgba(4,16,38,0.30) 100%)',
          }}
        />

        {/* ── Layer 3: Realistic water splash & ripple atmosphere behind bottles ── */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none opacity-20 mix-blend-screen"
          style={{
            backgroundImage: `url('/assets/apex-product-splash.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />

        {/* ── Layer 4: Diagonal water caustic shimmer sweep ── */}
        <div className="water-shimmer" aria-hidden="true" />

        {/* ── Layer 5: Ambient ripple pulse depth ── */}
        <div
          className="absolute inset-0 ripple-pulse pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url('/assets/apex-water-ripple.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
            opacity: 0.05,
          }}
        />

        {/* ── Layer 6: Fluid transition into ArmyCommitment section (deep navy flow) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '120px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(4,16,38,0.6) 50%, #051228 100%)',
          }}
        />
      </div>

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20 sm:pt-36 sm:pb-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left Column: Premium Brand Storytelling ── */}
          <div
            ref={copyRef as React.RefObject<HTMLDivElement>}
            className="reveal text-center lg:text-left"
          >
            {/* Fluid Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/25 backdrop-blur-md mb-5 sm:mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <p className="text-cyan-300 font-bold uppercase tracking-[0.22em] text-[10px] sm:text-xs">
                {brandConfig.subTagline}
              </p>
            </div>

            {/* Main Headline */}
            <h1
              className="font-black tracking-tight leading-[1.04] text-white mb-5 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
              style={{ fontSize: 'clamp(2.35rem, 6.8vw, 4.85rem)' }}
            >
              Pure Water,
              <span
                className="block bg-gradient-to-r from-[#4AE2F2] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent"
              >
                Stronger India.
              </span>
            </h1>

            {/* Editorial Body Copy */}
            <p
              className="text-blue-100/85 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7 sm:mb-8 text-sm sm:text-base font-normal"
            >
              Masterfully purified through rigorous 5-stage treatment and naturally
              balanced with essential Calcium and Magnesium.
              <span className="block mt-2 font-semibold text-amber-300/95">
                5% of our income is proudly dedicated to supporting the Indian Army.
              </span>
            </p>

            {/* Elegant Fluid CTAs with Tactile Feedback */}
            <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-center lg:justify-start">
              <a
                href="#distributor"
                onClick={handleDistributorScroll}
                className="btn-liquid w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-white via-cyan-50 to-blue-50 text-[#0A3D91] font-extrabold text-sm shadow-[0_10px_25px_-5px_rgba(74,226,242,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(74,226,242,0.45)] transition-all duration-200"
              >
                <span>Become a Distributor</span>
                <ArrowRight className="w-4 h-4 text-[#0A3D91]" aria-hidden="true" />
              </a>

              <a
                href="#products"
                onClick={handleProductScroll}
                className="btn-liquid w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/12 backdrop-blur-md text-white font-semibold text-sm transition-all duration-200"
              >
                <span>Explore Products</span>
              </a>
            </div>

            {/* Purity Assurance Pills */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-blue-200/75">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" aria-hidden="true" />
                <span>Enriched with Ca &amp; Mg</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-blue-300/40 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" aria-hidden="true" />
                <span>5-Stage Multi-Barrier</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Authentic Bottle Presentation ── */}
          <div
            ref={bottleRef as React.RefObject<HTMLDivElement>}
            className="reveal delay-200 flex items-center justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">

              {/* Cyan/Blue Liquid Caustic Aura */}
              <div
                className="liquid-glow absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 55%, rgba(74,226,242,0.32) 0%, rgba(10,61,145,0.22) 48%, transparent 75%)',
                  filter: 'blur(32px)',
                  transform: 'scale(1.15)',
                }}
                aria-hidden="true"
              />

              {/* Water Surface Ripple Base beneath bottles */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(74,226,242,0.4) 0%, rgba(10,61,145,0.2) 50%, transparent 80%)',
                  filter: 'blur(10px)',
                }}
                aria-hidden="true"
              />

              {/* Two Bottles Floating Harmoniously (Cap & Base 100% visible) */}
              <div className="relative flex items-end justify-center gap-3 sm:gap-6 px-2">

                {/* 500ml Bottle (Gentle floating motion 1) */}
                <div className="animate-float-1 relative flex-1 max-w-[120px] min-[380px]:max-w-[140px] sm:max-w-[160px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] group cursor-pointer transition-transform duration-300 hover:scale-105">
                  {/* Floating Volume Badge */}
                  <div className="text-center mb-2.5">
                    <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider shadow-sm">
                      500 ml
                    </span>
                  </div>

                  {/* Bottle Container with pure aspect ratio */}
                  <div
                    className="relative bg-transparent rounded-2xl overflow-hidden p-1"
                    style={{ aspectRatio: '3/5' }}
                  >
                    <img
                      src="/assets/apex_bottle_500ml.jpg"
                      alt="APEX Premium Packaged Drinking Water — 500ml Bottle"
                      className="bottle-img transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* 1 Litre Bottle (Gentle floating motion 2) */}
                <div className="animate-float-2 relative flex-1 max-w-[135px] min-[380px]:max-w-[155px] sm:max-w-[180px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] -mb-2 group cursor-pointer transition-transform duration-300 hover:scale-105">
                  {/* Floating Volume Badge */}
                  <div className="text-center mb-2.5">
                    <span className="inline-block bg-gradient-to-r from-[#0A3D91]/90 to-[#0C48A9]/90 backdrop-blur-md border border-cyan-400/35 text-cyan-200 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider shadow-sm">
                      1 Litre
                    </span>
                  </div>

                  {/* Bottle Container */}
                  <div
                    className="relative bg-transparent rounded-2xl overflow-hidden p-1"
                    style={{ aspectRatio: '3/5' }}
                  >
                    <img
                      src="/assets/apex_bottle_1liter.jpg"
                      alt="APEX Premium Packaged Drinking Water — 1 Litre Bottle"
                      className="bottle-img transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 z-20 text-cyan-300/40 hover:text-cyan-300 transition-colors animate-bounce-scroll flex flex-col items-center gap-1 active:scale-95"
        aria-label="Scroll down to our national commitment"
        style={{ transform: 'translateX(-50%)' }}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Discover</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
