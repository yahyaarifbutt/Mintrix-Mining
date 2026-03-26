import { FOOTER_DATA } from "./footerData";

export default function FooterContact() {
  const { contact } = FOOTER_DATA;
  
  return (
    <address className="not-italic">
      <h3 className="text-white text-base font-medium mb-6 tracking-wide">Contact</h3>
      <ul className="space-y-3.5 text-[#A3A3A3] text-sm leading-relaxed">
        <li>
          <a 
            href={`mailto:${contact.email}`} 
            className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#D4AF37]"
          >
            {contact.email}
          </a>
        </li>
        <li>
          <a 
            href={`tel:${contact.phone.replace(/\s/g, '')}`} 
            className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#D4AF37]"
          >
            {contact.phone}
          </a>
        </li>
        <li className="pr-4 md:pr-0">
          {contact.address}
        </li>
      </ul>
    </address>
  );
}