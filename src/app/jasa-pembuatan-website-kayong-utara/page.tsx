import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Kayong Utara Terbaik |  Terima Jadi",
    description: "Jasa pembuatan website Kayong Utara profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-kayong-utara",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Kayong Utara Terbaik",
        description: "Solusi website profesional di Kayong Utara untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitekayongutara() {
    const data = cityInfo["kayong-utara"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
