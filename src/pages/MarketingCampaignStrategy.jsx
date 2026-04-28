import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketingCampaignStrategy() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/marketing" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Global Outreach
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              Strategic Narrative
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              The Blueprints of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Market Penetration.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              We define the psychological terrain your brand will occupy. Rigorous narrative engineering that dictates market perception and ensures long-term sector dominance through high-fidelity strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
                Request Strategy Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Strategy Planning Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: The Alpha Strategy Matrix */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">The Alpha Campaign Matrix</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Our 4-phase methodology for creating indomitable market presence through strategic narrative engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Discovery & Decoding", step: "01", desc: "Extracting the core institutional mission to build an unshakeable narrative foundation." },
              { title: "Market Archetyping", step: "02", desc: "Identifying audience psychological drivers to map the optimal penetration path." },
              { title: "Narrative Deployment", step: "03", desc: "Synchronized cross-channel execution designed for maximum cognitive retention." },
              { title: "Velocity Calibration", step: "04", desc: "Real-time auditing and optimization to maintain campaign momentum at scale." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 group hover:bg-surface-container-high transition-all relative overflow-hidden">
                <div className="text-4xl font-display-md text-secondary mb-6 opacity-30 group-hover:opacity-100 transition-opacity">{card.step}</div>
                <h3 className="font-headline-sm text-on-background mb-4 text-xl">{card.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
                <div className="absolute top-0 right-0 p-4">
                   <span className="material-symbols-outlined text-secondary opacity-10">verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Section: Strategic Resilience */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Narrative Defensibility</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                We bridge the gap between creative expression and industrial utility. Your campaign is built to be a resilient asset for decades of institutional growth.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "shield", title: "Crisis-Ready Frameworks", subtitle: "Pre-emptive Narrative Defense" },
                  { icon: "hub", title: "Cross-Market Cohesion", subtitle: "Unified Global Language" },
                  { icon: "verified", title: "IP Protection Assets", subtitle: "Trademark-Ready Strategy" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-on-surface font-bold text-sm">{item.title}</p>
                      <p className="text-on-surface-variant text-xs font-body-md uppercase tracking-widest">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group text-center">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter">Campaign Resilience</h3>
               <div className="space-y-8">
                  {[
                    { label: "Market Resonance", val: "A+", color: "text-secondary" },
                    { label: "Narrative Velocity", val: "High", color: "text-secondary" },
                    { label: "Defensibility Index", val: "Top 1%", color: "text-secondary" }
                  ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4 text-left">
                        <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[10px]">{stat.label}</span>
                        <span className={`text-4xl font-display-md ${stat.color}`}>{stat.val}</span>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Shared: Credentials & Compliance */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-secondary uppercase tracking-[0.3em] mb-8">Authorized Partnership Status</h3>
              <div className="flex flex-wrap gap-12 opacity-60 grayscale hover:grayscale-0 transition-all items-center">
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                    <span className="font-black tracking-widest text-sm uppercase">Meta Partner</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">shield</span>
                    <span className="font-black tracking-widest text-sm uppercase">Twitter API Elite</span>
                 </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-secondary">lock</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Secure Social Governance</h4>
                <p className="font-body-md text-sm text-on-surface-variant">We utilize military-grade 2FA and secure vaulting for all brand credentials, ensuring zero risk of account compromise during high-stakes campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Architect Your <span className="text-secondary italic">Dominance.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the global market, perception is the ultimate manifestation of institutional power.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
              Initiate Strategy Session
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all inline-block text-center">
              Download Framework
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
