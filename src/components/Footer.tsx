import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Phone, Mail, MapPin, ArrowUp, Globe, Droplets } from 'lucide-react';

const footerNav = [
  { label: 'Home',            href: '#hero' },
  { label: 'About',           href: '#about' },
  { label: 'Our Product',     href: '#products' },
  { label: 'Purification',    href: '#purification' },
  { label: 'Our Commitment',  href: '#commitment' },
  { label: 'Contact',         href: '#distributor' },
];

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (!targetEl) return;
    const headerOffset = 70;
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#030C1C] text-slate-400 pt-16 pb-10 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">

          {/* 1. Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white rounded-xl flex-shrink-0 shadow-sm">
                <img
                  src="/assets/apex-logo.png"
                  alt="APEX Premium Water logo"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">APEX</span>
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
                  Premium Water
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {brandConfig.brandTagline} Dedicated to purity, health, and supporting India's brave defenders with every drop.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Droplets className="w-3.5 h-3.5" aria-hidden="true" />
              <span>5% dedicated to the Indian Army</span>
            </div>
          </div>

          {/* 2. Navigation */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-200">
              Navigation
            </h2>
            <ul className="space-y-2">
              {footerNav.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors py-0.5 inline-block active:scale-95"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Facility Location */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-200">
              Bottling Facility
            </h2>
            <div className="text-xs space-y-2 text-slate-400">
              <p className="font-bold text-slate-200">{brandConfig.manufacturer.companyName}</p>
              <div className="flex items-start gap-2 text-slate-400 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{brandConfig.manufacturer.address}</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                {brandConfig.manufacturer.countryOfOrigin}
              </p>
            </div>
          </div>

          {/* 4. Direct Contact */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-200">
              Connect
            </h2>
            <address className="not-italic space-y-2.5 text-xs">
              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group active:scale-95"
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{brandConfig.contact.displayPhone}</span>
              </a>

              <a
                href={`mailto:${brandConfig.contact.primaryEmail}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group break-all active:scale-95"
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{brandConfig.contact.primaryEmail}</span>
              </a>

              <a
                href={brandConfig.canonicalUrl}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group active:scale-95"
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{brandConfig.officialDomain}</span>
              </a>
            </address>
          </div>

        </div>

        {/* ══ Bottom Bar: FSSAI Factual Disclosure & Copyright ══ */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {CURRENT_YEAR} APEX Premium Water. Manufactured &amp; Packed by {brandConfig.manufacturer.companyName}.
            </p>
            <p className="text-[11px] text-slate-400/90 font-medium">
              FSSAI Lic. No. {brandConfig.fssaiLicenseNumber} · Packaged Drinking Water
            </p>
          </div>

          {/* Centered Back to Top Button */}
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors shadow-sm active:scale-95"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
