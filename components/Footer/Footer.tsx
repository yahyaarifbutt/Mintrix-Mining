import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="bg-[#010301] text-white relative overflow-hidden border-t border-[#CEA741]/20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CEA741]/40 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#CEA741]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        
        {/* Mobile: Grid (2 cols for Links/Socials, 1 col for Contact) */}
        {/* Desktop: Grid (3 cols equal width) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 md:gap-12 mb-12">
          
          {/* Col 1: Quick Links */}
          <div className="col-span-1">
             <FooterLinks />
          </div>

          {/* Col 2: Socials (Next to Links on Mobile) */}
          <div className="col-span-1">
             <FooterSocials />
          </div>

          {/* Col 3: Contact (Full width on Mobile, Col 3 on Desktop) */}
          <div className="col-span-2 md:col-span-1 mt-2 md:mt-0 pt-8 md:pt-0 border-t border-[#252723] md:border-none">
             <FooterContact />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#252723] pt-6 flex flex-col md:flex-row justify-between items-center text-[#f5f5f5]/40 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Mintrix Mining.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}