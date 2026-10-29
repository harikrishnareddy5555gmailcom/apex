import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ShieldCheck, MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChecklist }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 sm:pb-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-md shadow-sm">
                <img src="/assets/apex-logo.png" alt="APEX Logo" className="h-10 w-auto" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">APEX</span>
                <p className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
                  {brandConfig.subTagline}
                </p>
              </div>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Premium packaged drinking water enriched with Calcium & Magnesium, purified through 5-stage filtration. Dedicated to purity and supporting our national defenders.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 max-w-sm">
              <span className="text-amber-400 font-bold block text-xs">
                "{brandConfig.commitment.primaryMessage}"
              </span>
              <span className="text-[10px] text-slate-400">
                Official pledge printed on every bottle label.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About APEX</a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">Products (500ml & 1L)</a>
              </li>
              <li>
                <a href="#purification" className="hover:text-cyan-400 transition-colors">5-Stage Water Treatment</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-cyan-400 transition-colors">Quality & Licences</a>
              </li>
              <li>
                <a href="#commitment" className="hover:text-cyan-400 transition-colors">Indian Army Pledge</a>
              </li>
              <li>
                <a href="#distributor" className="hover:text-cyan-400 transition-colors">Distributor Enquiries</a>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Packaging Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Verified Coordinates</h4>
            
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">{brandConfig.manufacturer.companyName}</strong>
                  <span className="text-slate-400">{brandConfig.manufacturer.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${brandConfig.contact.primaryPhone}`} className="hover:text-white font-semibold">
                  {brandConfig.contact.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${brandConfig.contact.primaryEmail}`} className="hover:text-white font-semibold break-all">
                  {brandConfig.contact.primaryEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={brandConfig.canonicalUrl} className="hover:text-white font-semibold">
                  {brandConfig.officialDomain}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 font-semibold">
                  FSSAI Lic. #{brandConfig.fssaiLicenseNumber}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} APEX Premium Water. Manufactured & Packed by {brandConfig.manufacturer.companyName}.</p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Tagline: "Pure Water, Stronger India." | All trademarks and label artwork belong to APEX.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenChecklist}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Label Data Verification Checklist</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
