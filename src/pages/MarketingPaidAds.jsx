import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketingPaidAds() {
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
              Paid Acquisition
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Algorithmic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Capital Efficiency.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              High-velocity ad deployment across the global programmatic ecosystem. We treat ad-spend as an investment portfolio, optimizing for maximum yield and minimum waste through neural bidding.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Submit Media Tender
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Ad Network Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Capital Efficiency */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-gradient-to-br from-surface-container-high/50 to-transparent relative group">
                <h3 className="font-headline-md text-on-background mb-8 flex items-center gap-3">
                   <span className="material-symbols-outlined text-primary">monitoring</span>
                   Media Portfolio Yield
                </h3>
                <div className="space-y-8">
                   {[
                     { label: "ROAS Alpha", val: "6.8x", desc: "Average return on ad spend across Tier 1 conglomerate clients." },
                     { label: "CPA Efficiency", val: "-42%", desc: "Reduction in acquisition cost through neural bidding optimization." },
                     { label: "Reach Velocity", val: "A+", desc: "Speed of market saturation across multi-national networks." }
                   ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                         <div className="flex justify-between items-end mb-2">
                            <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[10px]">{stat.label}</span>
                            <span className="text-3xl font-display-md text-primary">{stat.val}</span>
                         </div>
                         <p className="text-xs text-on-surface-variant leading-relaxed">{stat.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">The Ad Engineering Protocol</h2>
              <div className="space-y-12">
                {[
                  { 
                    title: "Programmatic RTB Labs", 
                    desc: "Real-time bidding optimization that identifies and captures high-value impressions before the market reacts.",
                    icon: "speed"
                  },
                  { 
                    title: "Creative Dynamic Sync", 
                    desc: "Automatically generating 1000+ ad variants tailored to individual psychographic profiles in real-time.",
                    icon: "brush"
                  },
                  { 
                    title: "Attribution Sovereignty", 
                    desc: "Bypassing third-party cookie limitations through server-side tracking and identity resolution.",
                    icon: "verified_user"
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
          </div>
        </section>

        {/* Unique Section: Ad Verticals */}
        <section className="py-section-gap">
           <div className="text-center mb-16 md:mb-24">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Institutional Ad-Network Reach</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We operate across the entire global media layer, ensuring no inventory is left unoptimized.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Search Dominance", tier: "High Intent", desc: "Capturing high-value intent at the moment of discovery across Google, Bing, and Baidu." },
                { title: "Social Arbitrage", tier: "Emotional Reach", desc: "Leveraging algorithmic patterns on Meta, LinkedIn, and TikTok for high-fidelity brand seeding." },
                { title: "Native Programmatic", tier: "Contextual Power", desc: "Integrating messaging into high-authority publications (FT, Bloomberg, WSJ) with zero friction." }
              ].map((tier, i) => (
                <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 hover:bg-surface-container-high transition-all group relative overflow-hidden">
                   <div className="font-label-sm text-primary uppercase tracking-widest mb-4">{tier.tier}</div>
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
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Media Insights</h2>
              <p className="font-body-md text-on-surface-variant">Strategic analysis of the global paid acquisition ecosystem.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Whitepaper", title: "Programmatic RTB 2026", desc: "The impact of quantum bidding on real-time ad inventory pricing." },
              { category: "Report", title: "Media Inflation Audit", desc: "Analyzing CPA trends across the 40 major global ad-networks." },
              { category: "Case Study", title: "Project Yield: Efficiency", desc: "How we reduced CPA by 62% for a multi-national financial conglomerate." }
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
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Deploy Capital for <span className="text-primary italic">Maximum Yield.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the ad-market, you're either the hunter or the inventory. Engineer your dominance.
          </p>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
            Initiate Media Tender
          </Link>
        </section>
      </main>
    </div>
  );
}
