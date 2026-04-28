import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ConsultationModal from './ConsultationModal';

const servicesData = [
  {
    title: "IT & AI",
    path: "/services/it",
    icon: "terminal",
    subServices: [
      { name: "Cloud Architecture", path: "/services/it/cloud" },
      { name: "Mobile Ecosystems", path: "/services/it/mobile" },
      { name: "Custom Software", path: "/services/it/software" },
      { name: "Cybersecurity", path: "/services/it/security" }
    ]
  },
  {
    title: "Finance",
    path: "/services/finance",
    icon: "account_balance",
    subServices: [
      { name: "Consulting", path: "/services/finance/consulting" },
      { name: "Investment Advisory", path: "/services/finance/investment" },
      { name: "Funding Guidance", path: "/services/finance/funding" },
      { name: "Budget Planning", path: "/services/finance/budgeting" }
    ]
  },
  {
    title: "Infrastructure",
    path: "/services/infrastructure",
    icon: "architecture",
    subServices: [
      { name: "Commercial Projects", path: "/services/infrastructure/commercial" },
      { name: "Residential Projects", path: "/services/infrastructure/residential" },
      { name: "Govt. Projects", path: "/services/infrastructure/government" },
      { name: "Road Contracts", path: "/services/infrastructure/roads" }
    ]
  },
  {
    title: "Consulting",
    path: "/services/consulting",
    icon: "corporate_fare",
    subServices: [
      { name: "Business Strategy", path: "/services/consulting/business-strategy" },
      { name: "Ops Optimization", path: "/services/consulting/operations-optimization" },
      { name: "HR Consulting", path: "/services/consulting/hr-consulting" },
      { name: "Growth Planning", path: "/services/consulting/growth-planning" }
    ]
  },
  {
    title: "Government",
    path: "/services/government",
    icon: "policy",
    subServices: [
      { name: "Documentation", path: "/services/government/documentation-support" },
      { name: "Digital Services", path: "/services/government/digital-services" },
      { name: "Compliance", path: "/services/government/compliance-advisory" }
    ]
  },
  {
    title: "Branding",
    path: "/services/branding",
    icon: "diamond",
    subServices: [
      { name: "Brand Identity", path: "/services/branding/brand-identity" },
      { name: "Logo Creation", path: "/services/branding/logo-creation" },
      { name: "Strategy", path: "/services/branding/strategy" },
      { name: "Visual Systems", path: "/services/branding/visual-systems" }
    ]
  },
  {
    title: "Marketing",
    path: "/services/marketing",
    icon: "campaign",
    subServices: [
      { name: "Digital Marketing", path: "/services/marketing/digital-marketing" },
      { name: "Social Media", path: "/services/marketing/social-media" },
      { name: "SEO", path: "/services/marketing/seo" },
      { name: "Paid Ads", path: "/services/marketing/paid-ads" }
    ]
  },
  {
    title: "Political",
    path: "/services/political",
    icon: "public",
    subServices: [
      { name: "Campaign Strategy", path: "/services/political/campaign-strategy" },
      { name: "Digital Marketing", path: "/services/political/digital-marketing" },
      { name: "Voter Outreach", path: "/services/political/voter-outreach" },
      { name: "Social Media", path: "/services/political/social-media" }
    ]
  }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [expandedDivision, setExpandedDivision] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSideNavOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          isScrolled || isMenuOpen || isSideNavOpen ? 'backdrop-blur-2xl border-b py-4 shadow-2xl' : 'bg-transparent py-8'
        }`}
        style={isScrolled || isMenuOpen || isSideNavOpen ? {
          backgroundColor: 'var(--bg-nav)',
          borderBottomColor: 'var(--border-subtle)',
        } : {}}
      >
        <div className="max-w-container-max mx-auto px-margin-edge relative z-10 w-full h-full flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src="/assets/company-logo.png" 
              alt="Alpha Wings Tech Group Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div 
              className="relative h-full py-2"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <Link to="/services" className={`text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${
                isMenuOpen ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`}>
                Divisions <span className={`material-symbols-outlined text-sm transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </Link>
            </div>
            <Link to="/about" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">Strategy</Link>
            <Link to="/careers" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">Careers</Link>
            <Link to="/contact" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">Global HQ</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            <button className="text-slate-400 hover:text-white transition-colors hidden xl:block">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>

            {/* ── Theme Toggle ── */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="relative flex items-center w-[52px] h-7 rounded-full px-0.5 shrink-0 focus:outline-none"
              style={{
                background: theme === 'light'
                  ? 'linear-gradient(135deg, #3d5fe0, #52b788)'
                  : 'rgba(255,255,255,0.08)',
                border: theme === 'dark' ? '1px solid rgba(255,255,255,0.12)' : 'none',
                boxShadow: theme === 'light' ? '0 0 14px rgba(62,90,224,0.35)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {/* sliding knob */}
              <span
                className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  left: theme === 'light' ? 'calc(100% - 26px)' : '2px',
                  background: theme === 'light' ? '#ffffff' : '#1e293b',
                  transition: 'left 0.4s cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '14px',
                    color: theme === 'light' ? '#3d5fe0' : '#facc15',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {theme === 'light' ? 'light_mode' : 'dark_mode'}
                </span>
              </span>
            </button>

            {/* ── Consultation CTA ── */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block bg-primary text-on-primary px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(183,196,255,0.3)] transition-all active:scale-95 whitespace-nowrap"
            >
              Get Free Consultation
            </button>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[110]"
            >
              <div className={`w-6 h-0.5 transition-all duration-300 ${isSideNavOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ background: 'var(--text-primary)' }}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${isSideNavOpen ? 'opacity-0' : ''}`}
                style={{ background: 'var(--text-primary)' }}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${isSideNavOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ background: 'var(--text-primary)' }}></div>
            </button>
          </div>

        </div>

        {/* DESKTOP MEGA MENU */}
        <div 
          className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out z-[110] hidden lg:block 
            before:content-[''] before:absolute before:-top-10 before:left-0 before:w-full before:h-10 before:bg-transparent
            ${isMenuOpen ? 'visible' : 'invisible'}
          `}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div 
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out border-b border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] ${
              isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ backgroundColor: 'var(--bg-nav-solid)' }}
          >
            <div className="pt-20 pb-24">
              <div className="max-w-container-max mx-auto px-margin-edge">
                <div className="grid grid-cols-12 gap-16">
                  <div className="col-span-9 grid grid-cols-4 gap-x-12 gap-y-16">
                    {servicesData.map((service, i) => (
                      <div key={i} className="group/item">
                        <Link to={service.path} className="flex items-center gap-3 mb-6">
                          <span className="material-symbols-outlined text-secondary text-2xl group-hover/item:scale-125 transition-transform">{service.icon}</span>
                          <span className="text-[13px] font-black uppercase tracking-[0.15em] group-hover/item:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>{service.title}</span>
                        </Link>
                        <ul className="space-y-4 pl-9">
                          {service.subServices.map((sub, j) => (
                            <li key={j}><Link to={sub.path} className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-3 group/sub"><div className="w-0 h-[1px] bg-primary group-hover/sub:w-4 transition-all"></div>{sub.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="col-span-3 border-l border-white/10 pl-16">
                    <div className="glass-panel p-10 rounded-2xl border border-primary/30 relative overflow-hidden bg-white/5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                      <span className="font-label-sm text-primary tracking-[0.4em] uppercase mb-6 block">Featured</span>
                      <h4 className="font-display-xl text-3xl mb-6 tracking-tighter leading-tight" style={{ color: 'var(--text-primary)' }}>Infrastructure & Global Build.</h4>
                      <Link to="/services/infrastructure" className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4 group/link" style={{ color: 'var(--text-primary)' }}>Explore <span className="material-symbols-outlined text-sm group-hover/link:translate-x-3 transition-transform text-secondary">arrow_forward</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDE HEADER (Drawer) */}
      <div className={`fixed inset-0 z-[120] lg:hidden transition-all duration-500 ${isSideNavOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isSideNavOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsSideNavOpen(false)}
        ></div>
        
        {/* Drawer Panel */}
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm border-l transition-transform duration-500 transform ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`} style={{ backgroundColor: 'var(--bg-nav-solid)', borderColor: 'var(--border-medium)' }}>
          <div className="p-margin-edge border-b border-white/5 flex justify-between items-center">
            <span className="text-lg font-black tracking-tighter uppercase" style={{ color: 'var(--text-primary)' }}>MENU</span>
            <button onClick={() => setIsSideNavOpen(false)} className="w-10 h-10 flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-margin-edge space-y-10">
            {/* Main Links */}
            <div className="space-y-6">
              <div className="space-y-2">
                <button 
                  onClick={() => setExpandedDivision(expandedDivision === 'services' ? null : 'services')}
                  className="w-full flex justify-between items-center text-xl font-black uppercase tracking-widest text-white group"
                >
                  Divisions
                  <span className={`material-symbols-outlined transition-transform ${expandedDivision === 'services' ? 'rotate-180 text-primary' : ''}`}>expand_more</span>
                </button>
                
                <div className={`transition-all duration-500 overflow-hidden ${expandedDivision === 'services' ? 'max-h-[1000px] mt-6' : 'max-h-0'}`}>
                  <div className="grid grid-cols-1 gap-6 pl-4 border-l border-white/5">
                    {servicesData.map((service, i) => (
                      <div key={i} className="space-y-3">
                        <Link to={service.path} className="text-secondary text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                          <span className="material-symbols-outlined text-sm">{service.icon}</span>
                          {service.title}
                        </Link>
                        <div className="grid grid-cols-1 gap-2 pl-6">
                          {service.subServices.map((sub, j) => (
                            <Link key={j} to={sub.path} className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">{sub.name}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/about" className="block text-xl font-black uppercase tracking-widest text-white">Strategy</Link>
              <Link to="/careers" className="block text-xl font-black uppercase tracking-widest text-white">Careers</Link>
              <Link to="/contact" className="block text-xl font-black uppercase tracking-widest text-white">Global HQ</Link>
            </div>
 
            <div className="pt-10 border-t border-white/5">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="block w-full bg-primary text-on-primary text-center py-4 rounded-lg font-black uppercase tracking-widest text-xs"
              >
                Get Free Consultation
              </button>
            </div>
          </div>

          <div className="p-8 border-t border-white/5 bg-black/20">
            <div className="flex gap-4">
              {['public', 'podcasts', 'hub'].map((icon) => (
                <div key={icon} className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-500"><span className="material-symbols-outlined text-lg">{icon}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
