import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function PoliticalCampaigns() {
  return (
    <div className="page-container">

<main className="pt-24 md:pt-32 pb-16 md:pb-section-gap">

<section className="max-w-container-max mx-auto px-margin-edge py-12 md:pt-20 md:pb-section-gap">
  <div className="flex justify-start mb-8">
    <Link to="/services" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
      <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
      Back to All Services
    </Link>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-gutter items-center">
<div className="lg:col-span-7 space-y-6 md:space-y-8 z-10 relative text-center lg:text-left flex flex-col items-center lg:items-start">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-variant border border-outline-variant/30 inner-glow backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">Political Division</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-surface">
    Strategic Policy
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
    Navigating complex geopolitical landscapes through advisory and risk mitigation frameworks. We leverage advanced analytics and strategic narrative engineering to ensure electoral dominance.
</p>
<div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full sm:w-auto">
<Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-primary-container to-primary/80 text-on-primary-container px-8 py-4 rounded-lg font-body-md text-body-md font-semibold border border-primary/30 inner-glow hover:shadow-[0_0_20px_rgba(183,196,255,0.2)] transition-all inline-block text-center">
                            Initiate Strategy
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto bg-surface-variant/50 text-on-surface px-8 py-4 rounded-lg font-body-md text-body-md border border-outline-variant inner-glow hover:bg-surface-variant transition-all backdrop-blur-md inline-block text-center">
                            View Case Studies
                        </Link>
</div>
</div>
<div className="lg:col-span-5 relative h-[300px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-outline-variant/20 inner-glow">
<div className="absolute inset-0 bg-gradient-to-tr from-surface-container-highest via-surface-variant to-primary-container/20 opacity-80 mix-blend-overlay z-10"></div>
<img alt="Public infrastructure visualization" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"/>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge py-16 md:py-section-gap relative">
<div className="mb-12 md:mb-16 text-center md:text-left">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Strategic Assets</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Comprehensive electoral solutions engineered for modern political warfare. Every tool is integrated for maximum narrative control and voter conversion.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[280px]">

<Link to="/services/political/campaign-strategy" className="md:col-span-2 md:row-span-2 rounded-2xl bg-surface-container-high border border-outline-variant/30 inner-glow p-8 md:p-10 relative overflow-hidden group hover:border-primary/50 transition-colors block cursor-pointer min-h-[350px] md:min-h-0">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-primary-container/20 border border-primary/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary text-2xl" data-icon="account_balance">account_balance</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Campaign Strategy</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                Deep-level structural planning. We map out the electoral battlefield, identifying key demographics, vulnerabilities in opposition, and optimal resource allocation paths to 270 or the local equivalent.
                            </p>
</div>
<div className="mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-variant rounded text-xs font-label-sm text-tertiary uppercase tracking-wider">Polling Analysis</span>
<span className="px-3 py-1 bg-surface-variant rounded text-xs font-label-sm text-tertiary uppercase tracking-wider">Opposition Research</span>
</div>
</div>
</Link>

<Link to="/services/political/digital-marketing" className="rounded-2xl bg-surface-container border border-outline-variant/30 inner-glow p-8 relative overflow-hidden hover:bg-surface-container-high transition-colors block cursor-pointer min-h-[220px] md:min-h-0">
<div className="w-10 h-10 rounded-lg bg-secondary-container/20 border border-secondary/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary text-xl" data-icon="campaign">campaign</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl">Digital Marketing</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">
                        Hyper-targeted ad deployment across all digital vectors, optimizing spend for maximum sentiment shift.
                    </p>
</Link>

<Link to="/services/political/voter-outreach" className="rounded-2xl bg-surface-container border border-outline-variant/30 inner-glow p-8 relative overflow-hidden hover:bg-surface-container-high transition-colors block cursor-pointer min-h-[220px] md:min-h-0">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/20 border border-tertiary/20 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-tertiary text-xl" data-icon="diversity_3">diversity_3</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl">Voter Outreach</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">
                        Ground-game orchestration combined with localized digital nudges to mobilize the base and persuade swing voters.
                    </p>
</Link>

<Link to="/services/political/social-media" className="md:col-span-3 rounded-2xl bg-gradient-to-r from-surface-container-high to-surface border border-outline-variant/30 inner-glow p-8 flex flex-col md:flex-row items-start md:items-center justify-between group hover:border-primary/30 transition-colors block cursor-pointer gap-6">
<div className="max-w-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 border border-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-xl" data-icon="dynamic_feed">dynamic_feed</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface text-2xl">Social Media Management</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Real-time narrative control. We manage perception across platforms, deploying rapid response protocols to counter disinformation and amplify strategic messaging.
                        </p>
</div>
<Link to="/services/political/social-media" className="flex w-12 h-12 rounded-full border border-outline-variant items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all self-end md:self-auto">
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</Link>
</Link>
</div>
</section>

<section className="border-t border-outline-variant/20 bg-surface-container-lowest py-16 md:py-section-gap relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, white 1px, transparent 0)","backgroundSize":"32px 32px"}}></div>
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="text-center mb-16 md:mb-20 relative z-10">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Operational Matrix</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">A systematic, repeatable methodology for securing electoral victories in highly contested environments.</p>
</div>
<div className="relative z-10">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent -translate-y-1/2"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">

<div className="relative pt-0 lg:pt-0">
<div className="hidden lg:block absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary z-10 mb-4 lg:mb-0 shadow-[0_0_10px_rgba(183,196,255,0.5)]"></div>
<div className="bg-surface-container border border-outline-variant/20 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 h-full">
<div className="text-primary font-label-sm text-label-sm mb-2 opacity-70">PHASE 01</div>
<h4 className="font-headline-md text-headline-md text-xl text-on-surface mb-3">Understanding</h4>
<p className="font-body-md text-body-md text-sm text-on-surface-variant">Comprehensive sentiment analysis and baseline polling to establish current reality.</p>
</div>
</div>

<div className="relative pt-0 lg:pt-0">
<div className="hidden lg:block absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-secondary z-10 mb-4 lg:mb-0 shadow-[0_0_10px_rgba(121,219,147,0.5)]"></div>
<div className="bg-surface-container border border-outline-variant/20 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 h-full lg:mt-32">
<div className="text-secondary font-label-sm text-label-sm mb-2 opacity-70">PHASE 02</div>
<h4 className="font-headline-md text-headline-md text-xl text-on-surface mb-3">Strategy</h4>
<p className="font-body-md text-body-md text-sm text-on-surface-variant">Developing the narrative framework and resource allocation blueprint.</p>
</div>
</div>

<div className="relative pt-0 lg:pt-0">
<div className="hidden lg:block absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary z-10 mb-4 lg:mb-0 shadow-[0_0_10px_rgba(183,196,255,0.5)]"></div>
<div className="bg-surface-container border border-outline-variant/20 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 h-full">
<div className="text-primary font-label-sm text-label-sm mb-2 opacity-70">PHASE 03</div>
<h4 className="font-headline-md text-headline-md text-xl text-on-surface mb-3">Execution</h4>
<p className="font-body-md text-body-md text-sm text-on-surface-variant">Multi-channel deployment of targeted messaging and ground operations.</p>
</div>
</div>

<div className="relative pt-0 lg:pt-0">
<div className="hidden lg:block absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-secondary z-10 mb-4 lg:mb-0 shadow-[0_0_10px_rgba(121,219,147,0.5)]"></div>
<div className="bg-surface-container border border-outline-variant/20 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 h-full lg:mt-32">
<div className="text-secondary font-label-sm text-label-sm mb-2 opacity-70">PHASE 04</div>
<h4 className="font-headline-md text-headline-md text-xl text-on-surface mb-3">Optimization</h4>
<p className="font-body-md text-body-md text-sm text-on-surface-variant">Real-time A/B testing and tactical pivoting based on live data feeds.</p>
</div>
</div>

<div className="relative pt-0 lg:pt-0">
<div className="hidden lg:block absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 mb-4 lg:mb-0 shadow-[0_0_15px_rgba(183,196,255,0.8)]"></div>
<div className="bg-primary-container/10 border border-primary/30 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 h-full inner-glow">
<div className="text-primary font-label-sm text-label-sm mb-2 opacity-70">PHASE 05</div>
<h4 className="font-headline-md text-headline-md text-xl text-on-surface mb-3">Reporting</h4>
<p className="font-body-md text-body-md text-sm text-on-surface-variant">Post-action analysis and transparent KPI tracking for stakeholder review.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge py-16 md:py-section-gap border-t border-outline-variant/20 relative">
    <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Past Performance Highlights</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Demonstrated capability in high-stakes electoral environments.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div className="glass-panel p-8 text-center rounded-xl border border-primary/20 bg-surface-container">
            <h3 className="text-4xl md:text-5xl font-display-xl text-primary mb-2">94%</h3>
            <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">Win Rate in Targeted Districts</p>
        </div>
        <div className="glass-panel p-8 text-center rounded-xl border border-secondary/20 bg-surface-container">
            <h3 className="text-4xl md:text-5xl font-display-xl text-secondary mb-2">12M+</h3>
            <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">Voters Mobilized Digitally</p>
        </div>
        <div className="glass-panel p-8 text-center rounded-xl border border-tertiary/20 bg-surface-container sm:col-span-2 md:col-span-1">
            <h3 className="text-4xl md:text-5xl font-display-xl text-tertiary mb-2">3.5x</h3>
            <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">Avg. ROI on Ad Spend</p>
        </div>
    </div>
</section>

</main>

    </div>
  );
}
