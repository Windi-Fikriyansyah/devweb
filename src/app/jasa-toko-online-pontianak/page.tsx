import { Metadata } from 'next';
import EcommerceLandingPageContent from './Content';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Toko Online Pontianak | Integrasi Ongkir & Payment",
    description: "Ubah bisnis Anda jadi mesin uang otomatis. Jasa pembuatan toko online di Pontianak dengan sistem hitung ongkir otomatis dan integrasi payment gateway.",
    alternates: {
        canonical: "/jasa-toko-online-pontianak",
    },
    openGraph: {
        title: "Jasa Pembuatan Toko Online Pontianak Profesional",
        description: "Jualan otomatis 24 jam dengan website e-commerce terbaik.",
        images: ["/image/agmr.webp"]
    }
};

export default function EcommerceLandingPage() {
    return <EcommerceLandingPageContent />;
}
