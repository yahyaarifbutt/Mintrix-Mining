import ServicesHeroText from "./ServicesHeroText";
import ServicesHeroImage from "./ServicesHeroImage";

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-[#fafafa] overflow-hidden pt-20 pb-32">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CEA741]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gray-200/50 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <ServicesHeroText />
          <ServicesHeroImage />
        </div>
      </div>
    </section>
  );
}
