import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">

      <HeroSlider />

      {/* Vision Section */}
      <section className="py-20 md:py-32 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="font-headline-lg text-headline-lg mb-4 text-center lg:text-left">Our Vision.</h2>
              <div className="h-1 w-24 bg-primary rounded-full mx-auto lg:mx-0"></div>
            </div>
            <div className="lg:col-span-8">
              <p className="font-editorial-italic text-editorial-italic text-on-surface italic leading-relaxed text-center lg:text-left text-lg md:text-xl">
                "At Alpha Wings Tech Group, we operate at the intersection of capital, technology, and human potential. Our mission is to stabilize emerging markets through robust infrastructure while aggressively scaling disruptive technologies that redefine how the world functions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-16 gap-6 text-center lg:text-left">
            <div>
              <span className="font-label-sm text-secondary tracking-widest uppercase mb-4 block">Our Operations</span>
              <h2 className="font-headline-lg text-headline-lg">Divisional Ecosystem</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              Synergized operations across seven strategic pillars to ensure global market dominance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <Link to="/services/it" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">terminal</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Alpha IT &amp; AI</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Pioneering neural networks and decentralized cloud architectures for sovereign entities.</p>
            </Link>
            <Link to="/services/finance" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer border-primary/30 block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">account_balance</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Global Finance</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Asset management and algorithmic trading infrastructure for institutional liquidity.</p>
            </Link>
            <Link to="/services/government" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">account_balance_wallet</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Gov-Tech Sol</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Strategic consulting and digital infrastructure for national development projects.</p>
            </Link>
            <Link to="/services/consulting" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">corporate_fare</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Asset Mgmt</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Operational excellence and restructuring for Tier-1 corporate assets.</p>
            </Link>
            <Link to="/services/marketing" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">campaign</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Global Outreach</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Data-driven narrative engineering and global market penetration strategies.</p>
            </Link>
            <Link to="/services/branding" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">diamond</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Alpha Creative</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">High-end brand architectural development for luxury and industrial sectors.</p>
            </Link>
            <Link to="/services/political" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">public</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Strategic Policy</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Navigating complex geopolitical landscapes through advisory and risk mitigation frameworks.</p>
            </Link>
            <Link to="/services/infrastructure" className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer border-primary/20 block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">architecture</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Alpha Infrastructure</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Global construction, industrial engineering, and national road networks.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Stats */}
      <section className="py-section-gap relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-right"></div>
        <div className="max-w-container-max mx-auto px-margin-edge relative z-10 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-8 md:mb-12 text-center lg:text-left">The Alpha Advantage.</h2>
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center lg:items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">security</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg mb-2">Unmatched Stability</h4>
                  <p className="font-body-md text-on-surface-variant">Diversified portfolio ensuring resilience against regional economic volatility.</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center lg:items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">bolt</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg mb-2">Agile Deployment</h4>
                  <p className="font-body-md text-on-surface-variant">Proprietary methodologies that cut time-to-market for complex industrial projects by 40%.</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center lg:items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">hub</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg mb-2">Omni-Channel Integration</h4>
                  <p className="font-body-md text-on-surface-variant">Seamless synergy across technology, finance, and branding pillars.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter mt-12 lg:mt-0">
            <div className="glass-card p-6 md:p-10 rounded-3xl text-center">
              <div className="text-display-xl font-bold text-gradient mb-2">$4.2T</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Assets Under Supervision</p>
            </div>
            <div className="glass-card p-6 md:p-10 rounded-3xl text-center md:mt-12">
              <div className="text-display-xl font-bold text-gradient mb-2">84+</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Global Jurisdictions</p>
            </div>
            <div className="glass-card p-6 md:p-10 rounded-3xl text-center">
              <div className="text-display-xl font-bold text-gradient mb-2">12M</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Workforce Reach</p>
            </div>
            <div className="glass-card p-6 md:p-10 rounded-3xl text-center md:mt-12">
              <div className="text-display-xl font-bold text-gradient mb-2">0.1s</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Trading Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-edge text-center mb-12 md:mb-16">
          <h2 className="font-display-xl text-headline-lg mb-4">A Presence Without Borders.</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Strategically headquartered in the world's primary economic nervous systems.</p>
        </div>
        <div className="relative max-w-container-max mx-auto h-[500px] md:h-[600px] rounded-3xl overflow-hidden mx-margin-edge border border-outline-variant/30">
          <img
            alt="Minimalist world map with glowing pinpoints"
            className="w-full h-full object-cover opacity-80"
            src="/assets/minimal_dark_world_map.png"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl">
              <div className="glass-card p-4 md:p-6 rounded-xl border-l-4 border-l-primary">
                <h5 className="font-headline-md text-lg md:text-xl mb-1">Dubai, UAE</h5>
                <p className="text-[10px] md:text-xs font-label-sm text-on-surface-variant uppercase tracking-tighter">Global Headquarters, 6769</p>
              </div>
              <div className="glass-card p-4 md:p-6 rounded-xl border-l-4 border-l-primary md:translate-y-8">
                <h5 className="font-headline-md text-lg md:text-xl mb-1">Faridabad, HR</h5>
                <p className="text-[10px] md:text-xs font-label-sm text-on-surface-variant uppercase tracking-tighter">Corporate Office, Sector 15 A</p>
              </div>
              <div className="glass-card p-4 md:p-6 rounded-xl border-l-4 border-l-primary">
                <h5 className="font-headline-md text-lg md:text-xl mb-1">Meerut, UP</h5>
                <p className="text-[10px] md:text-xs font-label-sm text-on-surface-variant uppercase tracking-tighter">Branch Office, Rohta Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Testimonials Section */}
      <section className="py-section-gap bg-surface-container overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div className="flex flex-col md:flex-row justify-between items-center lg:items-end mb-12 md:mb-16 gap-6 text-center lg:text-left">
            <div>
              <span className="font-label-sm text-secondary tracking-widest uppercase mb-4 block">Strategic Alliances</span>
              <h2 className="font-headline-lg text-headline-lg">Trust of the Institutional Elite.</h2>
              <p className="font-body-md text-on-surface-variant mt-2">What Our Business to Business Partners Say About Us</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('partners-scroll').scrollBy({ left: -400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={() => document.getElementById('partners-scroll').scrollBy({ left: 400, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all active:scale-90"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div 
            id="partners-scroll"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { name: "Surya Prakash", role: "Founder Of Legit Global", quote: "Alpha Wings re-engineered our operational methodology with precision." },
              { name: "Ripun Bansal", role: "Founder Of Instaa office", quote: "Their IT division implemented systems that reduced our friction by 70%." },
              { name: "Shivam Kumar", role: "Founder Of My Social Fox", quote: "The strategic depth Alpha Wings brings to every project is unmatched." },
              { name: "Vishal Gupta", role: "Founder Of Ishvi NGO", quote: "A transformative partnership that scaled our impact globally." },
              { name: "Shashank Rajput", role: "Founder Of GS Production House", quote: "Innovative solutions that redefined our content delivery architecture." },
              { name: "Gaurav Thakur", role: "Founder Of MRFW", quote: "Operational excellence and restructuring that drove our Tier-1 growth." },
              { name: "Jaivinder Kumar", role: "Founder of Mc infra", quote: "Their infrastructure consulting is world-class and future-ready." },
              { name: "Brijmohan Saini", role: "Founder Of Krishna Steel Works", quote: "Scaling industrial potential through robust tech integration." },
              { name: "Ankit Saini", role: "Founder Of Alpha Finance", quote: "Algorithmic infrastructure that ensures institutional liquidity." },
              { name: "Abhishek Kumar", role: "Founder Of UrbanDoll", quote: "High-end brand architectural development that leads markets." },
              { name: "Ishan garg", role: "Founder Of Hablab", quote: "Pioneering neural networks that redefined our digital presence." }
            ].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] md:w-[450px] snap-start">
                <div className="glass-card p-8 md:p-10 rounded-[24px] h-full flex flex-col justify-between border-primary/10 hover:border-primary/40 transition-all duration-500">
                  <div>
                    <span className="material-symbols-outlined text-secondary text-4xl mb-6 opacity-30">format_quote</span>
                    <p className="font-body-lg text-lg md:text-xl leading-relaxed mb-8 italic">
                      "{partner.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff`} 
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold font-headline-md text-base">{partner.name}</p>
                      <p className="text-xs font-label-sm text-on-surface-variant uppercase tracking-wider">{partner.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Ticker */}
      <div className="py-8 border-y opacity-70 overflow-hidden" style={{ borderColor: 'var(--border-medium)' }}>
        <div className="max-w-container-max mx-auto px-margin-edge">
          <div 
            ref={(el) => {
              if (el && !el.dataset.autoScrollActive) {
                el.dataset.autoScrollActive = "true";
                const scroll = () => {
                  if (!el.isDown) {
                    el.scrollLeft += 1;
                    if (el.scrollLeft >= el.scrollWidth / 2) {
                      el.scrollLeft = 0;
                    }
                  }
                  el._scrollReq = requestAnimationFrame(scroll);
                };
                el._scrollReq = requestAnimationFrame(scroll);
              }
            }}
            className="flex overflow-x-auto scrollbar-hide no-scrollbar gap-12 md:gap-24 items-center whitespace-nowrap cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => {
              const el = e.currentTarget;
              el.isDown = true;
              el.startX = e.pageX - el.offsetLeft;
              el.scrollLeftStart = el.scrollLeft;
            }}
            onMouseLeave={(e) => e.currentTarget.isDown = false}
            onMouseUp={(e) => e.currentTarget.isDown = false}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              if (!el.isDown) return;
              e.preventDefault();
              const x = e.pageX - el.offsetLeft;
              const walk = (x - el.startX) * 2;
              el.scrollLeft = el.scrollLeftStart - walk;
            }}
          >
            {[
              { type: 'img', src: '/assets/Logo-1.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-2.webp', h: 'h-16 md:h-24' },
              { type: 'img', src: '/assets/Logo-3.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-4.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-5.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/logo-6.png', h: 'h-10 md:h-14' },
              { type: 'text', content: 'PANDA GUYS' },
              // Repeated items for seamless infinite scroll
              { type: 'img', src: '/assets/Logo-1.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-2.webp', h: 'h-16 md:h-24' },
              { type: 'img', src: '/assets/Logo-3.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-4.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-5.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/logo-6.png', h: 'h-10 md:h-14' },
              { type: 'text', content: 'PANDA GUYS' },
              // One more set to ensure el.scrollWidth / 2 is large enough
              { type: 'img', src: '/assets/Logo-1.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-2.webp', h: 'h-16 md:h-24' },
              { type: 'img', src: '/assets/Logo-3.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-4.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/Logo-5.webp', h: 'h-10 md:h-14' },
              { type: 'img', src: '/assets/logo-6.png', h: 'h-10 md:h-14' },
              { type: 'text', content: 'PANDA GUYS' }
            ].map((item, i) => (
              item.type === 'img' ? (
                <img 
                  key={i}
                  src={item.src} 
                  alt="Partner Logo" 
                  className={`${item.h} w-auto object-contain hover:scale-110 transition-all duration-500 pointer-events-none`}
                />
              ) : (
                <span key={i} className="font-black text-xl md:text-3xl opacity-40 hover:opacity-100 transition-opacity">
                  {item.content}
                </span>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-section-gap relative overflow-hidden">
        <img alt="Premium office" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1440&q=80"/>
        <div className="max-w-container-max mx-auto px-margin-edge relative z-10 text-center">
          <h2 className="font-display-xl text-display-xl mb-8" style={{ color: 'var(--text-heading)' }}>Do you Want to Work With Us</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Join the 400+ institutional partners who have integrated into our global ecosystem.
          </p>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] active:scale-95 transition-all inline-block">
            GET Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
