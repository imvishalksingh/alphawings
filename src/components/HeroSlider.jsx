import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    icon: "terminal",
    label: "Alpha IT & AI",
    title: "ENGINEERING COGNITIVE INFRASTRUCTURE.",
    description: "Pioneering neural networks and decentralized cloud architectures for sovereign entities. We build the digital backbone of modern civilization.",
    primaryCTA: { label: "AI Solutions", to: "/services/it" },
    secondaryCTA: { label: "Tech Specs", to: "/services" },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "account_balance",
    label: "Global Finance",
    title: "NAVIGATING LIQUIDITY PORTALS.",
    description: "Asset management and algorithmic trading infrastructure for institutional liquidity. Precision capital allocation at a global scale.",
    primaryCTA: { label: "Finance Group", to: "/services/finance" },
    secondaryCTA: { label: "Market Data", to: "/services" },
    image: "https://images.unsplash.com/photo-1611974714851-48206138d731?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "account_balance_wallet",
    label: "Gov-Tech Sol",
    title: "TRANSFORMING PUBLIC INFRASTRUCTURE.",
    description: "Strategic consulting and digital infrastructure for national development projects. Bridging governance with technology.",
    primaryCTA: { label: "Gov Solutions", to: "/services/government" },
    secondaryCTA: { label: "Public Policy", to: "/about" },
    image: "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "corporate_fare",
    label: "Asset Mgmt",
    title: "DRIVING OPERATIONAL EXCELLENCE.",
    description: "Operational excellence and restructuring for Tier-1 corporate assets. Maximizing value through precision management.",
    primaryCTA: { label: "Consultancy", to: "/services/consulting" },
    secondaryCTA: { label: "Operations", to: "/services" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "campaign",
    label: "Global Outreach",
    title: "ENGINEERING GLOBAL NARRATIVES.",
    description: "Data-driven narrative engineering and global market penetration strategies. Amplifying brand presence across continents.",
    primaryCTA: { label: "Marketing Hub", to: "/services/marketing" },
    secondaryCTA: { label: "Case Studies", to: "/services" },
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "diamond",
    label: "Alpha Creative",
    title: "ARCHITECTING VISUAL SYSTEMS.",
    description: "High-end brand architectural development for luxury and industrial sectors. Where aesthetics meet industrial precision.",
    primaryCTA: { label: "Creative Division", to: "/services/branding" },
    secondaryCTA: { label: "Portfolio", to: "/services" },
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "public",
    label: "Strategic Policy",
    title: "ADVISING GLOBAL STABILITY.",
    description: "Navigating complex geopolitical landscapes through advisory and risk mitigation frameworks. Stabilizing future growth.",
    primaryCTA: { label: "Policy Group", to: "/services/political" },
    secondaryCTA: { label: "Risk Audit", to: "/about" },
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "architecture",
    label: "Alpha Infrastructure",
    title: "BUILDING THE ARCHITECTURE OF TOMORROW.",
    description: "Global construction, industrial engineering, and national road networks. We don't just build roads; we pave the way for civilization.",
    primaryCTA: { label: "Build Division", to: "/services/infrastructure" },
    secondaryCTA: { label: "Project Map", to: "/services" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1440&q=80"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#1a232e]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* STATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(91, 127, 255, 0.2),transparent_60%)]"></div>
        <img
          alt="Abstract satellite view of Earth"
          className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuABMst2RVDySpGGWg7rOgHlnUyP9u_RmyfLhyXEPgwrsDKOcpJOqkDdilQBQBQTWBH67dMuaZnpegNu2nnAbHIdrvEztydQIast2jXr7ER1dQcTg7q6fir6iP5UxzflMfIa7mnYOlXXCeqb9fT0mHnKJG6LgsMiI4-KqcUz_L56jrFehzbaQ5ah0McOT_swe3cvWUx73VCABISBVLGHe7VARHRnNq5spUcd_zvcLDS1goVc3g7ocER4K0vLB1i076yMCRIm6dkW-Qs"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a232e]/70 via-transparent to-[#1a232e]"></div>
      </div>

      {/* SLIDING CONTENT */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 px-8 lg:px-16 flex items-center transition-all duration-1000 ease-in-out ${
              index === current 
                ? 'opacity-100 translate-x-0 pointer-events-auto' 
                : index < current 
                  ? 'opacity-0 -translate-x-12 pointer-events-none' 
                  : 'opacity-0 translate-x-12 pointer-events-none'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
              <div className="max-w-2xl">
                <div 
                  className="flex items-center gap-4 mb-8 transition-all delay-300 duration-700"
                  style={{ opacity: index === current ? 1 : 0, transform: index === current ? 'translateY(0)' : 'translateY(20px)' }}
                >
                  <span className="material-symbols-outlined text-secondary text-3xl">{slide.icon}</span>
                  <span className="font-label-sm text-primary tracking-[0.4em] uppercase text-xs font-black">
                    {slide.label}
                  </span>
                </div>
                <h1 
                  className="font-display-xl text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-white tracking-tighter transition-all delay-500 duration-700"
                  style={{ opacity: index === current ? 1 : 0, transform: index === current ? 'translateY(0)' : 'translateY(40px)' }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="font-body-lg text-lg md:text-xl text-slate-400 max-w-lg mb-12 leading-relaxed transition-all delay-700 duration-700"
                  style={{ opacity: index === current ? 1 : 0, transform: index === current ? 'translateY(0)' : 'translateY(40px)' }}
                >
                  {slide.description}
                </p>
                <div 
                  className="flex gap-6 flex-wrap transition-all delay-1000 duration-700"
                  style={{ opacity: index === current ? 1 : 0, transform: index === current ? 'translateY(0)' : 'translateY(40px)' }}
                >
                  <Link to={slide.primaryCTA.to} className="bg-primary px-10 py-5 rounded-lg font-black text-xs uppercase tracking-widest text-on-primary hover:shadow-[0_0_40px_rgba(183,196,255,0.4)] active:scale-95 transition-all inline-block">
                    {slide.primaryCTA.label}
                  </Link>
                  <Link to={slide.secondaryCTA.to} className="bg-white/5 border border-white/10 px-10 py-5 rounded-lg font-black text-xs uppercase tracking-widest text-white hover:bg-white/10 active:scale-95 transition-all inline-block">
                    {slide.secondaryCTA.label}
                  </Link>
                </div>
              </div>

              <div 
                className="hidden lg:block relative transition-all delay-500 duration-1000 transform"
                style={{ opacity: index === current ? 1 : 0, transform: index === current ? 'scale(1) translateX(0)' : 'scale(0.9) translateX(50px)' }}
              >
                <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
                <div className="glass-panel p-4 rounded-[40px] relative overflow-hidden border border-white/20 shadow-2xl group">
                  <img alt={slide.title} className="rounded-[32px] w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" src={slide.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2 block">Alpha Division 0{index + 1}</span>
                    <h3 className="text-white text-2xl font-black tracking-tighter uppercase">{slide.label}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SLIDER CONTROLS (LINEAR STYLE) */}
      <div className="absolute bottom-12 left-8 lg:left-16 z-20 flex items-center gap-4 sm:gap-8">
        
        <button 
          onClick={prevSlide}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/30 transition-all active:scale-90"
        >
          <span className="material-symbols-outlined text-3xl">chevron_left</span>
        </button>

        {/* Counter Bars */}
        <div className="flex items-center gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative py-4"
            >
              <div className={`h-1.5 transition-all duration-700 rounded-full ${
                i === current ? 'w-10 sm:w-16 bg-primary shadow-[0_0_15px_rgba(183,196,255,0.6)]' : 'w-4 sm:w-6 bg-white/10 group-hover:bg-white/30'
              }`} />
            </button>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/30 transition-all active:scale-90"
        >
          <span className="material-symbols-outlined text-3xl">chevron_right</span>
        </button>

      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <div className="text-[250px] font-black text-white leading-none rotate-90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          ALPHA
        </div>
      </div>

    </section>
  );
}
