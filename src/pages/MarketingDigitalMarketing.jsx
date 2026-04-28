import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketingDigitalMarketing() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/marketing" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Global Outreach
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Digital Penetration
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Data-Driven <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Narrative Engineering.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Global market penetration strategies powered by neural sentiment analysis and high-fidelity behavioral targeting. We treat digital marketing as a high-stakes engineering problem.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Initiate Campaign Brief
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Global Connectivity Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Conversion Engineering */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">The Conversion Engine</h2>
              <div className="space-y-12">
                {[
                  { 
                    title: "Sentiment Mapping", 
                    desc: "Real-time analysis of global audience resonance to adjust messaging on the fly based on cultural nuances.",
                    icon: "psychology"
                  },
                  { 
                    title: "Omni-Channel Orchestration", 
                    desc: "Seamless narrative synchronization across 40+ digital touchpoints, ensuring zero message decay.",
                    icon: "hub"
                  },
                  { 
                    title: "Neural Attribution", 
                    desc: "Advanced AI models that track every dollar from impression to transaction with surgical accuracy.",
                    icon: "query_stats"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/50 group-hover:border-primary/50 transition-colors">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-on-surface mb-2">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-gradient-to-br from-surface-container-high/50 to-transparent relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-[150px] text-primary">analytics</span>
               </div>
               <h3 className="font-headline-md text-on-background mb-8">Growth Metrics Lab</h3>
               <div className="space-y-8 relative z-10">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                     <div className="flex justify-between items-end mb-4">
                        <span className="font-label-sm uppercase tracking-widest text-on-surface-variant">Avg. ROI Lift</span>
                        <span className="text-4xl font-display-md text-primary">312%</span>
                     </div>
                     <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-primary animate-pulse" style={{ width: '85%' }}></div>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-display-md text-on-background">4.2B</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">Impressions</div>
                     </div>
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-display-md text-on-background">+18.4%</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">Alpha Conversion</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Strategy Verticals */}
        <section className="py-section-gap">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Market Displacement Vectors</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We deploy specialized units for every major digital vector, ensuring absolute market saturation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Programmatic RTB", tier: "High Velocity", desc: "Algorithmic bidding across 2M+ publishers to secure the most high-value user segments in milliseconds." },
              { title: "Behavioral Retargeting", tier: "Engagement Hub", desc: "Dynamic sequencing that follows users across their entire digital lifecycle until conversion is secured." },
              { title: "Global CDN Edge", tier: "Low Latency", desc: "Localized campaign assets delivered from 400+ edge nodes for zero-friction user experiences." }
            ].map((tier, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 hover:bg-surface-container-high transition-all group relative overflow-hidden">
                <div className="font-label-sm text-primary uppercase tracking-widest mb-4">{tier.tier}</div>
                <h4 className="font-headline-sm text-on-background mb-4 text-2xl">{tier.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{tier.desc}</p>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-[100px]">verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shared: Credentials & Compliance */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-primary uppercase tracking-[0.3em] mb-8">Authorized Partnership Status</h3>
              <div className="flex flex-wrap gap-12 opacity-60 grayscale hover:grayscale-0 transition-all items-center">
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500">ads_click</span>
                    <span className="font-black tracking-widest text-sm">GOOGLE ADS PREMIER</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600">hub</span>
                    <span className="font-black tracking-widest text-sm">META BUSINESS</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-700">work</span>
                    <span className="font-black tracking-widest text-sm">LINKEDIN PARTNER</span>
                 </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-secondary">verified_user</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">GDPR & Data Sovereignty</h4>
                <p className="font-body-md text-sm text-on-surface-variant">All tracking and behavioral analysis protocols are 100% compliant with global data privacy mandates, ensuring your brand's institutional safety.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section (Shared) */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Marketing Insights</h2>
              <p className="font-body-md text-on-surface-variant">Thought leadership and behavioral analysis from our global outreach team.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Whitepaper", title: "Neural Marketing 2026", desc: "The impact of generative AI on high-fidelity behavioral targeting and conversion." },
              { category: "Global Audit", title: "The Narrative Satiety Index", desc: "Mapping the threshold of brand fatigue across multi-national digital ecosystems." },
              { category: "Case Study", title: "Project Alpha: Penetration", desc: "How we achieved 94% market share displacement for a Tier 1 automotive client." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high transition-all group cursor-pointer">
                <div className="font-label-sm text-secondary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8 tracking-tighter">Ready for Global <span className="text-primary italic">Saturation?</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            The difference between a campaign and a movement is the precision of its underlying architecture.
          </p>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block">
            Schedule a Strategy Session
          </Link>
        </section>
      </main>
    </div>
  );
}
