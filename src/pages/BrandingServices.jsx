import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BrandingServices() {
  return (
    <div className="page-container">

<main className="pt-24 md:pt-32">

<section className="relative min-h-[600px] md:min-h-[819px] flex items-center pt-16 pb-20 md:pt-section-gap md:pb-32 overflow-hidden bg-black">
<div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale-[30%]" data-alt="Close-up of a designer's desk" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=1200&q=80')"}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="max-w-container-max mx-auto px-margin-edge relative z-10 w-full">
  <div className="flex justify-start mb-8">
    <Link to="/services" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
      <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
      Back to All Services
    </Link>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
<div className="inline-flex items-center space-x-2 mb-8 bg-surface-container-high/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 w-fit">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-tertiary uppercase tracking-widest">Global Brand Ecosystems</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-surface mb-8 drop-shadow-2xl">Alpha Creative</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
    High-end brand architectural development for luxury and industrial sectors. We don't just design logos; we engineer comprehensive visual systems that command market presence.
</p>
<div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 w-full sm:w-auto">
<Link className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label-sm uppercase tracking-widest hover:bg-primary-fixed-dim transition-colors" to="#services">
<span>Explore Capabilities</span>
<span className="material-symbols-outlined text-[18px]">arrow_downward</span>
</Link>
<Link className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-surface-container-high/40 backdrop-blur-sm text-on-surface border border-white/10 rounded-full font-label-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors" to="/contact">
<span>Initiate Strategy</span>
</Link>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-section-gap relative" id="services">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 text-center md:text-left">
<div className="max-w-2xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Architectural Capabilities</h2>
<p className="font-body-md text-on-surface-variant">Systematic approaches to visual dominance across global markets.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">

<Link to="/services/branding/brand-identity" className="md:col-span-2 md:row-span-2 relative group rounded-xl overflow-hidden border border-white/5 bg-surface-container-low block cursor-pointer min-h-[400px] md:min-h-0">
<div className="absolute inset-0 bg-[url('image-service-identity')] bg-cover bg-center opacity-40 transition-opacity duration-500 group-hover:opacity-60 mix-blend-overlay" data-alt="close up of premium corporate stationery and business cards on dark slate surface with dramatic side lighting"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
<span className="material-symbols-outlined text-secondary mb-4 text-4xl" style={{"fontVariationSettings":"'FILL' 0"}}>category</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Brand identity design</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Comprehensive visual languages engineered for scale. From typographic hierarchies to proprietary color systems that define industry standards.</p>
</div>
</Link>

<Link to="/services/branding/logo-creation" className="relative group rounded-xl overflow-hidden border border-white/5 bg-surface-container-low block cursor-pointer min-h-[250px] md:min-h-0">
<div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
<span className="material-symbols-outlined text-tertiary mb-4 text-3xl" style={{"fontVariationSettings":"'FILL' 0"}}>shape_line</span>
<h3 className="font-body-lg font-semibold text-on-surface mb-2">Logo creation</h3>
<p className="font-body-md text-on-surface-variant text-sm">Minimalist, memorable, and infinitely scalable corporate marks.</p>
</div>
</Link>

<Link to="/services/branding/strategy" className="relative group rounded-xl overflow-hidden border border-white/5 bg-surface-container-low block cursor-pointer min-h-[250px] md:min-h-0">
<div className="absolute inset-0 bg-[url('image-service-strategy')] bg-cover bg-center opacity-30 mix-blend-luminosity" data-alt="abstract geometric lines and data points connecting in a dark minimal space representing strategic alignment"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
<span className="material-symbols-outlined text-secondary mb-4 text-3xl" style={{"fontVariationSettings":"'FILL' 0"}}>architecture</span>
<h3 className="font-body-lg font-semibold text-on-surface mb-2">Strategy</h3>
<p className="font-body-md text-on-surface-variant text-sm">Positioning frameworks that dictate market perception.</p>
</div>
</Link>

<Link to="/services/branding/visual-systems" className="md:col-span-3 relative group rounded-xl overflow-hidden border border-white/5 bg-surface-container-low block cursor-pointer p-6 md:p-0">
<div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-transparent"></div>
<div className="relative md:absolute md:inset-0 p-2 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="max-w-xl">
<span className="material-symbols-outlined text-secondary mb-4 text-3xl" style={{"fontVariationSettings":"'FILL' 0"}}>account_tree</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Visual systems</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Holistic design ecosystems ensuring absolute consistency across digital platforms, physical environments, and corporate communications.</p>
</div>
<div className="flex md:flex items-center space-x-4">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-surface-container-high">
<span className="material-symbols-outlined text-on-surface text-xl md:text-2xl">devices</span>
</div>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-surface-container-high">
<span className="material-symbols-outlined text-on-surface text-xl md:text-2xl">print</span>
</div>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-surface-container-high">
<span className="material-symbols-outlined text-on-surface text-xl md:text-2xl">business</span>
</div>
</div>
</div>
</Link>
</div>
</div>
</section>

<section className="py-16 md:py-section-gap bg-surface-container-lowest relative border-y border-white/5">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="text-center mb-16 md:mb-24">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Methodology</h2>
<p className="font-editorial-italic text-editorial-italic text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto">A rigorous, multi-phased approach to forging indomitable corporate identities.</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2"></div>
<div className="space-y-12 md:space-y-16">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center relative">
<div className="lg:text-right">
<span className="font-label-sm text-primary uppercase tracking-widest mb-2 block">Phase 01</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Understanding</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Deep-dive discovery sessions to extract core business objectives, competitive landscapes, and target demographics. We decode the DNA of your conglomerate before sketching a single line.</p>
</div>
<div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-container-high border border-primary z-10 items-center justify-center">
<span className="material-symbols-outlined text-secondary text-sm">search</span>
</div>
<div className="bg-surface-container-low rounded-xl aspect-video border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('image-process-understanding')] bg-cover bg-center opacity-50 mix-blend-luminosity" data-alt="team analyzing complex data charts and architectural blueprints on a large glass screen in a dark modern boardroom"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center relative">
<div className="order-2 lg:order-1 bg-surface-container-low rounded-xl aspect-video border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('image-process-strategy')] bg-cover bg-center opacity-50 mix-blend-luminosity" data-alt="minimalist architectural model illuminated by sharp dramatic spotlight on dark surface"></div>
</div>
<div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-container-high border border-tertiary z-10 items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-sm">architecture</span>
</div>
<div className="order-1 lg:order-2">
<span className="font-label-sm text-tertiary uppercase tracking-widest mb-2 block">Phase 02</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Strategy</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Formulating the structural logic of the brand. Defining the archetype, voice, and positioning that will serve as the unshakeable foundation for all visual execution.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center relative">
<div className="lg:text-right">
<span className="font-label-sm text-secondary uppercase tracking-widest mb-2 block">Phase 03</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Execution</h3>
<p className="font-body-md text-body-md text-on-surface-variant">The rigorous design process where strategy solidifies into form. Crafting precise logotypes, selecting exact color profiles, and building the modular grid systems.</p>
</div>
<div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-container-high border border-secondary z-10 items-center justify-center">
<span className="material-symbols-outlined text-secondary text-sm">draw</span>
</div>
<div className="bg-surface-container-low rounded-xl aspect-video border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('image-process-execution')] bg-cover bg-center opacity-50 mix-blend-luminosity" data-alt="close up of designer using a digital stylus on a tablet showing vector curves and geometric grids in a dark studio"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-section-gap bg-surface-container-lowest border-t border-white/5 relative">
    <div className="max-w-container-max mx-auto px-margin-edge">
        <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Common inquiries about our systematic branding approach.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-surface-container p-6 md:p-8 rounded-xl border border-white/5">
                <h4 className="font-headline-md text-xl md:text-headline-md text-on-surface mb-3">How long does a brand identity project take?</h4>
                <p className="font-body-md text-on-surface-variant">A comprehensive global enterprise identity typically takes 12-16 weeks, from initial strategy and positioning to final asset delivery and implementation guidelines.</p>
            </div>
            <div className="bg-surface-container p-6 md:p-8 rounded-xl border border-white/5">
                <h4 className="font-headline-md text-xl md:text-headline-md text-on-surface mb-3">Do you provide ongoing brand management?</h4>
                <p className="font-body-md text-on-surface-variant">Yes, we act as continuous brand guardians for many of our partners, ensuring consistency as the conglomerate expands into new markets and acquisitions.</p>
            </div>
        </div>
    </div>
</section>
</main>

    </div>
  );
}
