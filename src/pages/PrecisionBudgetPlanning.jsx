import React from 'react';
import { Link } from 'react-router-dom';

export default function PrecisionBudgetPlanning() {
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
              Macro-Resilient Planning
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Dynamic <span className="text-primary italic">Budget</span> Architecture.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Granular forecasting and zero-based budgeting designed for macroeconomic volatility. We align departments and integrate core financial tools to secure margin integrity.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Access Scenario Simulator
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop" 
                alt="Complex Financial Dashboard" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Forecasting & Methodology */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Forecasting Methodology</h2>
              <div className="space-y-8">
                {[
                  { title: "Rolling Forecasts", desc: "Dynamic monthly updates that move beyond traditional annual rigidities.", icon: "sync" },
                  { title: "Zero-Based Budgeting", desc: "Justifying every dollar of spend from the ground up to eliminate waste.", icon: "filter_alt" },
                  { title: "Driver-Based Planning", desc: "Linking financial outcomes directly to operational KPIs and market drivers.", icon: "settings_input_component" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-on-background mb-2">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-surface-container-high/30">
              <h3 className="font-headline-md text-on-background mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
                Macro Sensitivity Model
              </h3>
              <p className="text-sm text-on-surface-variant mb-8">Test your budget against sudden economic shifts using our stress-test module.</p>
              <div className="space-y-6">
                {[
                  { label: "Inflation Surge", impact: "High Risk", value: "+4.2%", color: "text-error" },
                  { label: "FX Volatility (USD/INR)", impact: "Moderate", value: "-1.8%", color: "text-secondary" },
                  { label: "Interest Rate Shock", impact: "Stable", value: "+0.5%", color: "text-primary" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-surface-container border border-outline-variant/30">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">{stat.label}</div>
                      <div className={`text-xs ${stat.color}`}>{stat.impact}</div>
                    </div>
                    <div className="text-xl font-display-md">{stat.value}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="w-full mt-8 py-4 rounded-xl bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs border border-primary/20 hover:bg-primary/20 transition-all inline-block text-center">Launch Scenario Simulator</Link>
            </div>
          </div>
        </section>

        {/* Unique Section: Dashboard & Integrations */}
        <section className="py-section-gap">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-panel p-10 rounded-[32px] border border-white/5 relative overflow-hidden">
              <h3 className="font-headline-md text-on-background mb-8">Actual vs. Plan Dashboard</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Rev Variance", val: "-2.1%", status: "Caution" },
                  { label: "OpEx Efficiency", val: "+8.4%", status: "On Track" },
                  { label: "Cash Runway", val: "22 Mo", status: "Healthy" },
                  { label: "EBITDA Margin", val: "24.2%", status: "On Track" }
                ].map((metric, i) => (
                  <div key={i} className="text-center p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">{metric.label}</div>
                    <div className="text-2xl font-display-md mb-1">{metric.val}</div>
                    <div className="text-[9px] text-primary uppercase font-bold">{metric.status}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-3xl bg-surface-container-high/50 border border-outline-variant/30">
                <h4 className="font-headline-sm mb-4">Department Alignment</h4>
                <p className="text-sm text-on-surface-variant mb-6">Unified budget governance across Product, Sales, and Ops teams via centralized workflows.</p>
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(n => (
                    <div key={n} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center font-bold text-[10px]">DEPT {n}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-panel p-10 rounded-[32px] border border-white/5 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-on-background mb-8">Tool Integrations</h3>
                <div className="grid grid-cols-2 gap-6 opacity-60">
                  <div className="p-4 bg-white/5 rounded-xl text-center font-bold text-xs">SAP</div>
                  <div className="p-4 bg-white/5 rounded-xl text-center font-bold text-xs">ORACLE</div>
                  <div className="p-4 bg-white/5 rounded-xl text-center font-bold text-xs">ANAPLAN</div>
                  <div className="p-4 bg-white/5 rounded-xl text-center font-bold text-xs">XERO</div>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-xs text-on-surface-variant">Continuous real-time data sync ensures your variance reporting is never more than 15 minutes behind reality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shared Sections: Credentials, Confidentiality, Insights, Closing CTA */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-primary uppercase tracking-[0.3em] mb-8">Certifications</h3>
              <div className="flex gap-8 opacity-60">
                <div className="font-bold">CPA Accredited</div>
                <div className="font-bold">IFRS Compliant</div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-primary">gpp_maybe</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">NDA Protection</h4>
                <p className="font-body-md text-sm text-on-surface-variant">All budget data is processed through isolated, air-gapped server environments. We provide enterprise-wide NDAs for all planning staff.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Planning Insights</h2>
              <p className="font-body-md text-on-surface-variant">Mastering the art of capital allocation in uncertain times.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Methodology", title: "Zero-Based Budgeting 101", desc: "A practical guide to implementing ZBB without slowing down operational velocity." },
              { category: "Whitepaper", title: "The Agility Gap", desc: "Why traditional annual budgets are failing in the 2026 economic landscape." },
              { category: "Case Study", title: "Automated Governance", desc: "How a Series C fintech reduced budget variance by 92% in 6 months." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high/50 transition-all cursor-pointer group">
                <div className="font-label-sm text-primary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-32 text-center">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Architect a <span className="text-primary italic">Resilient</span> Financial Future.</h2>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
            Schedule a Demo & Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
