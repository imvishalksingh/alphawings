import React from 'react';
import { Link } from 'react-router-dom';

export default function InfraRoads() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              Arterial Networks
            </span>
            <h1 className="font-display-xl text-display-xl text-white mb-8 leading-[1.1] tracking-tighter">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Seamless Connectivity.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-slate-400 max-w-xl mb-12">
              Advanced highway engineering and regional connectivity networks. We build for endurance, intelligence, and logistical efficiency at a national scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
                Initiate Logistics Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1502600148151-a4982d6604c8?q=80&w=2070&auto=format&fit=crop" 
                alt="Road Infrastructure" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Technical Capabilities Section */}
        <section className="py-section-gap border-t border-white/5">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 tracking-tighter">Arterial Intelligence</h2>
            <p className="font-body-md text-slate-400 max-w-2xl mx-auto">We don't just build roads; we architect the logistical conduits that drive global trade and mobility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "road", title: "Advanced Surfaces", desc: "Utilizing proprietary polymer-modified asphalt and concrete alloys for century-scale durability in extreme climates." },
              { icon: "analytics", title: "Traffic Telemetry", desc: "Integrating real-time sensor networks and AI-driven flow management into the physical road architecture." },
              { icon: "alt_route", title: "Logistics Optimization", desc: "Designing arterial routes that minimize transport friction and maximize regional economic velocity." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-white/5 transition-all">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-white mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Panel */}
        <section className="py-section-gap bg-white/5 rounded-[48px] p-8 md:p-16 overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-8 tracking-tighter">The Logistics Blueprint</h2>
              <p className="font-body-lg text-slate-300 mb-12">
                We manage the entire lifecycle of arterial development, from initial terrain modeling to the final commissioning of smart-highway systems.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "construction", title: "High-Velocity Paving", subtitle: "Industrial-Scale Deployment" },
                  { icon: "hub", title: "Multi-Modal Integration", subtitle: "Port & Rail Connectivity" },
                  { icon: "verified", title: "Sovereign Logistics", subtitle: "Strategic Corridor Development" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
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
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter">Corridor Metrics</h3>
               <div className="space-y-8">
                  {[
                    { label: "Logistical Throughput", val: "+34%", color: "text-secondary" },
                    { label: "Surface Longevity", val: "25yr+", color: "text-secondary" },
                    { label: "Maintenance Reduction", val: "40%", color: "text-secondary" }
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
          <h2 className="font-display-xl text-display-xl text-white mb-8 tracking-tighter">Accelerate Your <span className="text-secondary italic">Connectivity.</span></h2>
          <p className="font-body-lg text-slate-400 mb-12">
            Logistical friction is the silent killer of economic growth. Eliminate it through superior engineering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
              Initiate Logistics Brief
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Request Corridor Audit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
