import React from 'react';
import { MENTORSHIP_TIERS } from '../data/landingData';
import { Check, Star, ArrowRight, ShieldCheck } from 'lucide-react';

interface MentorshipTiersProps {
  onOpenApplication: (track?: string) => void;
}

export const MentorshipTiers: React.FC<MentorshipTiersProps> = ({ onOpenApplication }) => {
  return (
    <section id="mentorship" className="py-20 bg-white border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        { }
        <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black font-editorial text-slate-100 select-none pointer-events-none -z-10">
            05
          </div>
          <span className="text-xs font-black tracking-[0.2em] text-red-600 uppercase">
            MENTORSHIP PROGRAM TRACKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-editorial text-slate-900 uppercase tracking-tighter">
            CHOOSE YOUR MENTORSHIP TRACK
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Whether you want self-paced group learning or direct 1-on-1 trade reviews with Sang, we have a clear path to capital funding.
          </p>
        </div>

        { }
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {MENTORSHIP_TIERS.map((tier) => {
            const isFeatured = tier.recommended;

            return (
              <div
                key={tier.id}
                className={`p-8 flex flex-col justify-between relative transition-all border-2 ${
                  isFeatured
                    ? 'bg-slate-950 text-white border-red-600 shadow-2xl z-10'
                    : 'bg-white text-slate-900 border-slate-900 shadow-sm'
                }`}
              >
                { }
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 flex items-center gap-1.5 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>MOST POPULAR / DIRECT SANG ACCESS</span>
                  </div>
                )}

                <div className="space-y-6">
                  
                  { }
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isFeatured ? 'text-red-500' : 'text-red-600'}`}>
                      {tier.badge}
                    </span>
                    <h3 className={`text-2xl font-black font-editorial uppercase tracking-tight mt-1 ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {tier.title}
                    </h3>
                    <p className={`text-xs mt-2 leading-relaxed font-medium ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                      {tier.description}
                    </p>
                  </div>

                  { }
                  <div className={`border-y py-4 ${isFeatured ? 'border-slate-800' : 'border-slate-200'}`}>
                    <div className="flex items-baseline gap-2 font-editorial">
                      <span className={`text-4xl sm:text-5xl font-black ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                        {tier.price}
                      </span>
                      <span className={`text-xs font-bold font-mono uppercase ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                        / {tier.period}
                      </span>
                    </div>
                  </div>

                  { }
                  <div className="space-y-3">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                      INCLUDED CURRICULUM & ACCESS:
                    </p>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs font-medium">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? 'text-red-500' : 'text-red-600'}`} />
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-800'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                { }
                <div className="pt-8 space-y-2">
                  <button
                    onClick={() => onOpenApplication(tier.id)}
                    className={`w-full ${isFeatured ? 'btn-editorial-red' : 'btn-editorial-dark'} py-4 px-6 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className={`text-[10px] text-center font-mono font-bold uppercase ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                    Application screening required
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        { }
        <div className="mt-16 p-6 sm:p-8 bg-slate-900 text-white border-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-black font-editorial uppercase tracking-tight text-white">
                THE SANG TRADES ACCOUNTABILITY GUARANTEE
              </h4>
              <p className="text-xs text-slate-300 font-medium max-w-2xl">
                Submit your weekly journal for 60 days. If you don't pass your funded evaluation using our mechanical rules, Sang works with you 1-on-1 until you do.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenApplication()}
            className="shrink-0 btn-editorial-red px-6 py-3 text-xs font-black uppercase tracking-widest cursor-pointer"
          >
            APPLY NOW
          </button>
        </div>

      </div>
    </section>
  );
};
