"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="
      sticky top-0 z-50 w-full
      bg-[#0b0b0c]/80 backdrop-blur-xl
      border-b border-white/5
    ">
      {/* Gradient bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#cea741]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <div className="z-10">
          <Logo />
        </div>

        {/* Center Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <NavLinks />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 z-10">
          
          {/* Premium Contact Button */}
          <Link
            href="/contact"
            className="
              hidden md:flex items-center justify-center
              px-8 py-3
              rounded-full
              text-[12px] tracking-[0.2em] uppercase font-semibold
              text-black
              bg-gradient-to-r from-[#cea741] to-[#f5d06f]
              
              shadow-[0_0_20px_rgba(206,167,65,0.35)]
              hover:shadow-[0_0_30px_rgba(206,167,65,0.6)]
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            Contact
          </Link>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}