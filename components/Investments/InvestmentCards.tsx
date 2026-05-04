"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight, Gem, BarChart3 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"] });

// Added subtle entry animations for the cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function InvestmentCards() {
  const miningDetails = [
    { t: "Site Identification & Extraction", d: "Advanced geological mapping; ore extracted from verified gold corridors." },
    { t: "Processing & Concentration", d: "Modern crushing and processing machinery maximizes raw gold recovery." },
    { t: "High-Purity Refining", d: "Concentrate refined into 99.9% pure gold bars for local and international markets." },
    { t: "Market Realization", d: "Gold sold directly; mining infrastructure appreciates alongside production growth." },
    { t: "Investor Returns", d: "Yield distributed from gold sales and scalable infrastructure growth." },
  ];

  const tradingDetails = [
    { t: "Strategic Procurement", d: "Bulk purchasing of raw gold/doré from verified Mintrix sources at competitive local rates." },
    { t: "Assay & Refinement", d: "In-house verification confirms purity; gold refined to internationally tradable bullion." },
    { t: "Market Aggregation", d: "Quantities pooled to meet high-volume requirements of international refineries." },
    { t: "Global Liquidation", d: "Sold at prevailing international spot price across Dubai and London hubs." },
    { t: "Capital Re-entry", d: "Profits and principal recycled into the next trading round, compounding growth." },
  ];

  return (
    <section className="py-10 lg:py-14 px-6 bg-white">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-10">
          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-black text-[#010301] tracking-tight`}>
            Choose Your Entry Point <span className="text-[#D1A741]">Into The Gold Economy</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-[15px] font-medium">
            BricketX offers two distinct investment products tied to Mintrix's operations — each with different return profiles, timelines, and risk levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          
          {/* MINING CARD */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, boxShadow: "0px 20px 40px -10px rgba(209,167,65,0.25)", borderColor: "rgba(209,167,65,0.6)" }}
            className="p-6 lg:p-7 rounded-[2rem] border border-[#D1A741]/30 bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#050505] shadow-[0_15px_30px_rgba(0,0,0,0.1)] relative group transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-6 text-[#D1A741] opacity-[0.04] group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
              <Gem size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex-grow">
              <div className="inline-block px-3 py-1.5 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/30 mb-4 backdrop-blur-sm">
                <h3 className={`${montserrat.className} text-[#D1A741] text-[10px] font-bold uppercase tracking-[0.2em]`}>Option 1: Gold Mining</h3>
              </div>
              <h4 className={`${montserrat.className} text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}>
                Long-term. Asset-backed. Production-driven.
              </h4>
              <p className="text-[13px] text-gray-400 mb-5 leading-relaxed">Beyond pure gold returns, this investment benefits from land and infrastructure appreciation within the Rosterman growth corridor.</p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl group-hover:border-[#D1A741]/30 transition-colors duration-500">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Target IRR</p>
                  <p className="text-xl font-black text-[#D1A741]">22.2%+</p>
                </div>
                <div className="p-3.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl group-hover:border-[#D1A741]/30 transition-colors duration-500">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Duration</p>
                  <p className="text-lg font-bold text-white mt-1">5-Year Growth</p>
                </div>
              </div>

              <div className="space-y-1.5 mb-5 text-[13px] text-gray-300">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-500">Asset Backing</span>
                  <span className="text-right font-medium">Physical gold, title deeds</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-500">Location</span>
                  <span className="text-right font-medium">Rosterman Gold Belt, Kenya</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-500">Output</span>
                  <span className="text-right font-medium">99.9% pure gold (LBMA)</span>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-[#D1A741] font-bold text-[11px] uppercase tracking-widest mb-2.5">What Your Capital Does:</h5>
                <div className="space-y-2.5 max-h-[190px] overflow-y-auto pr-2 custom-scrollbar">
                  {miningDetails.map((item, i) => (
                    <div key={i} className="bg-black/50 p-3 rounded-xl border border-white/5 group-hover:border-[#D1A741]/20 transition-colors duration-300">
                      <p className="text-gray-100 text-[13px] font-bold mb-1">{item.t}</p>
                      <p className="text-gray-300 text-[13px] leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="https://bricketx.com/opportunities" target="_blank" className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D1A741] to-[#c39967] text-black py-3.5 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(209,167,65,0.4)] hover:shadow-[0_0_25px_rgba(209,167,65,0.7)] hover:scale-[1.02] transition-all duration-300">
              Explore Mining on BricketX <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* TRADING CARD */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, boxShadow: "0px 20px 40px -10px rgba(209,167,65,0.25)", borderColor: "rgba(209,167,65,0.6)" }}
            className="p-6 lg:p-7 rounded-[2rem] border border-gray-800 bg-gradient-to-br from-[#0a0a0a] to-[#000000] shadow-[0_15px_30px_rgba(0,0,0,0.1)] relative group transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 p-6 text-[#c39967] opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700">
              <BarChart3 size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex-grow">
              <div className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#D1A741]/30 group-hover:bg-[#D1A741]/5 transition-all duration-500 mb-4 backdrop-blur-sm">
                <h3 className={`${montserrat.className} text-white group-hover:text-[#D1A741] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors`}>Option 2: Gold Trading</h3>
              </div>
              <h4 className={`${montserrat.className} text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300`}>
                High-frequency. Liquid. Fast-cycle.
              </h4>
              <p className="text-[13px] text-gray-400 mb-5 leading-relaxed">The arbitrage advantage is real: BricketX sources physical gold from Mintrix's production at local rates, selling at international spot prices.</p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl group-hover:border-[#D1A741]/30 transition-colors duration-500">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Target Net ROI</p>
                  <p className="text-xl font-black text-white group-hover:text-[#D1A741] transition-colors">20–25% <span className="text-xs font-normal text-gray-500">/cycle</span></p>
                </div>
                <div className="p-3.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl group-hover:border-[#D1A741]/30 transition-colors duration-500">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Duration</p>
                  <p className="text-lg font-bold text-white mt-1">1–2 Months</p>
                </div>
              </div>

              <div className="space-y-1.5 mb-5 text-[13px] text-gray-300">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-500">Risk Level</span>
                  <span className="text-right font-medium">Low-Medium</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-500">Asset Backing</span>
                  <span className="text-right font-medium">Physical 99.9% gold</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-gray-500">Trading Markets</span>
                  <span className="text-right font-medium">DMCC Dubai, LBMA London</span>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-white group-hover:text-[#D1A741] transition-colors font-bold text-[11px] uppercase tracking-widest mb-2.5">How the Loop Works:</h5>
                <div className="space-y-2.5 max-h-[190px] overflow-y-auto pr-2 custom-scrollbar">
                  {tradingDetails.map((item, i) => (
                    <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 group-hover:border-[#D1A741]/20 transition-colors duration-300">
                      <p className="text-gray-100 text-[13px] font-bold mb-1">{item.t}</p>
                      <p className="text-gray-300 text-[13px] leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FIXED: Changed all 'group-hover:' back to standard 'hover:' so it only reacts when directly hovered */}
            <Link href="https://bricketx.com/opportunities" target="_blank" className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-gradient-to-r hover:from-[#D1A741] hover:to-[#c39967] hover:text-black hover:border-transparent hover:shadow-[0_0_15px_rgba(209,167,65,0.4)] transition-all duration-300">
              Explore Trading on BricketX <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(209, 167, 65, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(209, 167, 65, 0.8); }
      `}</style>
    </section>
  );
}