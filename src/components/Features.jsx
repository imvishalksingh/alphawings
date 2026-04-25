import React from 'react';

const divisions = [
  {
    title: 'Technology & SaaS',
    tag: 'TECHNOLOGY',
    desc: 'Powering cloud infrastructure and predictive analytics for Fortune 500s.',
    color: 'from-[#4862be] to-[#b7c4ff]'
  },
  {
    title: 'Sustainable Energy',
    tag: 'ENERGY',
    desc: 'Next-generation renewables and grid-scale storage solutions.',
    color: 'from-[#00763a] to-[#79db93]'
  },
  {
    title: 'Global Logistics',
    tag: 'LOGISTICS',
    desc: 'Autonomous supply chain management and cross-border fulfillment.',
    color: 'from-[#606877] to-[#bfc7d8]'
  }
];

export default function Features() {
  return (
    <section className="px-8 py-24 max-w-[1440px] mx-auto">
      <div className="mb-16">
        <h2 className="font-heading text-4xl font-semibold mb-4">Core Divisions</h2>
        <p className="text-outline max-w-xl">Our specialized sectors operate with autonomy while leveraging the centralized power of the Alpha Wings network.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {divisions.map((div, i) => (
          <div key={i} className="glass-card group relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${div.color}`}></div>
            <div className="mb-8">
              <span className="inline-block px-2 py-1 bg-surface-container rounded text-[10px] font-heading font-bold tracking-widest text-outline uppercase border border-outline/10">
                {div.tag}
              </span>
            </div>
            <h3 className="font-heading text-2xl font-medium mb-3">{div.title}</h3>
            <p className="text-sm text-outline-variant leading-relaxed">
              {div.desc}
            </p>
            
            <div className="mt-8 flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
              Explore Sector &rarr;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
