import React from 'react';
import { Link } from 'react-router-dom';

export default function GovDigitalServices() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/government" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Government Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Modernization HQ
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Architecting <span className="text-primary italic">Citizen</span> Portals.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              End-to-end modernization of legacy government systems into high-availability, cloud-native infrastructures designed for citizen accessibility and zero-trust security.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                View Modernization Roadmap
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1451187530220-4e2a1a445d06?q=80&w=2070&auto=format&fit=crop" 
                alt="Cyber Infrastructure Visualization" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Citizen Portal Showcase */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Citizen Portal Excellence</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">We focus on high-accessibility UX that bridges the gap between complex governance and citizen needs.</p>
              <div className="space-y-6">
                {[
                  { title: "WCAG 2.1 Compliance", desc: "Ensuring all services are accessible to citizens with disabilities." },
                  { title: "Interoperability", desc: "API-first architectures that connect disparate legacy databases." },
                  { title: "High-Availability SLAs", desc: "99.99% uptime guarantee for mission-critical public services." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary">universal_currency_alt</span>
                    <div>
                      <h4 className="font-headline-sm text-on-background mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="glass-panel p-2 rounded-[32px] border border-white/10 shadow-2xl">
                <div className="bg-surface-container rounded-[24px] overflow-hidden border border-outline-variant/30">
                  <div className="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-outline-variant/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-error/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-warning/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-success/30"></div>
                    </div>
                    <div className="mx-auto text-[10px] font-mono text-outline uppercase tracking-widest">gov-portal-v2.mainnet</div>
                  </div>
                  <div className="p-8">
                    <div className="h-4 w-32 bg-primary/20 rounded-full mb-6"></div>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="h-24 rounded-xl bg-surface-container-low border border-outline-variant/20"></div>
                      <div className="h-24 rounded-xl bg-surface-container-low border border-outline-variant/20"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-outline-variant/20 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-outline-variant/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl border border-primary/30 shadow-xl max-w-[200px]">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">IAM Success</div>
                <div className="text-xl font-display-md">99.9%</div>
                <div className="text-[10px] text-on-surface-variant">Auth resolution rate across legacy silos.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Deployment Models */}
        <section className="py-section-gap">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Flexible Deployment Models</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Sovereign data hosting tailored to institutional mandates.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { model: "GovCloud", icon: "cloud_done", desc: "Secure multi-tenant public sector cloud environments." },
              { model: "Hybrid Sovereign", icon: "hub", desc: "Sensitive data on-prem, scale workloads in the cloud." },
              { model: "Local On-Prem", icon: "dns", desc: "Absolute air-gapped infrastructure for high-security mandates." }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">{item.icon}</span>
                <h3 className="font-headline-md text-on-background mb-4">{item.model}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shared: Accreditations & Security */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-primary uppercase tracking-[0.3em] mb-8">System Accreditations</h3>
              <div className="flex flex-wrap gap-8 opacity-60 grayscale">
                <div className="font-bold text-lg">FISMA High</div>
                <div className="font-bold text-lg">FedRAMP Ready</div>
                <div className="font-bold text-lg">ISO 27001</div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-primary">encrypted</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Zero-Trust Posture</h4>
                <p className="font-body-md text-sm text-on-surface-variant">Network-wide IAM and pervasive encryption ensure that citizen data is never exposed, even in the event of peripheral breaches.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Insights Section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Digital Public Infrastructure</h2>
              <p className="font-body-md text-on-surface-variant">Mastering GovTech and modernization at global scale.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Case Study", title: "Project Nexus: E-Health", desc: "How we facilitated a cloud-native transition for a national health service with 60M+ users." },
              { category: "Framework", title: "Open Standards in Gov", desc: "Why API-first development is the only viable path to long-term citizen portal sustainability." },
              { category: "Analysis", title: "Legacy Debt Eradication", desc: "A financial and technical roadmap for retiring 20-year-old mainframe infrastructures." }
            ].map((article, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-surface-container-high/50 transition-all cursor-pointer group">
                <div className="font-label-sm text-primary uppercase tracking-widest mb-4 text-[10px]">{article.category}</div>
                <h4 className="font-headline-sm text-on-background mb-4 group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="font-body-md text-sm text-on-surface-variant">{article.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center">
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Architect Your Digital <span className="text-primary italic">Sovereignty.</span></h2>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
            Schedule a Modernization Audit
          </Link>
        </section>
      </main>
    </div>
  );
}
