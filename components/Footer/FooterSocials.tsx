import { FOOTER_DATA } from "./footerData";

export default function FooterSocials() {
  return (
    <nav aria-label="Footer Social Links" className="md:border-l border-white/10 md:pl-10">
      <h3 className="text-white text-base font-medium mb-6 tracking-wide">Social</h3>
      <ul className="space-y-3.5">
        {FOOTER_DATA.socials.map(({ name, href }) => (
          <li key={name}>
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#A3A3A3] hover:text-white text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#D4AF37]"
              aria-label={`Follow Mintrix on ${name}`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}