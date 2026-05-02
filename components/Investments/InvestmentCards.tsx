"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight, Gem, BarChart3, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"] });

export default function InvestmentCards() {
  return (
    <section className="py-20 px-6 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className={`${montserrat.className} text-4xl font-extrabold text-[#010301] tracking-tight`}>
            Choose Your Entry Point
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D1A741] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* MINING CARD (ENHANCED PREMIUM GOLD STYLE) */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border border-[#D1A741]/30 bg-[#FCFBF7] relative group 
                       hover:border-[#D1A741] hover:shadow-[0_20px_50px_rgba(209,167,65,0.2)] 
                       transition-all duration-500 overflow-hidden"
          >
            {/* SUBTLE DECORATIVE GRADIENT */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D1A741] opacity-[0.03] rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />

            {/* ICON BG */}
            <div className="absolute top-0 right-0 p-6 text-[#D1A741] opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              <Gem size={100} strokeWidth={1.5} />
            </div>

            <div className="relative z-10">
              {/* OPTION BADGE */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/20 mb-4">
                <h3 className={`${montserrat.className} text-[#A37E2C] text-[10px] font-bold uppercase tracking-[0.2em]`}>
                  Option 01
                </h3>
              </div>

              <h4 className={`${montserrat.className} text-2xl font-bold mb-6 text-[#010301]`}>
                Gold Mining Investment
              </h4>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white border border-[#D1A741]/10 rounded-xl shadow-sm group-hover:border-[#D1A741]/30 transition-colors">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Target IRR</p>
                  <p className="text-2xl font-black text-[#D1A741]">22.2%+</p>
                </div>
                <div className="p-4 bg-white border border-[#D1A741]/10 rounded-xl shadow-sm group-hover:border-[#D1A741]/30 transition-colors">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Duration</p>
                  <p className="text-2xl font-black text-[#010301]">5 Years</p>
                </div>
              </div>

              {/* TEXT & TRUST INDICATOR */}
              <div className="space-y-4 mb-8">
                <p className="text-base text-gray-600 font-medium leading-relaxed">
                  Secure long-term wealth through <span className="text-[#010301] font-bold">asset-backed</span>, production-driven returns.
                </p>

                <div className="flex items-center gap-3 text-xs font-bold text-[#635125] bg-[#D1A741]/5 border border-[#D1A741]/10 p-3.5 rounded-xl">
                  <ShieldCheck size={18} className="text-[#D1A741]" />
                  <span>Physical assets + Title Deeds + LLC Structure</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="https://bricketx.com"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#010301] text-white py-4 rounded-xl text-sm font-bold 
                           hover:bg-[#D1A741] hover:text-[#010301] shadow-lg shadow-black/10 hover:shadow-[#D1A741]/30 transition-all duration-300"
              >
                Explore Mining Opportunities <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* TRADING CARD (DARK LUXE CONTRAST) */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border border-white/5 bg-[#010301] text-white relative group
                       hover:border-[#D1A741]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                       transition-all duration-500 overflow-hidden"
          >
            {/* ICON BG */}
            <div className="absolute top-0 right-0 p-6 text-[#D1A741] opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
              <BarChart3 size={100} strokeWidth={1.5} />
            </div>

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                <h3 className={`${montserrat.className} text-[#D1A741] text-[10px] font-bold uppercase tracking-[0.2em]`}>
                  Option 02
                </h3>
              </div>

              <h4 className={`${montserrat.className} text-2xl font-bold mb-6`}>
                Gold Trading Investment
              </h4>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl group-hover:border-[#D1A741]/30 transition-colors">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Target ROI</p>
                  <p className="text-2xl font-black text-[#D1A741]">20–25%</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl group-hover:border-[#D1A741]/30 transition-colors">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Cycle</p>
                  <p className="text-2xl font-black text-white">1–2 Mo</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-base text-gray-400 font-medium leading-relaxed">
                  High-frequency, <span className="text-white font-bold">fully liquid</span> capital with institutional fast-cycle returns.
                </p>

                <div className="flex items-center gap-3 text-xs font-bold text-[#D1A741] border border-[#D1A741]/20 bg-[#D1A741]/5 p-3.5 rounded-xl">
                  <Globe size={18} />
                  <span>Regulated via DMCC Dubai & London LBMA</span>
                </div>
              </div>

              <Link
                href="https://bricketx.com"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#D1A741] text-[#010301] py-4 rounded-xl text-sm font-bold 
                           hover:bg-white transition-all duration-300 shadow-lg shadow-[#D1A741]/20"
              >
                Explore Trading Desk <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}