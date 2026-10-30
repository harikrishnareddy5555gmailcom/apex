import React, { useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { MessageSquare, Phone, Mail, MapPin, Building2, CheckCircle2 } from 'lucide-react';

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

export const DistributorSection: React.FC = () => {
  const copyRef = useReveal('left');
  const contactRef = useReveal('right');

  const waMessage = encodeURIComponent(
    'Hello APEX Water Team, I am interested in becoming a distributor / wholesaler. Please share details about your products and wholesale pricing.'
  );

  return (
    <section id="distributor" className="py-20 sm:py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* ── Soft Ambient Radial Highlights ── */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, rgba(74,226,242,0.18) 0%, rgba(10,61,145,0.04) 60%, transparent 75%)',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ════ Left Column: Distribution Partnership Narrative ════ */}
          <div
            ref={copyRef as React.RefObject<HTMLDivElement>}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 backdrop-blur-sm">
                <Building2 className="w-3.5 h-3.5 text-[#0A3D91]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0A3D91]">
                  Partnerships &amp; Distribution
                </p>
              </div>

              <h2
                className="font-black text-slate-900 tracking-tight leading-[1.12]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Grow with APEX.<br />
                <span className="text-[#0A3D91]">Pure Hydration Partner.</span>
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                We invite wholesale distributors, hotel &amp; restaurant partners, corporate offices,
                and retail stockists to partner with APEX Premium Water.
              </p>
            </div>

            {/* Geographical Network Breakdown */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-[#0A3D91] flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Primary Bottling Facility &amp; Hub</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Centrally produced in Uppal, Hyderabad, Telangana for rapid regional dispatch.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50/40 border border-cyan-100 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Enquiry &amp; Expansion Regions</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Active distribution enquiries welcomed across Andhra Pradesh (including Kadapa District &amp; Badvel), Telangana, and nationwide India.
                  </p>
                </div>
              </div>
            </div>

            {/* Facility Location Details */}
            <div className="pt-2 flex items-start gap-3 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-[#0A3D91] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-bold text-slate-700">{brandConfig.manufacturer.companyName}</span>
                <span className="block mt-0.5 text-slate-500">{brandConfig.manufacturer.address}</span>
              </div>
            </div>
          </div>

          {/* ════ Right Column: Fluid Contact Glass Cards with Tactile Press Feedback ════ */}
          <div
            ref={contactRef as React.RefObject<HTMLDivElement>}
            className="space-y-4"
          >
            {/* WhatsApp — Primary Action */}
            <a
              href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group block p-6 rounded-3xl bg-gradient-to-r from-[#0A3D91] via-[#0C48A9] to-[#0D52BD] hover:from-[#083075] hover:to-[#0A3D91] text-white shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden active:scale-[0.98]"
              aria-label="Distributor enquiry via WhatsApp"
            >
              <div className="water-shimmer opacity-40" aria-hidden="true" />

              <div className="relative z-10 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-7 h-7 text-cyan-300" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-200">
                      Immediate Response
                    </span>
                    <span className="text-xs font-semibold text-cyan-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                      WhatsApp
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white mt-1">
                    Connect with Distribution Desk
                  </h3>
                  <p className="text-xs text-blue-100/75 mt-0.5">
                    Discuss territory dealership, MOQ, and wholesale pricing.
                  </p>
                </div>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${brandConfig.contact.primaryPhone}`}
              className="contact-link group block p-6 rounded-3xl bg-[#F8FBFF] hover:bg-white border border-slate-200/80 hover:border-cyan-400 shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98]"
              aria-label={`Call ${brandConfig.contact.displayPhone}`}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF5FF] flex items-center justify-center flex-shrink-0 text-[#0A3D91] group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Voice Support
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mt-0.5">
                    {brandConfig.contact.displayPhone}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monday to Saturday, standard business hours.
                  </p>
                </div>
              </div>
            </a>

            {/* Official Email */}
            <a
              href={`mailto:${brandConfig.contact.primaryEmail}?subject=${encodeURIComponent('Distributor Enquiry – APEX Premium Water')}`}
              className="contact-link group block p-6 rounded-3xl bg-[#F8FBFF] hover:bg-white border border-slate-200/80 hover:border-cyan-400 shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98]"
              aria-label={`Email ${brandConfig.contact.primaryEmail}`}
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF5FF] flex items-center justify-center flex-shrink-0 text-[#0A3D91] group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Corporate Email
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5 truncate">
                    {brandConfig.contact.primaryEmail}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For institutional purchase agreements and contracts.
                  </p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* ── Fluid Transition into Deep Ocean Navy Footer ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pointer-events-none"
        style={{ height: '50px' }}
        aria-hidden="true"
      >
        <div className="wave-animate" style={{ width: '200%', height: '100%' }}>
          <svg
            viewBox="0 0 1440 50"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path
              d="M0,20 C320,50 640,0 960,30 C1200,45 1360,15 1440,20 L1440,50 L0,50 Z"
              fill="#030C1C"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
