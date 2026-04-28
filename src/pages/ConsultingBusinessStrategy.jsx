import React from 'react';
import { Link } from 'react-router-dom';

export default function ConsultingBusinessStrategy() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Strategy & Architecture
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Architecting <span className="text-primary italic">Sustainable</span> Advantage.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Navigating market volatility with hypothesis-driven strategy. We help global leaders define their winning path through rigorous analysis and bold vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Request Strategy Brief
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Strategy Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80 mix-blend-luminosity"
              />
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Strategic Diagnostic</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">Our methodology begins with a brutal assessment of current positioning versus market potential.</p>
              <div className="space-y-6">
                {[
                  { title: "Market Friction Audit", desc: "Identifying structural barriers to growth and margin erosion." },
                  { title: "Competitive Displacement", desc: "Analyzing rival strategies to find exploitable adjacencies." },
                  { title: "Portfolio Resilience", desc: "Stress-testing asset allocations against macro-economic volatility." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-2xl glass-panel border border-white/5">
                    <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
                    <div>
                      <h4 className="font-headline-sm text-on-background mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-surface-container-high/50 border border-outline-variant/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[120px] text-primary">strategy</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-8">The Strategy Framework</h3>
              <div className="space-y-8 relative z-10">
                {[
                  { step: "01", title: "Baseline Audit", desc: "Establishing a concrete financial and operational ground truth." },
                  { step: "02", title: "Target Architecture", desc: "Defining the 'Future State' blueprint and North Star metrics." },
                  { step: "03", title: "Execution Roadmap", desc: "Phased tactical deployment with built-in agility loops." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="font-display-md text-primary opacity-30">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-on-background uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Global Success Metrics */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="text-center mb-16">
            <h3 className="font-label-sm text-primary uppercase tracking-[0.3em] mb-4">Strategic Impact</h3>
            <h2 className="font-headline-lg text-on-background">Institutional-Grade Results</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { val: "2.4x", label: "Market Cap Growth" },
              { val: "18%", label: "OpEx Reduction" },
              { val: "12+", label: "New Market Entries" },
              { val: "$4B", label: "M&A Advisory Value" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 glass-panel rounded-3xl border border-white/5">
                <div className="text-4xl font-display-xl text-primary mb-2">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Shared: Insights section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Thought Leadership</h2>
              <p className="font-body-md text-on-surface-variant">Strategic briefings on the future of global enterprise.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Insights <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Whitepaper", title: "Resilient Corporate Growth", desc: "Why traditional growth models fail in high-volatility decades." },
              { category: "Analysis", title: "The Post-Digital Strategy", desc: "Beyond digital transformation: architecting for the age of intelligence." },
              { category: "Op-Ed", title: "Leadership in Flux", desc: "The executive mandate for radical transparency and operational agility." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high/50 transition-all cursor-pointer group">
                <div className="font-label-sm text-primary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Ready to Redefine Your <span className="text-primary italic">Trajectory?</span></h2>
          <Link to="/contact" className="bg-on-background text-background px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-2xl inline-block text-center">
            Schedule a Strategy Session
          </Link>
        </section>
      </main>
    </div>
  );
}
