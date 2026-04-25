import React from 'react';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-[80vh] flex flex-col justify-center relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-3xl relative z-10">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-surface-container text-secondary text-xs font-bold tracking-widest uppercase border border-outline/20">
          Global Conglomerate
        </span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Architecting the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Industry.</span>
        </h1>
        <p className="font-editorial text-xl text-outline mb-10 max-w-2xl leading-relaxed">
          Bridging the gap between traditional industrial stability and cutting-edge SaaS agility. We provide the structural foundation for tomorrow's enterprises.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary">Explore Divisions</button>
          <button className="px-6 py-3 rounded-md font-heading font-semibold bg-surface-container border border-outline/30 hover:bg-surface-container-high transition-colors">
            Read Annual Report
          </button>
        </div>
      </div>
    </section>
  );
}
