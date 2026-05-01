"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800", "900"] 
});

export default function MiningOverview() {
  return (
    <section className="bg-white py-24 lg:py-32 px-6 relative overflow-hidden">
      
      {/* 1. Premium Architectural Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D1A741]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      {/* 2. Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}} />

      
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Changed from 2 cols to 12 cols for a more sophisticated 5/7 split */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* LEFT: Elevated Image Presentation */}
          <div className="lg:col-span-5 relative group w-full max-w-md mx-auto lg:max-w-none">
            
            {/* Architectural Backdrop Frame (Rotated for 3D effect) */}
            <div className="absolute -inset-4 bg-gray-50 border border-gray-200/60 rounded-[2rem] transform -rotate-3 transition-transform duration-700 group-hover:rotate-0 shadow-inner" />
            
            {/* Gold Hover Glow Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#D1A741]/15 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] z-10 rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(209,167,65,0.2)] transition-all duration-700">
              <div className="absolute inset-0 border border-black/10 z-20 rounded-[1.5rem] pointer-events-none transition-colors duration-500 group-hover:border-[#D1A741]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              
              <Image
                src="/Images/gold-mining.png" 
                alt="Mining Site Overview"
                fill
                className="object-cover filter contrast-[1.1] grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out"
              />
            </div>

            {/* Floating Decorative Element (Adds structural depth) */}
            <div className="absolute -right-8 bottom-12 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white hidden md:flex items-center justify-center animate-float group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#D1A741] border-dashed opacity-40 animate-spin-slow" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D1A741] to-[#a8822d] shadow-inner" />
              </div>
            </div>

          </div>

          {/* RIGHT: Sophisticated Content Layout */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            
            {/* Header Section */}
            <div className="space-y-4 md:space-y-5 group/header cursor-default relative">
              {/* Subtle accent dot */}
              <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-[#D1A741] hidden lg:block animate-pulse" />
              
              {/* Eyebrow - Matched to MiningHero tracking, weight, and line placement */}
              <div className="flex items-center gap-4 mb-2 md:mb-4">
                <div className="w-12 h-[1px] bg-[#D1A741] transition-all duration-700 group-hover/header:w-24" />
                <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-xs`}>
                  Operations Overview
                </h3>
              </div>

              {/* Headline - Matched to MiningHero sizing, leading, tracking, and gradient span structure */}
              <h2 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900 tracking-tight`}>
                Mining Built on <br className="hidden md:block"/>
                <span className="relative inline-block mt-2 md:mt-0">
                  <span className="relative z-10 bg-gradient-to-r from-[#D1A741] via-[#F4D068] to-[#B38D30] bg-clip-text text-transparent drop-shadow-sm">
                    In-House Control
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#D1A741]/20 -z-10 blur-sm" />
                </span>
              </h2>
            </div>

            {/* Content Section with Structural Anchor Line */}
            <div className="mt-12 space-y-8 relative">
              {/* Vertical Anchor Line */}
              <div className="absolute left-0 top-2 bottom-4 w-[2px] bg-gradient-to-b from-[#D1A741] via-gray-200 to-transparent rounded-full" />
              
              {/* Paragraph 1 */}
              <div className="relative pl-8 group/text">
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 border-white bg-gray-200 group-hover/text:bg-[#D1A741] group-hover/text:scale-125 transition-all duration-300 shadow-sm" />
                <p className="text-lg leading-relaxed text-gray-600 font-medium">
                  Most commodity suppliers depend on third-party mines. Mintrix doesn't. We own and operate our extraction sites — which means tighter quality oversight, more reliable output, and direct traceability from ground to shipment.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="relative pl-8 group/text">
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2 border-white bg-gray-200 group-hover/text:bg-[#D1A741] group-hover/text:scale-125 transition-all duration-300 shadow-sm" />
                <p className="text-lg leading-relaxed text-gray-600 font-medium">
                  Our operations currently span three active sites in the Rosterman area of Kenya, with ongoing expansion aligned to growing demand for gold and strategic minerals.
                </p>
              </div>

            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}