import AboutMissionContent from "./AboutMissionContent";
import AboutMissionCard from "./AboutMissionCard";

export default function AboutMission() {
  return (
    <section className="pt-12 md:pt-16 pb-20 px-6 bg-[#f9f9f7]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <AboutMissionContent />
        <AboutMissionCard />
      </div>
    </section>
  );
}
