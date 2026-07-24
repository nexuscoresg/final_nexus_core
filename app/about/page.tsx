import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us - Nexus Core IT Solutions",
  description: "Learn about Nexus Core's mission to provide enterprise-grade IT support, network solutions, and digital transformation services in Bangalore and APAC.",
  openGraph: {
    title: "About Nexus Core - Enterprise IT Solutions",
    description: "Building the future of enterprise IT with reliable support and innovative solutions.",
    url: "https://www.nexuscoreit.com/about",
    images: [
      {
        url: "https://www.nexuscoreit.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Nexus Core About",
      },
    ],
  },
  alternates: {
    canonical: "https://www.nexuscoreit.com/about",
  },
};

export default function About() {
  return <AboutClient />;
}
