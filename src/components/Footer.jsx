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
    <footer className="w-full pt-12 pb-6" style={{ backgroundColor: 'var(--bg-nav-solid)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-w-container-max mx-auto px-margin-edge">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 mb-6">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-3">
            <Link to="/" className="inline-block mb-4 group">
              <img 
                src="/assets/company-logo.png" 
                alt="Alpha Wings Tech Group Logo" 
                className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              Pioneering the next era of digital excellence through precision technology and visionary innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                <a href="mailto:Hr@alphabusi.com" className="text-sm font-medium transition-colors hover:text-primary" style={{ color: 'var(--text-secondary)' }}>Hr@alphabusi.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                <a href="mailto:Sales@alphabusi.com" className="text-sm font-medium transition-colors hover:text-primary" style={{ color: 'var(--text-secondary)' }}>Sales@alphabusi.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                <a href="mailto:Support@alphabusi.com" className="text-sm font-medium transition-colors hover:text-primary" style={{ color: 'var(--text-secondary)' }}>Support@alphabusi.com</a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--accent-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Divisions</h4>
            <ul className="space-y-2">
              {[
                { name: 'IT & AI', path: '/services/it' },
                { name: 'Infrastructure', path: '/services/infrastructure' },
                { name: 'Quantum Tech', path: '/services/it/cloud' },
                { name: 'Finance', path: '/services/finance' },
                { name: 'Branding', path: '/services/branding' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[12px] font-medium transition-colors hover:text-white" style={{ color: 'var(--text-muted)' }}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--accent-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Strategy', path: '/services/consulting' },
                { name: 'Careers', path: '/careers' },
                { name: 'Governance', path: '/services/government' },
                { name: 'Case Studies', path: '/' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[12px] font-medium transition-colors hover:text-white" style={{ color: 'var(--text-muted)' }}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--accent-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Legal</h4>
            <ul className="space-y-2">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookies' },
                { name: 'Disclaimer', path: '/disclaimer' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[12px] font-medium transition-colors hover:text-white" style={{ color: 'var(--text-muted)' }}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-2 lg:col-span-3 lg:pl-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--accent-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>Newsletter</h4>
            <div className="glass-panel p-5 rounded-xl border border-white/5">
              <p className="text-xs text-slate-400 mb-3 font-medium">Subscribe for exclusive insights and reports.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs w-full focus:border-primary outline-none"
                />
                <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">Submit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Offices Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-3 border-t border-white/5">
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-secondary">Global HQ</h5>
            <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
              6769, Dubai, UAE
            </p>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-secondary">Corporate Office</h5>
            <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
              D 155, Sector 15 a, Neelam Chowk, Block E, New Industrial Twp 5, ajronda, Faridabad, Haryana 121001
            </p>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-secondary">Branch Office</h5>
            <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
              Office No. 501, Gokul Vihar Rohta Road, Meerut 250002
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-3 border-t border-white/5">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)', fontFamily: "'Space Grotesk', sans-serif" }}>
            ALL RIGHT RESERVED COPYRIGHT 2024 ALPHA WINGS TECH GROUP
          </p>
          
          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=61580682820868" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black tracking-[0.2em] text-slate-500 hover:text-primary transition-colors">FACEBOOK</a>
            <a href="https://www.instagram.com/alphabusigroup/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black tracking-[0.2em] text-slate-500 hover:text-primary transition-colors">INSTAGRAM</a>
            <a href="#" className="text-[9px] font-black tracking-[0.2em] text-slate-500 hover:text-primary transition-colors">TWITTER</a>
            <a href="#" className="text-[9px] font-black tracking-[0.2em] text-slate-500 hover:text-primary transition-colors">LINKEDIN</a>
          </div>

          <div className="flex items-center gap-3 group cursor-pointer">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)', fontFamily: "'Space Grotesk', sans-serif" }}>
              DESIGN & DEVELOPED BY
            </p>
            <img src="/assets/company-logo.png" alt="Alpha Wings" className="h-7 w-auto object-contain transition-all group-hover:scale-110" />
          </div>
        </div>
      </div>
    </footer>
  );
}
