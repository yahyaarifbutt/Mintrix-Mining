"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gold Mining", href: "/mining" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const centerLinks = links.filter(link => link.name !== "Contact");

  return (
    <div className="flex items-center gap-12 text-[13px] uppercase tracking-[0.2em] font-medium">
      {centerLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              relative group transition-all duration-300
              ${isActive ? "text-[#cea741]" : "text-white/70 hover:text-white"}
            `}
          >
            {link.name}

            {/* Premium underline glow */}
            <span className={`
              absolute left-0 -bottom-2 h-[2px]
              bg-gradient-to-r from-[#cea741] to-[#f5d06f]
              transition-all duration-300
              ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
            `} />

            {/* subtle glow */}
            <span className={`
              absolute left-0 -bottom-2 h-[6px] blur-md
              bg-[#cea741]/40
              transition-all duration-300
              ${isActive ? "w-full opacity-60" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"}
            `} />
          </Link>
        );
      })}
    </div>
  );
}