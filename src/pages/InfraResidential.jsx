import React from 'react';
import { Link } from 'react-router-dom';

export default function InfraResidential() {
  return (
    <div className="page-container pt-0 bg-[#030712] text-white">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/infrastructure" className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Alpha Infrastructure
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              Luxury Habitats
            </span>
            <h1 className="font-display-xl text-display-xl text-white mb-8 leading-[1.1] tracking-tighter">
              Redefining <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Institutional Living.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-slate-400 max-w-xl mb-12">
              High-end residential complexes and luxury housing estates that redefine the concept of modern living through architectural excellence and smart-grid integration.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
                View Estate Portfolio
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" 
                alt="Residential Infrastructure" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-section-gap border-t border-white/5">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 tracking-tighter">The Modern Habitat</h2>
            <p className="font-body-md text-slate-400 max-w-2xl mx-auto">We bridge the gap between luxury aesthetics and high-performance structural engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "home_max", title: "Luxury Orchestration", desc: "Coordinating premium materials and world-class design to create living spaces that define social status and comfort." },
              { icon: "security", title: "Secured Perimeters", desc: "Integrating advanced surveillance and access control systems into the architectural aesthetic for absolute peace of mind." },
              { icon: "energy_savings_leaf", title: "Eco-Efficiency", desc: "Utilizing passive cooling, solar harvesting, and grey-water recycling to minimize the environmental footprint of large estates." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-white/5 transition-all">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-white mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Panel */}
        <section className="py-section-gap bg-white/5 rounded-[48px] p-8 md:p-16 overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-8 tracking-tighter">Smart Habitat Integration</h2>
              <p className="font-body-lg text-slate-300 mb-12">
                Our residential projects are living ecosystems. We integrate home automation, community networks, and smart utility grids into a unified management interface.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "hub", title: "Community Network Hub", subtitle: "Unified Estate Management" },
                  { icon: "devices_other", title: "Native IoT Integration", subtitle: "Building-Wide Automation" },
                  { icon: "verified_user", title: "Zero-Trust Security", subtitle: "Advanced Access Architecture" }
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
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter">Estate Intelligence</h3>
               <div className="space-y-8">
                  {[
                    { label: "Community Connectivity", val: "10Gbps", color: "text-secondary" },
                    { label: "Energy Independence", val: "62%", color: "text-secondary" },
                    { label: "Safety Rating", val: "A+", color: "text-secondary" }
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
          <h2 className="font-display-xl text-display-xl text-white mb-8 tracking-tighter">Secure Your <span className="text-secondary italic">Sanctuary.</span></h2>
          <p className="font-body-lg text-slate-400 mb-12">
            Luxury is not just an aesthetic; it's the seamless integration of environment, security, and technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
              Request Estate Brief
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Consulting Services
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
