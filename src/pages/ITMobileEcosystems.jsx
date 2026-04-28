import React from 'react';
import { Link } from 'react-router-dom';

export default function ITMobileEcosystems() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/it" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to IT Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              Institutional Mobility
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              The App is the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Enterprise Interface.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              We orchestrate complex mobile ecosystems that bridge the gap between legacy institutional scale and seamless user friction. Native precision meets global cross-platform agility.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
                Schedule Roadmap Session
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="/assets/mobile_enterprise_mockups.png" 
                alt="Mobile Enterprise Mockups" 
                className="rounded-[32px] w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Platform Split Section */}
        <section className="py-section-gap">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Platform-Specific Engineering</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We don't believe in "one size fits all." We choose the stack that aligns with your performance and security mandates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full"></div>
              <h3 className="font-headline-md text-3xl text-on-surface mb-6">Native Precision</h3>
              <p className="font-body-md text-on-surface-variant mb-8">Uncompromising performance and seamless OS integration for iOS (Swift) and Android (Kotlin). Essential for mission-critical offline tools and high-security biometric needs.</p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs font-black uppercase tracking-widest border border-white/10">SWIFT</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs font-black uppercase tracking-widest border border-white/10">KOTLIN</span>
              </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
              <h3 className="font-headline-md text-3xl text-on-surface mb-6">Global Agility</h3>
              <p className="font-body-md text-on-surface-variant mb-8">Unified codebases using Flutter or React Native to ensure rapid deployment across vast workforce segments without duplicating operational overhead.</p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs font-black uppercase tracking-widest border border-white/10">FLUTTER</span>
                <span className="px-4 py-2 bg-white/5 rounded-lg text-xs font-black uppercase tracking-widest border border-white/10">REACT NATIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Integration Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Security &amp; Ecosystem Integration</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                Mobile applications for conglomerates must hook into existing ERP/CRM systems while maintaining strict compliance with global data sovereignty laws (GDPR, HIPAA, MDM).
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <div>
                    <p className="text-on-surface font-bold text-sm">Advanced MDM Implementation</p>
                    <p className="text-on-surface-variant text-xs font-body-md uppercase tracking-widest">Mobile Device Management</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">api</span>
                  </div>
                  <div>
                    <p className="text-on-surface font-bold text-sm">ERP / CRM Live Sync</p>
                    <p className="text-on-surface-variant text-xs font-body-md uppercase tracking-widest">SAP, Salesforce, Oracle</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <p className="text-on-surface font-bold text-sm">GDPR & Data Sovereignty</p>
                    <p className="text-on-surface-variant text-xs font-body-md uppercase tracking-widest">Global Compliance Architecture</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-secondary/10 blur-[80px] rounded-full group-hover:bg-secondary/20 transition-all"></div>
              <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center relative z-10 bg-black/40">
                <span className="material-symbols-outlined text-secondary text-5xl mb-6">hub</span>
                <h3 className="font-headline-md text-2xl text-white mb-4 uppercase tracking-tighter">Integration Panel</h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-10">We architect the middleware that bridges the app to your core database clusters, ensuring real-time telemetry with zero-packet-loss.</p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">Biometric Auth</div>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">Offline Cache</div>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">E2E Encryption</div>
                   <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">Delta Sync</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-section-gap text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Empower Your Workforce.</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            The transition from desktop-first to mobility-first is the difference between stagnation and market leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(82,183,136,0.4)] transition-all inline-block text-center">
              Request Mobility Strategy
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Platform Comparison
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
