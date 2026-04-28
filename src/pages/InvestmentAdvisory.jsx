import React from 'react';
import { Link } from 'react-router-dom';

export default function InvestmentAdvisory() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/finance" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Finance Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              High-Net-Worth Advisory
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Strategic <span className="text-secondary italic">Wealth</span> Preservation.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Bespoke portfolio management for institutional entities and high-net-worth individuals. We leverage multi-asset class coverage and a rigorous risk framework to secure long-term alpha.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(33,203,165,0.4)] transition-all inline-block text-center">
                Request Portfolio Review
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
                alt="Stock Market Analysis" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Asset Coverage & Philosophy */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Asset Class Coverage</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Equities", icon: "show_chart", desc: "Global public equity strategies across growth and value." },
                  { title: "Bonds/Fixed Income", icon: "account_balance", desc: "Institutional-grade sovereign and corporate debt." },
                  { title: "Alternatives", icon: "diamond", desc: "Private equity, hedge funds, and venture capital access." },
                  { title: "Real Estate", icon: "apartment", desc: "Commercial and residential real estate portfolio optimization." }
                ].map((asset, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 bg-surface-container-low/50">
                    <span className="material-symbols-outlined text-secondary mb-4">{asset.icon}</span>
                    <h3 className="font-headline-sm text-on-background mb-2">{asset.title}</h3>
                    <p className="text-sm text-on-surface-variant">{asset.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="font-headline-md text-on-surface mb-6">Allocation Philosophy</h3>
                <p className="font-body-lg text-on-surface-variant mb-6">We don't follow trends; we follow mathematics. Our philosophy is rooted in dynamic rebalancing and evidence-based risk parity.</p>
                <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10 flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-3xl">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-on-background mb-2">Risk Tolerance Profiling</h4>
                    <p className="text-sm text-on-surface-variant">We utilize advanced behavioral psychometrics to determine your absolute risk floor, ensuring your portfolio never exceeds your psychological limit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Client Segments & Track Record */}
        <section className="py-section-gap bg-surface-container-lowest/50 -mx-margin-edge px-margin-edge">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Institutional-Grade Performance</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Anonymised track record across our core client segments.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { segment: "Institutional", yield: "12.4%", desc: "Pension funds and sovereign wealth entities seeking steady alpha." },
                { segment: "HNWI", yield: "18.1%", desc: "High-net-worth individuals focused on aggressive growth and tax alpha." },
                { segment: "Family Offices", yield: "9.7%", desc: "Multigenerational wealth preservation with low volatility mandates." }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-10 rounded-[32px] border border-white/5 text-center group hover:bg-surface-container-high transition-all">
                  <div className="font-label-sm text-secondary uppercase tracking-widest mb-6">{item.segment}</div>
                  <div className="text-5xl font-display-md text-on-background mb-4 group-hover:scale-110 transition-transform">{item.yield}</div>
                  <div className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-6">Net Annualized Returns (3yr Avg)</div>
                  <p className="font-body-md text-on-surface-variant text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shared: Credentials & Compliance */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-secondary uppercase tracking-[0.3em] mb-8">Regulatory Compliance</h3>
              <div className="grid grid-cols-3 gap-8 opacity-60 grayscale">
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">SEBI</div>
                  <div className="text-[10px] text-on-surface-variant uppercase">India</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">MiFID II</div>
                  <div className="text-[10px] text-on-surface-variant uppercase">European Union</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">FINRA</div>
                  <div className="text-[10px] text-on-surface-variant uppercase">United States</div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-primary">security</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Confidentiality Note</h4>
                <p className="font-body-md text-sm text-on-surface-variant">Client portfolios are managed via encrypted offshore sub-custodians. We maintain zero-knowledge proof architecture for all trade execution data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Insights Section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Investment Insights</h2>
              <p className="font-body-md text-on-surface-variant">Global market commentary and portfolio strategy updates.</p>
            </div>
            <Link to="/insights" className="text-secondary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Market Commentary", title: "The 2026 Asset Allocation Shift", desc: "Why we are moving 12% of institutional AUM into private alternative markets." },
              { category: "Report", title: "Real Estate Liquidity Analysis", desc: "Assessing the exit velocity of commercial holdings in high-interest environments." },
              { category: "Article", title: "Tax Alpha Strategies", desc: "Cross-border tax optimization for family offices operating in multiple jurisdictions." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high/50 transition-all cursor-pointer group">
                <div className="font-label-sm text-secondary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-secondary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Secure Your Multi-Generational <span className="text-secondary italic">Wealth.</span></h2>
          <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(33,203,165,0.4)] transition-all inline-block text-center">
            Schedule a Confidential Briefing
          </Link>
        </section>
      </main>
    </div>
  );
}
