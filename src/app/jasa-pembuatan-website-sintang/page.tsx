import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Sintang Terbaik | Mulai 750rb Terima Jadi",
    description: "Jasa pembuatan website Sintang profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-sintang",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Sintang Terbaik",
        description: "Solusi website profesional di Sintang untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitesintang() {
    const data = cityInfo["sintang"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
