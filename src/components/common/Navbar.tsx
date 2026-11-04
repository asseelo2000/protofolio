import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, Sun, Moon } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../../data/resumeData';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import mePhoto from '../../assets/me.jpg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRtl } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();

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
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden border border-cohere-hairline/80 group-hover:border-cohere-primary/80 transition-all duration-200 shadow-xs shrink-0 bg-cohere-softStone">
              <img
                src={mePhoto}
                alt={isRtl ? CANDIDATE_PROFILE.nameAr : CANDIDATE_PROFILE.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                width={36}
                height={36}
                loading="eager"
              />
            </div>
            <div className="flex flex-col text-start">
              <span className={`font-display font-bold text-sm tracking-tight text-cohere-ink group-hover:text-cohere-actionBlue transition-colors uppercase ${isRtl ? 'mono-label-ar text-[14px]' : ''}`}>
                {isRtl ? CANDIDATE_PROFILE.nameAr : CANDIDATE_PROFILE.name}
              </span>
              <span className={`font-mono text-[10px] uppercase tracking-wideCode text-cohere-muted flex items-center gap-1 ${isRtl ? 'mono-label-ar text-[11px]' : ''}`}>
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
                className={`px-3 py-1.5 text-xs font-mono tracking-wide uppercase text-cohere-slate hover:text-cohere-primary transition-colors rounded-sm hover:bg-cohere-softStone/60 ${isRtl ? 'mono-label-ar text-[13px] sm:text-[14px]' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Switcher + Language Switcher + Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-pill bg-cohere-softStone border border-cohere-hairline text-cohere-slate hover:text-cohere-ink hover:border-cohere-primary/60 transition-all cursor-pointer shadow-2xs"
              title={isDark ? (isRtl ? 'التبديل إلى الوضع النهاري' : 'Switch to Light Mode') : (isRtl ? 'التبديل إلى الوضع الليلي' : 'Switch to Dark Mode')}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-200" />
              ) : (
                <Moon className="w-4 h-4 text-cohere-slate animate-in spin-in-90 duration-200" />
              )}
            </button>

            {/* Language Switcher Pill */}
            <div className="inline-flex items-center p-0.5 rounded-pill bg-cohere-softStone border border-cohere-hairline text-xs font-mono">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-pill transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-cohere-primary text-cohere-canvas shadow-xs font-semibold'
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
                    ? 'bg-cohere-primary text-cohere-canvas shadow-xs font-semibold'
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
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-pill bg-cohere-primary text-cohere-canvas text-xs font-mono uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all duration-150 shadow-xs ${isRtl ? 'btn' : ''}`}
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 opacity-80 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-pill bg-cohere-softStone border border-cohere-hairline text-cohere-slate"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-cohere-slate" />
              )}
            </button>

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
                className={`px-3 py-2.5 text-sm font-mono uppercase tracking-wide text-cohere-ink hover:bg-cohere-softStone rounded-xs transition-colors text-center ${isRtl ? 'mono-label-ar text-[15px]' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-cohere-hairline/60 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-pill bg-cohere-primary text-cohere-canvas text-xs font-mono uppercase tracking-wider"
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
