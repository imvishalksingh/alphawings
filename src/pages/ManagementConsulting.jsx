import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ManagementConsulting() {
  return (
    <div className="page-container">

<main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-section-gap">

<section className="relative w-full min-h-[500px] md:min-h-[819px] flex items-center justify-center overflow-hidden border-b border-surface-variant">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20" data-alt="modern corporate boardroom interior with expansive glass windows overlooking city skyline, sleek minimalist furniture, dramatic lighting"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-edge w-full">
  <div className="flex justify-start mb-8">
    <Link to="/services" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
      <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
      Back to All Services
    </Link>
  </div>
  <div className="text-center">
<div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-panel inner-glow">
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">Management Consulting</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-background mb-6 md:mb-8 max-w-4xl mx-auto leading-tight">
                    Strategic Leadership for <span className="text-primary">Global Enterprise</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 md:mb-12">
                    Navigating complex markets with precision. We partner with executive teams to drive transformational growth, operational excellence, and organizational resilience.
                </p>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge py-16 md:py-section-gap">
<div className="mb-12 md:mb-16 text-center lg:text-left">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Core Competencies</h2>
<div className="w-24 h-1 bg-primary/30 rounded mx-auto lg:mx-0"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">

<Link to="/services/consulting/business-strategy" className="md:col-span-8 glass-panel rounded-xl p-8 md:p-10 radial-glow flex flex-col justify-between group transition-all duration-500 hover:border-primary/30 min-h-[350px] md:min-h-[400px] relative overflow-hidden block cursor-pointer">
<div className="absolute right-0 top-0 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20 pointer-events-none">
<span className="material-symbols-outlined text-[150px] md:text-[200px]" data-icon="strategy" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>strategy</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded bg-surface-variant flex items-center justify-center mb-6 border border-white/5">
<span className="material-symbols-outlined text-secondary" data-icon="insights">insights</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Business Strategy</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                            Architecting sustainable competitive advantages. We analyze market dynamics to formulate robust corporate strategies that accelerate growth and mitigate risk in volatile environments.
                        </p>
</div>
<div className="mt-8 flex items-center text-primary font-label-sm text-label-sm uppercase tracking-wide cursor-pointer group-hover:text-primary-fixed transition-colors">
                        Explore Capability <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
</div>
</Link>

<Link to="/services/consulting/operations-optimization" className="md:col-span-4 glass-panel rounded-xl p-8 radial-glow flex flex-col justify-between group transition-all duration-500 hover:border-primary/30 min-h-[280px] md:min-h-0 block cursor-pointer">
<div>
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center mb-6 border border-white/5">
<span className="material-symbols-outlined text-secondary" data-icon="settings_suggest">settings_suggest</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-background text-[24px] mb-3">Operations Optimization</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Streamlining global supply chains and internal processes to maximize efficiency, reduce waste, and improve bottom-line performance.
                        </p>
</div>
</Link>

<Link to="/services/consulting/hr-consulting" className="md:col-span-5 glass-panel rounded-xl p-8 radial-glow flex flex-col justify-between group transition-all duration-500 hover:border-primary/30 min-h-[280px] md:min-h-0 block cursor-pointer">
<div>
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center mb-6 border border-white/5">
<span className="material-symbols-outlined text-tertiary-fixed" data-icon="groups">groups</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-background text-[24px] mb-3">HR Consulting</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Designing agile organizational structures. We help align your human capital with strategic objectives to foster innovation and leadership retention.
                        </p>
</div>
</Link>

<Link to="/services/consulting/growth-planning" className="md:col-span-7 glass-panel rounded-xl p-8 radial-glow flex flex-col justify-between group transition-all duration-500 hover:border-primary/30 min-h-[300px] md:min-h-0 relative overflow-hidden block cursor-pointer">
<div className="absolute right-0 bottom-0 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20 pointer-events-none">
<span className="material-symbols-outlined text-[120px] md:text-[150px]" data-icon="trending_up" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>trending_up</span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center mb-6 border border-white/5">
<span className="material-symbols-outlined text-secondary" data-icon="account_tree">account_tree</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-background text-[24px] mb-3">Growth Planning</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                            Identifying adjacencies and expanding market footprints. Comprehensive M&amp;A advisory, market entry strategies, and portfolio optimization for scaled enterprise.
                        </p>
</div>
</Link>
</div>
</section>

<section className="bg-surface-container-low py-16 md:py-section-gap border-y border-surface-variant relative overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
<div className="lg:w-1/3 text-center lg:text-left">
<div className="lg:sticky lg:top-32">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-6">Methodology</h2>
<p className="font-editorial-italic text-editorial-italic text-on-surface-variant mb-8">
                                A rigorous, data-driven approach to transformational change.
                            </p>
</div>
</div>
<div className="lg:w-2/3 space-y-10 md:space-y-12 relative">

<div className="absolute left-[23px] top-4 bottom-4 w-px bg-surface-variant hidden md:block"></div>

<div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-surface border-2 border-surface-variant flex items-center justify-center flex-shrink-0 font-label-sm text-label-sm text-outline mx-auto md:mx-0">01</div>
<div className="glass-panel p-6 md:p-8 rounded-lg flex-grow radial-glow border-l-2 border-l-primary/50 text-center md:text-left">
<h4 className="font-headline-md text-headline-md text-[20px] text-on-background mb-2">Understanding</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Deep diagnostic analysis of current state operations, financial baseline, and cultural dynamics.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-surface border-2 border-surface-variant flex items-center justify-center flex-shrink-0 font-label-sm text-label-sm text-outline mx-auto md:mx-0">02</div>
<div className="glass-panel p-6 md:p-8 rounded-lg flex-grow radial-glow text-center md:text-left">
<h4 className="font-headline-md text-headline-md text-[20px] text-on-background mb-2">Strategy</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Hypothesis-driven formulation of strategic alternatives and selection of the optimal path forward.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-surface border-2 border-surface-variant flex items-center justify-center flex-shrink-0 font-label-sm text-label-sm text-outline mx-auto md:mx-0">03</div>
<div className="glass-panel p-6 md:p-8 rounded-lg flex-grow radial-glow text-center md:text-left">
<h4 className="font-headline-md text-headline-md text-[20px] text-on-background mb-2">Execution</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Rigorous implementation planning, establishing PMOs, and driving change management initiatives across the enterprise.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-surface border-2 border-surface-variant flex items-center justify-center flex-shrink-0 font-label-sm text-label-sm text-outline mx-auto md:mx-0">04</div>
<div className="glass-panel p-6 md:p-8 rounded-lg flex-grow radial-glow text-center md:text-left">
<h4 className="font-headline-md text-headline-md text-[20px] text-on-background mb-2">Optimization</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Iterative refinement of executed strategies, adjusting to market feedback and internal performance metrics.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-surface border-2 border-surface-variant flex items-center justify-center flex-shrink-0 font-label-sm text-label-sm text-outline mx-auto md:mx-0">05</div>
<div className="glass-panel p-6 md:p-8 rounded-lg flex-grow radial-glow text-center md:text-left">
<h4 className="font-headline-md text-headline-md text-[20px] text-on-background mb-2">Reporting</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Establishing ongoing KPI dashboards and executive reporting frameworks to ensure sustained value capture.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge py-16 md:py-section-gap border-t border-surface-variant">
    <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Client Success Metrics</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Tangible results delivered through our management consulting engagements globally.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="glass-panel p-8 text-center rounded-xl border border-primary/20">
            <h3 className="text-4xl font-display-xl text-primary mb-2">35%</h3>
            <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">Avg. Revenue Growth</p>
        </div>
        <div className="glass-panel p-8 text-center rounded-xl border border-secondary/20">
            <h3 className="text-4xl font-display-xl text-secondary mb-2">$2B+</h3>
            <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">Cost Savings Identified</p>
        </div>
        <div className="glass-panel p-8 text-center rounded-xl border border-tertiary/20">
            <h3 className="text-4xl font-display-xl text-tertiary mb-2">40+</h3>
            <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">Fortune 500 Clients</p>
        </div>
        <div className="glass-panel p-8 text-center rounded-xl border border-error/20">
            <h3 className="text-4xl font-display-xl text-error mb-2">150+</h3>
            <p className="font-label-sm uppercase tracking-wider text-on-surface-variant">Global Restructurings</p>
        </div>
    </div>
</section>

<section className="py-20 md:py-32 text-center max-w-4xl mx-auto">
    <h2 className="font-display-xl text-display-xl text-on-surface mb-8 tracking-tighter">Architect Your <span className="text-primary italic">Enterprise</span> Legacy.</h2>
    <p className="font-body-lg text-on-surface-variant mb-12">
        Scale with precision. Connect with our executive partners to discuss your institutional objectives.
    </p>
    <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_50px_rgba(183,196,255,0.4)] transition-all inline-block text-center">
        Initiate Partnership
    </Link>
</section>

</main>

    </div>
  );
}
