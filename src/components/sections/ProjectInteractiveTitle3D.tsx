import React, { useState, useRef, useCallback } from 'react';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { GooglePlayLogo } from '../common/GooglePlayLogo';

// High-res App and Platform Assets
import smsmCustomerIcon from '../../assets/project_icons/smsm-customer.png';
import smsmVendorIcon from '../../assets/project_icons/smsm-vendor.png';
import abomiskaIcon from '../../assets/project_icons/abomiska.png';
import weldanIcon from '../../assets/project_icons/weldan.png';
import iqraaIcon from '../../assets/project_icons/iqraa.png';

export interface LinkedAppItem {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  icon: string;
  url: string;
  type: 'google-play' | 'website';
  storeBadge: string;
  storeBadgeAr: string;
}

const PROJECT_LINKED_APPS: Record<string, LinkedAppItem[]> = {
  'smsm-ecosystem': [
    {
      id: 'smsm-customer',
      name: 'Smsm Customer App',
      nameAr: 'تطبيق سمسم للعملاء',
      role: 'Consumer Retail & Live Tracking',
      roleAr: 'طلب وشراء وتتبع حي للشحنات',
      icon: smsmCustomerIcon,
      url: 'https://play.google.com/store/apps/details?id=com.smsm.customers&hl=en',
      type: 'google-play',
      storeBadge: 'Google Play Store',
      storeBadgeAr: 'متجر Google Play',
    },
    {
      id: 'smsm-vendor',
      name: 'Smsm Merchant App',
      nameAr: 'تطبيق سمسم للتجار',
      role: 'Catalog & Order Management',
      roleAr: 'إدارة المخزون ومعالجة الطلبات',
      icon: smsmVendorIcon,
      url: 'https://play.google.com/store/apps/details?id=com.smsm.vendor&hl=en',
      type: 'google-play',
      storeBadge: 'Google Play Store',
      storeBadgeAr: 'متجر Google Play',
    },
  ],
  'abu-meska-construction': [
    {
      id: 'abomiska-web',
      name: 'Abu Meska General Contracting',
      nameAr: 'الموقع التعريفي لشركة أبو مسكة',
      role: 'Live WebGL 3D Corporate Platform',
      roleAr: 'موقع إلكتروني مباشر وتجربة ثلاثية الأبعاد',
      icon: abomiskaIcon,
      url: 'https://abomiska.org/',
      type: 'website',
      storeBadge: 'abomiska.org',
      storeBadgeAr: 'الموقع المباشر abomiska.org',
    },
  ],
  'weldan': [
    {
      id: 'weldan-store',
      name: 'Weldan E-Commerce Platform',
      nameAr: 'منصة ولدان للتجارة الإلكترونية',
      role: 'Internal Mobile Marketplace',
      roleAr: 'سوق إلكتروني ودفع بالمحافظ الرقمية',
      icon: weldanIcon,
      url: 'https://play.google.com/store/apps/details?id=com.weldan.store.weldan&hl=en',
      type: 'google-play',
      storeBadge: 'Google Play Store',
      storeBadgeAr: 'متجر Google Play',
    },
  ],
  'weldan-ecommerce': [
    {
      id: 'weldan-store',
      name: 'Weldan E-Commerce Platform',
      nameAr: 'منصة ولدان للتجارة الإلكترونية',
      role: 'Internal Mobile Marketplace',
      roleAr: 'سوق إلكتروني ودفع بالمحافظ الرقمية',
      icon: weldanIcon,
      url: 'https://play.google.com/store/apps/details?id=com.weldan.store.weldan&hl=en',
      type: 'google-play',
      storeBadge: 'Google Play Store',
      storeBadgeAr: 'متجر Google Play',
    },
  ],
  'iqraa': [
    {
      id: 'iqra-school',
      name: 'Iqraa School Management',
      nameAr: 'اقرأ — تطبيق الإدارة المدرسية',
      role: 'Educational EdTech & Student Follow-up',
      roleAr: 'إدارة الجداول والتحصيل الأكاديمي',
      icon: iqraaIcon,
      url: 'https://play.google.com/store/apps/details?id=com.togits.iqraa.system.iq&hl=en',
      type: 'google-play',
      storeBadge: 'Google Play Store',
      storeBadgeAr: 'متجر Google Play',
    },
  ],
  'iqra-school-app': [
    {
      id: 'iqra-school',
      name: 'Iqraa School Management',
      nameAr: 'اقرأ — تطبيق الإدارة المدرسية',
      role: 'Educational EdTech & Student Follow-up',
      roleAr: 'إدارة الجداول والتحصيل الأكاديمي',
      icon: iqraaIcon,
      url: 'https://play.google.com/store/apps/details?id=com.togits.iqraa.system.iq&hl=en',
      type: 'google-play',
      storeBadge: 'Google Play Store',
      storeBadgeAr: 'متجر Google Play',
    },
  ],
};

interface ProjectInteractiveTitle3DProps {
  project: ProjectItem;
  title: string;
  isRtl: boolean;
  featuredLayout?: boolean;
  onSelect?: () => void;
}

export const ProjectInteractiveTitle3D: React.FC<ProjectInteractiveTitle3DProps> = ({
  project,
  title,
  isRtl,
  featuredLayout = false,
  onSelect,
}) => {
  const linkedApps = PROJECT_LINKED_APPS[project.id];
  const hasLinks = Boolean(linkedApps && linkedApps.length > 0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const leaveTimeoutRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (bounded to ±7 degrees)
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 7;

    const glareX = Math.round((x / rect.width) * 100);
    const glareY = Math.round((y / rect.height) * 100);

    setTiltStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.08s ease-out',
    });

    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 65%)`,
      opacity: 1,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (leaveTimeoutRef.current) {
      window.clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    leaveTimeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
      setTiltStyle({
        transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      });
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 0.4s ease-out',
      });
    }, 180);
  }, []);

  // If this project does not have external store/website links, render normal accessible title
  if (!hasLinks || !linkedApps) {
    return (
      <h3
        onClick={onSelect}
        className={`font-display text-2xl sm:text-3xl font-normal text-cohere-ink tracking-tight mb-3 group-hover:text-cohere-actionBlue transition-colors cursor-pointer ${
          isRtl ? 'card-heading-ar' : ''
        }`}
      >
        {title}
      </h3>
    );
  }

  const primaryApp = linkedApps[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group/title3d inline-block w-full max-w-full my-1 z-20"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Interactive Title Surface with Physics Tilt */}
      <div
        style={tiltStyle}
        onClick={onSelect}
        className={`relative inline-flex flex-wrap items-center gap-2.5 px-3 py-1.5 -mx-3 -my-1.5 rounded-xl transition-all cursor-pointer preserve-3d select-none ${
          isHovered
            ? 'bg-cohere-softStone/60 dark:bg-white/5 shadow-lg border border-cohere-primary/20 dark:border-white/15'
            : 'border border-transparent'
        }`}
      >
        {/* Specular glare overlay */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
          style={glareStyle}
        />

        {/* The Title Heading */}
        <h3
          className={`font-display font-normal text-cohere-ink tracking-tight transition-colors duration-200 ${
            featuredLayout ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          } ${isHovered ? 'text-cohere-actionBlue' : 'group-hover/title3d:text-cohere-actionBlue'} ${
            isRtl ? 'card-heading-ar' : ''
          }`}
          style={{ transform: 'translateZ(10px)' }}
        >
          {title}
        </h3>

        {/* Floating 3D Mini App Pill Indicator */}
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-[11px] font-mono border shadow-xs transition-all duration-300 ${
            isHovered
              ? 'scale-105 bg-cohere-primary text-cohere-canvas border-cohere-primary shadow-md'
              : 'bg-cohere-canvas/90 text-cohere-slate border-cohere-hairline hover:border-cohere-primary/40'
          }`}
          style={{ transform: 'translateZ(16px)' }}
        >
          {/* Miniature App Icon Squircle */}
          <div className="w-4 h-4 rounded-xs overflow-hidden shrink-0 border border-black/10 dark:border-white/10 shadow-2xs bg-white">
            <img
              src={primaryApp.icon}
              alt={primaryApp.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Store / Platform Glyph */}
          {primaryApp.type === 'google-play' ? (
            <GooglePlayLogo className="w-3.5 h-3.5 shrink-0" variant="color" />
          ) : (
            <Globe className="w-3.5 h-3.5 text-sky-500 shrink-0" />
          )}

          {/* Pill text */}
          <span className="font-medium hidden sm:inline-block">
            {isRtl ? primaryApp.storeBadgeAr : primaryApp.storeBadge}
          </span>

          {/* Subtle live pulse beacon */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
      </div>

      {/* Floating 3D Holographic App Popover Preview */}
      <div
        className={`absolute top-full mt-2.5 z-50 w-full sm:w-[380px] max-w-[95vw] transition-all duration-300 pointer-events-auto preserve-3d ${
          isRtl ? 'right-0 text-start' : 'left-0 text-start'
        } ${
          isHovered
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
        style={{
          transform: isHovered
            ? 'perspective(1000px) translateZ(28px) scale(1)'
            : 'perspective(1000px) translateZ(0px) scale(0.96)',
        }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white/95 dark:bg-[#0f0f14]/95 backdrop-blur-xl border border-cohere-primary/25 dark:border-white/20 shadow-2xl p-4 transition-colors">
          {/* Ambient decorative glowing backdrop aura */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cohere-actionBlue/15 dark:bg-cohere-actionBlue/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Popover Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-cohere-hairline/70 dark:border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cohere-actionBlue animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-cohere-slate dark:text-gray-300 font-semibold">
                {isRtl ? 'التطبيقات والمنصات المباشرة' : 'Production Apps & Links'}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {isRtl ? 'موثق ورسمي' : 'Verified'}
            </span>
          </div>

          {/* Connected App Item(s) */}
          <div className="space-y-3">
            {linkedApps.map((app) => (
              <div
                key={app.id}
                className="group/item flex items-center justify-between gap-3 p-2.5 rounded-xl bg-cohere-softStone/50 dark:bg-white/5 border border-cohere-hairline/60 dark:border-white/10 hover:border-cohere-primary/50 dark:hover:border-white/30 transition-all hover:bg-cohere-softStone/90 dark:hover:bg-white/10"
              >
                {/* App Squircle + Title Info */}
                <div className="flex items-center gap-3 min-w-0">
                  {/* High-Res 3D Elevated Squircle Icon */}
                  <div
                    className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-black/10 dark:border-white/20 shadow-md bg-white p-0.5 transition-transform duration-200 group-hover/item:scale-105"
                    style={{ transform: 'translateZ(14px)' }}
                  >
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-cover rounded-[10px]"
                      loading="lazy"
                    />
                    {/* Gloss specular top reflection */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-[10px]" />
                  </div>

                  {/* App Text Metadata */}
                  <div className="min-w-0 flex-1">
                    <span className="text-xs sm:text-sm font-semibold text-cohere-ink dark:text-white block truncate group-hover/item:text-cohere-actionBlue transition-colors">
                      {isRtl ? app.nameAr : app.name}
                    </span>
                    <span className="text-[11px] text-cohere-slate dark:text-gray-400 block truncate">
                      {isRtl ? app.roleAr : app.role}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {app.type === 'google-play' ? (
                        <>
                          <GooglePlayLogo className="w-3 h-3" variant="color" />
                          <span className="text-[10px] font-mono text-cohere-muted dark:text-gray-400">
                            Google Play
                          </span>
                        </>
                      ) : (
                        <>
                          <Globe className="w-3 h-3 text-sky-500" />
                          <span className="text-[10px] font-mono text-cohere-muted dark:text-gray-400">
                            abomiska.org
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Direct Action Quick Launch Button */}
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-cohere-primary text-cohere-canvas dark:bg-white dark:text-black text-xs font-mono font-medium hover:opacity-90 active:scale-95 transition-all shrink-0 shadow-xs cursor-pointer"
                  title={isRtl ? `فتح ${app.nameAr}` : `Open ${app.name}`}
                >
                  <span className="hidden sm:inline">
                    {app.type === 'google-play'
                      ? isRtl
                        ? 'المتجر'
                        : 'Store'
                      : isRtl
                      ? 'زيارة'
                      : 'Visit'}
                  </span>
                  <ExternalLink className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            ))}
          </div>

          {/* Micro Footer Notice */}
          <div className="mt-3 pt-2.5 border-t border-cohere-hairline/60 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-cohere-muted dark:text-gray-400">
            <span>
              {isRtl ? 'انقر على العنوان لعرض المعمارية' : 'Click title for case study & architecture'}
            </span>
            <span className="text-cohere-actionBlue">3D Hover</span>
          </div>
        </div>
      </div>
    </div>
  );
};
