import { ShieldAlert, MessageSquare } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/landingData';

export const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        { }
        <div className="grid md:grid-cols-12 gap-8 items-start">
          { }
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-none border border-slate-200 bg-white p-1 shadow-sm">
                <img
                  src="/logo.png"
                  alt="Liquidity Traders Logo"
                  className="h-10 w-auto max-w-[120px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial font-bold text-xl text-slate-900 tracking-tight uppercase">
                  LIQUIDITY TRADERS
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-red-600 uppercase">
                  BY SANG TRADES
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm font-medium">
              Institutional orderflow mentorship and algorithmic liquidity framework. Teaching serious
              traders how smart money delivers price across global financial markets.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>
          </div>

          { }
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-bold uppercase tracking-wider">
            <div className="space-y-3">
              <p className="font-bold text-red-600 tracking-[0.2em] text-[10px]">3-STEP METHODOLOGY</p>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><a href="#framework" className="hover:text-red-600 transition-colors">1. Build Up Phase</a></li>
                <li><a href="#framework" className="hover:text-red-600 transition-colors">2. Inducement Sweep</a></li>
                <li><a href="#framework" className="hover:text-red-600 transition-colors">3. Mitigation Entry</a></li>
                <li><a href="#faq" className="hover:text-red-600 transition-colors">Frequently Asked Questions</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-red-600 tracking-[0.2em] text-[10px]">MENTORSHIP & SANG</p>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><a href="#sang-profile" className="hover:text-red-600 transition-colors">Sang Trades Profile</a></li>
                <li><a href="#sang-profile" className="hover:text-red-600 transition-colors">Execution Manifesto</a></li>
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 text-emerald-700 font-bold transition-colors">WhatsApp Contact</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-red-600 tracking-[0.2em] text-[10px]">COMMUNITY & CONTACT</p>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">WhatsApp {WHATSAPP_NUMBER}</a></li>
              </ul>
            </div>
          </div>
        </div>

        { }
        <div className="p-4 bg-white border-2 border-slate-200 text-[11px] text-slate-600 space-y-2 leading-relaxed font-medium shadow-sm">
          <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-[0.2em] text-[10px]">
            <ShieldAlert className="w-4 h-4" />
            <span>RISK & FINANCIAL DISCLAIMER</span>
          </div>
          <p>
            Trading foreign exchange, futures, stocks, or cryptocurrencies on margin carries a high
            level of risk and may not be suitable for all investors. Past performance of Sang Trades
            or mentored students is not indicative of future results. The material presented on
            Liquidity Traders is strictly for educational purposes and does not constitute financial
            or investment advice.
          </p>
        </div>

        { }
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4 uppercase font-bold">
          <p>© {new Date().getFullYear()} LIQUIDITY TRADERS BY SANG TRADES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Mentorship</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
