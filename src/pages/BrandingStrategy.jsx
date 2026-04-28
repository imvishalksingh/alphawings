import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandingStrategy() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/branding" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Alpha Creative
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Market Positioning
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              The Strategic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Blueprints of Perception.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              We define the psychological terrain your brand will occupy. Rigorous positioning frameworks that dictate market perception and ensure long-term sector dominance in luxury and industrial markets.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Initiate Positioning Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Brand Strategy Process" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Brand Strategic Pillars</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Our methodology for creating indomitable market presence through narrative engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "dna", title: "DNA Decoding", desc: "Extracting the core institutional mission to build an unshakeable narrative foundation that survives market volatility." },
              { icon: "analytics", title: "Competitive Displacement", desc: "Analyzing rival brand positions with surgical precision to find and exploit emotional gaps in the sector." },
              { icon: "public", title: "Market Resonance", desc: "Deep cultural auditing to ensure messaging hits with institutional-grade impact across diverse global jurisdictions." }
            ].map((pillar, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 group hover:bg-surface-container-high transition-all">
                <div className="text-4xl font-display-md text-primary mb-6 opacity-30">0{i+1}</div>
                <h4 className="font-headline-md text-on-background mb-4 text-2xl">{pillar.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Framework Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Perception Engineering</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                Brand strategy is not about aesthetics; it's about control. We architect the frameworks that dictate how your enterprise is perceived by stakeholders, competitors, and the market.
              </p>
              <div className="space-y-4">
                 {["Audience Archetype Mapping", "Institutional Value Extraction", "Market Friction Audits", "Narrative Velocity Modeling"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/10">
                       <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-sm">verified</span>
                       </div>
                       <span className="text-xs font-bold uppercase tracking-widest text-on-surface">{item}</span>
                    </div>
                 ))}
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter text-center">Strategic Readiness</h3>
               <div className="space-y-8">
                  {[
                    { label: "Market Resonance", val: "A+", color: "text-primary" },
                    { label: "Narrative Defensibility", val: "High", color: "text-primary" },
                    { label: "Sector Displacement", val: "92%", color: "text-primary" }
                  ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                        <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[10px]">{stat.label}</span>
                        <span className={`text-4xl font-display-md ${stat.color}`}>{stat.val}</span>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Occupy Your <span className="text-primary italic">Sector.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the battle for perception, the side with the most robust strategy always wins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
              Initiate Strategy Briefing
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              View Frameworks
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
