import Image from "next/image";


export default function ServicesHeroImage() {
  return (
    <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
      {/* Architectural Offset Frame */}
      <div className="absolute -inset-4 md:-inset-6 border-2 border-[#CEA741]/20 rounded-[2.5rem] translate-x-6 translate-y-6 -z-10 transition-transform duration-700 hover:translate-x-4 hover:translate-y-4" />

      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl group">
        <div className="absolute inset-0 bg-[#CEA741]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay pointer-events-none" />
        <Image
          src="/Images/Services-Hero.png"
          alt="Mining Services"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

    </div>
  );
}
