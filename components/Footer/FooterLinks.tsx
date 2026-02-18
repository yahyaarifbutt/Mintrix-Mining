import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function FooterLinks() {
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-[#CEA741] font-bold uppercase tracking-[0.15em] mb-5 text-xs md:text-sm">
        Links
      </h4>
      <ul className="space-y-3 w-full">
        {footerLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-[#f5f5f5]/60 hover:text-[#CEA741] text-sm transition-colors duration-200 block py-1"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}