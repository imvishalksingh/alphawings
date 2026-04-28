import React from 'react';
import { Link } from 'react-router-dom';

export default function GovDocumentationSupport() {
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
              Institutional Records
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1]">
              Rigorous <span className="text-primary italic">Documentation</span> Structuring.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Ensuring absolute compliance with federal frameworks and archival standards through surgical documentation taxonomy and version control.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Initiate Consultation
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2030&auto=format&fit=crop" 
                alt="Government Archives" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80 mix-blend-lighten"
              />
            </div>
          </div>
        </section>

        {/* Unique Section: Document Types & Compliance */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Scope & Compliance</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Policy & Legal", desc: "Legislative drafting and regulatory filing structures." },
                  { title: "Archival Records", desc: "NARA-compliant digital and physical storage protocols." },
                  { title: "Operational SOPs", desc: "Standardizing internal government workflow documentation." },
                  { title: "Public Records", desc: "GDPR and FOIA responsive documentation systems." }
                ].map((item, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 bg-surface-container-low/50">
                    <h3 className="font-headline-sm text-on-background mb-2">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-outline-variant/30">
                <h3 className="font-headline-md text-on-surface mb-6">Structuring Methodology</h3>
                <p className="text-on-surface-variant mb-6">We utilize a proprietary multi-tier taxonomy engine for high-precision version control and retrieval.</p>
                <div className="space-y-4">
                  {['Hierarchical Taxonomy Tagging', 'Automated Version Sequencing', 'Cross-Jurisdiction Legal Mapping', 'Multilingual Document Support'].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span className="text-sm font-label-md">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Audit Trail Dashboard */}
        <section className="py-section-gap">
          <div className="glass-panel p-10 rounded-[40px] border border-white/5 bg-gradient-to-br from-surface-container-high/50 to-transparent">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <h3 className="font-headline-lg text-on-background mb-2">Audit Trail Dashboard</h3>
                <p className="text-on-surface-variant">Real-time oversight of document lifecycle and change history.</p>
              </div>
              <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest">Live Monitoring</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="pb-4 font-label-sm text-outline uppercase tracking-widest text-[10px]">Document ID</th>
                    <th className="pb-4 font-label-sm text-outline uppercase tracking-widest text-[10px]">Action</th>
                    <th className="pb-4 font-label-sm text-outline uppercase tracking-widest text-[10px]">User</th>
                    <th className="pb-4 font-label-sm text-outline uppercase tracking-widest text-[10px]">Timestamp</th>
                    <th className="pb-4 font-label-sm text-outline uppercase tracking-widest text-[10px]">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-body-md text-on-surface-variant">
                  {[
                    { id: "POL-2026-084", action: "Revise Taxonomy", user: "Lead Archivist", time: "2 min ago", status: "Verified" },
                    { id: "LGL-X9-001", action: "Encryption Roll", user: "Security Auth", time: "14 min ago", status: "Active" },
                    { id: "ARC-FED-55", action: "Physical Archive Sync", user: "Ops System", time: "1 hr ago", status: "Synced" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-outline-variant/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 font-mono text-xs">{row.id}</td>
                      <td className="py-4 text-on-background">{row.action}</td>
                      <td className="py-4">{row.user}</td>
                      <td className="py-4">{row.time}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase">{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Shared: Accreditations & Security */}
        <section className="py-section-gap border-y border-outline-variant/30">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-label-sm text-primary uppercase tracking-[0.3em] mb-8">Govt Body Recognitions</h3>
              <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="font-bold text-lg">ISO 15489</div>
                <div className="font-bold text-lg">NARA Certified</div>
                <div className="font-bold text-lg">GDPR Compliant</div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high/50 border border-white/5 flex gap-6 items-start">
              <span className="material-symbols-outlined text-3xl text-primary">security</span>
              <div>
                <h4 className="font-headline-sm text-on-background mb-2">Security Posture</h4>
                <p className="font-body-md text-sm text-on-surface-variant">We employ zero-trust access controls and AES-256 encryption at rest for all document repositories.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shared: Insights Section */}
        <section className="py-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Gov Insights</h2>
              <p className="font-body-md text-on-surface-variant">Policy briefings and regulatory analysis for the public sector.</p>
            </div>
            <Link to="/insights" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              View All Reports <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Policy Briefing", title: "The 2026 e-ID Framework", desc: "Analyzing new federal legislation on digital sovereignty and citizen identification." },
              { category: "Report", title: "Global DPI Benchmarks", desc: "A country-level comparison of digital public infrastructure adoption rates." },
              { category: "Spotlight", title: "AI in Archival Systems", desc: "How machine learning is automating document taxonomy at the federal level." }
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
          <h2 className="font-headline-xl text-display-md text-on-surface mb-8">Secure Your Institutional <span className="text-primary italic">Record.</span></h2>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
            Initiate a Compliance Briefing
          </Link>
        </section>
      </main>
    </div>
  );
}
