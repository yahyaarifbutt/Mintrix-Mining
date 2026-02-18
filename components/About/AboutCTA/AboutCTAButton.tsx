import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTAButton() {
  return (
    <div className="flex justify-start md:justify-end items-center">
      <Link
        href="/contact"
        className="
          relative inline-flex items-center justify-center 
          px-10 py-5 bg-[#D1A741] text-[#0b0f0d] 
          rounded-xl font-black uppercase tracking-widest text-sm 
          overflow-hidden transition-all duration-300 
          hover:scale-105 hover:bg-[#e0b84f]
          shadow-[0_0_40px_-10px_rgba(209,167,65,0.4)]
        "
      >
        <span className="relative z-10 flex items-center gap-3">
          Get In Touch
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>

        {/* Shine hover effect */}
        <div className="absolute inset-0 h-full w-full bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      </Link>
    </div>
  );
}
