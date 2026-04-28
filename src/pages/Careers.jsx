import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const jobRoles = [
  { title: "Human Resource Manager", division: "Alpha Operations", type: "Full-Time", location: "Hybrid", description: "Optimize human capital strategy and lead global talent acquisition efforts." },
  { title: "Business Development Manager", division: "Alpha Growth", type: "Full-Time", location: "Hybrid", description: "Drive strategic partnerships and expansion across international markets." },
  { title: "Business Development Executive", division: "Alpha Growth", type: "Full-Time", location: "Hybrid", description: "Identify and qualify high-value leads for our diversified divisions." },
  { title: "Sales Executive", division: "Alpha Sales", type: "Full-Time", location: "Hybrid", description: "Close critical deals and manage high-stakes corporate accounts." },
  { title: "AI Developer", division: "Alpha IT", type: "Full-Time", location: "Hybrid", description: "Engineer next-generation LLMs and proprietary automation frameworks." },
  { title: "Performance Marketer", division: "Alpha Marketing", type: "Full-Time", location: "Hybrid", description: "Scale global campaigns through data-driven acquisition strategies." },
  { title: "Meta Ads Expert", division: "Alpha Marketing", type: "Full-Time", location: "Hybrid", description: "Execute high-scale social advertising across the Meta ecosystem." },
  { title: "Google Ads Expert", division: "Alpha Marketing", type: "Full-Time", location: "Hybrid", description: "Optimize global search and display networks for maximum ROI." },
  { title: "Event Organizer", division: "Alpha Events", type: "Full-Time", location: "Hybrid", description: "Curate and execute elite corporate summits and global build launches." },
  { title: "Accountant", division: "Alpha Finance", type: "Full-Time", location: "Hybrid", description: "Manage complex financial reporting for our multi-national entities." },
  { title: "Social Media Manager", division: "Alpha Branding", type: "Full-Time", location: "Hybrid", description: "Orchestrate our global narrative across digital social channels." },
  { title: "SEO Specialist", division: "Alpha Marketing", type: "Full-Time", location: "Hybrid", description: "Drive organic dominance across search engines globally." },
  { title: "PR Manager", division: "Alpha Communications", type: "Full-Time", location: "Hybrid", description: "Manage high-level media relations and corporate reputation." },
  { title: "3D Animator", division: "Alpha Creative", type: "Full-Time", location: "Hybrid", description: "Create high-fidelity architectural visualizations and tech renders." },
  { title: "AutoCAD Designer", division: "Alpha Infra", type: "Full-Time", location: "Hybrid", description: "Draft technical blueprints for global infrastructure projects." },
];

export default function Careers() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <main className="flex-grow pt-24 pb-16">
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden border-b border-surface-container">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/20 via-background to-background z-0"></div>
          <div className="absolute inset-0 z-0 opacity-10" style={{"backgroundImage":"linear-gradient(to right, #444652 1px, transparent 1px), linear-gradient(to bottom, #444652 1px, transparent 1px)","backgroundSize":"64px 64px"}}></div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-edge w-full">
            <div className="flex justify-start mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
                <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Overview
              </Link>
            </div>
            <div className="text-center">
              <h1 className="font-display-xl text-4xl md:text-display-xl text-on-surface mb-6 max-w-4xl mx-auto">
                Shape the Future of Global Industry. <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Join Alpha Wings.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                We are engineering the future across sectors. Bring your expertise to a global conglomerate where innovation meets immense scale.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#positions" className="bg-primary/10 text-primary border border-primary/30 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-DEFAULT font-label-sm text-label-sm hover:bg-primary/20 transition-colors uppercase tracking-widest">
                  Explore Opportunities
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-margin-edge max-w-container-max mx-auto border-b border-surface-container">
          <div className="mb-12 md:mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Life at Alpha Wings</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">An ecosystem designed to foster elite performance, radical transparency, and unprecedented global impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
            <div className="md:col-span-2 bg-surface-container/50 border border-surface-bright rounded-lg p-6 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-primary/10"></div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>public</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Global Impact</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Contribute to projects that reshape infrastructure, tech, and finance on a planetary scale. Your work here echoes globally.</p>
            </div>
            <div className="bg-surface-container/50 border border-surface-bright rounded-lg p-6 md:p-10 backdrop-blur-sm hover:border-secondary/50 transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>trending_up</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Continuous Growth</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Unlimited access to Alpha Academy resources and institutional knowledge.</p>
            </div>
            <div className="bg-surface-container/50 border border-surface-bright rounded-lg p-6 md:p-10 backdrop-blur-sm hover:border-tertiary/50 transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>diversity_3</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 text-2xl">Inclusive Excellence</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We aggregate the world's best minds, regardless of background, to solve complex challenges.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container/50 border border-surface-bright rounded-lg p-6 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 transition-all group-hover:bg-primary/10"></div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{"fontVariationSettings":"'FILL' 1"}}>domain</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Modern Work Culture</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Hybrid operational models supported by cutting-edge proprietary enterprise software, ensuring seamless collaboration across timezones.</p>
            </div>
          </div>
        </section>

        <section id="positions" className="py-16 md:py-24 px-margin-edge max-w-container-max mx-auto">
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
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((job, index) => (
              <div key={index} className="bg-surface border border-surface-bright p-6 md:p-8 rounded-lg hover:border-primary/40 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-surface-container text-primary font-label-sm text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-black">{job.division}</span>
                    <button className="text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">bookmark_add</span>
                    </button>
                  </div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-2">{job.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">{job.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                      <div className="flex items-center gap-1 text-outline font-label-sm text-[10px] uppercase font-bold tracking-widest">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1 text-outline font-label-sm text-[10px] uppercase font-bold tracking-widest">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        {job.type}
                      </div>
                    </div>
                    <Link 
                      to="/careers/job"
                      state={{ job }}
                      className="w-full bg-primary/10 text-primary border border-primary/20 py-3 rounded-DEFAULT font-label-sm text-[10px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all inline-block text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
