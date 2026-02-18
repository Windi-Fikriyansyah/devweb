import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Ketapang Terbaik | Mulai 750rb Terima Jadi",
    description: "Jasa pembuatan website Ketapang profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-ketapang",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Ketapang Terbaik",
        description: "Solusi website profesional di Ketapang untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsiteketapang() {
    const data = cityInfo["ketapang"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
