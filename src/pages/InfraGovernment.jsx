import React from 'react';
import { Link } from 'react-router-dom';

export default function InfraGovernment() {
  return (
    <div className="page-container pt-0 bg-[#030712] text-white">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/infrastructure" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Alpha Infrastructure
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Sovereign Works
            </span>
            <h1 className="font-display-xl text-display-xl text-white mb-8 leading-[1.1] tracking-tighter">
              Foundations of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Sovereign Might.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-slate-400 max-w-xl mb-12">
              Strategic public infrastructure and national development initiatives. We architect the unshakeable backbone of sovereign nations through large-scale civil engineering and mission-critical networks.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Initiate Sovereign Tender
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Government Infrastructure" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Technical Capabilities Section */}
        <section className="py-section-gap border-t border-white/5">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 tracking-tighter">National-Scale Engineering</h2>
            <p className="font-body-md text-slate-400 max-w-2xl mx-auto">We provide the structural foundations required for national stability, security, and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "account_balance", title: "Institutional Hubs", desc: "Designing and constructing secure government administrative centers that reflect national authority and modern efficiency." },
              { icon: "security", title: "Strategic Security", desc: "Hardening critical infrastructure against both physical and asymmetrical threats through advanced structural fortification." },
              { icon: "public", title: "Civil Architecture", desc: "Large-scale public works that enhance the citizen experience, from mass-transit terminals to civic plazas." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-white/5 transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-white mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resilience Panel */}
        <section className="py-section-gap bg-white/5 rounded-[48px] p-8 md:p-16 overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-8 tracking-tighter">Sovereign Resilience Hub</h2>
              <p className="font-body-lg text-slate-300 mb-12">
                Public infrastructure must survive decades of use and unforeseen geopolitical shifts. We build for resilience, utilizing the highest standards of structural integrity.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "verified_user", title: "Security Hardened", subtitle: "Blast & Seismic Resistant" },
                  { icon: "lan", title: "Critical Network Integration", subtitle: "Encrypted Utility Backbones" },
                  { icon: "history_edu", title: "Legacy Longevity", subtitle: "100-Year Structural Mandate" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-slate-400 text-xs font-body-md uppercase tracking-widest">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-black border border-white/10 relative group text-center">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter">Sovereign Metrics</h3>
               <div className="space-y-8">
                  {[
                    { label: "Structural Reliability", val: "99.99%", color: "text-primary" },
                    { label: "Deployment Velocity", val: "High", color: "text-primary" },
                    { label: "Compliance Index", val: "Tier 1", color: "text-primary" }
                  ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                        <span className="font-label-sm uppercase tracking-widest text-slate-400 text-[10px]">{stat.label}</span>
                        <span className={`text-4xl font-display-md ${stat.color}`}>{stat.val}</span>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-white mb-8 tracking-tighter">Build for the <span className="text-primary italic">Century.</span></h2>
          <p className="font-body-lg text-slate-400 mb-12">
            The strength of a nation is written in its stone and steel. We provide the pen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
              Initiate Sovereign Brief
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Audit Existing Assets
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
