import { Mail, Phone, MapPin } from "lucide-react";

export default function FooterContact() {
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-[#CEA741] font-bold uppercase tracking-[0.15em] mb-5 text-xs md:text-sm">
        Contact Us
      </h4>
      <ul className="space-y-4 text-[#f5f5f5]/80 text-sm w-full">
        <li>
          <a 
            href="mailto:info@mintrixmining.com" 
            className="group flex items-start gap-3 hover:text-white transition-colors"
          >
            <Mail size={18} className="text-[#CEA741] mt-0.5 shrink-0" />
            <span className="break-all">info@mintrixmining.com</span>
          </a>
        </li>
        <li>
          <a 
            href="tel:+1234567890" 
            className="group flex items-start gap-3 hover:text-white transition-colors"
          >
            <Phone size={18} className="text-[#CEA741] mt-0.5 shrink-0" />
            <span>+1 234 567 890</span>
          </a>
        </li>
        <li className="flex items-start gap-3">
            <MapPin size={18} className="text-[#CEA741] mt-0.5 shrink-0" />
            <span className="max-w-[200px] leading-relaxed">123 Mining St, Nairobi, Kenya</span>
        </li>
      </ul>
    </div>
  );
}