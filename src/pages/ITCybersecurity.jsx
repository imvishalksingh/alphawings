import React from 'react';
import { Link } from 'react-router-dom';

export default function ITCybersecurity() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/it" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to IT Services
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-error/10 text-error text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-error/20">
              Cyber Defence HQ
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Neutralize Threats. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-error to-red-400">Secure Sovereign Assets.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              In an era of zero-day exploits and algorithmic warfare, your perimeter is your greatest vulnerability. We provide 24/7 SOC monitoring and proactive threat neutralizing for the world's most targeted entities.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-error text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all inline-block text-center">
                Initiate Emergency Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-error/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="/assets/cybersecurity_soc_dashboard.png" 
                alt="Cybersecurity SOC Dashboard" 
                className="rounded-[32px] w-full h-auto object-cover"
              />
              <div className="absolute top-8 right-8 flex items-center gap-2 bg-error px-4 py-1.5 rounded-full animate-pulse shadow-lg shadow-error/40">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-white text-[10px] font-black uppercase tracking-widest">LIVE SOC MONITORING</span>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section - Threat Categories */}
        <section className="py-section-gap">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">The Modern Threat Landscape</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Silence is not security. Our sensors detect thousands of probing attempts per minute against unprotected infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "security_update_warning", title: "Ransomware 2.0", desc: "Advanced double-extortion tactics that target backup systems before encryption.", color: "text-red-500" },
              { icon: "bug_report", title: "Zero-Day Exploits", desc: "Undiscovered vulnerabilities targeted by state-sponsored algorithmic probing.", color: "text-orange-500" },
              { icon: "phishing", title: "Cognitive Phishing", desc: "Deep-fake assisted social engineering targeting executive decision-making layers.", color: "text-yellow-500" },
              { icon: "hub", title: "Supply Chain Risk", desc: "Compromises in 3rd-party dependencies that bypass traditional perimeters.", color: "text-blue-500" }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all">
                <span className={`material-symbols-outlined text-4xl mb-6 ${item.color}`}>{item.icon}</span>
                <h4 className="font-headline-md text-xl text-on-surface mb-4">{item.title}</h4>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SLA & Compliance Panel */}
        <section className="py-section-gap bg-[#1a0a0a] rounded-[48px] border border-error/20 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-error/10 blur-[150px] rounded-full -mr-48 -mb-48"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-8 tracking-tighter">Guaranteed Response</h2>
              <p className="font-body-lg text-red-100/60 mb-12">
                In a breach scenario, seconds determine the scale of the loss. Our global response teams operate with legally-bound SLA tiers for absolute peace of mind.
              </p>
              <div className="space-y-4">
                {[
                  { tier: "Tier 1: Critical", time: "15 Minutes", desc: "Immediate isolation and threat neutralizing by lead architects." },
                  { tier: "Tier 2: Urgent", time: "60 Minutes", desc: "Comprehensive system analysis and perimeter hardening." },
                  { tier: "Tier 3: Routine", time: "4 Hours", desc: "Non-critical vulnerability patching and documentation." }
                ].map((sla, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="text-white font-bold text-xs uppercase tracking-widest">{sla.tier}</p>
                      <p className="text-red-100/40 text-xs">{sla.desc}</p>
                    </div>
                    <span className="text-error font-black tracking-tighter text-lg">{sla.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-10 rounded-3xl border border-white/10 bg-black/40">
              <h3 className="font-headline-md text-2xl text-white mb-8">Global Compliance</h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "SOC2 TYPE II", status: "CERTIFIED" },
                  { label: "GDPR READY", status: "VERIFIED" },
                  { label: "ISO 27001", status: "CERTIFIED" },
                  { label: "HIPAA COMPLIANT", status: "AUDITED" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 border border-white/5 rounded-2xl">
                    <span className="material-symbols-outlined text-error text-3xl mb-4">verified</span>
                    <p className="text-white font-black text-[10px] tracking-widest mb-1">{item.label}</p>
                    <p className="text-error/60 font-black text-[8px] tracking-[0.2em]">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-section-gap text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-error/20">
            <span className="material-symbols-outlined text-error text-4xl">gpp_maybe</span>
          </div>
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Are You Exposed?</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            Most institutional perimeters have dormant vulnerabilities. Our "Zero-Trace" security audit will uncover them before bad actors do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-error text-white px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all inline-block text-center">
              Book Free Security Audit
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              View SLA Packages
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
