import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketingSocialMedia() {
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
              Community Engineering
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Orchestrating <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Global Resonance.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Beyond simple engagement: we build indomitable digital ecosystems where brand narrative becomes cultural currency. We engineer social dominance through algorithmic precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
                Launch Social Strategy
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop" 
                alt="Social Media Ecosystem" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Social Dominance Framework */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-gradient-to-br from-surface-container-high/50 to-transparent">
               <h3 className="font-headline-md text-on-background mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">insights</span>
                  Resonance Telemetry
               </h3>
               <div className="space-y-8">
                  {[
                    { label: "Share of Voice", val: "64%", desc: "Dominance in institutional conversations across Tier 1 platforms." },
                    { label: "Viral Velocity", val: "4.2x", desc: "Speed of narrative spread compared to sector average." },
                    { label: "Sentiment Index", val: "A+", desc: "Qualitative health of brand perception in the social ecosystem." }
                  ].map((stat, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex justify-between items-end mb-2">
                           <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[10px]">{stat.label}</span>
                           <span className="text-3xl font-display-md text-secondary">{stat.val}</span>
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">{stat.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">The Social Operation Pillars</h2>
              <div className="space-y-12">
                {[
                  { 
                    title: "Narrative Control", 
                    desc: "Rapid response protocols designed to dominate conversations and neutralize emerging threats in real-time.",
                    icon: "campaign"
                  },
                  { 
                    title: "Elite Community Building", 
                    desc: "Cultivating high-value advocate networks (HVAs) that drive sustainable, organic brand loyalty at institutional scale.",
                    icon: "groups"
                  },
                  { 
                    title: "Trend Pre-emption", 
                    desc: "Proprietary AI models that identify cultural shifts 72 hours before they hit the mainstream.",
                    icon: "radar"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/50 group-hover:border-secondary/50 transition-colors">
                      <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-on-surface mb-2">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Platform Mastery */}
        <section className="py-section-gap">
           <div className="text-center mb-16 md:mb-24">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Vector-Specific Mastery</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We deploy specialized creative units for every major digital vector.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "LinkedIn Elite", desc: "Institutional B2B Authority" },
                { title: "X (Twitter) Ops", desc: "Rapid Response & Newsroom" },
                { title: "Instagram Lux", desc: "High-Fidelity Visual Narrative" },
                { title: "TikTok Native", desc: "Cultural Momentum Capture" }
              ].map((v, i) => (
                <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 text-center group hover:border-secondary transition-all">
                   <h4 className="font-bold text-on-background mb-2">{v.title}</h4>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">{v.desc}</p>
                </div>
              ))}
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

        {/* Insights Section (Shared) */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Social Intelligence</h2>
              <p className="font-body-md text-on-surface-variant">Real-time analysis of the digital attention economy.</p>
            </div>
            <Link to="/insights" className="text-secondary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Whitepaper", title: "The Attention Arbitrage 2026", desc: "Identifying undervalued social vectors for high-fidelity brand seeding." },
              { category: "Report", title: "Social Sentiment & EBITDA", desc: "Correlating digital resonance with long-term institutional value." },
              { category: "Case Study", title: "Viral Saturation: Project Blue", desc: "How we generated 40M+ organic impressions for a luxury launch." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high transition-all group cursor-pointer">
                <div className="font-label-sm text-primary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-secondary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Occupy the <span className="text-secondary italic">Digital</span> Conversation.</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the attention economy, neutrality is the precursor to irrelevance. Own the narrative.
          </p>
          <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
            Initiate Social Audit
          </Link>
        </section>
      </main>
    </div>
  );
}
