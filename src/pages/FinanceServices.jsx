import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function FinanceServices() {
  return (
    <div className="page-container">

<main className="flex-grow pt-24 md:pt-32">

<section className="relative min-h-[600px] md:min-h-[819px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-surface-container-high via-background to-surface z-0"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent z-0 blur-3xl"></div>
<div className="max-w-container-max mx-auto px-margin-edge relative z-10 w-full">
  <Link to="/services" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group font-label-sm uppercase tracking-widest text-xs">
    <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
    Back to All Services
  </Link>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter items-center py-12 md:py-section-gap">
<div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8">
<div className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container/50 backdrop-blur-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">Finance Division</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-background max-w-4xl">
                        Strategic Financial Growth for the <span className="text-primary italic font-editorial-italic">Modern Enterprise.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        Navigate complex markets with data-driven precision. Our financial services are engineered to optimize capital, mitigate risk, and accelerate sustainable growth across global portfolios.
                    </p>
<div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4 w-full sm:w-auto">
<Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-fixed text-on-primary font-label-sm text-label-sm uppercase tracking-wider hover:opacity-90 transition-opacity border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] inline-block text-center">
                            Consult With Us
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-surface-container-high text-on-background border border-outline-variant font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
                            View Methodology
                            <span className="material-symbols-outlined text-lg">arrow_downward</span>
                        </Link>
</div>
</div>
<div className="lg:col-span-4 relative hidden lg:block">

<div className="relative w-full aspect-square rounded-2xl border border-outline-variant bg-surface-container-lowest/80 backdrop-blur-xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="flex justify-between items-center z-10">
<span className="font-label-sm text-label-sm text-outline">Q3 Performance</span>
<span className="material-symbols-outlined text-secondary">trending_up</span>
</div>
<div className="space-y-4 z-10">
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-[78%]"></div>
</div>
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[42%]"></div>
</div>
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-[91%]"></div>
</div>
</div>
<div className="z-10 mt-8">
<div className="text-4xl font-headline-md text-on-background tracking-tight">+124.8%</div>
<div className="font-label-sm text-label-sm text-tertiary mt-2">YOY CAPITAL EFFICIENCY</div>
</div>
</div>
</div>
    </div>
  </div>
</section>

<section className="py-16 md:py-section-gap bg-surface">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="mb-12 md:mb-16 max-w-3xl text-center md:text-left">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-4 md:mb-6">Architectural Finance Solutions</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">We provide institutional-grade financial structuring tailored to your specific market position and growth objectives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[minmax(300px,auto)]">

<Link to="/services/finance/consulting" className="md:col-span-2 rounded-2xl border border-outline-variant bg-surface-container-low p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="z-10 mb-8">
<span className="material-symbols-outlined text-4xl text-primary mb-6">insights</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Financial Consulting</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Comprehensive diagnostic and strategic realignment of your corporate financial architecture. We identify inefficiencies and architect robust models for sustained profitability.</p>
</div>
<div className="z-10 mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-6">
<span className="font-label-sm text-label-sm text-tertiary uppercase">Deep Dive Analysis</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward</span>
</div>
</Link>

<Link to="/services/finance/investment" className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
<div className="z-10">
<span className="material-symbols-outlined text-3xl text-secondary mb-4">account_balance</span>
<h3 className="text-xl font-headline-md text-on-background mb-3">Investment Advisory</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Portfolio optimization and asset allocation strategies for institutional and high-net-worth entities.</p>
</div>
<div className="z-10 mt-8">
<Link to="/contact" className="w-full py-3 rounded-lg bg-surface border border-outline-variant text-on-background font-label-sm text-label-sm hover:bg-surface-bright transition-colors inline-block text-center">Explore Advisory</Link>
</div>
</Link>

<Link to="/services/finance/funding" className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
<div className="z-10">
<span className="material-symbols-outlined text-3xl text-tertiary mb-4">rocket_launch</span>
<h3 className="text-xl font-headline-md text-on-background mb-3">Funding Guidance</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Navigating capital markets, series rounds, and debt structuring with precision and expansive network access.</p>
</div>
</Link>

<Link to="/services/finance/budgeting" className="md:col-span-2 rounded-2xl border border-outline-variant bg-surface-container-low p-8 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[300px] group hover:border-primary/50 transition-colors duration-300">
<div className="absolute inset-0 bg-cover bg-center opacity-20" data-alt="close up of complex financial charts and graphs on a digital screen" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80')"}}></div>
<div className="absolute inset-0 bg-surface-container-low/80 backdrop-blur-sm"></div>
<div className="z-10 max-w-2xl px-4">
<span className="material-symbols-outlined text-4xl text-on-background mb-4">account_balance_wallet</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Precision Budget Planning</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">Granular forecasting and dynamic budget allocation methodologies designed to adapt to macroeconomic volatility while securing bottom-line margins.</p>
<Link to="/contact" className="px-6 py-3 rounded-lg border border-outline text-on-background font-label-sm text-label-sm uppercase tracking-wide group-hover:bg-primary group-hover:text-on-primary transition-colors inline-block text-center">Request a Demo</Link>
</div>
</Link>
</div>
</div>
</section>

<section className="py-16 md:py-section-gap bg-surface-container-lowest border-y border-outline-variant/30">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 text-center md:text-left">
<div className="max-w-2xl">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-4 md:mb-6">The Methodology</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">A rigorous, phased approach to financial transformation, ensuring alignment, execution, and continuous optimization.</p>
</div>
</div>
<div className="relative border-l border-outline-variant/50 ml-4 md:ml-[50%] space-y-12 md:space-y-20">

<div className="relative pl-10 md:pl-0 md:w-1/2 md:pr-16 md:-ml-[50%] text-left md:text-right group">
<div className="absolute left-[-6px] md:right-[-6px] md:left-auto top-2 w-3 h-3 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors z-10"></div>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-2">Phase 01</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Deep Understanding</h3>
<p className="font-body-md text-body-md text-on-surface-variant">We conduct exhaustive audits of current financial infrastructure, cash flows, and market positioning to establish a concrete baseline.</p>
</div>

<div className="relative pl-10 md:pl-16 w-full md:w-1/2 md:ml-0 group text-left">
<div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-surface border-2 border-secondary group-hover:bg-secondary transition-colors z-10"></div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Phase 02</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Strategic Architecture</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Developing bespoke financial models and restructuring plans designed to mitigate risk and unlock hidden capital efficiency.</p>
</div>

<div className="relative pl-10 md:pl-0 md:w-1/2 md:pr-16 md:-ml-[50%] text-left md:text-right group">
<div className="absolute left-[-6px] md:right-[-6px] md:left-auto top-2 w-3 h-3 rounded-full bg-surface border-2 border-tertiary group-hover:bg-tertiary transition-colors z-10"></div>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest block mb-2">Phase 03</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Tactical Execution</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Deploying new capital structures, investment allocations, or budgetary controls with surgical precision and minimal operational disruption.</p>
</div>

<div className="relative pl-10 md:pl-16 w-full md:w-1/2 md:ml-0 group text-left">
<div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-surface border-2 border-primary-container group-hover:bg-primary-container transition-colors z-10"></div>
<span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest block mb-2">Phase 04</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Continuous Optimization</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time monitoring and dynamic adjustment of strategies in response to shifting macroeconomic indicators and internal performance metrics.</p>
</div>

<div className="relative pl-10 md:pl-0 md:w-1/2 md:pr-16 md:-ml-[50%] text-left md:text-right group">
<div className="absolute left-[-6px] md:right-[-6px] md:left-auto top-2 w-3 h-3 rounded-full bg-surface border-2 border-outline group-hover:bg-on-background transition-colors z-10"></div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-2">Phase 05</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Transparent Reporting</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Delivering high-fidelity, institutional-grade reports detailing performance attribution, risk metrics, and strategic milestones achieved.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-section-gap relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-container-high z-0"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 rounded-full blur-[100px] z-0"></div>
<div className="max-w-container-max mx-auto px-margin-edge relative z-10">
<div className="rounded-3xl border border-outline-variant/50 bg-surface-container/40 backdrop-blur-2xl p-8 md:p-24 text-center max-w-5xl mx-auto shadow-2xl">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-4 md:mb-6">Ready to Reengineer Your Capital Strategy?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 md:mb-12">Connect with our senior partners to discuss your institutional objectives and discover how Alpha Wings Tech Group can accelerate your financial trajectory.</p>
<Link to="/contact" className="w-full sm:w-auto px-10 py-5 rounded-lg bg-on-background text-background font-label-sm text-label-sm uppercase tracking-wider hover:bg-outline transition-colors shadow-[0_0_20px_rgba(220,228,227,0.1)] hover:shadow-[0_0_30px_rgba(220,228,227,0.2)] inline-block text-center">
                        Get in Touch
                    </Link>
</div>
</div>
</section>
</main>

    </div>
  );
}
