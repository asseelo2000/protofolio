import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, Layers, Cpu } from 'lucide-react';
import { ThreeBackground } from '../common/ThreeBackground';
import { CANDIDATE_PROFILE } from '../../data/resumeData';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-cohere-canvas">
      {/* Interactive Three.js 3D lattice & particle background with directional offset & theme adaptation */}
      <ThreeBackground intensity="hero" isRtl={isRtl} isDark={isDark} />

      {/* Gentle readability veil: directional gradient tailored for LTR / RTL and theme */}
      <div 
        className={`absolute inset-y-0 w-full sm:w-3/4 lg:w-3/5 pointer-events-none z-[5] ${
          isRtl
            ? 'right-0 bg-gradient-to-l from-cohere-canvas via-cohere-canvas/90 to-transparent'
            : 'left-0 bg-gradient-to-r from-cohere-canvas via-cohere-canvas/90 to-transparent'
        }`}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl relative text-center sm:text-start mx-auto sm:mx-0">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-cohere-softStone/90 border border-cohere-hairline backdrop-blur-xs mb-8 shadow-xs mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className={`font-mono text-xs uppercase tracking-wider text-cohere-slate ${isRtl ? 'mono-label-ar text-[13px] sm:text-[14px]' : ''}`}>
              {t.hero.badge}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className={`font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tightest text-cohere-ink leading-[1.12] mb-6 ${isRtl ? 'hero-display-ar' : ''}`}>
            {t.hero.headlinePart1}{' '}
            <span className="underline decoration-cohere-hairline underline-offset-8">
              {t.hero.headlineUnderline}
            </span>{' '}
            {t.hero.headlinePart2}
          </h1>

          {/* Subheading / Summary from CV */}
          <p className={`text-base sm:text-lg text-cohere-slate leading-relaxed font-normal max-w-2xl mb-10 mx-auto sm:mx-0 ${isRtl ? 'hero-subheading-ar' : ''}`}>
            {t.hero.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-pill bg-cohere-primary text-cohere-canvas text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>{t.hero.ctaWork}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#enterprise-ai"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-pill bg-cohere-softStone/80 border border-cohere-hairline text-cohere-ink text-xs font-mono uppercase tracking-wider hover:bg-cohere-softStone hover:border-cohere-slate transition-all duration-200 shadow-xs"
            >
              <Cpu className="w-3.5 h-3.5 text-cohere-coral" />
              <span>{t.hero.ctaAi}</span>
            </a>

            <a
              href={CANDIDATE_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono uppercase tracking-wider text-cohere-slate hover:text-cohere-ink transition-colors"
            >
              <span>{t.hero.ctaLinkedin}</span>
              <ArrowUpRight className={`w-3 h-3 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>

          {/* Verified Engineering Anchors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-14 mt-10 border-t border-cohere-hairline/80">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-3 bg-cohere-canvas/70 sm:bg-transparent p-3 sm:p-0 rounded-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-cohere-ink font-semibold">
                  {t.hero.fintechAnchorTitle}
                </h4>
                <p className="text-xs text-cohere-muted mt-1 leading-normal">
                  {t.hero.fintechAnchorDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-3 bg-cohere-canvas/70 sm:bg-transparent p-3 sm:p-0 rounded-xs">
              <Layers className="w-5 h-5 text-cohere-actionBlue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-cohere-ink font-semibold">
                  {t.hero.mobileAnchorTitle}
                </h4>
                <p className="text-xs text-cohere-muted mt-1 leading-normal">
                  {t.hero.mobileAnchorDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-3 bg-cohere-canvas/70 sm:bg-transparent p-3 sm:p-0 rounded-xs">
              <Terminal className="w-5 h-5 text-cohere-coral shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-cohere-ink font-semibold">
                  {t.hero.aiAnchorTitle}
                </h4>
                <p className="text-xs text-cohere-muted mt-1 leading-normal">
                  {t.hero.aiAnchorDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
