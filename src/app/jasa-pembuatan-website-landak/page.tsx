import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Landak Terbaik | Mulai 750rb Terima Jadi",
    description: "Jasa pembuatan website Landak profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-landak",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Landak Terbaik",
        description: "Solusi website profesional di Landak untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitelandak() {
    const data = cityInfo["landak"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
