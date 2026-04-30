import { Montserrat } from "next/font/google";
import HeroButtons from "./HeroButtons";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
});

export default function HeroText() {
  return (
    <div className="space-y-6 max-w-2xl relative z-10 mt-12 md:mt-0">
      <h1 className={`${montserrat.className} text-5xl md:text-7xl font-extrabold leading-[1.1] text-white tracking-tight`}>
        Unlocking Kenya’s Gold, <br />
        <span className="bg-gradient-to-r from-[#D1A741] via-[#FFF2CD] to-[#D1A741] bg-clip-text text-transparent drop-shadow-sm">
          Powering Global Value
        </span>
      </h1>

      {/* UPDATED: Copy now explicitly mentions both Mining and Trading */}
      <p className="text-base md:text-lg text-gray-300/90 leading-relaxed max-w-xl font-light">
        Mintrix World bridges the gap between raw extraction and global markets. We lead the industry with responsible <strong>gold mining operations</strong> in Kenya and seamless <strong>global gold trading</strong>.
      </p>

      <HeroButtons />
    </div>
  );
}