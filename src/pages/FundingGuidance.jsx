import React from 'react';
import { Link } from 'react-router-dom';

export default function FundingGuidance() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/finance" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Finance Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-tertiary/20">
              Capital Access HQ
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Accelerating <span className="text-tertiary italic">Capital</span> Deployment.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Navigating the complexities of capital markets. From pre-seed to Series C and IPO, we provide the network, deal structuring, and pitch support required for successful funding rounds.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-tertiary text-on-tertiary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,165,91,0.4)] transition-all inline-block text-center">
                Request Investor Intro
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" 
                alt="Handshake and Financial Documents" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Funding Stage Map & Network */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The Funding Roadmap</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Surgical support at every stage of your capital journey.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 hidden md:block -z-0"></div>
            {[
              { stage: "Pre-Seed / Seed", desc: "Focus on deck narrative, market sizing, and angel network access." },
              { stage: "Series A / B", desc: "Metric auditing, unit economic modeling, and lead investor outreach." },
              { stage: "Series C+", desc: "Late-stage PE bridge, secondary market prep, and global expansion funding." },
              { stage: "IPO Prep", desc: "Governance, regulatory compliance, and public market roadshow advisory." }
            ].map((step, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 bg-surface-container relative z-10 hover:border-tertiary transition-all">
                <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary font-bold mb-6">{i+1}</div>
                <h3 className="font-headline-sm text-on-background mb-3">{step.stage}</h3>
                <p className="text-sm text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Section: Network Showcase & Support */}
        <section className="py-section-gap">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Pitch Deck & Deal Support</h2>
                <div className="grid gap-6">
                  {[
                    { title: "Deck Engineering", desc: "Crafting narratives that resonate with Tier-1 institutional LPs.", icon: "presentation_chart" },
                    { title: "Data Room Governance", desc: "Setting up secure, structured environments for due diligence.", icon: "database" },
                    { title: "Term Sheet Advisory", desc: "Negotiating equity splits, anti-dilution, and liquidation prefs.", icon: "description" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <span className="material-symbols-outlined text-tertiary">{item.icon}</span>
                      <div>
                        <h4 className="font-headline-sm text-on-background mb-2">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-gradient-to-br from-tertiary/5 to-transparent text-center">
              <div className="text-sm font-label-sm text-tertiary uppercase tracking-[0.2em] mb-12">Capital Raised to Date</div>
              <div className="text-6xl md:text-7xl font-display-md text-on-background mb-4">$4.2B+</div>
              <p className="text-on-surface-variant font-body-md mb-12">Total capital facilitated across our global partner network.</p>
              <div className="grid grid-cols-3 gap-8 opacity-40 grayscale filter hover:grayscale-0 transition-all duration-500">
                <div className="font-bold text-xl">SEQUOIA</div>
                <div className="font-bold text-xl">ANDREESSEN</div>
                <div className="font-bold text-xl">TIGER</div>
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Credentials & Confidentiality */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-tertiary uppercase tracking-[0.3em] mb-8">Capital Sources</h3>
              <div className="flex flex-wrap gap-4">
                {['Venture Capital', 'Private Equity', 'Debt Financing', 'Sovereign Grants', 'IPO Listing'].map((source, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant text-xs font-bold uppercase tracking-widest text-on-surface-variant">{source}</span>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-secondary">shield</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Transaction Confidentiality</h4>
                <p className="font-body-md text-sm text-on-surface-variant">All deal flows and investor introductions are protected by stringent multi-party NDAs and SEC-compliant data security protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Insights Section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Funding Insights</h2>
              <p className="font-body-md text-on-surface-variant">Expert analysis on current venture capital and private equity cycles.</p>
            </div>
            <Link to="/insights" className="text-tertiary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Market Analysis", title: "The State of Series B in 2026", desc: "Why valuation multiples are tightening and how to defend your cap table." },
              { category: "Guide", title: "Strategic Debt Structuring", desc: "Leveraging debt without over-encumbering your future growth equity." },
              { category: "Whitepaper", title: "Global LP Sentiment Report", desc: "Analyzing the movement of sovereign wealth into emerging market tech hubs." }
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
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Initiate Your Next <span className="text-tertiary italic">Funding</span> Round.</h2>
          <Link to="/contact" className="bg-tertiary text-on-tertiary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(255,165,91,0.4)] transition-all inline-block text-center">
            Consult Our Funding Strategists
          </Link>
        </section>
      </main>
    </div>
  );
}
