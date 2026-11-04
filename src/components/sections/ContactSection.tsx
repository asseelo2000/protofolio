import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../../data/resumeData';
import { useLanguage } from '../../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t, isRtl } = useLanguage();

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-cohere-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`font-mono text-xs uppercase tracking-wideCode text-cohere-muted ${isRtl ? 'mono-label-ar text-[13px]' : ''}`}>
                {isRtl ? (
                  <>
                    <bdi className="ltr-token">05 /</bdi> {t.contact.sectionTag.replace(/^05\s*\/\s*/, '')}
                  </>
                ) : (
                  t.contact.sectionTag
                )}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cohere-primary"></span>
            </div>
            <h2 className={`font-display text-3xl sm:text-5xl font-normal text-cohere-ink tracking-tight mb-6 ${isRtl ? 'section-display-ar' : ''}`}>
              {t.contact.sectionTitle}
            </h2>
            <p className={`text-base text-cohere-slate leading-relaxed mb-8 max-w-lg ${isRtl ? 'body-ar' : ''}`}>
              {t.contact.sectionSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${CANDIDATE_PROFILE.email}?subject=Engineering%20Inquiry%20via%20Portfolio`}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-pill bg-cohere-primary text-cohere-canvas text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-opacity shadow-xs ${isRtl ? 'btn' : ''}`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t.contact.btnEmail}</span>
              </a>

              <a
                href={CANDIDATE_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-pill bg-cohere-softStone border border-cohere-hairline text-cohere-ink text-xs font-mono uppercase tracking-wider hover:bg-cohere-hairline transition-colors ${isRtl ? 'btn' : ''}`}
              >
                <Linkedin className="w-3.5 h-3.5 text-cohere-actionBlue" />
                <span>{t.contact.btnLinkedin}</span>
                <ArrowUpRight className={`w-3 h-3 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Verified Channels Card */}
          <div className="lg:col-span-6 bg-cohere-softStone/40 border border-cohere-hairline rounded-lg p-6 sm:p-8">
            <h3 className={`font-mono text-xs uppercase tracking-wider text-cohere-muted font-bold mb-6 ${isRtl ? 'mono-label-ar text-[13px]' : ''}`}>
              {t.contact.channelsTitle}
            </h3>

            <div className="space-y-4">
              {/* Email item */}
              <div className="p-4 bg-cohere-canvas border border-cohere-hairline rounded-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xs bg-cohere-softStone text-cohere-ink shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate text-start">
                    <span className={`text-[10px] font-mono text-cohere-muted uppercase block ${isRtl ? 'mono-label-ar text-[11px]' : ''}`}>
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${CANDIDATE_PROFILE.email}`}
                      className="text-xs sm:text-sm font-mono text-cohere-ink hover:text-cohere-actionBlue transition-colors truncate block"
                      dir="ltr"
                    >
                      <bdi className="ltr-token font-mono">{CANDIDATE_PROFILE.email}</bdi>
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(CANDIDATE_PROFILE.email, 'email')}
                  className="p-2 rounded-sm text-cohere-slate hover:text-cohere-ink hover:bg-cohere-softStone transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 bg-cohere-canvas border border-cohere-hairline rounded-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xs bg-cohere-softStone text-cohere-ink shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <span className={`text-[10px] font-mono text-cohere-muted uppercase block ${isRtl ? 'mono-label-ar text-[11px]' : ''}`}>
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={`tel:${CANDIDATE_PROFILE.phone}`}
                      className="text-xs sm:text-sm font-mono text-cohere-ink hover:text-cohere-actionBlue transition-colors"
                      dir="ltr"
                    >
                      <bdi className="ltr-token font-mono">{CANDIDATE_PROFILE.phone}</bdi>
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(CANDIDATE_PROFILE.phone, 'phone')}
                  className="p-2 rounded-sm text-cohere-slate hover:text-cohere-ink hover:bg-cohere-softStone transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number to clipboard"
                  aria-label="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 bg-cohere-canvas border border-cohere-hairline rounded-md flex items-center gap-3">
                <div className="p-2 rounded-xs bg-cohere-softStone text-cohere-ink shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-start">
                  <span className={`text-[10px] font-mono text-cohere-muted uppercase block ${isRtl ? 'mono-label-ar text-[11px]' : ''}`}>
                    {t.contact.locationLabel}
                  </span>
                  <span className={`text-xs sm:text-sm font-mono text-cohere-ink ${isRtl ? 'body-ar text-[13px]' : ''}`}>
                    {t.contact.locationValue}
                  </span>
                </div>
              </div>

              {/* GitHub item */}
              <a
                href={CANDIDATE_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-cohere-canvas border border-cohere-hairline rounded-md flex items-center justify-between hover:border-cohere-primary/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xs bg-cohere-softStone text-cohere-ink shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="text-start">
                    <span className={`text-[10px] font-mono text-cohere-muted uppercase block ${isRtl ? 'mono-label-ar text-[11px]' : ''}`}>
                      {t.contact.githubLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-cohere-ink group-hover:text-cohere-actionBlue transition-colors" dir="ltr">
                      <bdi className="ltr-token font-mono">github.com/{CANDIDATE_PROFILE.githubUser}</bdi>
                    </span>
                  </div>
                </div>
                <ArrowUpRight className={`w-4 h-4 text-cohere-muted group-hover:text-cohere-primary transition-colors ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
