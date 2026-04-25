import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ITServices() {
  return (
    <div className="page-container">

<section className="py-section-gap max-w-container-max mx-auto px-gutter">
<div className="mb-16 text-center">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Empowering Digital Transformation</h2>
<p className="font-body-md text-body-md text-outline max-w-2xl mx-auto">Comprehensive IT capabilities designed for modern corporate conglomerates.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="md:col-span-2 md:row-span-2 relative rounded-xl border border-outline/20 bg-surface-container-low overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-10 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-14 h-14 rounded-lg bg-surface-variant flex items-center justify-center mb-6 border border-outline/20">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="cloud_sync">cloud_sync</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Cloud Infrastructure &amp; Web Architecture</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Scalable, secure, and globally distributed cloud solutions integrated with high-performance web applications designed for absolute reliability.</p>
</div>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">AWS/AZURE</span>
<span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm">MICROSERVICES</span>
</div>
</div>
<img alt="High-tech server room representing cloud infrastructure and web architecture" className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover opacity-20 mask-image-gradient-to-t mix-blend-screen pointer-events-none" data-alt="Abstract view of modern server racks in a data center with cool blue LED lighting indicating active data processing and cloud infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmf1nEqkcD9jEEbdUpDN5HgSfuTs9QwpOidgWHPM59f4hqeoZA_FrYfdRkm46qZJvDcJtQW3ujdty4O5lN9EfRp8pYvNZN5zeh2b4Defxn-I99qQa0V4A0vYN9IzSeK-OsKBzJNjDwNhUytvuptahUJdqKfGr8PmzvUNDDuyUkFFGBYWbG1hB1vgOUVV0fwtDqSwNdKr06rWJKV3v2zBEviikMif9hZ58LB2mOqrpP3pNEWcGIuON1x4mSSSraz4xc6K7Y5AYjoA4"/>
</div>

<div className="rounded-xl border border-outline/20 bg-surface-container-low p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 blur-3xl rounded-full"></div>
<div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center mb-6 border border-outline/20">
<span className="material-symbols-outlined text-secondary text-2xl" data-icon="smartphone">smartphone</span>
</div>
<h3 className="font-headline-md text-2xl font-medium text-on-surface mb-3">Mobile Ecosystems</h3>
<p className="font-body-md text-sm text-on-surface-variant">Native and cross-platform mobile applications engineered for enterprise mobility and seamless user engagement.</p>
</div>

<div className="rounded-xl border border-outline/20 bg-surface-container-low p-8 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-container/20 blur-3xl rounded-full"></div>
<div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center mb-6 border border-outline/20">
<span className="material-symbols-outlined text-secondary text-2xl" data-icon="terminal">terminal</span>
</div>
<h3 className="font-headline-md text-2xl font-medium text-on-surface mb-3">Custom Software</h3>
<p className="font-body-md text-sm text-on-surface-variant">Bespoke software development tailored to automate complex workflows and unify operational data.</p>
</div>

<div className="md:col-span-3 rounded-xl border border-outline/20 bg-surface-container-low p-8 flex items-center justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant/30 via-transparent to-transparent"></div>
<div className="relative z-10 flex items-center gap-8">
<div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center border border-outline/20 shrink-0">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="settings_suggest">settings_suggest</span>
</div>
<div>
<h3 className="font-headline-md text-2xl font-medium text-on-surface mb-2">Ongoing Maintenance &amp; Security</h3>
<p className="font-body-md text-on-surface-variant">24/7 monitoring, proactive threat mitigation, and continuous system optimization to ensure zero downtime.</p>
</div>
</div>
<button className="relative z-10 shrink-0 px-6 py-2 border border-outline/50 rounded-lg text-on-surface hover:bg-surface-variant transition-colors">
                     View SLAs
                 </button>
</div>
</div>
</section>

    </div>
  );
}
