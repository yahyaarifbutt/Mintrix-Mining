import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function FooterSocials() {
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-[#CEA741] font-bold uppercase tracking-[0.15em] mb-5 text-xs md:text-sm">
        Follow
      </h4>
      {/* 2x2 Grid on tiny screens, Row on larger */}
      <div className="grid grid-cols-2 gap-3">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
          <Link 
            key={i} 
            href="#" 
            className="
              w-9 h-9 flex items-center justify-center 
              bg-[#252723] border border-white/5 rounded-lg
              text-[#f5f5f5]/60 hover:text-[#010301] hover:bg-[#CEA741] hover:border-[#CEA741] 
              transition-all duration-300
            "
          >
            <Icon size={16} />
          </Link>
        ))}
      </div>
    </div>
  );
}