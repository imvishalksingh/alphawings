import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketingSEO() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/marketing" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Global Outreach
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-tertiary/20">
              Search Authority
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Organic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-orange-400">Dominance at Scale.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Deep technical SEO and semantic content engineering. We ensure your brand owns the information ecosystem by architecting authority clusters that survive algorithmic shifts.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-tertiary text-on-tertiary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
                Request Authority Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=2072&auto=format&fit=crop" 
                alt="SEO Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Semantic Architecture */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Technical Semantic Authority</h2>
              <div className="space-y-12">
                {[
                  { 
                    title: "Entity Relationship Mapping", 
                    desc: "Structuring your data to establish your brand as a primary entity in the Google Knowledge Graph.",
                    icon: "schema"
                  },
                  { 
                    title: "Edge SEO Deployment", 
                    desc: "Server-side optimizations that bypass CMS limitations for instant global metadata deployment.",
                    icon: "code"
                  },
                  { 
                    title: "Link Equity Recovery", 
                    desc: "Reclaiming lost authority from legacy domains and unlinked institutional mentions.",
                    icon: "link"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/50 group-hover:border-tertiary/50 transition-colors">
                      <span className="material-symbols-outlined text-tertiary">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-on-surface mb-2">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-black/40 relative group">
               <h3 className="font-headline-md text-on-background mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">bolt</span>
                  Efficiency Metrics
               </h3>
               <div className="space-y-8 relative z-10">
                  {[
                    { label: "Core Web Vitals", val: "99/100", desc: "Absolute performance optimization for maximum ranking signals." },
                    { label: "Indexing Velocity", val: "2.4x", desc: "Speed of content discovery and inclusion in major indices." },
                    { label: "Organic Share", val: "A+", desc: "Competitive dominance in high-intent information clusters." }
                  ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                        <div>
                           <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[10px] block mb-1">{stat.label}</span>
                           <span className="text-xs text-on-surface-variant italic">{stat.desc}</span>
                        </div>
                        <span className="text-4xl font-display-md text-tertiary">{stat.val}</span>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Global SEO Verticals */}
        <section className="py-section-gap">
           <div className="text-center mb-16 md:mb-24">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Information Ecosystem Control</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We don't just optimize for keywords; we optimize for intent and authority across every global market.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Programmatic SEO", tier: "Scale Engineering", desc: "Automated generation of 10k+ high-fidelity pages targeting long-tail intent clusters." },
                { title: "Sovereign SEO", tier: "Global Readiness", desc: "Cross-jurisdictional hreflang orchestration for multi-national conglomerate assets." },
                { title: "Authority Link Lab", tier: "Institutional Growth", desc: "Data-driven acquisition of high-DR backlinks from Tier 1 financial and tech publications." }
              ].map((tier, i) => (
                <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-tertiary/30 transition-all group relative overflow-hidden">
                   <div className="font-label-sm text-tertiary uppercase tracking-widest mb-4">{tier.tier}</div>
                   <h4 className="font-headline-sm text-on-background mb-4 text-2xl">{tier.title}</h4>
                   <p className="font-body-md text-sm text-on-surface-variant">{tier.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Shared: Credentials & Compliance */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-tertiary uppercase tracking-[0.3em] mb-8">Technical Accreditations</h3>
              <div className="flex flex-wrap gap-12 opacity-60 grayscale hover:grayscale-0 transition-all items-center">
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary">speed</span>
                    <span className="font-black tracking-widest text-sm uppercase">Lighthouse Certified</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary">language</span>
                    <span className="font-black tracking-widest text-sm uppercase">Search Console Partner</span>
                 </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-tertiary">policy</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Algorithmic Integrity</h4>
                <p className="font-body-md text-sm text-on-surface-variant">We strictly adhere to white-hat institutional standards, ensuring your brand survives and thrives through major core updates (Panda, Penguin, Helpful Content).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section (Shared) */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Search Intelligence</h2>
              <p className="font-body-md text-on-surface-variant">Strategic analysis of the global information layer.</p>
            </div>
            <Link to="/insights" className="text-tertiary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Whitepaper", title: "The Death of Keywords", desc: "How semantic entity mapping has replaced traditional keyword targeting in 2026." },
              { category: "Report", title: "Global Search Trends", desc: "Analyzing information discovery patterns across APAC, EMEA, and Americas." },
              { category: "Case Study", title: "Scale SEO: Project Zenith", desc: "faciliating 300% organic growth for a multi-billion dollar e-commerce entity." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high transition-all group cursor-pointer">
                <div className="font-label-sm text-secondary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-tertiary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Own the <span className="text-tertiary italic">Information</span> Layer.</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the search ecosystem, you either define the answer or remain invisible.
          </p>
          <Link to="/contact" className="bg-tertiary text-on-tertiary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
            Initiate Search Audit
          </Link>
        </section>
      </main>
    </div>
  );
}
