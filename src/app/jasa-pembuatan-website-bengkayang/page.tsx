import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Bengkayang Terbaik | Terima Jadi",
    description: "Jasa pembuatan website Bengkayang profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-bengkayang",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Bengkayang Terbaik",
        description: "Solusi website profesional di Bengkayang untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitebengkayang() {
    const data = cityInfo["bengkayang"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
