import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-4 pt-6 w-full max-w-2xl">
      
      {/* --- Section 1: GOLD MINING --- */}
      <Link
        href="/mining" // Update with your actual mining page route
        className="
          group relative flex-1 flex items-center gap-4 p-5
          border border-[#D1A741]/40 rounded-2xl
          bg-black/40 backdrop-blur-md
          hover:bg-[#D1A741]/10 hover:border-[#D1A741]
          hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(209,167,65,0.3)]
          transition-all duration-300 overflow-hidden
        "
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D1A741]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon Container */}
        <div className="relative z-10 flex-shrink-0 p-3 bg-gradient-to-br from-[#D1A741] to-[#a8822d] rounded-full text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>

        {/* Text */}
        <div className="relative z-10 text-left">
          <h3 className="text-white font-bold text-lg md:text-xl leading-tight">Gold Mining</h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">Explore Operations</p>
        </div>
      </Link>

      {/* --- Section 2: GOLD TRADING --- */}
      <Link
        href="/trading" // Update with your actual trading page route
        className="
          group relative flex-1 flex items-center gap-4 p-5
          border border-white/20 rounded-2xl
          bg-black/40 backdrop-blur-md
          hover:bg-white/5 hover:border-white/50
          hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
          transition-all duration-300 overflow-hidden
        "
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon Container */}
        <div className="relative z-10 flex-shrink-0 p-3 bg-white/10 border border-white/20 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>

        {/* Text */}
        <div className="relative z-10 text-left">
          <h3 className="text-white font-bold text-lg md:text-xl leading-tight">Gold Trading</h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">Global Markets</p>
        </div>
      </Link>

    </div>
  );
}