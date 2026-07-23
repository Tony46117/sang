import { MessageSquare, Target } from 'lucide-react';
import { PROTOCOL_RULES, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/landingData';

export const SangProfile = () => {
  return (
    <div id="sang-profile" className="bg-white text-slate-900 relative">
      {/* SECTION 1: Sang Trades Manifesto */}
      <section className="py-20 border-b border-slate-200 relative overflow-hidden">
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply contrast-100"
          style={{ backgroundImage: "url('/background.jpeg')" }}
        />
        <div className="absolute inset-0 bg-white/85 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Photo Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative border-2 border-slate-200 bg-slate-50 p-2 shadow-xl group">
                <img
                  src="/background.jpeg"
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
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp: {WHATSAPP_NUMBER}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-8 relative">
              {/* Watermark */}
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
                For years, retail traders get trapped in false breakouts because they don't
                understand how market maker algorithms operate. Every time you place a stop-loss on
                a retail pattern, the algorithm sweeps it before moving in the intended direction.
              </p>

              <p className="text-slate-700 text-base leading-relaxed font-normal relative z-10">
                Through <strong className="text-slate-900 font-bold">Liquidity Traders by Sang Trades</strong>,
                we strip away retail noise and focus strictly on the 3-step institutional engine:{' '}
                <strong className="text-red-600 font-bold">1. Build Up</strong>,{' '}
                <strong className="text-red-600 font-bold">2. Inducement</strong>, and{' '}
                <strong className="text-red-600 font-bold">3. Mitigation</strong>.
              </p>

              {/* Execution Protocol */}
              <div className="space-y-4 pt-2 relative z-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-600" />
                  <span>SANG'S EXECUTION PROTOCOL</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {PROTOCOL_RULES.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-50 border-2 border-slate-200 shadow-sm space-y-2 hover:border-red-600 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 bg-red-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs font-bold uppercase text-slate-900 tracking-tight">
                          {rule.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal font-medium">{rule.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="p-4 bg-emerald-50 border-2 border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Direct Mentorship Credentials
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Join Cohort via WhatsApp:{' '}
                    <span className="font-mono text-emerald-700">{WHATSAPP_NUMBER}</span>
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest shrink-0 transition-colors shadow-sm"
                >
                  MESSAGE SANG NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
