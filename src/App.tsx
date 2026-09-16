import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SangProfile } from './components/SangProfile';
import { FrameworkSection } from './components/FrameworkSection';
import { FaqSection } from './components/FaqSection';
import { ChartMastery } from './components/ChartMastery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white flex flex-col font-sans relative overflow-x-hidden">
      { }
      <div className="bg-slate-900 text-white text-xs py-2.5 px-4 border-b border-slate-800 text-center font-bold tracking-wider uppercase shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="w-2 h-2 bg-red-600 animate-pulse-custom inline-block rounded-none" />
          <span>SANG TRADES MENTORSHIP COHORT — JOIN VIA WHATSAPP +254719250533</span>
          <a href="#framework" className="underline text-red-400 hover:text-white font-bold cursor-pointer tracking-widest transition-colors">
            APPLY NOW →
          </a>
        </div>
      </div>

      { }
      <Navbar />

      { }
      <main className="flex-grow">
        <Hero />
        <SangProfile />
        <FrameworkSection />
        <FaqSection />
        <ChartMastery />
      </main>

      { }
      <Footer />
    </div>
  );
}
