import { Metadata } from 'next';
import TravelLandingContent from './Content';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Travel Profesional & Terpercaya | Mulai 800rb",
    description: "Jasa pembuatan website travel profesional untuk agen tur, travel, dan rental mobil. Fitur paket tour lengkap, sistem booking, SEO friendly, dan desain premium. Mulai 800rb!",
    alternates: {
        canonical: "/jasa-pembuatan-website-travel",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Travel Profesional & Terpercaya | Webkite",
        description: "Bangun website travel profesional untuk meningkatkan kepercayaan pelanggan dan mempermudah booking paket tour. Desain modern, cepat, dan mobile-friendly.",
        images: ["/image/og-webkite.png"]
    }
};

export default function TravelLandingPage() {
    return <TravelLandingContent />;
}
