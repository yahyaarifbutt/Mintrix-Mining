import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-4 w-full max-w-xl">
      
      {/* Gold Mining Button */}
      <Link
        href="/mining" // Updated to redirect to your desired /mining page
        className="
          group relative flex-1 flex items-center gap-3 p-3.5 sm:px-5
          border border-[#D1A741]/40 rounded-xl
          bg-black/40 backdrop-blur-md
          hover:bg-[#D1A741]/10 hover:border-[#D1A741]
          hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(209,167,65,0.3)]
          transition-all duration-300 overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#D1A741]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex-shrink-0 p-2 bg-gradient-to-br from-[#D1A741] to-[#a8822d] rounded-full text-black shadow-sm">
          {/* Isometric Box / Stack Icon for Mining */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <div className="relative z-10 text-left">
          <h3 className="text-white font-bold text-base leading-tight">Gold Mining</h3>
          <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors mt-0.5">Active Operations</p>
        </div>
      </Link>

      {/* Gold Trading Button */}
      <Link
        href="/trading" 
        className="
          group relative flex-1 flex items-center gap-3 p-3.5 sm:px-5
          border border-white/20 rounded-xl
          bg-black/40 backdrop-blur-md
          hover:bg-white/5 hover:border-white/50
          hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
          transition-all duration-300 overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex-shrink-0 p-2 bg-white/10 border border-white/20 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 shadow-sm">
          {/* Trending Up / Chart Icon for Trading */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className="relative z-10 text-left">
          <h3 className="text-white font-bold text-base leading-tight">Gold Trading</h3>
          <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors mt-0.5">Global Markets</p>
        </div>
      </Link>

    </div>
  );
}