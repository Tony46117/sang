import React from 'react';

export const EurusdMasterMapChart: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 text-slate-100 rounded-lg overflow-hidden border border-slate-800 shadow-2xl font-mono select-none">
      { }
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold text-white tracking-wider text-sm">EURUSD</span>
          </div>
          <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded text-[11px] font-semibold border border-slate-700">15m</span>
          <span className="text-slate-400 hidden sm:inline text-[11px]">SANG TRADES MASTER LIQUIDITY MAP</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-slate-400">O: <span className="text-slate-200">1.08420</span></span>
            <span className="text-slate-400">H: <span className="text-red-400 font-bold">1.08535</span></span>
            <span className="text-slate-400">L: <span className="text-emerald-400 font-bold">1.08180</span></span>
            <span className="text-slate-400">C: <span className="text-emerald-400">1.08210</span></span>
          </div>
          <span className="px-2 py-0.5 bg-red-950/80 text-red-400 border border-red-800/60 rounded font-bold uppercase tracking-wider text-[10px]">
            BSL SWEEP
          </span>
        </div>
      </div>

      { }
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] bg-[#0b0e14] overflow-hidden p-2">
        <svg viewBox="0 0 800 420" className="w-full h-full text-slate-400">
          <defs>
            { }
            <linearGradient id="obGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
            </linearGradient>

            { }
            <linearGradient id="fvgGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
            </linearGradient>

            { }
            <linearGradient id="sslGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          { }
          <g stroke="#1e293b" strokeWidth="0.75" strokeDasharray="3 3">
            <line x1="0" y1="60" x2="730" y2="60" />
            <line x1="0" y1="120" x2="730" y2="120" />
            <line x1="0" y1="180" x2="730" y2="180" />
            <line x1="0" y1="240" x2="730" y2="240" />
            <line x1="0" y1="300" x2="730" y2="300" />
            <line x1="0" y1="360" x2="730" y2="360" />

            <line x1="100" y1="0" x2="100" y2="400" />
            <line x1="250" y1="0" x2="250" y2="400" />
            <line x1="400" y1="0" x2="400" y2="400" />
            <line x1="550" y1="0" x2="550" y2="400" />
            <line x1="700" y1="0" x2="700" y2="400" />
          </g>

          { }
          <g transform="translate(730, 0)">
            <rect x="0" y="0" width="70" height="420" fill="#0f172a" opacity="0.6" />
            <line x1="0" y1="0" x2="0" y2="420" stroke="#334155" strokeWidth="1" />
            <text x="10" y="64" fill="#94a3b8" fontSize="10">1.08550</text>
            <text x="10" y="104" fill="#ef4444" fontSize="10" fontWeight="bold">1.08520</text>
            <text x="10" y="184" fill="#f59e0b" fontSize="10">1.08440</text>
            <text x="10" y="244" fill="#94a3b8" fontSize="10">1.08350</text>
            <text x="10" y="344" fill="#10b981" fontSize="10" fontWeight="bold">1.08180</text>
          </g>

          { }
          <g>
            <line x1="120" y1="100" x2="720" y2="100" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5 3" />
            <rect x="130" y="82" width="220" height="16" rx="3" fill="#450a0a" stroke="#dc2626" strokeWidth="1" />
            <text x="140" y="94" fill="#fca5a5" fontSize="10" fontWeight="bold" letterSpacing="0.05em">
              BSL — EQUAL HIGHS (RETAIL STOPS)
            </text>
          </g>

          { }
          <rect x="360" y="65" width="280" height="45" fill="url(#obGradient)" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
          <text x="370" y="80" fill="#f87171" fontSize="9" fontWeight="bold">
            INSTITUTIONAL ORDER BLOCK (OB)
          </text>

          { }
          { }
          { }
          <line x1="80" y1="210" x2="80" y2="280" stroke="#10b981" strokeWidth="1" />
          <rect x="75" y="230" width="10" height="35" fill="#10b981" />

          { }
          <line x1="110" y1="230" x2="110" y2="295" stroke="#ef4444" strokeWidth="1" />
          <rect x="105" y="245" width="10" height="30" fill="#ef4444" />

          { }
          <line x1="140" y1="98" x2="140" y2="260" stroke="#10b981" strokeWidth="1" />
          <rect x="135" y="105" width="10" height="110" fill="#10b981" />

          { }
          <line x1="170" y1="105" x2="170" y2="220" stroke="#ef4444" strokeWidth="1" />
          <rect x="165" y="115" width="10" height="70" fill="#ef4444" />

          { }
          <line x1="200" y1="99" x2="200" y2="200" stroke="#10b981" strokeWidth="1" />
          <rect x="195" y="108" width="10" height="60" fill="#10b981" />

          { }
          <line x1="230" y1="120" x2="230" y2="210" stroke="#ef4444" strokeWidth="1" />
          <rect x="225" y="130" width="10" height="50" fill="#ef4444" />

          <line x1="260" y1="130" x2="260" y2="230" stroke="#10b981" strokeWidth="1" />
          <rect x="255" y="145" width="10" height="55" fill="#10b981" />

          { }
          { }
          <line x1="320" y1="65" x2="320" y2="210" stroke="#f59e0b" strokeWidth="2" />
          <rect x="314" y="110" width="12" height="75" fill="#f59e0b" />

          { }
          <path d="M 280 110 Q 320 40 350 110" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="350,110 345,102 355,102" fill="#f59e0b" />
          <g transform="translate(260, 35)">
            <rect x="0" y="0" width="150" height="22" rx="4" fill="#78350f" stroke="#f59e0b" strokeWidth="1" />
            <text x="10" y="15" fill="#fef08a" fontSize="10" fontWeight="bold">
              ⚡ LIQUIDITY GRAB / SWEEP
            </text>
          </g>

          { }
          { }
          <line x1="360" y1="100" x2="360" y2="270" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="353" y="125" width="14" height="130" fill="#ef4444" />

          { }
          <line x1="390" y1="240" x2="390" y2="310" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="383" y="250" width="14" height="50" fill="#ef4444" />

          { }
          <line x1="310" y1="210" x2="420" y2="210" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />
          <text x="425" y="214" fill="#f43f5e" fontSize="9" fontWeight="bold">CHoCH (Market Structure Shift)</text>

          { }
          <rect x="420" y="160" width="130" height="35" fill="url(#fvgGradient)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
          <text x="430" y="180" fill="#fbbf24" fontSize="9" fontWeight="bold">FAIR VALUE GAP (FVG)</text>

          { }
          <line x1="470" y1="155" x2="470" y2="280" stroke="#10b981" strokeWidth="1" />
          <rect x="463" y="170" width="14" height="80" fill="#10b981" />

          { }
          <g transform="translate(490, 130)">
            <rect x="0" y="0" width="125" height="26" rx="4" fill="#065f46" stroke="#10b981" strokeWidth="1" />
            <text x="10" y="17" fill="#a7f3d0" fontSize="10" fontWeight="bold">
              🎯 SANG ENTRY (1.08480)
            </text>
            <line x1="0" y1="13" x2="-15" y2="35" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" />
          </g>

          { }
          { }
          <line x1="520" y1="230" x2="520" y2="330" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="513" y="240" width="14" height="80" fill="#ef4444" />

          { }
          <line x1="560" y1="300" x2="560" y2="365" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="553" y="310" width="14" height="48" fill="#ef4444" />

          { }
          <line x1="600" y1="330" x2="600" y2="385" stroke="#ef4444" strokeWidth="2" />
          <rect x="593" y="340" width="14" height="40" fill="#ef4444" />

          { }
          <g>
            <line x1="100" y1="340" x2="720" y2="340" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" />
            <rect x="130" y="348" width="240" height="18" rx="3" fill="#022c22" stroke="#059669" strokeWidth="1" />
            <text x="140" y="361" fill="#6ee7b7" fontSize="10" fontWeight="bold" letterSpacing="0.05em">
              SSL — EQUAL LOWS TARGET (+4.5R HIT)
            </text>
          </g>

          { }
          <g transform="translate(635, 170)">
            <rect x="0" y="0" width="85" height="140" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            { }
            <rect x="5" y="5" width="75" height="30" fill="#7f1d1d" opacity="0.6" stroke="#ef4444" strokeWidth="0.5" />
            <text x="12" y="24" fill="#fca5a5" fontSize="9" fontWeight="bold">SL: 12 Pips</text>
            { }
            <rect x="5" y="38" width="75" height="97" fill="#064e3b" opacity="0.6" stroke="#10b981" strokeWidth="0.5" />
            <text x="12" y="70" fill="#a7f3d0" fontSize="10" fontWeight="bold">TP: 54 Pips</text>
            <text x="12" y="90" fill="#34d399" fontSize="11" fontWeight="bold">R:R 1 : 4.5</text>
          </g>
        </svg>

        { }
        <div className="absolute bottom-3 left-3 bg-slate-900/95 border border-slate-700/80 backdrop-blur px-3 py-1.5 rounded flex items-center gap-2 text-[11px] shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-slate-300 font-semibold">100% Code-Rendered Vector Map</span>
          <span className="text-slate-500">|</span>
          <span className="text-amber-400 font-bold">Sang Trades Liquidity Framework</span>
        </div>
      </div>
    </div>
  );
};

export default EurusdMasterMapChart;
