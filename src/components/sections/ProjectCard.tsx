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

  // Editorial placeholder schematic when screenshots are pending
  const renderVisualSchematic = () => {
    if (project.id === 'corporate-ibs') {
      return (
        <div className="w-full h-full min-h-[220px] bg-cohere-primary text-white p-6 rounded-md flex flex-col justify-between font-mono text-xs overflow-hidden relative border border-white/10 group-hover:border-white/20 transition-colors text-start">
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <span className="text-cohere-paleGreen tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {isRtl ? 'IBS :: بنية معمارية أحادية معيارية' : 'CORE_BANKING_IBS :: MODULAR_MONOLITH'}
            </span>
            <span className="text-cohere-muted">.NET 8 / React 18</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="text-[10px] text-cohere-muted block">{isRtl ? 'الطبقة 01' : 'LAYER 01'}</span>
              <span className="font-semibold text-white">{isRtl ? 'الواجهة' : 'Presentation'}</span>
              <span className="text-[10px] text-cohere-slate block mt-1">React 18 · TS</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="text-[10px] text-cohere-muted block">{isRtl ? 'الطبقة 02' : 'LAYER 02'}</span>
              <span className="font-semibold text-white">{isRtl ? 'التطبيق' : 'Application'}</span>
              <span className="text-[10px] text-cohere-slate block mt-1">Clean Arch</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="text-[10px] text-cohere-muted block">{isRtl ? 'الطبقة 03' : 'LAYER 03'}</span>
              <span className="font-semibold text-white">{isRtl ? 'النظام المصرفي' : 'Core Banking'}</span>
              <span className="text-[10px] text-cohere-slate block mt-1">Encrypted Gateway</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-cohere-slate pt-2 border-t border-white/10">
            <span>{isRtl ? 'الأمن: Zero-Trust / RBAC' : 'Security: Zero-Trust / RBAC'}</span>
            <span className="text-white/80">{isRtl ? 'تزامن الحسابات المؤسسية' : 'Corporate Ledger Sync'}</span>
          </div>
        </div>
      );
    }

    if (project.id === 'smsm-ecosystem') {
      return (
        <div className="w-full h-full min-h-[220px] bg-cohere-softStone/70 p-6 rounded-md flex flex-col justify-between font-mono text-xs border border-cohere-hairline group-hover:border-cohere-primary/40 transition-colors text-start">
          <div className="flex items-center justify-between border-b border-cohere-hairline pb-3">
            <span className="text-cohere-primary font-semibold tracking-wider flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-cohere-actionBlue" />
              {isRtl ? 'منظومة سمسم :: 3 تطبيقات مترابطة' : 'SMSM_ECOSYSTEM :: 3_APP_TOPOLOGY'}
            </span>
            <span className="text-cohere-slate">Flutter + Laravel</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="p-2.5 bg-white border border-cohere-hairline rounded-xs">
              <span className="text-[10px] text-emerald-600 font-semibold block">{isRtl ? 'تطبيق العملاء' : 'CUSTOMER APP'}</span>
              <span className="text-xs text-cohere-ink font-medium">{isRtl ? 'طلب وشراء' : 'Browse & Order'}</span>
              <span className="text-[9px] text-cohere-muted block mt-1">Google Play</span>
            </div>
            <div className="p-2.5 bg-white border border-cohere-hairline rounded-xs">
              <span className="text-[10px] text-blue-600 font-semibold block">{isRtl ? 'تطبيق التجار' : 'MERCHANT APP'}</span>
              <span className="text-xs text-cohere-ink font-medium">{isRtl ? 'إدارة المخزون' : 'Catalog & Orders'}</span>
              <span className="text-[9px] text-cohere-muted block mt-1">Google Play</span>
            </div>
            <div className="p-2.5 bg-white border border-cohere-hairline rounded-xs">
              <span className="text-[10px] text-cohere-coral font-semibold block">{isRtl ? 'أسطول التوصيل' : 'DELIVERY FLEET'}</span>
              <span className="text-xs text-cohere-ink font-medium">{isRtl ? 'إسناد فوري' : 'Live Dispatch'}</span>
              <span className="text-[9px] text-cohere-muted block mt-1">{isRtl ? 'أسطول خاص' : 'Private Fleet'}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-cohere-slate pt-2 border-t border-cohere-hairline">
            <span>{isRtl ? 'تتبع لحظي GPS' : 'Real-time GPS Tracking'}</span>
            <span className="text-cohere-primary font-medium">{isRtl ? 'واجهات 60fps' : '60fps Flutter UI'}</span>
          </div>
        </div>
      );
    }

    if (project.id === 'abu-meska-construction') {
      return (
        <div className="w-full h-full min-h-[220px] bg-[#071829] text-white p-6 rounded-md flex flex-col justify-between font-mono text-xs border border-white/10 group-hover:border-white/20 transition-colors text-start">
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <span className="text-sky-300 tracking-wider flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              ABOMISKA.ORG :: BILINGUAL_3D
            </span>
            <span className="text-cohere-muted">React 19 / Three.js</span>
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

    // Default container
    return (
      <div className="w-full h-full min-h-[160px] bg-cohere-softStone/50 p-5 rounded-md flex flex-col justify-between font-mono text-xs border border-cohere-hairline text-start">
        <div className="flex items-center justify-between border-b border-cohere-hairline/80 pb-2.5">
          <span className="text-cohere-slate font-medium uppercase tracking-wider text-[11px]">
            {project.categoryLabel}
          </span>
          <span className="text-cohere-muted">{project.year}</span>
        </div>

        <div className="my-3">
          <span className="text-xs text-cohere-ink font-semibold block">
            {organization}
          </span>
          <span className="text-[11px] text-cohere-slate block mt-1 line-clamp-2">
            {project.documentedRole}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 pt-2 border-t border-cohere-hairline/80">
          {(project.technologies.backend || project.technologies.frontend || []).slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 bg-white border border-cohere-hairline rounded-xs text-[10px] text-cohere-ink">
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Tier 1 Featured Card Layout
  if (featuredLayout) {
    return (
      <div className="group relative bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 sm:p-8 hover:border-cohere-primary transition-all duration-200 hover:shadow-md text-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Canvas / Schematic */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {renderVisualSchematic()}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <AvailabilityBadge type={project.availability} label={project.availabilityLabel} />
                <span className="text-xs font-mono uppercase text-cohere-muted">
                  {organization}
                </span>
                <span className="text-cohere-hairline">•</span>
                <span className="text-xs font-mono text-cohere-slate">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-cohere-primary tracking-tight mb-3 group-hover:text-cohere-actionBlue transition-colors">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-cohere-slate leading-relaxed mb-4">
                {description}
              </p>

              {/* Documented Role */}
              <div className={`bg-cohere-softStone/50 p-3 rounded-xs mb-4 ${isRtl ? 'border-r-2 border-cohere-primary' : 'border-l-2 border-cohere-primary'}`}>
                <span className="font-mono text-[11px] uppercase tracking-wider text-cohere-ink font-semibold block">
                  {isRtl ? 'المساهمة والمسؤولية الموثقة:' : 'Documented Contribution:'}
                </span>
                <p className="text-xs text-cohere-slate mt-0.5 leading-normal">
                  {project.documentedRole}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {[
                  ...(project.technologies.backend || []),
                  ...(project.technologies.frontend || []),
                  ...(project.technologies.infrastructure || []),
                ].slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-pill bg-cohere-softStone/80 text-cohere-ink font-mono text-xs border border-cohere-hairline/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-cohere-hairline">
              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-cohere-primary text-white text-xs font-mono uppercase tracking-wider hover:bg-cohere-ink transition-colors active:scale-95 cursor-pointer"
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
                  <span>{link.type === 'google-play' ? t.projects.btnStore : link.label}</span>
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
    <div className="group flex flex-col justify-between bg-cohere-canvas border border-cohere-hairline rounded-lg p-6 hover:border-cohere-primary transition-all duration-200 hover:shadow-xs text-start">
      <div>
        {/* Top Visual Mini Schematic */}
        <div className="mb-5">
          {renderVisualSchematic()}
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <AvailabilityBadge type={project.availability} label={project.availabilityLabel} />
          <span className="text-[11px] font-mono text-cohere-muted">
            {organization}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-normal text-cohere-primary tracking-tight mb-2 group-hover:text-cohere-actionBlue transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-cohere-slate leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-5">
          {[
            ...(project.technologies.backend || []),
            ...(project.technologies.frontend || []),
          ].slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-xs bg-cohere-softStone/70 text-cohere-ink font-mono text-[11px] border border-cohere-hairline/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action footer */}
      <div className="flex items-center justify-between pt-4 border-t border-cohere-hairline">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cohere-primary hover:text-cohere-actionBlue transition-colors font-medium cursor-pointer"
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
