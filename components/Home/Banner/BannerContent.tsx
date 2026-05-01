import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function BannerContent() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-4 relative">
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full animate-ping" />
        <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full" />

        <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm ml-2`}>
          Final Call
        </h3>
        
        <h2 className={`${montserrat.className} text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight flex flex-col gap-1`}>
          <span>Looking for a Reliable</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
            Commodity Supplier?
          </span>
        </h2>
        
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full shadow-[0_0_15px_rgba(209,167,65,0.5)] transform origin-left hover:scale-x-125 transition-transform duration-700 bg-[length:200%_auto] animate-gradient mt-2" />
      </div>

      <p className="text-xl text-white/80 leading-relaxed max-w-xl font-medium">
        Partner with Mintrix for consistent mineral supply, transparent processes, and long-term reliability.
      </p>

      {/* Buttons container with updated /about link */}
      <div className="flex flex-wrap gap-3 pt-4">
        <Link href="/contact" className={`${montserrat.className} bg-[#D1A741] text-[#0b0f0d] px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl hover:bg-[#b88f32] transition-all duration-300`}>
          Request Pricing
        </Link>
        
        <Link href="/contact" className={`${montserrat.className} border-2 border-white text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0b0f0d] transition-all duration-300`}>
          Contact Us
        </Link>

       
      </div>
    </div>
  );
}