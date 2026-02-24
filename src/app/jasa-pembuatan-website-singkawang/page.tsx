import { Metadata } from 'next';
import CityLandingPage from '@/components/CityLandingPage';
import { cityInfo } from '@/lib/cityData';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Singkawang Terbaik |  Terima Jadi",
    description: "Jasa pembuatan website Singkawang profesional untuk UMKM & Perusahaan. Harga murah, desain premium, fast loading, dan SEO-friendly. Hubungi Juragan Website sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-singkawang",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Singkawang Terbaik",
        description: "Solusi website profesional di Singkawang untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/og-webkite.png"]
    }
};

export default function JasaWebsitesingkawang() {
    const data = cityInfo["singkawang"];
    return <CityLandingPage city={data.city} areas={data.areas} />;
}
