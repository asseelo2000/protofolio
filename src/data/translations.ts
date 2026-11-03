export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  nav: {
    overview: string;
    projects: string;
    enterpriseAi: string;
    expertise: string;
    background: string;
    contact: string;
    getInTouch: string;
    subtitle: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineUnderline: string;
    headlinePart2: string;
    summary: string;
    ctaWork: string;
    ctaAi: string;
    ctaLinkedin: string;
    fintechAnchorTitle: string;
    fintechAnchorDesc: string;
    mobileAnchorTitle: string;
    mobileAnchorDesc: string;
    aiAnchorTitle: string;
    aiAnchorDesc: string;
  };
  metrics: {
    stats: {
      value: string;
      label: string;
      subtext: string;
    }[];
  };
  projects: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    filterAll: string;
    filterBanking: string;
    filterMobile: string;
    filterWeb: string;
    filterAi: string;
    tier2Heading: string;
    tier3Heading: string;
    btnDetails: string;
    btnCaseStudy: string;
    btnLive: string;
    btnStore: string;
    btnWebsite: string;
    btnClose: string;
    verificationStatus: string;
    documentedContribution: string;
    businessContext: string;
    engineeringSolution: string;
    keyFeatures: string;
    techStack: string;
    subAppsHeading: string;
    architectureHighlights: string;
  };
  enterpriseAi: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerBtn: string;
  };
  skills: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    domainFocus: string;
  };
  background: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    tabExperience: string;
    tabEducation: string;
    tabCertifications: string;
    distinctionBadge: string;
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    btnEmail: string;
    btnLinkedin: string;
    channelsTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    githubLabel: string;
    copied: string;
  };
  footer: {
    rights: string;
    designRef: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      overview: 'Overview',
      projects: 'Projects',
      enterpriseAi: 'Enterprise AI',
      expertise: 'Expertise',
      background: 'Background',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      subtitle: 'Systems & AI Dev',
    },
    hero: {
      badge: 'Information Technology Specialist · Systems & AI Developer',
      headlinePart1: 'Architecting',
      headlineUnderline: 'mission-critical',
      headlinePart2: 'enterprise systems, mobile ecosystems & applied AI.',
      summary: 'Systems and applications developer specialized in modern software architectures, Artificial Intelligence, and enterprise infrastructure. Experienced in analyzing complex technical requirements and transforming them into scalable, secure products across banking, e-commerce logistics, and corporate platforms.',
      ctaWork: 'Explore Selected Work',
      ctaAi: 'Enterprise AI & Security',
      ctaLinkedin: 'LinkedIn',
      fintechAnchorTitle: 'Enterprise FinTech & Banking',
      fintechAnchorDesc: '.NET 8 Clean Architecture, Corporate IBS, Tijari One & HashiCorp Vault.',
      mobileAnchorTitle: 'Tripartite Mobile Ecosystems',
      mobileAnchorDesc: 'Flutter 60fps, 3-app Smsm marketplace, Weldan & retail wallet integrations.',
      aiAnchorTitle: 'Applied AI & Data Systems',
      aiAnchorDesc: 'RAG for banking policy, intelligent bots, data warehouses & ML analytics.',
    },
    metrics: {
      stats: [
        { value: '11+', label: 'Delivered Systems & Products', subtext: 'Web, Mobile & Enterprise' },
        { value: '3', label: 'FinTech & Banking Platforms', subtext: 'IBS, Tijari One & ERP' },
        { value: '92.51', label: 'University GPA', subtext: 'First-Class Honors Degree' },
        { value: '60fps', label: 'UI Performance Standard', subtext: 'Flutter & React Experiences' },
      ],
    },
    projects: {
      sectionTag: '01 / Project Portfolio',
      sectionTitle: 'Selected Systems & Platforms',
      sectionSubtitle: 'Every project demonstrates factual engineering responsibilities across banking platforms, multi-party mobile ecosystems, and full-stack web products.',
      filterAll: 'All Projects',
      filterBanking: 'Enterprise Banking',
      filterMobile: 'Mobile Ecosystems',
      filterWeb: 'Web Platforms',
      filterAi: 'AI & Data Systems',
      tier2Heading: 'Tier 2 · Production & Operational Platforms',
      tier3Heading: 'Tier 3 · Specialized Internal & Academic Systems',
      btnDetails: 'Case Details',
      btnCaseStudy: 'View Architecture & Case Study',
      btnLive: 'Live Link',
      btnStore: 'Google Play Store',
      btnWebsite: 'Visit Website',
      btnClose: 'Close',
      verificationStatus: 'Verification Status',
      documentedContribution: 'Documented Contribution (CV Verified)',
      businessContext: 'Business Context & Challenge',
      engineeringSolution: 'Engineering Solution',
      keyFeatures: 'System Capabilities & Features',
      techStack: 'Verified Technology Stack',
      subAppsHeading: 'Integrated Ecosystem Applications',
      architectureHighlights: 'Architectural Best Practices Applied',
    },
    enterpriseAi: {
      sectionTag: '02 / Applied AI & Infrastructure',
      sectionTitle: 'Enterprise AI, RAG Systems & High-Security Infrastructure',
      sectionSubtitle: 'Beyond commercial frontends and mobile apps, Aseel leads mission-critical initiatives in the banking sector—transforming dense regulatory archives into verifiable retrieval systems, automating routine financial operations, and securing microservices with zero-trust protocols.',
      bannerTitle: 'Certified Banking & High-Availability Operations',
      bannerSubtitle: 'Formally trained and certified by the Institute of Banking Studies (IBS) in AI, Neural Networks, ITIL Service Governance, and Enterprise Virtualization.',
      bannerBtn: 'Review Certifications',
    },
    skills: {
      sectionTag: '03 / Technical Taxonomy',
      sectionTitle: 'Engineered Across Multiple Disciplines',
      sectionSubtitle: 'Organized by functional engineering domain. Built on first-principles understanding, solid computer science foundations, and rigorous enterprise practice.',
      domainFocus: 'DOMAIN FOCUS',
    },
    background: {
      sectionTag: '04 / Career & Credentials',
      sectionTitle: 'Professional Experience & Academic Honors',
      sectionSubtitle: 'A documented track record across financial institutions, enterprise software houses, and academic distinction.',
      tabExperience: 'Professional Roles',
      tabEducation: 'Education & Honors',
      tabCertifications: 'Certifications',
      distinctionBadge: 'ACADEMIC DISTINCTION',
    },
    contact: {
      sectionTag: '05 / Inquiries & Hiring',
      sectionTitle: "Let's build scalable, reliable software.",
      sectionSubtitle: 'Currently available for senior systems development, FinTech engineering, mobile architecture, or applied AI roles. Open to both on-site enterprise engagements and remote international collaborations.',
      btnEmail: 'Send Direct Email',
      btnLinkedin: 'Connect on LinkedIn',
      channelsTitle: 'Verified Direct Channels',
      emailLabel: 'EMAIL',
      phoneLabel: 'PHONE / WHATSAPP',
      locationLabel: 'LOCATION',
      locationValue: "Sana'a, Yemen",
      githubLabel: 'GITHUB PROFILE',
      copied: 'Copied!',
    },
    footer: {
      rights: 'Strict factual claims verified against formal CV documents & credentials.',
      designRef: 'Inspired by Cohere 2026 design principles.',
    },
  },
  ar: {
    nav: {
      overview: 'نظرة عامة',
      projects: 'المشاريع',
      enterpriseAi: 'الذكاء الاصطناعي',
      expertise: 'المهارات والخبرات',
      background: 'السيرة والشهادات',
      contact: 'تواصل معي',
      getInTouch: 'تواصل معي',
      subtitle: 'مطور أنظمة وذكاء اصطناعي',
    },
    hero: {
      badge: 'تقني معلومات متخصص في تطوير الأنظمة والذكاء الاصطناعي',
      headlinePart1: 'هندسة وتطوير',
      headlineUnderline: 'الأنظمة المصرفية الحرجة',
      headlinePart2: 'ومنظومات المحمول المتكاملة وحلول الذكاء الاصطناعي.',
      summary: 'أخصائي ومطور أنظمة وتطبيقات، متخصص في تقنيات الذكاء الاصطناعي وإدارة الأنظمة وتشغيلها، يمتلك خبرة عملية في تصميم وتطوير وتحسين الأنظمة والتطبيقات البرمجية، وتحليل المتطلبات التقنية وتحويلها إلى حلول فعالة وقابلة للتوسع في القطاع المصرفي والتجارة الإلكترونية والمنصات المؤسسية.',
      ctaWork: 'استكشاف المشاريع والأنظمة',
      ctaAi: 'الذكاء الاصطناعي والأمن المصرفي',
      ctaLinkedin: 'حساب LinkedIn',
      fintechAnchorTitle: 'التقنية المالية والأنظمة المصرفية',
      fintechAnchorDesc: 'بنية .NET 8 المعمارية النظيفة، نظام IBS للشركات، تجاري ون، وإدارة أسرار Vault.',
      mobileAnchorTitle: 'منظومات المحمول الشاملة',
      mobileAnchorDesc: 'تطوير Flutter بأداء 60fps، منظومة سمسم ثلاثية التطبيقات، ولدان ومحافظ الدفع.',
      aiAnchorTitle: 'الذكاء الاصطناعي وهندسة البيانات',
      aiAnchorDesc: 'أنظمة RAG للوائح المصرفية، روبوتات الأتمتة، مستودع البيانات المركزي وتحليلات التعلم الآلي.',
    },
    metrics: {
      stats: [
        { value: '+11', label: 'أنظمة وتطبيقات منفذة', subtext: 'ويب، محمول وأنظمة مؤسسية' },
        { value: '3', label: 'منصات مصرفية ومالية', subtext: 'IBS للشركات، تجاري ون، ونظام Odoo' },
        { value: '92.51', label: 'معدل التخرج الجامعي', subtext: 'مرتبة الشرف الأولى بامتياز' },
        { value: '60fps', label: 'معيار سلاسة الواجهات', subtext: 'تطبيقات Flutter وReact الحديثة' },
      ],
    },
    projects: {
      sectionTag: '01 / سجل المشاريع والأنظمة',
      sectionTitle: 'الأنظمة والمنصات المنجزة',
      sectionSubtitle: 'جميع المشاريع تعكس مهام ومسؤوليات هندسية موثقة رسمياً في بناء المنصات المصرفية ومنظومات التجارة ومنتجات الويب الكاملة.',
      filterAll: 'جميع المشاريع',
      filterBanking: 'الأنظمة المصرفية',
      filterMobile: 'منظومات المحمول',
      filterWeb: 'منصات الويب',
      filterAi: 'الذكاء الاصطناعي والبيانات',
      tier2Heading: 'المستوى الثاني · المنصات التشغيلية والإنتاجية',
      tier3Heading: 'المستوى الثالث · الأنظمة الإدارية والأكاديمية المتخصصة',
      btnDetails: 'تفاصيل الحالة',
      btnCaseStudy: 'عرض المعمارية ودراسة الحالة',
      btnLive: 'رابط مباشر',
      btnStore: 'متجر Google Play',
      btnWebsite: 'زيارة الموقع الإلكتروني',
      btnClose: 'إغلاق',
      verificationStatus: 'حالة التحقق',
      documentedContribution: 'المسؤولية والمساهمة الموثقة (وفق السيرة الذاتية)',
      businessContext: 'سياق العمل والتحدي المؤسسي',
      engineeringSolution: 'الحل الهندسي والمعماري',
      keyFeatures: 'الوظائف والخصائص الأساسية للنظام',
      techStack: 'حزمة التقنيات المعتمدة',
      subAppsHeading: 'التطبيقات المترابطة داخل المنظومة',
      architectureHighlights: 'أفضل الممارسات المعمارية المطبقة',
    },
    enterpriseAi: {
      sectionTag: '02 / الذكاء الاصطناعي التطبيقي والبنية المؤسسية',
      sectionTitle: 'الذكاء الاصطناعي المؤسسي، أنظمة RAG والبنية فائقة الأمان',
      sectionSubtitle: 'إلى جانب تطبيقات المحمول والويب، قاد أصيل مبادرات استراتيجية في القطاع المصرفي لتحويل اللوائح التنظيمية إلى أنظمة استرجاع مدعومة بالذكاء الاصطناعي، وأتمتة العمليات الروتينية، وحماية الخدمات المصغرة بمبادئ Zero-Trust.',
      bannerTitle: 'عمليات مصرفية معتمدة وعالية التوافر',
      bannerSubtitle: 'شهادات وتدريب متخصص معتمد من معهد الدراسات المصرفية (IBS) في الذكاء الاصطناعي، الشبكات العصبية، حوكمة ITIL، وإدارة الخوادم الافتراضية.',
      bannerBtn: 'استعراض الشهادات المصرفية',
    },
    skills: {
      sectionTag: '03 / التصنيف الهندسي والمهارات',
      sectionTitle: 'خبرات هندسية متعددة التخصصات',
      sectionSubtitle: 'منظمة وفق المجالات الهندسية والوظيفية، ومبنية على فهم المبادئ الأساسية لعلوم الحاسوب والممارسة المصرفية والمؤسسية الدقيقة.',
      domainFocus: 'المجال الهندسي',
    },
    background: {
      sectionTag: '04 / المسيرة المهنية والمؤهلات الأكاديمية',
      sectionTitle: 'الخبرة العملية ومرتبة الشرف الجامعية',
      sectionSubtitle: 'سجل إنجازات موثق في المؤسسات المالية والشركات التكنولوجية مع تفوق أكاديمي معتمد.',
      tabExperience: 'الخبرات المهنية',
      tabEducation: 'المؤهلات والشرف الجامعي',
      tabCertifications: 'الشهادات الاحترافية',
      distinctionBadge: 'تفوق ومرتبة شرف أولى',
    },
    contact: {
      sectionTag: '05 / التواصل واستقطاب الكفاءات',
      sectionTitle: 'لنقم ببناء برمجيات آمنة وقابلة للتوسع.',
      sectionSubtitle: 'متاح للعمل في أدوار هندسة الأنظمة المتقدمة، التقنية المالية (FinTech)، معمارية المحمول، أو حلول الذكاء الاصطناعي التطبيقي، سواء للمشاريع المؤسسية أو التعاون الدولي عن بُعد.',
      btnEmail: 'مراسلة بريدية مباشرة',
      btnLinkedin: 'التواصل عبر LinkedIn',
      channelsTitle: 'قنوات التواصل المباشرة الموثقة',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف / واتساب',
      locationLabel: 'الموقع الجغرافي',
      locationValue: 'صنعاء، اليمن',
      githubLabel: 'الملف الشخصي على GitHub',
      copied: 'تم النسخ بنجاح!',
    },
    footer: {
      rights: 'جميع البيانات والخبرات موثقة رسمياً بموجب وثائق السيرة الذاتية والشهادات الصادرة.',
      designRef: 'تصميم مستوحى من المبادئ المؤسسية لـ Cohere 2026.',
    },
  },
};

