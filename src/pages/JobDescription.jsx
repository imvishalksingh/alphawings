import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function JobDescription() {
  return (
    <div className="page-container">

<section className="relative pt-24 pb-24 px-8 border-b border-white/5" data-alt="abstract dark high-tech server room with glowing blue neon lights and geometric glass structures reflecting deep shadows" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaosBKmGLK_yq1uHN8K7GCA1ZUuC44hQqCv7Sd4GioYtjD9IpeRtbe6Og-5gdtlM4MbRUB-0eDX7WhxwO2a9a_sONNQ2MJJgTk44jMarISzyi48t6_2r4TnkRcWFbS-ViqSKZP156ahb9sqCcFQ7cgw0ykiPCsspCRTW7ksCX-JCq05n06flCEf2GhanyBuvx0Nefq3kHHnbqKkuWkzIEc98apWyDN-wIWrV521rC6j__02gQv3h-Ldf7u9S_mJ1cbyitLL51uPcU')","backgroundSize":"cover","backgroundPosition":"center"}}>
<div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
<div className="relative max-w-container-max mx-auto glass-panel rounded-xl p-12 lg:p-16 flex flex-col md:flex-row items-start justify-between gap-8 shadow-[0_20px_50px_rgba(0,39,128,0.1)]">
<div className="max-w-3xl">
<div className="flex flex-wrap gap-4 mb-6">
<span className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">Alpha IT Architecture</span>
<span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> San Francisco / Hybrid</span>
</div>
<h1 className="font-display-xl text-display-xl mb-4 text-gradient">Senior Cloud Architect</h1>
<p className="font-editorial-italic text-editorial-italic text-primary-fixed-dim">Shape the digital backbone of a global conglomerate.</p>
</div>
<div className="flex flex-col gap-4 min-w-[200px]">
<button className="btn-primary text-on-primary-container font-label-sm text-label-sm py-4 px-8 rounded-lg uppercase tracking-wider w-full flex items-center justify-center gap-2">
                    Apply Now <span className="material-symbols-outlined">arrow_forward</span>
</button>
<div className="text-center font-label-sm text-label-sm text-on-surface-variant">Posted 2 days ago</div>
</div>
</div>
</section>

<main className="max-w-container-max mx-auto px-8 py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-8 flex flex-col gap-16">
<section>
<h2 className="font-headline-md text-headline-md mb-6 text-on-surface">About the Role</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                    Alpha Wings Tech Group is seeking a visionary Senior Cloud Architect to lead the design and implementation of our next-generation enterprise cloud infrastructure. Operating at the intersection of our industrial, tech, and financial divisions, you will build scalable, secure, and highly resilient architectures that support our global operations.
                </p>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                    This is not just a technical role; it's a strategic leadership position. You will work closely with executive stakeholders to translate business objectives into robust technological solutions, driving our cloud-first initiative across all subsidiaries.
                </p>
</section>
<section>
<h2 className="font-headline-md text-headline-md mb-6 text-on-surface">Key Responsibilities</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-lg border-l-4 border-l-primary">
<h3 className="font-label-sm text-label-sm text-primary mb-2 uppercase tracking-wider">Architecture Design</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Design and deploy highly available, scalable, and secure multi-cloud architectures (AWS, Azure, GCP) tailored to complex enterprise needs.</p>
</div>
<div className="glass-panel p-6 rounded-lg border-l-4 border-l-secondary">
<h3 className="font-label-sm text-label-sm text-secondary mb-2 uppercase tracking-wider">Strategic Leadership</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Define cloud strategy, governance frameworks, and best practices across all Alpha Wings technology divisions.</p>
</div>
<div className="glass-panel p-6 rounded-lg border-l-4 border-l-tertiary">
<h3 className="font-label-sm text-label-sm text-tertiary mb-2 uppercase tracking-wider">Modernization</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Lead the migration of legacy industrial systems to modern cloud-native solutions using containerization and microservices.</p>
</div>
<div className="glass-panel p-6 rounded-lg border-l-4 border-l-primary-fixed-dim">
<h3 className="font-label-sm text-label-sm text-primary-fixed-dim mb-2 uppercase tracking-wider">Security &amp; Compliance</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Ensure all cloud deployments meet stringent global financial and data privacy regulations (GDPR, SOC2, HIPAA).</p>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 relative">
<div className="sticky top-32 glass-panel p-8 rounded-xl">
<h3 className="font-headline-md text-headline-md mb-2 text-on-surface">Quick Apply</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Start your journey with Alpha Wings Tech Group.</p>
<form className="flex flex-col gap-6">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="fullName">Full Name</label>
<input className="w-full bg-surface-container border-b border-outline-variant focus:border-primary text-on-surface p-3 rounded-t-sm focus:ring-0 transition-colors font-body-md text-body-md placeholder-outline" id="fullName" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-2" htmlFor="email">Email Address</label>
<input className="w-full bg-surface-container border-b border-outline-variant focus:border-primary text-on-surface p-3 rounded-t-sm focus:ring-0 transition-colors font-body-md text-body-md placeholder-outline" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">Resume</label>
<div className="border border-dashed border-outline-variant rounded-lg p-6 text-center hover:bg-surface-container-high transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors mb-2 text-[32px]">upload_file</span>
<p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface">Drag &amp; drop or <span className="text-primary">browse</span></p>
<p className="font-label-sm text-label-sm text-outline mt-1">PDF, DOCX up to 5MB</p>
</div>
</div>
<button className="btn-primary text-on-primary-container font-label-sm text-label-sm py-4 rounded-lg uppercase tracking-wider w-full mt-4" type="submit">
                        Submit Application
                    </button>
</form>
</div>
</div>
</main>

    </div>
  );
}
