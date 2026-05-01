import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-4 w-full max-w-xl">
      <Link
        href="/services"
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
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <div className="relative z-10 text-left">
          <h3 className="text-white font-bold text-base leading-tight">View Services</h3>
          <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors mt-0.5">Explore Our Supply</p>
        </div>
      </Link>

      <Link
        href="/contact" 
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
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div className="relative z-10 text-left">
          <h3 className="text-white font-bold text-base leading-tight">Contact Our Team</h3>
          <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors mt-0.5">Direct Inquiry</p>
        </div>
      </Link>
    </div>
  );
}