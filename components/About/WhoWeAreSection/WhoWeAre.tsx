import WhoWeAreText from "./WhoWeAreText";
import WhoWeAreImage from "./WhoWeAreImage";

export default function WhoWeAre() {
  return (
    <section className="relative py-24 px-6 bg-[#f9f9f7] overflow-hidden">
      
      {/* Diagonal background for uniqueness */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#CEA741]/5 -skew-y-6 origin-top-left pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <WhoWeAreText />
        <WhoWeAreImage />
      </div>
    </section>
  );
}
