import React from 'react';
import { Link } from 'react-router-dom';

const mainServices = [
  { 
    title: "Commercial Projects", 
    icon: "corporate_fare", 
    desc: "Large-scale urban developments and premium corporate environments designed for the next generation of global commerce.",
    details: ["Smart Skyscrapers", "Retail Ecosystems", "Innovation Hubs", "Industrial Complexes"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Residential Projects", 
    icon: "home_work", 
    desc: "High-end residential complexes and luxury housing estates that redefine the concept of modern living.",
    details: ["Luxury Penthouse Suites", "Sustainable Urban Living", "Private Estates", "Community Master Planning"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Govt. Projects", 
    icon: "account_balance", 
    desc: "Strategic public infrastructure and national development initiatives that form the backbone of sovereign nations.",
    details: ["Civic Infrastructure", "Public Transit Hubs", "Administrative Complexes", "Security Facilities"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    title: "Road Contracts", 
    icon: "add_road", 
    desc: "Advanced highway engineering and regional connectivity networks built for endurance and efficiency.",
    details: ["Smart Highways", "Bridge Engineering", "Urban Arterial Networks", "Inter-State Logistics Corridors"],
    image: "https://images.unsplash.com/photo-1502600148151-a4982d6604c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const subServices = [
  { name: "Home Construction", icon: "foundation" },
  { name: "Home Renovation", icon: "architecture" },
  { name: "Map Architecture", icon: "map" },
  { name: "Auto Cad 3D Design", icon: "layers" },
  { name: "Interior Designing", icon: "chair" },
  { name: "Plumbing", icon: "plumbing" },
  { name: "Electrician", icon: "electric_bolt" },
  { name: "JCB Work", icon: "construction" },
  { name: "Marvel Work", icon: "diamond" },
  { name: "Titles Work", icon: "border_all" },
  { name: "Man Power Supply", icon: "groups" }
];

export default function InfrastructureServices() {
  return (
    <div className="page-container bg-[#030712] text-white">
      
      {/* Cinematic Hero */}
      <main className="flex-grow">
      {/* Cinematic Hero */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center pt-24 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent z-10"></div>
          <img 
            alt="Dramatic architectural abstraction" 
            className="w-full h-full object-cover opacity-40 scale-110" 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          />
        </div>
        
        <div className="relative z-20 max-w-container-max mx-auto px-margin-edge w-full pt-32">
          <div className="flex justify-start mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to All Services
            </Link>
          </div>
          <div className="max-w-4xl text-center md:text-left items-center md:items-start flex flex-col">
            <span className="font-label-sm text-primary tracking-[0.4em] uppercase mb-6 md:mb-8 block animate-fade-in">Infrastructure Division</span>
            <h1 className="font-display-xl text-display-xl mb-6 md:mb-8 leading-[1.1] tracking-tighter">
  Alpha Infrastructure
</h1>
<p className="font-body-lg text-lg md:text-xl text-slate-400 max-w-2xl mb-10 md:mb-12 leading-relaxed">
  Global construction, industrial engineering, and national road networks. We are a multi-sector engineering force specialized in large-scale structural development.
</p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <Link to="/contact" className="bg-primary px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold text-on-primary hover:shadow-[0_0_40px_rgba(183,196,255,0.4)] transition-all active:scale-95 inline-block text-center">
                Initiate Project Tender
              </Link>
              <Link to="/contact" className="glass-card px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold border border-white/10 hover:bg-white/5 transition-all inline-block text-center">
                Download Capabilities
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stat */}
        <div className="absolute bottom-10 right-margin-edge z-20 hidden lg:block">
          <div className="glass-card p-8 rounded-2xl border-white/10 backdrop-blur-3xl">
            <div className="text-4xl font-black text-primary mb-2">124+</div>
            <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Global Iconic Projects</div>
          </div>
        </div>
      </section>

      {/* Core Sectors Detailed */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-white mb-6 uppercase tracking-tighter">Our Core Sectors</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-body-lg">
              We operate across four strategic pillars, each managed by specialized engineering units and Tier-1 project managers.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {mainServices.map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-16 items-center`}>
                <div className="lg:w-1/2 w-full relative">
                  <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative glass-card rounded-3xl overflow-hidden border border-white/10 group">
                    <img src={service.image} alt={service.title} className="w-full h-[300px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full space-y-6 md:space-y-8 text-center lg:text-left">
                  <span className="material-symbols-outlined text-4xl md:text-5xl text-secondary mx-auto lg:mx-0 block">{service.icon}</span>
                  <h3 className="font-display-xl text-3xl md:text-5xl tracking-tighter">{service.title}</h3>
                  <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-body-lg">{service.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/infrastructure/${service.title.split(' ')[0].toLowerCase()}`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mx-auto lg:mx-0">
                    VIEW SECTOR DETAILS <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Specialized Sub-Services Grid */}
      <section className="py-16 md:py-32 relative">
        <div className="max-w-container-max mx-auto px-margin-edge text-center mb-16 md:mb-24">
          <h2 className="font-headline-lg text-headline-lg mb-6 uppercase tracking-tighter">Specialized Capabilities</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-body-lg">
            From precision architecture to master-level interior finishing, our specialized units deliver absolute quality in every detail.
          </p>
        </div>

        <div className="max-w-container-max mx-auto px-margin-edge grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {subServices.map((service, i) => (
            <div key={i} className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 group hover:bg-primary/5 hover:border-primary/20 transition-all duration-500">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-surface flex items-center justify-center mb-6 md:mb-8 border border-white/5 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl md:text-3xl">{service.icon}</span>
              </div>
              <h4 className="font-headline-md text-xl mb-2 group-hover:text-primary transition-colors">{service.name}</h4>
              <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Workflow Section */}
      <section className="py-16 md:py-32 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <h2 className="font-headline-lg text-headline-lg mb-16 md:mb-24 text-center">THE ALPHA BUILD METHOD</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: "01", title: "Site & Strategic Audit", desc: "Exhaustive geological, logistical, and feasibility analysis to establish an optimized baseline." },
              { step: "02", title: "Structural Architecture", desc: "High-fidelity BIM modeling and advanced engineering simulations for peak structural performance." },
              { step: "03", title: "Surgical Execution", desc: "Phased deployment with real-time site monitoring and precision material management." }
            ].map((step, i) => (
              <div key={i} className="relative p-8 md:p-12 border-l border-white/10 group hover:border-primary transition-colors">
                <div className="text-5xl md:text-6xl font-black text-white/5 absolute top-4 left-8 group-hover:text-primary/10 transition-colors">{step.step}</div>
                <h4 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 relative z-10">{step.title}</h4>
                <p className="text-slate-400 relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1541888941259-792739460273?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Construction background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#030712]/90"></div>
        </div>
        <div className="max-w-4xl mx-auto px-margin-edge relative z-10 text-center">
          <h2 className="font-display-xl text-4xl md:text-7xl mb-6 md:mb-8 uppercase tracking-tighter">Ready for the Next Build?</h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 md:mb-12">
            Connect with our lead project partners to discuss your institutional infrastructure requirements.
          </p>
          <Link to="/contact" className="bg-primary text-on-primary px-8 md:px-16 py-4 md:py-6 rounded-lg font-black text-base md:text-lg hover:shadow-[0_0_50px_rgba(183,196,255,0.5)] transition-all active:scale-95 inline-block">
            ENGAGE ALPHA INFRASTRUCTURE
          </Link>
        </div>
      </section>
    </main>

    </div>
  );
}
