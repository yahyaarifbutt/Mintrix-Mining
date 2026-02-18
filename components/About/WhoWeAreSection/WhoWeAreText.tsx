export default function WhoWeAreText() {
  return (
    <div className="space-y-6 md:pr-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b0f0d] relative inline-block">
        Who We Are
        {/* subtle gold underline accent */}
        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#CEA741] rounded-full"></span>
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed md:text-lg">
        At Mintrix Mining, we are a team of engineers, strategists, and visionaries 
        committed to building next-generation mining infrastructures. 
        We combine industrial-grade engineering with innovative technology to deliver solutions that are reliable, efficient, and future-ready.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed md:text-lg">
        Our ethos is rooted in trust, transparency, and long-term partnerships. 
        Every project we undertake is designed to maximize value, ensure sustainability, 
        and drive operational excellence in the ever-evolving digital mining landscape.
      </p>
    </div>
  );
}
