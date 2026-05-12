"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { fadeUp } from "./animations";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export default function CallToAction() {
  return (
    <section className="w-full bg-[#0b0f0d] py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#141a17] to-[#0b0f0d] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D1A741]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <ShieldCheck className="w-12 h-12 text-[#D1A741] mx-auto mb-6" />
          <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4`}>
            Call to Action
          </h3>
          <h2 className={`${montserrat.className} text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6`}>
            Looking for a Consistent Mineral Supply?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you need scheduled gold supply, custom mineral sourcing, or a long-term partner with direct mine access — Mintrix is built for serious buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <NextLink href="/contact" className="w-full sm:w-auto text-sm font-bold text-[#0b0f0d] bg-[#D1A741] px-8 py-4 rounded-lg hover:bg-[#e8c678] transition-colors">
              Request Supply Information
            </NextLink>
            <NextLink href="/contact" className="w-full sm:w-auto text-sm font-bold text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/5 transition-colors">
              Contact Our Operations Team
            </NextLink>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}