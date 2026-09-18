export type Language = 'en' | 'ur';

export interface Service {
  id: string;
  title: string;
  titleUrdu: string;
  tagline: string;
  taglineUrdu: string;
  shortDesc: string;
  shortDescUrdu: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  deliverablesUrdu: string[];
  metricTag: string;
  channels: string[];
  featuredClient: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  titleUrdu: string;
  client: string;
  sector: string;
  year: string;
  tags: string[];
  heroImage: string;
  summary: string;
  summaryUrdu: string;
  challenge: string;
  solution: string;
  keyMetrics: { label: string; value: string; labelUrdu?: string }[];
  awards?: string[];
  featured?: boolean;
}

export interface GlobalHub {
  id: string;
  city: string;
  cityUrdu: string;
  country: string;
  region: string;
  timezone: string;
  utcOffset: number; // in hours from UTC
  address: string;
  teamLead: string;
  activeAccounts: number;
  phone: string;
  email: string;
  coordinates: { x: number; y: number }; // percentage on map canvas (0-100)
  capabilities: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  quoteUrdu: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  impactMetric: string;
}

export interface Award {
  year: string;
  title: string;
  festival: string;
  category: string;
  campaign: string;
}

export interface CampaignPlanRequest {
  targetRegion: string;
  campaignGoal: string;
  industrySector: string;
  monthlyBudget: number; // in USD
}

export interface CampaignPlanResult {
  estimatedReach: string;
  projectedImpressions: string;
  estimatedClicksOrEngagements: string;
  projectedRoasRange: string;
  recommendedDuration: string;
  channelBreakdown: {
    channel: string;
    sharePercent: number;
    color: string;
    description: string;
  }[];
  keyTactics: string[];
}

export interface ProjectProposalForm {
  brandName: string;
  contactName: string;
  email: string;
  phone: string;
  targetRegion: string;
  budgetTier: string;
  servicesNeeded: string[];
  campaignObjectives: string;
  preferredLaunchDate: string;
}
