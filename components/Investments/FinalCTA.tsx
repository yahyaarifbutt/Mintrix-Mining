"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Phone, FileText, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Updated weights to support the hero button styles
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FinalCTA() {
  return (
    // Reduced padding from py-24 to py-12 to make the section smaller
    <section className="py-12 px-6 bg-white text-center">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp} 
        // Reduced max-width and spacing for a tighter, more compact look
        className="max-w-2xl mx-auto space-y-8"
      >
        <h2 className={`${montserrat.className} text-3xl md:text-4xl font-black text-[#010301] leading-tight`}>
          The Mines Are Running. <br />
          The Returns Are Real.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* PRIMARY BUTTON - Hero Styling Applied */}
          <Link 
            href="https://bricketx.com" 
            className={`${montserrat.className} bg-[#D1A741] text-black px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase hover:scale-105 hover:bg-[#F5E6AD] transition-all shadow-[0_10px_30px_rgba(209,167,65,0.3)] text-center w-full sm:w-auto`}
          >
            Start Your Questionnaire
          </Link>
          
          {/* SECONDARY BUTTON - Hero Styling Adapted for White Background */}
          <Link 
            href="tel:+971541662352" 
            className={`${montserrat.className} flex items-center justify-center gap-2 bg-transparent border border-gray-200 text-black px-8 py-4 rounded-full font-extrabold text-[12px] tracking-[0.15em] uppercase hover:scale-105 hover:border-black hover:bg-gray-50 transition-all text-center w-full sm:w-auto`}
          >
            <Phone size={16} className="text-[#D1A741]" /> +971 54 166 2352
          </Link>
        </div>

        {/* Reduced top padding and allowed wrapping on very small screens for text visibility */}
        <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-6 border-t border-gray-100">
          <Link href="#" className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-[#D1A741] uppercase tracking-widest transition-colors">
            <FileText size={15} /> Investment Profile
          </Link>
          <Link href="#" className="flex items-center gap-2 text-[11px] font-bold text-gray-500 hover:text-[#D1A741] uppercase tracking-widest transition-colors">
            <Globe size={15} /> BricketX Portal
          </Link>
        </div>
      </motion.div>
    </section>
  );
}