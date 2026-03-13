import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Profesional Indonesia | Terima Jadi",
    description: "Jasa pembuatan website profesional untuk UMKM & Perusahaan di Indonesia. Harga terjangkau, desain premium, fast loading, dan SEO-friendly.",
    alternates: {
        canonical: "/jasa-pembuatan-website",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Indonesia Terbaik",
        description: "Solusi website profesional untuk meningkatkan omzet bisnis Anda di seluruh Indonesia.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitepontianak() {
    const data = cityInfo["pontianak"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
