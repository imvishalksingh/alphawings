import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: 'public', url: '#', label: 'LinkedIn' },
  { icon: 'podcasts', url: '#', label: 'Instagram' },
  { icon: 'hub', url: '#', label: 'Twitter' },
  { icon: 'campaign', url: '#', label: 'Facebook' },
  { icon: 'video_library', url: '#', label: 'YouTube' }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        
        {/* Main Footer Content - Optimized for mobile grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 gap-x-8 lg:gap-8 mb-20">
          
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-block mb-8 group">
              <img 
                src="/assets/company-logo.png" 
                alt="Alpha Wings Tech Group Logo" 
                className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-10 font-medium">
              Pioneering the next era of digital excellence through precision technology and visionary innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:border-white/30 transition-all group/social"
                  title={social.label}
                >
                  <span className="material-symbols-outlined text-xl group-hover/social:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Divisions Column - 1 column on mobile */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.25em] mb-8 text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Divisions</h4>
            <ul className="space-y-4">
              {['IT & AI', 'Infrastructure', 'Quantum Tech', 'Finance', 'Branding'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-500 hover:text-white text-[13px] font-medium transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column - 1 column on mobile */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.25em] mb-8 text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Resources</h4>
            <ul className="space-y-4">
              {['Strategy', 'Careers', 'Governance', 'Case Studies'].map((item) => (
                <li key={item}>
                  <Link to="/about" className="text-slate-500 hover:text-white text-[13px] font-medium transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Full width on mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 lg:pl-12">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.25em] mb-8 text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact HQ</h4>
            <address className="not-italic space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">location_on</span>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed">
                    Garh Rd, Meerut,<br />Uttar Pradesh 250001
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                  <a href="mailto:alphabusigroup@gmail.com" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">alphabusigroup@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">call</span>
                  <a href="tel:+917983032984" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">+91 79830 32984</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">chat</span>
                  <a href="https://wa.me/917983032984" target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">WhatsApp</a>
                </div>
              </div>
              <a 
                href="https://share.google/Tqb56Ve3g0iUVpHgc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-[#b7c4ff] text-[10px] font-black uppercase tracking-widest transition-all hover:gap-4"
              >
                View on Google Maps <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </address>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/5 mb-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          
          {/* Copyright */}
          <div className="max-w-xs">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              © {new Date().getFullYear()} ALPHA WINGS TECH GROUP. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Legal Links Grid */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {['PRIVACY POLICY', 'TERMS OF SERVICE', 'GLOBAL ETHICS', 'COOKIE SETTINGS', 'REGULATORY FILINGS'].map((item) => (
              <Link 
                key={item} 
                to="/about" 
                className="text-[10px] text-slate-500 hover:text-primary font-bold uppercase tracking-[0.2em] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
