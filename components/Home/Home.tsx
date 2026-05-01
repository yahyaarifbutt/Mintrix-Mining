import { Metadata } from "next";
import Hero from "./Hero/Hero";
import ServicesSection from "./Services/ServicesSection"; 
import About from "./AboutSection/About";
import Features from "./Features/Features";
import Infrastructure from "./InfrastructureSection/Infrastructure";
import Stats from "@/components/Home/Stats";
import WhyMintrix from "./WhyMintrix/WhyMintrix"; // <-- Import the new section
import Banner from "./Banner/Banner"; 
import ContactSupport from "./ContactSupport/ContactSupport"; 

export const metadata: Metadata = {
  title: "Mintrix | Mining & Commodity Trading Company",
  description: "Mintrix is a mining and commodity trading company operating in Kenya. We supply gold, copper, lithium, ruby, and industrial minerals directly to global buyers.",
  keywords: "commodity trading company, mining company kenya, gold supplier, lithium supplier, copper trading, ruby trading, mineral supply",
};

export default function HomeComponent() {
  return (
    <main className="bg-white">
      <Hero />
      <ServicesSection /> 
      <About />
      <Features />
      <Infrastructure />
      <Stats />
      
      {/* BRAND NEW SECTION */}
      <WhyMintrix /> 
      
      <Banner />
      <ContactSupport />
    </main>
  );
}