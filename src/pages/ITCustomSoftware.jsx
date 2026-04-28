import React from 'react';
import { Link } from 'react-router-dom';

export default function ITCustomSoftware() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/it" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to IT Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Bespoke Engineering
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Standardized is the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Enemy of Excellence.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Off-the-shelf software forces your business to conform to its limitations. We build custom-engineered SaaS and unified data systems that conform to your absolute competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Request Custom Quotation
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="/assets/software_automation_workflow.png" 
                alt="Software Automation Workflow" 
                className="rounded-[32px] w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Discovery-to-Delivery Process Section */}
        <section className="py-section-gap">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">The Delivery Roadmap</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">A surgical approach to software engineering, from deep discovery to global scale deployment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Surgical Discovery", desc: "Immersion into your operational bottlenecks to identify highest-ROI automation opportunities." },
              { title: "Architecture Design", desc: "Modeling data relationships and UX workflows before a single line of code is written." },
              { title: "Agile Execution", desc: "Fortnightly sprint cycles with live staging environments for absolute transparency." },
              { title: "Sustained Scale", desc: "Long-term architectural maintenance and iterative feature expansion." }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all flex flex-col justify-between min-h-[220px]">
                <h4 className="font-headline-md text-xl text-on-surface mb-4">{item.title}</h4>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                <div className="h-0.5 w-12 bg-primary mt-6"></div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI / Interactive Lead Magnet Mockup */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -ml-48 -mt-48"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="glass-panel p-10 rounded-3xl border border-white/10 bg-black/40">
              <h3 className="font-headline-md text-2xl text-white mb-8">Efficiency Calculator</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">
                    <span>Manual Process Time (hrs/week)</span>
                    <span className="text-primary">120 HRS</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full w-3/4 bg-primary rounded-full shadow-[0_0_10px_rgba(91,127,255,0.6)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">
                    <span>Automated Process Accuracy</span>
                    <span className="text-secondary">99.98%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div className="h-full w-full bg-secondary rounded-full shadow-[0_0_10px_rgba(82,183,136,0.6)]"></div>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10 mt-8">
                   <p className="text-white text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Estimated Institutional ROI</p>
                   <p className="font-display-xl text-5xl text-white tracking-tighter">$2.4M <span className="text-sm font-label-sm text-on-surface-variant">/ ANNUM SAVED</span></p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Measure the Impact.</h2>
              <p className="font-body-lg text-on-surface-variant mb-8">
                Bespoke software isn't a cost; it's a high-yield investment. We've automated workflows that have saved our institutional partners thousands of operational hours and millions in capital friction.
              </p>
              <ul className="space-y-4">
                {['Eliminate manual data entry errors', 'Real-time cross-departmental reporting', 'Predictive maintenance scheduling', 'Unified legacy system integration'].map(point => (
                  <li key={point} className="flex items-center gap-3 font-label-sm text-xs md:text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary">task_alt</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Showcase */}
        <section className="py-section-gap">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Sector Expertise</h2>
            <p className="font-body-md text-on-surface-variant">Proven engineering solutions across complex global industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "account_balance", label: "Finance & Fintech" },
              { icon: "factory", label: "Energy & Industrial" },
              { icon: "local_shipping", label: "Global Logistics" },
              { icon: "policy", label: "Public Sector" }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 glass-panel border border-white/5 hover:border-primary transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">{item.icon}</span>
                <p className="text-xs font-black uppercase tracking-widest text-on-surface">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-section-gap text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Engineer Your Edge.</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            The software you use defines the ceiling of your operational potential. Let's build a new horizon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
              Request Project Audit
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Our Stack Specs
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
