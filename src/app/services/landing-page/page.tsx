import type { Metadata } from "next";
import Link from "next/link";
import {
    Zap, Target, Layout, Smartphone,
    CheckCircle2, ArrowRight, TrendingUp, Sparkles
} from "lucide-react";
import PortfolioSection from "@/components/PortfolioSection";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Landing Page Pontianak | Konversi Penjualan Tinggi",
    description: "Butuh Landing Page untuk iklan atau promo? Kami buatkan Landing Page yang cepat, persuasif, dan Mobile-First untuk tingkatkan penjualan bisnis Anda di Pontianak.",
};

export default function LandingPageService() {
    const points = [
        {
            title: "Desain Fokus Konversi",
            desc: "Setiap elemen dirancang untuk mengarahkan pengunjung melakukan tindakan (Beli/Kontak).",
            icon: Target
        },
        {
            title: "Loading Super Cepat",
            desc: "Teknologi Next.js memastikan landing page terbuka dalam hitungan mili detik.",
            icon: Zap
        },
        {
            title: "Mobile-First Design",
            desc: "Optimal untuk pengguna Google Ads & Facebook Ads yang mayoritas menggunakan smartphone.",
            icon: Smartphone
        },
        {
            title: "Persuasif Copywriting",
            desc: "Bantuan dalam menyusun struktur penulisan yang menarik minat calon pembeli.",
            icon: Sparkles
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 overflow-hidden bg-rose-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                            Ubah Klik Menjadi <span className="text-rose-600">Penjualan</span> Dengan Landing Page Atraktif
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            Landing Page adalah investasi terbaik untuk kampanye pemasaran Anda. Fokus pada satu produk/layanan dengan hasil yang terukur.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="https://wa.me/6289678386070"
                                className="inline-flex items-center justify-center px-10 py-5 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 dark:shadow-rose-900/20"
                            >
                                Buat Landing Page Sekarang
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {points.map((point, i) => (
                            <div key={i} className="p-8 bg-rose-50/50 dark:bg-zinc-900/50 rounded-3xl border border-rose-100 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-rose-700 transition-colors">
                                <div className="w-12 h-12 bg-rose-600 text-white rounded-xl flex items-center justify-center mb-6">
                                    <point.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{point.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <TrendingUp className="w-16 h-16 text-rose-500 mb-6" />
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                                Mengapa Landing Page Lebih Efektif <br />Daripada Website Biasa?
                            </h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Landing page meminimalisir distraksi. Pengunjung hanya memiliki dua pilihan: melakukan pembelian atau pergi. Ini meningkatkan tingkat konversi hingga 2x lipat.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Tidak ada menu navigasi yang membingungkan",
                                    "Call to Action (CTA) yang konsisten dan jelas",
                                    "Testimonial yang relevan dengan produk/iklan",
                                    "Formulir kontak yang ringkas dan mudah",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-rose-500" />
                                        <span className="font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="bg-rose-600 p-12 rounded-[3.5rem] shadow-2xl relative z-10">
                                <h3 className="text-3xl font-bold mb-6">Paket Landing Page Ekspres</h3>
                                <div className="text-5xl font-black mb-8">Start From Rp 1.XXX.XXX</div>
                                <p className="mb-10 text-rose-100">
                                    Selesai dalam 2-3 hari kerja. Sudah termasuk Domain, Hosting, & Setup WhatsApp.
                                </p>
                                <Link
                                    href="https://wa.me/6289678386070"
                                    className="block w-full text-center px-8 py-4 bg-white text-rose-600 font-bold rounded-xl hover:bg-slate-100 transition-all font-bold uppercase tracking-wider"
                                >
                                    Ambil Slot Sekarang
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* CTA Section */}
            <section className="py-24 bg-white dark:bg-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Butuh Untuk Iklan Google Ads atau FB Ads?</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                        Kami sudah berpengalaman membuat landing page untuk berbagai produk digital dan fisik dengan performa tinggi.
                    </p>
                    <Link
                        href="https://wa.me/6289678386070"
                        className="inline-flex items-center px-12 py-5 bg-rose-600 text-white font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all uppercase tracking-widest text-sm"
                    >
                        Hubungi Spesialis Landing Page
                    </Link>
                </div>
            </section>
        </div>
    );
}
