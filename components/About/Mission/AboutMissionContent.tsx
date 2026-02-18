export default function AboutMissionContent() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#0b0f0d] relative inline-block">
        Our Mission
        {/* subtle gold underline */}
        <span className="absolute -bottom-1 left-0 w-16 h-1 bg-[#cea741] rounded-full"></span>
      </h2>

      <p className="mt-4 text-gray-700 leading-relaxed text-lg md:text-lg">
        At Mintrix Mining, our mission is to design and deploy
        high-efficiency mining infrastructures that maximize
        operational performance while minimizing risk.
      </p>

      <p className="mt-3 text-gray-700 leading-relaxed text-lg md:text-lg">
        We combine industrial-grade engineering with strategic
        optimization to ensure sustainable and profitable
        mining operations for our clients. We offer performance
        participation models anchored in real activity and physical
        gold holdings. This is ideal for investors who want to
        grow capital securely and participate in the gold market
        without the risks found in a leveraged or speculative trading account.
      </p>
    </div>
  );
}
