import { useState } from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';
import { STRATEGY_PILLARS } from '../data/landingData';

const BuildUpDiagram = () => (
  <svg className="w-full h-52" viewBox="0 0 400 200" fill="none">
    <line x1="30" y1="50" x2="350" y2="50" stroke="#ef4444" strokeDasharray="4 4" strokeWidth="1.5" />
    <text x="35" y="42" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">BUYSIDE LIQUIDITY POOL (BSL / STOPS)</text>
    <path d="M 40 120 L 80 65 L 110 110 L 150 62 L 180 115 L 220 58 L 250 110 L 290 60" stroke="#38bdf8" strokeWidth="2" fill="none" />
    <line x1="40" y1="130" x2="290" y2="120" stroke="#f59e0b" strokeDasharray="3 3" strokeWidth="1.5" />
    <text x="120" y="145" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">RETAIL TRENDLINE TRAP (SSL)</text>
    <rect x="290" y="52" width="10" height="60" fill="#22c55e" />
    <text x="305" y="85" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">BUILD UP COMPLETE</text>
  </svg>
);

const InducementDiagram = () => (
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
);

const MitigationDiagram = () => (
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
);

const diagramMap: Record<string, React.FC> = {
  buildup: BuildUpDiagram,
  inducement: InducementDiagram,
  mitigation: MitigationDiagram,
};

export const FrameworkSection = () => {
  const [activePillarId, setActivePillarId] = useState('buildup');
  const activePillar = STRATEGY_PILLARS.find((p) => p.id === activePillarId) || STRATEGY_PILLARS[0];
  const DiagramComponent = diagramMap[activePillar.diagramType];

  return (
    <section id="framework" className="py-20 border-b border-slate-200 relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply contrast-100"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      />
      <div className="absolute inset-0 bg-slate-50/85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            How institutional market maker algorithms engineer liquidity and deliver price across
            global Forex pairs.
          </p>
        </div>

        {/* Step Tabs */}
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
                  <span
                    className={`text-[10px] font-bold font-mono uppercase tracking-[0.2em] ${
                      isActive ? 'text-white' : 'text-red-600'
                    }`}
                  >
                    STEP 0{pillar.number}
                  </span>
                  {isActive && (
                    <span className="px-2 py-0.5 bg-slate-900 text-white text-[9px] font-bold font-mono uppercase">
                      ACTIVE
                    </span>
                  )}
                </div>
                <span className="font-bold text-xl uppercase tracking-tight block font-editorial">
                  {pillar.title}
                </span>
                <span
                  className={`text-xs mt-1 block font-medium line-clamp-1 ${
                    isActive ? 'text-slate-100' : 'text-slate-600'
                  }`}
                >
                  {pillar.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        <div className="bg-white border-2 border-slate-200 p-6 sm:p-10 text-slate-900 shadow-xl relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Text */}
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
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SVG Diagram */}
            <div className="lg:col-span-6 bg-slate-950 p-6 border-2 border-slate-800 relative min-h-[340px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-3">
                <span className="flex items-center gap-2 font-bold uppercase text-red-500">
                  <span className="w-2 h-2 bg-red-600 animate-pulse-custom" />
                  STEP 0{activePillar.number}: {activePillar.title.toUpperCase()} DIAGRAM
                </span>
                <span className="text-slate-500 font-bold">ALGORITHMIC MODEL</span>
              </div>

              <div className="py-6 flex items-center justify-center">
                {DiagramComponent && <DiagramComponent />}
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
  );
};
