import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export const FOOTER_DATA = {
  brand: {
    name: "MINTRIX",
    description: "Advancing the future of sustainable mining and digital asset infrastructure across the African continent.",
  },
  sitemap: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Mining Operations", href: "/operations" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Compliances", href: "/compliance" },
  ],
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/mintrix/", Icon: Linkedin },
    { name: "Facebook", href: "https://www.facebook.com/mintrix.world", Icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/mintrix.world/", Icon: Instagram },
  ],
  contact: {
    email: "info@mintrix.world",
    phone: "+254 20 123 4567",
    address: "123 Mining Infrastructure Hub, Nairobi, Kenya",
    Icons: { MapPin, Phone, Mail }
  }
} as const;