export default function MissionContent() {
  const missionPoints = [
    { label: "Innovation", detail: "We drive technological advancement in mining." },
    { label: "Sustainability", detail: "Committed to eco-friendly and energy-efficient solutions." },
    { label: "Reliability", detail: "Ensuring uninterrupted performance for our clients." },
  ];

  return (
    <div className="space-y-10 text-[#1b211d] font-hero">
      {/* Headings */}
      <div className="space-y-6">
        <h3 className="text-[#cea741] font-semibold tracking-[0.25em] uppercase text-sm">
          Our Mission
        </h3>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Driving the Future of{" "}
          <span className="text-[#252723] font-light italic">
            Mining Technology.
          </span>
        </h2>

        <div className="w-20 h-[2px] bg-[#cea741]" />
      </div>

      <p className="text-lg leading-relaxed opacity-80 max-w-md">
        At Mintrix Mining, our mission is to combine cutting-edge technology with industry expertise to create mining solutions that are efficient, sustainable, and reliable worldwide.
      </p>

      {/* Mission Points */}
      <div className="space-y-6 pt-4">
        {missionPoints.map((item, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-[#cea741]" />
            <div>
              <h4 className="font-bold uppercase tracking-wide text-sm">
                {item.label}
              </h4>
              <p className="text-sm opacity-70">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
