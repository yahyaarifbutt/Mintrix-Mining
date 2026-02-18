import Badge from "./Badge";

export default function LifecycleHeader() {
  return (
    <div className="sticky top-32 space-y-6">
      <Badge text="Our Methodology" />
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#252723] leading-tight tracking-tight">
        The Mintrix <br />
        <span className="text-[#CEA741]">Operational Lifecycle</span>
      </h2>
      <div className="relative pl-6 pt-2">
        <div className="absolute left-0 top-2 bottom-0 w-1 bg-gradient-to-b from-[#CEA741] to-transparent rounded-full" />
        <p className="text-gray-600 text-lg leading-relaxed">
          We don't just extract resources; we manage the entire lifecycle of the mine. From the first geological survey to the final tree planted during reclamation, our comprehensive approach guarantees efficiency, profitability, and sustainability at every stage.
        </p>
      </div>
    </div>
  );
}
