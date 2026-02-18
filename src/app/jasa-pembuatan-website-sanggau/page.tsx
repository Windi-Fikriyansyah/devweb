import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Sanggau Terbaik | Mulai 750rb Terima Jadi",
    description: "Jasa pembuatan website Sanggau profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-sanggau",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Sanggau Terbaik",
        description: "Solusi website profesional di Sanggau untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitesanggau() {
    const data = cityInfo["sanggau"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
