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
    <div className="flex items-center gap-10 text-[12px] uppercase tracking-[0.2em] font-bold">
      {centerLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              relative py-2 group transition-all duration-300
              ${isActive ? "text-[#cea741]" : "text-[#0b0f0d]/70 hover:text-[#cea741]"}
            `}
          >
            {link.name}

            {/* Premium Gold Underline */}
            <span className={`
              absolute left-0 -bottom-1 h-[2px]
              bg-[#cea741]
              transition-all duration-300 ease-out
              ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
            `} />
          </Link>
        );
      })}
    </div>
  );
}