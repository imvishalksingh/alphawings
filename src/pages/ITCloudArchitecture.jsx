import React from 'react';
import { Link } from 'react-router-dom';

export default function ITCloudArchitecture() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/it" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to IT Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Hyperscale Cloud
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Absolute Resilience. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Zero Latency.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              We architect mission-critical cloud ecosystems that bridge the gap between legacy limitations and sovereign digital independence. Engineered for 99.99% availability at global scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Request Architecture Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="/assets/cloud_architecture_diagram.png" 
                alt="Cloud Architecture Visualization" 
                className="rounded-[32px] w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Social Proof / Trust Banner */}
        <section className="py-12 border-y border-outline/10 flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">cloud_done</span>
            <span className="font-black tracking-tighter text-2xl">99.99% UPTIME</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">verified_user</span>
            <span className="font-black tracking-tighter text-2xl">ISO 27001</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">speed</span>
            <span className="font-black tracking-tighter text-2xl">&lt;50MS LATENCY</span>
          </div>
        </section>

        {/* Process Section - How We Do It */}
        <section className="py-section-gap">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Architectural Methodology</h2>
            <p className="font-body-md text-on-surface-variant">The path from legacy infrastructure to sovereign cloud excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Exhaustive analysis of legacy dependencies and data flow bottlenecking." },
              { step: "02", title: "Design", desc: "Constructing multi-region, load-balanced containerized environments." },
              { step: "03", title: "Migration", desc: "Zero-downtime cutover strategies using proprietary bridge protocols." },
              { step: "04", title: "Optimize", desc: "Continuous cost-analysis and performance tuning via AI orchestration." }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group">
                <span className="text-primary font-black text-4xl mb-6 block opacity-30 group-hover:opacity-100 transition-opacity">{item.step}</span>
                <h4 className="font-headline-md text-xl text-on-surface mb-4">{item.title}</h4>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack / Partner Section */}
        <section className="py-section-gap bg-surface-container rounded-[48px] px-8 md:px-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -mr-48 -mt-48"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">The Sovereign Stack</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                We leverage industry-standard infrastructure-as-code to ensure absolute portability and prevent vendor lock-in. Your data remains under your absolute control.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['AWS Partner', 'GCP Architect', 'Azure Certified', 'Terraform Expert', 'Kubernetes Ops', 'Docker Engine'].map(tech => (
                  <div key={tech} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-xs font-black uppercase tracking-widest">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl border border-white/10 bg-black/20">
              <h3 className="font-headline-md text-2xl text-white mb-8">Migration Path</h3>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-red-500 text-sm">warning</span>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Legacy Phase</p>
                    <p className="text-on-surface-variant text-sm">Monolithic DBs, manual scaling, high operational overhead.</p>
                  </div>
                </div>
                <div className="w-0.5 h-12 bg-outline-variant/30 ml-5"></div>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(91,127,255,0.4)] animate-pulse">
                    <span className="material-symbols-outlined text-primary text-sm">rocket_launch</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold mb-1 uppercase tracking-widest text-[10px]">Alpha Transition</p>
                    <p className="text-on-surface-variant text-sm">Automated CI/CD, microservices decoupling, global CDN edge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-section-gap text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Secure Your Future Scale.</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            Don't let legacy infrastructure dictate your market speed. Join the institutional elite who have migrated to Alpha Cloud.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
              Schedule Free Audit
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Technical Specs
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
