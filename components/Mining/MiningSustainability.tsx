import { Montserrat } from "next/font/google";
import { Leaf } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "900"] 
});

export default function MiningSustainability() {
  return (
    <section className="bg-[#111613] py-16 px-6 relative overflow-hidden border-y border-white/5">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Typography */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Leaf className="w-4 h-4 text-[#D1A741]" />
            <h3 className={`${montserrat.className} text-[#D1A741] font-bold tracking-[0.2em] uppercase text-xs`}>
              Environmental Stewardship
            </h3>
          </div>
          <h2 className={`${montserrat.className} text-2xl md:text-3xl font-black text-white tracking-tight`}>
            Zero-Harm Extraction Protocol.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
            Our commitment goes beyond yield. We restore 100% of disrupted topsoil, utilize closed-loop water systems, and operate a largely electrified fleet to minimize our carbon footprint.
          </p>
        </div>

        {/* Right Side: High-End Metric Badge */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-end">
          <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-[#D1A741]/40 via-transparent to-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[#D1A741]/20 blur-md group-hover:bg-[#D1A741]/30 transition-colors duration-500" />
            <div className="relative bg-[#030404] px-10 py-6 rounded-2xl flex flex-col items-center justify-center min-w-[240px]">
              <span className={`${montserrat.className} text-4xl font-black text-white`}>
                100<span className="text-[#D1A741] text-2xl">%</span>
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">
                Site Remediation
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}