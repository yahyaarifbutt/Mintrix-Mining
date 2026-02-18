import MissionContent from "./MissionContent";
import MissionImage from "./MissionImage";

export default function Mission() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <MissionContent />
        </div>
        <div className="lg:col-span-7">
          <MissionImage />
        </div>
      </div>
    </section>
  );
}
