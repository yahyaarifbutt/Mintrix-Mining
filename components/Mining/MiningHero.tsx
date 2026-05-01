"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ArrowRight, PhoneCall } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

export default function MiningHero() {
  return (
    <section className="relative w-full h-auto py-24 lg:py-0 lg:h-[75vh] lg:min-h-[600px] overflow-hidden bg-[#030404] flex items-center">
      
      {/* GLOBAL BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/mining-hero.jpg" 
          alt="Mining Background"
          fill
          priority
          className="object-cover opacity-40 animate-bg-pan mix-blend-luminosity"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030404] via-transparent to-[#030404] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030404] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdjM4SDFWMWgzOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtle-pan {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-bg-pan { animation: subtle-pan 30s ease-in-out infinite; }
      `}} />

      {/* CONTENT CONTAINER - Matched exactly to Hero.tsx wrapping */}
      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="space-y-4 md:space-y-5 max-w-2xl relative z-10">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-2 md:mb-4">
              <div className="w-12 h-[1px] bg-[#D1A741]" />
              <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-xs`}>
                Hero Section
              </h3>
            </div>

            {/* Headline */}
            <h1 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight`}>
              Where Minerals Are Found, <br className="hidden md:block"/> Extracted, and{" "}
              <span className="relative inline-block mt-2 md:mt-0">
                <span className="relative z-10 bg-gradient-to-r from-[#D1A741] via-[#FFF2CD] to-[#D1A741] bg-clip-text text-transparent drop-shadow-sm">
                  Prepared for Market
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#D1A741]/20 -z-10 blur-sm" />
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm md:text-base lg:text-lg text-gray-300/90 leading-relaxed max-w-xl font-light mt-3 md:mt-4 border-l-2 border-[#D1A741]/50 pl-6">
              Mintrix manages mining operations across multiple active sites in Kenya. From geological survey to extraction and on-site processing, every stage is controlled in-house — ensuring quality, output consistency, and responsible practices.
            </p>
            
            {/* Action Buttons (Matched identically to HeroButtons.tsx styling & constraints) */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-4 w-full max-w-xl">
              {/* Primary Button */}
              <button className="group relative flex-1 flex items-center gap-3 p-3.5 sm:px-5 border border-[#D1A741]/40 rounded-xl bg-black/40 backdrop-blur-md hover:bg-[#D1A741]/10 hover:border-[#D1A741] hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(209,167,65,0.3)] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D1A741]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex-shrink-0 p-2 bg-gradient-to-br from-[#D1A741] to-[#a8822d] rounded-full text-black shadow-sm">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                
                <div className="relative z-10 text-left">
                  <h3 className={`${montserrat.className} text-white font-bold text-base leading-tight`}>View Active Sites</h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors mt-0.5">Explore Locations</p>
                </div>
              </button>

              {/* Secondary Button */}
              <button className="group relative flex-1 flex items-center gap-3 p-3.5 sm:px-5 border border-white/20 rounded-xl bg-black/40 backdrop-blur-md hover:bg-white/5 hover:border-white/50 hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex-shrink-0 p-2 bg-white/10 border border-white/20 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 shadow-sm">
                  <PhoneCall className="w-5 h-5" />
                </div>
                
                <div className="relative z-10 text-left">
                  <h3 className={`${montserrat.className} text-white font-bold text-base leading-tight`}>Operations Team</h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors mt-0.5">Direct Inquiry</p>
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}