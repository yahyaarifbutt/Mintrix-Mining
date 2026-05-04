"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function OperationsOverview() {
  return (
    <section className="py-12 lg:py-16 px-6 md:px-12 bg-white text-[#010301] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid md:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          <motion.div variants={fadeUp} className="md:col-span-5 space-y-5 lg:space-y-6">
            <div className="space-y-3">
              <span className={`${montserrat.className} inline-block font-extrabold text-[10px] uppercase tracking-widest text-[#D1A741] px-4 py-1.5 rounded-full bg-[#D1A741]/10 border border-[#D1A741]/20`}>
                Why Mintrix Offers an Opportunity
              </span>
              
              {/* REMOVED <br /> tags and adjusted font sizing for a natural, horizontal flow */}
              <h2 className={`${montserrat.className} text-3xl lg:text-4xl xl:text-[42px] font-extrabold leading-tight text-[#010301]`}>
                Active Operations Verified Production{" "}
                <span className="text-[#D1A741]">Real Investor Returns</span>
              </h2>
            </div>
            
            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed text-[17px] font-medium">
              Most investors looking at commodities end up buying ETFs or futures — paper instruments tied to commodity prices but disconnected from actual production. Mintrix is different.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed text-[17px] font-medium">
              We run active gold mining operations at three sites in Kenya&apos;s <Link href="/mining-operations" className="text-[#D1A741] font-bold hover:underline">Rosterman region</Link>. We process ore on-site. We sell refined gold and commodities to international buyers. And through our partnership with BricketX — a global investment holding company — we&apos;ve structured a way for investors to participate directly in that production.
            </motion.p>
            
            <motion.div variants={fadeUp} className="p-4 border-l-4 border-[#D1A741] bg-[#FAFAFA] rounded-r-xl mt-2">
              <p className="text-[#010301] text-base font-bold italic">
                "This is not a fund that tracks the gold price. This is capital deployed into the mine itself."
              </p>
            </motion.div>

          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-7 relative flex justify-center items-center group mt-6 md:mt-0">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative p-2 rounded-3xl bg-white shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden w-full"
            >
              <img
                src="/Images/investment2.jpg" 
                alt="Active Gold Mining Operations"
                className="rounded-2xl w-full h-auto object-cover aspect-[4/3] relative z-10"
              />
              <div className="absolute inset-0 rounded-3xl border-2 border-[#D1A741]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </motion.div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#D1A741] rounded-full opacity-[0.05] blur-xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-300 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#D1A741] rounded-full opacity-[0.05] blur-xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-300 -z-10"></div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}