import type { Metadata } from "next";
import Link from "next/link";
import {
    Building2, Users2, LineChart, Globe2,
    CheckCircle2, ArrowRight, ShieldCheck, Mail
} from "lucide-react";
import PortfolioSection from "@/components/PortfolioSection";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Company Profile Pontianak | Bangun Kredibilitas Bisnis",
    description: "Buat profil perusahaan profesional di Pontianak. Desain elegan, responsif, dan SEO ready untuk meningkatkan kepercayaan klien dan mitra bisnis Anda.",
};

export default function CompanyProfilePage() {
    const features = [
        {
            title: "Desain Eksklusif & Profesional",
            desc: "Tampilan yang mencerminkan visi dan misi perusahaan Anda dengan estetika modern.",
            icon: Building2
        },
        {
            title: "Optimasi Kredibilitas",
            desc: "Struktur konten yang dirancang untuk membangun kepercayaan instan bagi calon klien.",
            icon: ShieldCheck
        },
        {
            title: "SEO Lokal Pontianak",
            desc: "Mudah ditemukan oleh calon mitra bisnis di area Pontianak dan sekitarnya.",
            icon: LineChart
        },
        {
            title: "Responsif di Semua Perangkat",
            desc: "Website tampil sempurna baik di desktop, tablet, maupun smartphone.",
            icon: Globe2
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                            Tingkatkan <span className="text-blue-600">Kredibilitas Bisnis</span> Dengan Company Profile Profesional
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            Website Company Profile adalah wajah digital perusahaan Anda. Kami bantu hadirkan kesan pertama yang tak terlupakan bagi klien dan mitra bisnis Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="https://wa.me/6289678386070"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg"
                            >
                                Konsultasi Profil Perusahaan
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="p-8 bg-slate-50 dark:bg-zinc-900/50 rounded-3xl border border-slate-100 dark:border-zinc-800">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Checklist Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Apa Saja Yang Anda Dapatkan?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Halaman Beranda (Headline & Value Prop)",
                                    "Halaman Tentang Kami & Sejarah Perusahaan",
                                    "Katalog Layanan atau Produk Utama",
                                    "Halaman Tim & Struktur Organisasi",
                                    "Integrasi Google Maps & Kontak Lengkap",
                                    "Optimasi Kecepatan & SEO Dasar"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 p-8 bg-white dark:bg-zinc-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-zinc-800">
                            <div className="text-center">
                                <Users2 className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Siap Untuk Mulai?</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    Ceritakan visi perusahaan Anda, kami akan bantu mewujudkannya dalam bentuk website yang berkelas.
                                </p>
                                <Link
                                    href="https://wa.me/6289678386070"
                                    className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
                                >
                                    Hubungi Kami Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* Footer CTA */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 italic">Mau Penawaran Spesial?</h2>
                    <p className="mb-10 text-blue-100">Diskon khusus untuk UMKM di Pontianak yang sedang merintis profil online.</p>
                    <Link
                        href="https://wa.me/6289678386070"
                        className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-2xl inline-flex items-center hover:bg-gray-100 transition-all"
                    >
                        Dapatkan Harga Promo <Mail className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
