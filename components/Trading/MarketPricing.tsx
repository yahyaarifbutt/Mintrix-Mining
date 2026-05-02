"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight, BarChart2, Check, Scale } from "lucide-react";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function MarketPricing() {
  const benchmarks = [
    { name: "Gold", value: "London Bullion Market Association (LBMA) spot price" },
    { name: "Copper", value: "London Metal Exchange (LME) copper cash price" },
    { name: "Lithium", value: "Fastmarkets / Benchmark Mineral Intelligence lithium price index" },
    { name: "Ruby & Gemstones", value: "GIA-referenced grading and comparable auction market values" },
    { name: "Industrial Minerals", value: "Regional market rates + logistics-adjusted cost basis" },
  ];

  const adjustments = [
    "Mineral grade and purity (assay confirmed)",
    "Volume — larger orders scale better",
    "Delivery terms — FOB, CIF, or ex-works",
    "Contract length — spot vs. forward supply",
  ];

  const inquiryDetails = [
    "Commodity type and grade required",
    "Volume — one-time or ongoing",
    "Preferred delivery terms and destination",
    "Target timeline",
  ];

  return (
    <>
      {/* =========================================
          SECTION 1: PRICING LOGIC (DARK, COMPACT, SPLIT-LAYOUT)
          ========================================= */}
      {/* Reduced padding significantly to tighten the section */}
      <section className="py-12 lg:py-16 px-4 bg-[#010301] relative overflow-hidden">
        
        {/* Ambient Gold Flare Animations */}
        <motion.div 
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D1A741]/15 blur-[120px] rounded-full pointer-events-none"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#D1A741]/10 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* New Split Layout Structure */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            
            {/* --- Left Column: Header & Adjustments --- */}
            <div className="lg:w-5/12 space-y-8 lg:sticky lg:top-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#D1A741]/10 border border-[#D1A741]/20 shadow-[0_0_15px_rgba(209,167,65,0.15)]">
                  <BarChart2 className="w-5 h-5 text-[#D1A741]" />
                </div>
                <h3 className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.3em] uppercase text-[10px]`}>
                  Market Pricing Section
                </h3>
                <h2 className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-white tracking-tight`}>
                  How We Price Our Commodities
                </h2>
                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed">
                  Mintrix uses internationally recognized market benchmarks. Prices adjust dynamically based on grade, volume, and current production availability.
                </p>
              </div>

              {/* Compact Adjustments Block */}
              <div className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className={`${montserrat.className} text-sm font-bold text-white mb-4 flex items-center gap-2`}>
                  <Scale className="w-4 h-4 text-[#D1A741]" />
                  Pricing Adjustments
                </h4>
                <div className="grid gap-3">
                  {adjustments.map((adj, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-[#D1A741] rounded-full p-0.5 mt-0.5">
                        <Check className="w-3 h-3 text-[#010301] stroke-[3]" />
                      </div>
                      <span className="text-white/90 font-medium text-[13px] leading-tight">{adj}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* --- Right Column: Sleek Benchmark Rows --- */}
            <div className="lg:w-7/12 w-full flex flex-col gap-3 mt-4 lg:mt-0">
              <h4 className={`${montserrat.className} text-sm font-bold text-white/50 uppercase tracking-widest mb-2 pl-2`}>
                Referenced Benchmarks
              </h4>
              
              {benchmarks.map((bm, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.01, x: 5 }}
                  className="group relative bg-[#0a0c0a]/60 border border-white/5 hover:border-[#D1A741]/40 hover:bg-[#D1A741]/[0.02] rounded-xl p-5 md:p-6 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
                >
                  {/* Subtle hover glow strip on the left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D1A741] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#D1A741]" />
                  
                  <span className={`${montserrat.className} text-[#D1A741] font-bold text-base md:text-lg min-w-[140px]`}>
                    {bm.name}
                  </span>
                  
                  <span className="text-white font-medium text-sm leading-relaxed border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-6">
                    {bm.value}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: CTA (FULL WHITE BACKGROUND)
          ========================================= */}
      <section className="py-16 lg:py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          
          <h4 className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-gray-900 mb-5`}>
            Ready to get a <span className="text-[#D1A741]">Quote?</span>
          </h4>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-base font-medium leading-relaxed mb-10">
            Commodity prices move daily and our production-linked model means availability affects pricing. The fastest way to get an accurate quote is to submit an inquiry with:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {inquiryDetails.map((detail, idx) => (
              <span 
                key={idx} 
                className={`${montserrat.className} px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D1A741]/20 text-gray-800 text-xs font-bold shadow-sm`}
              >
                {detail}
              </span>
            ))}
          </div>

          <Link 
            href="/pricing" 
            className={`${montserrat.className} inline-flex items-center gap-2 text-white bg-[#D1A741] hover:bg-[#b89136] px-8 py-4 rounded-full transition-all duration-300 font-bold text-[13px] tracking-widest uppercase shadow-[0_10px_25px_rgba(209,167,65,0.4)] hover:shadow-[0_15px_35px_rgba(209,167,65,0.6)] hover:-translate-y-1`}
          >
            Request a Price Quote <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          
        </div>
      </section>
    </>
  );
}