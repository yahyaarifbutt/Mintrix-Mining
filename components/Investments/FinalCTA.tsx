"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Phone, FileText, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-[url('/Images/investment1.jpg')] bg-cover bg-center bg-fixed relative text-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp} 
        className="max-w-3xl mx-auto space-y-8 relative z-10"
      >
        <h2 className={`${montserrat.className} text-4xl md:text-5xl font-black text-white leading-tight`}>
          The Mines Are Running. <br />
          The Returns Are Real. <br/>
          <span className="text-[#D1A741]">The Entry Point Is Now.</span>
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Mintrix produces the commodities. BricketX structures the returns. Your capital bridges the two — with full documentation, physical asset backing, and transparent reporting at every stage.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link 
            href="https://bricketx.com" 
            target="_blank"
            className={`${montserrat.className} flex items-center justify-center gap-2 bg-[#D1A741] text-black px-8 py-4 rounded-full font-black text-[12px] tracking-[0.15em] uppercase hover:scale-105 hover:bg-white transition-all shadow-[0_10px_30px_rgba(209,167,65,0.3)] w-full sm:w-auto`}
          >
            Explore Opportunities <ArrowRight size={16}/>
          </Link>
          
          <Link 
            href="https://bricketx.com/investor-questionnaire" 
            target="_blank"
            className={`${montserrat.className} flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-[12px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all backdrop-blur-md w-full sm:w-auto`}
          >
            Start Questionnaire
          </Link>
        </div>

        <div className="pt-8 mt-8 flex flex-col sm:flex-row justify-center items-center gap-8 border-t border-white/10">
          <Link href="#" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#D1A741] uppercase tracking-widest transition-colors">
            <FileText size={15} /> Download Profile
          </Link>
          <Link href="tel:+971541662352" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#D1A741] uppercase tracking-widest transition-colors">
            <Phone size={15} /> +971 54 166 2352
          </Link>
        </div>
      </motion.div>
    </section>
  );
}