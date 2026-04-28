import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function JobDescription() {
  const location = useLocation();
  const { job } = location.state || { 
    job: { 
      title: "Senior Strategic Advisor", 
      division: "Alpha Growth", 
      location: "Hybrid", 
      description: "Shape the digital backbone of a global conglomerate.",
      type: "Full-Time"
    } 
  };

  return (
    <div className="page-container">
      <section className="max-w-container-max mx-auto px-margin-edge pt-32">
        <div className="flex justify-start mb-8">
          <Link to="/careers" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Careers
          </Link>
        </div>
      </section>

      <section className="relative pb-24 px-8 border-b border-white/5" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')","backgroundSize":"cover","backgroundPosition":"center"}}>
        <div className="absolute inset-0 bg-background/90 backdrop-blur-md"></div>
        <div className="relative max-w-container-max mx-auto glass-panel rounded-xl p-12 lg:p-16 flex flex-col md:flex-row items-start justify-between gap-8 shadow-[0_20px_50px_rgba(0,39,128,0.1)]">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-primary/20 text-primary font-label-sm text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-black border border-primary/20">{job.division}</span>
              <span className="bg-white/5 text-on-surface font-label-sm text-[10px] px-3 py-1 rounded-full flex items-center gap-1 uppercase font-bold tracking-widest border border-white/10"><span className="material-symbols-outlined text-[14px]">location_on</span> {job.location}</span>
              <span className="bg-white/5 text-on-surface font-label-sm text-[10px] px-3 py-1 rounded-full flex items-center gap-1 uppercase font-bold tracking-widest border border-white/10"><span className="material-symbols-outlined text-[14px]">schedule</span> {job.type}</span>
            </div>
            <h1 className="font-display-xl text-4xl md:text-display-xl mb-4 text-gradient">{job.title}</h1>
            <p className="font-body-lg text-lg text-primary-fixed-dim max-w-xl">{job.description}</p>
          </div>
          <div className="flex flex-col gap-4 min-w-[200px]">
            <a href="#apply" className="bg-primary text-on-primary font-label-sm text-xs py-4 px-8 rounded-lg uppercase tracking-widest w-full flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(183,196,255,0.3)] transition-all active:scale-95 text-center font-bold">
              Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <div className="text-center font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Alpha Official Opening</div>
          </div>
        </div>
      </section>

      <main className="max-w-container-max mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 flex flex-col gap-16">
          <section>
            <h2 className="font-headline-md text-3xl mb-6 text-on-surface">About the Role</h2>
            <p className="font-body-lg text-lg text-on-surface-variant mb-6 leading-relaxed">
              Alpha Wings Tech Group is seeking a dedicated {job.title} to join our {job.division} division. Operating at the intersection of our industrial, tech, and financial sectors, you will play a pivotal role in our next phase of global growth.
            </p>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              This is not just a job; it's a strategic mission. You will work with elite teams across borders to solve complex challenges and set new standards of excellence in the {job.division} space.
            </p>
          </section>
          
          <section>
            <h2 className="font-headline-md text-3xl mb-6 text-on-surface">Core Expectations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Elite Execution", color: "primary", text: "Drive high-impact results with precision and sovereign quality." },
                { title: "Strategic Vision", color: "secondary", text: "Contribute to the long-term roadmap of the division." },
                { title: "Global Collaboration", color: "tertiary", text: "Work seamlessly across global timezones and subsidiary networks." },
                { title: "Innovation", color: "primary", text: "Continuously optimize workflows using cutting-edge proprietary tools." }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-label-sm text-[10px] text-primary mb-2 uppercase tracking-widest font-black">{item.title}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 relative">
          <div id="apply" className="sticky top-32 glass-panel p-8 rounded-xl border border-white/5">
            <h3 className="font-headline-md text-2xl mb-2 text-on-surface">Direct Application</h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-8">Initiate your transition to Alpha Wings Tech Group.</p>
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); }}>
              <div>
                <label className="block font-label-sm text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-2" htmlFor="fullName">Full Name</label>
                <input required className="w-full bg-white/5 border border-white/10 focus:border-primary text-on-surface p-4 rounded-xl focus:ring-0 transition-colors font-body-md text-sm placeholder:text-white/20" id="fullName" placeholder="Jane Doe" type="text"/>
              </div>
              <div>
                <label className="block font-label-sm text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-2" htmlFor="email">Email Address</label>
                <input required className="w-full bg-white/5 border border-white/10 focus:border-primary text-on-surface p-4 rounded-xl focus:ring-0 transition-colors font-body-md text-sm placeholder:text-white/20" id="email" placeholder="jane@example.com" type="email"/>
              </div>
              <div>
                <label className="block font-label-sm text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-2">Resume / CV</label>
                <div className="border border-dashed border-white/10 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors mb-2 text-[40px]">upload_file</span>
                  <p className="font-body-md text-sm text-white/40 group-hover:text-on-surface transition-colors font-bold tracking-tight">Upload Portfolio or Resume</p>
                  <p className="font-label-sm text-[10px] text-white/20 mt-1 uppercase tracking-widest font-black">PDF, DOCX up to 10MB</p>
                </div>
              </div>
              <button className="bg-primary text-on-primary font-label-sm text-xs py-5 rounded-xl uppercase tracking-widest w-full mt-4 font-black hover:shadow-[0_0_40px_rgba(183,196,255,0.2)] transition-all" type="submit">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
