"use client";

import { Montserrat } from "next/font/google";
import { Pickaxe, Gem, Scale } from "lucide-react";
import ClientAnimations from "./ClientAnimations";

// Using the established weights for a bold, high-end look
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"] 
});

export default function GoldSupply() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes card-shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}} />
      
      <section className="py-16 lg:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200 relative overflow-hidden">
        
        {/* Soft Golden Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D1A741]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D1A741]/5 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ClientAnimations delay={0.1}>
            <div className="text-center mb-12 group cursor-default">
              <h2 className={`${montserrat.className} text-3xl md:text-5xl font-extrabold text-[#050505] mb-4 transition-colors duration-500 group-hover:text-[#D1A741]`}>
                What We Supply
              </h2>
              <div className="w-20 h-1.5 bg-[#D1A741] mx-auto rounded-full transition-all duration-500 group-hover:w-32 group-hover:shadow-[0_0_15px_rgba(209,167,65,0.5)]" />
            </div>
          </ClientAnimations>

          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Card 1: Raw Ore */}
            <ClientAnimations delay={0.2} className="h-full">
              <div className="group h-full bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D1A741]/40 hover:shadow-[0_20px_40px_-15px_rgba(209,167,65,0.15)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                
                {/* Expanding Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#D1A741] transition-all duration-500 group-hover:w-full" />
                
                {/* Glossy Hover Shine */}
                <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[card-shine_1.2s_ease-in-out] pointer-events-none z-10" />

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1A741]/10 rounded-full blur-[40px] group-hover:bg-[#D1A741]/25 transition-colors duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-[#D1A741]/10 flex items-center justify-center mb-6 group-hover:bg-[#D1A741] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(209,167,65,0.2)]">
                  <Pickaxe className="w-8 h-8 text-[#D1A741] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className={`${montserrat.className} text-2xl font-bold text-[#050505] mb-3 group-hover:text-[#D1A741] transition-colors duration-300`}>Raw Ore</h3>
                <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300 relative z-20">
                  Available for buyers with in-house refining capacity. Sourced directly from our active veins in the Rosterman region.
                </p>
              </div>
            </ClientAnimations>

            {/* Card 2: Doré Bar (Highlighted Center Card) */}
            <ClientAnimations delay={0.3} className="h-full">
              <div className="group h-full bg-white border-2 border-[#D1A741]/40 p-8 rounded-3xl shadow-[0_15px_40px_-15px_rgba(209,167,65,0.15)] hover:border-[#D1A741] hover:shadow-[0_25px_50px_-15px_rgba(209,167,65,0.3)] transition-all duration-500 relative overflow-hidden transform lg:-translate-y-4 hover:lg:-translate-y-6">
                
                {/* Permanent but thickening Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#D1A741]/70 transition-all duration-500 group-hover:bg-[#D1A741] group-hover:h-2" />
                
                {/* Glossy Hover Shine */}
                <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[card-shine_1.2s_ease-in-out] pointer-events-none z-10" />

                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D1A741]/15 rounded-full blur-[40px] group-hover:bg-[#D1A741]/30 transition-colors duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-[#D1A741] flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(209,167,65,0.2)] group-hover:scale-110 transition-transform duration-500">
                  <Gem className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                
                <h3 className={`${montserrat.className} text-2xl font-bold text-[#D1A741] mb-3`}>Doré Bar</h3>
                <p className="text-gray-700 leading-relaxed font-medium group-hover:text-[#050505] transition-colors duration-300 relative z-20">
                  Semi-refined gold-silver alloy ready for final refining. The preferred format for mid-tier traders and international refineries.
                </p>
              </div>
            </ClientAnimations>

            {/* Card 3: Refined Gold */}
            <ClientAnimations delay={0.4} className="h-full">
              <div className="group h-full bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D1A741]/40 hover:shadow-[0_20px_40px_-15px_rgba(209,167,65,0.15)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                
                {/* Expanding Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#D1A741] transition-all duration-500 group-hover:w-full" />

                {/* Glossy Hover Shine */}
                <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[card-shine_1.2s_ease-in-out] pointer-events-none z-10" />

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1A741]/10 rounded-full blur-[40px] group-hover:bg-[#D1A741]/25 transition-colors duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-[#D1A741]/10 flex items-center justify-center mb-6 group-hover:bg-[#D1A741] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(209,167,65,0.2)]">
                  <Scale className="w-8 h-8 text-[#D1A741] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className={`${montserrat.className} text-2xl font-bold text-[#050505] mb-3 group-hover:text-[#D1A741] transition-colors duration-300`}>Refined Gold</h3>
                <p className="text-gray-600 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300 relative z-20">
                  High-purity supply where processing to final purity is required by the buyer, tailored for premium markets.
                </p>
              </div>
            </ClientAnimations>

          </div>
        </div>
      </section>
    </>
  );
}