import Image from "next/image";

export default function WhoWeAreImage() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
      {/* Gold glow accent */}
      <div className="absolute -inset-4 bg-[#CEA741]/10 blur-3xl rounded-3xl pointer-events-none" />

      <Image
        src="/Images/who-we-are.jpeg"
        alt="Our Team"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}
