import Link from "next/link";
import Image from "next/image";
import { FOOTER_DATA } from "./footerData";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] rounded-t-[2rem] overflow-hidden relative flex flex-col mt-8 antialiased shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      
      {/* Top Section - Aggressively reduced padding to py-5 and md:py-6 for an ultra-slim footprint */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-8 py-5 md:px-12 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6">
        
        {/* Left Column */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
          
          {/* Logo Area - Shrunk the logo significantly to allow the footer to collapse */}
          <Link href="/" className="mb-3 block transform hover:opacity-90 transition-opacity">
            <Image 
              src="/Images/logo1.png" 
              alt="Mintrix Logo" 
              width={115} /* Significantly reduced width */
              height={28} /* Significantly reduced height */
              className="object-contain"
              priority
            />
          </Link>

          {/* Reduced margin-bottom */}
          <p className="text-[#A3A3A3] text-sm leading-relaxed mb-4 max-w-sm">
            {FOOTER_DATA.brand.description}
          </p>

          {/* Social Icons - Reduced margin-bottom */}
          <div className="flex items-center gap-4 mb-5">
            {FOOTER_DATA.socials.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Mintrix on ${social.name}`}
                  className="text-[#A3A3A3] hover:text-[#CEA741] transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 drop-shadow-md hover:drop-shadow-[0_0_8px_rgba(206,167,65,0.4)]"
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
          {/* Tighter margin below heading */}
          <h3 className="text-white font-semibold mb-2.5 text-sm tracking-wide">Site Map</h3>
          {/* Tighter spacing between list items */}
          <ul className="space-y-2">
            {FOOTER_DATA.sitemap.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[#A3A3A3] hover:text-[#CEA741] text-sm transition-colors duration-300 relative group inline-block"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#CEA741] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Legal */}
        <div className="md:col-span-3 lg:col-span-2">
          {/* Tighter margin below heading */}
          <h3 className="text-white font-semibold mb-2.5 text-sm tracking-wide">Legal</h3>
          {/* Tighter spacing between list items */}
          <ul className="space-y-2">
            {FOOTER_DATA.legal.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[#A3A3A3] hover:text-[#CEA741] text-sm transition-colors duration-300 relative group inline-block"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#CEA741] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar - Made slightly thinner */}
      <div className="w-full bg-[#CEA741] py-2.5 px-6 text-center text-black relative z-10 mt-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          Copyright &copy; {new Date().getFullYear()}, Mintrix World. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}