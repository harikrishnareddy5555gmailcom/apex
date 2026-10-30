import React, { useState, useEffect } from 'react';
import { brandConfig } from '../config/brandConfig';
import { Menu, X, Phone, MessageSquare, Droplets } from 'lucide-react';

const navLinks = [
  { label: 'Home',            href: '#hero',          id: 'hero' },
  { label: 'About',           href: '#about',         id: 'about' },
  { label: 'Our Product',     href: '#products',      id: 'products' },
  { label: 'Purification',    href: '#purification',  id: 'purification' },
  { label: 'Our Commitment',  href: '#commitment',    id: 'commitment' },
  { label: 'Contact',         href: '#distributor',   id: 'distributor' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle header appearance on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ScrollSpy: highlight active section
  useEffect(() => {
    const sectionIds = ['hero', 'commitment', 'about', 'products', 'purification', 'distributor'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  // Smooth scroll handler with header height offset
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-3'
            : 'bg-gradient-to-b from-[#041026]/80 via-[#041026]/40 to-transparent backdrop-blur-[2px] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo & Name */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero', 'hero')}
              className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group transition-transform active:scale-95"
              aria-label="APEX Premium Water — Back to top"
            >
              <div className="relative p-1 rounded-lg bg-white/95 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/assets/apex-logo.png"
                  alt="APEX Premium Water"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-black text-lg leading-none tracking-tight transition-colors duration-200 ${
                    isScrolled ? 'text-[#0A3D91]' : 'text-white'
                  }`}
                >
                  APEX
                </span>
                <span
                  className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                    isScrolled ? 'text-slate-500' : 'text-cyan-200/80'
                  }`}
                >
                  Premium Water
                </span>
              </div>
            </a>

            {/* Desktop Navigation with Active ScrollSpy Indicator */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? 'bg-[#0A3D91] text-white shadow-sm'
                          : 'bg-white/20 text-white backdrop-blur-md shadow-sm border border-white/30'
                        : isScrolled
                          ? 'text-slate-600 hover:text-[#0A3D91] hover:bg-blue-50/70'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition-all duration-200 active:scale-95 ${
                  isScrolled
                    ? 'text-slate-600 hover:text-[#0A3D91] hover:bg-slate-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label={`Call ${brandConfig.contact.displayPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                <span className="hidden xl:inline">{brandConfig.contact.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello APEX Water Team, I would like to enquire about distribution.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-liquid inline-flex items-center gap-2 bg-gradient-to-r from-[#0A3D91] via-[#0C48A9] to-[#0D52BD] hover:from-[#083075] hover:to-[#0A3D91] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-cyan-300" aria-hidden="true" />
                <span>Distributor Enquiry</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-200 active:scale-95 ${
                isScrolled
                  ? 'text-slate-800 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation drawer"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#041026]/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[290px] max-w-[calc(100vw-2.5rem)] bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col z-50 border-l border-white/60">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img src="/assets/apex-logo.png" alt="APEX" className="h-8 w-auto" />
                <div>
                  <p className="font-black text-[#0A3D91] text-base leading-tight">APEX</p>
                  <p className="text-[10px] text-slate-400 font-medium">Pure Water, Stronger India.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors active:scale-95"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Links with Active State */}
            <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#0A3D91] text-white shadow-sm'
                        : 'text-slate-700 hover:text-[#0A3D91] hover:bg-blue-50/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    <Droplets
                      className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-blue-300 opacity-60'}`}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </nav>

            {/* CTAs */}
            <div className="p-4 border-t border-slate-100 space-y-2.5 bg-slate-50/50">
              <a
                href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent('Hello APEX Water Team, I would like to enquire about distribution.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-liquid w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0A3D91] to-[#0D52BD] text-white font-bold text-xs shadow hover:shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-cyan-300" aria-hidden="true" />
                Distributor Enquiry
              </a>
              <a
                href={`tel:${brandConfig.contact.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-white transition-colors active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#0A3D91]" aria-hidden="true" />
                {brandConfig.contact.displayPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
