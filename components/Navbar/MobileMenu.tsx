"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { links } from "./NavLinks"; 

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-2 transition-colors duration-300 focus:outline-none
          ${isOpen ? "text-[#cea741]" : "text-[#0b0f0d] hover:text-[#cea741]"}
        `}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Dropdown Menu Overlay */}
      <div
        className={`
          absolute top-full left-0 w-full 
          bg-white shadow-2xl border-t border-gray-100
          transition-all duration-300 ease-in-out origin-top overflow-hidden
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col pb-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  group flex items-center justify-between px-8 py-5
                  border-b border-gray-50 text-[14px] font-bold uppercase tracking-widest transition-all duration-300
                  ${isActive 
                    ? "bg-gray-50 text-[#cea741]" 
                    : "text-[#0b0f0d]/80 hover:bg-gray-50 hover:text-[#cea741]"}
                `}
              >
                <div className="flex items-center gap-4">
                   <span className={`
                     w-1.5 h-1.5 rounded-full bg-[#cea741] transition-opacity duration-300
                     ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                   `} />
                   
                   <span className={`
                     transition-transform duration-300
                     ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}
                   `}>
                    {link.name}
                   </span>
                </div>

                <ChevronRight className={`
                  w-5 h-5 text-[#cea741] transition-all duration-300
                  ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}
                `} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}