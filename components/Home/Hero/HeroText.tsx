import HeroButtons from "./HeroButtons";

export default function HeroText() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
        Powering the Future of{" "}
        <span className="text-[#D1A741]">
          Mining
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        Mintrix Mining builds high-performance cryptocurrency and industrial
        mining infrastructure engineered for reliability, efficiency,
        and maximum profitability.
      </p>

      <HeroButtons />
    </div>
  );
}
