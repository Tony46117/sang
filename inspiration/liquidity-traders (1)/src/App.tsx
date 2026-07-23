import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SangProfile } from './components/SangProfile';
import { ApplicationModal } from './components/ApplicationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTrack, setSelectedTrack] = useState<string>('mastermind');

  const handleOpenApplication = (track?: string) => {
    if (track) {
      setSelectedTrack(track);
    }
    setIsModalOpen(true);
  };

  const handleCloseApplication = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white flex flex-col font-sans relative overflow-x-hidden">
      
      {/* Investing Forex Background Image Overlay (Light Theme) */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-20 pointer-events-none z-0 mix-blend-multiply contrast-125"
        style={{ backgroundImage: `url('/forex_bg.jpeg')` }}
      />
      <div className="fixed inset-0 bg-slate-50/85 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Announcement Bar */}
        <div className="bg-slate-900 text-white text-xs py-2.5 px-4 border-b border-slate-800 text-center font-bold tracking-wider uppercase shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-red-500 animate-pulse inline-block"></span>
            <span>SANG TRADES MENTORSHIP COHORT — JOIN VIA WHATSAPP +254719250533</span>
            <button
              onClick={() => handleOpenApplication('mastermind')}
              className="underline text-red-400 hover:text-white font-bold cursor-pointer tracking-widest transition-colors ml-1"
            >
              Apply Now →
            </button>
          </div>
        </div>

        {/* Navigation */}
        <Navbar onOpenApplication={handleOpenApplication} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onOpenApplication={handleOpenApplication} />
          <SangProfile onOpenApplication={handleOpenApplication} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Application Modal */}
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={handleCloseApplication}
          initialTrack={selectedTrack}
        />
      </div>

    </div>
  );
}

