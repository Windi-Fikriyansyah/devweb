import { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Pontianak | Spesialis Ekspor & E-commerce",
  description: "Jasa pembuatan website profesional di Pontianak. Solusi digital untuk UMKM & Perusahaan: Website Ekspor, Toko Online, dan Company Profile dengan performa tinggi.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeContent />;
}
