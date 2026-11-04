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
  labelAr?: string;
  url: string;
  type: 'google-play' | 'website' | 'case-study';
  badgeText?: string;
  badgeTextAr?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ScreenshotItem {
  url: string;
  caption: string;
  captionAr?: string;
  isPrimary?: boolean;
}

export interface SubApplicationItem {
  name: string;
  role: string;
  status: string;
  link?: string;
  icon?: string;
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
  categoryLabelAr?: string;
  tier: 1 | 2 | 3;
  featured: boolean;
  year: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  fullOverview: string;
  fullOverviewAr?: string;
  businessContext: string;
  businessContextAr?: string;
  engineeringSolution: string;
  engineeringSolutionAr?: string;
  documentedRole: string;
  documentedRoleAr?: string;
  keyContributions: string[];
  keyContributionsAr?: string[];
  keyFeatures: string[];
  keyFeaturesAr?: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
    ai?: string[];
  };
  availability: AvailabilityType;
  availabilityLabel: string;
  availabilityLabelAr?: string;
  links: ProjectLink[];
  screenshots: ScreenshotItem[];
  metrics?: ProjectMetric[];
  metricsAr?: ProjectMetric[];
  subApplications?: SubApplicationItem[];
  subApplicationsAr?: SubApplicationItem[];
  architectureHighlights?: string[];
  architectureHighlightsAr?: string[];
}

export interface SkillItem {
  name: string;
  nameAr?: string;
  level?: string;
  tags?: string[];
  tagsAr?: string[];
}

export interface SkillGroup {
  category: string;
  categoryAr?: string;
  description: string;
  descriptionAr?: string;
  skills: SkillItem[];
}

export interface SubRoleItem {
  title: string;
  titleAr?: string;
  responsibilities: string[];
  responsibilitiesAr?: string[];
}

export interface ExperienceItem {
  period: string;
  periodAr?: string;
  role: string;
  roleAr?: string;
  company: string;
  companyAr?: string;
  location: string;
  locationAr?: string;
  subRoles?: SubRoleItem[];
}

export interface EducationItem {
  period: string;
  periodAr?: string;
  degree: string;
  degreeAr?: string;
  institution: string;
  institutionAr?: string;
  location: string;
  locationAr?: string;
  honors: string;
  honorsAr?: string;
  gpa: string;
  highlights: string[];
  highlightsAr?: string[];
}

export interface CertificationItem {
  title: string;
  titleAr?: string;
  issuer: string;
  issuerAr?: string;
  date: string;
  dateAr?: string;
  details: string;
  detailsAr?: string;
  grade?: string;
  gradeAr?: string;
}

export interface EnterpriseAiItem {
  title: string;
  titleAr?: string;
  organization: string;
  organizationAr?: string;
  description: string;
  descriptionAr?: string;
  capabilities: string[];
  capabilitiesAr?: string[];
  tags: string[];
  tagsAr?: string[];
}
