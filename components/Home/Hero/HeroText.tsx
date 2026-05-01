import { Montserrat } from "next/font/google";
import HeroButtons from "./HeroButtons";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

export default function HeroText() {
  return (
    <div className="space-y-4 md:space-y-5 max-w-2xl relative z-10">
      <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-xs mb-2 md:mb-4`}>
        Global Mining & Commodity Supply
      </h3>
      
      {/* Reduced sizes to keep it proportionate */}
      <h1 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white tracking-tight`}>
        Reliable Mineral Supply <br />
        <span className="bg-gradient-to-r from-[#D1A741] via-[#FFF2CD] to-[#D1A741] bg-clip-text text-transparent drop-shadow-sm">
          From Mine to Market
        </span>
      </h1>

      <h2 className={`${montserrat.className} text-base md:text-lg lg:text-xl text-white/90 font-semibold mt-3 md:mt-4`}>
        Integrated Mining & Commodity Trading Across Global Markets
      </h2>

      <p className="text-sm md:text-base lg:text-lg text-gray-300/90 leading-relaxed max-w-xl font-light">
        Mintrix operates across the full mining lifecycle from exploration and extraction to processing and global commodity trading. We supply high-quality minerals directly to buyers with consistency, transparency, and dependable delivery
      </p>

      <HeroButtons />
    </div>
  );
}