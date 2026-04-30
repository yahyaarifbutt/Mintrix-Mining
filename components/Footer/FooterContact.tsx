import { FOOTER_DATA } from "./footerData";

export default function FooterContact() {
  const { contact } = FOOTER_DATA;
  
  return (
    <address className="not-italic flex flex-col gap-2.5">
      <a 
        href={`mailto:${contact.email}`} 
        className="text-[#888888] hover:text-[#CEA741] text-xs transition-colors duration-300 flex items-center gap-2.5"
      >
        <contact.Icons.Mail size={14} className="text-[#444444]" />
        <span className="truncate">{contact.email}</span>
      </a>
      <a 
        href={`tel:${contact.phone.replace(/\s/g, '')}`} 
        className="text-[#888888] hover:text-[#CEA741] text-xs transition-colors duration-300 flex items-center gap-2.5"
      >
        <contact.Icons.Phone size={14} className="text-[#444444]" />
        {contact.phone}
      </a>
      <span className="text-[#888888] text-xs flex items-start gap-2.5 leading-relaxed pr-2">
        <contact.Icons.MapPin size={14} className="text-[#444444] mt-0.5 shrink-0" />
        {contact.address}
      </span>
    </address>
  );
}