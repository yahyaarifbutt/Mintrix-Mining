import { Montserrat } from "next/font/google";
import { Radar, Pickaxe, Truck, Factory } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

const capabilities = [
  {
    icon: Radar,
    title: "Exploration & Mapping",
    desc: "AI-assisted geological surveys and core sampling to ensure high-probability extraction zones with minimum footprint."
  },
  {
    icon: Pickaxe,
    title: "Drilling & Blasting",
    desc: "Controlled, high-precision fragmentation techniques utilizing top-tier heavy machinery for safe and efficient rock breakage."
  },
  {
    icon: Truck,
    title: "Load & Haul",
    desc: "An automated fleet of armored dump trucks and excavators moving massive tonnage seamlessly from pit to processor."
  },
  {
    icon: Factory,
    title: "Crushing & Milling",
    desc: "Industrial-scale grinding circuits reducing ore to micrometers, preparing it for maximum yield chemical separation."
  }
];

export default function MiningCapabilities() {
  return (
    <section className="bg-[#0b0f0d] py-24 px-6 relative border-t border-[#D1A741]/20">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 space-y-4 flex flex-col items-center">
          <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm`}>
            Extraction Phases
          </h3>
          <h2 className={`${montserrat.className} text-3xl md:text-5xl font-extrabold text-white tracking-tight`}>
            End-to-End <span className="text-[#D1A741]">Infrastructure</span>
          </h2>
          <div className="w-16 h-1 bg-[#D1A741] rounded-full mt-4" />
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-2xl bg-[#111613] border border-white/5 hover:border-[#D1A741]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D1A741]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center border border-white/10 group-hover:border-[#D1A741]/50 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <item.icon className="w-6 h-6 text-[#D1A741]" />
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10 space-y-3">
                <h4 className={`${montserrat.className} text-xl font-bold text-white group-hover:text-[#D1A741] transition-colors duration-300`}>
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Animated Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#D1A741] to-[#e8c678] group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}