import InfrastructureContent from "./InfrastructureContent";
import InfrastructureShowcase from "./InfrastructureShowcase";

export default function Infrastructure() {
  return (
    <section className="bg-[#ffffff] py-24 px-6 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <InfrastructureContent />
        </div>
        <div className="lg:col-span-7">
          <InfrastructureShowcase />
        </div>
      </div>
    </section>
  );
}
