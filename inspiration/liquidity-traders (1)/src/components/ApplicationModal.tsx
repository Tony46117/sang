import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';
import { ApplicationFormData } from '../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialTrack = 'mastermind'
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    discordHandle: '',
    tradingExperience: '1-3 years',
    capitalRange: '$50,000 - $100,000',
    mentorshipTrack: initialTrack,
    biggestChallenge: 'Getting stopped out by false breakouts / liquidity sweeps',
  });

  if (!isOpen) return null;

  const handleChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      
      <div className="bg-white max-w-2xl w-full border-2 border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col text-slate-900">
        
        { }
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-red-400">
                SANG TRADES MENTORSHIP APPLICATION
              </span>
            </div>
            <h3 className="text-xl font-bold font-editorial text-white uppercase tracking-tight mt-1">
              APPLY FOR SANG TRADES MENTORSHIP
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close application modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        { }
        {!submitted && (
          <div className="w-full bg-slate-100 h-1.5 flex">
            <div
              className="bg-red-600 h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        { }
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {!submitted ? (
            <form onSubmit={handleNext} className="space-y-6">
              
              { }
              {step === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">STEP 1 OF 3</p>
                    <h4 className="text-lg font-bold font-editorial text-slate-900 uppercase">PERSONAL CONTACT DETAILS</h4>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      WhatsApp Number / Contact
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.discordHandle}
                        onChange={(e) => handleChange('discordHandle', e.target.value)}
                        placeholder="+254719250533 (WhatsApp preferred)"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                      />
                    </div>
                  </div>
                </div>
              )}

              { }
              {step === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">STEP 2 OF 3</p>
                    <h4 className="text-lg font-bold font-editorial text-slate-900 uppercase">TRADING BACKGROUND & CAPITAL</h4>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      How long have you been trading financial markets?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['< 1 Year', '1-3 Years', '3+ Years'].map((exp) => (
                        <button
                          key={exp}
                          type="button"
                          onClick={() => handleChange('tradingExperience', exp)}
                          className={`py-2.5 px-3 border text-xs font-bold uppercase tracking-wider cursor-pointer ${
                            formData.tradingExperience === exp
                              ? 'bg-red-600 text-white border-red-600'
                              : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          {exp}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Target Trading Capital / Account Size
                    </label>
                    <select
                      value={formData.capitalRange}
                      onChange={(e) => handleChange('capitalRange', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 font-bold"
                    >
                      <option value="$10,000 - $25,000">$10,000 - $25,000 Account</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000 Account</option>
                      <option value="$200,000+">$200,000+ Account</option>
                      <option value="Personal Capital $10k+">Personal Live Capital ($10k+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      What is your biggest trading obstacle right now?
                    </label>
                    <textarea
                      rows={2}
                      value={formData.biggestChallenge}
                      onChange={(e) => handleChange('biggestChallenge', e.target.value)}
                      placeholder="e.g. Getting stopped out before the move, overtrading during non-killzones..."
                      className="w-full p-3 bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>
                </div>
              )}

              { }
              {step === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">STEP 3 OF 3</p>
                    <h4 className="text-lg font-bold font-editorial text-slate-900 uppercase">SANG TRADES 3-STEP MENTORSHIP PROGRAM</h4>
                  </div>

                  <div className="space-y-3">
                    <div className="p-5 border-2 border-red-600 bg-red-50 text-slate-900 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-bold font-editorial text-slate-900 text-base uppercase">SANG TRADES DIRECT MENTORSHIP</p>
                        <span className="font-bold text-xs text-emerald-800 font-mono bg-emerald-100 px-2 py-0.5 border border-emerald-300">
                          WHATSAPP: +254719250533
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">
                        Comprehensive orderflow program covering Build Up, Inducement sweeps, and Mitigation rebalances directly with Sang.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Applications reviewed directly by Sang Trades via WhatsApp +254719250533.</span>
                  </div>
                </div>
              )}

              { }
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-3 bg-slate-100 border border-slate-300 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 cursor-pointer hover:bg-slate-200 text-slate-800"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>BACK</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-500 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer ml-auto shadow-md shadow-red-600/20"
                >
                  <span>{step === 3 ? 'SUBMIT APPLICATION' : 'CONTINUE'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
             
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest">
                  APPLICATION RECEIVED
                </span>
                <h3 className="text-2xl font-bold font-editorial text-slate-900 uppercase">
                  WELCOME TO LIQUIDITY TRADERS, {formData.fullName.toUpperCase()}!
                </h3>
                <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed font-medium">
                  Your application has been submitted directly to Sang Trades. You can also message Sang immediately on WhatsApp: <strong className="text-emerald-700 font-mono">+254719250533</strong>.
                </p>
              </div>

              { }
              <div className="p-6 bg-emerald-50 border-2 border-emerald-300 text-left space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>DIRECT WHATSAPP COHORT ACCESS</span>
                  </div>
                  <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 uppercase tracking-wider">
                    ACTIVE NOW
                  </span>
                </div>

                <a
                  href="https://wa.me/254719250533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT WITH SANG ON WHATSAPP +254719250533</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-slate-900 hover:bg-slate-800 py-4 text-xs font-bold uppercase tracking-widest cursor-pointer text-white"
              >
                CLOSE WINDOW
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

