import React, { useState, useEffect, useRef } from 'react';
import { Droplets, Filter, Activity, Sparkles, Layers, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

interface Stage {
  step: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: React.ReactNode;
  detail: string;
}

const PURIFICATION_STAGES: Stage[] = [
  {
    step: 1,
    title: brandConfig.waterTreatmentStages[0].title,
    shortDesc: brandConfig.waterTreatmentStages[0].shortDesc,
    detailedDesc: brandConfig.waterTreatmentStages[0].detailedDesc,
    icon: <Layers className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    detail: 'Physical Clarity',
  },
  {
    step: 2,
    title: brandConfig.waterTreatmentStages[1].title,
    shortDesc: brandConfig.waterTreatmentStages[1].shortDesc,
    detailedDesc: brandConfig.waterTreatmentStages[1].detailedDesc,
    icon: <Filter className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    detail: 'Taste Refinement',
  },
  {
    step: 3,
    title: brandConfig.waterTreatmentStages[2].title,
    shortDesc: brandConfig.waterTreatmentStages[2].shortDesc,
    detailedDesc: brandConfig.waterTreatmentStages[2].detailedDesc,
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    detail: 'Micro Filtration',
  },
  {
    step: 4,
    title: brandConfig.waterTreatmentStages[3].title,
    shortDesc: brandConfig.waterTreatmentStages[3].shortDesc,
    detailedDesc: brandConfig.waterTreatmentStages[3].detailedDesc,
    icon: <Activity className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    detail: 'Molecular Purity',
  },
  {
    step: 5,
    title: brandConfig.waterTreatmentStages[4].title,
    shortDesc: brandConfig.waterTreatmentStages[4].shortDesc,
    detailedDesc: brandConfig.waterTreatmentStages[4].detailedDesc,
    icon: <Sparkles className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    detail: 'Bio-Sterilization',
  },
];

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

export const PurificationSection: React.FC = () => {
  const headerRef = useReveal();
  const stagesRef = useReveal();
  const [activeStage, setActiveStage] = useState<number>(1);

  const selectedStageData = PURIFICATION_STAGES.find((s) => s.step === activeStage) || PURIFICATION_STAGES[0];

  return (
    <section
      id="purification"
      className="py-20 sm:py-28 lg:py-36 bg-[#F4F9FD] relative overflow-hidden"
    >
      {/* ── Flowing Water Ambience ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(74,226,242,0.14) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/70 border border-cyan-200 backdrop-blur-sm mb-3">
            <Droplets className="w-3.5 h-3.5 text-[#0A3D91]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0A3D91]">
              Purification Journey
            </p>
          </div>

          <h2
            className="font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            The 5-Stage Liquid Journey
          </h2>

          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base max-w-lg mx-auto">
            A continuous, multi-barrier purification process documented on every APEX bottle.
            Tap any stage to trace the water journey.
          </p>
        </div>

        {/* Flowing Water Ribbon Stages (Desktop & Mobile interactive) */}
        <div
          ref={stagesRef as React.RefObject<HTMLDivElement>}
          className="relative"
        >
          {/* Continuous Flowing Water Aqueduct Line on Desktop */}
          <div
            className="absolute hidden lg:block pointer-events-none"
            style={{
              top: '40px',
              left: '6%',
              right: '6%',
              height: '4px',
              borderRadius: '9999px',
            }}
          >
            <div className="w-full h-full water-flow-active rounded-full" />
          </div>

          {/* Connected Grid of Interactive Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {PURIFICATION_STAGES.map((stage) => {
              const isSelected = activeStage === stage.step;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(stage.step)}
                  className={`text-left group relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isSelected
                      ? 'bg-white shadow-xl shadow-cyan-900/10 border-2 border-[#0A3D91] scale-[1.02]'
                      : 'bg-white/80 hover:bg-white border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md'
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`Stage ${stage.step}: ${stage.title}`}
                >
                  {/* Node Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Glowing Node Circle */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#0A3D91] to-[#041026] text-white shadow-md shadow-blue-900/30 scale-105'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0A3D91]'
                        }`}
                      >
                        {stage.icon}
                      </div>

                      <span
                        className={`text-[11px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border transition-colors ${
                          isSelected
                            ? 'bg-blue-50 text-[#0A3D91] border-blue-200 font-extrabold'
                            : 'bg-slate-50 text-slate-400 border-slate-200'
                        }`}
                      >
                        0{stage.step}
                      </span>
                    </div>

                    {/* Stage Role & Title */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {stage.detail}
                    </span>
                    <h3 className="text-base font-black text-slate-900 mb-1.5 leading-snug">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {stage.shortDesc}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? 'text-[#0A3D91]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {isSelected ? 'Active Focus' : 'Inspect'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isSelected ? 'text-[#0A3D91] translate-x-1' : 'text-slate-300 group-hover:translate-x-1'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Detail Card (Real-Time Stage View) */}
          <div className="mt-8 rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-lg relative overflow-hidden transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#0A3D91] text-white text-[10px] font-black uppercase tracking-wider">
                    Stage 0{selectedStageData.step} Breakdown
                  </span>
                  <span className="text-xs font-bold text-cyan-600">
                    {selectedStageData.detail}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                  {selectedStageData.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedStageData.detailedDesc}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-3 bg-blue-50/80 border border-blue-100 rounded-2xl p-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <div className="text-xs">
                  <span className="font-bold text-slate-800 block">Verified on Official Artwork</span>
                  <span className="text-slate-500">100% compliant with declared process</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mineral Enrichment Finale Station ── */}
        <div className="mt-10 sm:mt-12 relative">
          <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#041026] via-[#0A2D62] to-[#041026] text-white shadow-xl border border-cyan-400/20 relative overflow-hidden">
            {/* Ambient Water Shimmer */}
            <div className="water-shimmer" aria-hidden="true" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20 text-[#041026]">
                <Sparkles className="w-8 h-8" aria-hidden="true" />
              </div>

              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-300">
                  Post-Filtration Enhancement
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white">
                  Natural Mineral Balance (Calcium &amp; Magnesium)
                </h4>
                <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                  Following RO purification, essential <strong className="text-white">Calcium ({brandConfig.minerals[0].benefit})</strong> and{' '}
                  <strong className="text-white">Magnesium ({brandConfig.minerals[1].benefit})</strong> electrolytes are carefully reintroduced to restore crisp natural flavour and optimal body hydration.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Wave Divider into Distributor Section ── */}
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
              d="M0,22 C340,48 680,4 1020,26 C1240,40 1380,12 1440,22 L1440,48 L0,48 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
