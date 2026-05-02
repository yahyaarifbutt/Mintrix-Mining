"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function CommodityPortfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const commodities = [
    {
      title: "Gold",
      desc: "Our primary production mineral. We supply gold in raw, doré, and refined form — suited to refiners, traders, central bank-adjacent procurement channels, and jewelry manufacturers.",
      forms: "Raw ore, doré bar, refined gold",
      grade: "Available on request per lot — assay reports provided",
      buyers: "Refiners, traders, jewelers, export houses",
      linkText: "View Gold Trading Page",
      linkHref: "/trading/gold"
    },
    {
      title: "Copper",
      desc: "Copper supply from East African sources, available in concentrate and cathode form for industrial and manufacturing buyers. Demand from EV and infrastructure sectors makes copper a long-term volume opportunity.",
      forms: "Copper concentrate, cathode",
      markets: "Electronics, construction, EV battery supply chains",
      buyers: "Manufacturers, industrial processors, metals traders",
      linkText: "View Copper Trading Page",
      linkHref: "/trading/copper"
    },
    {
      title: "Lithium",
      desc: "Battery-grade and technical-grade lithium supply for a market where demand consistently outpaces availability. Mintrix sources lithium aligned with the specifications required by EV battery manufacturers and energy storage producers.",
      forms: "Spodumene concentrate, lithium carbonate equivalent (where available)",
      markets: "EV battery supply chains, energy storage, tech manufacturing",
      buyers: "Battery manufacturers, chemical processors, tech OEMs",
      linkText: "View Lithium Trading Page",
      linkHref: "/trading/lithium"
    },
    {
      title: "Ruby — Gemstones",
      desc: "Natural rubies from East African deposits — a region recognized globally for producing high-color, high-clarity stones. We supply rough and semi-processed rubies to the luxury and gemstone trade.",
      forms: "Rough, calibrated, semi-processed",
      origin: "East Africa — traceable provenance documentation available",
      buyers: "Gem dealers, luxury jewelers, auction houses, collectors",
      linkText: "View Ruby Trading Page",
      linkHref: "/trading/ruby"
    },
    {
      title: "Industrial Minerals",
      desc: "A growing portfolio of minerals used across construction, chemicals, agriculture, and manufacturing — including silica, feldspar, kaolin, and others sourced from our operational regions.",
      apps: "Construction, ceramics, agriculture, chemical production",
      supply: "Bulk and containerized — volume-flexible",
      buyers: "Industrial manufacturers, distributors, chemical companies",
      linkText: "View Industrial Minerals Page",
      linkHref: "/trading/industrial"
    }
  ];

  const accordionVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="portfolio" className="py-12 lg:py-16 px-4 bg-gradient-to-b from-[#FDFBF7] to-white relative">
      <div className="max-w-4xl mx-auto"> 
        
        {/* --- Header Section --- */}
        <div className="mb-10 space-y-3 text-center md:text-left">
          <h3 className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.4em] uppercase text-[10px]`}>
            Commodity Portfolio
          </h3>
          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight`}>
            What We <span className="text-[#D1A741]">Trade</span>
          </h2>
          <p className="text-gray-700 max-w-2xl text-base leading-relaxed border-l-2 border-[#D1A741] pl-4 mt-3 font-medium mx-auto md:mx-0">
            Mintrix supplies five primary commodity categories. Each is sourced directly from our mining operations or through vetted supply partners where our own production is being scaled.
          </p>
        </div>

        {/* --- Accordion Section --- */}
        <div className="space-y-3">
          {commodities.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`group flex flex-col rounded-xl transition-all duration-500 border ${
                  isOpen 
                    // Changed the open background from pure white to a warm, very subtle golden-white gradient
                    ? "bg-gradient-to-br from-[#FFFDF8] to-[#D1A741]/[0.08] border-[#D1A741] shadow-[0_12px_35px_-15px_rgba(209,167,65,0.3)] ring-1 ring-[#D1A741]/30" 
                    : "bg-white border-[#D1A741]/20 hover:border-[#D1A741]/60 hover:shadow-[0_8px_20px_-10px_rgba(209,167,65,0.15)]"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-6 w-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#D1A741]' : 'bg-transparent group-hover:bg-[#D1A741]/40'}`} />
                    <h4 className={`${montserrat.className} text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-[#D1A741]" : "text-gray-800"}`}>
                      {item.title}
                    </h4>
                  </div>
                  <div className={`p-1.5 rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-[#D1A741] text-white shadow-md shadow-[#D1A741]/30" : "bg-[#FDFBF7] border border-[#D1A741]/30 text-[#D1A741] group-hover:bg-[#D1A741]/10"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content (Animated) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 flex flex-col lg:flex-row gap-6 mt-2">
                        
                        {/* Left Column: Description & Link */}
                        <div className="lg:w-1/3 flex flex-col justify-between pl-5">
                          <p className="text-gray-700 text-sm leading-relaxed font-medium mb-5">
                            {item.desc}
                          </p>
                          <Link 
                            href={item.linkHref} 
                            className={`${montserrat.className} inline-flex items-center gap-2 text-white bg-[#D1A741] hover:bg-[#b89136] px-4 py-2 rounded-lg font-bold text-[10px] tracking-[0.15em] uppercase transition-all shadow-md shadow-[#D1A741]/30 hover:shadow-lg hover:shadow-[#D1A741]/50 group w-fit`}
                          >
                            {item.linkText} 
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Right Column: Grid Data - Replaced white background with a premium gold glass effect */}
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 bg-gradient-to-br from-[#D1A741]/[0.08] to-[#D1A741]/[0.02] backdrop-blur-md p-5 rounded-xl border border-[#D1A741]/30 shadow-[inset_0_4px_20px_rgba(209,167,65,0.08)] relative overflow-hidden">
                          
                          {/* Enhanced decorative gold glows to make it look rich */}
                          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D1A741]/20 rounded-full blur-3xl pointer-events-none" />
                          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#D1A741]/15 rounded-full blur-2xl pointer-events-none" />
                          
                          {item.forms && (
                            <div className="relative z-10">
                              <h5 className={`${montserrat.className} text-[9px] text-[#D1A741] font-bold uppercase tracking-wider mb-1`}>Forms</h5>
                              <p className="text-gray-900 text-sm font-semibold">{item.forms}</p>
                            </div>
                          )}
                          {item.grade && (
                            <div className="relative z-10">
                              <h5 className={`${montserrat.className} text-[9px] text-[#D1A741] font-bold uppercase tracking-wider mb-1`}>Grade</h5>
                              <p className="text-gray-900 text-sm font-semibold">{item.grade}</p>
                            </div>
                          )}
                          {item.markets && (
                            <div className="relative z-10">
                              <h5 className={`${montserrat.className} text-[9px] text-[#D1A741] font-bold uppercase tracking-wider mb-1`}>Key Markets</h5>
                              <p className="text-gray-900 text-sm font-semibold">{item.markets}</p>
                            </div>
                          )}
                          {item.origin && (
                            <div className="relative z-10">
                              <h5 className={`${montserrat.className} text-[9px] text-[#D1A741] font-bold uppercase tracking-wider mb-1`}>Origin</h5>
                              <p className="text-gray-900 text-sm font-semibold">{item.origin}</p>
                            </div>
                          )}
                          {item.apps && (
                            <div className="relative z-10">
                              <h5 className={`${montserrat.className} text-[9px] text-[#D1A741] font-bold uppercase tracking-wider mb-1`}>Applications</h5>
                              <p className="text-gray-900 text-sm font-semibold">{item.apps}</p>
                            </div>
                          )}
                          {item.supply && (
                            <div className="relative z-10">
                              <h5 className={`${montserrat.className} text-[9px] text-[#D1A741] font-bold uppercase tracking-wider mb-1`}>Supply</h5>
                              <p className="text-gray-900 text-sm font-semibold">{item.supply}</p>
                            </div>
                          )}
                          {item.buyers && (
                            <div className="sm:col-span-2 border-t border-[#D1A741]/30 pt-3 mt-1 relative z-10">
                              <h5 className={`${montserrat.className} text-[9px] text-[#D1A741] font-bold uppercase tracking-wider mb-1`}>Typical Buyers</h5>
                              <p className="text-gray-900 text-sm font-semibold">{item.buyers}</p>
                            </div>
                          )}
                        </div>
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}