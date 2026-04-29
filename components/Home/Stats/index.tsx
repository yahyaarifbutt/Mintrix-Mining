import { Montserrat } from "next/font/google";
import StatItem from "./StatItem";
import { stats } from "./statsData";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
});

export default function Stats() {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden border-y border-[#D1A741]/20">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D1A741]/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-sm mb-4`}>
            Key Metrics
          </h3>
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight tracking-tight`}>
            Driving Excellence Through <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e8c87e] to-[#D1A741]">
              Performance
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatItem label={stat.label} value={stat.value} />
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#D1A741]/30 to-transparent" />
              )}
              {index !== stats.length - 1 && (
                <div className="block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D1A741]/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}