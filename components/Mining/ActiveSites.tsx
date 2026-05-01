"use client";

import { Montserrat } from "next/font/google";
import { MapPin } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800", "900"] 
});

const sites = [
  { 
    name: "Rosterman Site 1 — Operational Gold Mining", 
    location: "Rosterman, Kakamega County, KE",
    desc: "Our primary site delivers steady gold output using modern extraction equipment. Established processes and experienced site teams ensure consistent production volumes with minimal downtime.",
    details: { status: "Operational", mineral: "Gold", method: "Mechanized hard rock mining", output: "Consistent — available for long-term buyer agreements" }
  },
  { 
    name: "Rosterman Site 2 — Capacity Expansion", 
    location: "Rosterman, Kakamega County, KE",
    desc: "Site 2 is scaling up. We are increasing extraction capacity and refining on-site processing infrastructure to meet demand from buyers who require larger, scheduled volumes.",
    details: { status: "Operational & Expanding", mineral: "Gold", focus: "Capacity growth and processing efficiency", output: "Increasing — suited to forward supply agreements" }
  },
  { 
    name: "Pocket Site 3 — High-Value Mineral Development", 
    location: "Rosterman, Kakamega County, KE | Ruiru pocket site, Kiambu county",
    desc: "Pocket Site 3 targets gold and other high-value minerals with a scalable extraction model. This site is positioned for buyers seeking emerging supply sources with strong upside potential.",
    details: { status: "Newly Operational", mineral: "Gold + High-value minerals", model: "Scalable output, phased development", output: "Growing — early engagement opportunities available" }
  },
];

export default function ActiveSites() {
  return (
    <section className="bg-[#fafafa] pt-12 pb-16 lg:pt-16 lg:pb-24 px-6 relative border-t border-gray-200 overflow-hidden">
      
      {/* Subtle Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdjM4SDFWMWgzOHoiIGZpbGw9InJnYmEoMCwwLDAsMC4wMikiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4 flex flex-col items-center group/header cursor-default">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-8 h-[1px] bg-[#D1A741] transition-all duration-700 group-hover/header:w-16" />
            <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-xs`}>
              Active Mining Sites
            </h3>
            <div className="w-8 h-[1px] bg-[#D1A741] transition-all duration-700 group-hover/header:w-16" />
          </div>
          
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]`}>
            Our Sites in <br className="md:hidden" />
            <span className="relative inline-block mt-1 md:mt-0 md:ml-2">
              {/* Adjusted gradient for slightly better contrast on white */}
              <span className="relative z-10 bg-gradient-to-r from-[#D1A741] via-[#c49023] to-[#B38D30] bg-clip-text text-transparent drop-shadow-sm">
                Kenya
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#D1A741]/10 -z-10 blur-sm" />
            </span>
          </h2>
        </div>

        {/* Premium Structural Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {sites.map((site, i) => {
            const [mainName, subName] = site.name.split(' — ');

            return (
              <div 
                key={i} 
                className="relative group bg-white border border-gray-200 hover:border-[#D1A741]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col h-full overflow-hidden"
              >
                {/* Animated Top Golden Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D1A741] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center z-20" />

                {/* Massive, subtle background watermark moved to bottom right to avoid text collision */}
                <div className="absolute -bottom-8 -right-4 pointer-events-none z-0 select-none transition-transform duration-700 group-hover:scale-105">
                  <span className={`${montserrat.className} text-[12rem] font-black text-gray-50/80 group-hover:text-[#D1A741]/[0.03] transition-colors duration-500 leading-none`}>
                    0{i + 1}
                  </span>
                </div>

                <div className="p-8 lg:p-10 flex flex-col h-full relative z-10">
                  
                  {/* Titles */}
                  <div className="mb-8">
                    <h4 className={`${montserrat.className} text-2xl font-black text-gray-900 leading-tight group-hover:text-[#D1A741] transition-colors pr-2`}>
                      {mainName}
                    </h4>
                    {subName && (
                      <span className="text-xs font-bold text-gray-400 tracking-[0.15em] uppercase mt-2 block">
                        {subName}
                      </span>
                    )}
                  </div>

                  {/* Location Pin */}
                  <div className="flex items-start gap-3 text-sm font-medium text-gray-500 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D1A741]/10 group-hover:border-[#D1A741]/20 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#D1A741]" />
                    </div>
                    <span className="mt-1.5 leading-snug">{site.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow">
                    {site.desc}
                  </p>

                  {/* Technical Details */}
                  <div className="space-y-4">
                    {Object.entries(site.details).map(([key, value], idx) => (
                      <div key={idx} className="flex flex-col gap-1 relative pl-4 border-l-2 border-gray-100 group-hover:border-[#D1A741]/30 transition-colors">
                        <span className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400`}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}