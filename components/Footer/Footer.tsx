import Link from "next/link";
import Image from "next/image";
import { FOOTER_DATA } from "./footerData";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] rounded-t-[2rem] overflow-hidden relative flex flex-col mt-12 antialiased shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      
      {/* Subtle Geometric Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <line x1="0%" y1="100%" x2="100%" y2="0%" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="40%" y1="100%" x2="100%" y2="40%" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="70%" y1="100%" x2="100%" y2="70%" stroke="#ffffff" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-8 py-10 md:px-12 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-6">
        
        {/* Left Column */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
          
          {/* Logo Area */}
{/* Logo Area */}
          <Link href="/" className="mb-5 block">
            <Image 
              src="/Images/Mintrix-Kenya.png" /* <-- CHANGE THIS TO YOUR WHITE-TEXT LOGO FILE NAME */
              alt="Mintrix Logo" 
              width={160} 
              height={40} 
              className="object-contain"
              priority
            />
          </Link>

          <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6 max-w-sm">
            {FOOTER_DATA.brand.description}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8">
            {FOOTER_DATA.socials.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Mintrix on ${social.name}`}
                  className="text-white hover:text-[#CEA741] transition-colors duration-300"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>

          <BackToTop />
        </div>

        {/* Spacer Column for Desktop */}
        <div className="hidden lg:block lg:col-span-3"></div>

        {/* Middle Column: Site Map */}
        <div className="md:col-span-3 lg:col-span-2">
          <h3 className="text-white font-semibold mb-4 text-sm">Site Map</h3>
          <ul className="space-y-3">
            {FOOTER_DATA.sitemap.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[#A3A3A3] hover:text-white text-sm transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Legal */}
        <div className="md:col-span-3 lg:col-span-2">
          <h3 className="text-white font-semibold mb-4 text-sm">Legal</h3>
          <ul className="space-y-3">
            {FOOTER_DATA.legal.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[#A3A3A3] hover:text-white text-sm transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#CEA741] py-3.5 px-6 text-center text-black relative z-10 mt-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          Copyright &copy; {new Date().getFullYear()}, Mintrix World. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}