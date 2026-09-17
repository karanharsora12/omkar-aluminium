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
    default: "Omkar Alluminium | Crafting Alluminium Excellence",
    template: "%s | Omkar Alluminium",
  },
  description:
    "Omkar Alluminium delivers premium aluminium solutions including windows, doors, partitions, sliding systems, grills, and powder coating for residential, commercial, and architectural projects in Bhavnagar.",
  keywords: [
    "aluminium windows",
    "aluminium doors",
    "aluminium partitions",
    "sliding windows",
    "aluminium grills",
    "powder coating",
    "aluminium fabrication",
    "aluminium solutions bhavnagar",
    "aluminium contractor bhavnagar",
  ],
  authors: [{ name: "Omkar Alluminium" }],
  creator: "Omkar Alluminium",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omkaralluminium.com",
    siteName: "Omkar Alluminium",
    title: "Omkar Alluminium | Crafting Alluminium Excellence",
    description:
      "Premium aluminium solutions — You Desire, We Display. Windows, doors, partitions, sliding systems, grills & powder coating in Bhavnagar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar Alluminium | Crafting Alluminium Excellence",
    description:
      "Premium aluminium solutions — You Desire, We Display. Windows, doors, partitions, sliding systems, grills & powder coating in Bhavnagar.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://omkaralluminium.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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
              name: "Omkar Alluminium",
              description:
                "Premium aluminium solutions including windows, doors, partitions, sliding systems, grills, and powder coating.",
              url: "https://omkaralluminium.com",
              telephone: "+91-9427751630",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sidsar Chitra Road, Near HATKESH 2, Opp. Sahjanand Society",
                addressLocality: "Bhavnagar",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Bhavnagar",
              },
              founder: [
                { "@type": "Person", name: "Shaileshbhai Mirza" },
                { "@type": "Person", name: "Uttambhai Mirza" },
              ],
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
              name: "Omkar Alluminium",
              url: "https://omkaralluminium.com",
              logo: "https://omkaralluminium.com/icon.png",
              description:
                "Crafting Alluminium Excellence. You Desire, We Display.",
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
