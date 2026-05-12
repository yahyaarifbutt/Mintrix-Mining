"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowRight, Activity } from "lucide-react";
import { fadeUp } from "./animations";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white pt-20 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-12 border-b border-gray-100">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-[#D1A741]/5 to-transparent rounded-bl-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-5 relative z-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1A741] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1A741]"></span>
            </span>
            <span className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs`}>
              Mintrix Operations
            </span>
          </div>

          <h1 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b0f0d] leading-[1.1] tracking-tight mb-6`}>
            Where Minerals Are Found, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1A741] to-[#e8c678]">Extracted</span>, and Prepared
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Mintrix manages mining operations across multiple active sites in Kenya. From geological survey to extraction and on-site processing, every stage is controlled in-house — ensuring quality, output consistency, and responsible practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            {/* MATCHED PRIMARY BUTTON */}
            <NextLink 
              href="#active-sites" 
              className={`${montserrat.className} flex items-center justify-center gap-2 bg-[#D1A741] text-black px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase hover:scale-105 hover:bg-[#F5E6AD] transition-all shadow-[0_10px_30px_rgba(209,167,65,0.3)]`}
            >
              View Active Sites <ArrowRight className="w-4 h-4" />
            </NextLink>

            {/* MATCHED SECONDARY BUTTON (Adapted for Light Background) */}
            <NextLink 
              href="/contact" 
              className={`${montserrat.className} flex items-center justify-center px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase bg-transparent border border-[#0b0f0d]/30 text-[#0b0f0d] hover:bg-[#0b0f0d] hover:text-white transition-all`}
            >
              Talk to Operations
            </NextLink>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 relative w-full h-[450px] sm:h-[550px] lg:h-[650px] hidden sm:block"
        >
          <div className="absolute top-0 right-0 w-[75%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
            <div className="absolute inset-0 bg-[#0b0f0d] flex items-center justify-center">
              <span className="text-gray-500 font-medium">Main Site Image (Tall)</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-[55%] aspect-square rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-8 border-white bg-gray-100"
          >
            <div className="absolute inset-0 bg-[#1a231e] flex items-center justify-center">
              <span className="text-gray-400 font-medium text-sm text-center px-4">Secondary Focus<br/>(e.g., Machinery/Ore)</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-12 left-4 lg:left-12 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Kenya Sites</p>
              <p className={`${montserrat.className} text-base font-extrabold text-[#0b0f0d]`}>Active Operations</p>
            </div>
          </motion.div>
          
          <div className="absolute bottom-24 right-12 w-24 h-24 bg-[#D1A741]/20 blur-2xl rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}