import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Omkar Aluminium | Precision in Aluminium. Built to Last.",
    template: "%s | Omkar Aluminium",
  },
  description:
    "Omkar Aluminium delivers premium aluminium solutions including doors, windows, partitions, facades, and custom fabrication for residential, commercial, and architectural projects.",
  keywords: [
    "aluminium doors",
    "aluminium windows",
    "aluminium fabrication",
    "aluminium partitions",
    "aluminium facade",
    "custom aluminium work",
    "aluminium solutions",
    "aluminium contractor",
  ],
  authors: [{ name: "Omkar Aluminium" }],
  creator: "Omkar Aluminium",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omkeraluminium.com",
    siteName: "Omkar Aluminium",
    title: "Omkar Aluminium | Precision in Aluminium. Built to Last.",
    description:
      "Premium aluminium solutions for modern homes, commercial spaces and architectural projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar Aluminium | Precision in Aluminium. Built to Last.",
    description:
      "Premium aluminium solutions for modern homes, commercial spaces and architectural projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://omkeraluminium.com",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Omkar Aluminium",
              description:
                "Premium aluminium solutions including doors, windows, partitions, facades, and custom fabrication.",
              url: "https://omkeraluminium.com",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "",
                addressRegion: "",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Omkar Aluminium",
              url: "https://omkeraluminium.com",
              logo: "https://omkeraluminium.com/logo.png",
              description:
                "Precision in Aluminium. Built to Last.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
