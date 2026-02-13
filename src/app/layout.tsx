import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Modern font replacement
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://webkite.online"),
  title: {
    default: "Jasa Pembuatan Website Pontianak | Webkite",
    template: "%s | Webkite",
  },
  description:
    "Jasa pembuatan website profesional di Pontianak. Spesialis website Ekspor berstandar global, Toko Online otomatis, dan profil bisnis untuk segala jenis industri.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://webkite.online",
    title: "Jasa Pembuatan Website & Aplikasi Professional",
    description:
      "Bangun website dan aplikasi impian Anda bersama kami. Teknologi terkini Next.js, React Native, & Flutter.",
    siteName: "Webkite",
    images: [
      {
        url: "/image/og-webkite.png", // Path ke file gambar di folder public
        width: 1200,
        height: 630,
        alt: "Webkite Jasa Pembuatan Website Pontianak",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Webkite Pontianak",
    image: "https://webkite.online/image/agmr.webp",
    "@id": "https://webkite.online",
    url: "https://webkite.online",
    telephone: "+6289678386070",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Teuku Umar",
      addressLocality: "Pontianak",
      addressRegion: "Kalimantan Barat",
      postalCode: "78117",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.0263,
      longitude: 109.3425,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: "https://wa.me/6289678386070",
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <WhatsAppFloating />
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
