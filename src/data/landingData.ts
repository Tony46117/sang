import { StrategyPillar } from '../types';

export const METRICS = [
  { label: 'Total Funded Capital Passed', value: '$14.8M+' },
  { label: 'Avg Risk-to-Reward Ratio', value: '1 : 3.8' },
  { label: 'Community Win Rate', value: '57.7%' },
];

export const STRATEGY_PILLARS: StrategyPillar[] = [
  {
    id: 'buildup',
    number: '01',
    title: 'Build Up',
    subtitle: 'Identify retail liquidity accumulation & liquidity pool engineering.',
    description: 'Before institutional algorithms move price, they build up liquidity on both sides of the market. Retail traders mistake this consolidation for trendlines and chart patterns, unknowingly placing stop-losses right where smart money needs counter-liquidity.',
    keyTakeaways: [
      'Mapping liquidity pools above equal highs (BSL) & below equal lows (SSL)',
      'Identifying retail trendline traps and pattern accumulation zones',
      'Session timing: Asian Range consolidation & London Build Up'
    ],
    diagramType: 'buildup'
  },
  {
    id: 'inducement',
    number: '02',
    title: 'Inducement',
    subtitle: 'Detect false breakouts & liquidity sweep traps in real-time.',
    description: 'Smart money cannot fill 8-figure orders without counter-liquidity. Inducement is the violent Judas Swing or breakout move designed specifically to trigger retail stop-losses and lure breakout traders before the real move occurs.',
    keyTakeaways: [
      'Distinguishing false breakouts from genuine institutional displacement',
      'Judas Swing execution during London & New York Killzones',
      'Wick rejection vs body close liquidity sweep confirmation'
    ],
    diagramType: 'inducement'
  },
  {
    id: 'mitigation',
    number: '03',
    title: 'Mitigation',
    subtitle: 'Enter on institutional rebalancing & unmitigated Fair Value Gaps.',
    description: 'Once liquidity is swept via inducement, price shifts market structure (MSS). The algorithm returns to mitigate drawdown on institutional orders (FVG / Orderblock) before expanding aggressively to the true target.',
    keyTakeaways: [
      '3-Candle Fair Value Gap (FVG) precise entry triggers',
      'Unmitigated Orderblock re-tests with tight 3-5 pip stop losses',
      'High R:R expansion targets toward opposite liquidity pools'
    ],
    diagramType: 'mitigation'
  }
];

export const FAQS = [
  {
    question: 'How do I contact Sang Trades directly to join the cohort?',
    answer: 'You can contact Sang Trades directly via WhatsApp at +254719250533 for direct onboarding, trade verification, and cohort enrollment details.'
  },
  {
    question: 'Is this mentorship suitable for beginners?',
    answer: 'Yes! The curriculum starts from foundational market structure and advances step-by-step into institutional algorithmic orderflow: Build Up, Inducement, and Mitigation.'
  },
  {
    question: 'How does the 1-on-1 mentorship process work?',
    answer: 'After applying or contacting Sang Trades on WhatsApp (+254719250533), you will receive a direct onboarding strategy session. You get weekly 1-on-1 chart reviews, daily trade journal audits, and direct messaging access to Sang Trades.'
  },
  {
    question: 'What trading markets does the Liquidity Framework apply to?',
    answer: 'The Build Up, Inducement, and Mitigation framework is engineered strictly and exclusively for Forex currency pairs (such as EUR/USD, GBP/USD, AUD/USD, USD/JPY, etc.). It does not trade index futures (NQ, ES), commodities (Gold), or crypto, focusing entirely on institutional Forex orderflow during London and New York Killzones.'
  }
];

