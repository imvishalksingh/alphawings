import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company_name: '',
    division: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!showSuccess && window.grecaptcha) {
      const renderCaptcha = () => {
        try {
          const container = document.getElementById('recaptcha-contact');
          if (container) {
            container.innerHTML = '';
            window.grecaptcha.render('recaptcha-contact', {
              'sitekey': '6LeiP8wsAAAAABtE-2mKghtDVWTGKRKS3ZiMg4cI',
              'theme': 'dark'
            });
          }
        } catch (err) {
          console.log('Captcha render error:', err);
        }
      };
      setTimeout(renderCaptcha, 500);
    }
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    const response = window.grecaptcha ? window.grecaptcha.getResponse() : '';
    
    if (!response) {
      e.preventDefault();
      setError('Please verify that you are not a robot.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    
    // The form will submit to the iframe in the background
    // We wait 2 seconds to give it time before showing success
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company_name: '',
        division: '',
        message: ''
      });
      if (window.grecaptcha) window.grecaptcha.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="page-container bg-background min-h-screen">
      {/* Hidden Iframe for CRM submission */}
      <iframe 
        name="crm_contact_frame" 
        style={{ display: 'none' }} 
        title="crm_contact_submission"
      />

      <main className="flex-grow pt-24 pb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-edge">

          <div className="flex justify-start mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-label-sm uppercase tracking-widest text-xs">
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Overview
            </Link>
          </div>

          <div className="mb-12 md:mb-section-gap text-center md:text-left max-w-3xl">
            <span className="font-label-sm text-primary tracking-[0.3em] uppercase mb-4 block animate-fade-in">Connect with Us</span>
            <h1 className="font-display-xl text-display-xl text-on-background mb-6 tracking-tighter">Global Vision. <br/><span className="text-primary italic">Local Roots.</span></h1>
            <p className="font-editorial-italic text-editorial-italic text-on-surface-variant text-lg md:text-xl">Deploying digital and industrial excellence from our Meerut headquarters to the world.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter">

              {/* Inquiry Form */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-50 blur-xl"></div>
                <div className="relative bg-surface-container/60 backdrop-blur-2xl border border-outline-variant/30 rounded-xl p-6 md:p-12 h-full flex flex-col justify-between shadow-2xl">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-background mb-8">Direct Inquiry</h2>
                    <form 
                      action="https://crm.alphabusi.com/lead-form/4a702eeb8a3a560415184a047d7780d1" 
                      method="POST"
                      target="crm_contact_frame"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* CRM Hidden Fields */}
                      <input type="hidden" name="company_id" value="1" />
                      <input type="hidden" name="category_id" value="2" />
                      
                      {/* Mirror fields for CRM compatibility */}
                      <input type="hidden" name="inquiry-target" value={formData.division} />
                      <input type="hidden" name="custom_fields_data[inquiry-target_4]" value={formData.division} />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <input 
                            className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent" 
                            id="name" 
                            name="name"
                            placeholder="Full Name" 
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 top-2 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs font-label-sm" htmlFor="name">Full Name</label>
                        </div>
                        <div className="relative">
                          <input 
                            className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent" 
                            id="company" 
                            name="company_name"
                            placeholder="Company" 
                            type="text"
                            required
                            value={formData.company_name}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 top-2 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs font-label-sm" htmlFor="company">Company</label>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <input 
                            className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent" 
                            id="email" 
                            name="email"
                            placeholder="Corporate Email" 
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 top-2 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs font-label-sm" htmlFor="email">Corporate Email</label>
                        </div>
                        <div className="relative">
                          <input 
                            className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent" 
                            id="mobile" 
                            name="mobile"
                            placeholder="Mobile Number" 
                            type="tel"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 top-2 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs font-label-sm" htmlFor="mobile">Mobile Number</label>
                        </div>
                      </div>
                      <div className="relative">
                        <select 
                          className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors appearance-none" 
                          id="division"
                          name="division"
                          required
                          value={formData.division}
                          onChange={handleChange}
                        >
                          <option className="bg-surface text-on-background" value="">Select Division</option>
                          <option className="bg-surface text-on-background" value="Technology & AI">Technology & AI</option>
                          <option className="bg-surface text-on-background" value="Infrastructure">Infrastructure</option>
                          <option className="bg-surface text-on-background" value="Branding & Marketing">Branding & Marketing</option>
                          <option className="bg-surface text-on-background" value="Finance">Finance</option>
                        </select>
                        <label className="absolute left-0 -top-4 text-xs text-primary font-label-sm" htmlFor="division">Inquiry Target</label>
                        <div className="absolute right-0 top-3 pointer-events-none text-on-surface-variant">
                          <span className="material-symbols-outlined">expand_more</span>
                        </div>
                      </div>
                      <div className="relative pt-4">
                        <textarea 
                          className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-on-background px-0 py-2 transition-colors placeholder-transparent resize-none" 
                          id="message" 
                          name="message"
                          placeholder="Message" 
                          rows="4"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <label className="absolute left-0 top-6 text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs font-label-sm" htmlFor="message">Message details</label>
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm font-medium bg-red-500/10 px-4 py-2 rounded-lg w-full text-center">
                          {error}
                        </p>
                      )}

                      {/* ReCaptcha Widget */}
                      <div id="recaptcha-contact" className="flex justify-center"></div>

                      <button 
                        className={`w-full sm:w-auto mt-8 px-10 py-4 ${isSubmitting ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary'} text-on-primary font-black uppercase tracking-widest text-[10px] rounded-lg hover:shadow-[0_0_30px_rgba(183,196,255,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2`} 
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Transmitting...' : 'Transmit Request'} 
                        {!isSubmitting && <span className="material-symbols-outlined text-sm">send</span>}
                      </button>

                      {showSuccess && (
                        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <span className="material-symbols-outlined text-green-500">check_circle</span>
                          <p className="text-green-500 font-bold text-sm uppercase tracking-widest">Inquiry sent successfully</p>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>

              {/* Channels Column */}
              <div className="lg:col-span-5 flex flex-col gap-8 md:gap-gutter">
                <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-6 md:p-8 flex-grow">
                  <h3 className="font-headline-md text-xl md:text-headline-md text-on-background mb-8">Direct Channels</h3>
                  <ul className="space-y-6 md:space-y-8">
                    <li className="flex items-start gap-5">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                        <span className="material-symbols-outlined text-xl md:text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>mail</span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Human Resources</span>
                          <a className="font-body-md text-on-background text-base md:text-lg font-bold hover:text-primary transition-colors break-all" href="mailto:Hr@alphabusi.com">Hr@alphabusi.com</a>
                        </div>
                        <div>
                          <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Sales & Partnerships</span>
                          <a className="font-body-md text-on-background text-base md:text-lg font-bold hover:text-primary transition-colors break-all" href="mailto:Sales@alphabusi.com">Sales@alphabusi.com</a>
                        </div>
                        <div>
                          <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Global Support</span>
                          <a className="font-body-md text-on-background text-base md:text-lg font-bold hover:text-primary transition-colors break-all" href="mailto:Support@alphabusi.com">Support@alphabusi.com</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl overflow-hidden h-48 md:h-64 relative group">
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

          <div className="mt-16 md:mt-section-gap">
            <h3 className="font-headline-lg text-headline-lg text-on-background mb-8 md:mb-12">Our Global Footprint</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              
              {/* Dubai HQ */}
              <div className="group border-l-2 border-primary pl-6 md:pl-8 py-6 bg-white/5 rounded-r-2xl h-full flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-headline-md text-xl md:text-2xl text-on-background mb-4 uppercase tracking-tighter">Global HQ</h4>
                  <p className="font-body-md text-slate-400 text-base mb-6 leading-relaxed">
                    6769, Dubai, UAE
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                   <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Status</span>
                   <span className="text-white font-bold text-sm">Strategic Governance Center</span>
                </div>
              </div>

              {/* Faridabad Corporate */}
              <div className="group border-l-2 border-primary pl-6 md:pl-8 py-6 bg-white/5 rounded-r-2xl h-full flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-headline-md text-xl md:text-2xl text-on-background mb-4 uppercase tracking-tighter">Corporate Office</h4>
                  <p className="font-body-md text-slate-400 text-base mb-6 leading-relaxed">
                    D 155, Sector 15 a, Neelam Chowk, Block E, New Industrial Twp 5, ajronda, Faridabad, Haryana 121001
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                   <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Status</span>
                   <span className="text-white font-bold text-sm">Main Operations Hub</span>
                </div>
              </div>

              {/* Meerut Branch */}
              <div className="group border-l-2 border-primary pl-6 md:pl-8 py-6 bg-white/5 rounded-r-2xl h-full flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-headline-md text-xl md:text-2xl text-on-background mb-4 uppercase tracking-tighter">Branch Office</h4>
                  <p className="font-body-md text-slate-400 text-base mb-6 leading-relaxed">
                    Office No. 501,<br/>
                    Gokul Vihar Rohta Road,<br/>
                    Meerut 250002
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                   <span className="block font-label-sm text-primary text-[10px] uppercase tracking-widest mb-1">Status</span>
                   <span className="text-white font-bold text-sm">Regional Tech Center</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
