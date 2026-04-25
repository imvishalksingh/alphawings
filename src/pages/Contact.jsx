import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="page-container">
      <main className="flex-grow pt-24 pb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-edge">

          <div className="mb-section-gap text-center md:text-left max-w-3xl">
            <span className="font-label-sm text-primary tracking-[0.3em] uppercase mb-4 block">Connect with Us</span>
            <h1 className="font-display-xl text-on-background mb-6">Global Vision. Local Roots.</h1>
            <p className="font-editorial-italic text-on-surface-variant text-xl">Deploying digital and industrial excellence from our Meerut headquarters to the world.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

            {/* Inquiry Form */}
            <div className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-50 blur-xl"></div>
              <div className="relative bg-surface-container/60 backdrop-blur-2xl border border-outline-variant/30 rounded-xl p-8 md:p-12 h-full flex flex-col justify-between shadow-2xl">
                <div>
                  <h2 className="font-headline-md text-on-background mb-8">Direct Inquiry</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent" id="name" placeholder="Full Name" type="text"/>
                        <label className="absolute left-0 top-2 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary font-label-sm" htmlFor="name">Full Name</label>
                      </div>
                      <div className="relative">
                        <input className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent" id="company" placeholder="Company" type="text"/>
                        <label className="absolute left-0 top-2 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary font-label-sm" htmlFor="company">Company</label>
                      </div>
                    </div>
                    <div className="relative">
                      <input className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent" id="email" placeholder="Corporate Email" type="email"/>
                      <label className="absolute left-0 top-2 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary font-label-sm" htmlFor="email">Corporate Email</label>
                    </div>
                    <div className="relative">
                      <select className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors appearance-none" id="division">
                        <option className="bg-surface text-on-background" value="">Select Division</option>
                        <option className="bg-surface text-on-background" value="tech">Technology & AI</option>
                        <option className="bg-surface text-on-background" value="infra">Infrastructure</option>
                        <option className="bg-surface text-on-background" value="branding">Branding & Marketing</option>
                        <option className="bg-surface text-on-background" value="finance">Finance</option>
                      </select>
                      <label className="absolute left-0 -top-4 text-xs text-primary font-label-sm" htmlFor="division">Inquiry Target</label>
                      <div className="absolute right-0 top-3 pointer-events-none text-on-surface-variant">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                    <div className="relative pt-4">
                      <textarea className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="4"></textarea>
                      <label className="absolute left-0 top-6 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary font-label-sm" htmlFor="message">Message details</label>
                    </div>
                    <button className="mt-8 px-10 py-4 bg-primary text-on-primary font-black uppercase tracking-widest text-[10px] rounded-lg hover:shadow-[0_0_30px_rgba(183,196,255,0.3)] transition-all active:scale-95 flex items-center gap-2" type="submit">
                      Transmit Request <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Channels Column */}
            <div className="lg:col-span-5 flex flex-col gap-gutter">
              <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-8 flex-grow">
                <h3 className="font-headline-md text-on-background mb-8 text-xl">Direct Channels</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                      <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>mail</span>
                    </div>
                    <div>
                      <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Corporate Email</span>
                      <a className="font-body-md text-on-background text-lg font-bold hover:text-primary transition-colors" href="mailto:alphabusigroup@gmail.com">alphabusigroup@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                      <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>call</span>
                    </div>
                    <div>
                      <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Direct Line</span>
                      <a className="font-body-md text-on-background text-lg font-bold hover:text-primary transition-colors" href="tel:+917983032984">+91 79830 32984</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-[#25D366] shrink-0 border border-[#25D366]/20">
                      <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>chat</span>
                    </div>
                    <div>
                      <span className="block font-label-sm text-[#25D366] text-[10px] uppercase tracking-widest mb-1">WhatsApp Business</span>
                      <a className="font-body-md text-on-background text-lg font-bold hover:text-[#25D366] transition-colors" href="https://wa.me/917983032984" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden h-64 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img alt="Meerut Headquarters" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"/>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="font-label-sm bg-primary text-on-primary px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest">HQ: MEERUT, INDIA</span>
                </div>
                <a 
                  href="https://share.google/Tqb56Ve3g0iUVpHgc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-30"
                  aria-label="View on Google Maps"
                ></a>
              </div>
            </div>
          </div>

          <div className="mt-section-gap">
            <h3 className="font-headline-lg text-on-background mb-12">Global Headquarters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group border-l-2 border-primary pl-8 py-4 bg-white/5 rounded-r-2xl">
                <h4 className="font-headline-md text-2xl text-on-background mb-4">Meerut Corporate Office</h4>
                <p className="font-body-md text-slate-400 text-lg mb-6 leading-relaxed">
                  Garh Rd, Meerut,<br/>
                  Uttar Pradesh 250001,<br/>
                  India
                </p>
                <div className="flex gap-8">
                  <div>
                    <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Inquiry Time</span>
                    <span className="text-white font-bold">10:00 AM — 07:00 PM IST</span>
                  </div>
                  <div>
                    <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Global Support</span>
                    <span className="text-white font-bold">24/7 Digital Portal</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-primary/20 flex flex-col justify-center">
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Strategic Location</h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Our central headquarters in Meerut serves as the operational hub for our global industrial and technology initiatives, perfectly positioned to bridge regional excellence with international markets.
                </p>
                <a 
                  href="https://share.google/Tqb56Ve3g0iUVpHgc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all"
                >
                  Navigate via Google Maps <span className="material-symbols-outlined text-sm">location_on</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
