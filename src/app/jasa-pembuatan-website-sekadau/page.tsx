import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Sekadau Terbaik | Mulai 750rb Terima Jadi",
    description: "Jasa pembuatan website Sekadau profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-sekadau",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Sekadau Terbaik",
        description: "Solusi website profesional di Sekadau untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitesekadau() {
    const data = cityInfo["sekadau"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
