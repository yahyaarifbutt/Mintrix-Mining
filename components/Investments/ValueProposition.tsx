"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { Users, Globe, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });

export default function ValueProposition() {
  const points = [
    { t: "Direct Access", d: "Capital goes to operating sites, not management layers" },
    { t: "Physical Backing", d: "Every position is anchored to verified, vaultable assets" },
    { t: "Vertical Integration", d: "Mintrix controls extraction; BricketX controls capital" },
    { t: "Inflation Hedge", d: "Gold & land appreciate when paper assets don't" },
    { t: "Transparent Pricing", d: "Benchmarked against LBMA; no hidden markups" },
    { t: "ESG-Aligned", d: "Responsible mining and ethical labor practices" }
  ];

  const targets = [
    { icon: <Users size={18} />, title: "Private Wealth", text: "Investors & HNWIs seeking physical gold backing." },
    { icon: <Globe size={18} />, title: "Institutional", text: "Funds looking for direct East African exposure." },
    { icon: <BarChart3 size={18} />, title: "Supply Chain", text: "Firms participating in upstream gold production." },
    { icon: <TrendingUp size={18} />, title: "Strategic Hedgers", text: "Investors seeking production-based output." }
  ];

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* LEFT SIDE: VALUE PROPOSITION (LIST STYLE) */}
          <div className="lg:w-3/5">
            <div className="mb-10">
              <h3 className={`${montserrat.className} text-3xl font-extrabold text-[#010301] flex items-center gap-4`}>
                <span className="w-12 h-[3px] bg-[#D1A741] inline-block" />
                Why This Model Works
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {points.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="relative pl-6 group"
                >
                  {/* Decorative Side Line */}
                  <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gray-100 group-hover:bg-[#D1A741] transition-colors" />
                  
                  <h4 className="font-bold text-[#010301] text-lg mb-1.5 flex items-center gap-2">
                    {item.t}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {item.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: TARGET AUDIENCE (DARK CARD) */}
          <div className="lg:w-2/5">
            <div className="h-full bg-[#010301] rounded-[2rem] p-8 lg:p-10 relative overflow-hidden flex flex-col">
              {/* Subtle Texture/Background Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D1A741] opacity-5 rounded-full blur-[80px] -mr-32 -mt-32" />
              
              <div className="relative z-10">
                <h3 className={`${montserrat.className} text-2xl font-bold mb-8 text-[#D1A741]`}>
                  Who This Is For
                </h3>
                
                <div className="space-y-7">
                  {targets.map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D1A741] group-hover:bg-[#D1A741] group-hover:text-[#010301] transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.title}</p>
                        <p className="text-gray-400 text-sm leading-snug">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Trust Tag */}
                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-3">
                  <CheckCircle2 className="text-[#D1A741]" size={18} />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Institutional Grade Standards
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}