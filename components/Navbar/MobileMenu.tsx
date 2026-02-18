"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { links } from "./NavLinks"; 

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      {/* Default: Dark (#1b211d), Hover/Active: Gold (#cea741) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-2 transition-colors duration-300 focus:outline-none
          ${isOpen ? "text-[#cea741]" : "text-[#1b211d] hover:text-[#cea741]"}
        `}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Dropdown Menu Overlay */}
      <div
        className={`
          absolute top-full left-0 w-full 
          bg-[#1b211d] /* Secondary Dark Background */
          border-t-2 border-[#cea741] /* Gold Top Border Accent */
          shadow-2xl
          transition-all duration-300 ease-in-out origin-top overflow-hidden
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col pb-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                group flex items-center justify-between
                px-8 py-6
                border-b border-[#252723] /* Third color for subtle dividers */
                text-lg font-medium text-white/90
                hover:bg-[#252723] 
                hover:text-[#cea741] /* Primary Gold on Hover */
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3">
                 {/* Decorative Dot that glows on hover */}
                 <span className="w-1.5 h-1.5 rounded-full bg-[#cea741] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#cea741]" />
                 
                 {/* Link Name with slide effect */}
                 <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {link.name}
                 </span>
              </div>

              {/* Arrow Icon */}
              <ChevronRight className="w-5 h-5 text-[#cea741] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}