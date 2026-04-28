import React from 'react';
import { Link } from 'react-router-dom';

export default function FinanceConsulting() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/finance" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Finance Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Diagnostic Excellence
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Engineered <span className="text-primary italic">Financial</span> Consulting.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              We diagnose margin erosion and cost bloat with surgical precision, transforming organizational inefficiency into sustainable profit gain through our proprietary diagnostic framework.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Book a Diagnostic Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
                alt="Financial Audit Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80 mix-blend-lighten"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Diagnostic Framework */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Our Diagnostic Framework</h2>
              <div className="space-y-12">
                {[
                  { 
                    title: "Margin Erosion Analysis", 
                    desc: "Identifying hidden leaks in your operational P&L where capital is being inefficiently deployed.",
                    icon: "trending_down",
                    color: "text-error"
                  },
                  { 
                    title: "Cost Bloat Eradication", 
                    desc: "Streamlining overhead through automated governance and vendor rationalization.",
                    icon: "reduction_capacity",
                    color: "text-primary"
                  },
                  { 
                    title: "Visual Audit Methodology", 
                    desc: "Real-time mapping of capital flows to visualize bottlenecks before they impact the bottom line.",
                    icon: "visibility",
                    color: "text-secondary"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className={`w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/50 group-hover:border-primary/50 transition-colors`}>
                      <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-on-surface mb-2">{item.title}</h3>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-gradient-to-br from-surface-container-high/50 to-transparent">
              <h3 className="font-headline-md text-on-background mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Before / After Model
              </h3>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-error/5 border border-error/10">
                  <div className="font-label-sm text-error uppercase tracking-widest mb-2">Pre-Engagement: Inefficiency</div>
                  <div className="text-2xl font-display-md text-on-background mb-2">18.4% Operating Margin</div>
                  <p className="text-sm text-on-surface-variant">Fragmented vendor spend, high manual reconciliation overhead, and unoptimized debt-to-equity ratio.</p>
                </div>
                <div className="flex justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl">south</span>
                </div>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="font-label-sm text-primary uppercase tracking-widest mb-2">Post-Engagement: Profit Gain</div>
                  <div className="text-2xl font-display-md text-on-background mb-2">26.1% Operating Margin</div>
                  <p className="text-sm text-on-surface-variant">Unified procurement, 94% automated reconciliation, and $4.2M in annual EBITDA lift.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Engagement Tiers & Verticals */}
        <section className="py-section-gap">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 glass-panel p-10 rounded-[32px] border border-white/5">
              <h3 className="font-headline-md text-on-background mb-8">Industry Verticals</h3>
              <ul className="space-y-6">
                {['Advanced Manufacturing', 'Global Fintech', 'High-Volume FMCG'].map((v, i) => (
                  <li key={i} className="flex items-center gap-4 text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="font-body-lg">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-6 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/30">
                <div className="text-3xl font-display-md text-primary mb-1">$120M+</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Avg. EBITDA Lift per Client</div>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
              {[
                { title: "One-Off Audit", tier: "Project-Based", desc: "Specific deep-dive into margin erosion and immediate cost rationalization." },
                { title: "Retainer Advisory", tier: "Quarterly", desc: "Ongoing strategic oversight of P&L health and capital allocation frameworks." },
                { title: "Ongoing Partnership", tier: "Annual", desc: "Full-scale financial transformation with dedicated embedded consultancy teams." }
              ].map((tier, i) => (
                <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group">
                  <div className="font-label-sm text-primary uppercase tracking-widest mb-4">{tier.tier}</div>
                  <h4 className="font-headline-sm text-on-background mb-4">{tier.title}</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shared: Credentials & Confidentiality */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-primary uppercase tracking-[0.3em] mb-8">Credentials & Licenses</h3>
              <div className="grid grid-cols-2 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/SEC_Seal.svg/1200px-SEC_Seal.svg.png" alt="SEC" className="h-12 w-auto object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/FINRA_logo.svg/1200px-FINRA_logo.svg.png" alt="FINRA" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-secondary">verified_user</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Confidentiality Guarantee</h4>
                <p className="font-body-md text-sm text-on-surface-variant">All diagnostic engagements are protected by strict institutional NDAs. Data is secured via military-grade encryption in compliance with SOC2 Type II standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section (Shared) */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Financial Insights</h2>
              <p className="font-body-md text-on-surface-variant">Thought leadership and market analysis from our global strategy team.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Whitepaper", title: "The 2026 Macro Sensitivity Model", desc: "Analyzing the impact of FX volatility on multi-national P&L margins." },
              { category: "Market Commentary", title: "Rate Shock Resilience", desc: "Strategic hedging frameworks for the next cycle of interest rate shifts." },
              { category: "Case Study", title: "Project Phoenix: FMCG Scale", desc: "How we facilitated a 34% margin expansion for a global beverage leader." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high/50 transition-all cursor-pointer group">
                <div className="font-label-sm text-secondary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 p-12 rounded-[40px] bg-gradient-to-r from-primary/10 via-surface-container to-secondary/10 border border-white/5 text-center">
            <h3 className="font-headline-md text-on-background mb-4">Subscribe to the Weekly Briefing</h3>
            <p className="font-body-md text-on-surface-variant mb-8 max-w-xl mx-auto">Get strategic macro trends and financial compliance updates delivered directly to your executive suite.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="executive@enterprise.com" className="flex-grow px-6 py-4 rounded-xl bg-surface-container border border-outline-variant text-on-surface focus:outline-none focus:border-primary transition-colors" />
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs">Join Briefing</button>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Secure Your Absolute <span className="text-primary italic">Financial</span> Advantage.</h2>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
            Book a Professional Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
