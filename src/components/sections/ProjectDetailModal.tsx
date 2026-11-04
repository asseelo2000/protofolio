import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu, Database, Server, Smartphone } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { AvailabilityBadge } from '../common/Badge';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { t, isRtl } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = isRtl && project.titleAr ? project.titleAr : project.title;
  const organization = isRtl && project.organizationAr ? project.organizationAr : project.organization;
  const categoryLabel = isRtl && project.categoryLabelAr ? project.categoryLabelAr : project.categoryLabel;
  const availabilityLabel = isRtl && project.availabilityLabelAr ? project.availabilityLabelAr : project.availabilityLabel;
  const fullOverview = isRtl && project.fullOverviewAr ? project.fullOverviewAr : project.fullOverview;
  const businessContext = isRtl && project.businessContextAr ? project.businessContextAr : project.businessContext;
  const engineeringSolution = isRtl && project.engineeringSolutionAr ? project.engineeringSolutionAr : project.engineeringSolution;
  const documentedRole = isRtl && project.documentedRoleAr ? project.documentedRoleAr : project.documentedRole;
  const keyContributions = isRtl && project.keyContributionsAr ? project.keyContributionsAr : project.keyContributions;
  const keyFeatures = isRtl && project.keyFeaturesAr ? project.keyFeaturesAr : project.keyFeatures;
  const architectureHighlights = isRtl && project.architectureHighlightsAr ? project.architectureHighlightsAr : project.architectureHighlights;
  const metrics = isRtl && project.metricsAr ? project.metricsAr : project.metrics;
  const subApplications = isRtl && project.subApplicationsAr ? project.subApplicationsAr : project.subApplications;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto modal-backdrop animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative bg-cohere-canvas border border-cohere-hairline w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-start">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-cohere-canvas/95 backdrop-blur-md border-b border-cohere-hairline p-5 sm:p-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <AvailabilityBadge type={project.availability} label={availabilityLabel} />
            <span className="font-mono text-xs uppercase text-cohere-muted tracking-wider hidden sm:inline">
              {categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm text-cohere-slate hover:text-cohere-ink hover:bg-cohere-softStone transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Title & Organization */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cohere-slate uppercase tracking-wider mb-2">
              <span className="font-semibold text-cohere-ink">{organization}</span>
              <span>•</span>
              <span><bdi className="ltr-token font-mono">{project.year}</bdi></span>
            </div>

            <h2 className={`font-display text-2xl sm:text-4xl font-normal text-cohere-ink tracking-tight ${isRtl ? 'section-heading-ar' : ''}`}>
              {title}
            </h2>

            {!isRtl && project.titleAr && (
              <p className="font-arabic text-base sm:text-lg text-cohere-muted mt-1 text-right" dir="rtl">
                {project.titleAr}
              </p>
            )}
            {isRtl && project.title && (
              <p className="font-mono text-xs text-cohere-muted mt-1 text-left" dir="ltr">
                <bdi className="ltr-token font-mono">{project.title}</bdi>
              </p>
            )}

            <p className={`text-base sm:text-lg text-cohere-slate leading-relaxed mt-4 font-normal ${isRtl ? 'body-large-ar' : ''}`}>
              {fullOverview}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-cohere-softStone/60 rounded-md border border-cohere-hairline">
              {metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className={`font-mono text-[11px] uppercase tracking-wider text-cohere-muted ${isRtl ? 'mono-label-ar text-[12px]' : ''}`}>
                    {m.label}
                  </span>
                  <span className="font-display text-base sm:text-lg font-medium text-cohere-ink mt-0.5">
                    <bdi className="ltr-token font-mono">{m.value}</bdi>
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Sub-Applications Matrix (for Smsm Ecosystem) */}
          {subApplications && subApplications.length > 0 && (
            <div className="border border-cohere-hairline rounded-md p-5 bg-cohere-canvas">
              <h4 className="font-mono text-xs uppercase tracking-wider text-cohere-ink font-bold mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cohere-actionBlue" />
                {t.projects.subAppsHeading}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {subApplications.map((sub, idx) => (
                  <div key={idx} className="p-4 bg-cohere-softStone/40 rounded-xs border border-cohere-hairline/80 flex flex-col justify-between text-start">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-cohere-muted tracking-wider">
                        {isRtl ? `تطبيق 0${idx + 1}` : `APPLICATION 0${idx + 1}`}
                      </span>
                      <h5 className="font-display text-sm font-semibold text-cohere-ink mt-0.5 mb-1.5">
                        {sub.name}
                      </h5>
                      <p className="text-xs text-cohere-slate leading-normal">
                        {sub.role}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-cohere-hairline flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                        {sub.status}
                      </span>
                      {sub.link && (
                        <a
                          href={sub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-cohere-actionBlue hover:underline flex items-center gap-1 font-mono"
                        >
                          {isRtl ? 'المتجر' : 'Store'} <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Context & Engineering Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-cohere-softStone/40 rounded-md border border-cohere-hairline">
              <span className="font-mono text-xs uppercase tracking-wider text-cohere-ink font-semibold flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-cohere-coral" />
                {t.projects.businessContext}
              </span>
              <p className="text-sm text-cohere-slate leading-relaxed">
                {businessContext}
              </p>
            </div>

            <div className="p-5 bg-cohere-softStone/40 rounded-md border border-cohere-hairline">
              <span className="font-mono text-xs uppercase tracking-wider text-cohere-ink font-semibold flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-cohere-actionBlue" />
                {t.projects.engineeringSolution}
              </span>
              <p className="text-sm text-cohere-slate leading-relaxed">
                {engineeringSolution}
              </p>
            </div>
          </div>

          {/* Documented Role & Verified Contributions */}
          <div className="border border-cohere-hairline rounded-md p-6 bg-cohere-canvas">
            <div className="flex items-center justify-between border-b border-cohere-hairline pb-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-cohere-ink font-bold">
                {t.projects.documentedContribution}
              </span>
              <span className="text-xs font-mono text-cohere-muted">
                {isRtl ? 'مطابق للسيرة الذاتية الرسمية' : 'Strict Factual Claims'}
              </span>
            </div>

            <p className="text-sm text-cohere-ink font-medium mb-4">
              {documentedRole}
            </p>

            <ul className="space-y-2.5">
              {keyContributions.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-cohere-slate leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cohere-ink font-bold mb-3">
              {t.projects.keyFeatures}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {keyFeatures.map((f, idx) => (
                <div key={idx} className="p-3 bg-cohere-softStone/30 rounded-xs border border-cohere-hairline text-xs font-mono text-cohere-ink flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cohere-slate"></span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {architectureHighlights && architectureHighlights.length > 0 && (
            <div className="bg-[#121217] dark:bg-[#08080b] text-white p-6 rounded-md border border-white/10 font-mono text-xs">
              <span className="text-cohere-paleGreen uppercase tracking-wider font-semibold block mb-3">
                {t.projects.architectureHighlights}
              </span>
              <ul className="space-y-2 text-white/80">
                {architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cohere-paleGreen">›</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Complete Technology Taxonomy */}
          <div className="border-t border-cohere-hairline pt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cohere-ink font-bold mb-4">
              {t.projects.techStack}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.technologies.backend && (
                <div>
                  <span className="font-mono text-[10px] uppercase text-cohere-muted block mb-1.5 flex items-center gap-1">
                    <Server className="w-3 h-3" /> {isRtl ? 'الواجهة الخلفية' : 'Backend'}
                  </span>
                  <div className="flex flex-col gap-1">
                    {project.technologies.backend.map((tItem) => (
                      <span key={tItem} className="text-xs font-mono text-cohere-ink">
                        <bdi className="ltr-token font-mono">{tItem}</bdi>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies.frontend && (
                <div>
                  <span className="font-mono text-[10px] uppercase text-cohere-muted block mb-1.5 flex items-center gap-1">
                    <Smartphone className="w-3 h-3" /> {isRtl ? 'الواجهة / المحمول' : 'Frontend / Mobile'}
                  </span>
                  <div className="flex flex-col gap-1">
                    {project.technologies.frontend.map((tItem) => (
                      <span key={tItem} className="text-xs font-mono text-cohere-ink">
                        <bdi className="ltr-token font-mono">{tItem}</bdi>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies.database && (
                <div>
                  <span className="font-mono text-[10px] uppercase text-cohere-muted block mb-1.5 flex items-center gap-1">
                    <Database className="w-3 h-3" /> {isRtl ? 'قواعد البيانات' : 'Data Storage'}
                  </span>
                  <div className="flex flex-col gap-1">
                    {project.technologies.database.map((tItem) => (
                      <span key={tItem} className="text-xs font-mono text-cohere-ink">
                        <bdi className="ltr-token font-mono">{tItem}</bdi>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies.infrastructure && (
                <div>
                  <span className="font-mono text-[10px] uppercase text-cohere-muted block mb-1.5 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> {isRtl ? 'الأمن والسحابة' : 'Security & Cloud'}
                  </span>
                  <div className="flex flex-col gap-1">
                    {project.technologies.infrastructure.map((tItem) => (
                      <span key={tItem} className="text-xs font-mono text-cohere-ink">
                        <bdi className="ltr-token font-mono">{tItem}</bdi>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer with Public Links */}
        <div className="sticky bottom-0 bg-cohere-canvas/95 backdrop-blur-md border-t border-cohere-hairline p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3 z-20">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-cohere-slate">
              {t.projects.verificationStatus}:
            </span>
            <span className="font-mono text-xs text-cohere-ink font-semibold">
              {availabilityLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.links.filter(l => l.type !== 'case-study').map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-cohere-primary text-cohere-canvas text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity shadow-xs"
              >
                <span>{link.type === 'google-play' ? t.projects.btnStore : (isRtl && link.labelAr ? link.labelAr : link.label)}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-pill bg-cohere-softStone text-cohere-ink text-xs font-mono uppercase tracking-wider hover:bg-cohere-hairline transition-colors cursor-pointer"
            >
              {t.projects.btnClose}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
