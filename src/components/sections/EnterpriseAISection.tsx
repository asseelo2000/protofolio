import React from 'react';
import { Cpu, Shield, Database, Bot, Lock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ENTERPRISE_AI_INITIATIVES } from '../../data/projectsData';
import { useLanguage } from '../../context/LanguageContext';

export const EnterpriseAISection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="enterprise-ai" className="py-24 bg-cohere-deepGreen text-white relative overflow-hidden">
      {/* Subtle geometric grid background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-start">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wideCode text-emerald-300">
              {t.enterpriseAi.sectionTag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-white mb-6">
            {t.enterpriseAi.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal">
            {t.enterpriseAi.sectionSubtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {ENTERPRISE_AI_INITIATIVES.map((initiative, idx) => {
            const icons = [
              <Cpu className="w-5 h-5 text-emerald-300" />,
              <Bot className="w-5 h-5 text-sky-300" />,
              <Database className="w-5 h-5 text-amber-300" />,
              <Lock className="w-5 h-5 text-rose-300" />,
            ];

            const title = isRtl && initiative.titleAr ? initiative.titleAr : initiative.title;

            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-sm bg-white/10 border border-white/10">
                      {icons[idx % icons.length]}
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-200/70">
                      {isRtl ? 'البنك التجاري اليمني' : initiative.organization}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-normal text-white mb-2">
                    {title}
                  </h3>

                  {!isRtl && initiative.titleAr && (
                    <p className="font-arabic text-sm text-emerald-200/60 mb-3" dir="rtl">
                      {initiative.titleAr}
                    </p>
                  )}

                  <p className="text-sm text-emerald-100/80 leading-relaxed mb-6 font-normal">
                    {initiative.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {initiative.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {initiative.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-pill bg-black/20 border border-white/15 text-[11px] font-mono text-emerald-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Reliability Callout Banner */}
        <div className="bg-black/40 border border-white/15 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-full shrink-0">
              <Shield className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h4 className="font-display text-lg font-medium text-white">
                {t.enterpriseAi.bannerTitle}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/70 mt-0.5">
                {t.enterpriseAi.bannerSubtitle}
              </p>
            </div>
          </div>

          <a
            href="#background"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-white text-cohere-primary text-xs font-mono uppercase tracking-wider font-semibold hover:bg-emerald-50 transition-colors"
          >
            <span>{t.enterpriseAi.bannerBtn}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
};
