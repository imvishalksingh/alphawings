import React from 'react';
import { Link } from 'react-router-dom';

export default function PoliticalDigitalMarketing() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/political" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Strategic Policy
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-secondary/20">
              Digital Warfare
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              Targeted <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Sentiment Shifts.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Hyper-targeted ad deployment across all digital vectors. We optimize campaign spend for maximum emotional resonance and voter conversion through advanced micro-targeting algorithms.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
                Initiate Digital Audit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Global Digital Influence" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Micro-Targeting at Scale</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We deploy localized digital 'nudges' that influence swing voters without alerting opposition trackers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "ads_click", title: "Psychographic Targeting", desc: "Segmenting voters based on psychological drivers rather than just demographics for deeper resonance." },
              { icon: "dynamic_feed", title: "Dynamic Creative", desc: "AI-generated ad variants that automatically adjust messaging based on real-time voter interaction data." },
              { icon: "track_changes", title: "Funnel Optimization", desc: "Architecting the journey from initial curiosity to verified voter commitment with zero friction." },
              { icon: "security_update_good", title: "Ad Defense", desc: "Protecting your narrative from bot-driven suppression and algorithmic reporting attacks." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 group hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-3xl text-secondary mb-6 block group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-sm text-on-background mb-4 text-xl">{card.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Sentiment Engineering Hub</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                Digital marketing in politics is the art of surgical persuasion. We bridge the gap between broadcast messaging and individual conviction.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Voter Reach", val: "12M+", color: "text-secondary" },
                  { label: "Conversion Lift", val: "+22%", color: "text-secondary" },
                  { label: "Cost Per Persuasion", val: "-40%", color: "text-secondary" }
                ].map((stat, i) => (
                   <div key={i}>
                      <div className="flex justify-between items-end mb-2">
                         <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">{stat.label}</span>
                         <span className={`text-2xl font-display-md ${stat.color}`}>{stat.val}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-secondary animate-pulse" style={{ width: stat.val.includes('%') ? stat.val : '80%' }}></div>
                      </div>
                   </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group text-center">
               <div className="absolute -inset-10 bg-secondary/10 blur-[80px] rounded-full group-hover:bg-secondary/20 transition-all"></div>
               <span className="material-symbols-outlined text-secondary text-5xl mb-6">analytics</span>
               <h3 className="font-headline-md text-2xl text-white mb-4 uppercase tracking-tighter">Real-Time Performance</h3>
               <p className="font-body-md text-on-surface-variant text-sm mb-10">We architect the dashboards that monitor voter sentiment in real-time, allowing for instant budget reallocation to high-resonance sectors.</p>
               <div className="grid grid-cols-2 gap-4">
                  {["A/B Testing Lab", "Sentiment Telemetry", "Bot Detection", "Voter ID Matching"].map((item, i) => (
                     <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">{item}</div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Command the <span className="text-secondary italic">Digital</span> Consensus.</h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            In the modern electoral battlefield, the most targeted narrative always wins the day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(51,200,180,0.4)] transition-all inline-block text-center">
              Launch Digital Briefing
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              View Voter Metrics
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
