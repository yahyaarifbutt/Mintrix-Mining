import Image from "next/image";

export default function ContactImage() {
  return (
    <div className="relative w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Subtle glow behind the image */}
      <div className="absolute -inset-6 bg-[#CEA741]/10 blur-3xl rounded-3xl pointer-events-none" />

      <Image
        src="/Images/contact.jpg" // replace with your hero image
        alt="Contact Us"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}
