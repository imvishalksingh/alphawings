import React from 'react';
import { Link } from 'react-router-dom';

export default function GovComplianceAdvisory() {
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
              Audit Readiness HQ
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Proactive <span className="text-primary italic">Compliance</span> Advisory.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Navigating intricate legislative requirements with automated risk mitigation and continuous monitoring against evolving global public sector standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Access Risk Register
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                alt="Regulatory Documents and Gavel" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80 mix-blend-overlay"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Risk Register & Monitoring */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Risk Register Visual</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">Live heatmap of compliance exposures and legislative friction points.</p>
              <div className="glass-panel p-8 rounded-[32px] border border-white/5 bg-surface-container-low/50">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-video">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`rounded-lg border border-outline-variant/30 flex items-center justify-center ${i === 0 ? 'bg-error/30' : i < 4 ? 'bg-warning/20' : 'bg-success/10'}`}>
                      <span className="text-[10px] font-bold uppercase tracking-tighter opacity-50">Tier {i+1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-error"><span className="w-2 h-2 rounded-full bg-error"></span> Critical</div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warning"><span className="w-2 h-2 rounded-full bg-warning"></span> Moderate</div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-success"><span className="w-2 h-2 rounded-full bg-success"></span> Stable</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="font-headline-md text-on-surface mb-6">Continuous Monitoring</h3>
                <p className="font-body-lg text-on-surface-variant mb-8">Our automated platform scans for regulatory updates 24/7, providing live dashboards for executive oversight.</p>
                <div className="space-y-6">
                  {[
                    { title: "Audit Readiness Drill", desc: "Pre-audit checklists and simulation drills to ensure 100% first-pass success." },
                    { title: "Incident Response Playbook", desc: "Detailed protocols for legislative breaches or compliance drift." },
                    { title: "Regulatory Tracker", desc: "Live monitoring of country-level legislative changes (GDPR, FISMA, etc)." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                      <div>
                        <h4 className="font-headline-sm text-on-background mb-1">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Regulatory Scope */}
        <section className="py-section-gap">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Standards & Compliance Coverage</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Absolute alignment with global and regional regulatory bodies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['FISMA', 'FedRAMP', 'ISO 27001', 'SOC2 TYPE II', 'GDPR', 'HIPAA'].map((std, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-primary/5 transition-all">
                <span className="font-bold text-on-background group-hover:text-primary transition-colors">{std}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant mt-2">Certified</span>
              </div>
            ))}
          </div>
        </section>

        {/* Shared: Accreditations & Security */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-primary uppercase tracking-[0.3em] mb-8">Institutional Recognitions</h3>
              <div className="flex gap-8 opacity-60">
                <div className="font-bold">GSA Schedule 70</div>
                <div className="font-bold">NIST Compliant</div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-primary">security</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Zero-Trust Architecture</h4>
                <p className="font-body-md text-sm text-on-surface-variant">We implement pervasive encryption and identity-centric access controls, ensuring that your compliance posture is inherently secure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Insights Section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Compliance Briefings</h2>
              <p className="font-body-md text-on-surface-variant">Strategic legislative analysis for public sector leadership.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Tracker", title: "Live Framework Changes", desc: "Real-time updates on FedRAMP Rev 5 transition requirements and timelines." },
              { category: "Whitepaper", title: "The Risk of Compliance Drift", desc: "Why annual audits are no longer sufficient in the era of continuous deployment." },
              { category: "Op-Ed", title: "Technology and Public Law", desc: "Architecting systems that can adapt to rapid legislative shifts without complete refactoring." }
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
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Achieve Absolute <span className="text-primary italic">Regulatory</span> Integrity.</h2>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
            Schedule an Audit Simulation
          </Link>
        </section>
      </main>
    </div>
  );
}
