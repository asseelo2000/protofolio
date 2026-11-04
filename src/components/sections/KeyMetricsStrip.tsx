import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const KeyMetricsStrip: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="border-y border-cohere-hairline bg-cohere-softStone/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {t.metrics.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col text-center sm:text-start items-center sm:items-start p-2 sm:p-0 ${
                isRtl
                  ? 'sm:border-r border-cohere-hairline sm:pr-4 sm:first:border-r-0 md:first:border-r'
                  : 'sm:border-l border-cohere-hairline sm:pl-4 sm:first:border-l-0 md:first:border-l'
              }`}
            >
              <div className="flex items-baseline justify-center sm:justify-start gap-1">
                <span className="font-display text-3xl sm:text-4xl font-normal text-cohere-ink tracking-tight">
                  <bdi className="ltr-token font-mono">{stat.value}</bdi>
                </span>
              </div>
              <span className={`text-xs font-mono uppercase tracking-wide text-cohere-ink font-medium mt-1 ${isRtl ? 'mono-label-ar text-[13px] sm:text-[14px]' : ''}`}>
                {stat.label}
              </span>
              <span className={`text-[11px] text-cohere-muted mt-0.5 ${isRtl ? 'micro-ar text-[12px] sm:text-[13px]' : ''}`}>
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
