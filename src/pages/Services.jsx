import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Services() {
  return (
    <div className="page-container">

<main className="flex-grow pt-24 pb-section-gap px-gutter md:px-margin-edge w-full max-w-container-max mx-auto">

<section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[320px]">

<div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-xl inner-glow radial-gradient-bg p-8 flex flex-col justify-between group overflow-hidden relative card-hover transition-all duration-500 border border-outline-variant/30">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="w-14 h-14 rounded-lg bg-surface flex items-center justify-center inner-glow text-primary">
<span className="material-symbols-outlined text-3xl">dns</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-variant px-3 py-1 rounded-full uppercase tracking-wider">TECHNOLOGY</span>
</div>
<div className="relative z-10 mt-12">
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">IT Services</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">Enterprise-grade infrastructure, cloud architecture, and cybersecurity frameworks engineered for absolute resilience and scalable performance.</p>
<Link className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider group-hover:gap-3 transition-all" to="/services/it">
                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>

<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all duration-700"></div>
</div>

<div className="bg-surface-container rounded-xl inner-glow radial-gradient-bg p-8 flex flex-col justify-between group relative card-hover transition-all duration-500 border border-outline-variant/30">
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center inner-glow text-secondary">
<span className="material-symbols-outlined">account_balance</span>
</div>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Finance Services</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm line-clamp-3">Strategic capital allocation, risk management, and institutional wealth structuring designed for long-term stability.</p>
<Link className="inline-flex items-center gap-2 text-on-surface-variant group-hover:text-secondary font-label-sm text-label-sm uppercase tracking-wider transition-colors" to="/services/finance">
                        Learn More <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
</div>
</div>

<div className="bg-surface-container rounded-xl inner-glow radial-gradient-bg p-8 flex flex-col justify-between group relative card-hover transition-all duration-500 border border-outline-variant/30">
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center inner-glow text-tertiary">
<span className="material-symbols-outlined">policy</span>
</div>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Government Services</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm line-clamp-3">Public sector consulting, policy implementation, and civic infrastructure management.</p>
<Link className="inline-flex items-center gap-2 text-on-surface-variant group-hover:text-tertiary font-label-sm text-label-sm uppercase tracking-wider transition-colors" to="/services/government">
                        Learn More <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
</div>
</div>

<div className="md:col-span-2 bg-surface-container rounded-xl inner-glow radial-gradient-bg p-8 flex flex-col justify-between group relative card-hover transition-all duration-500 border border-outline-variant/30">
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center inner-glow text-surface-tint">
<span className="material-symbols-outlined">query_stats</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-variant px-3 py-1 rounded-full uppercase tracking-wider">STRATEGY</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Management Consulting</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-lg">Transformational advisory services optimizing operational efficiency, organizational design, and market positioning.</p>
<Link className="inline-flex items-center gap-2 text-surface-tint font-label-sm text-label-sm uppercase tracking-wider group-hover:gap-3 transition-all" to="/services/consulting">
                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>

<div className="bg-surface-container rounded-xl inner-glow radial-gradient-bg p-8 flex flex-col justify-between group relative card-hover transition-all duration-500 border border-outline-variant/30">
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center inner-glow text-primary-fixed">
<span className="material-symbols-outlined">campaign</span>
</div>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Advertising &amp; Marketing</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm line-clamp-3">Data-driven audience acquisition, omnichannel campaign execution, and performance analytics.</p>
<Link className="inline-flex items-center gap-2 text-on-surface-variant group-hover:text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider transition-colors" to="/services/marketing">
                        Learn More <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
</div>
</div>

<div className="bg-surface-container rounded-xl inner-glow radial-gradient-bg p-8 flex flex-col justify-between group relative card-hover transition-all duration-500 border border-outline-variant/30">
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center inner-glow text-error">
<span className="material-symbols-outlined">brush</span>
</div>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Branding Services</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm line-clamp-3">Corporate identity architecture, visual systems, and brand positioning for global markets.</p>
<Link className="inline-flex items-center gap-2 text-on-surface-variant group-hover:text-error font-label-sm text-label-sm uppercase tracking-wider transition-colors" to="/services/branding">
                        Learn More <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
</div>
</div>

<div className="md:col-span-2 xl:col-span-2 bg-surface-container rounded-xl inner-glow radial-gradient-bg p-8 flex flex-col justify-between group relative card-hover transition-all duration-500 border border-outline-variant/30 overflow-hidden">
<div className="absolute right-0 top-0 h-full w-1/2 opacity-20 bg-[url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center" data-alt="abstract architectural lines and geometric building structures in monochrome" style={{"maskImage":"linear-gradient(to left, black, transparent)","WebkitMaskImage":"linear-gradient(to left, black, transparent)"}}></div>
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center inner-glow text-on-surface">
<span className="material-symbols-outlined">how_to_vote</span>
</div>
</div>
<div className="relative z-10 max-w-md">
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Political Campaign Services</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Comprehensive electoral strategy, voter data modeling, and strategic communications for high-stakes political initiatives.</p>
<Link className="inline-flex items-center gap-2 text-on-surface font-label-sm text-label-sm uppercase tracking-wider group-hover:gap-3 transition-all" to="/services/political">
                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>

<div className="md:col-span-2 xl:col-span-4 bg-[#1a232e] rounded-xl inner-glow p-12 flex flex-col md:flex-row justify-between items-center group relative card-hover transition-all duration-500 border border-primary/20 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,196,255,0.05),transparent_70%)]"></div>
<div className="relative z-10 max-w-2xl">
<div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-8 border border-secondary/20">
<span className="material-symbols-outlined text-3xl">architecture</span>
</div>
<h3 className="font-display-xl text-4xl text-white mb-4 uppercase tracking-tighter">Alpha Infrastructure</h3>
<p className="font-body-lg text-slate-400 mb-8">Integrated construction and urban development solutions across global jurisdictions. From commercial skyscrapers to critical public road networks.</p>
<Link className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(183,196,255,0.2)] transition-all inline-flex items-center gap-3" to="/services/infrastructure">
                        Enter Infrastructure Division <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
<div className="hidden md:block relative z-10 w-1/3">
<img 
  alt="Modern skyscraper architectural detail" 
  className="rounded-xl grayscale opacity-40 group-hover:opacity-60 transition-all border border-white/5" 
  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
/>
</div>
</div>
</section>
</main>

    </div>
  );
}
