import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../../data/resumeData';
import { Briefcase, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceEducationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');
  const { t, isRtl } = useLanguage();

  return (
    <section id="background" className="py-24 bg-cohere-canvas border-b border-cohere-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wideCode text-cohere-muted">
              {t.background.sectionTag}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-cohere-primary tracking-tight mb-4">
            {t.background.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-cohere-slate leading-relaxed">
            {t.background.sectionSubtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 pb-6 mb-10 border-b border-cohere-hairline">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-pill text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-cohere-primary text-white shadow-xs'
                : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.background.tabExperience} ({EXPERIENCES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-pill text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-cohere-primary text-white shadow-xs'
                : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.background.tabEducation}</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-pill text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'certifications'
                ? 'bg-cohere-primary text-white shadow-xs'
                : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{t.background.tabCertifications} ({CERTIFICATIONS.length})</span>
          </button>
        </div>

        {/* Tab 1: Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const roleTitle = isRtl && exp.roleAr ? exp.roleAr : exp.role;
              const companyName = isRtl && exp.companyAr ? exp.companyAr : exp.company;
              const location = isRtl ? 'صنعاء، اليمن' : exp.location;

              return (
                <div
                  key={idx}
                  className="bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 sm:p-8 hover:border-cohere-primary/80 transition-all hover:shadow-xs text-start"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cohere-hairline/80 pb-4 mb-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-cohere-muted block">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-2xl font-normal text-cohere-primary mt-1">
                        {roleTitle}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium text-cohere-ink">{companyName}</span>
                        <span className="text-cohere-muted text-xs">•</span>
                        <span className="text-xs text-cohere-slate">{location}</span>
                      </div>
                    </div>

                    {!isRtl && exp.companyAr && (
                      <span className="font-arabic text-sm text-cohere-slate text-right" dir="rtl">
                        {exp.companyAr}
                      </span>
                    )}
                  </div>

                  {exp.subRoles && exp.subRoles.length > 0 && (
                    <div className="space-y-6">
                      {exp.subRoles.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className={`${
                            isRtl ? 'pr-4 border-r-2' : 'pl-4 border-l-2'
                          } border-cohere-hairline`}
                        >
                          <h4 className="font-mono text-xs uppercase tracking-wider text-cohere-primary font-bold mb-3">
                            {sub.title}
                          </h4>
                          <ul className="space-y-2">
                            {sub.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-cohere-slate leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-cohere-deepGreen shrink-0 mt-2"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Education & Academic Honors */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => {
              const degree = isRtl && edu.degreeAr ? edu.degreeAr : edu.degree;
              const institution = isRtl && edu.institutionAr ? edu.institutionAr : edu.institution;

              return (
                <div
                  key={idx}
                  className="bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 sm:p-8 flex flex-col justify-between text-start"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-cohere-muted mb-3">
                      <span>{edu.period}</span>
                      <span>{isRtl ? 'صنعاء، اليمن' : edu.location}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-normal text-cohere-primary mb-1">
                      {degree}
                    </h3>

                    <p className="text-sm font-medium text-cohere-ink mb-4">
                      {institution}
                    </p>

                    <div className="p-4 bg-cohere-paleGreen/50 border border-emerald-200/60 rounded-md mb-6">
                      <span className="font-mono text-[10px] uppercase text-emerald-800 tracking-wider block font-bold">
                        {t.background.distinctionBadge}
                      </span>
                      <span className="font-display text-lg font-semibold text-emerald-950 block mt-0.5">
                        {edu.honors}
                      </span>
                      <span className="font-mono text-xs text-emerald-800 font-medium block mt-1">
                        {isRtl ? `المعدل التراكمي: ${edu.gpa}` : `Cumulative GPA: ${edu.gpa}`}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-cohere-slate">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!isRtl && edu.degreeAr && (
                    <div className="pt-6 mt-6 border-t border-cohere-hairline">
                      <p className="font-arabic text-xs text-cohere-muted text-right" dir="rtl">
                        {edu.degreeAr} — {edu.institutionAr}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-cohere-canvas border border-cohere-hairline rounded-md p-5 flex flex-col justify-between hover:border-cohere-primary transition-colors text-start"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-cohere-muted mb-2">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>

                  <h4 className="font-display text-base font-medium text-cohere-primary mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-cohere-slate leading-relaxed mb-4">
                    {cert.details}
                  </p>
                </div>

                {cert.grade && (
                  <div className="pt-2 border-t border-cohere-hairline flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {cert.grade}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
