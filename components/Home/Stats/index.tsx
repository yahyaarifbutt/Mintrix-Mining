import { Montserrat } from "next/font/google";
import { stats } from "./statsData";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function Stats() {
  return (
    // Reduced padding from py-24 to py-12 lg:py-16
    <section className="bg-black py-12 lg:py-16 px-6 relative overflow-hidden border-y border-[#D1A741]/20">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D1A741]/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Reduced margin-bottom from mb-16 to mb-10 */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h3 className={`${montserrat.className} text-[#D1A741] font-semibold tracking-[0.35em] uppercase text-xs mb-3`}>
            Client Focus
          </h3>
          {/* Slightly reduced text sizes for a tighter header */}
          <h2 className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight tracking-tight`}>
            Built for Buyers, Traders & <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e8c87e] to-[#D1A741]">
              Industry Partners
            </span>
          </h2>
          {/* Reduced margin top on the accent line */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#D1A741] via-[#f5d98a] to-[#D1A741] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 relative gap-6 lg:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-4 md:px-6 group">
              <div className="absolute inset-0 bg-[#D1A741]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Reduced heading size from text-xl to text-lg */}
              <h4 className={`${montserrat.className} text-lg md:text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#D1A741] transition-colors`}>
                {stat.label}
              </h4>
              {/* Adjusted text size and line-height for a tighter text block */}
              <p className="text-gray-400 leading-snug text-xs md:text-sm max-w-xs">
                {stat.value}
              </p>

              {/* Reduced height of the divider line */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#D1A741]/30 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Reduced margin top from mt-16 to mt-10 */}
        <div className="mt-10 flex justify-center">
          <Link href="/contact" className={`${montserrat.className} text-[#010301] bg-gradient-to-r from-[#D1A741] to-[#e8c678] px-8 py-3 rounded-full hover:scale-105 transition-transform font-bold text-xs sm:text-sm tracking-wide`}>
            Send Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}