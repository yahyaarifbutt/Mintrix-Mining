import Link from "next/link";
import { FOOTER_DATA } from "./footerData";

export default function FooterLinks() {
  return (
    <nav aria-label="Footer Quick Links">
      <h3 className="text-white text-base font-medium mb-6 tracking-wide">Discover</h3>
      <ul className="space-y-3.5">
        {FOOTER_DATA.links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="text-[#A3A3A3] hover:text-white text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#D4AF37]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}