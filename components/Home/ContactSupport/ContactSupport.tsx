import SupportItem from "./SupportItem";
import { supportItems } from "./supportData";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function ContactSupport() {
  return (
    <section className="bg-white py-16 px-6 border-t border-[#CEA741]/20 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#CEA741]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
        
        {/* Left Side: Insights text */}
        <div className="lg:w-1/3 text-left space-y-4 relative">
          
          {/* Animated Dots (Hidden on mobile so they don't break layout if text wraps weirdly) */}
          <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full animate-ping hidden md:block" />
          <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full hidden md:block" />

          <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm ml-2`}>
            Insights
          </h3>
          
          {/* UPDATED HEADING TO MATCH INFRASTRUCTURE */}
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] tracking-tight flex flex-col gap-1`}>
            <span>Market Insights &</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
              Industry Updates
            </span>
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full mt-2" />

          <div className="pt-4 space-y-6">
            <p className="text-gray-500 leading-relaxed max-w-sm">
              Stay informed with updates on commodity trends, mining developments, and global market movements.
            </p>
            <div className="inline-block">
              <Link href="/insights" className={`${montserrat.className} text-sm font-bold text-[#0b0f0d] border-b-2 border-[#D1A741] pb-1 hover:text-[#D1A741] transition-colors`}>
                Visit Insights →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: The existing Support Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-10 lg:mt-0">
          {supportItems.map((item, idx) => (
            <SupportItem
              key={idx}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}