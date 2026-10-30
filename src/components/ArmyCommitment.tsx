import React, { useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';

function useReveal(direction: 'left' | 'right' | 'up' = 'up') {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cls =
      direction === 'left' ? 'reveal-left' :
      direction === 'right' ? 'reveal-right' : 'reveal';
    el.classList.add(cls);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction]);
  return ref;
}

export const ArmyCommitment: React.FC = () => {
  const leftRef  = useReveal('left');
  const rightRef = useReveal('right');

  return (
    <section
      id="commitment"
      className="commitment-section relative text-white overflow-hidden bg-[#051228]"
    >
      {/* ══ Layer 1: Real Photographic Background (apex-army-commitment-bg.jpg) ══ */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/assets/apex-army-commitment-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* ══ Desktop Overlay: Deep navy on left, fades right to reveal flag & golden sunrise ══ */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to right, rgba(5,18,40,0.97) 0%, rgba(5,18,40,0.90) 35%, rgba(5,18,40,0.55) 62%, rgba(5,18,40,0.20) 85%, rgba(5,18,40,0.08) 100%)',
          }}
        />

        {/* ══ Mobile Overlay: Top semi-transparent (flag visible), bottom deep navy (text readable) ══ */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,18,40,0.45) 0%, rgba(5,18,40,0.62) 35%, rgba(5,18,40,0.90) 58%, rgba(5,18,40,0.97) 75%, rgba(5,18,40,0.99) 100%)',
          }}
        />

        {/* ══ Warm Saffron Sunrise Glow ══ */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 80% 12%, rgba(255,153,51,0.20) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* ══ Tricolour Top Accent Ribbon ══ */}
      <div
        className="absolute top-0 left-0 right-0 flex z-20"
        style={{ height: '4px' }}
        aria-hidden="true"
      >
        <div className="flex-1" style={{ background: '#FF9933' }} />
        <div className="flex-1 bg-white" />
        <div className="flex-1" style={{ background: '#138808' }} />
      </div>

      {/* ══ Section Content ══ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20 sm:pt-20 sm:pb-24 md:py-24 lg:py-32">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* ════ LEFT COLUMN: 5% Commitment Anchor ════ */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Eyebrow */}
            <p
              className="font-extrabold uppercase mb-2 md:mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
              style={{
                fontSize: 'clamp(0.65rem, 2.2vw, 0.75rem)',
                letterSpacing: '0.28em',
                color: '#FFB800',
              }}
            >
              Our National Commitment
            </p>

            {/* 5% — Primary Visual Anchor with 3D Depth */}
            <div
              className="font-black leading-none select-none tracking-tight"
              style={{
                fontSize: 'clamp(5.2rem, 16vw, 8.75rem)',
                background: 'linear-gradient(135deg, #FFE066 0%, #FFB800 45%, #E07800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                filter: 'drop-shadow(0 4px 18px rgba(0,0,0,0.85))',
              }}
              aria-label="5 percent of our income"
            >
              5%
            </div>

            {/* Sub-label */}
            <p
              className="font-bold uppercase mt-2 mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,1)]"
              style={{
                fontSize: 'clamp(0.68rem, 2.2vw, 0.78rem)',
                letterSpacing: '0.25em',
                color: 'rgba(255,230,150,0.95)',
              }}
            >
              of our income
            </p>

            {/* Tricolour Accent Bar */}
            <div
              className="flex rounded-full overflow-hidden mb-4 shadow-md"
              style={{ height: '3px', width: 'clamp(72px, 12vw, 90px)' }}
              aria-hidden="true"
            >
              <div className="flex-1" style={{ background: '#FF9933' }} />
              <div className="flex-1 bg-white" />
              <div className="flex-1" style={{ background: '#138808' }} />
            </div>

            {/* Pledge Statement */}
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-100 max-w-xs leading-relaxed mb-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
              Dedicated to supporting the brave personnel of the Indian Army.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-300/85 max-w-xs leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Declared on every official 500 ml and 1 Litre APEX bottle.
            </p>
          </div>

          {/* ════ RIGHT COLUMN: Mission Copy & Narrative ════ */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col gap-3.5 sm:gap-4 text-center md:text-left max-w-xl mx-auto md:mx-0"
          >
            {/* Section Heading */}
            <h2
              className="font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]"
              style={{ fontSize: 'clamp(1.85rem, 4.5vw, 3.1rem)' }}
            >
              Supporting the<br className="hidden md:inline" /> Indian Army.
            </h2>

            {/* Gold Rule */}
            <div
              className="rounded-full mx-auto md:mx-0 flex-shrink-0"
              style={{ height: '2px', width: '44px', background: '#FFB800', opacity: 0.9 }}
              aria-hidden="true"
            />

            {/* Primary Commitment — Verbatim from label */}
            <p
              className="font-bold text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)' }}
            >
              "{brandConfig.commitment.primaryMessage}"
            </p>

            {/* Supporting Line */}
            <p
              className="font-semibold uppercase leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
              style={{
                fontSize: 'clamp(0.68rem, 1.8vw, 0.75rem)',
                letterSpacing: '0.12em',
                color: '#FFB800',
              }}
            >
              {brandConfig.commitment.supportingMessage}
            </p>

            {/* Body Copy */}
            <p
              className="leading-relaxed text-sm sm:text-base"
              style={{ color: 'rgba(215,232,255,0.88)' }}
            >
              Every APEX bottle sold contributes to this commitment. The pledge is printed on our official
              packaging — 500 ml and 1 Litre alike — as a visible, verifiable brand promise.
            </p>

            {/* Brand Tagline */}
            <p
              className="italic font-medium"
              style={{
                fontSize: 'clamp(0.8125rem, 1.9vw, 0.9rem)',
                color: 'rgba(255,190,80,0.85)',
              }}
            >
              "{brandConfig.brandTagline}"
            </p>

            {/* Disclaimer */}
            <p
              className="leading-relaxed pt-1"
              style={{
                fontSize: 'clamp(0.6rem, 1.4vw, 0.6875rem)',
                color: 'rgba(150,185,230,0.70)',
                fontStyle: 'italic',
              }}
            >
              {brandConfig.commitment.transparencyNote}&nbsp;This is Apex's stated brand commitment, not a
              claim of official Indian Army endorsement.
            </p>
          </div>

        </div>
      </div>

      {/* ══ Fluid Liquid Transition Wave into About Section (White/Ice-Blue) ══ */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none"
        style={{ height: '54px' }}
        aria-hidden="true"
      >
        <div className="wave-animate" style={{ width: '200%', height: '100%' }}>
          <svg
            viewBox="0 0 1440 54"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path
              d="M0,24 C320,52 640,0 960,28 C1200,48 1360,18 1440,24 L1440,54 L0,54 Z"
              fill="#F4F9FD"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
