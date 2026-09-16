import React, { useState } from 'react';
import { Target, MessageSquare, Flame, CheckCircle2, ChevronDown, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import sangPhoto from '../assets/images/sang_trades_photo.jpeg';
import { STRATEGY_PILLARS, FAQS } from '../data/landingData';

interface SangProfileProps {
  onOpenApplication: (track?: string) => void;
}

export const SangProfile: React.FC<SangProfileProps> = ({ onOpenApplication }) => {
  const [activePillarId, setActivePillarId] = useState<string>('buildup');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const activePillar = STRATEGY_PILLARS.find(p => p.id === activePillarId) || STRATEGY_PILLARS[0];

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const coreRules = [
    {
      title: 'Build Up Analysis',
      desc: 'Identify where retail traders build liquidity pools and trendlines before any execution.'
    },
    {
      title: 'Inducement Confirmation',
      desc: 'Only enter after a liquidity sweep or Judas Swing clears retail stop-loss orders.'
    },
    {
      title: 'Mitigation Rebalance Entry',
      desc: 'Execute exclusively on returns to unmitigated Fair Value Gaps with tight 3-5 pip stops.'
    },
    {
      title: 'Strict 1% Risk & Killzone Execution',
      desc: 'Trade London & New York session volume windows only. Preserving capital is priority number one.'
    }
  ];

  return (
    <div id="sang-profile" className="bg-white text-slate-900 relative">
      
      { }
      <section className="py-20 border-b border-slate-200 relative overflow-hidden">
        { }
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply contrast-100"
          style={{ backgroundImage: `url('/forex_bg.jpeg')` }}
        />
        <div className="absolute inset-0 bg-white/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            { }
            <div className="lg:col-span-5 space-y-4">
              <div className="relative border-2 border-slate-200 bg-slate-50 p-2 shadow-xl group">
                <img
                  src={sangPhoto}
                  onError={(e) => { e.currentTarget.src = '/sang_trades_photo.jpeg'; }}
                  alt="Sang Trades - Founder & Lead Mentor"
                  className="w-full h-auto object-cover aspect-square hover:brightness-105 transition-all duration-500 shadow-sm"
                />
                <div className="bg-slate-900 p-5 border-t-2 border-slate-800 text-white space-y-1">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-red-400 uppercase font-bold">
                    FOUNDER & HEAD SPECULATOR
                  </span>
                  <h3 className="text-3xl font-bold font-editorial text-white uppercase tracking-tight">
                    SANG TRADES
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Institutional Orderflow Specialist & Mentorship Founder
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/254719250533"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp: +254719250533</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            { }
            <div className="lg:col-span-7 space-y-8 relative">
              
              { }
              <div className="absolute -top-10 right-0 text-9xl font-bold font-editorial text-slate-100 select-none pointer-events-none hidden sm:block">
                01
              </div>

              <div className="space-y-3 relative z-10">
                <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
                  THE SANG TRADES MANIFESTO
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-slate-900 uppercase tracking-tight leading-tight">
                  "TRADING ISN'T PREDICTING PRICE. IT'S READING FOREX LIQUIDITY DELIVERY."
                </h2>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium relative z-10">
                For years, retail traders get trapped in false breakouts because they don't understand how market maker algorithms operate. Every time you place a stop-loss on a retail pattern, the algorithm sweeps it before moving in the intended direction.
              </p>

              <p className="text-slate-700 text-base leading-relaxed font-normal relative z-10">
                Through <strong className="text-slate-900 font-bold">Liquidity Traders by Sang Trades</strong>, we strip away retail noise and focus strictly on the 3-step institutional engine: <strong className="text-red-600 font-bold">1. Build Up</strong>, <strong className="text-red-600 font-bold">2. Inducement</strong>, and <strong className="text-red-600 font-bold">3. Mitigation</strong>.
              </p>

              {/* Execution Protocol Grid */}
              <div className="space-y-4 pt-2 relative z-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-600" />
                  <span>SANG'S EXECUTION PROTOCOL</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {coreRules.map((rule, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border-2 border-slate-200 shadow-sm space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 bg-red-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-bold uppercase text-slate-900 tracking-tight">{rule.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal font-medium">
                        {rule.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              { }
              <div className="p-4 bg-emerald-50 border-2 border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Direct Mentorship Credentials</p>
                  <p className="text-sm font-bold text-slate-900">Join Cohort via WhatsApp: <span className="font-mono text-emerald-700">+254719250533</span></p>
                </div>
                <a
                  href="https://wa.me/254719250533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest cursor-pointer shrink-0 transition-colors shadow-sm"
                >
                  MESSAGE SANG NOW
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      { }
      <section id="framework" className="py-20 border-b border-slate-200 relative overflow-hidden bg-slate-50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply contrast-100"
          style={{ backgroundImage: `url('/forex_bg.jpeg')` }}
        />
        <div className="absolute inset-0 bg-slate-50/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          { }
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-bold font-editorial text-slate-200 select-none pointer-events-none -z-10">
              02
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase flex items-center justify-center gap-2">
              <Flame className="w-4 h-4 text-red-600" />
              <span>INSTITUTIONAL FOREX ORDERFLOW MECHANICS</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-slate-900 uppercase tracking-tight">
              THE 3 STEPS: BUILD UP → INDUCEMENT → MITIGATION
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              How institutional market maker algorithms engineer liquidity and deliver price across global Forex pairs.
            </p>
          </div>

          { }
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {STRATEGY_PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-6 text-left border-2 transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-red-600 text-white border-red-600 shadow-md scale-[1.02]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:bg-slate-100 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold font-mono uppercase tracking-[0.2em] ${isActive ? 'text-white' : 'text-red-600'}`}>
                      STEP 0{pillar.number}
                    </span>
                    {isActive && (
                      <span className="px-2 py-0.5 bg-slate-900 text-white text-[9px] font-bold font-mono uppercase">ACTIVE</span>
                    )}
                  </div>
                  <span className="font-bold text-xl uppercase tracking-tight block font-editorial">
                    {pillar.title}
                  </span>
                  <span className={`text-xs mt-1 block font-medium line-clamp-1 ${isActive ? 'text-slate-100' : 'text-slate-600'}`}>
                    {pillar.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          { }
          <div className="bg-white border-2 border-slate-200 p-6 sm:p-10 text-slate-900 shadow-xl relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              { }
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-red-600 tracking-[0.2em] uppercase font-bold">
                    PHASE 0{activePillar.number} EXECUTION
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold font-editorial text-slate-900 uppercase tracking-tight mt-1">
                    {activePillar.title}
                  </h3>
                  <p className="text-xs text-red-600 font-bold uppercase tracking-widest mt-1">
                    {activePillar.subtitle}
                  </p>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {activePillar.description}
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    KEY MECHANICS & EXECUTION RULES
                  </p>
                  {activePillar.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              { }
              <div className="lg:col-span-6 bg-slate-950 p-6 border-2 border-slate-800 relative min-h-[340px] flex flex-col justify-between">
                
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="flex items-center gap-2 font-bold uppercase text-red-500">
                    <span className="w-2 h-2 bg-red-600 animate-pulse"></span>
                    STEP 0{activePillar.number}: {activePillar.title.toUpperCase()} DIAGRAM
                  </span>
                  <span className="text-slate-500 font-bold">ALGORITHMIC MODEL</span>
                </div>

                { }
                <div className="py-6 flex items-center justify-center">
                  {activePillar.id === 'buildup' && (
                    <svg className="w-full h-52" viewBox="0 0 400 200" fill="none">
                      <line x1="30" y1="50" x2="350" y2="50" stroke="#ef4444" strokeDasharray="4 4" strokeWidth="1.5" />
                      <text x="35" y="42" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">BUYSIDE LIQUIDITY POOL (BSL / STOPS)</text>

                      <path d="M 40 120 L 80 65 L 110 110 L 150 62 L 180 115 L 220 58 L 250 110 L 290 60" stroke="#38bdf8" strokeWidth="2" fill="none" />
                      
                      <line x1="40" y1="130" x2="290" y2="120" stroke="#f59e0b" strokeDasharray="3 3" strokeWidth="1.5" />
                      <text x="120" y="145" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">RETAIL TRENDLINE TRAP (SSL)</text>

                      <rect x="290" y="52" width="10" height="60" fill="#22c55e" />
                      <text x="305" y="85" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">BUILD UP COMPLETE</text>
                    </svg>
                  )}

                  {activePillar.id === 'inducement' && (
                    <svg className="w-full h-52" viewBox="0 0 400 200" fill="none">
                      <line x1="30" y1="70" x2="260" y2="70" stroke="#ef4444" strokeDasharray="4 4" strokeWidth="1.5" />
                      <text x="35" y="62" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">EQUAL HIGHS / LIQUIDITY POOL</text>
                      
                      <rect x="60" y="90" width="12" height="40" fill="#22c55e" />
                      <line x1="66" y1="80" x2="66" y2="140" stroke="#22c55e" strokeWidth="2" />

                      <rect x="100" y="80" width="12" height="50" fill="#ef4444" />
                      <line x1="106" y1="72" x2="106" y2="145" stroke="#ef4444" strokeWidth="2" />

                      <line x1="160" y1="20" x2="160" y2="160" stroke="#ef4444" strokeWidth="3" />
                      <rect x="154" y="80" width="12" height="70" fill="#ef4444" />
                      <text x="175" y="30" fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="sans-serif">⚡ INDUCEMENT / JUDAS SWEEP!</text>
                      <text x="175" y="45" fill="#a1a1aa" fontSize="9" fontFamily="monospace">(Retail stops cleared)</text>

                      <rect x="210" y="100" width="12" height="60" fill="#ef4444" />
                      <line x1="216" y1="95" x2="216" y2="170" stroke="#ef4444" strokeWidth="2" />

                      <rect x="250" y="130" width="12" height="45" fill="#ef4444" />
                      <line x1="256" y1="125" x2="256" y2="185" stroke="#ef4444" strokeWidth="2" />
                    </svg>
                  )}

                  {activePillar.id === 'mitigation' && (
                    <svg className="w-full h-52" viewBox="0 0 400 200" fill="none">
                      <rect x="50" y="110" width="16" height="40" fill="#22c55e" />
                      <line x1="58" y1="95" x2="58" y2="160" stroke="#22c55e" strokeWidth="2" />
                      
                      <rect x="100" y="40" width="16" height="100" fill="#22c55e" />
                      <line x1="108" y1="20" x2="108" y2="155" stroke="#22c55e" strokeWidth="2.5" />

                      <rect x="70" y="60" width="120" height="35" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
                      <text x="195" y="80" fill="#ef4444" fontSize="10" fontWeight="bold">UNMITIGATED FVG / ORDERBLOCK</text>

                      <path d="M 210 110 Q 180 80 140 75" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                      <text x="220" y="115" fill="#38bdf8" fontSize="11" fontWeight="bold">MITIGATION ENTRY (1:5+ R:R)</text>

                      <path d="M 140 75 L 320 15" stroke="#22c55e" strokeWidth="3" fill="none" />
                      <text x="280" y="40" fill="#22c55e" fontSize="11" fontWeight="bold">EXPANSION TO TARGET</text>
                    </svg>
                  )}
                </div>

                <div className="bg-slate-900 p-3 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Rule: Mechanical Non-Discretionary Orderflow</span>
                  <span className="text-red-500 font-bold uppercase">Sang Trades Method</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      { }
      <section id="faq" className="py-20 border-b border-slate-200 relative overflow-hidden bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply contrast-100"
          style={{ backgroundImage: `url('/forex_bg.jpeg')` }}
        />
        <div className="absolute inset-0 bg-white/85 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          { }
          <div className="relative text-center space-y-4 mb-16">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-bold font-editorial text-slate-100 select-none pointer-events-none -z-10">
              03
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-slate-900 uppercase tracking-tight">
              EVERYTHING YOU NEED TO KNOW
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              Have questions before applying for mentorship with Sang Trades? Here are exact answers.
            </p>
          </div>

          { }
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;

              return (
                <div
                  key={idx}
                  className="bg-slate-50 border-2 border-slate-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold font-editorial text-slate-900 hover:text-red-600 uppercase tracking-tight text-base sm:text-lg cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-red-600 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-red-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200 pt-4 font-medium pl-13">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          { }
          <div className="mt-12 text-center p-8 bg-slate-50 border-2 border-slate-200 space-y-4 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold font-editorial text-slate-900 uppercase tracking-tight">
              READY TO MASTER INSTITUTIONAL FOREX ORDERFLOW?
            </h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto font-medium">
              Message Sang Trades directly on WhatsApp at <strong className="text-emerald-700 font-mono">+254719250533</strong> or submit your application to secure your cohort slot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenApplication()}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md shadow-red-600/20 transition-all"
              >
                <span>APPLY FOR MENTORSHIP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/254719250533"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP +254719250533</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
