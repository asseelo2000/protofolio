import React, { useState } from 'react';
import { ProjectItem, ProjectCategory } from '../../types/portfolio';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';
import { AvailabilityBadge } from '../common/Badge';
import { useLanguage } from '../../context/LanguageContext';

interface SelectedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const { t, isRtl } = useLanguage();

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: t.projects.filterAll, count: PROJECTS_DATA.length },
    {
      id: 'enterprise-banking',
      label: t.projects.filterBanking,
      count: PROJECTS_DATA.filter((p) => p.category === 'enterprise-banking').length,
    },
    {
      id: 'mobile-ecosystems',
      label: t.projects.filterMobile,
      count: PROJECTS_DATA.filter((p) => p.category === 'mobile-ecosystems').length,
    },
    {
      id: 'web-platforms',
      label: t.projects.filterWeb,
      count: PROJECTS_DATA.filter((p) => p.category === 'web-platforms').length,
    },
    {
      id: 'ai-data',
      label: t.projects.filterAi,
      count: PROJECTS_DATA.filter((p) => p.category === 'ai-data').length,
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const tier1Projects = filteredProjects.filter((p) => p.tier === 1);
  const tier2Projects = filteredProjects.filter((p) => p.tier === 2);
  const tier3Projects = filteredProjects.filter((p) => p.tier === 3);

  return (
    <section id="projects" className="py-24 bg-cohere-canvas border-b border-cohere-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wideCode text-cohere-muted">
                {t.projects.sectionTag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cohere-coral"></span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-cohere-ink tracking-tight">
              {t.projects.sectionTitle}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-cohere-slate max-w-md leading-relaxed">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-cohere-hairline">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-pill text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer flex items-center gap-2 ${
                activeCategory === tab.id
                  ? 'bg-cohere-primary text-cohere-canvas shadow-xs font-semibold'
                  : 'bg-cohere-softStone/60 text-cohere-slate hover:bg-cohere-softStone hover:text-cohere-ink'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === tab.id
                    ? 'bg-cohere-canvas/20 text-cohere-canvas'
                    : 'bg-cohere-hairline text-cohere-ink'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tier 1: Featured Flagship Projects */}
        {tier1Projects.length > 0 && (
          <div className="space-y-8 mb-14">
            {tier1Projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featuredLayout={true}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        )}

        {/* Tier 2: Asymmetric Grid Projects */}
        {tier2Projects.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-cohere-muted">
                {t.projects.tier2Heading}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier2Projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featuredLayout={false}
                  onSelect={onSelectProject}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tier 3: Specialized Institutional Systems Table */}
        {tier3Projects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-cohere-muted">
                {t.projects.tier3Heading}
              </span>
            </div>

            <div className="border border-cohere-hairline rounded-md overflow-hidden bg-cohere-softStone/30">
              <div className="divide-y divide-cohere-hairline">
                {tier3Projects.map((p) => {
                  const title = isRtl && p.titleAr ? p.titleAr : p.title;
                  const org = isRtl && p.organizationAr ? p.organizationAr : p.organization;
                  const desc = isRtl && p.shortDescriptionAr ? p.shortDescriptionAr : p.shortDescription;

                  return (
                    <div
                      key={p.id}
                      onClick={() => onSelectProject(p)}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-cohere-softStone/60 transition-colors cursor-pointer group text-start"
                    >
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-1.5">
                          <AvailabilityBadge type={p.availability} label={p.availabilityLabel} />
                          <span className="text-xs font-mono text-cohere-muted">
                            {org} · {p.year}
                          </span>
                        </div>
                        <h4 className="font-display text-lg font-medium text-cohere-ink group-hover:text-cohere-actionBlue transition-colors">
                          {title}
                        </h4>
                        <p className="text-xs text-cohere-slate mt-1 line-clamp-2">
                          {desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="hidden md:flex flex-wrap gap-1">
                          {(p.technologies.backend || []).map((tech) => (
                            <span key={tech} className="px-2 py-0.5 rounded-xs bg-cohere-canvas border border-cohere-hairline text-[10px] font-mono text-cohere-ink">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-cohere-canvas border border-cohere-hairline text-cohere-ink text-xs font-mono uppercase tracking-wider group-hover:bg-cohere-primary group-hover:text-cohere-canvas transition-all shadow-2xs">
                          <span>{t.projects.btnDetails}</span>
                          <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
