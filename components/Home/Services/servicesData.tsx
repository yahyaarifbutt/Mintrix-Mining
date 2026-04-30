import { ReactNode } from "react";

// 1. Define the exact structure of your data
export interface ServiceData {
  id: number;
  title: string;
  image: string;
  icon: ReactNode;
}

// 2. Apply the type to your array with 2 services
export const servicesList: ServiceData[] = [
  {
    id: 1,
    title: "Gold Mining",
    image: "/Images/1.jpg", 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75M3.75 10.125v3.75" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Gold Trading",
    image: "/Images/4.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18 9 11.25l4.306 4.306L21.75 4.5M21.75 4.5H16.5m5.25 0v5.25" />
      </svg>
    ),
  },
];