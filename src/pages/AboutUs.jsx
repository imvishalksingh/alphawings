import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="page-container">

<main className="pt-24 pb-section-gap">

<section className="max-w-container-max mx-auto px-margin-edge mb-8">
  <div className="flex justify-start pt-8">
    <Link to="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
      <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
      Back to Overview
    </Link>
  </div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge mb-16 md:mb-section-gap">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-center">
<div className="md:col-span-7">
<h1 className="font-display-xl text-display-xl text-on-surface mb-6">Architecting the future of industry.</h1>
<p className="font-editorial-italic text-editorial-italic text-on-surface-variant max-w-2xl mb-8 text-lg md:text-xl">
                        Alpha Wings Tech Group is a multi-national conglomerate bridging traditional industrial stability with cutting-edge technological agility. We build the infrastructure of tomorrow.
                    </p>
</div>
<div className="md:col-span-5 relative h-[300px] md:h-[500px] rounded-xl overflow-hidden glass-panel">
<div className="absolute inset-0 bg-surface-variant/30 radial-highlight mix-blend-overlay z-10"></div>
<img alt="Corporate Headquarters" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"/>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge mb-16 md:mb-section-gap">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 md:mb-12">Vision &amp; Mission</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel radial-highlight rounded-xl p-6 md:p-10 md:col-span-2 flex flex-col justify-between min-h-[250px] md:min-h-[300px]">
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">visibility</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">The Vision</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                            To create a seamlessly integrated global ecosystem where technology amplifies human potential and industrial resilience drives sustainable progress for generations.
                        </p>
</div>
</div>
<div className="glass-panel rounded-xl p-6 md:p-10 flex flex-col justify-between min-h-[250px] md:min-h-[300px]">
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">flag</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">The Mission</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Delivering uncompromising value across our strategic divisions by maintaining absolute reliability, fostering radical innovation, and leading with unyielding integrity.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge mb-16 md:mb-section-gap relative">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -z-10 hidden md:block"></div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 md:mb-12 text-center">The Alpha Structure</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

<div className="glass-panel rounded-xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-6 border border-secondary/20">
                        Technology
                    </div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Alpha Tech</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Enterprise software, AI infrastructure, and scalable cloud solutions for institutional clients.</p>
</div>

<div className="glass-panel rounded-xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 md:translate-y-12">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-6 border border-secondary/20">
                        Energy
                    </div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Alpha Power</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Renewable transition frameworks and next-generation grid management systems.</p>
</div>

<div className="glass-panel rounded-xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-6 border border-secondary/20">
                        Logistics
                    </div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Alpha Flow</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Global supply chain optimization utilizing predictive analytics and autonomous routing.</p>
</div>

<div className="glass-panel rounded-xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 md:translate-y-12">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-6 border border-secondary/20">
                        Capital
                    </div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Alpha Capital</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Strategic investments, M&amp;A advisory, and long-term asset management for institutional partners.</p>
</div>
</div>
</section>
</main>

    </div>
  );
}
