// app/commodity-trading/metals/lithium/page.tsx
import { Metadata } from "next";
import LithiumHero from "@/components/Lithium/LithiumHero";
import LithiumSupply from "@/components/Lithium/LithiumSupply";
import LithiumApplications from "@/components/Lithium/LithiumApplications";
import LithiumWhyMintrix from "@/components/Lithium/LithiumWhyMintrix";

export const metadata: Metadata = {
  title: "Lithium Supply & Trading | Mintrix — Battery-Grade Lithium from Africa",
  description: "Mintrix supplies battery-grade lithium to EV manufacturers, energy storage producers, and chemical processors. Traceable African source with scalable volume.",
  keywords: "lithium supplier Africa, buy lithium spodumene, battery grade lithium supply, EV lithium procurement",
};

export default function LithiumTradingPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#D1A741]/30 selection:text-white">
      <LithiumHero />
      <LithiumSupply />
      <LithiumApplications />
      <LithiumWhyMintrix />
    </main>
  );
}