import { ExperienceItem, EducationItem, CertificationItem, SkillGroup } from '../types/portfolio';

export const CANDIDATE_PROFILE = {
  name: 'Aseel Alazazi',
  nameAr: 'أصيل العزعزي',
  formalName: 'Aseel Abdulbaqi Mohammed Taresh',
  title: 'Information Technology Specialist in Systems Development & AI',
  titleAr: 'تقني معلومات متخصص في تطوير الأنظمة والذكاء الاصطناعي',
  headline: 'Building resilient enterprise banking platforms, high-concurrency mobile ecosystems, and applied AI architectures.',
  summary: 'Systems and applications developer specialized in modern software architectures, Artificial Intelligence, and enterprise infrastructure. Experienced in analyzing complex technical requirements and transforming them into scalable, secure products across banking, e-commerce logistics, and corporate platforms.',
  location: "Sana'a, Yemen",
  locationAr: 'صنعاء، اليمن',
  email: 'asseeloelazazi2000@gmail.com',
  phone: '+967 773369332',
  phoneDisplay: '773369332',
  github: 'https://github.com/asseelo2000',
  githubUser: 'asseelo2000',
  linkedin: 'https://www.linkedin.com/in/aseel-alazazi',
  linkedinUser: 'aseel-alazazi',
  stats: [
    { value: '11+', label: 'Delivered Systems & Products', subtext: 'Web, Mobile & Enterprise' },
    { value: '3', label: 'FinTech & Banking Platforms', subtext: 'IBS, Tijari One & ERP' },
    { value: '92.51', label: 'University GPA', subtext: 'First-Class Honors Degree' },
    { value: '60fps', label: 'UI Performance Standard', subtext: 'Flutter & React Experiences' },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Feb 8, 2026 – Present',
    role: 'Applications Developer & AI Systems Developer',
    roleAr: 'مطور تطبيقات، مطور أنظمة الذكاء الاصطناعي',
    company: 'Tharawat Financial Services & Investment Co.',
    companyAr: 'شركة ثروات للخدمات المالية والاستثمارية',
    location: "Sana'a, Yemen",
    subRoles: [
      {
        title: 'As an Applications Developer',
        responsibilities: [
          'Develop, maintain, and optimize the multi-application Simsim (Smsm) Store ecosystem: Customer App, Merchant App, and Delivery App.',
          'Comprehensive software architecture overhauls and performance optimizations improving app stability and frame rendering.',
          'Design modern, touch-optimized user interfaces using Flutter with seamless bilingual (Arabic RTL & English LTR) support.',
          'Integrate cross-platform mobile apps with backend Laravel RESTful services and real-time push protocols.',
          'Manage application release lifecycles and publishing on the Google Play Store.',
        ],
      },
      {
        title: 'As an AI Systems Developer',
        responsibilities: [
          'Study and evaluate opportunities to implement Artificial Intelligence across digital products and customer flows.',
          'Develop Proof of Concept (PoC) models and benchmark emerging AI technologies for commercial viability.',
          'Research emerging generative AI workflows, intelligent agents, and operational automation.',
          'Evaluate enterprise infrastructure requirements to adopt production-grade AI platforms.',
        ],
      },
    ],
  },
  {
    period: 'May 1, 2025 – Present',
    role: 'Systems Specialist, Systems & AI Developer',
    roleAr: 'أخصائي أنظمة، مطور أنظمة وأعمال الذكاء الاصطناعي',
    company: 'Yemen Commercial Bank (YCB)',
    companyAr: 'البنك التجاري اليمني',
    location: "Sana'a, Yemen",
    subRoles: [
      {
        title: 'As an AI Systems Developer',
        responsibilities: [
          'Design and develop intelligent automation bots to accelerate routine banking operations and eliminate manual discrepancies.',
          'Engineer Retrieval-Augmented Generation (RAG) systems to enhance information retrieval over banking policies and operational documentation.',
          'Design and implement a centralized banking Data Warehouse to consolidate data across core systems for managerial analytics.',
          'Integrate HashiCorp Vault for enterprise secrets management, credentials rotation, and microservices security.',
        ],
      },
      {
        title: 'As a Systems & Mobile Developer',
        responsibilities: [
          'Lead the analysis, design, and full-stack development of the Corporate Internet Banking System (IBS) using .NET 8 and React 18.',
          'Contribute to the continuous development and core banking integrations of the Tijari One mobile banking application using Flutter.',
          'Enforce strict zero-trust security best practices, maker-checker authorization workflows, and auditability.',
        ],
      },
      {
        title: 'As a Systems Specialist & Administrator',
        responsibilities: [
          'Manage, monitor, and ensure 24/7 high availability of core banking systems across Head Office and all nationwide branches.',
          'Supervise mission-critical banking platforms: money transfers, electronic archiving, customer management, daily treasury, and SWIFT/international transfers.',
          'Coordinate technical escalations directly with international software solution vendors and banking technology providers.',
        ],
      },
    ],
  },
  {
    period: 'Jan 2, 2024 – Aug 18, 2025',
    role: 'Systems Developer',
    roleAr: 'مطور أنظمة برمجية',
    company: 'Together Information Technology Solutions (Togits)',
    companyAr: 'شركة توغذر لحلول تكنولوجيا المعلومات',
    location: "Sana'a, Yemen",
    subRoles: [
      {
        title: 'Software & Web Systems Engineering',
        responsibilities: [
          'Contributed to the design, full-stack development, and integration of multiple enterprise systems with scalable architectures.',
          'Engineered and optimized RESTful APIs and microservices using Django and Python for secure data exchange.',
          'Built the comprehensive Helpdesk & Ticket Management platform and the automated Exam Committee Seat Distribution application.',
          'Provided deep technical troubleshooting and system maintenance under tight project delivery deadlines.',
        ],
      },
    ],
  },
  {
    period: '2023 – 2024',
    role: 'Technician & Developer',
    roleAr: 'فني ومطور أنظمة',
    company: 'University of Science and Technology',
    companyAr: 'جامعة العلوم والتكنولوجيا',
    location: "Sana'a, Yemen",
    subRoles: [
      {
        title: 'Academic Analytics & Machine Learning',
        responsibilities: [
          'Developed a Django-based platform for processing student academic performance data and generating analytical reports.',
          'Integrated Machine Learning models to analyze performance trends and support academic intervention.',
          'Documented system workflows to support departmental training and maintain ongoing database integrity.',
        ],
      },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: 'Graduated June 2024',
    degree: "Bachelor's Degree in Information Technology (English Program)",
    degreeAr: 'بكالوريوس في تكنولوجيا المعلومات (البرنامج باللغة الإنجليزية)',
    institution: 'University of Science and Technology',
    institutionAr: 'جامعة العلوم والتكنولوجيا',
    location: "Sana'a, Yemen",
    honors: 'Excellent With Honors (مرتبة الشرف الأولى)',
    gpa: '92.51 / 100 (Equivalent to 4.0 / 4.0)',
    highlights: [
      'Graduated with First-Class Honors in the English-taught degree curriculum.',
      'Distinguished Member of the University’s Information Technology Association.',
      'Graduation certificate and academic standing officially validated with honors decree.',
    ],
  },
  {
    period: '2019 – 2020',
    degree: 'Advanced English Language Certification',
    degreeAr: 'شهادة اللغة الإنجليزية المتقدمة',
    institution: 'Mali Institute for Languages',
    institutionAr: 'معهد مالي للغات',
    location: 'Taiz, Yemen',
    honors: 'Professional Fluency',
    gpa: 'Certified Distinction',
    highlights: [
      'Professional speaking, technical writing, and business conversation mastery.',
      'Bilingual technical documentation and cross-border client collaboration skills.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Artificial Intelligence in the Banking Sector (Python & OOP)',
    issuer: 'Institute of Banking Studies (IBS)',
    date: 'Sep 2025',
    details: '30 hours intensive training on Python foundations, Object-Oriented Programming, and algorithmic implementation in banking systems.',
    grade: 'Grade: 100% Distinction',
  },
  {
    title: 'Artificial Intelligence & Deep Machine Learning',
    issuer: 'Institute of Banking Studies (IBS)',
    date: 'Oct 2025',
    details: '20 hours focused on deep neural networks, predictive financial modeling, and machine learning architectures for banking operations.',
  },
  {
    title: 'Generative Artificial Intelligence Program',
    issuer: 'Institute of Banking Studies (IBS)',
    date: 'Dec 2025',
    details: '15 hours covering Large Language Models (LLMs), RAG architectures, prompt engineering, and intelligent workplace agents.',
  },
  {
    title: 'ITIL Reference Library (Information Technology Infrastructure Library)',
    issuer: 'Institute of Banking Studies (IBS)',
    date: 'Nov 2025',
    details: '20 hours of enterprise IT service management, incident governance, SLA compliance, and operational continuity.',
    grade: 'Grade: 77%',
  },
  {
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2022',
    details: 'Network architectures, IPv4/IPv6 addressing schemes, Ethernet switching, routing protocols, and enterprise network security.',
  },
  {
    title: 'Enterprise Banking Systems Training Credential',
    issuer: 'Yemen Commercial Bank (YCB)',
    date: 'May 2025',
    details: 'Certified operational training covering Active Directory, DNS/DHCP, Microsoft Exchange, Virtualization (Hyper-V/VMware), Agile, and Business Continuity.',
  },
  {
    title: 'Software Developer Experience Certification',
    issuer: 'Together Information Technology Solutions (Togits)',
    date: 'Aug 2025',
    details: 'Formal certification verifying contributions across enterprise information systems, Django APIs, and microservices.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend & Enterprise Architecture',
    categoryAr: 'تطوير الأنظمة الخلفية والمعمارية المؤسسية',
    description: 'Mission-critical APIs, clean domain boundaries, and high-security enterprise backends.',
    skills: [
      { name: '.NET 8 / C#', tags: ['Enterprise', 'Banking'] },
      { name: 'ASP.NET Core Web API', tags: ['REST', 'Clean Architecture'] },
      { name: 'Django / Python', tags: ['Microservices', 'Fast Data'] },
      { name: 'Clean Architecture & Modular Monoliths', tags: ['Patterns', 'DDD'] },
      { name: 'SOLID Principles & MVC', tags: ['Engineering Discipline'] },
      { name: 'Real-Time Protocols (SignalR, WebSockets, UDP/TCP)', tags: ['Concurrency'] },
      { name: 'Odoo Custom Framework (Python / OWL)', tags: ['ERP', 'Business Workflows'] },
      { name: 'Laravel (PHP)', tags: ['REST APIs', 'E-Commerce'] },
    ],
  },
  {
    category: 'Mobile Applications Engineering',
    categoryAr: 'تطوير تطبيقات الهاتف المحمول',
    description: 'Native-feel 60fps/120fps cross-platform applications with seamless Arabic (RTL) & English (LTR) design.',
    skills: [
      { name: 'Flutter & Dart', tags: ['Cross-Platform', '120fps UI'] },
      { name: 'State Management (Riverpod, Bloc, Provider)', tags: ['Predictable State'] },
      { name: 'Arabic (RTL) & English (LTR) Adaptive UI', tags: ['Touch UX'] },
      { name: 'Digital Wallet & Payment Integrations', tags: ['FinTech'] },
      { name: 'Offline-First & Local Caching Pipelines', tags: ['Resilience'] },
      { name: 'Google Play Release & Store Optimization', tags: ['Production Deployment'] },
    ],
  },
  {
    category: 'Modern Web & 3D Interactive Frontend',
    categoryAr: 'تطوير واجهات الويب والتقنيات ثلاثية الأبعاد',
    description: 'High-speed editorial web platforms, design systems, and responsive 3D WebGL experiences.',
    skills: [
      { name: 'React 18 / 19', tags: ['Component Architecture'] },
      { name: 'TypeScript', tags: ['Strict Typing'] },
      { name: 'Vite', tags: ['Sub-second HMR', 'Optimized Bundling'] },
      { name: 'Three.js & WebGL', tags: ['3D Web Experiences', 'Mathematical Latice'] },
      { name: 'Tailwind CSS', tags: ['Design Tokens', 'Editorial Layouts'] },
      { name: 'Framer Motion', tags: ['Fluid Micro-interactions'] },
      { name: 'HTML5, CSS3, Modern ESNext', tags: ['Web Standards'] },
    ],
  },
  {
    category: 'Applied AI & Data Architecture',
    categoryAr: 'الذكاء الاصطناعي التطبيقي وهندسة البيانات',
    description: 'Real-world generative AI, retrieval systems, data warehousing, and predictive models.',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', tags: ['Enterprise Knowledge'] },
      { name: 'LLM Agents & Workflow Automation Bots', tags: ['Banking Operations'] },
      { name: 'Data Warehouse Architecture & ETL', tags: ['Consolidation', 'Analytics'] },
      { name: 'Machine Learning & Deep Learning (Python)', tags: ['Scikit-Learn', 'Neural Nets'] },
      { name: 'Predictive Analytics & Financial Forecasting', tags: ['Risk Modeling'] },
      { name: 'Proof of Concept (PoC) Feasibility Evaluation', tags: ['Emerging Tech'] },
    ],
  },
  {
    category: 'Enterprise Infrastructure & Security',
    categoryAr: 'البنية التحتية وأمن المعلومات المؤسسي',
    description: 'Zero-trust secret management, container orchestration, and high-availability operations.',
    skills: [
      { name: 'HashiCorp Vault', tags: ['Secrets Management', 'Zero-Trust'] },
      { name: 'Docker & Kubernetes / OpenShift OKD', tags: ['Containers', 'Orchestration'] },
      { name: 'Windows Server 2022 / CentOS / Ubuntu', tags: ['Enterprise OS'] },
      { name: 'VMware vSphere & Microsoft Hyper-V', tags: ['Virtualization'] },
      { name: 'Active Directory, Exchange, DNS/DHCP', tags: ['Sysadmin'] },
      { name: 'Nginx Load Balancing & Reverse Proxy', tags: ['High Availability'] },
      { name: 'Azure DevOps, CI/CD, Git & Jira', tags: ['Agile Delivery'] },
      { name: 'ITIL Framework & Incident Management', tags: ['Governance'] },
    ],
  },
];

