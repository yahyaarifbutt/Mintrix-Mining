import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/Images/logo.png"
        alt="Mintrix Mining Logo"
        width={85}
        height={85}
        priority
        className={`
          h-auto object-contain transform group-hover:scale-105 transition-all duration-500 ease-in-out
          ${isScrolled ? "w-[65px]" : "w-[85px]"} 
        `}
      />
    </Link>
  );
}