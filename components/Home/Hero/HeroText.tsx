import HeroButtons from "./HeroButtons";

export default function HeroText() {
  return (
    <div className="space-y-8 max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
        Extracting Wealth, <br />
        <span className="text-[#D1A741]">
          Fueling Progress.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        Mintrix World specializes in precious metal exploration, industrial excavation, and secure investment opportunities across the resource-rich fields of Kenya.
      </p>

      <HeroButtons />
    </div>
  );
}