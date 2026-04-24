"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="group flex items-center gap-2.5 px-5 py-2 border border-[#A3A3A3]/30 rounded-full text-xs font-medium uppercase tracking-widest text-[#A3A3A3] hover:text-[#CEA741] hover:border-[#CEA741] hover:bg-[#CEA741]/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CEA741]"
    >
      <span className="relative flex items-center justify-center overflow-hidden">
        {/* Changed hover:-translate-y-1 to hover:-translate-y-0.5 for a softer, controlled lift */}
        <ArrowUp 
          size={16} 
          strokeWidth={2}
          className="transform group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" 
        />
      </span>
      Back to Top
    </button>
  );
}