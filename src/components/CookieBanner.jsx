import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 right-8 z-[200] animate-fade-in-up">
      <div className="max-w-container-max mx-auto">
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-3xl bg-[#030712]/80">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">cookie</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1 tracking-tight">Cookie Synchronization</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                We use proprietary and third-party cookies to optimize architectural performance and analyze global traffic. By continuing, you agree to our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={acceptCookies}
              className="bg-primary text-on-primary px-8 py-3 rounded-lg font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(183,196,255,0.3)] transition-all active:scale-95 whitespace-nowrap grow md:grow-0"
            >
              Accept All
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="glass-card px-8 py-3 rounded-lg font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all whitespace-nowrap grow md:grow-0"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
