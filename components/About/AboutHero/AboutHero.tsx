import AboutHeroContent from "./AboutHeroContent";
import AboutHeroImage from "./AboutHeroImage";

export default function AboutHero() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <AboutHeroContent />
        <AboutHeroImage />
      </div>
    </section>
  );
}
