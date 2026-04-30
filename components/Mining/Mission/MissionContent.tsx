import { Montserrat } from "next/font/google";
import { Cpu, Lock, LineChart } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

export default function MissionContent() {
  const missionPoints = [
    { 
      label: "Responsible Extraction", 
      detail: "Leveraging modern mining techniques and geological precision to extract gold efficiently while minimizing environmental impact.",
      icon: Cpu
    },
    { 
      label: "Secure Handling", 
      detail: "Ensuring every ounce of gold is tracked, protected, and managed through controlled refining, transport, and storage systems.",
      icon: Lock
    },
    { 
      label: "Global Supply Chain", 
      detail: "Delivering refined gold directly to international markets through trusted trade networks and verified distribution channels.",
      icon: LineChart
    },
  ];

  return (
    <div className="space-y-10 text-[#0b0f0d]">
      
      {/* Heading Section */}
      <div className="space-y-4 relative">
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full animate-ping" />
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full" />

        <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm ml-2`}>
          Our Approach
        </h3>

        <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold tracking-tight flex flex-col gap-1`}>
          <span>From Earth to Market,</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
            Built on Precision & Trust
          </span>
        </h2>

        <div className="w-20 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full shadow-[0_0_15px_rgba(209,167,65,0.5)] transform origin-left hover:scale-x-150 transition-transform duration-700 bg-[length:200%_auto] animate-gradient mt-2" />
      </div>

      {/* Description */}
      <div className="pl-6 border-l-2 border-[#D1A741]/30">
        <p className="text-lg leading-relaxed text-gray-600 max-w-md">
          Our operations are built around a seamless journey — from responsible extraction in the field to refining and delivering high-purity gold into global markets.
        </p>
      </div>

      {/* Operational Points */}
      <div className="space-y-5 pt-2">
        {missionPoints.map((item, i) => (
          <div 
            key={i} 
            className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100"
          >
            <div className="flex-shrink-0 p-3 rounded-lg bg-[#0b0f0d] text-[#D1A741] group-hover:bg-[#D1A741] group-hover:text-white transition-colors duration-300 shadow-md">
              <item.icon className="w-5 h-5" />
            </div>
            <div className="mt-0.5">
              <h4 className={`${montserrat.className} font-bold uppercase tracking-wide text-sm text-[#0b0f0d] mb-1 group-hover:text-[#D1A741] transition-colors`}>
                {item.label}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}