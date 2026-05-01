import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function VisionHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-20 space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="absolute -left-6 top-1 w-2 h-2 bg-[#D1A741] rounded-full animate-ping hidden sm:block" />
        <div className="absolute -left-6 top-1 w-2 h-2 bg-[#D1A741] rounded-full hidden sm:block" />
        <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm ml-2`}>
          Why Mintrix
        </h3>
      </div>
      <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-[#0b0f0d] tracking-tight flex flex-col gap-1`}>
        <span>What Sets Us</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
          Apart
        </span>
      </h2>
      <div className="w-20 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full shadow-[0_0_15px_rgba(209,167,65,0.5)] transform origin-center hover:scale-x-150 transition-transform duration-700 bg-[length:200%_auto] animate-gradient mt-2" />
    </div>
  );
}