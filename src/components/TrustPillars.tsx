import React from 'react';
import { Droplet, ShieldCheck, Atom, Diamond } from 'lucide-react';

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      title: 'PURE WATER',
      subtitle: 'Multi-Barrier Purification',
      desc: 'Processed through 5 distinct filtration stages including Reverse Osmosis and Ozonation for uncompromised molecular purity.',
      icon: Droplet,
      accentColor: 'from-blue-600 to-cyan-500',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'SAFE & HYGIENIC',
      subtitle: 'Zero Chemical Residues',
      desc: 'Microbiologically disinfected with ozone and packed in a strictly monitored, hygienic bottling environment with tamper-evident blue caps.',
      icon: ShieldCheck,
      accentColor: 'from-emerald-600 to-teal-500',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'ESSENTIAL MINERALS',
      subtitle: 'Calcium & Magnesium',
      desc: 'Enriched specifically with vital bio-available minerals to restore a smooth, naturally balanced palate and optimal body hydration.',
      icon: Atom,
      accentColor: 'from-indigo-600 to-sky-500',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      title: 'PREMIUM QUALITY',
      subtitle: 'Every Single Drop',
      desc: 'Formulated to meet rigid standards of clarity, taste, and safety, proudly crafted as a high-standard Product of India.',
      icon: Diamond,
      accentColor: 'from-amber-500 to-yellow-500',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  return (
    <section className="py-12 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1.5">
            As Printed on Every Bottle Label
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The Four Pillars of APEX Water
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Every bottle that leaves our facility embodies our pledge to purity, health, and uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.accentColor} flex items-center justify-center text-white shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-2">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Verified Standard</span>
                  <span className="text-blue-700 font-bold">100% Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
