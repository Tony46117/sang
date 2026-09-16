import React from 'react';

interface LiquidityLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LiquidityLogo: React.FC<LiquidityLogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      { }
      <div className="relative flex items-center justify-center shrink-0">
        <svg 
          viewBox="0 0 40 40" 
          className="w-10 h-10 drop-shadow-sm" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          { }
          <rect x="2" y="2" width="36" height="36" rx="6" className="fill-slate-900 stroke-slate-800" strokeWidth="1.5" />
          
          { }
          <line x1="8" y1="20" x2="32" y2="20" stroke="#334155" strokeWidth="0.75" strokeDasharray="2 2" />
          <line x1="20" y1="8" x2="20" y2="32" stroke="#334155" strokeWidth="0.75" strokeDasharray="2 2" />

          { }
          <line x1="12" y1="10" x2="12" y2="30" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="10" y="16" width="4" height="9" rx="1" className="fill-emerald-500" />

          { }
          <line x1="20" y1="7" x2="20" y2="33" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="18" y="12" width="4" height="12" rx="1" className="fill-red-600" />
          
          { }
          <path 
            d="M 18 8 C 22 5, 26 5, 28 9" 
            stroke="#F59E0B" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeDasharray="2 1" 
          />

          { }
          <line x1="28" y1="12" x2="28" y2="32" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="26" y="20" width="4" height="8" rx="1" className="fill-emerald-400" />

          { }
          <circle cx="32" cy="8" r="2.5" className="fill-red-500 animate-pulse" />
        </svg>
      </div>
    </div>
  );
};

export default LiquidityLogo;
