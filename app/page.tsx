import HomeClient from "./HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus Core IT Smart Hands & Support, Bangalore",
  description: "IT Smart Hands, Ekahau WiFi surveys, and 24/7 managed IT support in Bangalore and APAC. Enterprise-grade managed IT services.",
  keywords: ["IT Smart Hands Bangalore", "WiFi Survey Services", "Ekahau WiFi", "Managed IT Support"],
  openGraph: {
    type: "website",
    url: "https://www.nexuscoreit.com/",
    title: "Nexus Core IT Smart Hands & Support, Bangalore",
    description: "IT Smart Hands, Ekahau WiFi surveys, and 24/7 managed IT support in Bangalore and APAC.",
    images: [
      {
        url: "https://www.nexuscoreit.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Nexus Core",
      },
    ],
  },
  alternates: {
    canonical: "https://www.nexuscoreit.com/",
  },
};

export default function Home() {
  return <HomeClient />;
}
