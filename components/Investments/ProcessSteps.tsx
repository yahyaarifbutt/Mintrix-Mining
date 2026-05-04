"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Phone } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

export default function ProcessSteps() {
  const steps = [
    { t: "Choose Track", d: "Gold Mining (long-term, 22%+ IRR) or Gold Trading (short-cycle, 20-25% ROI)" },
    { t: "Questionnaire", d: "Complete the Investor form on BricketX (5 mins) to align capital size and timeline" },
    { t: "Review Docs", d: "Sign contracts, compliance, and review asset-backing documentation upfront" },
    { t: "Deploy & Track", d: "Real-time digital reporting on your investment performance via BricketX" }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#D1A741] font-bold text-[10px] tracking-widest uppercase mb-2 block">How To Start Investing</span>
          <h3 className={`${montserrat.className} text-3xl lg:text-4xl font-black text-white`}>
            Four Steps From Inquiry to Returns
          </h3>
          <div className="w-16 h-[3px] bg-[#D1A741] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative group px-2">
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] border-t border-dashed border-white/20 -z-10" />
              )}
              
              <div className="w-16 h-16 bg-white/5 border border-white/10 text-[#D1A741] rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 
                              group-hover:bg-[#D1A741] group-hover:text-black group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(209,167,65,0.4)] 
                              transition-all duration-300">
                0{i + 1}
              </div>
              
              <h5 className="font-bold text-white text-lg mb-3">{step.t}</h5>
              <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-[240px] mx-auto">
                {step.d}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link href="https://bricketx.com/investor-questionnaire" target="_blank" className="bg-[#D1A741] text-black px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
            Start Questionnaire on BricketX
          </Link>
          <Link href="tel:+971541662352" className="flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
            <Phone size={14} className="text-[#D1A741]"/> Speak to Advisor
          </Link>
        </div>
        
      </div>
    </section>
  );
}