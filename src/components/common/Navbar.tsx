import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../../data/resumeData';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.overview, href: '#overview' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.enterpriseAi, href: '#enterprise-ai' },
    { label: t.nav.expertise, href: '#expertise' },
    { label: t.nav.background, href: '#background' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cohere-canvas/90 backdrop-blur-md border-b border-cohere-hairline py-3 shadow-xs'
          : 'bg-cohere-canvas/60 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#overview"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cohere-primary rounded-sm"
          >
            <div className="w-8 h-8 rounded-sm bg-cohere-primary flex items-center justify-center text-white font-mono text-sm font-bold tracking-tight transition-transform duration-200 group-hover:scale-105">
              {isRtl ? 'أ' : 'A'}
            </div>
            <div className="flex flex-col text-start">
              <span className="font-display font-bold text-sm tracking-tight text-cohere-ink group-hover:text-cohere-actionBlue transition-colors uppercase">
                {isRtl ? CANDIDATE_PROFILE.nameAr : CANDIDATE_PROFILE.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wideCode text-cohere-muted flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {t.nav.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono tracking-wide uppercase text-cohere-slate hover:text-cohere-primary transition-colors rounded-sm hover:bg-cohere-softStone/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div className="inline-flex items-center p-0.5 rounded-pill bg-cohere-softStone border border-cohere-hairline text-xs font-mono">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-pill transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-cohere-primary text-white shadow-xs font-semibold'
                    : 'text-cohere-slate hover:text-cohere-primary'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-pill transition-all cursor-pointer font-arabic ${
                  language === 'ar'
                    ? 'bg-cohere-primary text-white shadow-xs font-semibold'
                    : 'text-cohere-slate hover:text-cohere-primary'
                }`}
                title="التحويل إلى اللغة العربية"
              >
                العربية
              </button>
            </div>

            {/* Direct Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-pill bg-cohere-primary text-white text-xs font-mono uppercase tracking-wider hover:bg-cohere-ink hover:shadow-sm active:scale-95 transition-all duration-150"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 opacity-80 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <div className="inline-flex items-center p-0.5 rounded-pill bg-cohere-softStone border border-cohere-hairline text-xs font-mono">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="px-2 py-0.5 rounded-pill text-xs font-medium text-cohere-ink flex items-center gap-1"
                aria-label="Toggle language"
              >
                <Globe className="w-3 h-3 text-cohere-slate" />
                <span>{language === 'en' ? 'العربية' : 'EN'}</span>
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-cohere-ink hover:bg-cohere-softStone transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cohere-canvas border-b border-cohere-hairline px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono uppercase tracking-wide text-cohere-ink hover:bg-cohere-softStone rounded-xs transition-colors text-start"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-cohere-hairline/60 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-pill bg-cohere-primary text-white text-xs font-mono uppercase tracking-wider"
              >
                <span>{t.nav.getInTouch}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
