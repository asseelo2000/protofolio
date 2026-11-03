export type ProjectCategory = 
  | 'all'
  | 'enterprise-banking'
  | 'mobile-ecosystems'
  | 'web-platforms'
  | 'ai-data';

export type AvailabilityType = 
  | 'public-store'
  | 'public-web'
  | 'enterprise-private'
  | 'internal-system';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'google-play' | 'website' | 'case-study';
  badgeText?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ScreenshotItem {
  url: string;
  caption: string;
  isPrimary?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  titleAr?: string;
  organization: string;
  organizationAr?: string;
  category: ProjectCategory;
  categoryLabel: string;
  tier: 1 | 2 | 3;
  featured: boolean;
  year: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  fullOverview: string;
  businessContext: string;
  engineeringSolution: string;
  documentedRole: string;
  keyContributions: string[];
  keyFeatures: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
    ai?: string[];
  };
  availability: AvailabilityType;
  availabilityLabel: string;
  links: ProjectLink[];
  screenshots: ScreenshotItem[];
  metrics?: ProjectMetric[];
  subApplications?: {
    name: string;
    role: string;
    status: string;
    link?: string;
    icon?: string;
  }[];
  architectureHighlights?: string[];
}

export interface SkillGroup {
  category: string;
  categoryAr?: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  roleAr?: string;
  company: string;
  companyAr?: string;
  location: string;
  subRoles?: {
    title: string;
    responsibilities: string[];
  }[];
}

export interface EducationItem {
  period: string;
  degree: string;
  degreeAr?: string;
  institution: string;
  institutionAr?: string;
  location: string;
  honors: string;
  gpa: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  details: string;
  grade?: string;
}

