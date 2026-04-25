import Hero from "./Hero/Hero";
import ServicesSection from "./Services/ServicesSection"; // <-- Imported the new section
import About from "./AboutSection/About";
import Features from "./Features/Features";
import Infrastructure from "./InfrastructureSection/Infrastructure";
import Vision from "./Vision/Vision"; 
import Mission from "./Mission/Mission";
import ContactSupport from "./ContactSupport/ContactSupport"; 
import Stats from "@/components/Home/Stats";
import Banner from "./Banner/Banner"; 

export default function HomeComponent() {
  return (
    <main className="bg-white">
      {/* 01. Introduction */}
      <Hero />
      
      {/* 01.5 Core Offerings */}
      <ServicesSection /> {/* <-- Added right after the Hero section */}
      
      {/* 02. Identity & Story */}
      <About />
      
      {/* 03. Technical Capabilities (Dark) */}
      <Features />
      
      {/* 04. Physical Evidence & Assets */}
      <Infrastructure />

      <Stats />
      
      {/* 05. Future Strategy & Goals */}
      <Vision /> 
      
      {/* 06. High-Impact Closing Statement (Deep Dark) */}
      <Banner />

       {/* 07. Our Mission */}
      <Mission /> 

      <ContactSupport />

    </main>
  );
}