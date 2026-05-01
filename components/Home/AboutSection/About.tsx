import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    // CHANGED: Replaced py with specific pt and pb. Tighter top, relaxed bottom.
    <section className="relative pt-8 lg:pt-10 pb-16 lg:pb-24 px-6 bg-[#ffffff] overflow-hidden">
      
      {/* 1. High-End Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D1A74110_1px,transparent_1px),linear-gradient(to_bottom,#D1A74110_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      {/* 2. Layered Ambient Gold Glows (Animated) */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#D1A741] to-transparent opacity-5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#D1A741] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}