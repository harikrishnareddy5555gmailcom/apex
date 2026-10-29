import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ShieldCheck, Award, Droplets, ArrowRight, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#061B40] via-[#0A2E6E] to-[#0D4B9F] text-white"
    >
      {/* Background Mountain Atmospheric Overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
        <img
          src="/assets/apex_mountain_spring.jpg"
          alt="Himalayan Mountain Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Radial soft lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Verified Badges Bar */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                FSSAI Lic. #{brandConfig.fssaiLicenseNumber}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-200 border border-amber-400/30 backdrop-blur-md">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                5% Dedicated to Indian Army
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-cyan-300 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-2">
                <Droplets className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>{brandConfig.subTagline}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Pure Water, <br />
                <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                  Stronger India.
                </span>
              </h1>
            </div>

            {/* Supporting Verified Statement */}
            <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Premium packaged drinking water infused with essential <strong className="text-white font-semibold">Calcium & Magnesium</strong> minerals. Purified through a rigorous <strong className="text-white font-semibold">5-stage water treatment</strong> (Sand, Carbon, UF, Reverse Osmosis, and Ozonation) for unmatched crispness and hydration.
            </p>

            {/* Army Contribution Micro-Banner */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-xl mx-auto lg:mx-0 shadow-lg flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center font-black text-amber-300 text-lg">
                5%
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                  Our Social Commitment
                </p>
                <p className="text-[11px] sm:text-xs text-blue-100">
                  5% of our income is dedicated to supporting the <span className="font-semibold text-amber-300">Indian Army</span>. Drink pure. Support a stronger India.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore 500ml & 1L Bottles</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#distributor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/25 backdrop-blur-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-cyan-300" />
                <span>Distributor Enquiry</span>
              </a>

              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-semibold text-sm border border-emerald-400/30 transition-all"
                title="Direct call"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {brandConfig.contact.displayPhone}</span>
              </a>
            </div>

            {/* Live Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-xs font-bold text-cyan-300">Pure Water</span>
                <span className="block text-[10px] text-blue-200">5-Stage Treatment</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-xs font-bold text-cyan-300">Safe & Hygienic</span>
                <span className="block text-[10px] text-blue-200">Ozonated Freshness</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-xs font-bold text-cyan-300">Essential Minerals</span>
                <span className="block text-[10px] text-blue-200">Calcium & Magnesium</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-xs font-bold text-cyan-300">Make In India</span>
                <span className="block text-[10px] text-blue-200">Hyderabad Packed</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Bottle Showcase Composition */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
              {/* Luxury Studio Bottle Photography */}
              <img
                src="/assets/apex_hero_bottles.jpg"
                alt="APEX Premium Packaged Drinking Water Bottles (1L and 500ml)"
                className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
              />

              {/* Glossy Overlay Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-bold text-white tracking-wide">Official Brand Pack</span>
              </div>

              {/* Bottom Card Inside Hero Visual */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-cyan-300 font-bold">Two Sizes Available</p>
                  <p className="text-sm font-extrabold text-white">1 Liter & 500ml Variants</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-blue-200 block">Best Before</span>
                  <span className="text-xs font-bold text-emerald-400">6 Months</span>
                </div>
              </div>
            </div>

            {/* Label Verification Prompt */}
            <div className="mt-3 text-center">
              <p className="text-xs text-blue-200/80 flex items-center justify-center gap-1.5">
                <span>Direct scan from bottle label?</span>
                <a href="#quality" className="text-cyan-300 underline font-semibold hover:text-white transition-colors">
                  View FSSAI & Product Details
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
