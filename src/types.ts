export interface MentorshipTier {
  id: string;
  title: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  fundedAmount: string;
  returnPercent: string;
  quote: string;
  strategyUsed: string;
  timeToFunded: string;
}

export interface StrategyPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyTakeaways: string[];
  diagramType: 'sweep' | 'fvg' | 'mss' | 'killzone';
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  discordHandle: string;
  tradingExperience: string;
  capitalRange: string;
  mentorshipTrack: string;
  biggestChallenge: string;
}
