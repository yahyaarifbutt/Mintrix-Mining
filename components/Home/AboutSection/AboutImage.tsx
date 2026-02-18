import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative flex justify-center">

      {/* Gold Accent Border Layer */}
      <div className="absolute -inset-4 bg-[#cea741] rounded-3xl opacity-20 blur-2xl" />

      {/* Main Image */}
      <div className="relative rounded-3xl overflow-hidden border border-[#cea741]/30 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
        <Image
          src="/Images/Digital-mining.jpg"
          alt="Mining Operations"
          width={600}
          height={700}
          className="object-cover h-[520px] w-full"
        />
      </div>

    </div>
  );
}
