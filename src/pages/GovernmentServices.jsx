import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function GovernmentServices() {
  return (
    <div className="page-container">

<main className="pt-24 pb-section-gap">

<section className="max-w-container-max mx-auto px-margin-edge mb-section-gap">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[614px]">
<div className="lg:col-span-7 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant mb-6">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase">Government Services</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-background mb-8 leading-tight">
                        Digital Public <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-surface-tint">Infrastructure</span> &amp; Consulting
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
                        Architecting resilient, secure, and highly efficient digital ecosystems for public sector entities worldwide. We deliver institutional-grade solutions bridging legacy systems with tomorrow's technological mandates.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-to-r from-primary-container to-primary/80 text-on-primary-container px-8 py-4 rounded-lg font-label-sm text-label-sm inner-glow hover:opacity-90 transition-opacity">
                            Initiate Consultation
                        </button>
<button className="glass-panel text-on-background px-8 py-4 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors">
                            View Case Studies
                        </button>
</div>
</div>
<div className="lg:col-span-5 relative h-full min-h-[400px] rounded-xl overflow-hidden glass-panel">
<img alt="Abstract data visualization with deep blue and cyan glowing lines representing secure public infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" data-alt="Abstract data visualization with deep blue and cyan glowing lines representing secure public infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLiT0y7FUfYhIgbGJEhOFnI0UNHnykYXz6sFqPodeBhhkRJ5j28Z9QJiyO0FcqNDJdr1vDunQTqyq1zv2StB21i6LMlMdR3SrY5p6XVzyGcMFugQH07bDLDmxjFYN9Rcv20zbp2l2dskrUHjJIIuPmubCGSsUrdcPbXgsCUrY0ncARyLHYlYCEADl70XK0sKvmUWz0zG_uATAFGJMX8duj_uz0ZhmkzKpmLpjW27dFfjhzTelNlsKu4AbPLblwMnW-TDwsHBARg28"/>
<div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/10"></div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge mb-section-gap">
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Strategic Offerings</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Comprehensive advisory and implementation services tailored for complex regulatory environments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<Link to="/services/government/documentation-support" className="glass-panel p-10 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-all duration-500 block">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined text-4xl text-primary mb-6" style={{"fontVariationSettings":"'FILL' 1"}}>description</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Documentation Support</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Rigorous documentation structuring, ensuring absolute compliance with federal frameworks and archival standards.
                    </p>
</Link>

<Link to="/services/government/digital-services" className="glass-panel p-10 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-all duration-500 md:col-span-2 block">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<span className="material-symbols-outlined text-4xl text-primary mb-6" style={{"fontVariationSettings":"'FILL' 1"}}>account_tree</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Digital Services Consulting</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                        End-to-end modernization of citizen-facing portals and internal operational architectures. We deploy scalable, zero-trust infrastructure designed for high-availability public sector demands.
                    </p>
</Link>

<Link to="/services/government/compliance-advisory" className="glass-panel p-10 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-all duration-500 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10 items-center block cursor-pointer">
<div>
<span className="material-symbols-outlined text-4xl text-primary mb-6" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
<h3 className="font-headline-md text-headline-md text-on-background mb-4">Compliance Advisory</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Navigating intricate legislative requirements. Our experts provide proactive risk mitigation, audit readiness, and continuous compliance monitoring against evolving global standards.
                        </p>
</div>
<div className="h-48 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent"></div>
<div className="flex gap-4 opacity-50">
<div className="w-16 h-16 rounded border border-outline-variant/50 flex items-center justify-center"><span className="material-symbols-outlined">security</span></div>
<div className="w-16 h-16 rounded border border-outline-variant/50 flex items-center justify-center"><span className="material-symbols-outlined">gavel</span></div>
<div className="w-16 h-16 rounded border border-outline-variant/50 flex items-center justify-center"><span className="material-symbols-outlined">policy</span></div>
</div>
</div>
</Link>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-edge">
<div className="border-t border-outline-variant/30 pt-16">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-16 text-center">Execution Methodology</h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -z-10 -translate-y-1/2"></div>

<div className="glass-panel p-6 rounded-lg text-center relative group">
<div className="w-12 h-12 mx-auto bg-surface-container-highest border border-primary/30 rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
<span className="font-label-sm text-label-sm text-primary">01</span>
</div>
<h4 className="font-label-sm text-label-sm text-on-background tracking-wider uppercase mb-2">Understanding</h4>
</div>

<div className="glass-panel p-6 rounded-lg text-center relative group">
<div className="w-12 h-12 mx-auto bg-surface-container-highest border border-primary/30 rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
<span className="font-label-sm text-label-sm text-primary">02</span>
</div>
<h4 className="font-label-sm text-label-sm text-on-background tracking-wider uppercase mb-2">Strategy</h4>
</div>

<div className="glass-panel p-6 rounded-lg text-center relative group border-primary/30">
<div className="w-12 h-12 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(183,196,255,0.3)]">
<span className="font-label-sm text-label-sm">03</span>
</div>
<h4 className="font-label-sm text-label-sm text-primary tracking-wider uppercase mb-2">Execution</h4>
</div>

<div className="glass-panel p-6 rounded-lg text-center relative group">
<div className="w-12 h-12 mx-auto bg-surface-container-highest border border-primary/30 rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
<span className="font-label-sm text-label-sm text-primary">04</span>
</div>
<h4 className="font-label-sm text-label-sm text-on-background tracking-wider uppercase mb-2">Optimization</h4>
</div>

<div className="glass-panel p-6 rounded-lg text-center relative group">
<div className="w-12 h-12 mx-auto bg-surface-container-highest border border-primary/30 rounded-full flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
<span className="font-label-sm text-label-sm text-primary">05</span>
</div>
<h4 className="font-label-sm text-label-sm text-on-background tracking-wider uppercase mb-2">Reporting</h4>
</div>
</div>
</div>
</section>
</main>

<section className="max-w-container-max mx-auto px-margin-edge py-section-gap border-t border-outline-variant/30">
    <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Frequently Asked Questions</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Addressing common inquiries regarding our public sector solutions and methodologies.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-panel p-6 rounded-lg">
            <h4 className="font-headline-md text-on-background mb-2">How do you ensure data security?</h4>
            <p className="font-body-md text-on-surface-variant">We employ zero-trust architecture, robust encryption protocols, and comply strictly with international and federal data protection standards to safeguard all public infrastructure data.</p>
        </div>
        <div className="glass-panel p-6 rounded-lg">
            <h4 className="font-headline-md text-on-background mb-2">What is the typical timeframe for modernization?</h4>
            <p className="font-body-md text-on-surface-variant">Timelines vary depending on the complexity of legacy systems, but our phased approach ensures critical milestones are delivered within 3-6 months, prioritizing mission-critical functions.</p>
        </div>
        <div className="glass-panel p-6 rounded-lg">
            <h4 className="font-headline-md text-on-background mb-2">Do you provide ongoing support?</h4>
            <p className="font-body-md text-on-surface-variant">Yes, our engagement models include continuous monitoring, proactive risk mitigation, and dedicated support teams to ensure long-term stability and compliance.</p>
        </div>
        <div className="glass-panel p-6 rounded-lg">
            <h4 className="font-headline-md text-on-background mb-2">How is compliance tracked?</h4>
            <p className="font-body-md text-on-surface-variant">We utilize automated compliance dashboards and real-time auditing tools mapped to specific legislative requirements, ensuring absolute readiness at all times.</p>
        </div>
    </div>
</section>

    </div>
  );
}
