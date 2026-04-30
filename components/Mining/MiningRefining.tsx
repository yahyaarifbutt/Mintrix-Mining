"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Droplets, Activity, ShieldCheck } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const processes = [
  {
    num: "01",
    icon: Activity,
    title: "Pyrometallurgical",
    desc: "High-temp smelting concentrates precious metals into doré bullion."
  },
  {
    num: "02",
    icon: Droplets,
    title: "Electrowinning",
    desc: "Electrochemical recovery extracts gold ions with pinpoint precision."
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Final Casting",
    desc: "Rigorous mass spectrometry verifies 99.99% purity before casting."
  }
];

export default function MiningRefining() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D1A741]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D1A741]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">

          {/* LEFT SIDE: Typography & Highlighted Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.3em] uppercase text-xs flex items-center gap-3`}>
                <span className="w-8 h-[2px] bg-[#D1A741]" />
                Refining Flow
              </h3>

              <h2 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]`}>
                From Raw Ore <br />
                To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1A741] via-[#F4D068] to-[#B38D30]">Pure Gold</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed">
              A controlled, multi-stage refining system engineered for maximum recovery, 
              precision, and certified purity standards.
            </p>

            {/* Premium Stats Box */}
            <div className="inline-flex flex-wrap items-center gap-8 p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div>
                <p className={`${montserrat.className} text-transparent bg-clip-text bg-gradient-to-r from-[#D1A741] to-[#F4D068] text-3xl font-black mb-1`}>
                  24 Hrs
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-semibold">Turnaround Time</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10 hidden sm:block" />
              <div>
                <p className={`${montserrat.className} text-white text-3xl font-black mb-1`}>
                  1064°C
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-semibold">Smelting Point</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Vertical Timeline Process */}
          <div className="relative pl-4 md:pl-10">
            
            {/* The Connecting Vertical Line */}
            <div className="absolute left-[39px] md:left-[71px] top-8 bottom-12 w-[2px] bg-gradient-to-b from-[#D1A741]/50 via-white/10 to-transparent z-0" />

            <div className="space-y-6 lg:space-y-8 relative z-10">
              {processes.map((process, i) => (
                <div key={i} className="flex items-stretch gap-6 group">
                  
                  {/* Icon Node */}
                  <div className="relative mt-2 w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#D1A741] transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(209,167,65,0.2)]">
                    <process.icon className="w-6 h-6 text-gray-500 group-hover:text-[#D1A741] transition-colors duration-500" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group-hover:-translate-y-1">
                    
                    {/* Watermark Number */}
                    <span className={`${montserrat.className} absolute -bottom-4 -right-2 text-7xl md:text-8xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none`}>
                      {process.num}
                    </span>

                    <h4 className={`${montserrat.className} text-white font-bold text-lg mb-2 group-hover:text-[#D1A741] transition-colors duration-300 relative z-10`}>
                      {process.title}
                    </h4>
                    
                    <p className="text-sm text-gray-400 leading-relaxed max-w-[90%] relative z-10">
                      {process.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}