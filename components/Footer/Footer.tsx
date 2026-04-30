import Link from "next/link";
import Image from "next/image";
import { FOOTER_DATA } from "./footerData";
import BackToTop from "./BackToTop";
import NewsletterForm from "./NewsLetter";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] relative flex flex-col mt-8 antialiased border-t border-white/5">
      {/* Premium subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#000000] opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-6 pt-12 pb-6 md:px-12">
        
        {/* Main Grid Section - Spread across 5 logical columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Column 1: Brand & Socials (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start pr-2">
            <Link href="/" className="mb-4 block transform hover:opacity-80 transition-opacity duration-300">
              <Image 
                src="/Images/logo1.png" 
                alt="Mintrix Logo" 
                width={120} 
                height={30} 
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-[#888888] text-xs leading-relaxed mb-6 font-light">
              {FOOTER_DATA.brand.description}
            </p>
            {/* INCREASED GAP AND ICON SIZE HERE */}
            <div className="flex items-center gap-5"> 
              {FOOTER_DATA.socials.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Mintrix on ${social.name}`}
                    className="text-[#666666] hover:text-[#CEA741] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={24} strokeWidth={1.5} /> {/* Size increased to 24 */}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-white font-medium mb-4 text-xs tracking-widest uppercase">Site Map</h3>
            <ul className="space-y-2.5">
              {FOOTER_DATA.sitemap.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#888888] hover:text-[#CEA741] text-xs transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#CEA741] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-medium mb-4 text-xs tracking-widest uppercase">Legal</h3>
            <ul className="space-y-2.5">
              {FOOTER_DATA.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#888888] hover:text-[#CEA741] text-xs transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#CEA741] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-medium mb-4 text-xs tracking-widest uppercase">Contact</h3>
            <FooterContact />
          </div>

          {/* Column 5: Newsletter (Span 3) */}
          <div className="lg:col-span-3 lg:pl-2">
            <h3 className="text-white font-medium mb-4 text-xs tracking-widest uppercase">Stay Updated</h3>
            <NewsletterForm />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#666666] text-xs tracking-wide font-light">
            Copyright &copy; {new Date().getFullYear()} <span className="text-white font-medium">Mintrix World</span>. All Rights Reserved.
          </p>
          <BackToTop />
        </div>

      </div>
    </footer>
  );
}