import React from 'react';
import { Link } from 'react-router-dom';

export default function ConsultingHRConsulting() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-tertiary/20">
              Human Capital Architecture
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Engineering <span className="text-tertiary italic">Agile</span> Organizations.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Aligning global talent with strategic mandates. We design high-performance organizational structures that foster radical innovation and leadership resilience.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-tertiary text-on-tertiary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
                Access Talent Framework
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Collaborative Teams Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80 mix-blend-overlay"
              />
            </div>
          </div>
        </section>

        {/* Talent Strategy Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Architectural Alignment</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">Human capital is the primary engine of enterprise value. We ensure that engine is tuned for your specific strategic goals.</p>
              <div className="space-y-6">
                {[
                  { title: "Organizational Design", desc: "Crafting non-hierarchical, agile structures for rapid decision making." },
                  { title: "Executive Search & Prep", desc: "Identifying and training the next generation of global leadership." },
                  { title: "Performance Ecosystems", desc: "Designing incentive models that drive radical accountability and innovation." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-tertiary">groups</span>
                    <div>
                      <h4 className="font-headline-sm text-on-background mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-outline-variant/30">
              <h3 className="font-headline-md text-on-surface mb-6">Talent Lifecycle Metrics</h3>
              <div className="space-y-10">
                {[
                  { label: "Leadership Bench Strength", val: "88%", desc: "Internal succession readiness for critical roles." },
                  { label: "Talent Mobility Index", val: "4.2x", desc: "Cross-divisional skill deployment frequency." },
                  { label: "Retention of Elite Performers", val: "94%", desc: "YOY retention of top-decile human capital." }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">{stat.label}</span>
                      <span className="text-2xl font-display-md text-tertiary">{stat.val}</span>
                    </div>
                    <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary" style={{ width: stat.val.includes('x') ? '70%' : stat.val }}></div>
                    </div>
                    <p className="text-[10px] text-outline mt-2">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Insights section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Human Intelligence</h2>
              <p className="font-body-md text-on-surface-variant">The future of work and organizational psychology.</p>
            </div>
            <Link to="/insights" className="text-tertiary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Insights <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Report", title: "The Hybrid Mandate", desc: "Data-driven strategies for maintaining culture in a decentralized global workforce." },
              { category: "Framework", title: "Radical Transparency", desc: "How open internal metrics drive disproportionate performance and trust." },
              { category: "Whitepaper", title: "AI and Human Capital", desc: "Architecting for a future where AI augments rather than replaces elite talent." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high/50 transition-all cursor-pointer group">
                <div className="font-label-sm text-tertiary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-tertiary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Architect Your Future <span className="text-tertiary italic">Leadership.</span></h2>
          <Link to="/contact" className="bg-tertiary text-on-tertiary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
            Schedule a Talent Briefing
          </Link>
        </section>
      </main>
    </div>
  );
}
