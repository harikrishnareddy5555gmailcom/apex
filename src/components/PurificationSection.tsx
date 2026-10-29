import React, { useState } from 'react';
import { brandConfig } from '../config/brandConfig';
import { Layers, Filter, ShieldCheck, Activity, Sparkles, CheckCircle, Droplet } from 'lucide-react';

export const PurificationSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Layers className="w-5 h-5" />;
      case 2:
        return <Filter className="w-5 h-5" />;
      case 3:
        return <ShieldCheck className="w-5 h-5" />;
      case 4:
        return <Activity className="w-5 h-5" />;
      case 5:
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Droplet className="w-5 h-5" />;
    }
  };

  const selectedStage = brandConfig.waterTreatmentStages.find((s) => s.step === activeStep) || brandConfig.waterTreatmentStages[0];

  return (
    <section id="purification" className="py-20 bg-gradient-to-b from-slate-900 to-[#061B40] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-cyan-300 border border-blue-400/30 mb-3">
            <Droplet className="w-3.5 h-3.5 text-cyan-400" />
            <span>5-Stage Water Treatment Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How APEX Water is Purified
          </h2>
          <p className="text-sm sm:text-base text-blue-100/80 mt-3 leading-relaxed">
            As declared on our bottle labels: Treated water refined through a comprehensive five-barrier purification cascade, followed by mineral enrichment with Calcium & Magnesium.
          </p>
        </div>

        {/* 5-Step Process Interactive Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {brandConfig.waterTreatmentStages.map((stage) => {
            const isCurrent = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 relative ${
                  isCurrent
                    ? 'bg-blue-600/30 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isCurrent ? 'bg-cyan-400 text-slate-950 font-black' : 'bg-white/10 text-blue-200'
                    }`}
                  >
                    {getStepIcon(stage.step)}
                  </div>
                  <span className="text-xs font-black text-cyan-300">0{stage.step}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                  {stage.title}
                </h3>
                <p className="text-[11px] text-blue-200/70 mt-1 line-clamp-1">{stage.shortDesc}</p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <span>Stage 0{selectedStage.step} of 05</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Verified Label Process</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedStage.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                {selectedStage.detailedDesc}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Label Compliance Verified</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Physical & Microbial Barrier</span>
                </div>
              </div>
            </div>

            {/* Mineral Re-enrichment Info Box */}
            <div className="lg:col-span-4 bg-gradient-to-br from-blue-900/60 to-cyan-900/40 p-5 rounded-2xl border border-cyan-400/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Mineral Fortification</span>
              </div>
              <p className="text-xs text-blue-100">
                After advanced filtration, vital minerals are added back to achieve healthy hydration and taste:
              </p>
              <div className="space-y-2">
                {brandConfig.minerals.map((mineral) => (
                  <div key={mineral.name} className="p-2.5 rounded-xl bg-white/10 text-xs">
                    <span className="font-bold text-white block">{mineral.name}</span>
                    <span className="text-[11px] text-blue-200">{mineral.benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
