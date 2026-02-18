export default function ServicesHeroText() {
  return (
    <div className="w-full lg:w-1/2 space-y-8">
      {/* Premium Eyebrow Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#CEA741] animate-pulse" />
        <span className="text-[#CEA741] text-xs font-bold tracking-widest uppercase">
          Premium Infrastructure
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-[#252723] leading-tight">
        Our Mining Services
      </h1>

      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#CEA741] to-transparent rounded-full" />
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          We provide comprehensive mining solutions, combining advanced technology with decades of experience. Our team ensures efficiency, safety, and sustainability in every project we undertake.
        </p>
      </div>

      <div className="pt-2">
        <button className="bg-[#CEA741] text-[#1b211d] py-4 px-10 rounded-xl font-bold uppercase tracking-wider shadow-[0_8px_30px_rgb(206,167,65,0.25)] hover:bg-[#dcb54c] hover:shadow-[0_8px_30px_rgb(206,167,65,0.4)] transition-all duration-300 transform hover:-translate-y-1">
          Learn More
        </button>
      </div>
    </div>
  );
}
