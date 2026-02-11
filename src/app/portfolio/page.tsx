import { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
    title: "Portfolio Jasa Pembuatan Website Pontianak | Karya Terbaru Webkite",
    description: "Lihat koleksi hasil karya pembuatan website kami. Mulai dari website ekspor internasional, toko online (e-commerce), hingga company profile perusahaan profesional.",
    alternates: {
        canonical: "/portfolio",
    },
};

export default function PortfolioPage() {
    return <PortfolioContent />;
}
