import React from 'react';
import { Link } from 'react-router-dom';

export default function PoliticalSocialMedia() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/political" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Strategic Policy
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
              Narrative Engineering
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Controlling the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Consensus.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Real-time narrative control across all platforms. We manage perception, deploy rapid response protocols, and amplify strategic messaging to ensure your narrative dominates the digital discourse.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
                Initiate Narrative Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop" 
                alt="Social Media Political Management" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">The Rapid Response Matrix</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We operate at the speed of the digital news cycle, ensuring no narrative threat goes unaddressed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "radar", title: "Sentiment Radar", desc: "Constant monitoring of platform discourse using proprietary NLP to identify and neutralize emerging narrative threats before they go viral." },
              { icon: "hub", title: "Amplification Nodes", desc: "Distributing core messaging through high-authority organic networks to ensure maximum organic reach and institutional credibility." },
              { icon: "verified_user", title: "Crisis Mitigation", desc: "Immediate counter-disinformation protocols for high-stakes optics, designed to isolate and debunk false narratives with mathematical precision." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-on-background mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Narrative Control Center</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                Social media in politics is about maintaining the 'consensus reality'. We bridge the gap between broadcast messaging and organic sentiment.
              </p>
              <div className="space-y-4">
                 {["Real-time NLP Sentiment Tracking", "Viral Pattern Recognition", "Automated Narrative Debunking", "Multi-platform Synchronization"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/10">
                       <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-sm">verified</span>
                       </div>
                       <span className="text-xs font-bold uppercase tracking-widest text-on-surface">{item}</span>
                    </div>
                 ))}
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group text-center">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter">Resonance Panel</h3>
               <div className="space-y-8">
                  {[
                    { label: "Narrative Dominance", val: "A+", color: "text-primary" },
                    { label: "Viral Velocity", val: "4.2x", color: "text-primary" },
                    { label: "Sentiment Index", val: "Positive", color: "text-primary" }
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
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Occupy the <span className="text-primary italic">Digital</span> News Cycle.</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the attention economy, the side that controls the social consensus controls the electoral outcome.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
              Initiate Narrative Workshop
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Audit Current Exposure
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
