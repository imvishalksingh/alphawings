import React from 'react';
import { Link } from 'react-router-dom';

export default function InfraCommercial() {
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
              High-Density Development
            </span>
            <h1 className="font-display-xl text-display-xl text-white mb-8 leading-[1.1] tracking-tighter">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Commercial Dominance.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-slate-400 max-w-xl mb-12">
              Large-scale urban developments and premium corporate environments. We design the next generation of global commerce infrastructure with an emphasis on intelligence and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Submit Project Tender
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Commercial Infrastructure" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="py-section-gap border-t border-white/5">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 tracking-tighter">Institutional-Grade Engineering</h2>
            <p className="font-body-md text-slate-400 max-w-2xl mx-auto">We treat commercial buildings as high-performance machines, optimizing for operational efficiency and user productivity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "smart_city", title: "Smart Integration", desc: "Full-stack IoT and building automation baked into the structural core, enabling real-time telemetry of energy and traffic flow." },
              { icon: "architecture", title: "Structural Alpha", desc: "Century-scale durability through advanced alloy and concrete sciences, ensuring your institutional assets maintain value for generations." },
              { icon: "eco", title: "Net-Zero Targets", desc: "Integrating renewable energy grids and advanced water recycling systems to meet the strictest global sustainability mandates." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-white/5 transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-white mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Panel */}
        <section className="py-section-gap bg-white/5 rounded-[48px] p-8 md:p-16 overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-8 tracking-tighter">The Commercial Blueprint</h2>
              <p className="font-body-lg text-slate-300 mb-12">
                We manage the entire development lifecycle, from initial geological surveys to the final commissioning of high-density corporate hubs.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "construction", title: "Rapid Structural Deployment", subtitle: "Modular Construction Systems" },
                  { icon: "hub", title: "Mixed-Use Orchestration", subtitle: "Dynamic Asset Allocation" },
                  { icon: "verified", title: "Sovereign Compliance", subtitle: "Global Regulatory Alignment" }
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
            <div className="p-10 rounded-3xl bg-black border border-white/10 relative group">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter text-center">Development Metrics</h3>
               <div className="space-y-8">
                  {[
                    { label: "Operational Efficiency", val: "98.4%", color: "text-primary" },
                    { label: "Structural ROI Velocity", val: "1.4x", color: "text-primary" },
                    { label: "Energy Optimization", val: "A+", color: "text-primary" }
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
          <h2 className="font-display-xl text-display-xl text-white mb-8 tracking-tighter">Architect Your <span className="text-primary italic">Presence.</span></h2>
          <p className="font-body-lg text-slate-400 mb-12">
            In the global market, your physical footprint is the ultimate manifestation of institutional power.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
              Initiate Project Tender
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Download Sector Brief
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
