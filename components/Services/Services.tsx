import ServicesHero from "@/components/Services/hero/ServicesHero";
import CoreServices from "@/components/Services/CoreServices/CoreServices";
import ServiceApproach from "@/components/Services/services-approach";


import ServiceLifecycle from "@/components/Services/ServiceLifecycle/ServiceLifecycle";
import AboutCTA from "@/components/About/AboutCTA/AboutCTA";
import ContactSupport from "../Home/ContactSupport/ContactSupport";

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden">
      <ServicesHero />
      <CoreServices />
      <ServiceApproach />
      <ServiceLifecycle />
      <AboutCTA />
      <ContactSupport />
    </main>
  );
}
