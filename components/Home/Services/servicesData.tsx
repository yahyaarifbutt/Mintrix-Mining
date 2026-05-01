import { ReactNode } from "react";

export interface ServiceData {
  id: number;
  title: string;
  desc: string;
  image: string;
  icon: ReactNode;
  location: string;
  fact: string;
}

export const servicesList: ServiceData[] = [
  {
    id: 1,
    title: "Rosterman Site 1",
    location: "Rosterman, Kakamega County, KE",
    desc: "Operational gold mining site delivering consistent output through modern extraction methods.",
    fact: "Geologically proven to hold exceptionally rich, high-yield gold veins.",
    image: "/Images/site1.jpg", 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Rosterman Site 2",
    location: "Rosterman, Kakamega County, KE",
    desc: "Growing production site focused on expanding capacity and improving processing efficiency.",
    fact: "Positioned on a renowned gold belt with vast, highly concentrated reserves.",
    image: "/Images/site2.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ruiro Pocket Site",
    location: "Ruiro Pocket Site, KE",
    desc: "Newly developed site targeting gold and high-value minerals with scalable output potential.",
    fact: "Recent surveys confirm a massive, exceptionally dense concentration of untapped gold deposits.",
    image: "/Images/site3.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];