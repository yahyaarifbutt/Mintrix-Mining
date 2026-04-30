import { Montserrat } from "next/font/google";
import { Cpu, ShieldAlert, Satellite } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

const techFeatures = [
  {
    icon: Satellite,
    title: "Orbital Surveying",
    desc: "Real-time satellite topography and thermal imaging to map extraction zones with millimeter accuracy.",
  },
  {
    icon: Cpu,
    title: "AI Yield Prediction",
    desc: "Proprietary machine learning models analyzing core samples to predict vein trajectories and maximize output.",
  },
  {
    icon: ShieldAlert,
    title: "Automated Safety",
    desc: "Lidar-equipped autonomous vehicles and structural monitoring systems ensuring zero-harm operations.",
  }
];

export default function MiningTech() {
  return (
    <section className="bg-[#030404] py-20 px-6 relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D1A741]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-[#D1A741]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-3">
            <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-xs`}>
              The Digital Mine
            </h3>
            <h2 className={`${montserrat.className} text-3xl md:text-4xl font-extrabold text-white tracking-tight`}>
              Next-Gen <span className="text-gray-500 font-light">Technology.</span>
            </h2>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-white/10 mb-3" />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techFeatures.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-2xl bg-[#0b0f0d] border border-white/5 hover:border-[#D1A741]/30 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#D1A741]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:bg-[#D1A741]/10 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#D1A741]" />
                </div>
                <span className={`${montserrat.className} text-white/10 font-bold text-2xl`}>
                  0{i + 1}
                </span>
              </div>

              <h4 className={`${montserrat.className} text-lg font-bold text-white mb-2`}>
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}