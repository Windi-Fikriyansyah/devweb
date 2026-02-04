import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Modern font replacement
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Aplikasi Mobile Professional | DevStudio",
  description: "Jasa pembuatan website, aplikasi web, dan aplikasi mobile (Android/iOS) terpercaya. Tim developer berpengalaman untuk transformasi digital bisnis Anda.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://devstudio.com",
    title: "Jasa Pembuatan Website & Aplikasi Professional",
    description: "Bangun website dan aplikasi impian Anda bersama kami. Teknologi terkini Next.js, React Native, & Flutter.",
    siteName: "DevStudio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white antialiased`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
