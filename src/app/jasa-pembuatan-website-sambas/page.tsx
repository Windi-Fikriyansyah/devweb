import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Sambas Terbaik | Mulai 750rb Terima Jadi",
    description: "Jasa pembuatan website Sambas profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-sambas",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Sambas Terbaik",
        description: "Solusi website profesional di Sambas untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsiteSambas() {
    const data = cityInfo["sambas"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
