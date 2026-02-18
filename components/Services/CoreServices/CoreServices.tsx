import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function CoreServices() {
  return (
    <section className="w-full bg-white py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}
