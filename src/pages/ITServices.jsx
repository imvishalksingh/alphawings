import React from 'react';
import { Link } from 'react-router-dom';

export default function ITServices() {
  return (
    <div className="page-container pt-0">
      {/* Content Start */}
      {/* Hero Section */}
<header className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden flex items-center justify-center min-h-[70vh] md:min-h-[90vh]">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10"></div>
<img alt="High-tech server room background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=2000&q=80"/>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-edge">
  <Link to="/services" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group font-label-sm uppercase tracking-widest text-xs">
    <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
    Back to All Services
  </Link>
  <div className="text-center">
<div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-outline/30 bg-surface-variant/50 backdrop-blur-md">
<span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">Global IT Infrastructure</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-surface mb-6 max-w-5xl mx-auto">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-tertiary">Digital Resilience</span> For Global Enterprises
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Alpha Wings provides mission-critical software engineering, hyperscale cloud architecture, and secure digital ecosystems for the world's most complex organizations.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
<Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary-container to-blue-600 text-white rounded-lg font-bold border border-white/10 hover:shadow-[0_0_30px_rgba(72,98,190,0.5)] transition-all inline-block text-center">
                Initiate Consultation
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-surface-container-high/50 backdrop-blur-md text-on-surface border border-outline/30 rounded-lg font-bold hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
                Our Vision
            </Link>
</div>
</div>
</div>
</header>
{/* Empowering Digital Transformation (Bento Grid) */}
<section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-edge">
<div className="mb-12 md:mb-16 text-center">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Core Service Capabilities</h2>
<p className="font-body-md text-body-md text-outline max-w-2xl mx-auto">Comprehensive IT engineering designed for modern corporate conglomerates.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px]">
{/* Web & Cloud (Large Card) */}
<div className="md:col-span-2 md:row-span-2 relative rounded-2xl border border-outline/20 bg-surface-container-low overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-16 h-16 rounded-xl bg-surface-variant flex items-center justify-center mb-8 border border-outline/20">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="cloud_sync">cloud_sync</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Cloud Infrastructure &amp; Web Architecture</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Scalable, secure, and globally distributed cloud solutions integrated with high-performance web applications designed for absolute reliability.</p>
<Link className="text-primary flex items-center gap-2 font-semibold mt-6 group/link" to="/services/it/cloud">
    Explore Cloud Architecture <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
<div className="flex flex-wrap gap-2 md:gap-4 mt-6">
<span className="px-3 md:px-4 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-xs md:text-label-sm border border-tertiary/20">HYPERSCALE</span>
<span className="px-3 md:px-4 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-xs md:text-label-sm border border-tertiary/20">MICROSERVICES</span>
</div>
</div>
<img alt="Data center visualization" className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover opacity-20 mask-image-gradient-to-t mix-blend-screen pointer-events-none hidden sm:block" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"/>
</div>
{/* Mobile */}
<div className="rounded-2xl border border-outline/20 bg-surface-container-low p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px] md:min-h-0">
<div className="absolute top-0 right-0 w-40 h-40 bg-secondary-container/10 blur-3xl rounded-full"></div>
<div>
<div className="w-14 h-14 rounded-xl bg-surface-variant flex items-center justify-center mb-6 border border-outline/20">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="smartphone">smartphone</span>
</div>
<h3 className="font-headline-md text-2xl font-semibold text-on-surface mb-3">Enterprise Mobility</h3>
<p className="font-body-md text-on-surface-variant">Seamless native and cross-platform mobile ecosystems for global workforces.</p>
</div>
<Link className="text-primary flex items-center gap-2 font-semibold mt-4" to="/services/it/mobile">Explore Mobile <span className="material-symbols-outlined">arrow_forward</span></Link>
</div>
{/* Software */}
<div className="rounded-2xl border border-outline/20 bg-surface-container-low p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px] md:min-h-0">
<div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-container/10 blur-3xl rounded-full"></div>
<div>
<div className="w-14 h-14 rounded-xl bg-surface-variant flex items-center justify-center mb-6 border border-outline/20">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="terminal">terminal</span>
</div>
<h3 className="font-headline-md text-2xl font-semibold text-on-surface mb-3">Bespoke Software</h3>
<p className="font-body-md text-on-surface-variant">Automated workflows and unified data systems tailored for niche operational needs.</p>
</div>
<Link className="text-primary flex items-center gap-2 font-semibold mt-4" to="/services/it/software">Our Process <span className="material-symbols-outlined">arrow_forward</span></Link>
</div>
{/* Maintenance */}
<div className="md:col-span-3 rounded-2xl border border-outline/20 bg-surface-container-low p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden gap-6">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant/30 via-transparent to-transparent"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-variant flex items-center justify-center border border-outline/20 shrink-0">
<span className="material-symbols-outlined text-tertiary text-3xl md:text-4xl" data-icon="security">security</span>
</div>
<div>
<h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface mb-2">24/7 Cybersecurity &amp; System Optimization</h3>
<p className="font-body-md text-on-surface-variant max-w-2xl">Proactive threat mitigation, real-time SOC monitoring, and continuous system hardening to ensure absolute business continuity.</p>
</div>
</div>
<Link className="w-full md:w-auto relative z-10 shrink-0 px-8 py-3 border-2 border-outline/50 rounded-lg text-on-surface font-bold hover:bg-surface-variant hover:border-primary transition-all text-center" to="/services/it/security">
                 Threat Analysis Center
</Link>
</div>
</div>
</section>
{/* Core Technology Stack */}
<section className="py-16 md:py-section-gap bg-surface-container-lowest">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
<div className="max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">Engineered for Performance</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Core Technology Stack</h2>
<p className="font-body-lg text-on-surface-variant mt-4">We leverage the most advanced technologies to build future-proof solutions that scale with your business ambition.</p>
</div>
<div className="flex gap-4">
<div className="p-3 md:p-4 border border-outline/20 rounded-xl bg-surface-container text-center w-24 md:w-32">
<div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
<div className="text-[10px] text-outline uppercase tracking-tighter">Uptime</div>
</div>
<div className="p-3 md:p-4 border border-outline/20 rounded-xl bg-surface-container text-center w-24 md:w-32">
<div className="text-2xl md:text-3xl font-bold text-secondary">500+</div>
<div className="text-[10px] text-outline uppercase tracking-tighter">Engineers</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
{/* Tech Item */}
<div className="group flex flex-col items-center p-6 md:p-8 border border-outline/10 rounded-2xl hover:bg-surface-variant/30 transition-all duration-300">
<div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
<img alt="React" className="w-10 h-10 md:w-12 md:h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
</div>
<span className="font-bold text-on-surface text-sm md:text-base">React.js</span>
</div>
<div className="group flex flex-col items-center p-6 md:p-8 border border-outline/10 rounded-2xl hover:bg-surface-variant/30 transition-all duration-300">
<div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
<img alt="Python" className="w-10 h-10 md:w-12 md:h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
</div>
<span className="font-bold text-on-surface text-sm md:text-base">Python</span>
</div>
<div className="group flex flex-col items-center p-6 md:p-8 border border-outline/10 rounded-2xl hover:bg-surface-variant/30 transition-all duration-300">
<div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
<img alt="AWS" className="w-10 h-10 md:w-12 md:h-12 invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"/>
</div>
<span className="font-bold text-on-surface text-sm md:text-base">AWS</span>
</div>
<div className="group flex flex-col items-center p-6 md:p-8 border border-outline/10 rounded-2xl hover:bg-surface-variant/30 transition-all duration-300">
<div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
<img alt="Kubernetes" className="w-10 h-10 md:w-12 md:h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"/>
</div>
<span className="font-bold text-on-surface text-sm md:text-base">Kubernetes</span>
</div>
<div className="group flex flex-col items-center p-6 md:p-8 border border-outline/10 rounded-2xl hover:bg-surface-variant/30 transition-all duration-300">
<div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
<img alt="PostgreSQL" className="w-10 h-10 md:w-12 md:h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"/>
</div>
<span className="font-bold text-on-surface text-sm md:text-base">Postgres</span>
</div>
<div className="group flex flex-col items-center p-6 md:p-8 border border-outline/10 rounded-2xl hover:bg-surface-variant/30 transition-all duration-300">
<div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
<img alt="TypeScript" className="w-10 h-10 md:w-12 md:h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
</div>
<span className="font-bold text-on-surface text-sm md:text-base">TypeScript</span>
</div>
</div>
</div>
</section>
{/* Global Delivery Model */}
<section className="py-16 md:py-section-gap">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Follow the Sun</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Global Delivery Model</h2>
<p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
                    With delivery centers across North America, Europe, and Asia, Alpha Wings provides a 24/7 operational cycle. Our "Follow the Sun" development model ensures continuous progress on every project, reducing time-to-market by up to 40%.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
<div>
<h4 className="font-bold text-on-surface">Nearshore Agility</h4>
<p className="text-sm text-outline">Real-time collaboration with teams in your time zone for critical sprint phases.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
<div>
<h4 className="font-bold text-on-surface">Offshore Efficiency</h4>
<p className="text-sm text-outline">Scale development capacity rapidly with our high-expertise centers in emerging tech hubs.</p>
</div>
</div>
</div>
</div>
<div className="relative">
{/* Abstract World Map Placeholder */}
<div className="aspect-square bg-surface-container rounded-3xl overflow-hidden border border-outline/20 relative group">
<img alt="Abstract world map with data points" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
{/* Animated Map Points */}
<div className="absolute top-[30%] left-[20%] w-3 h-3 bg-primary rounded-full animate-ping"></div>
<div className="absolute top-[30%] left-[20%] w-3 h-3 bg-primary rounded-full"></div>
<div className="absolute top-[45%] left-[50%] w-3 h-3 bg-secondary rounded-full animate-ping delay-700"></div>
<div className="absolute top-[45%] left-[50%] w-3 h-3 bg-secondary rounded-full"></div>
<div className="absolute top-[60%] left-[80%] w-3 h-3 bg-tertiary rounded-full animate-ping delay-1000"></div>
<div className="absolute top-[60%] left-[80%] w-3 h-3 bg-tertiary rounded-full"></div>
<div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 bg-surface-variant/80 backdrop-blur-md rounded-xl border border-outline/30">
<div className="flex justify-between items-center">
<div>
<div className="text-[10px] text-outline uppercase tracking-widest font-bold">Current Status</div>
<div className="text-sm md:text-lg font-bold text-on-surface">12 Global Tech Hubs Active</div>
</div>
<span className="material-symbols-outlined text-secondary" data-icon="public">public</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Client Impact */}
<section className="py-16 md:py-section-gap bg-gradient-to-b from-surface-container-lowest to-background">
<div className="max-w-container-max mx-auto px-margin-edge">
<div className="text-center mb-12 md:mb-20">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Measured Enterprise Impact</h2>
<p className="font-body-md text-outline max-w-2xl mx-auto">Data-driven outcomes for our Fortune 500 partners over the last 24 months.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
{/* Impact Card 1 */}
<div className="p-8 md:p-10 bg-surface-container-low rounded-3xl border border-outline/20 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
<div className="text-5xl md:text-6xl font-bold text-on-surface mb-4 tracking-tighter">85<span className="text-primary">%</span></div>
<h4 className="text-lg md:text-xl font-bold mb-4">Infrastructure Cost Reduction</h4>
<p className="text-on-surface-variant text-sm mb-8">Through serverless architecture migration and automated resource orchestration for a global retail leader.</p>
<div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-[85%]"></div>
</div>
</div>
{/* Impact Card 2 */}
<div className="p-8 md:p-10 bg-surface-container-low rounded-3xl border border-outline/20 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
<div className="text-5xl md:text-6xl font-bold text-on-surface mb-4 tracking-tighter">12<span className="text-secondary">x</span></div>
<h4 className="text-lg md:text-xl font-bold mb-4">Deployment Velocity Increase</h4>
<p className="text-on-surface-variant text-sm mb-8">Implementing advanced CI/CD pipelines and DevOps cultural shifts for a premier financial institution.</p>
<div className="flex items-end gap-1 h-12">
<div className="w-full bg-secondary/20 h-2 rounded-t-sm"></div>
<div className="w-full bg-secondary/30 h-4 rounded-t-sm"></div>
<div className="w-full bg-secondary/40 h-6 rounded-t-sm"></div>
<div className="w-full bg-secondary/60 h-9 rounded-t-sm"></div>
<div className="w-full bg-secondary h-12 rounded-t-sm"></div>
</div>
</div>
{/* Impact Card 3 */}
<div className="p-8 md:p-10 bg-surface-container-low rounded-3xl border border-outline/20 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
<div className="text-5xl md:text-6xl font-bold text-on-surface mb-4 tracking-tighter">0<span className="text-tertiary">ms</span></div>
<h4 className="text-lg md:text-xl font-bold mb-4">Latency Threshold Achieved</h4>
<p className="text-on-surface-variant text-sm mb-8">Edge computing optimization for real-time algorithmic trading systems in the EMEA markets.</p>
<div className="flex justify-center py-4">
<div className="relative w-20 h-20 md:w-24 md:h-24">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle className="text-surface-variant" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-tertiary" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="0" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-bold text-sm md:text-base">100%</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Innovation Lab */}
<section className="py-16 md:py-section-gap relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
<img alt="R&amp;D Lab abstract" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"/>
</div>
<div className="max-w-container-max mx-auto px-margin-edge relative z-10">
<div className="bg-surface-container-high/40 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[40px] p-8 md:p-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-8">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Alpha Innovation Lab
                    </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Pioneering the Future of R&amp;D</h2>
<p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
                        Our Innovation Lab is where we prototype the technologies of 2030. From Quantum Computing simulations to Generative AI agents for autonomous DevOps, we help our clients stay ahead of the disruption curve.
                    </p>
<div className="grid grid-cols-2 gap-6 mb-10">
<div>
<div className="text-2xl md:text-3xl font-bold text-on-surface mb-1">45+</div>
<div className="text-xs md:text-sm text-outline">Active Patents</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-bold text-on-surface mb-1">$2.4B</div>
<div className="text-xs md:text-sm text-outline">R&amp;D Investment Portfolio</div>
</div>
</div>
<Link to="/contact" className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-primary hover:text-white transition-all inline-block text-center">
                        Tour the Lab
                    </Link>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-8 md:pt-12">
<div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
<img alt="AI neural network" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"/>
</div>
<div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
<img alt="Cybersecurity interface" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
<img alt="Quantum computing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
<img alt="Robotics automation" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
      {/* Content End */}
    </div>
  );
}
