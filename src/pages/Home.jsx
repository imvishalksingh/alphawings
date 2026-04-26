import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">

      <HeroSlider />

      {/* Vision Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="font-headline-lg text-headline-lg mb-4">Our Vision.</h2>
              <div className="h-1 w-24 bg-primary rounded-full"></div>
            </div>
            <div className="lg:col-span-8">
              <p className="font-editorial-italic text-editorial-italic text-on-surface italic leading-relaxed">
                "At Alpha Wings Tech Group, we operate at the intersection of capital, technology, and human potential. Our mission is to stabilize emerging markets through robust infrastructure while aggressively scaling disruptive technologies that redefine how the world functions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-section-gap">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="font-label-sm text-secondary tracking-widest uppercase mb-4 block">Our Operations</span>
              <h2 className="font-headline-lg text-headline-lg">Divisional Ecosystem</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              Synergized operations across seven strategic pillars to ensure global market dominance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
            <Link to="/services/it" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">terminal</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Alpha IT &amp; AI</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Pioneering neural networks and decentralized cloud architectures for sovereign entities.</p>
            </Link>
            <Link to="/services/finance" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer border-primary/30 block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">account_balance</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Global Finance</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Asset management and algorithmic trading infrastructure for institutional liquidity.</p>
            </Link>
            <Link to="/services/government" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">account_balance_wallet</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Gov-Tech Sol</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Strategic consulting and digital infrastructure for national development projects.</p>
            </Link>
            <Link to="/services/consulting" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">corporate_fare</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Asset Mgmt</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Operational excellence and restructuring for Tier-1 corporate assets.</p>
            </Link>
            <Link to="/services/marketing" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">campaign</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Global Outreach</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Data-driven narrative engineering and global market penetration strategies.</p>
            </Link>
            <Link to="/services/branding" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">diamond</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Alpha Creative</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">High-end brand architectural development for luxury and industrial sectors.</p>
            </Link>
            <Link to="/services/political" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">public</span>
              <h3 className="font-headline-md text-headline-md text-lg mb-3">Strategic Policy</h3>
              <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">Navigating complex geopolitical landscapes through advisory and risk mitigation frameworks.</p>
            </Link>
            <Link to="/services/infrastructure" className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all cursor-pointer block border-primary/20">
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
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-12">The Alpha Advantage.</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">security</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg mb-2">Unmatched Stability</h4>
                  <p className="font-body-md text-on-surface-variant">Diversified portfolio ensuring resilience against regional economic volatility.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">bolt</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg mb-2">Agile Deployment</h4>
                  <p className="font-body-md text-on-surface-variant">Proprietary methodologies that cut time-to-market for complex industrial projects by 40%.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div className="glass-card p-10 rounded-3xl text-center">
              <div className="text-display-xl font-bold text-gradient mb-2">$4.2T</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Assets Under Supervision</p>
            </div>
            <div className="glass-card p-10 rounded-3xl text-center mt-12">
              <div className="text-display-xl font-bold text-gradient mb-2">84+</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Global Jurisdictions</p>
            </div>
            <div className="glass-card p-10 rounded-3xl text-center">
              <div className="text-display-xl font-bold text-gradient mb-2">12M</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Workforce Reach</p>
            </div>
            <div className="glass-card p-10 rounded-3xl text-center mt-12">
              <div className="text-display-xl font-bold text-gradient mb-2">0.1s</div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">Trading Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-section-gap">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center mb-16">
          <h2 className="font-display-xl text-headline-lg mb-4">A Presence Without Borders.</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Strategically headquartered in the world's primary economic nervous systems.</p>
        </div>
        <div className="relative max-w-[1440px] mx-auto h-[600px] rounded-3xl overflow-hidden border border-white/10 mx-8 lg:mx-16">
          <img
            alt="Minimalist world map with glowing pinpoints"
            className="w-full h-full object-cover opacity-80"
            src="/assets/minimal_dark_world_map.png"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl px-8">
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
                <h5 className="font-headline-md text-xl mb-1">Dubai, UAE</h5>
                <p className="text-xs font-label-sm text-on-surface-variant uppercase tracking-tighter">Quarter Deck QE2 Ship, Port Rashid</p>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary translate-y-8">
                <h5 className="font-headline-md text-xl mb-1">Gurugram, Haryana</h5>
                <p className="text-xs font-label-sm text-on-surface-variant uppercase tracking-tighter">Corporate Office</p>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
                <h5 className="font-headline-md text-xl mb-1">Meerut, UP</h5>
                <p className="text-xs font-label-sm text-on-surface-variant uppercase tracking-tighter">Branch Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section-gap bg-surface-container">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="font-headline-lg text-headline-lg mb-16">Trust of the Institutional Elite.</h2>
            <div className="glass-card p-12 rounded-[40px] relative">
              <span className="material-symbols-outlined text-secondary text-6xl absolute -top-8 -left-4">format_quote</span>
              <p className="font-body-lg text-2xl leading-relaxed mb-8">
                "Alpha Wings Tech Group didn't just provide us with a service grid; they re-engineered our entire operational methodology. Their IT division implemented a blockchain system that reduced our cross-border friction by 70% in under six months."
              </p>
              <div className="flex items-center gap-4">
                <img
                  alt="Professional portrait of a male executive"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA49LS2MA9lSFUz3-23iZY2hzegM9eZslt97_W0XyMEsT3iePpfwUqrlY-984j23BBrtAyVBP66Kashq-k0T1Nl7cmLNPJZDYy5rauTnk-HnZTEJA1VdMNtJDomjB2X2TS4tx5qbm0VaDX2yf0BY6ZMf-Yj67s3_dzuAFVT_BPStmEKP1_XoaNeU5EeVR--JwmiuF1Dvcq_6-oHQuF6g8TlarjJRYEluXcxdzsCJSHbClzQzyqQg_QEANp3aZORNddkvdTdRkX7NXo"
                />
                <div>
                  <p className="font-bold font-headline-md">Jonathan Sterling</p>
                  <p className="text-sm font-label-sm text-on-surface-variant">CEO, Sterling-Vanguard Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker */}
      <div className="py-12 border-y border-white/5 opacity-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale">
          <span className="font-black text-2xl opacity-40">AURORA</span>
          <span className="font-black text-2xl opacity-40">VERTEX</span>
          <span className="font-black text-2xl opacity-40">QUANTUM</span>
          <span className="font-black text-2xl opacity-40">IRONCLAD</span>
          <span className="font-black text-2xl opacity-40">MERCURY</span>
          <span className="font-black text-2xl opacity-40">PACIFIC</span>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-section-gap relative overflow-hidden">
        <img
          alt="Modern minimalist office lobby with high glass ceilings and futuristic architectural lines"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPIIBV-8GU7j_i_YL27ydKn2aOCQnqA1RcXqHzYgnq41N4VuaFppYDZ6_XcI_Mxvm-yGLZVcoQnBtzIRIw7RgqDSzhbqPEQLbirbE50ribwyk-TeqfPn41_bvJ7SBOBMWNCCCHHo-CxfJ4zLelq2YERwp0YDVUCYeKjDoz8WWNQj8Js42uQn0oOFrMPIY_4zQe8or1B5D2xwKA2kOhgFDKP1S1acc_W1gYVnVqzIx3UHSPU02T-ueivKxUx6cjPA8LKsgQTgir7q4"
        />
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10 text-center">
          <h2 className="font-display-xl text-display-xl mb-8">Ready for the Alpha Transition?</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Join the 400+ institutional partners who have integrated into our global ecosystem.
          </p>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 rounded-lg font-headline-md text-lg font-bold hover:shadow-[0_0_40px_rgba(183,196,255,0.3)] transition-all active:scale-95 inline-block">
            Join The Future
          </Link>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
