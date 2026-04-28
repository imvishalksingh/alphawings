import React from 'react';
import { Link } from 'react-router-dom';

export default function PoliticalVoterOutreach() {
  return (
    <div className="page-container pt-0">
      <main className="max-w-container-max mx-auto px-margin-edge pt-32">
        <Link to="/services/political" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Strategic Policy
        </Link>
        
        {/* Hero Section */}
        <section className="pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-label-sm font-black uppercase tracking-[0.3em] mb-8 border border-tertiary/20">
              Mobilization Force
            </span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-8 leading-[1.1] tracking-tighter">
              The Ground <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-orange-400">Game Redefined.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Coordinating massive localized ground operations with digital precision. We mobilize the base and secure high-stakes turnout in contested districts through proprietary mobilization technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-tertiary text-on-tertiary px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
                Request Deployment Plan
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-4 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Voter Outreach Teams" 
                className="rounded-[32px] w-full h-auto object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Operational Assets Section */}
        <section className="py-section-gap border-t border-outline-variant/30">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 tracking-tighter">Surgical Ground Operations</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We combine traditional canvassing with high-velocity data analytics to maximize turnout.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "map", title: "District Mapping", desc: "Granular analysis of voter density and historical turnout patterns using satellite and census data sets." },
              { icon: "groups", title: "Personnel Coordination", desc: "Managing thousands of canvassers and volunteers through proprietary mobile tech with real-time telemetry." },
              { icon: "event_available", title: "GOTV Operations", desc: "High-intensity 'Get Out The Vote' maneuvers for the final 72 hours, ensuring every identified supporter hits the polls." }
            ].map((card, i) => (
              <div key={i} className="glass-panel p-10 rounded-3xl border border-white/5 text-center group hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-6 group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="font-headline-md text-on-background mb-4 text-2xl">{card.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Panel */}
        <section className="py-section-gap bg-surface-container rounded-[48px] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/fabric-plaid.png')]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 tracking-tighter">Mobilization Tech Stack</h2>
              <p className="font-body-lg text-on-surface-variant mb-12">
                Ground games in the 21st century are won through technical agility. We provide the infrastructure that empowers your volunteers and coordinators.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "smartphone", title: "Canvassing App", subtitle: "Real-time Data Entry & Sync" },
                  { icon: "forum", title: "Direct Voter P2P", subtitle: "Encrypted SMS Orchestration" },
                  { icon: "route", title: "Dynamic Routing", subtitle: "Optimized Canvassing Paths" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 glass-card rounded-2xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
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
            <div className="p-10 rounded-3xl bg-black/40 border border-white/10 relative group text-center">
               <h3 className="font-headline-md text-2xl text-white mb-8 uppercase tracking-tighter">Turnout Efficiency</h3>
               <div className="space-y-8">
                  {[
                    { label: "Turnout Lift", val: "+14.8%", color: "text-tertiary" },
                    { label: "Canvassing Reach", val: "2.5M+", color: "text-tertiary" },
                    { label: "Volunteer Efficiency", val: "92%", color: "text-tertiary" }
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
          <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Activate Your <span className="text-tertiary italic">Base.</span></h2>
          <p className="font-body-lg text-on-surface-variant mb-12">
            The most sophisticated digital campaign fails if the ground game is not surgical. Mobilize with precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-tertiary text-on-tertiary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(255,165,0,0.4)] transition-all inline-block text-center">
              Initiate Deployment Brief
            </Link>
            <Link to="/contact" className="bg-white/5 border border-white/10 px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-block text-center">
              Voter Data Audit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
