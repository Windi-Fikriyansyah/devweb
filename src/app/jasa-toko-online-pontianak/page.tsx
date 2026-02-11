'use client';

import Link from 'next/link';
import {
    ShoppingCart, Zap, MessageSquare, CreditCard,
    ArrowRight, CheckCircle2, Package, TrendingUp,
    ShieldCheck, LayoutDashboard
} from 'lucide-react';
import { motion } from 'framer-motion';
import PortfolioSection from '@/components/PortfolioSection';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function EcommerceLandingPage() {
    const benefits = [
        {
            t: "Hitung Ongkir Otomatis",
            d: "Integrasi API RajaOngkir untuk perhitungan biaya kirim instan ke seluruh Indonesia.",
            i: Package
        },
        {
            t: "Payment Gateway",
            d: "Terima pembayaran via Transfer Bank, E-Wallet, hingga Alfamart secara otomatis.",
            i: CreditCard
        },
        {
            t: "Dashboard User-Friendly",
            d: "Kelola stok, pantau pesanan, dan lihat laporan laba rugi dalam satu tampilan.",
            i: LayoutDashboard
        },
        {
            t: "Integrasi WhatsApp",
            d: "Setiap pesanan baru bisa langsung terkirim notifikasinya ke WhatsApp admin & buyer.",
            i: MessageSquare
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-purple-950 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -ml-48 -mt-48"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold uppercase tracking-widest mb-8">
                            <ShoppingCart className="w-4 h-4" />
                            <span>Next-Gen E-commerce Solution</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                            Ubah Website Jadi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                Mesin Uang Otomatis.
                            </span>
                        </h1>
                        <p className="text-xl text-purple-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Tinggalkan cara jualan manual. Bangun toko online yang bekerja 24 jam untuk Anda, dari terima order hingga verifikasi pembayaran.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="https://wa.me/6289678386070" className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-purple-500/20 active:scale-95">
                                Mulai Berjualan Otomatis <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Proof Section */}
            <section className="py-12 bg-purple-900 text-white border-y border-purple-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { l: "Loading Speed", v: "< 2s" },
                            { l: "Success Rate", v: "99.9%" },
                            { l: "Integrasi Kurir", v: "15+" },
                            { l: "Optimasi SEO", v: "Expert" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl font-black mb-1">{stat.v}</div>
                                <div className="text-xs text-purple-300 uppercase tracking-widest">{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Kenapa Harus Toko Online Kami?</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Gunakan infrastruktur teknologi yang sama dengan brand-brand besar.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((item, i) => (
                            <motion.div
                                key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-purple-500/50 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                                    <item.i className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white">{item.t}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow/Process Section */}
            <section className="py-24 bg-slate-950 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <TrendingUp className="w-16 h-16 text-purple-500 mb-8" />
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Flow Belanja <br />Mulus & Cepat</h2>
                            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                                Setiap detik keterlambatan adalah hilangnya penjualan. Kami mengoptimasi alur dari keranjang hingga pembayaran sesingkat mungkin.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Pelanggan pilih produk & hitung ongkir.",
                                    "Checkout & Bayar via Payment Gateway.",
                                    "Verifikasi Instan tanpa harus kirim bukti transfer.",
                                    "Pesanan masuk ke dashboard & notifikasi WhatsApp."
                                ].map((step, s) => (
                                    <div key={s} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold">{s + 1}</div>
                                        <span className="text-lg font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="p-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[3rem] shadow-2xl relative z-10">
                                <ShieldCheck className="w-12 h-12 mb-6" />
                                <h3 className="text-3xl font-black mb-6 italic italic">Paket UMKM Juara</h3>
                                <p className="mb-10 text-purple-100 text-lg">Mulai dari Landing Page Produk tunggal hingga Marketplace Lokal yang kompleks. Kami punya solusinya.</p>
                                <ul className="mb-12 space-y-4">
                                    {["Domain .COM / .CO.ID", "Hosting SSD Super Cepat", "Setup SSL Security", "Training Kelola Dashboard"].map(li => (
                                        <li key={li} className="flex items-center gap-3 font-bold">
                                            <CheckCircle2 className="w-5 h-5 text-purple-300" /> {li}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="https://wa.me/6289678386070" className="block w-full text-center py-5 bg-white text-purple-700 font-black rounded-2xl hover:bg-slate-100 transition-all uppercase tracking-widest shadow-xl">
                                    Ambil Slot Promo Sekarang
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* CTA Final */}
            <section className="py-24 bg-white dark:bg-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 dark:text-white">Siap Mengembangkan Brand Anda?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        Jangan biarkan kompetitor mendahului Anda. Hadirkan toko online yang benar-benar mewakili kualitas produk Anda.
                    </p>
                    <Link href="https://wa.me/6289678386070" className="inline-flex items-center px-12 py-5 bg-purple-600 text-white font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
                        Konsultasi Toko Online Gratis <ArrowRight className="ml-3" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
