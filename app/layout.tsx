import { GoogleTagManager } from '@next/third-parties/google'; 
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Mintrix Mining",
  description: "Professional mining solutions",
  verification: {
    google: "3fUb5B1jBcH65KzPPGp7pSNboqv2LyJgE-gcrJepI08",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5JCPBKRS" /> 
      <body className="bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}