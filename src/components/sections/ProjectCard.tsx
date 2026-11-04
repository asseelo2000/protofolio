import React from 'react';
import { ArrowUpRight, Smartphone, Globe, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { AvailabilityBadge } from '../common/Badge';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  featuredLayout = false,
}) => {
  const { t, isRtl } = useLanguage();

  const title = isRtl && project.titleAr ? project.titleAr : project.title;
  const organization = isRtl && project.organizationAr ? project.organizationAr : project.organization;
  const description = isRtl && project.shortDescriptionAr ? project.shortDescriptionAr : project.shortDescription;
  const categoryLabel = isRtl && project.categoryLabelAr ? project.categoryLabelAr : project.categoryLabel;
  const documentedRole = isRtl && project.documentedRoleAr ? project.documentedRoleAr : project.documentedRole;
  const availabilityLabel = isRtl && project.availabilityLabelAr ? project.availabilityLabelAr : project.availabilityLabel;

  // Editorial placeholder schematic when screenshots are pending
  const renderVisualSchematic = () => {
    if (project.id === 'corporate-ibs') {
      return (
        <div className="w-full h-full min-h-[220px] bg-[#121217] dark:bg-[#08080b] text-white p-6 rounded-md flex flex-col justify-between font-mono text-xs overflow-hidden relative border border-white/10 group-hover:border-white/20 transition-colors text-start">
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <span className="text-cohere-paleGreen tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {isRtl ? 'IBS :: بنية معمارية أحادية معيارية' : 'CORE_BANKING_IBS :: MODULAR_MONOLITH'}
            </span>
            <span className="text-cohere-muted"><bdi className="ltr-token font-mono">.NET 8 / React 18</bdi></span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="text-[10px] text-cohere-muted block">{isRtl ? 'الطبقة 01' : 'LAYER 01'}</span>
              <span className="font-semibold text-white">{isRtl ? 'الواجهة' : 'Presentation'}</span>
              <span className="text-[10px] text-white/60 block mt-1"><bdi className="ltr-token font-mono">React 18 · TS</bdi></span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="text-[10px] text-cohere-muted block">{isRtl ? 'الطبقة 02' : 'LAYER 02'}</span>
              <span className="font-semibold text-white">{isRtl ? 'التطبيق' : 'Application'}</span>
              <span className="text-[10px] text-white/60 block mt-1"><bdi className="ltr-token font-mono">Clean Arch</bdi></span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="text-[10px] text-cohere-muted block">{isRtl ? 'الطبقة 03' : 'LAYER 03'}</span>
              <span className="font-semibold text-white">{isRtl ? 'النظام المصرفي' : 'Core Banking'}</span>
              <span className="text-[10px] text-white/60 block mt-1">{isRtl ? 'بوابة مشفرة' : 'Encrypted Gateway'}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-white/60 pt-2 border-t border-white/10">
            <span>{isRtl ? 'الأمن: ' : 'Security: '}<bdi className="ltr-token font-mono">Zero-Trust / RBAC</bdi></span>
            <span className="text-white/80">{isRtl ? 'تزامن الحسابات المؤسسية' : 'Corporate Ledger Sync'}</span>
          </div>
        </div>
      );
    }

    if (project.id === 'smsm-ecosystem') {
      return (
        <div className="w-full h-full min-h-[220px] bg-cohere-softStone/70 p-6 rounded-md flex flex-col justify-between font-mono text-xs border border-cohere-hairline group-hover:border-cohere-primary/40 transition-colors text-start">
          <div className="flex items-center justify-between border-b border-cohere-hairline pb-3">
            <span className="text-cohere-ink font-semibold tracking-wider flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-cohere-actionBlue" />
              {isRtl ? 'منظومة سمسم :: 3 تطبيقات مترابطة' : 'SMSM_ECOSYSTEM :: 3_APP_TOPOLOGY'}
            </span>
            <span className="text-cohere-slate"><bdi className="ltr-token font-mono">Flutter + Laravel</bdi></span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="p-2.5 bg-cohere-canvas border border-cohere-hairline rounded-xs">
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">{isRtl ? 'تطبيق العملاء' : 'CUSTOMER APP'}</span>
              <span className="text-xs text-cohere-ink font-medium">{isRtl ? 'طلب وشراء' : 'Browse & Order'}</span>
              <span className="text-[9px] text-cohere-muted block mt-1"><bdi className="ltr-token">Google Play</bdi></span>
            </div>
            <div className="p-2.5 bg-cohere-canvas border border-cohere-hairline rounded-xs">
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold block">{isRtl ? 'تطبيق التجار' : 'MERCHANT APP'}</span>
              <span className="text-xs text-cohere-ink font-medium">{isRtl ? 'إدارة المخزون' : 'Catalog & Orders'}</span>
              <span className="text-[9px] text-cohere-muted block mt-1"><bdi className="ltr-token">Google Play</bdi></span>
            </div>
            <div className="p-2.5 bg-cohere-canvas border border-cohere-hairline rounded-xs">
              <span className="text-[10px] text-cohere-coral font-semibold block">{isRtl ? 'أسطول التوصيل' : 'DELIVERY FLEET'}</span>
              <span className="text-xs text-cohere-ink font-medium">{isRtl ? 'إسناد فوري' : 'Live Dispatch'}</span>
              <span className="text-[9px] text-cohere-muted block mt-1">{isRtl ? 'أسطول خاص' : 'Private Fleet'}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-cohere-slate pt-2 border-t border-cohere-hairline">
            <span>{isRtl ? 'تتبع لحظي GPS' : 'Real-time GPS Tracking'}</span>
            <span className="text-cohere-ink font-medium">
              {isRtl ? (
                <>واجهات <bdi className="ltr-token font-mono">60fps Flutter</bdi></>
              ) : (
                '60fps Flutter UI'
              )}
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'abu-meska-construction') {
      return (
        <div className="w-full h-full min-h-[220px] bg-[#071829] dark:bg-[#040e1a] text-white p-6 rounded-md flex flex-col justify-between font-mono text-xs border border-white/10 group-hover:border-white/20 transition-colors text-start">
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <span className="text-sky-300 tracking-wider flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              {isRtl ? 'شركة أبو مسكة :: تجربة ثلاثية الأبعاد' : 'ABOMISKA.ORG :: BILINGUAL_3D'}
            </span>
            <span className="text-cohere-muted"><bdi className="ltr-token font-mono">React 19 / Three.js</bdi></span>
          </div>

          <div className="py-4 text-center">
            <div className="inline-block px-4 py-2 bg-white/5 rounded-pill border border-white/15 text-sky-200 text-xs">
              {isRtl ? 'مجسم ثلاثي الأبعاد تفاعلي بتقنية WebGL · ثنائي اللغة' : 'Interactive 3D WebGL Model · Full Arabic/English Flip'}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-cohere-muted pt-2 border-t border-white/10">
            <span>{isRtl ? 'مشاريع البنية التحتية والمقاولات' : 'Heavy Civil Infrastructure'}</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {isRtl ? 'منشور أونلاين' : 'Live Online'}
            </span>
          </div>
        </div>
      );
    }

    // Default container for all other projects
    return (
      <div className="w-full h-full min-h-[160px] bg-cohere-softStone/50 p-5 rounded-md flex flex-col justify-between font-mono text-xs border border-cohere-hairline text-start">
        <div className="flex items-center justify-between border-b border-cohere-hairline/80 pb-2.5">
          <span className="text-cohere-slate font-medium uppercase tracking-wider text-[11px]">
            {categoryLabel}
          </span>
          <span className="text-cohere-muted"><bdi className="ltr-token font-mono">{project.year}</bdi></span>
        </div>

        <div className="my-3">
          <span className="text-xs text-cohere-ink font-semibold block">
            {organization}
          </span>
          <span className="text-[11px] text-cohere-slate block mt-1 line-clamp-2">
            {documentedRole}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 pt-2 border-t border-cohere-hairline/80">
          {(project.technologies.backend || project.technologies.frontend || []).slice(0, 3).map((tItem) => (
            <span key={tItem} className="px-2 py-0.5 bg-cohere-canvas border border-cohere-hairline rounded-xs text-[10px] text-cohere-ink">
              <bdi className="ltr-token font-mono">{tItem}</bdi>
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Tier 1 Featured Card Layout
  if (featuredLayout) {
    return (
      <div className="group relative bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 sm:p-8 hover:border-cohere-primary/80 transition-all duration-200 hover:shadow-md text-center lg:text-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Canvas / Schematic */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {renderVisualSchematic()}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-7 flex flex-col justify-between items-center lg:items-start">
            <div className="w-full flex flex-col items-center lg:items-start">
              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
                <AvailabilityBadge type={project.availability} label={availabilityLabel} />
                <span className="text-xs font-mono uppercase text-cohere-muted">
                  {organization}
                </span>
                <span className="text-cohere-hairline">•</span>
                <span className="text-xs font-mono text-cohere-slate">
                  <bdi className="ltr-token font-mono">{project.year}</bdi>
                </span>
              </div>

              {/* Title */}
              <h3 className={`font-display text-2xl sm:text-3xl font-normal text-cohere-ink tracking-tight mb-3 group-hover:text-cohere-actionBlue transition-colors ${isRtl ? 'card-heading-ar' : ''}`}>
                {title}
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-base text-cohere-slate leading-relaxed mb-4 ${isRtl ? 'body-ar' : ''}`}>
                {description}
              </p>

              {/* Documented Role */}
              <div className={`w-full bg-cohere-softStone/50 p-3.5 rounded-xs mb-4 text-center lg:text-start ${isRtl ? 'lg:border-r-2 border-cohere-primary' : 'lg:border-l-2 border-cohere-primary'}`}>
                <span className={`font-mono text-[11px] uppercase tracking-wider text-cohere-ink font-semibold block ${isRtl ? 'mono-label-ar text-[12px]' : ''}`}>
                  {isRtl ? 'المساهمة والمسؤولية الموثقة:' : 'Documented Contribution:'}
                </span>
                <p className={`text-xs text-cohere-slate mt-0.5 leading-normal ${isRtl ? 'body-ar text-[13px] leading-[1.65]' : ''}`}>
                  {documentedRole}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 mb-6">
                {[
                  ...(project.technologies.backend || []),
                  ...(project.technologies.frontend || []),
                  ...(project.technologies.infrastructure || []),
                ].slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-pill bg-cohere-softStone/80 text-cohere-ink font-mono text-xs border border-cohere-hairline/60"
                  >
                    <bdi className="ltr-token font-mono">{tech}</bdi>
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 border-t border-cohere-hairline">
              <button
                onClick={() => onSelect(project)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-cohere-primary text-cohere-canvas text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-colors active:scale-95 cursor-pointer shadow-xs ${isRtl ? 'btn' : ''}`}
              >
                <span>{t.projects.btnCaseStudy}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </button>

              {project.links.filter(l => l.type !== 'case-study').map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-pill bg-cohere-canvas border border-cohere-hairline text-cohere-ink text-xs font-mono uppercase tracking-wider hover:bg-cohere-softStone transition-colors"
                >
                  <span>{link.type === 'google-play' ? t.projects.btnStore : (isRtl && link.labelAr ? link.labelAr : link.label)}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cohere-slate" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tier 2 / Regular Grid Card Layout
  return (
    <div className="group flex flex-col justify-between bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 hover:border-cohere-primary/80 transition-all duration-200 hover:shadow-xs text-center sm:text-start">
      <div>
        {/* Top Visual Mini Schematic */}
        <div className="mb-5">
          {renderVisualSchematic()}
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
          <AvailabilityBadge type={project.availability} label={availabilityLabel} />
          <span className="text-[11px] font-mono text-cohere-muted">
            {organization}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-display text-xl font-normal text-cohere-ink tracking-tight mb-2 group-hover:text-cohere-actionBlue transition-colors ${isRtl ? 'card-heading-ar text-[22px]' : ''}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-xs sm:text-sm text-cohere-slate leading-relaxed mb-4 line-clamp-3 ${isRtl ? 'body-ar text-[14px] leading-[1.7]' : ''}`}>
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-1 mb-5">
          {[
            ...(project.technologies.backend || []),
            ...(project.technologies.frontend || []),
          ].slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-xs bg-cohere-softStone/70 text-cohere-ink font-mono text-[11px] border border-cohere-hairline/60"
            >
              <bdi className="ltr-token font-mono">{tech}</bdi>
            </span>
          ))}
        </div>
      </div>

      {/* Action footer */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 pt-4 border-t border-cohere-hairline">
        <button
          onClick={() => onSelect(project)}
          className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cohere-ink hover:text-cohere-actionBlue transition-colors font-medium cursor-pointer ${isRtl ? 'mono-label-ar text-[13px]' : ''}`}
        >
          <span>{t.projects.btnDetails}</span>
          <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
        </button>

        {project.links.some(l => l.type === 'google-play' || l.type === 'website') && (
          <a
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-cohere-actionBlue hover:underline flex items-center gap-1"
          >
            <span>{t.projects.btnLive}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
