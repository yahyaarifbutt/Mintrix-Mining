import AboutHero from "./AboutHero/AboutHero";
import AboutMission from "./Mission/AboutMission";
import WhoWeAre from "./WhoWeAreSection/WhoWeAre";
import AboutValues from "./values/AboutValues";
import AboutCTA from "./AboutCTA/AboutCTA";
import ContactSupport from "../Home/ContactSupport/ContactSupport";

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      <AboutHero />
      
      <WhoWeAre />       {/* NEW SECTION INSERTED */}
      <AboutValues />
      <AboutMission />
      <AboutCTA />
       <ContactSupport />
    </main>
  );
}
