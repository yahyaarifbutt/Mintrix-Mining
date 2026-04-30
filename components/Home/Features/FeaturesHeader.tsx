import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

export default function FeaturesHeader() {
  return (
    <div className="mb-20 space-y-6 relative">
      {/* Subtle decorative dots */}
      <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full animate-ping" />
      <div className="absolute -left-6 top-2 w-2 h-2 bg-[#D1A741] rounded-full" />

      {/* Subheading */}
      <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm ml-2`}>
        Core Capabilities
      </h3>

      {/* Main Heading */}
      <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white tracking-tight flex flex-col gap-2`}>
        <span>Built for the next generation of</span>
        {/* Added the premium gold gradient and removed the italic styling */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1A741] to-[#e8c678]">
          Industrial Mining
        </span>
      </h2>

      {/* Decorative glowing line */}
      <div className="w-24 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full shadow-[0_0_15px_rgba(209,167,65,0.5)] transform origin-left hover:scale-x-150 transition-transform duration-700 bg-[length:200%_auto] animate-gradient" />
    </div>
  );
}