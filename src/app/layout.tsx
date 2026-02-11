import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Modern font replacement
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Pontianak | Spesialis Ekspor & E-commerce | Webkite",
  description: "Jasa pembuatan website profesional di Pontianak. Spesialis website Ekspor berstandar global, Toko Online otomatis, dan profil bisnis untuk segala jenis industri.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://Webkite.com",
    title: "Jasa Pembuatan Website & Aplikasi Professional",
    description: "Bangun website dan aplikasi impian Anda bersama kami. Teknologi terkini Next.js, React Native, & Flutter.",
    siteName: "Webkite",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white antialiased`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <WhatsAppFloating />
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
