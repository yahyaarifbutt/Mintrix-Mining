// components/services-approach/FeatureItem.tsx

interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureItem({
  title,
  description,
  icon,
}: FeatureItemProps) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#CEA741] group-hover:bg-[#CEA741] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#252723] mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
