"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";

// Ensure the exact same font configuration as the Hero section
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Scalable Data Structure
export const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gold Mining", href: "/mining" },
  { 
    name: "Commodity Trading",
    href: "/commodity-trading",
    menuGroups: [
      {
        category: "Metals",
        items: [
          { name: "Gold", href: "/commodity-trading/metals/gold" },
          { name: "Copper", href: "/commodity-trading/metals/copper" },
          { name: "Lithium", href: "/commodity-trading/metals/lithium" }
        ],
      },
      {
        category: "Gemstones",
        items: [
          { name: "Ruby", href: "/commodity-trading/gemstones/ruby" }
        ],
      },
      // Ready for future expansion:
      /*
      {
        category: "Energy",
        items: [
          { name: "Crude Oil", href: "/commodity-trading/energy/oil" },
          { name: "Natural Gas", href: "/commodity-trading/energy/gas" },
        ]
      }
      */
    ]
  },
  { name: "Investments", href: "/investment" }, 
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const centerLinks = links.filter(link => link.name !== "Contact");

  return (
    <div className={`flex items-center gap-8 lg:gap-10 text-[12px] uppercase tracking-[0.2em] font-bold ${montserrat.className}`}>
      {centerLinks.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
        const hasGroups = !!link.menuGroups;

        return (
          <div key={link.name} className="relative group h-full flex items-center">
            {/* Main Nav Link */}
            <Link
              href={link.href}
              className={`
                relative py-8 flex items-center gap-1.5 transition-colors duration-300
                ${isActive ? "text-[#D1A741]" : "text-[#050505]/80 hover:text-[#D1A741]"}
              `}
            >
              {link.name}
              
              {hasGroups && (
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-180" />
              )}

              {/* Premium Gold Underline matching Hero Gold */}
              <span className={`
                absolute left-0 bottom-6 h-[2px] bg-[#D1A741]
                transition-all duration-300 ease-out
                ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
              `} />
            </Link>

            {/* High-End Multi-Column Mega Menu Dropdown */}
            {hasGroups && (
              <div className={`
                absolute top-[90%] left-1/2 -translate-x-1/2 
                pt-6 /* Invisible bridge */
                opacity-0 invisible translate-y-4
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                z-50
              `}>
                <div className="
                  bg-white 
                  shadow-[0_40px_70px_-15px_rgba(0,0,0,0.1)]
                  border border-gray-100
                  rounded-2xl overflow-hidden
                  p-8
                  /* Grid layout handles dynamic number of columns beautifully */
                  grid grid-flow-col auto-cols-max gap-12
                ">
                  {link.menuGroups?.map((group) => (
                    <div key={group.category} className="min-w-[160px]">
                      {/* Category Header */}
                      <h4 className="
                        text-[10px] text-gray-400 font-extrabold uppercase tracking-[0.25em] 
                        mb-4 pb-3 border-b border-gray-100/80
                      ">
                        {group.category}
                      </h4>

                      {/* Category Links */}
                      <div className="flex flex-col gap-1.5">
                        {group.items.map((subLink) => {
                          const isSubActive = pathname === subLink.href;

                          return (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className={`
                                group/sub flex items-center justify-between
                                px-3 py-2.5 rounded-lg
                                text-[12px] font-bold tracking-[0.15em] uppercase
                                transition-all duration-300
                                ${isSubActive 
                                  ? "text-[#D1A741] bg-gray-50 shadow-sm" 
                                  : "text-[#050505]/70 hover:text-[#D1A741] hover:bg-gray-50/80 hover:pl-4"}
                              `}
                            >
                              <span>{subLink.name}</span>
                              
                              <ArrowRight className={`
                                w-3.5 h-3.5 text-[#D1A741] transition-all duration-300
                                ${isSubActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0"}
                              `} />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}