import { Metadata } from 'next';
import ExportLandingPageContent from './Content';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Ekspor Indonesia | Standar Internasional",
    description: "Tembus pasar global dengan website ekspor berstandar internasional. Kami bantu UMKM Indonesia Go-Global dengan desain kredibel, multibahasa, dan Global SEO.",
    alternates: {
        canonical: "/jasa-website-ekspor",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Ekspor Indonesia",
        description: "Bangun kepercayaan buyer internasional dengan website standar ekspor.",
        images: ["/image/agmr.webp"]
    }
};

export default function ExportLandingPage() {
    return <ExportLandingPageContent />;
}
