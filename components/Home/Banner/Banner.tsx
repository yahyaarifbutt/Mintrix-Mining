import Image from "next/image";
import BannerContent from "./BannerContent";

export default function Banner() {
  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden bg-[#1d221c]">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/mining.png" // Replace with your best HD mining image
          alt="Industrial Mining Operations"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Multi-stage overlay for professional depth */}
        <div className="absolute inset-0 bg-[#1d221c]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d221c] via-[#1d221c]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <BannerContent />
      </div>
    </section>
  );
}