import React, { useState } from 'react';
import { brandConfig } from '../config/brandConfig';
import { Check, Sparkles, FileText, MessageSquare, ArrowRight, ShieldAlert } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const [selectedVariantId, setSelectedVariantId] = useState<'500ml' | '1liter'>('1liter');

  const activeVariant = brandConfig.productVariants.find((v) => v.id === selectedVariantId) || brandConfig.productVariants[1];

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Product Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Crafted for Pure Daily Refreshment
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Available in two convenient bottle sizes designed for active hydration, corporate meetings, and family dining.
          </p>

          {/* Size Switcher Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => setSelectedVariantId('500ml')}
              className={`px-6 py-2.5 rounded-full text-sm font-extrabold transition-all duration-200 ${
                selectedVariantId === '500ml'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              500 ml Compact
            </button>
            <button
              type="button"
              onClick={() => setSelectedVariantId('1liter')}
              className={`px-6 py-2.5 rounded-full text-sm font-extrabold transition-all duration-200 ${
                selectedVariantId === '1liter'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-slate-700 hover:text-blue-700'
              }`}
            >
              1 Liter Flagship
            </button>
          </div>
        </div>

        {/* Active Product Detailed Showcase */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Product Image on Studio Pedestal */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white bg-white group">
                <img
                  src={activeVariant.image}
                  alt={activeVariant.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3 bg-blue-900/90 text-white text-xs font-black px-3 py-1 rounded-full backdrop-blur-sm shadow">
                  {activeVariant.volume}
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm flex items-center gap-1">
                  <span>Enriched Minerals</span>
                </div>
              </div>

              {/* PDF Label Link */}
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={activeVariant.labelArtwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>Inspect Official {activeVariant.volume} Label PDF</span>
                </a>
              </div>
            </div>

            {/* Right: Specifications & Features */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  {activeVariant.bestFor}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  {activeVariant.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  {activeVariant.description}
                </p>
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Label-Verified Specifications
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeVariant.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Ingredients</span>
                  <span className="font-bold text-slate-800">Treated Water, Ca & Mg</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Batch / Mfg / MRP</span>
                  <span className="font-bold text-slate-800">See Cap/Neck</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Shelf Life</span>
                  <span className="font-bold text-emerald-700">Best Before 6 Mos</span>
                </div>
              </div>

              {/* Storage Reminder Alert */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Storage Advice:</strong> Serve chilled. Avoid direct sunlight. Store in a cool, clean, and hygienic place. Do not accept if seal is broken.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=Hello%20Apex%20Water%2C%20I%20am%20interested%20in%20ordering%20or%20distributing%20the%20${encodeURIComponent(activeVariant.name)}%20variant.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order / Enquire on WhatsApp</span>
                </a>

                <a
                  href="#distributor"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-sm border border-blue-200 transition-colors"
                >
                  <span>Become a Distributor</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Side-by-side Comparative Cards for Quick Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {brandConfig.productVariants.map((variant) => (
            <div
              key={variant.id}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                selectedVariantId === variant.id
                  ? 'bg-blue-50/60 border-blue-400 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => setSelectedVariantId(variant.id as '500ml' | '1liter')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {variant.volume} Variant
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-0.5">{variant.name}</h4>
                </div>
                <button
                  type="button"
                  className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                    selectedVariantId === variant.id
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {selectedVariantId === variant.id ? 'Viewing' : 'Select'}
                </button>
              </div>
              <p className="text-xs text-slate-600 mt-2">{variant.tagline}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
