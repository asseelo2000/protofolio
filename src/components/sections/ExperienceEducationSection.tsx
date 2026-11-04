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
        <div className="max-w-3xl mb-12 text-center md:text-start mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className={`font-mono text-xs uppercase tracking-wideCode text-cohere-muted ${isRtl ? 'mono-label-ar text-[13px]' : ''}`}>
              {isRtl ? (
                <>
                  <bdi className="ltr-token">04 /</bdi> {t.background.sectionTag.replace(/^04\s*\/\s*/, '')}
                </>
              ) : (
                t.background.sectionTag
              )}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          </div>
          <h2 className={`font-display text-3xl sm:text-5xl font-normal text-cohere-ink tracking-tight mb-4 ${isRtl ? 'section-display-ar' : ''}`}>
            {t.background.sectionTitle}
          </h2>
          <p className={`text-sm sm:text-base text-cohere-slate leading-relaxed mx-auto md:mx-0 ${isRtl ? 'body-ar' : ''}`}>
            {t.background.sectionSubtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 pb-6 mb-10 border-b border-cohere-hairline">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-pill text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              isRtl ? 'mono-label-ar text-[13px] sm:text-[14px]' : ''
            } ${
              activeTab === 'experience'
                ? 'bg-cohere-primary text-cohere-canvas shadow-xs font-semibold'
                : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.background.tabExperience} <bdi className="ltr-token font-mono">({EXPERIENCES.length})</bdi></span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-pill text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              isRtl ? 'mono-label-ar text-[13px] sm:text-[14px]' : ''
            } ${
              activeTab === 'education'
                ? 'bg-cohere-primary text-cohere-canvas shadow-xs font-semibold'
                : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.background.tabEducation}</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-pill text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              isRtl ? 'mono-label-ar text-[13px] sm:text-[14px]' : ''
            } ${
              activeTab === 'certifications'
                ? 'bg-cohere-primary text-cohere-canvas shadow-xs font-semibold'
                : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{t.background.tabCertifications} <bdi className="ltr-token font-mono">({CERTIFICATIONS.length})</bdi></span>
          </button>
        </div>

        {/* Tab 1: Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const roleTitle = isRtl && exp.roleAr ? exp.roleAr : exp.role;
              const companyName = isRtl && exp.companyAr ? exp.companyAr : exp.company;
              const period = isRtl && exp.periodAr ? exp.periodAr : exp.period;
              const location = isRtl && exp.locationAr ? exp.locationAr : exp.location;

              return (
                <div
                  key={idx}
                  className="bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 sm:p-8 hover:border-cohere-primary/80 transition-all hover:shadow-xs text-center sm:text-start"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-center sm:text-start gap-2 border-b border-cohere-hairline/80 pb-4 mb-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-cohere-muted block">
                        <bdi className="ltr-token font-mono">{period}</bdi>
                      </span>
                      <h3 className={`font-display text-2xl font-normal text-cohere-ink mt-1 ${isRtl ? 'card-heading-ar text-[24px]' : ''}`}>
                        {roleTitle}
                      </h3>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                        <span className="text-sm font-medium text-cohere-ink">{companyName}</span>
                        <span className="text-cohere-muted text-xs">•</span>
                        <span className="text-xs text-cohere-slate">{location}</span>
                      </div>
                    </div>

                    {!isRtl && exp.companyAr && (
                      <span className="font-arabic text-sm text-cohere-slate text-center sm:text-right" dir="rtl">
                        {exp.companyAr}
                      </span>
                    )}
                  </div>

                  {exp.subRoles && exp.subRoles.length > 0 && (
                    <div className="space-y-6">
                      {exp.subRoles.map((sub, sIdx) => {
                        const subTitle = isRtl && sub.titleAr ? sub.titleAr : sub.title;
                        const subResponsibilities = isRtl && sub.responsibilitiesAr ? sub.responsibilitiesAr : sub.responsibilities;

                        return (
                          <div
                            key={sIdx}
                            className={`p-3 sm:p-0 rounded-xs bg-cohere-softStone/30 sm:bg-transparent ${
                              isRtl ? 'sm:pr-4 sm:border-r-2' : 'sm:pl-4 sm:border-l-2'
                            } border-cohere-hairline text-center sm:text-start`}
                          >
                            <h4 className={`font-mono text-xs uppercase tracking-wider text-cohere-ink font-bold mb-3 ${isRtl ? 'feature-heading-ar text-[15px]' : ''}`}>
                              {subTitle}
                            </h4>
                            <ul className="space-y-2">
                              {subResponsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start justify-center sm:justify-start gap-2.5 text-xs sm:text-sm text-cohere-slate leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                                  <span className={isRtl ? 'body-ar text-[14px] leading-[1.65]' : ''}>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
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
              const period = isRtl && edu.periodAr ? edu.periodAr : edu.period;
              const location = isRtl && edu.locationAr ? edu.locationAr : edu.location;
              const honors = isRtl && edu.honorsAr ? edu.honorsAr : edu.honors;
              const highlights = isRtl && edu.highlightsAr ? edu.highlightsAr : edu.highlights;

              return (
                <div
                  key={idx}
                  className="bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 sm:p-8 flex flex-col justify-between text-center sm:text-start"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-xs font-mono uppercase tracking-wider text-cohere-muted mb-3 gap-1">
                      <span><bdi className="ltr-token font-mono">{period}</bdi></span>
                      <span>{location}</span>
                    </div>

                    <h3 className={`font-display text-xl sm:text-2xl font-normal text-cohere-ink mb-1 ${isRtl ? 'card-heading-ar text-[22px]' : ''}`}>
                      {degree}
                    </h3>

                    <p className={`text-sm font-medium text-cohere-slate mb-4 ${isRtl ? 'body-ar text-[14px]' : ''}`}>
                      {institution}
                    </p>

                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-md mb-6 text-center sm:text-start">
                      <span className={`font-mono text-[10px] uppercase text-emerald-800 dark:text-emerald-400 tracking-wider block font-bold ${isRtl ? 'mono-label-ar text-[12px]' : ''}`}>
                        {t.background.distinctionBadge}
                      </span>
                      <span className={`font-display text-lg font-semibold text-emerald-950 dark:text-emerald-300 block mt-0.5 ${isRtl ? 'feature-heading-ar text-[18px]' : ''}`}>
                        {honors}
                      </span>
                      <span className="font-mono text-xs text-emerald-800 dark:text-emerald-400 font-medium block mt-1">
                        {isRtl ? (
                          <>المعدل التراكمي: <bdi className="ltr-token font-mono">{edu.gpa}</bdi></>
                        ) : (
                          `Cumulative GPA: ${edu.gpa}`
                        )}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start justify-center sm:justify-start gap-2 text-xs sm:text-sm text-cohere-slate">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className={isRtl ? 'body-ar text-[14px] leading-[1.6]' : ''}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!isRtl && edu.degreeAr && (
                    <div className="pt-6 mt-6 border-t border-cohere-hairline">
                      <p className="font-arabic text-xs text-cohere-muted text-center sm:text-right" dir="rtl">
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
            {CERTIFICATIONS.map((cert, idx) => {
              const title = isRtl && cert.titleAr ? cert.titleAr : cert.title;
              const issuer = isRtl && cert.issuerAr ? cert.issuerAr : cert.issuer;
              const date = isRtl && cert.dateAr ? cert.dateAr : cert.date;
              const details = isRtl && cert.detailsAr ? cert.detailsAr : cert.details;
              const grade = isRtl && cert.gradeAr ? cert.gradeAr : cert.grade;

              return (
                <div
                  key={idx}
                  className="bg-cohere-canvas border border-cohere-hairline rounded-md p-5 flex flex-col justify-between hover:border-cohere-primary/80 transition-colors text-center sm:text-start"
                >
                  <div>
                    <div className="flex items-center justify-center sm:justify-between text-[11px] font-mono text-cohere-muted mb-2 gap-2">
                      <span>{issuer}</span>
                      <span><bdi className="ltr-token font-mono">{date}</bdi></span>
                    </div>

                    <h4 className={`font-display text-base font-medium text-cohere-ink mb-2 ${isRtl ? 'feature-heading-ar text-[16px]' : ''}`}>
                      {title}
                    </h4>

                    <p className={`text-xs text-cohere-slate leading-relaxed mb-4 ${isRtl ? 'body-ar text-[13px] leading-[1.65]' : ''}`}>
                      {details}
                    </p>
                  </div>

                  {grade && (
                    <div className="pt-2 border-t border-cohere-hairline flex items-center justify-center sm:justify-between">
                      <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                        {grade}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
