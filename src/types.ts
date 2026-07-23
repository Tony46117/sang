export interface StrategyPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyTakeaways: string[];
  diagramType: 'buildup' | 'inducement' | 'mitigation';
}

export interface FaqItem {
  question: string;
  answer: string;
}
