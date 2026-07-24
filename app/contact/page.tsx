import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us - Nexus Core IT Support",
  description: "Get in touch with Nexus Core for reliable IT consulting and 24/7 support. We are here to help your business grow with expert IT solutions in Bangalore and APAC.",
  openGraph: {
    title: "Contact Nexus Core",
    description: "Ready to transform your IT infrastructure? Contact us today for a consultation.",
    url: "https://www.nexuscoreit.com/contact",
    images: [
      {
        url: "https://www.nexuscoreit.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Nexus Core Contact",
      },
    ],
  },
  alternates: {
    canonical: "https://www.nexuscoreit.com/contact",
  },
};

export default function Contact() {
  return <ContactClient />;
}
