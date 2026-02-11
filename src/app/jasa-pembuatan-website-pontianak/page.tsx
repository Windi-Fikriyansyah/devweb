import { Metadata } from 'next';
import GeneralLandingPageContent from './Content';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Pontianak Terpercaya | Harga Mulai 1 Juta",
    description: "Build website bisnis Anda di Pontianak. Jasa pembuatan website untuk apotek, kuliner, kafe, laundry, dan profesional dengan optimasi Local SEO Google Maps.",
    alternates: {
        canonical: "/jasa-pembuatan-website-pontianak",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Pontianak Terpercaya",
        description: "Solusi digital lokal Pontianak untuk meningkatkan omzet bisnis Anda.",
        images: ["/image/agmr.webp"]
    }
};

export default function GeneralLandingPage() {
    return <GeneralLandingPageContent />;
}
