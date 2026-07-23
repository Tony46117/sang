import { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';
import { FAQS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/landingData';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-b border-slate-200 relative overflow-hidden bg-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply contrast-100"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      />
      <div className="absolute inset-0 bg-white/85 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border-2 border-slate-200 overflow-hidden transition-all shadow-sm hover:border-slate-400"
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
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
                  <div className="px-5 pb-6 sm:px-6 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200 pt-4 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 bg-slate-50 border-2 border-slate-200 space-y-4 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold font-editorial text-slate-900 uppercase tracking-tight">
            READY TO MASTER INSTITUTIONAL FOREX ORDERFLOW?
          </h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto font-medium">
            Message Sang Trades directly on WhatsApp at{' '}
            <strong className="text-emerald-700 font-mono">{WHATSAPP_NUMBER}</strong> or join the
            cohort to secure your slot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#framework"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md shadow-red-600/20 transition-all"
            >
              <span>APPLY FOR MENTORSHIP</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP {WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
