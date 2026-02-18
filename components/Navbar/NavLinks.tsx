import Link from "next/link";

// Export this so we can reuse it in the MobileMenu
export const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <div className="hidden md:flex gap-8 text-sm font-medium items-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="
            relative
            text-[#010301]
            hover:text-[#D1A741]
            transition-colors
            tracking-wide
            after:absolute
            after:left-0
            after:-bottom-[3px]
            after:h-[1px]
            after:w-0
            after:bg-[#D1A741]
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}