"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { fadeUp } from "./animations";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function OperationsOverview() {
  return (
    // Changed py-24 to py-16 and lg:py-40 to lg:py-24 below 👇
    <section className="w-full bg-[#0b0f0d] py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle Background Texture & Glow */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D1A741]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Grid Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Right Side: Massive Image Anchor (Spans 8 cols, pushed to the right) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-8 lg:col-start-5 relative aspect-[4/3] lg:aspect-[16/10] w-full rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl overflow-hidden bg-[#141a17] border border-white/5 shadow-2xl group"
          >
            {/* Image Placeholder Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0f0d] via-[#141a17] to-[#1a231e] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
              <span className="text-gray-600 font-medium tracking-widest uppercase text-sm">Cinematic Operations Image</span>
            </div>

            {/* Floating Glass Metric Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-[#0b0f0d]/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-4 z-30"
            >
              <div className="w-12 h-12 rounded-full bg-[#D1A741]/20 border border-[#D1A741]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#D1A741]" />
              </div>
              <div>
                <p className={`${montserrat.className} text-xl font-bold text-white leading-none`}>100%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">In-House Oversight</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Side: Overlapping Content Card */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp}
            className="lg:col-span-6 lg:col-start-1 lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-20 mt-[-4rem] lg:mt-0 relative mx-4 lg:mx-0"
          >
            <div className="bg-[#0b0f0d]/85 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden">
              
              {/* Decorative Accent Line inside the card */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D1A741] to-transparent opacity-80" />

              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-[#D1A741]" />
                <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm`}>
                  Operations Overview
                </h3>
              </div>

              <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-8`}>
                Mining Built on <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  In-House Control
                </span>
              </h2>
              
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                {/* Highlighted Lead Paragraph */}
                <p className="text-gray-200 font-medium">
                  Most commodity suppliers depend on third-party mines. <span className="text-[#D1A741]">Mintrix doesn&apos;t.</span> We own and operate our extraction sites — which means tighter quality oversight, more reliable output, and direct traceability from ground to shipment.
                </p>
                
                {/* Secondary Paragraph */}
                <p className="text-gray-400">
                  Our operations currently span three active sites in the Rosterman area of Kenya, with ongoing expansion aligned to growing demand for gold and strategic minerals. Every step is engineered for precision and scale.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}