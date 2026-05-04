"use client";
import React from "react";
import { Montserrat } from "next/font/google";
// Added CheckCircle2 just in case needed for later, but kept others
import { Users, Globe, BarChart3, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

// Definition for fadeUp animation to use on columns and elements
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ValueProposition() {
  const points = [
    { t: "Direct Access", d: "Capital goes to operating sites, not fund management layers" },
    { t: "Physical Backing", d: "Every position is anchored to real, verified, vaultable assets" },
    { t: "Vertical Integration", d: "Mintrix controls extraction through to sale; BricketX controls capital through to return" },
    { t: "Inflation Hedge", d: "Gold production and real land assets appreciate when paper assets don't" },
    { t: "Transparent Pricing", d: "Benchmarked against LBMA and LME; no hidden markups" },
    { t: "ESG-Aligned", d: "Responsible mining with environmental compliance and ethical labor practices" }
  ];

  const targets = [
    { icon: <Users size={20} />, title: "Private Investors", text: "Private investors and HNWIs seeking commodity diversification with physical backing." },
    { icon: <Globe size={20} />, title: "Institutional Capital", text: "Institutional capital looking for direct access to East African mineral production." },
    { icon: <BarChart3 size={20} />, title: "Supply Chain", text: "Import-export and trading firms who want to participate in the upstream supply chain." },
    { icon: <ShieldCheck size={20} />, title: "Inflation Hedgers", text: "Inflation-hedging investors looking for gold exposure tied to actual production output." },
    { icon: <TrendingUp size={20} />, title: "Long-Term Allocators", text: "Long-term capital allocators seeking 5-year growth trajectories in emerging commodity markets." }
  ];

  return (
    // Keep white background for contrast against the new black card
    <section className="py-20 lg:py-24 px-6 bg-white border-y border-gray-100 overflow-hidden text-[#010301]">
      <div className="max-w-7xl mx-auto relative">
        
        {/* NEW Left Side Gold Aura: Corresponds to the right, but is a subtle corner glow */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D1A741] opacity-[0.03] rounded-full blur-[70px]" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch relative z-10">
          
          {/* LEFT SIDE: WHY THIS MODEL WORKS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="lg:w-1/2 flex flex-col justify-center relative group"
          >
            <div className="mb-10 lg:pr-10">
              <span className="text-[#D1A741] font-bold text-[10px] tracking-widest uppercase mb-3 block">Why This Model Works</span>
              {/* FIXED VISIBILITY: Made paragraph text darker and heading partly gold to pop and feel premium */}
              <h3 className={`${montserrat.className} text-3xl md:text-4xl lg:text-[42px] font-black text-[#010301] leading-tight`}>
                <span>Production-Backed.</span><br/>
                <span className="bg-gradient-to-r from-[#D1A741] via-[#c39967] to-[#D1A741] bg-clip-text text-transparent">Not Paper-Backed.</span>
              </h3>
              <p className="mt-6 text-gray-800 text-[16px] font-medium leading-relaxed max-w-lg">
                The difference between investing through Mintrix + BricketX and buying a commodity ETF is the same as the difference between owning a rental property and buying a REIT — one is backed by a specific, operating asset you can verify. The other is a financial instrument.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {points.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="relative pl-6 group"
                >
                  <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gray-200 group-hover:bg-[#D1A741] transition-colors duration-300" />
                  {/* FIXED VISIBILITY: Left points titles are now prominent gold and bodies are darker gray */}
                  <h4 className="font-bold text-[#D1A741] text-[15px] mb-1.5 transition-colors duration-300">{item.t}</h4>
                  <p className="text-[13px] text-gray-800 leading-relaxed">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: TARGET AUDIENCE CARD (Now Black for premium feel) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            {/* 1. Transform Container: Deep rich black background with subtle border and premium hover lift */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0px 30px 60px rgba(0,0,0,0.3)", borderColor: "rgba(209, 167, 65, 0.4)" }}
              className="h-full bg-[#050505] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-[2rem] p-8 lg:p-10 relative overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Atmosphere: Enhanced gold atmospheric glow against black */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D1A741] opacity-[0.08] rounded-full blur-[80px] -mr-32 -mt-32" />
              
              <div className="relative z-10 flex-grow">
                <span className="text-[#D1A741] font-bold text-[10px] tracking-widest uppercase mb-2 block">Target Audience</span>
                {/* 2. Text Inversion: Heading flipped to light colors for visibility */}
                <h3 className={`${montserrat.className} text-2xl font-bold mb-4 text-white leading-tight`}>
                  Who This Is For
                </h3>
                {/* FIXED VISIBILITY: Dark paragraph text replaced with bright text on black */}
                <p className="text-gray-200 font-medium text-sm mb-8 leading-relaxed max-w-lg">This investment model is designed for investors who want real asset exposure, not speculative instruments. Specifically:</p>
                
                <div className="space-y-3">
                  {targets.map((item, i) => (
                    // Elevated Professional Styling: Contained boxes, subtle borders, premium hover with contained gold aura and list lift
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -3, borderColor: "rgba(209, 167, 65, 0.3)", backgroundColor: "rgba(209, 167, 65, 0.03)"}}
                      className="flex gap-4 group items-start p-4 bg-black border border-white/5 shadow-inner rounded-2xl hover:bg-[#D1A741]/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
                    >
                      {/* 3. Icons gain a metallic gold gradient on hover, starting dark */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#D1A741] group-hover:bg-gradient-to-br group-hover:from-[#D1A741] group-hover:to-[#c39967] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(209,167,65,0.3)] transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="pt-0.5">
                        {/* 4. List Text Inversion: Titles and Body flipped to light/premium gray for maximum visibility and high-end feel */}
                        <p className="text-white font-bold text-sm uppercase tracking-wide mb-1 transition-colors group-hover:text-[#D1A741]">{item.title}</p>
                        <p className="text-gray-300 text-[13px] leading-relaxed transition-colors group-hover:text-gray-100">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}