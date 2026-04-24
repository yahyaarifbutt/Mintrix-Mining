import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-4">
      <Link
        href="/services"
        className="
          group flex items-center gap-2.5
          bg-gradient-to-r from-[#D1A741] to-[#e0b84f]
          text-[#0b0f0d] 
          px-8 py-3.5
          rounded-full
          font-semibold text-sm md:text-base
          shadow-[0_0_20px_rgba(209,167,65,0.25)]
          hover:shadow-[0_0_30px_rgba(209,167,65,0.4)]
          hover:-translate-y-0.5
          transition-all duration-300
        "
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        Explore Operations
      </Link>

      <Link
        href="/investments"
        className="
          group flex items-center gap-2.5
          border border-[#D1A741]
          bg-black/20 backdrop-blur-sm
          text-white
          px-8 py-3.5
          rounded-full
          font-semibold text-sm md:text-base
          hover:bg-[#D1A741]/10
          transition-all duration-300
        "
      >
        <svg className="w-5 h-5 text-[#D1A741]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Partner With Us
      </Link>
    </div>
  );
}