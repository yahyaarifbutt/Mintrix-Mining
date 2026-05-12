import { Metadata } from "next";
import MiningOperationsClient from "@/components/mining-operations/MiningOperationsClient";

export const metadata: Metadata = {
  title: "Mining Operations | Mintrix — Gold & Mineral Extraction in Kenya",
  description:
    "Mintrix operates active gold and mineral mining sites in Kenya. We manage the full extraction and processing pipeline — supplying directly to global buyers with verified quality and consistent output.",
  keywords: ["gold mining operations Kenya", "mineral extraction company", "direct mine supply"],
  alternates: {
    canonical: "/mining-operations",
  },
};

export default function MiningOperationsPage() {
  return <MiningOperationsClient />;
}