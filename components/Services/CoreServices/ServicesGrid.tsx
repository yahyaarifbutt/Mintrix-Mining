import ServiceCard from "./ServiceCard";
import { servicesData } from "./services.data";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
}
