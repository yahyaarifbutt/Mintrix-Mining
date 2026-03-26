"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="flex items-center gap-2 px-6 py-2.5 border border-white/30 rounded text-xs sm:text-sm font-medium uppercase tracking-wider text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CEA741]"
    >
      <ArrowUp size={16} />
      Back to Top
    </button>
  );
}