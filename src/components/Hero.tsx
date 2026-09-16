import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { METRICS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/landingData';

export const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-24 bg-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden">
      { }
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-multiply contrast-100"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-slate-50/85 to-slate-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          { }
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            { }
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[11px] font-bold tracking-[0.2em] uppercase shadow-sm">
              <span className="w-2 h-2 bg-white animate-pulse-custom" />
              <span>SANG TRADES LIQUIDITY MASTERY</span>
            </div>

            { }
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-editorial text-slate-900 tracking-tight uppercase leading-[0.95]">
              MASTER THE <br />
              <span className="text-red-600 underline decoration-red-600 decoration-4 underline-offset-6">
                3-STEP
              </span>
              <br />
              FOREX LIQUIDITY MODEL.
            </h1>

            { }
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Stop trading retail patterns. Trade institutional Forex orderflow:{' '}
              <strong className="text-slate-900 font-semibold">
                Build Up → Inducement → Mitigation
              </strong>
              . Sang Trades teaches serious traders how market algorithms sweep liquidity across major
              and minor Forex pairs.
            </p>

            { }
            <div className="grid sm:grid-cols-3 gap-3 pt-1 text-left font-bold text-xs uppercase tracking-wider text-slate-800">
              {['Build Up Liquidity', 'Inducement Sweep', 'Mitigation Entry'].map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-2 p-3 bg-white border-2 border-slate-200 shadow-sm hover:border-red-600 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            { }
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#framework"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-10 py-5 text-xs font-bold tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-red-600/25 transition-all"
              >
                <span>JOIN THE COHORT</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 bg-emerald-600 hover:bg-emerald-500 text-white border-2 border-emerald-600 text-xs font-bold tracking-widest flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WHATSAPP {WHATSAPP_NUMBER}</span>
              </a>
            </div>

            { }
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-600 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sang Trades Direct Contact: WhatsApp {WHATSAPP_NUMBER}</span>
            </div>
          </div>

          { }
          <div className="lg:col-span-5 space-y-6">
            { }
            <div className="relative border-2 border-slate-200 bg-white p-2 shadow-xl group overflow-hidden transition-all duration-300 hover:border-red-500 hover:shadow-2xl">
              <img
                src="/chart%20mastery.png"
                alt="EURUSD Master Liquidity Map - Inducement Sweep Chart"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] shadow-sm"
              />
            </div>

            { }
            <div className="border-2 border-slate-200 p-6 bg-white relative overflow-hidden space-y-4 shadow-lg">
              <div className="absolute -top-8 -right-2 text-8xl font-bold font-editorial text-slate-200 select-none pointer-events-none">
                01
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold uppercase text-slate-900 tracking-tight">
                  THE SANG TRADES TRACK RECORD
                </h3>
                <p className="text-red-600 font-bold uppercase tracking-widest text-xs mt-0.5">
                  INSTITUTIONAL SPECULATION
                </p>
              </div>

              <div className="space-y-3 pt-2 relative z-10 font-mono">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-end justify-between border-b border-slate-200 pb-1.5"
                  >
                    <span className="text-xs font-bold uppercase text-slate-500">
                      {metric.label}
                    </span>
                    <span
                      className={`${
                        metric.label.includes('WhatsApp')
                          ? 'text-sm font-bold text-emerald-600 tracking-wider'
                          : 'text-2xl font-bold text-slate-900 italic tracking-tight'
                      }`}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
