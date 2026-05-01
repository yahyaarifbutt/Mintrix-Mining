import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Link2, ShieldCheck, TrendingUp, Leaf } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

const advantages = [
  { 
    label: "Direct Source — No Middlemen", 
    detail: "You deal with the producer, not a broker. That means better pricing, faster communication, and direct accountability on supply commitments.",
    icon: Link2
  },
  { 
    label: "Consistent Output, Verified Quality", 
    detail: "Standardized extraction and processing across our sites means every shipment meets the same quality benchmarks — reducing variance and buyer-side inspection costs.",
    icon: ShieldCheck
  },
  { 
    label: "Scalable Supply", 
    detail: "As demand grows, so do we. Our active expansion at Site 2 and development of Pocket Site 3 gives buyers access to increasing volumes under long-term agreements.",
    icon: TrendingUp
  },
  { 
    label: "Responsible Operations", 
    detail: "We operate with full regulatory compliance and align our methods with environmental and safety standards — giving buyers confidence in the provenance of what they source.",
    icon: Leaf
  },
];

export default function OperationalAdvantages() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D1A741]/5 via-transparent to-transparent opacity-70 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        
        {/* Content Side */}
        <div className="lg:col-span-6 xl:col-span-5 space-y-10 text-[#0b0f0d]">
          <div className="space-y-4 relative">
            <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm`}>
              Operational Advantages
            </h3>
            <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold tracking-tight`}>
              Why Our Mining Model <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#b88c2b]">
                Works for Buyers
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D1A741] to-[#e8c678] rounded-full mt-6" />
          </div>

          <div className="space-y-4 pt-2">
            {advantages.map((item, i) => (
              <div key={i} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                <div className="flex-shrink-0 p-3 rounded-lg bg-[#0b0f0d] text-[#D1A741] group-hover:bg-[#D1A741] group-hover:text-white transition-colors duration-300 shadow-md">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="mt-0.5">
                  <h4 className={`${montserrat.className} font-semibold tracking-wide text-base text-[#0b0f0d] mb-1.5 group-hover:text-[#D1A741] transition-colors`}>
                    {item.label}
                  </h4>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-6 xl:col-span-7 relative group p-4 lg:p-8">
          <div className="absolute inset-0 border-2 border-[#D1A741]/30 rounded-[2.5rem] transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 bg-[#0b0f0d]">
            <Image
              src="/Images/mission.jpg" // Update with correct image
              alt="Mining Operations Model"
              fill
              className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0d]/50 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}