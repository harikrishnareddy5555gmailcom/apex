import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Award, Heart, Shield, Flag, CheckCircle } from 'lucide-react';

export const ArmyCommitment: React.FC = () => {
  return (
    <section id="commitment" className="py-20 bg-gradient-to-br from-[#061B40] via-[#0A2E6E] to-[#0A3D91] text-white relative overflow-hidden">
      
      {/* Subtle Himalayan & Flag Backdrop */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
        <img
          src="/assets/apex-soldiers-flag.png"
          alt="Soldiers on Himalayan Ridge Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400/20 text-amber-300 border border-amber-300/30 mb-3 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>National Service Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Supporting Our Armed Forces
          </h2>
          <p className="text-base sm:text-lg text-blue-100/90 mt-3 leading-relaxed">
            Every bottle of APEX packaged water carries a dedicated commitment to India's brave defenders standing guard at our borders.
          </p>
        </div>

        {/* Hero Card of the 5% Commitment */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: The Official Army Badge Graphic Extracted from Bottle */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/40 shadow-2xl bg-slate-950 p-2 group">
                <img
                  src="/assets/apex-army-badge-full.png"
                  alt="5% of our income is dedicated to supporting the Indian Army"
                  className="w-full h-auto object-contain rounded-xl transform group-hover:scale-102 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-blue-200 mt-3 text-center">
                Official badge artwork printed on every 500ml & 1L APEX label.
              </p>
            </div>

            {/* Right: Verbatim Mission & Transparency Statement */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <Flag className="w-4 h-4 text-amber-400" />
                  <span>Verbatim Packaging Declaration</span>
                </div>
                
                <blockquote className="text-2xl sm:text-3xl font-black text-white leading-tight border-l-4 border-amber-400 pl-4 py-1">
                  "{brandConfig.commitment.primaryMessage}"
                </blockquote>

                <p className="text-sm sm:text-base font-extrabold text-cyan-300 uppercase tracking-wider">
                  {brandConfig.commitment.supportingMessage}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-blue-100 leading-relaxed">
                <p>
                  At APEX, we believe business growth should walk hand-in-hand with patriotic responsibility. Through our stated packaging commitment, five percent of our income is dedicated toward supporting the personnel and welfare causes of the Indian Army.
                </p>
                <p>
                  When you choose APEX for your daily hydration, you drink pure water while contributing directly to the welfare of those who protect our borders.
                </p>
              </div>

              {/* Three Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs">
                  <Shield className="w-4 h-4 text-amber-300 mb-1.5" />
                  <span className="font-bold text-white block">Honouring Valor</span>
                  <span className="text-[11px] text-blue-200">Standing with the guardians of the nation.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs">
                  <Heart className="w-4 h-4 text-rose-400 mb-1.5" />
                  <span className="font-bold text-white block">Tangible Impact</span>
                  <span className="text-[11px] text-blue-200">5% of income earmarked on every bottle.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mb-1.5" />
                  <span className="font-bold text-white block">Pure Intention</span>
                  <span className="text-[11px] text-blue-200">Transparently declared on public packaging.</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
