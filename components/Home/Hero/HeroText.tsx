import { Montserrat } from "next/font/google";
import HeroButtons from "./HeroButtons";


const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

export default function HeroText() {
  return (
    <div className="space-y-6 max-w-2xl relative z-10">
      {/* Swapped to Montserrat. 
        Changed to font-extrabold and tracking-tight for a more grounded, corporate impact.
      */}
      <h1 className={`${montserrat.className} text-5xl md:text-7xl font-extrabold leading-[1.1] text-white tracking-tight`}>
        Unlocking Kenya’s Gold, <br />
        <span className="bg-gradient-to-r from-[#D1A741] via-[#FFF2CD] to-[#D1A741] bg-clip-text text-transparent drop-shadow-sm">
          Powering Global Value.
        </span>
      </h1>

      <p className="text-base md:text-lg text-gray-300/90 leading-relaxed max-w-xl font-light">
        Mintrix World is at the forefront of gold mining in Kenya, combining advanced extraction methods, responsible operations, and strategic partnerships to deliver high-quality gold to global markets.
      </p>

      <HeroButtons />
    </div>
  );
}