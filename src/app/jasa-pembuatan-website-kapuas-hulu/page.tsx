import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Kapuas Hulu Terbaik | Mulai 750rb Terima Jadi",
    description: "Jasa pembuatan website Kapuas Hulu profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-kapuas-hulu",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Kapuas Hulu Terbaik",
        description: "Solusi website profesional di Kapuas Hulu untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitekapuashulu() {
    const data = cityInfo["kapuas-hulu"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
