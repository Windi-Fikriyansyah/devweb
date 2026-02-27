import { Metadata } from 'next';
import TokoOnlineLandingContent from './Content';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Toko Online Profesional & Siap Jualan",
    description: "Jasa pembuatan website toko online profesional dengan fitur lengkap: payment gateway, keranjang belanja, SEO friendly, dan desain modern. Tingkatkan penjualan bisnis Anda sekarang!",
    alternates: {
        canonical: "/jasa-pembuatan-website-toko-online",
    },
    openGraph: {
        title: "Jasa Pembuatan Website Toko Online Profesional & Siap Jualan | Webkite",
        description: "Bangun website toko online profesional yang siap menerima pesanan, pembayaran otomatis, dan tampil terpercaya. Sistem cepat, responsif, dan SEO-friendly.",
        images: ["/image/og-webkite.png"]
    }
};

export default function TokoOnlineLandingPage() {
    return <TokoOnlineLandingContent />;
}
