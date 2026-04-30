"use client";

import { Montserrat } from "next/font/google";
import { ArrowUpRight, Globe } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "900"] 
});

const locations = [
  { region: "Kakamega, Kenya", status: "Active Extraction", yield: "1.2M oz/yr" },
  { region: "Ontario, Canada", status: "Refining Hub", yield: "LBMA Certified" },
];

export default function MiningGlobal() {
  return (
    <section className="bg-white py-12 lg:py-16 px-6 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Editorial Typography */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-5 h-5 text-[#D1A741]" />
                <span className={`${montserrat.className} text-gray-400 font-bold tracking-[0.2em] uppercase text-xs`}>
                  Global Footprint
                </span>
              </div>
              
              <h2 className={`${montserrat.className} text-4xl md:text-6xl font-black text-black leading-[1.05] tracking-tight mb-6`}>
                Strategic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1A741] to-[#99772d]">
                  Jurisdictions
                </span>
              </h2>
              
              <p className="text-gray-500 font-medium leading-relaxed max-w-md">
                Operating in Tier-1 mining jurisdictions globally. We prioritize geopolitical stability, ethical labor practices, and scalable infrastructure to ensure an uninterrupted supply chain.
              </p>
            </div>

            {/* High-End Decorative Metric */}
            <div className="mt-12 pt-12 border-t border-gray-200 hidden lg:block">
              <p className={`${montserrat.className} text-8xl font-black text-gray-50 tracking-tighter`}>
                TIER 1
              </p>
            </div>
          </div>

          {/* Right: Interactive Editorial List */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="w-full border-t border-black">
              {locations.map((loc, i) => (
                <div 
                  key={i} 
                  className="group flex items-center justify-between py-8 border-b border-gray-200 hover:border-[#D1A741] transition-colors duration-500 cursor-pointer"
                >
                  <div className="space-y-1">
                    <h4 className={`${montserrat.className} text-xl md:text-2xl font-bold text-black group-hover:text-[#D1A741] transition-colors duration-500`}>
                      {loc.region}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
                      {loc.status}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className={`${montserrat.className} hidden sm:block text-sm font-bold text-black`}>
                      {loc.yield}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#D1A741] group-hover:border-[#D1A741] transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
                    </div>
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