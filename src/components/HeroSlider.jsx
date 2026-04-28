import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

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
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1440&q=80"
  },
  {
    icon: "account_balance_wallet",
    label: "Gov-Tech Sol",
    title: "TRANSFORMING PUBLIC INFRASTRUCTURE.",
    description: "Strategic consulting and digital infrastructure for national development projects. Bridging governance with technology.",
    primaryCTA: { label: "Gov Solutions", to: "/services/government" },
    secondaryCTA: { label: "Public Policy", to: "/about" },
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1440&q=80"
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
  const { theme } = useTheme();
  const isLight = theme === 'light';

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
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-body)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* STATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {isLight ? (
          /* Light mode: soft gradient mesh, no dark earth image */
          <>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #f0f4f8 50%, #e8f7f0 100%)' }}></div>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 25% 50%, rgba(62,90,224,0.10) 0%, transparent 55%), radial-gradient(circle at 75% 30%, rgba(45,122,87,0.07) 0%, transparent 55%)' }}></div>
            <div className="absolute inset-0 bg-grid-pattern"></div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--bg-body) 100%)' }}></div>
          </>
        ) : (
          /* Dark mode: original earth image */
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(91,127,255,0.2),transparent_60%)]"></div>
            <img
              alt="Abstract satellite view of Earth"
              className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a232e]/70 via-transparent to-[#1a232e]"></div>
          </>
        )}
      </div>

      {/* SLIDING CONTENT */}
      <div className="max-w-container-max mx-auto px-margin-edge relative z-10 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 px-margin-edge flex items-center transition-all duration-1000 ease-in-out ${
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

                {/* Heading — dark in light mode for contrast */}
                <h1
                  className="font-display-xl text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tighter transition-all delay-500 duration-700"
                  style={{
                    color: isLight ? '#0b1220' : '#ffffff',
                    opacity: index === current ? 1 : 0,
                    transform: index === current ? 'translateY(0)' : 'translateY(40px)',
                  }}
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className="font-body-lg text-lg md:text-xl max-w-lg mb-12 leading-relaxed transition-all delay-700 duration-700"
                  style={{
                    color: isLight ? '#374151' : '#94a3b8',
                    opacity: index === current ? 1 : 0,
                    transform: index === current ? 'translateY(0)' : 'translateY(40px)',
                  }}
                >
                  {slide.description}
                </p>

                {/* CTAs */}
                <div
                  className="flex gap-6 flex-wrap transition-all delay-1000 duration-700"
                  style={{ opacity: index === current ? 1 : 0, transform: index === current ? 'translateY(0)' : 'translateY(40px)' }}
                >
                  <Link
                    to={slide.primaryCTA.to}
                    className="bg-primary px-10 py-5 rounded-lg font-black text-xs uppercase tracking-widest text-on-primary hover:shadow-[0_0_40px_rgba(91,127,255,0.4)] active:scale-95 transition-all inline-block"
                  >
                    {slide.primaryCTA.label}
                  </Link>
                  {/* Secondary CTA — adapts per theme */}
                  <Link
                    to={slide.secondaryCTA.to}
                    className="px-10 py-5 rounded-lg font-black text-xs uppercase tracking-widest active:scale-95 transition-all inline-block"
                    style={isLight ? {
                      background: 'rgba(62,90,224,0.08)',
                      border: '1px solid rgba(62,90,224,0.25)',
                      color: '#3d5fe0',
                    } : {
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      color: '#ffffff',
                    }}
                  >
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

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-12 left-margin-edge z-20 flex items-center gap-4 sm:gap-8">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all active:scale-90"
          style={{
            border: `1px solid ${isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.10)'}`,
            color: isLight ? '#374151' : '#ffffff',
          }}
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
                i === current
                  ? 'w-10 sm:w-16 bg-primary shadow-[0_0_15px_rgba(91,127,255,0.6)]'
                  : `w-4 sm:w-6 ${isLight ? 'bg-black/15 group-hover:bg-black/30' : 'bg-white/10 group-hover:bg-white/30'}`
              }`} />
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all active:scale-90"
          style={{
            border: `1px solid ${isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.10)'}`,
            color: isLight ? '#374151' : '#ffffff',
          }}
        >
          <span className="material-symbols-outlined text-3xl">chevron_right</span>
        </button>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none"
        style={{ opacity: isLight ? 0.015 : 0.03 }}>
        <div className="text-[250px] font-black leading-none rotate-90"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: isLight ? '#0b1220' : '#ffffff' }}>
          ALPHA
        </div>
      </div>

    </section>
  );
}
