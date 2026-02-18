export default function AboutHeroContent() {
  return (
    <div className="relative">

      <div className="absolute -left-6 top-2 w-1 h-24 bg-[#D1A741] rounded-full hidden md:block" />

      <span className="text-sm tracking-widest uppercase text-[#D1A741] font-semibold">
        About Our Company
      </span>

      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#0b0f0d] leading-tight">
        Engineering the Future of
        <span className="block mt-2 text-[#D1A741]">
          Mining Infrastructure
        </span>
      </h1>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        Mintrix Mining specializes in designing and deploying
        high-performance mining infrastructures built for scalability,
        operational efficiency, and long-term reliability.
      </p>

      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Our advisory division provides long-term asset strategies centered on tangible wealth preservation. This is ideal for clients who want to manage risk securely and participate in the global market through a highly structured and professional portfolio allocation.
      </p>
    </div>
  );
}
