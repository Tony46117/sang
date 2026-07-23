import React, { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export const InteractiveCalculator: React.FC = () => {
  const [accountSize, setAccountSize] = useState<number>(100000);
  const [riskPercent, setRiskPercent] = useState<number>(1.0);
  const [rrRatio, setRrRatio] = useState<number>(3.5);
  const [winRate, setWinRate] = useState<number>(60);
  const [tradesPerMonth, setTradesPerMonth] = useState<number>(16);

  // Calculations
  const riskAmount = (accountSize * riskPercent) / 100;
  const targetProfitAmount = riskAmount * rrRatio;
  
  // Expected value per trade = (WinRate * TargetProfit) - (LossRate * RiskAmount)
  const lossRate = (100 - winRate) / 100;
  const winRateDec = winRate / 100;
  const expectedValuePerTrade = (winRateDec * targetProfitAmount) - (lossRate * riskAmount);
  
  const projectedMonthlyGain = expectedValuePerTrade * tradesPerMonth;
  const projectedMonthlyPercent = ((projectedMonthlyGain) / accountSize) * 100;

  const quickAccountSizes = [25000, 50000, 100000, 200000, 300000];

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black font-editorial text-slate-200/50 select-none pointer-events-none -z-10">
            04
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em]">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE POSITION SIZER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-editorial text-slate-900 uppercase tracking-tighter">
            INSTITUTIONAL RISK & EXPECTANCY SIMULATOR
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            See how mechanical position sizing and high R:R setups create mathematical compounding without over-leveraging.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border-2 border-slate-900 space-y-6">
            
            {/* Account Size Select */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex justify-between">
                <span>Account Balance</span>
                <span className="text-red-600 font-mono font-black text-sm">${accountSize.toLocaleString()}</span>
              </label>
              
              <div className="flex flex-wrap gap-2">
                {quickAccountSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setAccountSize(size)}
                    className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${
                      accountSize === size
                        ? 'bg-red-600 text-white border-slate-900'
                        : 'bg-white text-slate-900 border-slate-300 hover:border-slate-900'
                    }`}
                  >
                    ${(size / 1000)}k
                  </button>
                ))}
              </div>

              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={accountSize}
                onChange={(e) => setAccountSize(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            {/* Risk % Per Trade */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex justify-between">
                <span>Risk Per Setup (%)</span>
                <span className="text-red-600 font-mono font-black text-sm">{riskPercent}% (${riskAmount.toLocaleString()})</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[0.25, 0.5, 1.0, 2.0].map((val) => (
                  <button
                    key={val}
                    onClick={() => setRiskPercent(val)}
                    className={`py-2 text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${
                      riskPercent === val
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-900 border-slate-300 hover:border-slate-900'
                    }`}
                  >
                    {val}%
                  </button>
                ))}
              </div>
            </div>

            {/* Risk-to-Reward Ratio Slider */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex justify-between">
                <span>Target Risk-to-Reward (R:R)</span>
                <span className="text-red-600 font-mono font-black text-sm">1 : {rrRatio}</span>
              </label>
              <input
                type="range"
                min="1.5"
                max="8.0"
                step="0.5"
                value={rrRatio}
                onChange={(e) => setRrRatio(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold uppercase">
                <span>1:1.5 (Conservative)</span>
                <span>1:3.5 (Sang Standard)</span>
                <span>1:8.0 (Sniper)</span>
              </div>
            </div>

            {/* Win Rate % & Monthly Trades */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-900">
                  Estimated Win Rate ({winRate}%)
                </label>
                <input
                  type="range"
                  min="30"
                  max="85"
                  step="5"
                  value={winRate}
                  onChange={(e) => setWinRate(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-900">
                  Monthly Trades ({tradesPerMonth})
                </label>
                <input
                  type="range"
                  min="4"
                  max="40"
                  step="2"
                  value={tradesPerMonth}
                  onChange={(e) => setTradesPerMonth(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Results Visualizer Column */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 border-2 border-slate-900 text-white space-y-6 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono text-red-500 uppercase font-black tracking-[0.2em]">
                SIMULATED METRICS OUTPUT
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                SANG TRADES ALGO MODEL
              </span>
            </div>

            {/* Top Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-slate-900 p-4 border border-slate-800 space-y-1">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Risk Per Trade</p>
                <p className="text-2xl font-black font-editorial text-red-500">
                  -${riskAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-[10px] text-slate-500 font-mono">{riskPercent}% of capital</p>
              </div>

              <div className="bg-slate-900 p-4 border border-slate-800 space-y-1">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Target Profit / Trade</p>
                <p className="text-2xl font-black font-editorial text-emerald-400">
                  +${targetProfitAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-[10px] text-slate-500 font-mono">1:{rrRatio} R:R Reward</p>
              </div>

            </div>

            {/* Projected Monthly Box */}
            <div className="bg-slate-900 p-6 border-2 border-red-600 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-black text-red-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  PROJECTED MONTHLY GAIN ({tradesPerMonth} TRADES)
                </span>
                <span className="font-mono bg-red-600 px-2 py-0.5 text-white">
                  {winRate}% WIN RATE
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <p className="text-3xl sm:text-4xl font-black font-editorial text-white uppercase tracking-tight">
                  +${projectedMonthlyGain.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-2xl font-black font-editorial text-emerald-400">
                  +{projectedMonthlyPercent.toFixed(1)}%
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-normal pt-2 border-t border-slate-800 font-medium">
                Notice: With a modest {winRate}% win rate and 1:{rrRatio} R:R, you do NOT need high win rates or dangerous 100x leverage. System discipline creates consistent equity curves.
              </p>
            </div>

            {/* Visual Trade Risk/Reward Box */}
            <div className="space-y-2 pt-2">
              <p className="text-[10px] font-mono text-slate-400 uppercase font-bold flex items-center justify-between">
                <span>VISUAL POSITION RISK / REWARD BREAKDOWN</span>
                <span className="text-red-500">1:{rrRatio} RATIO</span>
              </p>

              <div className="w-full border-2 border-slate-800 flex h-12 text-xs font-black font-mono uppercase">
                {/* Red Risk Bar */}
                <div 
                  className="bg-red-600 text-white flex items-center justify-center p-2 transition-all duration-300"
                  style={{ width: `${(1 / (1 + rrRatio)) * 100}%` }}
                >
                  SL (-{riskPercent}%)
                </div>
                {/* Green Target Bar */}
                <div 
                  className="bg-emerald-600 text-white flex items-center justify-center p-2 transition-all duration-300"
                  style={{ width: `${(rrRatio / (1 + rrRatio)) * 100}%` }}
                >
                  TP (+{(riskPercent * rrRatio).toFixed(1)}%)
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
