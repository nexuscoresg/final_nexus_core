import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services & Solutions in Bangalore | Nexus Core",
  description: "Comprehensive IT services in Bangalore: WiFi Site Surveys, IT Smart Hands Support, 24/7 Maintenance, Cloud & Data Center solutions, and IoT integration across APAC.",
  openGraph: {
    title: "Enterprise IT Services & Solutions Bangalore | Nexus Core",
    description: "From Ekahau WiFi surveys to 24/7 smart hands maintenance, we provide end-to-end IT solutions for businesses in Bangalore and across APAC.",
    url: "https://www.nexuscoreit.com/what-we-offer",
    images: [
      {
        url: "https://www.nexuscoreit.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Nexus Core Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.nexuscoreit.com/what-we-offer",
  },
};

export default function WhatWeOffer() {
  return <ServicesClient />;
}
