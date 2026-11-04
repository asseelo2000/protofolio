import React, { useState } from 'react';
import { SKILL_GROUPS } from '../../data/resumeData';
import { Server, Smartphone, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const TechnicalSkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const { t, isRtl } = useLanguage();

  const icons = [
    <Server className="w-4 h-4" />,
    <Smartphone className="w-4 h-4" />,
    <Globe className="w-4 h-4" />,
    <Cpu className="w-4 h-4" />,
    <ShieldCheck className="w-4 h-4" />,
  ];

  return (
    <section id="expertise" className="py-24 bg-cohere-canvas border-b border-cohere-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wideCode text-cohere-muted">
              {t.skills.sectionTag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cohere-actionBlue"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-cohere-ink tracking-tight mb-4">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-cohere-slate leading-relaxed">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* Tab Controls for Categories */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-cohere-hairline">
          {SKILL_GROUPS.map((group, idx) => {
            const categoryName = isRtl && group.categoryAr ? group.categoryAr : group.category;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-pill text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeCategory === idx
                    ? 'bg-cohere-primary text-cohere-canvas shadow-xs font-semibold'
                    : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
                }`}
              >
                <span>{icons[idx % icons.length]}</span>
                <span>{categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="bg-cohere-softStone/30 border border-cohere-hairline rounded-lg p-6 sm:p-10 text-start">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-cohere-muted">
                {t.skills.domainFocus}
              </span>
              {!isRtl && SKILL_GROUPS[activeCategory].categoryAr && (
                <span className="font-arabic text-xs text-cohere-slate" dir="rtl">
                  {SKILL_GROUPS[activeCategory].categoryAr}
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-cohere-ink mb-2">
              {isRtl && SKILL_GROUPS[activeCategory].categoryAr
                ? SKILL_GROUPS[activeCategory].categoryAr
                : SKILL_GROUPS[activeCategory].category}
            </h3>
            <p className="text-sm text-cohere-slate">
              {SKILL_GROUPS[activeCategory].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_GROUPS[activeCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="bg-cohere-canvas border border-cohere-hairline rounded-md p-4 hover:border-cohere-primary/80 transition-all duration-150 hover:shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="font-display text-base font-medium text-cohere-ink">
                    {skill.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                </div>

                {skill.tags && (
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-cohere-hairline/60">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase text-cohere-muted px-2 py-0.5 rounded-xs bg-cohere-softStone/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
