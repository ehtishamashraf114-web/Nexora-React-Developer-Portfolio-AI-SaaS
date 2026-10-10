import { Project, SkillItem } from '../types';

export const DEVELOPER_PROFILE = {
  name: 'Nexora Dev',
  role: 'Senior React Developer & Frontend Engineer',
  tagline: 'I Build Digital Experiences That Move Businesses Forward.',
  subline: 'React Developer specializing in interactive web applications, modern UI engineering, and AI-powered digital experiences.',
  availability: 'Available for Full-Time & High-Impact Contracts',
  location: 'Remote · Worldwide',
  email: 'thequranacademyhub@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  whatsapp: '+1234567890',
  yearsExperience: '3+ Years Crafting Frontend Systems',
  keyStats: [
    { value: '99.8%', label: 'Uptime & Reliability Focus' },
    { value: '<100ms', label: 'Average Interaction Latency' },
    { value: '15+', label: 'React Projects Delivered' },
    { value: '100%', label: 'Clean Code & Accessibility AA' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-analytics-dashboard',
    title: 'AI Analytics & SaaS Dashboard',
    subtitle: 'Next-Generation Enterprise Intelligence Platform',
    description: 'An interactive enterprise analytics workspace with real-time metric cards, Recharts visualizations, date-range filtration, search & sorting tables, and LocalStorage persistence.',
    category: 'ai',
    categoryLabel: 'AI SaaS & Telemetry',
    technologies: ['React 19', 'Recharts', 'Tailwind CSS', 'TypeScript', 'LocalStorage', 'Lucide React'],
    metrics: ['Sub-50ms Chart Re-renders', '5 Dynamic Date Windows', 'Zero-Jitter Tabular Figures'],
    features: [
      'Interactive MRR, active users, and token utilization trend charts',
      'Instant date range filtering (Today, 7D, 30D, 90D, Year)',
      'Searchable and paginated customer transaction ledger',
      'Real-time simulation feed of AI system events',
      'Persisted user preferences (currency, notification limits, theme)'
    ],
    demoType: 'dashboard_route',
    githubUrl: 'https://github.com/nexora/ai-analytics-dashboard',
    liveUrl: '/dashboard',
    caseStudy: {
      problem: 'Enterprise teams struggle with fragmented SaaS metrics and sluggish dashboards that take seconds to render dense data streams.',
      solution: 'Engineered a modular, zero-lag React dashboard with synchronized Recharts components, client-side pagination, and immediate optimistic updates.',
      architecture: [
        'Decoupled analytics state store managing synchronized chart intervals',
        'Tabular numerals typography preventing visual jitter across viewport changes',
        'Lazy-loaded sub-modules for instant initial paint under 300ms'
      ],
      outcomes: [
        'Optimized bundle size under 85KB gzipped',
        'Complete keyboard accessibility and high-contrast color governance',
        'Full test coverage for data transform utilities'
      ]
    }
  },
  {
    id: 'healthcare-appointment-platform',
    title: 'CarePulse — Healthcare Appointment Platform',
    subtitle: 'Streamlined Clinic & Patient Scheduling System',
    description: 'A responsive medical practice portal featuring verified doctor profiles, department filters, real-time appointment booking with calendar slots, and comprehensive form validation.',
    category: 'healthcare',
    categoryLabel: 'HealthTech & Booking',
    technologies: ['React', 'Tailwind CSS', 'Form Validation', 'Lucide Icons', 'Responsive Design'],
    metrics: ['Instant Slot Confirmation', 'Zero Overlap Scheduling', 'WCAG AA Compliant Forms'],
    features: [
      'Specialist directory categorized by Cardiology, Neurology, Pediatrics & Orthopedics',
      'Interactive date & time slot picker with live availability check',
      'Multi-step patient intake questionnaire with inline error states',
      'Instant booking confirmation receipt and reminder simulator',
      'Emergency hotline quick-action triggers'
    ],
    demoType: 'healthcare_modal',
    githubUrl: 'https://github.com/nexora/carepulse-healthcare',
    caseStudy: {
      problem: 'Patients frequently drop off during lengthy, confusing appointment booking flows with ambiguous calendar availability.',
      solution: 'Created an intuitive 3-step scheduling funnel that checks doctor availability in real time, provides immediate visual feedback, and remembers patient inputs.',
      architecture: [
        'Atomic component hierarchy separating doctor cards from slot matrices',
        'Custom hook managing form state with zero unnecessary re-renders',
        'Accessible modal dialogs adhering to ARIA 1.2 authoring practices'
      ],
      outcomes: [
        'Completed booking simulation in under 60 seconds',
        'Mobile-first responsive layout tested across screen widths 320px to 2560px',
        'Zero layout shifts (CLS < 0.02)'
      ]
    }
  },
  {
    id: 'quran-learning-academy',
    title: 'The Quran Academy Hub',
    subtitle: 'Comprehensive Online Quranic Education Portal',
    description: 'An elegant, spiritual, and high-performance academy website with structured courses (Noorani Qaida, Tajweed, Hifz, Tafseer), certified tutor profiles, student registration, and WhatsApp enrollment.',
    category: 'edtech',
    categoryLabel: 'EdTech & Learning',
    technologies: ['React', 'Tailwind CSS', 'WhatsApp API Link', 'Accessible Modal', 'Vector Arabic Art'],
    metrics: ['1-Click WhatsApp Enroll', 'Structured Curriculums', 'Global Student Support'],
    features: [
      'Comprehensive course catalog with curriculum milestones and duration estimates',
      'Interactive syllabus previews with pronunciation guidelines and audio player UI',
      'Certified Alim & Qari instructor bios with credentials and student ratings',
      'Direct WhatsApp enrollment link with automated message templates',
      'Student registration modal with schedule preference selection (Weekdays/Weekends)'
    ],
    demoType: 'quran_modal',
    githubUrl: 'https://github.com/nexora/quran-academy-hub',
    caseStudy: {
      problem: 'Online learning academies often suffer from slow websites, cluttered enrollment pages, and high friction for international parents wanting to connect directly on WhatsApp.',
      solution: 'Designed a serene, high-contrast digital sanctuary featuring modular curriculum breakdowns, transparent tutor credentials, and instant 1-click WhatsApp enrollment.',
      architecture: [
        'Lightweight vector Islamic geometric accents avoiding heavy external image dependencies',
        'Dynamic WhatsApp URI builder formatting student course preferences automatically',
        'Localized schedule selector taking time zone differences into account'
      ],
      outcomes: [
        'Frictionless registration workflow with 1-tap parent outreach',
        'Flawless offline-ready vector assets that never break on Netlify/Vercel',
        '100% Lighthouse Accessibility & Best Practices score'
      ]
    }
  },
  {
    id: 'e-commerce-experience',
    title: 'AuraCraft — Premium E-Commerce Experience',
    subtitle: 'High-Performance Modern Storefront & Cart',
    description: 'A modern e-commerce product storefront featuring real-time search, price and category filters, responsive product grid, sliding shopping cart drawer, and interactive checkout simulation.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    technologies: ['React', 'LocalStorage Cart', 'Tailwind CSS', 'Framer Animations', 'Lucide React'],
    metrics: ['Real-time Cart Sync', 'Instant Search & Filter', 'Optimistic UI Updates'],
    features: [
      'Dynamic product catalog with high-fidelity vector merchandise previews',
      'Category filtering (Audio, Workspace, Wearables, Accessories) and price sorting',
      'Slide-over shopping cart drawer with quantity toggles and subtotal calculations',
      'Persistent cart state stored in browser LocalStorage',
      'Interactive checkout simulator with coupon code validation and success confetti'
    ],
    demoType: 'ecommerce_modal',
    githubUrl: 'https://github.com/nexora/auracraft-storefront',
    caseStudy: {
      problem: 'Standard storefront templates are heavy, plagued by layout shifts when images load, and offer sluggish cart update feedback.',
      solution: 'Built a sleek headless storefront leveraging optimistic local state updates, instant client-side filtering, and persistent cart storage.',
      architecture: [
        'Context-free lightweight custom hooks managing basket calculations',
        'Vector-backed product previews guaranteeing zero broken image states',
        'Keyboard-accessible drawer and modal overlays'
      ],
      outcomes: [
        'Instantaneous cart updates with zero network delay',
        'Zero external CDN asset dependencies for 100% deployment reliability',
        'Fluid micro-interactions responding in under 120ms'
      ]
    }
  }
];

export const SKILLS: SkillItem[] = [
  // Mastered & Production Ready
  {
    name: 'React.js (18 / 19)',
    category: 'frontend',
    level: 95,
    experienceLabel: 'Advanced / Core Focus',
    status: 'production',
    description: 'Hooks architecture, custom hooks, context, state optimization, memoization, concurrent features.',
    iconName: 'Atom'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 92,
    experienceLabel: 'Deep Fundamentals',
    status: 'production',
    description: 'Async/Await, closures, prototypes, event loop, functional programming, DOM APIs.',
    iconName: 'Code2'
  },
  {
    name: 'HTML5 & Semantic Web',
    category: 'frontend',
    level: 96,
    experienceLabel: 'Strict Accessibility (AA)',
    status: 'production',
    description: 'Semantic markup, SEO best practices, ARIA attributes, structured data, web standards.',
    iconName: 'FileCode'
  },
  {
    name: 'CSS3 & Modern Layouts',
    category: 'styling',
    level: 94,
    experienceLabel: 'Flexbox, Grid & Animations',
    status: 'production',
    description: 'CSS Grid, Flexbox, custom properties, responsive breakpoints, transitions, keyframes.',
    iconName: 'Palette'
  },
  {
    name: 'Tailwind CSS',
    category: 'styling',
    level: 95,
    experienceLabel: 'Design System & Utility-First',
    status: 'production',
    description: 'Rapid UI engineering, custom config, design tokens, fluid typography, dark mode orchestration.',
    iconName: 'Layers'
  },
  {
    name: 'Responsive Web Design',
    category: 'styling',
    level: 96,
    experienceLabel: 'Mobile-First Perfection',
    status: 'production',
    description: 'Fluid clamp scales, touch targets >= 44px, zero horizontal overflow, adaptive interfaces.',
    iconName: 'Smartphone'
  },
  {
    name: 'React Router',
    category: 'frontend',
    level: 90,
    experienceLabel: 'SPA Navigation & Layouts',
    status: 'production',
    description: 'Dynamic routes, nested layouts, query param state, protected routes, scroll restoration.',
    iconName: 'Compass'
  },
  {
    name: 'REST APIs & Fetch',
    category: 'tooling',
    level: 88,
    experienceLabel: 'Data Integration & Optimism',
    status: 'production',
    description: 'HTTP methods, async data handling, error boundaries, optimistic UI updates, retry logic.',
    iconName: 'Network'
  },
  {
    name: 'LocalStorage & Web Storage',
    category: 'tooling',
    level: 92,
    experienceLabel: 'Client-Side Persistence',
    status: 'production',
    description: 'State synchronization, serialization, cache invalidation, persistent cart & user preferences.',
    iconName: 'HardDrive'
  },
  {
    name: 'Git & GitHub',
    category: 'tooling',
    level: 88,
    experienceLabel: 'Version Control & Workflows',
    status: 'production',
    description: 'Feature branching, PR reviews, merge conflict resolution, semantic commit conventions.',
    iconName: 'GitBranch'
  },

  // Currently Learning / Expanding
  {
    name: 'Next.js App Router',
    category: 'learning',
    level: 70,
    experienceLabel: 'Actively Exploring',
    status: 'learning',
    description: 'Server Components, server actions, streaming SSR, metadata optimization, route handlers.',
    iconName: 'Sparkles'
  },
  {
    name: 'TypeScript Advanced Types',
    category: 'learning',
    level: 75,
    experienceLabel: 'Daily Practice',
    status: 'learning',
    description: 'Generics, utility types, conditional types, discriminated unions, strict typing pipelines.',
    iconName: 'ShieldCheck'
  },
  {
    name: 'Node.js & Express Basics',
    category: 'learning',
    level: 65,
    experienceLabel: 'Expanding Horizons',
    status: 'learning',
    description: 'Middleware architecture, RESTful routing, authentication tokens, API proxy services.',
    iconName: 'Server'
  }
];

export const CAREER_JOURNEY = [
  {
    period: '2024 — Present',
    role: 'Frontend Engineering & React Specialist',
    company: 'Independent Production Development',
    description: 'Building high-performance interactive SPAs, SaaS dashboards, and e-commerce applications. Focused on atomic React architectures, WCAG accessibility, and fluid animations.',
    highlights: [
      'Engineered interactive SaaS telemetry platforms featuring real-time charting',
      'Developed responsive clinic appointment systems with multi-step validations',
      'Created custom responsive layouts with sub-100ms interaction latencies'
    ]
  },
  {
    period: '2023 — 2024',
    role: 'Frontend Web Developer',
    company: 'Client Web Solutions & Digital Portals',
    description: 'Designed and developed custom web portals, responsive marketing sites, and dynamic user interfaces using React, Tailwind CSS, and modern JavaScript.',
    highlights: [
      'Migrated legacy web designs to modular, reusable React component systems',
      'Implemented robust client-side filtering, search indices, and local storage caching',
      'Collaborated closely with stakeholders to translate business needs into clean code'
    ]
  },
  {
    period: '2022 — 2023',
    role: 'Foundational Web Development',
    company: 'Intensive Frontend Studies & Open Source',
    description: 'Mastered semantic HTML5, CSS3 layout systems, and JavaScript data structures. Built and published dozens of practice applications and component libraries.',
    highlights: [
      'Mastered vanilla DOM APIs, event handling, and ES6+ asynchronous workflows',
      'Built 10+ responsive web templates achieving perfect mobile responsiveness',
      'Adopted Git version control and modern bundling tooling with Vite'
    ]
  }
];
