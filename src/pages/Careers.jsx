import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Careers() {
  return (
    <div className="page-container">

<main className="flex-grow pt-24">

<section className="relative min-h-[716px] flex items-center justify-center overflow-hidden border-b border-surface-container">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/20 via-background to-background z-0"></div>

<div className="absolute inset-0 z-0 opacity-10" style={{"backgroundImage":"linear-gradient(to right, #444652 1px, transparent 1px), linear-gradient(to bottom, #444652 1px, transparent 1px)","backgroundSize":"64px 64px"}}></div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-edge w-full text-center">
<h1 className="font-display-xl text-display-xl text-on-surface mb-6 max-w-4xl mx-auto">
                    Shape the Future of Global Industry. <br/>
<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Join Aether Corp.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                    We are engineering the future across sectors. Bring your expertise to a global conglomerate where innovation meets immense scale.
                </p>
<div className="flex justify-center gap-4">
<button className="bg-primary/10 text-primary border border-primary/30 backdrop-blur-md px-8 py-4 rounded-DEFAULT font-label-sm text-label-sm hover:bg-primary/20 transition-colors uppercase tracking-widest">
                        Explore Opportunities
                    </button>
</div>
</div>
</section>

<section className="py-section-gap px-margin-edge max-w-container-max mx-auto border-b border-surface-container">
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Life at Aether Corp</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">An ecosystem designed to foster elite performance, radical transparency, and unprecedented global impact.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="md:col-span-2 bg-surface-container/50 border border-surface-bright rounded-lg p-10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-primary/10"></div>
<span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>public</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Global Impact</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Contribute to projects that reshape infrastructure, tech, and finance on a planetary scale. Your work here echoes globally.</p>
</div>

<div className="bg-surface-container/50 border border-surface-bright rounded-lg p-10 backdrop-blur-sm hover:border-secondary/50 transition-colors duration-500">
<span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>trending_up</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Continuous Growth</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Unlimited access to Aether Academy resources and institutional knowledge.</p>
</div>

<div className="bg-surface-container/50 border border-surface-bright rounded-lg p-10 backdrop-blur-sm hover:border-tertiary/50 transition-colors duration-500">
<span className="material-symbols-outlined text-4xl text-tertiary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>diversity_3</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Inclusive Excellence</h3>
<p className="font-body-md text-body-md text-on-surface-variant">We aggregate the world's best minds, regardless of background, to solve complex challenges.</p>
</div>

<div className="md:col-span-2 bg-surface-container/50 border border-surface-bright rounded-lg p-10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
<div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 transition-all group-hover:bg-primary/10"></div>
<span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>domain</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Modern Work Culture</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Hybrid operational models supported by cutting-edge proprietary enterprise software, ensuring seamless collaboration across timezones.</p>
</div>
</div>
</section>

<section className="py-section-gap px-margin-edge max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Open Positions</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Discover your next role within our divisions.</p>
</div>

<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
<div className="relative flex-grow md:flex-grow-0">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full md:w-64 bg-surface border-b border-surface-bright focus:border-primary focus:ring-0 pl-10 pr-4 py-2 font-body-md text-on-surface transition-colors" placeholder="Search roles..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-surface-container border border-surface-bright px-4 py-2 rounded-DEFAULT font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filters
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface border border-surface-bright p-8 rounded-lg hover:border-primary/40 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="bg-surface-container text-tertiary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">Aether IT</span>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
<h3 className="font-headline-md text-[24px] text-on-surface mb-2">Senior Cloud Architect</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Lead the deployment of scalable enterprise infrastructure across global subsidiary networks.</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-4 mb-6">
<div className="flex items-center gap-1 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                    San Francisco / Hybrid
                                </div>
<div className="flex items-center gap-1 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                    Full-Time
                                </div>
</div>
<button className="w-full bg-primary/10 text-primary border border-primary/20 py-3 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/20 transition-colors">
                                Apply Now
                            </button>
</div>
</div>
</div>

<div className="bg-surface border border-surface-bright p-8 rounded-lg hover:border-primary/40 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="bg-surface-container text-tertiary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">Aether Finance</span>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
<h3 className="font-headline-md text-[24px] text-on-surface mb-2">Strategic Investment Lead</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Identify and execute high-yield M&amp;A opportunities in the emerging tech sector.</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-4 mb-6">
<div className="flex items-center gap-1 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                    New York / On-site
                                </div>
<div className="flex items-center gap-1 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                    Full-Time
                                </div>
</div>
<button className="w-full bg-primary/10 text-primary border border-primary/20 py-3 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/20 transition-colors">
                                Apply Now
                            </button>
</div>
</div>
</div>

<div className="bg-surface border border-surface-bright p-8 rounded-lg hover:border-primary/40 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="bg-surface-container text-tertiary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">Gov Relations</span>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">bookmark_add</span>
</button>
</div>
<h3 className="font-headline-md text-[24px] text-on-surface mb-2">Public Policy Consultant</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">Navigate international regulatory frameworks to ensure compliant expansion strategies.</p>
<div className="mt-auto">
<div className="flex flex-wrap gap-4 mb-6">
<div className="flex items-center gap-1 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                    London / Hybrid
                                </div>
<div className="flex items-center gap-1 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                    Full-Time
                                </div>
</div>
<button className="w-full bg-primary/10 text-primary border border-primary/20 py-3 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/20 transition-colors">
                                Apply Now
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-primary font-label-sm text-label-sm border-b border-primary pb-1 hover:text-primary-fixed transition-colors">View All Open Roles</button>
</div>
</section>
</main>

    </div>
  );
}
