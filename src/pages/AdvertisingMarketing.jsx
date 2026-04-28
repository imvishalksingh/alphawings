import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdvertisingMarketing() {
  return (
    <div className="page-container">

<main className="pt-24 pb-section-gap">

<section className="max-w-container-max mx-auto px-margin-edge mb-8">
  <div className="flex justify-start pt-8">
    <Link to="/services" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
      <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
      Back to All Services
    </Link>
  </div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge mb-section-gap">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest mb-4 bg-surface-variant px-4 py-2 rounded-full inner-glow">Advertising &amp; Marketing</span>
<h1 className="font-display-xl text-display-xl text-on-background mb-6">Global Outreach</h1>
<p className="font-body-lg text-body-lg text-outline max-w-2xl">Data-driven narrative engineering and global market penetration strategies. We blend creative excellence with analytical precision to deliver measurable ROI.</p>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge mb-section-gap">
<h2 className="font-headline-md text-headline-md text-on-background mb-12">Core Capabilities</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<Link to="/services/marketing/digital-marketing" className="md:col-span-2 glass-panel rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group block cursor-pointer">
<img alt="Digital Marketing Concept" className="absolute top-0 right-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-0" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"/>
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl text-primary mb-6">campaign</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Digital Marketing</h3>
<p className="font-body-md text-body-md text-outline max-w-md">Comprehensive multi-channel strategies designed to capture market share and drive sustainable growth across digital ecosystems.</p>
</div>
</Link>

<Link to="/services/marketing/social-media" className="glass-panel rounded-xl p-8 relative overflow-hidden block cursor-pointer group hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-4xl text-secondary mb-6">share</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4 text-2xl">Social Media</h3>
<p className="font-body-md text-body-md text-outline">Community building and engagement through targeted social strategies.</p>
</Link>

<Link to="/services/marketing/seo" className="glass-panel rounded-xl p-8 relative overflow-hidden block cursor-pointer group hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-4xl text-tertiary mb-6">search_insights</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4 text-2xl">SEO</h3>
<p className="font-body-md text-body-md text-outline">Technical and content-driven search engine optimization for organic dominance.</p>
</Link>

<Link to="/services/marketing/paid-ads" className="glass-panel rounded-xl p-8 relative overflow-hidden block cursor-pointer group hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-4xl text-error mb-6">ads_click</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4 text-2xl">Paid Ads</h3>
<p className="font-body-md text-body-md text-outline">High-conversion performance marketing campaigns across major networks.</p>
</Link>

<Link to="/services/marketing/campaign-strategy" className="glass-panel rounded-xl p-8 relative overflow-hidden block cursor-pointer group hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-4xl text-primary mb-6">lightbulb</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4 text-2xl">Campaign Strategy</h3>
<p className="font-body-md text-body-md text-outline">End-to-end campaign conceptualization and strategic planning.</p>
</Link>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge">
<h2 className="font-headline-md text-headline-md text-on-background mb-12 text-center">Our Methodology</h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
<div className="flex flex-col items-center text-center relative group">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 z-10">
<span className="font-headline-md text-headline-md text-primary">01</span>
</div>
<div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-outline-variant/30 -z-0"></div>
<h4 className="font-body-lg text-body-lg text-on-background font-semibold mb-2">Understanding</h4>
<p className="font-body-md text-body-md text-outline text-sm">Deep market and audience analysis.</p>
</div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 z-10">
<span className="font-headline-md text-headline-md text-primary">02</span>
</div>
<div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-outline-variant/30 -z-0"></div>
<h4 className="font-body-lg text-body-lg text-on-background font-semibold mb-2">Strategy</h4>
<p className="font-body-md text-body-md text-outline text-sm">Blueprint formulation and resource allocation.</p>
</div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 z-10">
<span className="font-headline-md text-headline-md text-primary">03</span>
</div>
<div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-outline-variant/30 -z-0"></div>
<h4 className="font-body-lg text-body-lg text-on-background font-semibold mb-2">Execution</h4>
<p className="font-body-md text-body-md text-outline text-sm">Precision rollout across selected channels.</p>
</div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 z-10">
<span className="font-headline-md text-headline-md text-primary">04</span>
</div>
<div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-outline-variant/30 -z-0"></div>
<h4 className="font-body-lg text-body-lg text-on-background font-semibold mb-2">Optimization</h4>
<p className="font-body-md text-body-md text-outline text-sm">Continuous testing and refinement.</p>
</div>
<div className="flex flex-col items-center text-center relative group">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-4 z-10">
<span className="font-headline-md text-headline-md text-primary">05</span>
</div>
<h4 className="font-body-lg text-body-lg text-on-background font-semibold mb-2">Reporting</h4>
<p className="font-body-md text-body-md text-outline text-sm">Transparent performance analytics.</p>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge py-section-gap border-t border-outline-variant/30 mt-16">
    <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Why Partner With Us?</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">We provide unparalleled expertise to supercharge your global marketing efforts.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 text-center rounded-xl">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">globe</span>
            <h4 className="font-headline-md text-on-background mb-2">Global Reach</h4>
            <p className="font-body-md text-on-surface-variant">Access localized expertise in over 40+ international markets, scaling your brand worldwide.</p>
        </div>
        <div className="glass-panel p-8 text-center rounded-xl">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">insights</span>
            <h4 className="font-headline-md text-on-background mb-2">Data-Driven Approach</h4>
            <p className="font-body-md text-on-surface-variant">Every decision is backed by advanced analytics, predictive modeling, and rigorous testing.</p>
        </div>
        <div className="glass-panel p-8 text-center rounded-xl">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4">award_star</span>
            <h4 className="font-headline-md text-on-background mb-2">Award-Winning Creative</h4>
            <p className="font-body-md text-on-surface-variant">Our creative teams deliver standout campaigns recognized by industry leaders globally.</p>
        </div>
    </div>
</section>

<section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
    <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Dominate Your <span className="text-primary italic">Market</span> Vertical.</h2>
    <p className="font-body-lg text-on-surface-variant mb-12">
        In the global information layer, visibility is power. We engineer the resonance your brand deserves.
    </p>
    <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(91,127,255,0.4)] transition-all inline-block text-center">
        Initiate Outreach Strategy
    </Link>
</section>

</main>

    </div>
  );
}
