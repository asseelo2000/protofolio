import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { KeyMetricsStrip } from './components/sections/KeyMetricsStrip';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { EnterpriseAISection } from './components/sections/EnterpriseAISection';
import { TechnicalSkillsSection } from './components/sections/TechnicalSkillsSection';
import { ExperienceEducationSection } from './components/sections/ExperienceEducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectDetailModal } from './components/sections/ProjectDetailModal';
import { ProjectItem } from './types/portfolio';
import { PROJECTS_DATA } from './data/projectsData';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const PortfolioContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Check URL hash for direct deep-linking to case studies (e.g. #corporate-ibs)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = PROJECTS_DATA.find((p) => p.slug === hash || p.id === hash);
        if (found) {
          setSelectedProject(found);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#${project.slug}`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (window.location.hash && !['#overview', '#projects', '#enterprise-ai', '#expertise', '#background', '#contact'].includes(window.location.hash)) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-cohere-canvas text-cohere-ink flex flex-col selection:bg-cohere-paleGreen selection:text-cohere-deepGreen transition-colors duration-200">
      {/* Top Fixed Header with Theme & Language Switchers */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <KeyMetricsStrip />
        <SelectedWorkSection onSelectProject={handleSelectProject} />
        <EnterpriseAISection />
        <TechnicalSkillsSection />
        <ExperienceEducationSection />
        <ContactSection />
      </main>

      {/* Enterprise Editorial Footer */}
      <Footer />

      {/* Deep Dive Case Study Overlay */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
