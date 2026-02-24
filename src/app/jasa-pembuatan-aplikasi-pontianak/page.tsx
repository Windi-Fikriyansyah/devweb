import { Metadata } from 'next';
import AppLandingPage from '@/components/AppLandingPage';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Aplikasi Pontianak Terbaik | Mulai 999rb Terima Jadi",
    description: "Jasa pembuatan aplikasi Pontianak profesional untuk UMKM & Perusahaan. Aplikasi web, mobile, dan sistem custom dengan harga terjangkau. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-aplikasi-pontianak",
    },
    openGraph: {
        title: "Jasa Pembuatan Aplikasi Pontianak Terbaik | Juragan Website",
        description: "Solusi pembuatan aplikasi profesional di Pontianak. Aplikasi web, mobile, kasir, inventory, dan sistem custom untuk bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaAplikasiPontianak() {
    return <AppLandingPage />;
}
