import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/Images/logo.png"
        alt="Mintrix Mining Logo"
        width={75}
        height={75}
        priority
        className="w-[75px] h-auto"
      />
    </Link>
  );
}