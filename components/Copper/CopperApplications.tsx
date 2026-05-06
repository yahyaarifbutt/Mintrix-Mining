"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import ClientAnimations from "./ClientAnimations";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"] 
});

export default function CopperApplications() {
  return (
    <section className="py-12 lg:py-16 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#D1A741] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch relative z-10">
        
        <ClientAnimations delay={0.1} className="h-full">
          <div className="group relative w-full h-full min-h-[450px] rounded-[40px] overflow-hidden transition-all duration-500">
            <Image 
              src="/Images/copper_applications.jpg" 
              alt="Mintrix Copper Applications"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </ClientAnimations>

        <div className="flex flex-col justify-center space-y-10 py-4">
          <ClientAnimations delay={0.2}>
            <h2 className={`${montserrat.className} text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight`}>
              Key <span className="text-[#D1A741]">Applications</span>
            </h2>
          </ClientAnimations>

          <ul className="space-y-6 sm:space-y-8">
            {[
              "Electrical wiring and conductors",
              "EV battery and motor components",
              "Construction and plumbing systems",
              "Electronic components and PCB manufacturing",
              "Heat exchangers and industrial equipment"
            ].map((item, idx) => (
              <ClientAnimations delay={0.3 + (idx * 0.1)} key={idx}>
                <li className="flex gap-5 group cursor-default items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D1A741]/10 flex items-center justify-center border border-[#D1A741]/30 group-hover:bg-[#D1A741]/20 group-hover:border-[#D1A741]/60 transition-all duration-300 shadow-[0_0_10px_rgba(209,167,65,0)] group-hover:shadow-[0_0_15px_rgba(209,167,65,0.2)]">
                    <div className="w-2 h-2 bg-[#D1A741] rounded-full group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className={`${montserrat.className} text-lg font-bold text-white group-hover:text-[#D1A741] transition-colors duration-300`}>
                      {item}
                    </h4>
                  </div>
                </li>
              </ClientAnimations>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}