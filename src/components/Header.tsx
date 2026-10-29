import React, { useState, useEffect } from 'react';
import { brandConfig } from '../config/brandConfig';
import { Menu, X, Phone, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenChecklist: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenChecklist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Purification', href: '#purification' },
    { label: 'Quality & Licences', href: '#quality' },
    { label: 'Army Pledge', href: '#commitment' },
    { label: 'Distributor Enquiry', href: '#distributor' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-blue-100'
            : 'bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <div className="relative overflow-hidden rounded-md p-1 bg-white shadow-sm border border-blue-100 flex items-center justify-center">
                <img
                  src="/assets/apex-logo.png"
                  alt="APEX Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-black tracking-tight text-xl sm:text-2xl leading-none transition-colors duration-300 ${isScrolled ? 'text-[#0A3D91]' : 'text-white'}`}>
                  {brandConfig.brandName}
                </span>
                <span className={`text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 ${isScrolled ? 'text-blue-700' : 'text-blue-200'}`}>
                  Premium Packaged Water
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-semibold px-3 py-2 rounded-full transition-all duration-200 ${
                    isScrolled
                      ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenChecklist}
                className={`text-xs font-medium px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors border ${
                  isScrolled
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                }`}
                title="View Owner & Brand Verification Checklist"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Facts</span>
              </button>

              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                  isScrolled ? 'text-blue-900 hover:bg-blue-50' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Call Apex Water"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="#distributor"
                onClick={(e) => handleLinkClick(e, '#distributor')}
                className="bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Distributor Enquiry</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenChecklist}
                className={`p-1.5 rounded-md text-xs flex items-center gap-1 border ${
                  isScrolled
                    ? 'border-emerald-200 text-emerald-700 bg-emerald-50'
                    : 'border-white/20 text-white bg-white/10'
                }`}
                aria-label="Verification checklist"
              >
                <ShieldCheck className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-blue-50/50">
              <div className="flex items-center gap-2.5">
                <img src="/assets/apex-logo.png" alt="APEX" className="h-9 w-auto" />
                <div>
                  <h2 className="font-extrabold text-blue-950 text-base leading-tight">APEX Water</h2>
                  <p className="text-[11px] text-blue-700 font-medium">Pure Water, Stronger India.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-800 hover:bg-blue-50 hover:text-blue-700 font-semibold text-base transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenChecklist();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-50 text-emerald-900 font-medium text-sm border border-emerald-200"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Brand Verification Checklist
                  </span>
                  <span className="text-[11px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">
                    Official
                  </span>
                </button>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-100 space-y-2.5 bg-slate-50">
              <a
                href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=Hello%20Apex%20Water%20Team%2C%20I%20would%20like%20to%20enquire%20about%20distribution`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Distributor Enquiry</span>
              </a>

              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {brandConfig.contact.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
