import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandingLogo() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/branding" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Alpha Creative
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-tertiary/20">
              Symbolic Engineering
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Minimalism as <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-orange-400">Pure Authority.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              We design marks that transcend trends. Our logos are indomitable symbols engineered to distill complex conglomerate missions into a single, scalable, and unforgettable mark.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-tertiary text-on-tertiary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
                Request Concept Brief
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" 
                alt="Logo Design Process" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">The Mark of Dominance</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Every line is calculated. Every curve is intentional. Our logos are engineered for maximum cognitive retention.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "architecture", title: "Geometric Purity", desc: "Utilizing golden ratio and structural grids to ensure absolute balance and visual harmony." },
              { icon: "compress", title: "Micro-Scale Fidelity", desc: "Engineering marks that maintain clarity and authority from favicon-size to industrial billboards." },
              { icon: "tonality", title: "Monotone Readiness", desc: "Ensuring your mark remains indomitable even in high-contrast, single-color applications." },
              { icon: "psychology", title: "Semiotics Analysis", desc: "Deep cultural auditing to ensure symbols carry the intended institutional weight globally." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 group hover:border-tertiary transition-all">
                <span className="material-symbols-outlined text-3xl text-tertiary mb-6 block group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-sm text-on-background mb-4 text-xl">{card.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Structural Integrity</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                We bridge the gap between creative expression and industrial utility. Your logo is built to be a resilient asset for decades of institutional growth.
              </p>
              <div className="space-y-4">
                 {["Vector-Grade Mathematical Precision", "Multi-Stage Color Stress Testing", "Negative Space Optimization", "Trademark Vulnerability Audits"].map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/10">
                       <span className="material-symbols-outlined text-tertiary">check_circle</span>
                       <span className="text-sm font-medium">{feat}</span>
                    </div>
                 ))}
              </div>
            </div>
            <div className="aspect-square bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute -inset-10 bg-tertiary/5 blur-[80px] group-hover:bg-tertiary/10 transition-all"></div>
               <div className="text-8xl font-black text-white/5 select-none relative z-10">ALPHA</div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-tertiary/20 rounded-full animate-ping"></div>
               </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Design for <span className="text-tertiary italic">Permanence.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In a world of noise, the simplest marks speak the loudest. Engineer your symbolic presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-tertiary text-on-tertiary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
              Initiate Concept Workshop
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              View Symbol Case Studies
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
