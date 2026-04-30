"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

export default function MiningHero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[600px] max-h-[850px] bg-[#030404] flex flex-col overflow-hidden pb-6 lg:pb-10 px-4 lg:px-12">
      
      {/* 1. GLOBAL BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          // CHANGE IMAGE PATH HERE
          src="/Images/mining-hero.jpg" 
          alt="Mining Background"
          fill
          priority
          className="object-cover opacity-50 animate-bg-pan mix-blend-luminosity"
        />
        
        {/* Cinematic Overlays: These ensure the text remains readable regardless of the image used */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030404] via-transparent to-[#030404] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030404] via-transparent to-transparent opacity-60" />
        
        {/* Precision Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdjM4SDFWMWgzOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]" />
      </div>

      {/* Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtle-pan {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes shimmer-metallic {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-bg-pan { animation: subtle-pan 30s ease-in-out infinite; }
      `}} />

      {/* 2. CONTENT CONTAINER (Typography) */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex-1 flex flex-col justify-center pt-16">
        <div className="space-y-6">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#D1A741]" />
            <span className={`${montserrat.className} text-[#D1A741] text-xs font-bold tracking-[0.5em] uppercase`}>
              Industrial Operations
            </span>
          </div>

          {/* Headline */}
          <h1 className={`${montserrat.className} text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white tracking-tight`}>
            Unearthing <br /> Global{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#D1A741] via-[#FFF2CD] to-[#D1A741] bg-clip-text text-transparent">
                Wealth
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#D1A741]/20 -z-10 blur-sm" />
            </span>
          </h1>
        </div>
      </div>

      {/* 3. INTEGRATED BOTTOM CONTROL DECK */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto mt-8 flex flex-col lg:flex-row border border-white/10 rounded-2xl lg:rounded-[2rem] bg-black/60 backdrop-blur-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
        
        {/* Section A: Description */}
        <div className="flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 relative group">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#D1A741] to-transparent opacity-50" />
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-xl font-light">
            Deploying state-of-the-art heavy machinery and AI-driven geological intelligence to maximize yield, optimize safety, and extract pristine value from the earth.
          </p>
        </div>

        {/* Section B: Live Stats */}
        <div className="flex items-center justify-between gap-12 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.02]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <p className={`${montserrat.className} text-gray-500 text-[10px] font-bold uppercase tracking-widest`}>Active Locations</p>
            </div>
            <p className={`${montserrat.className} text-3xl lg:text-4xl font-black text-white`}>
              12<span className="text-[#D1A741] ml-1">+</span>
            </p>
          </div>

          <div>
            <p className={`${montserrat.className} text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1`}>Annual Yield</p>
            <div className="flex items-baseline gap-1">
              <p className={`${montserrat.className} text-3xl lg:text-4xl font-black text-white`}>2.4</p>
              <p className={`${montserrat.className} text-xs text-[#D1A741] font-bold tracking-wider uppercase`}>M oz</p>
            </div>
          </div>
        </div>

        {/* Section C: CTA Button */}
        <button className="group relative flex-shrink-0 w-full lg:w-auto min-w-[280px] p-8 lg:p-10 bg-[#D1A741] hover:bg-[#e6bb53] transition-colors duration-500 flex items-center justify-between lg:justify-center gap-6 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer-metallic_1.5s_infinite]" />
          <span className={`${montserrat.className} text-black text-sm font-bold tracking-[0.2em] uppercase relative z-10`}>
            Explore Capabilities
          </span>
          <div className="relative z-10 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black text-black group-hover:text-[#D1A741] transition-all duration-300 transform group-hover:translate-x-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}