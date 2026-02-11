import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: "Tentang Kami | Webkite Pontianak - Partner Digital Anda",
    description: "Kenali lebih dekat Webkite Pontianak. Tim ahli di balik solusi website berkualitas tinggi yang membantu bisnis di Kalimantan Barat mendunia.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
