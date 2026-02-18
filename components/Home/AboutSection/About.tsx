import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="relative py-28 px-6 bg-[#ffffff] overflow-hidden">
      
      {/* Subtle Gold Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cea741] opacity-5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cea741] opacity-5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}
