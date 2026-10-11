import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { hotel } from "@/data/hotel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arunikaresort.id"),
  title: {
    default: `${hotel.name} — ${hotel.tagline}`,
    template: `%s · ${hotel.name}`,
  },
  description: hotel.intro,
  keywords: [
    "resort Ubud",
    "hotel Bali",
    "boutique resort",
    "spa Ubud",
    "Arunika Resort & Spa",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: hotel.name,
    title: `${hotel.name} — ${hotel.tagline}`,
    description: hotel.intro,
    images: [{ url: "/og.jpg", width: 1500, height: 833, alt: hotel.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${hotel.name} — ${hotel.tagline}`,
    description: hotel.intro,
    images: ["/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: hotel.name,
  description: hotel.intro,
  telephone: hotel.phoneDisplay,
  email: hotel.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Sanggingan No. 88",
    addressLocality: "Ubud",
    addressRegion: "Bali",
    postalCode: "80571",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -8.5069, longitude: 115.2625 },
  starRating: { "@type": "Rating", ratingValue: "4.9", bestRating: "5" },
  checkinTime: hotel.checkIn,
  checkoutTime: hotel.checkOut,
  numberOfRooms: 32,
  priceRange: "Rp 1.250.000 – Rp 5.500.000",
  image: "https://arunikaresort.id/og.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="grain min-h-dvh bg-sand text-ink antialiased">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-jade focus:px-4 focus:py-2 focus:text-sm focus:text-sand"
        >
          Lewati ke konten
        </a>
        <Nav />
        <main id="konten">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
