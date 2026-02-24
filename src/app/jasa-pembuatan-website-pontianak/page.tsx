import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Pontianak Terbaik |  Terima Jadi",
    description: "Jasa pembuatan website Pontianak profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-pontianak",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Pontianak Terbaik",
        description: "Solusi website profesional di Pontianak untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitepontianak() {
    const data = cityInfo["pontianak"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
