import React from 'react';
import { Link } from 'react-router-dom';

export default function ConsultingOperationsOptimization() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/consulting" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Consulting
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              Operational Excellence
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Surgical <span className="text-secondary italic">Efficiency</span> in Execution.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Streamlining complex global operations to eliminate friction, reduce waste, and maximize bottom-line performance through data-driven optimization.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
                Start Efficiency Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Operations Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-on-background mb-4">Optimization Pillars</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">We focus on the structural levers that drive exponential performance gains.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "settings_suggest", title: "Process Engineering", desc: "Redesigning workflows to eliminate bottlenecks and automate repetitive cycles." },
              { icon: "hub", title: "Supply Chain Resilience", desc: "Architecting diverse, anti-fragile networks for global material and data flow." },
              { icon: "analytics", title: "Cost Structure Realignment", desc: "Brutal identification and removal of non-value-adding operational overhead." }
            ].map((pillar, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-secondary/50 transition-all text-center group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 group-hover:scale-110 transition-transform">{pillar.icon}</span>
                <h3 className="font-headline-md text-on-background mb-4">{pillar.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before/After Visualization */}
        <section className="py-section-gap">
          <div className="glass-panel p-10 md:p-16 rounded-[40px] border border-white/5 bg-gradient-to-br from-surface-container-high/50 to-transparent">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline-lg text-on-background mb-6">Quantifiable Transformation</h2>
                <p className="text-on-surface-variant mb-10">Our optimizations deliver tangible metrics that impact the EBITDA almost immediately.</p>
                <div className="space-y-8">
                  {[
                    { label: "Throughput Increase", val: "+42%", color: "text-secondary" },
                    { label: "Operational Waste", val: "-28%", color: "text-error" },
                    { label: "Supply Chain Lead Time", val: "-35%", color: "text-secondary" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
                      <span className="font-label-md text-on-background uppercase tracking-widest">{stat.label}</span>
                      <span className={`text-3xl font-display-md ${stat.color}`}>{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-surface-container rounded-3xl border border-outline-variant/30 flex items-center justify-center overflow-hidden">
                  <div className="p-8 w-full">
                    {/* Simulated process flow visual */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-12 h-12 rounded bg-secondary/20 flex items-center justify-center"><span className="material-symbols-outlined text-secondary">input</span></div>
                      <div className="h-px flex-grow bg-outline-variant/30 mx-4 relative">
                        <div className="absolute inset-0 bg-secondary w-2/3 animate-pulse"></div>
                      </div>
                      <div className="w-12 h-12 rounded bg-surface-container-high border border-outline-variant/30 flex items-center justify-center"><span className="material-symbols-outlined">settings</span></div>
                      <div className="h-px flex-grow bg-outline-variant/30 mx-4"></div>
                      <div className="w-12 h-12 rounded bg-secondary/20 flex items-center justify-center"><span className="material-symbols-outlined text-secondary">output</span></div>
                    </div>
                    <div className="text-[10px] font-mono text-outline uppercase tracking-[0.2em] text-center">Real-time Efficiency Stream</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Insights section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Ops Intelligence</h2>
              <p className="font-body-md text-on-surface-variant">Technical briefings on the future of industrial execution.</p>
            </div>
            <Link to="/insights" className="text-secondary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Insights <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Case Study", title: "Automotive Lean Redesign", desc: "How we reduced assembly floor inventory by 60% through predictive logistics." },
              { category: "Framework", title: "Anti-Fragile Operations", desc: "Beyond robustness: building systems that improve under stress and volatility." },
              { category: "Report", title: "Automation vs Augmentation", desc: "A data-driven analysis of human-machine collaboration in global logistics." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high/50 transition-all cursor-pointer group">
                <div className="font-label-sm text-secondary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-secondary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Eradicate Operational <span className="text-secondary italic">Friction.</span></h2>
          <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
            Schedule an Efficiency Audit
          </Link>
        </section>
      </main>
    </div>
  );
}
