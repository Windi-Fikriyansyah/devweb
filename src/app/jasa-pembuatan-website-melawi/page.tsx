import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Melawi Terbaik |  Terima Jadi",
    description: "Jasa pembuatan website Melawi profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-melawi",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Melawi Terbaik",
        description: "Solusi website profesional di Melawi untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitemelawi() {
    const data = cityInfo["melawi"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
