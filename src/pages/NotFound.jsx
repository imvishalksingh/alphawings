import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container bg-[#030712] text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-margin-edge">
        <span className="font-label-sm text-primary tracking-[0.5em] uppercase mb-8 block animate-pulse">Error 404</span>
        <h1 className="font-display-xl text-7xl md:text-9xl mb-8 uppercase tracking-tighter leading-none">
          SYSTEM <br/>
          <span className="text-slate-500">MISMATCH.</span>
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
          The requested coordinate does not exist in our current architectural framework. The link may be broken or the page has been decommissioned.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/" className="bg-primary text-on-primary px-10 py-5 rounded-lg font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(183,196,255,0.4)] transition-all active:scale-95 inline-block">
            Return to Core
          </Link>
          <Link to="/contact" className="glass-card px-10 py-5 rounded-lg font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all inline-block">
            Report Breach
          </Link>
        </div>
      </div>
    </div>
  );
}
