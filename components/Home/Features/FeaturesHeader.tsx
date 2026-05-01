import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

export default function FeaturesHeader() {
  return (
    <div className="mb-12 space-y-4 relative flex flex-col items-start lg:flex-row lg:items-end justify-between">
      <div className="space-y-3 relative">
        <div className="absolute -left-5 top-1.5 w-1.5 h-1.5 bg-[#D1A741] rounded-full" />
        
        <h3 className={`${montserrat.className} text-[#D1A741]/80 font-medium tracking-[0.4em] uppercase text-[10px] ml-2`}>
          Operations Flow
        </h3>

        <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold text-white tracking-tight flex flex-col leading-tight`}>
          <span>End-to-End Mining &</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#f5d98a]">
            Supply Chain
          </span>
        </h2>

        {/* Thinner, more elegant line */}
        <div className="w-16 h-[2px] bg-[#D1A741] rounded-full shadow-[0_0_10px_rgba(209,167,65,0.3)]" />
      </div>

      <div className="mt-6 lg:mt-0">
        <Link href="/operations" className={`${montserrat.className} text-[#D1A741] border border-[#D1A741]/30 px-5 py-2.5 rounded-full hover:bg-[#D1A741] hover:text-[#010301] transition-all duration-300 font-semibold text-xs tracking-widest uppercase`}>
          Explore Operations
        </Link>
      </div>
    </div>
  );
}