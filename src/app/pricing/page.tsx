import { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
    title: "Paket & Harga Pembuatan Website Pontianak | Terjangkau & Profesional",
    description: "Cek daftar harga paket pembuatan website kami. Tersedia paket Express untuk UMKM, Startup untuk bisnis lokal, hingga paket Ekspor dan E-commerce profesional.",
    alternates: {
        canonical: "/pricing",
    },
};

export default function PricingPage() {
    return <PricingContent />;
}
