import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface NavbarProps {
  onOpenApplication: (track?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplication }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sang Trades', href: '#sang-profile' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded border border-slate-200 bg-white p-1 shadow-sm transition-all duration-300 group-hover:border-red-500 group-hover:shadow-md">
            <img 
              src={logoImg} 
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              alt="Liquidity Traders Logo" 
              className="h-10 w-auto max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-slate-900 tracking-tight uppercase leading-none group-hover:text-red-600 transition-colors font-editorial">
              LIQUIDITY TRADERS
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-red-600 uppercase mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-red-600 animate-pulse"></span>
              BY SANG TRADES
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-red-600 transition-all py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/254719250533"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>+254719250533</span>
          </a>

          <button
            onClick={() => onOpenApplication()}
            className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md shadow-red-600/20 transition-all"
          >
            <span>JOIN COHORT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-red-600 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-2 pb-6 space-y-4 shadow-xl text-slate-900">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-slate-800 hover:text-red-600 py-2.5 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/254719250533"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 text-white shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP +254719250533</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenApplication();
            }}
            className="w-full bg-red-600 hover:bg-red-500 py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer text-white shadow-md shadow-red-600/20"
          >
            <span>JOIN THE COHORT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};

