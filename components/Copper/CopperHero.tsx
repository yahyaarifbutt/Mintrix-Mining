"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck } from "lucide-react";
import ClientAnimations from "./ClientAnimations";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"] 
});

export default function CopperHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-spark {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 1; filter: blur(2px); }
        }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .gold-spark {
          position: absolute;
          background: radial-gradient(circle, #FFFFFF 0%, #FFD700 40%, transparent 80%);
          border-radius: 50%;
          animation: float-spark infinite ease-in-out;
          mix-blend-mode: screen;
        }
      `}} />

      {/* FIX: Changed rigid h-[85vh] to min-h-[85vh] so it can expand naturally if content pushes down */}
      <section className="relative w-full min-h-[100dvh] lg:min-h-[85vh] flex flex-col lg:flex-row bg-[#050505] overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none" style={{ backgroundImage: "url('/Textures/gold-noise.png')" }} />
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)' }} />

        {/* FIX: Replaced rigid percentages (h-[55%]) with natural flex and vertical padding (py-16) */}
        <div className="w-full lg:w-[55%] flex-1 lg:flex-none flex flex-col justify-center py-16 lg:py-20 px-6 sm:px-12 lg:pl-[8%] lg:pr-12 xl:pl-[10%] xl:pr-16 relative z-10">
          
          <div className="absolute top-[10%] left-[-10%] w-[60vw] lg:w-[45vw] h-[60vw] lg:h-[45vw] bg-[#D1A741] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />

          <ClientAnimations delay={0.1}>
            {/* FIX: Changed w-max to w-fit for broader standard CSS support */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/30 mb-4 sm:mb-6 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(209,167,65,0.1)]">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1A741] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#D1A741]"></span>
              </span>
              <span className={`${montserrat.className} text-[#D1A741] text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase`}>
                East African Source
              </span>
            </div>
          </ClientAnimations>

          <ClientAnimations delay={0.2}>
            {/* FIX: Toned down 4.5rem to 4rem, separated the spans better, and added break-words */}
            <h1 className={`${montserrat.className} text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] font-extrabold text-white tracking-tight uppercase mb-4 sm:mb-5 break-words`}>
              Copper Supply <br />
              <span className="text-[#D1A741] text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl mt-1 block">
                For Industrial and<br/>Manufacturing Buyers
              </span>
            </h1>
          </ClientAnimations>

          <ClientAnimations delay={0.3}>
            <div className="border-l-2 border-[#D1A741] pl-4 sm:pl-5 mb-6 sm:mb-8">
              <p className="text-white/95 text-[13px] sm:text-base font-medium leading-relaxed max-w-xl drop-shadow-md">
                Mintrix supplies copper concentrate and cathode to manufacturers, processors, and traders who need a reliable East African source. With growing demand driven by electrification and infrastructure, our copper supply is positioned for buyers planning forward procurement.
              </p>
            </div>
          </ClientAnimations>

          <ClientAnimations delay={0.4}>
            {/* FIX: Removed sm:w-max and added flex-wrap so the buttons stack if the screen is too narrow */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 w-full">
              <Link 
                href="/contact" 
                className={`${montserrat.className} group relative overflow-hidden w-full sm:w-auto text-center bg-[#D1A741] text-[#050505] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-[11px] sm:text-[12px] tracking-[0.1em] uppercase hover:bg-[#F5E6AD] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_25px_rgba(209,167,65,0.25)] flex items-center justify-center gap-2`}
              >
                <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                Request Copper Pricing <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className={`${montserrat.className} w-full sm:w-auto text-center bg-transparent border-[1.5px] border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-[11px] sm:text-[12px] tracking-[0.1em] uppercase hover:bg-white hover:text-[#050505] hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
              >
                Contact Trading Team
              </Link>
            </div>
          </ClientAnimations>
        </div>

        {/* FIX: Given right-side a responsive min-height so it doesn't collapse on mobile or weird aspect ratios */}
        <div className="w-full lg:w-[45%] min-h-[40vh] lg:min-h-full relative group overflow-hidden bg-[#050505]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out group-hover:scale-110"
            style={{ backgroundImage: "url('/Images/CopperImage1.webp')" }} 
          />

          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden sm:block">
            <div className="gold-spark w-2 h-2 top-[20%] left-[30%]" style={{ animationDuration: '4s', animationDelay: '0s' }} />
            <div className="gold-spark w-3 h-3 top-[50%] left-[60%]" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            <div className="gold-spark w-1.5 h-1.5 top-[70%] left-[20%]" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
            <div className="gold-spark w-2.5 h-2.5 top-[30%] left-[75%]" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
            <div className="gold-spark w-1 h-1 top-[80%] left-[50%]" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
            <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" style={{ animation: 'shimmer-sweep 6s infinite ease-in-out' }} />
          </div>
          
          {/* Enhanced the gradient slightly so it blends perfectly into the image on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-[#050505]/90 lg:bg-gradient-to-r lg:from-[#050505] lg:via-[#050505]/40 lg:to-transparent z-20" />
          
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 flex flex-col gap-2 sm:gap-3 z-30 scale-[0.85] sm:scale-100 origin-bottom-right">
            
            <ClientAnimations delay={0.5}>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#050505]/80 backdrop-blur-md border border-white/10 shadow-2xl hover:border-[#D1A741]/50 transition-colors duration-300">
                {/* FIX: Added shrink-0 to icons to ensure they don't deform on narrow edge cases */}
                <div className="w-8 h-8 rounded-full bg-[#D1A741]/20 flex items-center justify-center shrink-0">
                  <Globe2 className="w-4 h-4 text-[#D1A741]" />
                </div>
                <div>
                  <p className={`${montserrat.className} text-white text-[10px] font-bold uppercase tracking-wider`}>East Africa</p>
                  <p className="text-[#D1A741]/70 text-[8px] uppercase tracking-widest font-medium">Mining Operations</p>
                </div>
              </div>
            </ClientAnimations>

            <ClientAnimations delay={0.6}>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#050505]/80 backdrop-blur-md border border-white/10 shadow-2xl hover:border-[#D1A741]/50 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-[#D1A741]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D1A741]" />
                </div>
                <div>
                  <p className={`${montserrat.className} text-white text-[10px] font-bold uppercase tracking-wider`}>Documented</p>
                  <p className="text-[#D1A741]/70 text-[8px] uppercase tracking-widest font-medium">Reliable Delivery</p>
                </div>
              </div>
            </ClientAnimations>

          </div>
        </div>
      </section>
    </>
  );
}