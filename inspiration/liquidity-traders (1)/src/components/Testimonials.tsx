import React from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Quote, Award, TrendingUp, DollarSign } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black font-editorial text-slate-200/50 select-none pointer-events-none -z-10">
            06
          </div>
          <span className="text-xs font-black tracking-[0.2em] text-red-600 uppercase">
            VERIFIED STUDENT PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-editorial text-slate-900 uppercase tracking-tighter">
            REAL FUNDED RESULTS FROM MENTEES
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            See how traders transitioned from losing retail accounts to funded prop firm consistency using Sang's methodology.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border-2 border-slate-900 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                
                {/* Header Profile */}
                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 border-2 border-slate-900 object-cover"
                    />
                    <div>
                      <h3 className="font-black font-editorial text-slate-900 text-base uppercase tracking-tight">{t.name}</h3>
                      <p className="text-[10px] text-slate-500 font-mono font-bold">{t.handle}</p>
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-red-600 shrink-0" />
                </div>

                {/* Funded Highlight Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {t.fundedAmount}
                  </span>
                  <span className="px-2.5 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    {t.returnPercent}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed italic font-medium">
                  "{t.quote}"
                </p>

              </div>

              {/* Footer stats */}
              <div className="pt-4 border-t-2 border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SETUP: <strong className="text-slate-900 font-black uppercase">{t.strategyUsed}</strong></span>
                <span className="text-red-600 font-black uppercase">{t.timeToFunded}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Funded Certificate Simulation Banner */}
        <div className="mt-12 bg-slate-950 p-6 sm:p-8 border-2 border-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-black font-editorial uppercase tracking-tight text-white">
                READY TO PASS YOUR $100K-$300K EVALUATION?
              </h4>
              <p className="text-xs text-slate-300 font-medium">
                Our Prop Firm Accelerator includes specific drawdown protection rules designed for FTMO, FundedNext, and Apex.
              </p>
            </div>
          </div>
          <a
            href="#mentorship"
            className="shrink-0 btn-editorial-red px-6 py-3.5 text-xs font-black uppercase tracking-widest cursor-pointer"
          >
            EXPLORE ACCELERATOR
          </a>
        </div>

      </div>
    </section>
  );
};
