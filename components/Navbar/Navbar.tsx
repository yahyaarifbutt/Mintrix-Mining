"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link"; 

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.04)] border-b border-gray-100/50 transition-all duration-300">
      {/* Changed py-3 to py-2 to decrease top/bottom empty space */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex justify-between items-center relative">
        
        {/* 1. LEFT: Brand Logo */}
        <div className="hover:opacity-80 transition-opacity duration-300 z-10">
          <Logo />
        </div>

        {/* 2. CENTER: Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <NavLinks />
        </div>

        {/* 3. RIGHT: Desktop Contact Button + Mobile Menu */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/contact"
            className="
              hidden md:block
              px-7 py-2.5
              bg-[#cea741] text-[#1b211d]
              text-sm font-bold tracking-widest uppercase
              rounded-sm
              shadow-[0_4px_14px_rgba(206,167,65,0.3)]
              hover:bg-[#b89136] hover:shadow-[0_6px_20px_rgba(206,167,65,0.4)]
              hover:-translate-y-0.5
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