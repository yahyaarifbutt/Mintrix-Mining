"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname(); 

  const centerLinks = links.filter(link => link.name !== "Contact");

  return (
    <div className="hidden md:flex items-center gap-10 text-[15px] font-semibold">
      {centerLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            // Reduced the py-2 to py-1 to keep the bounding box tighter
            className={`
              relative tracking-wider py-1 group transition-colors duration-300
              ${isActive ? "text-[#cea741]" : "text-[#1b211d]/80 hover:text-[#cea741]"}
            `}
          >
            {link.name}
            {/* Removed the shadow, thinned the line to 1.5px, 
              and moved it slightly closer to the text (-bottom-0.5) 
            */}
            <span className={`
              absolute left-0 -bottom-0.5 h-[1.5px] bg-[#cea741] 
              transition-all duration-300 ease-out
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
            `}></span>
          </Link>
        );
      })}
    </div>
  );
}