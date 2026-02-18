import { ReactNode } from "react";
import {
  Globe,
  Pickaxe,
  Factory,
  Leaf,
  Truck,
  Zap,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export const servicesData: ServiceItem[] = [
  {
    title: "Mineral Exploration & Surveying",
    description:
      "Utilizing advanced geological surveying and 3D modeling to identify viable mineral deposits with high precision and minimal environmental impact.",
    icon: <Globe size={28} strokeWidth={1.5} />,
  },
  {
    title: "Surface & Underground Mining",
    description:
      "Executing safe, high-yield extraction operations using state-of-the-art heavy machinery and automated underground technologies.",
    icon: <Pickaxe size={28} strokeWidth={1.5} />,
  },
  {
    title: "Resource Processing & Refining",
    description:
      "Transforming raw extracted materials into high-grade commodities through efficient, sustainable crushing and milling processes.",
    icon: <Factory size={28} strokeWidth={1.5} />,
  },
  {
    title: "Site Rehabilitation",
    description:
      "Restoring mined landscapes to their natural state through comprehensive soil remediation, replanting, and ecological monitoring.",
    icon: <Leaf size={28} strokeWidth={1.5} />,
  },
  {
    title: "Heavy Equipment Leasing",
    description:
      "Providing a robust fleet of maintained, high-performance mining equipment and vehicles for short-term and long-term project phases.",
    icon: <Truck size={28} strokeWidth={1.5} />,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Ensuring the secure, timely, and cost-effective transport of raw and refined materials from the site to global end-markets.",
    icon: <Zap size={28} strokeWidth={1.5} />,
  },
];
