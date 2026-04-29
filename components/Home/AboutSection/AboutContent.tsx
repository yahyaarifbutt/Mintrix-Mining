import { CheckCircle2 } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

const principles = [
  "Sustainable Extraction Methods",
  "Certified Smelting & Refining",
  "Global Trading & Logistics",
  "Institutional-Grade Security"
];

export default function AboutContent() {
  return (
    <div className="space-y-10 text-[#1b211d] relative z-10">

      {/* Heading Section */}
      <div className="space-y-6 relative">
        {/* Subtle decorative dot */}
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full animate-ping" />
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full" />

        <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm ml-2`}>
          Precious Metals Operations
        </h3>

        <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] tracking-tight flex flex-col gap-2`}>
          <span>Pioneering the Future of</span>
          {/* Added a subtle text gradient to the gold text for a premium shine */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
            Gold Trading.
          </span>
        </h2>

        <div className="w-24 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full shadow-[0_0_15px_rgba(209,167,65,0.5)] transform origin-left hover:scale-x-150 transition-transform duration-700 bg-[length:200%_auto] animate-gradient" />
      </div>

      {/* Paragraph with accented left border */}
      <div className="pl-6 border-l-2 border-[#D1A741]/30 hover:border-[#D1A741] transition-colors duration-500">
        <p className="text-lg leading-relaxed text-gray-600 max-w-xl">
          Mintrix World represents the pinnacle of physical gold extraction and market operations. We combine ethically sourced mining practices with expert financial analysis to deliver unparalleled value, stability, and growth in the precious metals sector.
        </p>
      </div>

      {/* Principles - Enhanced with Sweeping Light Effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
        {principles.map((text, i) => (
          <div
            key={i}
            className="group relative overflow-hidden bg-white px-5 py-4 rounded-xl border border-gray-100 hover:border-[#D1A741]/50 shadow-sm hover:shadow-[0_15px_35px_rgba(209,167,65,0.15)] transition-all duration-500 transform hover:-translate-y-1.5 cursor-default flex items-center space-x-4"
          >
            {/* Shimmer sweeping effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D1A741]/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] transition-all duration-500" />
            
            <div className="relative p-2 bg-gray-50 rounded-lg group-hover:bg-[#D1A741]/10 transition-colors duration-500 z-10">
              <CheckCircle2 className="w-5 h-5 text-[#D1A741] transform group-hover:scale-125 transition-transform duration-500" />
            </div>
            <span className="relative z-10 text-sm font-bold tracking-wide uppercase text-[#0b0f0d] group-hover:text-[#D1A741] transition-colors duration-300">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button - Enhanced with glowing border */}
      <div className="pt-8">
        <button className={`${montserrat.className} group relative px-10 py-4 bg-[#0b0f0d] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(11,15,13,0.1)] hover:shadow-[0_15px_40px_rgba(209,167,65,0.4)] transition-all duration-500 transform hover:-translate-y-1`}>
          {/* Animated Gold Border Reveal */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D1A741] rounded-xl transition-colors duration-500" />
          
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#D1A741] to-[#e0b84f] transition-all duration-500 ease-out group-hover:w-full rounded-xl opacity-10" />
          
          <span className="relative z-10 tracking-wide flex items-center gap-2 text-[#ffffff] group-hover:text-[#D1A741] transition-colors duration-300">
            Discover Mintrix World
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>

    </div>
  );
}