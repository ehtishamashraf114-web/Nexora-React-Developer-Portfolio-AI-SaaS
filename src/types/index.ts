export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'ai' | 'healthcare' | 'edtech' | 'ecommerce';
  categoryLabel: string;
  technologies: string[];
  metrics: string[];
  features: string[];
  demoType: 'dashboard_route' | 'healthcare_modal' | 'quran_modal' | 'ecommerce_modal';
  githubUrl: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string[];
    outcomes: string[];
  };
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'styling' | 'tooling' | 'learning';
  level: number; // 0 - 100
  experienceLabel: string;
  status: 'production' | 'learning';
  description: string;
  iconName: string;
}

export interface MetricSummary {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  timeframe: string;
}

export interface TransactionRecord {
  id: string;
  customerName: string;
  customerEmail: string;
  plan: 'Starter' | 'Pro' | 'Enterprise';
  amount: number;
  status: 'Completed' | 'Pending' | 'Refunded';
  date: string;
  tokensUsed: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'deploy' | 'user' | 'alert' | 'ai';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UserPreferences {
  theme: 'dark' | 'light';
  currency: 'USD' | 'EUR' | 'GBP';
  emailAlerts: boolean;
  compactTable: boolean;
  aiEngine: 'gemini-1.5-pro' | 'gemini-1.5-flash';
}
