import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Mempawah Terbaik |  Terima Jadi",
    description: "Jasa pembuatan website Mempawah profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-mempawah",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Mempawah Terbaik",
        description: "Solusi website profesional di Mempawah untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitemempawah() {
    const data = cityInfo["mempawah"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
