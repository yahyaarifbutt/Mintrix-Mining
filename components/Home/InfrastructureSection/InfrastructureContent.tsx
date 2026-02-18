export default function InfrastructureContent() {
  const features = [
    { label: "Redundancy", detail: "N+1 Power Grid Backup" },
    { label: "Security", detail: "Biometric AI Surveillance" },
    { label: "Cooling", detail: "Liquid Immersion Ready" },
  ];

  return (
    <div className="space-y-10 text-[#1b211d] font-hero">
      {/* Headings */}
      <div className="space-y-6">
        <h3 className="text-[#cea741] font-semibold tracking-[0.25em] uppercase text-sm font-hero">
          Physical Assets
        </h3>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-hero">
          Where Digital Assets Meet{" "}
          <span className="text-[#252723] font-light italic font-hero">
            Heavy Industry.
          </span>
        </h2>

        <div className="w-20 h-[2px] bg-[#cea741]" />
      </div>

      {/* Paragraph */}
      <p className="text-lg leading-relaxed text-[#1b211d] opacity-80 max-w-md font-hero">
        Our facilities are engineered for the extreme. From the Kenyan highlands to global tech hubs, we deploy proprietary cooling and power systems that set the gold standard for uptime.
      </p>

      {/* Features List */}
      <div className="space-y-6 pt-4">
        {features.map((item, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-[#cea741]" />
            <div>
              <h4 className="font-bold text-[#1b211d] uppercase tracking-wide text-sm font-hero">
                {item.label}
              </h4>
              <p className="text-[#252723] text-sm opacity-70 font-hero">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
