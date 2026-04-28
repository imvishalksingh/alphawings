import React from 'react';
import { Link } from 'react-router-dom';

export default function ConsultingGrowthPlanning() {
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
              Expansion Architecture
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Identifying <span className="text-primary italic">Exponential</span> Adjacencies.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Expanding your market footprint through precision M&A, aggressive market entry strategies, and portfolio optimization designed for long-term enterprise dominance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Access Growth Roadmap
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Global Growth Strategy" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Growth Vectors Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-on-background mb-4">Growth Vectors</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">We identify and activate the specific levers required for scaled enterprise expansion.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "handshake", title: "M&A Advisory", desc: "Sourcing and executing high-yield acquisitions that complement core competencies." },
              { icon: "public", title: "Market Entry", desc: "Navigating regulatory and cultural complexity to establish dominant regional footprints." },
              { icon: "category", title: "Product Adjacency", desc: "Identifying logical service expansions that leverage existing infrastructure." },
              { icon: "pie_chart", title: "Portfolio Alpha", desc: "Continuous optimization of business units to ensure maximum capital efficiency." }
            ].map((vector, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:bg-surface-container-high/50 transition-all group">
                <span className="material-symbols-outlined text-3xl text-primary mb-6 block group-hover:scale-110 transition-transform">{vector.icon}</span>
                <h3 className="font-headline-sm text-on-background mb-4">{vector.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{vector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* M&A Visual / Pipeline */}
        <section className="py-section-gap">
          <div className="glass-panel p-10 md:p-16 rounded-[40px] border border-white/5 bg-gradient-to-br from-surface-container-high/50 to-transparent relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <span className="material-symbols-outlined text-[180px] text-primary">account_tree</span>
             </div>
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="font-headline-lg text-on-background mb-6">Strategic Expansion Pipeline</h2>
                  <p className="text-on-surface-variant mb-10 max-w-md">Our proprietary 'Alpha Pipeline' methodology ensures that M&A activities are never reactionary, but always strategically aligned with the 10-year vision.</p>
                  <div className="space-y-6">
                    {['Exhaustive Target Scoping', 'Deep Cultural Due Diligence', 'Post-Merger Integration (PMI) Planning', 'Synergy Capture Tracking'].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm">done</span>
                        </div>
                        <span className="text-sm font-label-md text-on-background">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-surface-container/50 rounded-3xl p-8 border border-outline-variant/30 backdrop-blur-xl">
                   <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-8">Asset Allocation Target</h4>
                   <div className="aspect-square relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-[20px] border-surface-container-high"></div>
                      <div className="absolute inset-0 rounded-full border-[20px] border-primary border-t-transparent border-r-transparent animate-spin-slow"></div>
                      <div className="text-center">
                        <div className="text-4xl font-display-xl text-on-background">68%</div>
                        <div className="text-[10px] text-outline font-bold uppercase">Growth Focus</div>
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
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Growth Intelligence</h2>
              <p className="font-body-md text-on-surface-variant">Strategic briefings on the future of global conglomerate expansion.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Insights <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Framework", title: "The Adjacency Map", desc: "A systematic approach to identifying non-obvious expansion opportunities." },
              { category: "Case Study", title: "Regional Dominance: APAC", desc: "How we facilitated a multi-national's entry into three new markets in 18 months." },
              { category: "Analysis", title: "Synergy Capture Economics", desc: "Why most M&As fail to deliver value, and how to ensure yours succeeds." }
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
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Architect Your Global <span className="text-primary italic">Footprint.</span></h2>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
            Schedule a Growth Briefing
          </Link>
        </section>
      </main>
    </div>
  );
}
