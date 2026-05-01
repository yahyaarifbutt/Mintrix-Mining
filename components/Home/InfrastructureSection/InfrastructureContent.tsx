import { Montserrat } from "next/font/google";
import { Link, Box, CircleDollarSign } from "lucide-react";
import NextLink from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function InfrastructureContent() {
  const features = [
    { 
      label: "Linked to Real Production", 
      detail: "Trading activities directly linked to our mining output, ensuring supply availability and pricing stability.",
      icon: Link
    },
    { 
      label: "Global Market Reach", 
      detail: "Working with global buyers, manufacturers, and traders to deliver commodities aligned with market demand.",
      icon: CircleDollarSign
    },
    { 
      label: "Key Commodities", 
      detail: "Supplying Gold, Copper, Lithium, Ruby, plus a growing range of industrial minerals.",
      icon: Box
    },
  ];

  return (
    <div className="space-y-8 text-[#1b211d]">
      <div className="space-y-4 relative">
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full animate-ping" />
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full" />

        <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm ml-2`}>
          Trading Section
        </h3>

        <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] tracking-tight flex flex-col gap-1`}>
          <span>Commodity Trading Backed</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
            by Real Production
          </span>
        </h2>

        <div className="w-20 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full mt-2" />
      </div>

      <div className="pl-6 border-l-2 border-[#D1A741]/30">
        <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-md">
          Our trading activities are directly linked to our mining output — ensuring supply availability, pricing stability, and execution reliability.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        {features.map((item, i) => (
          <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_10px_25px_rgba(209,167,65,0.1)] hover:border-[#D1A741]/40 transition-all duration-300">
            <div className="flex-shrink-0 p-2.5 rounded-lg bg-[#0b0f0d] text-[#D1A741] group-hover:bg-[#D1A741] group-hover:text-white transition-colors duration-300">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`${montserrat.className} font-bold text-[#0b0f0d] text-sm mb-1`}>{item.label}</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 pt-4">
         <NextLink href="/commodities" className="text-sm font-bold text-white bg-[#0b0f0d] px-6 py-3 rounded-lg hover:bg-[#D1A741] transition-colors">
            View All Commodities
         </NextLink>
         <NextLink href="/pricing" className="text-sm font-bold text-[#0b0f0d] border border-[#0b0f0d] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Request Pricing
         </NextLink>
      </div>
    </div>
  );
}