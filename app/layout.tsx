import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexuscoreit.com/'),
  title: {
    default: "Nexus Core IT Smart Hands & Support, Bangalore",
    template: "%s | Nexus Core",
  },
  description: "IT Smart Hands, Ekahau WiFi surveys, and 24/7 managed IT support in Bangalore and APAC.",
  keywords: [
    // Core
    "IT Smart Hands Bangalore", "WiFi Survey Services Bangalore", "Ekahau WiFi India", "Data Center Support Bangalore", "Enterprise IT Solutions India", "Managed IT Services APAC", "IOR EOR Services India", "IOT Solutions Bangalore",
    // Wireless Keywords
    "ekahau wireless", "ekahau wifi", "wireless network site survey", "wifi heat map", "wifi network survey", "wifi heatmap survey", "ekahau heatmapper", "ekahau wifi survey", "ekahau wireless survey", "best wifi survey tool", "heatmapper wifi", "heatmap wifi", "wireless heat map", "predictive wireless survey", "predictive wifi survey", "wireless site survey", "best wireless survey", "ekahau wifi planner", "wifi site survey", "ekahau wifi heatmap", "ekahau heatmapper", "wifi predictive survey tool", "passive wifi survey", "ekahau wifi design", "active wifi survey", "best wifi site survey tools", "wifi heatmap survey", "wifi site survey", "passive wireless survey", "ekahau wifi heatmap", "ekahau wireless survey", "ekahau wireless survey tool", "wireless heat map", "ekahau predictive survey", "ekahau wifi planner", "ekahau wifi design", "predictive wifi survey",
    // IT Services Keywords
    "it support service", "it service providers", "it services and it consulting", "it consulting services", "it consulting", "it solutions provider", "it service company", "it service providers", "it networking services", "it support and services company", "it support infrastructure", "it service company", "it professional services", "professional it services", "it services for business", "it helpdesk support", "it support help desk", "it services singapore", "it solutions provider", "it helpdesk service", "it helpdesk support", "it professional services", "it support infrastructure", "it infrastructure service provider", "it consulting", "it services and it consulting", "it consulting services", "it support service", "it support help desk", "it helpdesk service", "it networking services", "it infrastructure service provider", "professional it services", "it data center solutions",
    // Managed Services Keywords
    "managed service provider", "managed services consulting", "managed technology services", "managed solution provider", "managed service provider", "managed service solutions", "managed services consulting", "managed consulting services", "managed network services providers", "managed service solutions", "managed solution provider", "managed service provider company", "managed consulting services", "managed service providers near me", "managed technology services", "managed service provider company", "managed network services providers",
    // Cloud Keywords
    "cloud consulting firm", "cloud services near me", "cloud services singapore", "singapore cloud service provider", "cloud services in singapore"
  ],
  authors: [{ name: "Nexus Core" }],
  creator: "Nexus Core",
  publisher: "Nexus Core",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nexuscoreit.com/",
    title: "Nexus Core IT Smart Hands & Support, Bangalore",
    description: "IT Smart Hands, Ekahau WiFi surveys, and 24/7 managed IT support in Bangalore and APAC.",
    siteName: "Nexus Core",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Core IT Smart Hands & Support, Bangalore",
    description: "IT Smart Hands, Ekahau WiFi surveys, and 24/7 managed IT support in Bangalore and APAC.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.nexuscoreit.com/",
  },
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TC8PPXVV');`,
          }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TC8PPXVV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <JsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
