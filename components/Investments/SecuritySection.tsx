"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { ShieldCheck, Lock } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

export default function SecuritySection() {
  // Restructured to separate the bold title from the description for better UI hierarchy
  const protections = [
    {
      title: "Physical asset backing",
      desc: "Gold, property title deeds, and operational equipment.",
    },
    {
      title: "Professional custody",
      desc: "Gold holdings secured in high-security vaults.",
    },
    {
      title: "Conflict-free sourcing",
      desc: "Mintrix mines operate with full regulatory compliance and origin documentation.",
    },
    {
      title: "Radical transparency",
      desc: "Real-time data reporting and immutable ledger tracking on every deployed asset.",
    },
    {
      title: "ESG compliance",
      desc: "Sustainable extraction and ethical practices embedded into operations.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 px-6 bg-[#010301] relative overflow-hidden border-y border-white/5">
      {/* Ambient gold glow shifted to the right to balance the new layout */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(209,167,65,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column - Main Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/20 mb-6">
            <ShieldCheck size={16} className="text-[#D1A741]" />
            <span className="text-xs font-bold text-[#D1A741] uppercase tracking-wider">
              Asset Security
            </span>
          </div>

          <h2 className={`${montserrat.className} text-white text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[1.1]`}>
            Every Dollar Backed.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1A741] to-[#CEA741]">
              Every Transaction Documented.
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            BricketX structures every investment under a professional LLC framework with a transparent syndication model — giving investors tangible, documented ownership in real operating assets.
          </p>

          <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-2xl w-full max-w-lg">
            <Lock className="text-[#D1A741] shrink-0 mt-0.5" size={20} />
            <p className="text-gray-200 font-medium text-sm leading-relaxed">
              BricketX does not issue promises. It issues documentation —{" "}
              <span className="text-[#D1A741]">backed by assets you can verify.</span>
            </p>
          </div>
        </div>

        {/* Right Column - Prominent List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          {protections.map((item, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden bg-[#0A0A0A]/50 backdrop-blur-sm border border-white/5 hover:border-[#D1A741]/30 hover:bg-[#0A0A0A] transition-all duration-300 rounded-xl p-5 flex items-center gap-4"
            >
              {/* Left accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-[#D1A741] transition-colors duration-300" />
              
              <div className="flex flex-col pl-2">
                <p className="text-gray-100 text-base md:text-lg font-bold mb-1">
                  {item.title}
                </p>
                <p className="text-gray-400 text-sm md:text-base leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}