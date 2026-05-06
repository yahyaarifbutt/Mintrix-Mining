"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import ClientAnimations from "@/components/Gold/ClientAnimations";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"] 
});

export default function RubyDocumentation() {
  return (
    <section className="py-12 lg:py-16 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#D1A741] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch relative z-10">
        
        <ClientAnimations delay={0.1} className="h-full">
          <div className="group relative w-full h-full min-h-[450px] rounded-[40px] overflow-hidden transition-all duration-500">
            <Image 
              src="/Images/ruby_documentation.jpg" 
              alt="Mintrix Ruby Origin and Documentation"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </ClientAnimations>

        <div className="flex flex-col justify-center space-y-10 py-4">
          <ClientAnimations delay={0.2}>
            <h2 className={`${montserrat.className} text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight`}>
              Origin & <span className="text-[#D1A741]">Documentation</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
              Provenance is everything in the gemstone trade. We provide:
            </p>
          </ClientAnimations>

          <ul className="space-y-6 sm:space-y-8">
            {[
              { title: "Certificate of origin", desc: "From verified East African mining source." },
              { title: "Export documentation", desc: "Compliant with CITES and applicable regulations." },
              { title: "GIA-compatible reports", desc: "Grading reports available on request for high-value lots." },
              { title: "Conflict-free declaration", desc: "Clear, conflict-free sourcing declaration." }
            ].map((item, idx) => (
              <ClientAnimations delay={0.3 + (idx * 0.1)} key={idx}>
                <li className="flex gap-5 group cursor-default">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#D1A741]/10 flex items-center justify-center border border-[#D1A741]/30 group-hover:bg-[#D1A741]/20 group-hover:border-[#D1A741]/60 transition-all duration-300 shadow-[0_0_10px_rgba(209,167,65,0)] group-hover:shadow-[0_0_15px_rgba(209,167,65,0.2)]">
                    <div className="w-2 h-2 bg-[#D1A741] rounded-full group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className={`${montserrat.className} text-lg font-bold text-white mb-1.5 group-hover:text-[#D1A741] transition-colors duration-300`}>
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {item.desc}
                    </p>
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