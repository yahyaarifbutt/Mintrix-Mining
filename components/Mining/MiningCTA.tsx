"use client";

import { Montserrat } from "next/font/google";
import { Mail, ArrowRight, FileText } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

export default function MiningCTA() {
  return (
    <section className="bg-[#050607] py-20 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">

        {/* Top Label */}
        <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-xs mb-3`}>
          Call To Action
        </h3>

        {/* Main Heading (UNCHANGED FONT) */}
        <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5`}>
          Looking for a Consistent <br className="hidden md:block"/> Mineral Supply?
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Secure reliable gold sourcing with a partner that delivers precision, transparency, and direct mine access tailored to your scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary Button */}
          <button className="group w-full sm:w-auto px-8 py-3 bg-[#D1A741] text-black font-bold tracking-[0.12em] uppercase text-xs rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#e6bb53]">
            <span>Request Supply</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary Button */}
          <button className="group w-full sm:w-auto px-7 py-3 border border-white/20 text-white font-bold tracking-[0.12em] uppercase text-xs rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#D1A741] hover:text-[#D1A741]">
            <Mail className="w-4 h-4" />
            <span>Contact Team</span>
          </button>

          

        </div>

      </div>
    </section>
  );
}