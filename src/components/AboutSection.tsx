import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Building2, MapPin, CheckCircle2, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Brand Philosophy & Origin</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About APEX Premium Water
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Founded with a steadfast mission: to deliver pristine, mineral-rich packaged drinking water while dedicating a tangible portion of proceeds to national service.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Brand Facts & Manufacturer Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Official Brand Identity</h3>
                  <p className="text-xs text-slate-500">Registered Packaged Drinking Water</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong className="text-blue-900 font-bold">APEX</strong> is formulated to deliver optimal daily hydration with a clean, crisp palate. Every bottle is processed through multi-barrier treatment and fortified with essential <strong className="text-slate-900 font-semibold">Calcium and Magnesium</strong>.
              </p>

              {/* Confirmed Manufacturer Data Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Manufactured & Packed By
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {brandConfig.manufacturer.companyName}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {brandConfig.manufacturer.fullAddressString}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {brandConfig.manufacturer.countryOfOrigin}
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Commitments List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Strict Quality & Hygienic Bottling</h4>
                    <p className="text-xs text-slate-600">
                      Rigid multi-stage purification including Sand, Activated Carbon, Ultra Filtration, Reverse Osmosis, and Ozonation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">5% Dedicated to Indian Army</h4>
                    <p className="text-xs text-slate-600">
                      "Your choice helps our brave soldiers. Drink pure. Support a stronger India."
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transparent Labelling & QR Verification</h4>
                    <p className="text-xs text-slate-600">
                      Every physical bottle features two distinct QR codes: one for official brand info and one for direct FSSAI license verification.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Genuine Label Artwork Preview & Badge */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Genuine Label Showcase Box */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 overflow-hidden group">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                  Official Bottle Artwork
                </span>
                <span className="text-[11px] font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  High Quality Source
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[16/9] shadow-inner">
                <img
                  src="/assets/apex-label-full.png"
                  alt="Official APEX Bottle Label Artwork"
                  className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs text-white font-semibold">
                    The authentic packaging label powering both 500ml & 1 Liter variants.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Designed & Printed in India</span>
                <a
                  href="/assets/APEX_Label_1_Liter_High_Quality.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-bold hover:underline"
                >
                  View 1L Label PDF
                </a>
              </div>
            </div>

            {/* Army Commitment Callout Box */}
            <div className="bg-gradient-to-br from-[#061B40] to-[#0A3D91] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center font-black text-amber-300 text-2xl flex-shrink-0">
                  5%
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-amber-300 uppercase tracking-widest">
                    Verified Brand Pledge
                  </h4>
                  <p className="text-sm font-bold text-white mt-0.5 leading-snug">
                    "Drink Pure. Support a Stronger India."
                  </p>
                  <p className="text-xs text-blue-200 mt-1">
                    Every sip contributes 5% of income to our armed forces.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
