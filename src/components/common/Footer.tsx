import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../../data/resumeData';
import { useLanguage } from '../../context/LanguageContext';
import mePhoto from '../../assets/me.jpg';

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cohere-canvas border-t border-cohere-hairline py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-start">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cohere-hairline">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-3">
            <div className="relative w-8 h-8 rounded-md overflow-hidden border border-cohere-hairline/80 shadow-xs shrink-0 bg-cohere-softStone">
              <img
                src={mePhoto}
                alt={isRtl ? CANDIDATE_PROFILE.nameAr : CANDIDATE_PROFILE.name}
                className="w-full h-full object-cover"
                width={32}
                height={32}
                loading="lazy"
              />
            </div>
            <div>
              <span className={`font-display font-bold text-sm tracking-tight text-cohere-ink uppercase ${isRtl ? 'mono-label-ar text-[14px]' : ''}`}>
                {isRtl ? CANDIDATE_PROFILE.nameAr : CANDIDATE_PROFILE.name}
              </span>
              <span className={`text-[11px] font-mono text-cohere-muted block ${isRtl ? 'micro-ar text-[12px]' : ''}`}>
                {isRtl ? CANDIDATE_PROFILE.titleAr : CANDIDATE_PROFILE.title}
              </span>
            </div>
          </div>

          {/* Socials & Channels */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={CANDIDATE_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xs text-cohere-slate hover:text-cohere-primary hover:bg-cohere-softStone transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={CANDIDATE_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xs text-cohere-slate hover:text-cohere-primary hover:bg-cohere-softStone transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${CANDIDATE_PROFILE.email}`}
              className="p-2 rounded-xs text-cohere-slate hover:text-cohere-primary hover:bg-cohere-softStone transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xs text-cohere-slate hover:text-cohere-primary hover:bg-cohere-softStone transition-colors cursor-pointer"
              aria-label="Scroll to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className={`flex flex-col sm:flex-row items-center justify-between text-center gap-3 pt-6 text-[11px] font-mono text-cohere-muted ${isRtl ? 'micro-ar text-[12px]' : ''}`}>
          <span>{t.footer.rights}</span>
          {t.footer.designRef && <span>{t.footer.designRef}</span>}
        </div>
      </div>
    </footer>
  );
};
