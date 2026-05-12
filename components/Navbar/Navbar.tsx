"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// Import the same font used in the Hero Section
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 
        INVISIBLE PLACEHOLDER:
        Since the nav is now 'fixed', it is removed from standard document flow. 
        This empty div takes up exactly 85px of vertical space so the Hero section 
        doesn't jump up underneath the navbar on initial load.
      */}
      <div className="h-[85px] w-full shrink-0" aria-hidden="true" />

      <nav className={`
        fixed top-0 left-0 z-50 w-full flex items-center
        bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)]
        transition-all duration-500 ease-in-out
        ${isScrolled ? "h-[65px]" : "h-[85px]"} 
        ${montserrat.className} 
      `}>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-full">
          
          {/* Left - Logo */}
          <div className="flex items-center z-20">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Center - Links */}
          <div className="hidden md:flex flex-1 justify-center items-center z-10">
            <NavLinks />
          </div>

          {/* Right - Contact Button & Mobile Menu */}
          <div className="flex items-center gap-5 z-20">
            <Link
              href="/contact"
              className="
                hidden md:flex items-center justify-center
                px-8 py-2.5
                rounded-full
                text-[12px] tracking-[0.2em] uppercase font-bold
                text-white bg-[#0b0f0d]
                border border-transparent
                hover:bg-white hover:text-[#cea741] hover:border-[#cea741]
                hover:shadow-[0_10px_20px_rgba(206,167,65,0.15)]
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
    </>
  );
}