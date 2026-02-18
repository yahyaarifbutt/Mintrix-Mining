import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 pt-3">
      <Link
        href="/services"
        className="
            bg-[#D1A741]
            text-[#0b0f0d] 
            px-10 py-4
            rounded-xl
            font-bold
            shadow-lg shadow-[#D1A741]/30
            hover:bg-[#e0b84f]
            hover:shadow-2xl
            hover:-translate-y-1
            transition-all duration-300
          "

      >
        Explore Services
      </Link>

      <Link
        href="/contact"
        className="
          border-2 border-[#D1A741]
          text-[#D1A741]
          px-10 py-4
          rounded-xl
          font-bold
          hover:bg-[#D1A741]
          hover:text-[#0b0f0d]
          transition-all duration-300
        "

      >
        Contact Us
      </Link>
    </div>
  );
}