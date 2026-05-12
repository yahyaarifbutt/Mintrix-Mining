"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { MapPin, Pickaxe, TrendingUp, Globe, GaugeCircle, Gem, Settings, Target } from "lucide-react";
import { fadeUp, staggerContainer } from "./animations";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function ActiveSites() {
  return (
    <section id="active-sites" className="w-full bg-gray-50 py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-3`}>
            Active Mining Sites
          </h3>
          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-[#0b0f0d] tracking-tight`}>
            Our Sites in Kenya
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6 items-start"
        >
          {/* Site 1 */}
          <motion.div variants={fadeUp} className="bg-white border border-gray-100 shadow-lg rounded-[1.5rem] overflow-hidden hover:shadow-2xl hover:border-[#D1A741]/20 transition-all duration-300 group flex flex-col h-full">
            <div className="p-6 pb-4 flex-grow">
              <div className="bg-[#D1A741]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-[#D1A741]/20 group-hover:bg-[#D1A741] transition-colors">
                <Pickaxe className="w-6 h-6 text-[#D1A741] group-hover:text-white transition-colors" />
              </div>
              <h3 className={`${montserrat.className} text-xl font-bold text-[#0b0f0d] mb-1.5`}>Rosterman Site 1</h3>
              <p className="text-[#D1A741] font-medium text-xs mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Rosterman, Kakamega County, KE
              </p>
              <h4 className="text-sm font-semibold text-[#0b0f0d] mb-2 uppercase tracking-wider">Operational Gold Mining</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our primary site delivers steady gold output using modern extraction equipment. Established processes and experienced site teams ensure consistent production volumes with minimal downtime.
              </p>
            </div>
            
            {/* Redesigned Info Grid */}
            <div className="bg-[#FAF8F3] border-t border-gray-100 p-5 grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
              <div className="flex items-center gap-2.5">
                <GaugeCircle className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Status</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Operational</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Gem className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Mineral</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Gold</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Method</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Hard Rock</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Output</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Consistent</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Site 2 */}
          <motion.div variants={fadeUp} className="bg-white border border-gray-100 shadow-lg rounded-[1.5rem] overflow-hidden hover:shadow-2xl hover:border-[#D1A741]/20 transition-all duration-300 group flex flex-col h-full">
            <div className="p-6 pb-4 flex-grow">
              <div className="bg-[#D1A741]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-[#D1A741]/20 group-hover:bg-[#D1A741] transition-colors">
                <TrendingUp className="w-6 h-6 text-[#D1A741] group-hover:text-white transition-colors" />
              </div>
              <h3 className={`${montserrat.className} text-xl font-bold text-[#0b0f0d] mb-1.5`}>Rosterman Site 2</h3>
              <p className="text-[#D1A741] font-medium text-xs mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Rosterman, Kakamega County, KE
              </p>
              <h4 className="text-sm font-semibold text-[#0b0f0d] mb-2 uppercase tracking-wider">Capacity Expansion</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Site 2 is scaling up. We are increasing extraction capacity and refining on-site processing infrastructure to meet demand from buyers who require larger, scheduled volumes.
              </p>
            </div>
            
            {/* Redesigned Info Grid */}
            <div className="bg-[#FAF8F3] border-t border-gray-100 p-5 grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
              <div className="flex items-center gap-2.5">
                <GaugeCircle className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Status</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Expanding</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Gem className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Mineral</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Gold</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Target className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Focus</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Growth</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Output</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Increasing</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Site 3 */}
          <motion.div variants={fadeUp} className="bg-white border border-gray-100 shadow-lg rounded-[1.5rem] overflow-hidden hover:shadow-2xl hover:border-[#D1A741]/20 transition-all duration-300 group flex flex-col h-full">
            <div className="p-6 pb-4 flex-grow">
              <div className="bg-[#D1A741]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-[#D1A741]/20 group-hover:bg-[#D1A741] transition-colors">
                <Globe className="w-6 h-6 text-[#D1A741] group-hover:text-white transition-colors" />
              </div>
              <h3 className={`${montserrat.className} text-xl font-bold text-[#0b0f0d] mb-1.5`}>Pocket Site 3</h3>
              <p className="text-[#D1A741] font-medium text-xs mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 min-w-[14px]" /> Rosterman / Ruiru
              </p>
              <h4 className="text-sm font-semibold text-[#0b0f0d] mb-2 uppercase tracking-wider">High-Value Development</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Pocket Site 3 targets gold and other high-value minerals with a scalable extraction model. This site is positioned for buyers seeking emerging supply sources with strong upside.
              </p>
            </div>
            
            {/* Redesigned Info Grid */}
            <div className="bg-[#FAF8F3] border-t border-gray-100 p-5 grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
              <div className="flex items-center gap-2.5">
                <GaugeCircle className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Status</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">New</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Gem className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Minerals</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Gold+</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Model</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Scalable</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-[#D1A741]" />
                <div>
                  <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wide block leading-none mb-1">Output</span>
                  <p className="text-sm font-bold text-[#0b0f0d] leading-none">Growing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}