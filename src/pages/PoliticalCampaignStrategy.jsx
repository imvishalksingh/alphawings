import React from 'react';
import { Link } from 'react-router-dom';

export default function PoliticalCampaignStrategy() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/political" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Strategic Policy
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Campaign Architecture
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Absolute Victory.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Deep-level structural planning for global campaigns. We map the electoral battlefield with surgical precision, identifying vulnerabilities and optimal resource allocation paths to ensure dominance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Initiate Strategy Session
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541872703-74c5e443d1fe?q=80&w=2040&auto=format&fit=crop" 
                alt="Political Strategy Analysis" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Tactical Assets Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">The Campaign Force Multiplier</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We provide the technical and psychological infrastructure required for large-scale political victory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "analytics", title: "Predictive Polling", desc: "Proprietary AI models that identify sentiment shifts 48 hours before they hit traditional polls, allowing for preemptive narrative adjustment." },
              { icon: "security", title: "Opposition Research", desc: "Exhaustive deep-dive audits into rival narratives, past policy positions, and vulnerability mapping across all public and digital domains." },
              { icon: "account_tree", title: "Resource Allocation", desc: "Algorithmic distribution of capital and personnel across contested districts to ensure maximum electoral impact with minimum waste." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-on-background mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Intelligence Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Political Intelligence Lab</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                We bridge the gap between traditional campaigning and high-velocity digital warfare. Our data sets allow for real-time voter sentiment tracking across diverse demographics.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "map", title: "District Sentiment Heatmaps", subtitle: "Real-time Voter Telemetry" },
                  { icon: "hub", title: "Narrative Synchronization", subtitle: "Cross-Channel Message Control" },
                  { icon: "verified_user", title: "Disinformation Shield", subtitle: "Rapid Response Mitigation" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter text-center">Campaign Readiness</h3>
               <div className="space-y-8">
                  {[
                    { label: "Predictive Accuracy", val: "94.2%", color: "text-primary" },
                    { label: "Voter Conversion Alpha", val: "+12%", color: "text-primary" },
                    { label: "Opposition Defense Index", val: "A+", color: "text-primary" }
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
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Secure the <span className="text-primary italic">Mandate.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the modern political arena, victory is engineered, not found. Command the battlefield.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
              Initiate Strategy Brief
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Request Intelligence Audit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
