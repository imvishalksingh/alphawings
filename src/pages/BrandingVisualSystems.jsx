import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandingVisualSystems() {
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
              Visual Ecosystems
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Scalable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Cohesion at Scale.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Holistic design ecosystems designed for conglomerates. We ensure absolute consistency across digital platforms, physical environments, and corporate communications through living design systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
                Request System Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop" 
                alt="Visual System Design" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* System Pillars Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Systemic Scalability</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We build living design systems that evolve with your enterprise, providing a unified language for all future growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "devices", title: "Digital-First", desc: "Optimizing for pixel-perfect clarity across every screen size and device architecture." },
              { icon: "business", title: "Industrial Scale", desc: "Ensuring visual systems translate to physical signage, fleet branding, and high-impact environments." },
              { icon: "print", title: "High-Fidelity", desc: "Rigorous standards for print production, from luxury stationery to large-scale industrial packaging." },
              { icon: "language", title: "Global Ready", desc: "Multi-script support and cultural color-theory auditing for international deployment." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 group hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-3xl text-secondary mb-6 block group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-sm text-on-background mb-4 text-xl">{card.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">The Living Styleguide</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                We don't just deliver static PDFs. We build interactive design systems that your development and marketing teams can utilize in real-time.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "token", title: "Design Token Architecture", subtitle: "Variable-Based Styling" },
                  { icon: "widgets", title: "Component Libraries", subtitle: "Figma & React Native Ready" },
                  { icon: "verified", title: "Asset Management Hub", subtitle: "Global Brand Repository" }
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
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group overflow-hidden">
               <div className="absolute -inset-10 bg-secondary/5 blur-[80px] rounded-full group-hover:bg-secondary/10 transition-all"></div>
               <div className="space-y-6 relative z-10">
                  <div className="h-4 w-2/3 bg-secondary/20 rounded"></div>
                  <div className="h-4 w-full bg-secondary/10 rounded"></div>
                  <div className="h-4 w-1/2 bg-secondary/20 rounded"></div>
                  <div className="grid grid-cols-4 gap-4 pt-8">
                     {[...Array(4)].map((_, i) => <div key={i} className="aspect-square rounded-full bg-secondary/20 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                  </div>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-[150px] text-secondary">grid_view</span>
               </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Unified Brand <span className="text-secondary italic">Intelligence.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            Consistency is the foundation of institutional trust. Eliminate visual friction across your entire ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
              Initiate System Design
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Request Case Study
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
