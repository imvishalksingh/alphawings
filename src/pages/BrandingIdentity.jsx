import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandingIdentity() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/branding" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Alpha Creative
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              Brand Architecture
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Forging <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Iconic Legacies.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              High-end brand architectural development for luxury and industrial sectors. We build visual identities that command authority, define market sectors, and ensure generational relevance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
                Initiate Identity Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop" 
                alt="Brand Identity Process" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">The Identity Ecosystem</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">A complete suite of architectural assets for global brand dominance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "palette", title: "Proprietary Color Systems", desc: "Scientific color selection based on psychological resonance and cross-medium fidelity for global industrial applications." },
              { icon: "font_download", title: "Typographic Frameworks", desc: "Customized type hierarchies that ensure absolute legibility and institutional character across all digital and physical assets." },
              { icon: "architecture", title: "Geometric Guidelines", desc: "Rigorous grid systems and spatial rules that maintain brand integrity across any scale, from micro-chips to skyscraper signage." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-on-background mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specs Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">The Alpha Identity Protocol</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                We design for permanence. Our identities are engineered to be indomitable symbols that distill complex conglomerate missions into a single, scalable mark.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "verified_user", title: "IP Protection Guidelines", subtitle: "Trademark-Ready Assets" },
                  { icon: "hub", title: "Cross-Division Cohesion", subtitle: "Unified Conglomerate Language" },
                  { icon: "language", title: "Cultural Neutrality", subtitle: "Global Market Readiness" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-on-surface font-bold text-sm">{item.title}</p>
                      <p className="text-on-surface-variant text-xs font-body-md uppercase tracking-widest">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter text-center">Identity Metrics</h3>
               <div className="space-y-8">
                  {[
                    { label: "Cognitive Retention", val: "A+", color: "text-secondary" },
                    { label: "Asset Scalability", val: "Infinite", color: "text-secondary" },
                    { label: "Sector Authority", val: "Top 1%", color: "text-secondary" }
                  ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                        <span className="font-label-sm uppercase tracking-widest text-on-surface-variant text-[10px]">{stat.label}</span>
                        <span className={`text-4xl font-display-md ${stat.color}`}>{stat.val}</span>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Define Your <span className="text-secondary italic">Legacy.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the luxury and industrial sectors, perception is the most valuable commodity you own.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
              Initiate Brand Workshop
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Request Portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
