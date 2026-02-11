'use client';

import Link from 'next/link';
import {
    Rocket, Clock, DollarSign, Layers, ArrowRight,
    CheckCircle2, MapPin, Search, Star, MessageSquare,
    HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import PortfolioSection from '@/components/PortfolioSection';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function GeneralLandingPageContent() {
    const niches = [
        { title: "Kesehatan", items: ["Apotek", "Klinik Pratama", "Dokter Mandiri", "Lainnya"] },
        { title: "Kuliner", items: ["Kafe & Resto", "Catering", "Oleh-oleh Pontianak", "Lainnya"] },
        { title: "Jasa", items: ["Sedot WC", "Laundry", "Bengkel Mobil", "Lainnya"] },
        { title: "Profesional", items: ["Kantor Hukum", "Notaris", "Konsultan Pajak", "Lainnya"] }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-pink-950 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] -mr-24 -mb-24"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold uppercase tracking-widest mb-8">
                            <MapPin className="w-4 h-4" />
                            <span>Solusi Digital Lokal Pontianak</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                            Website Cepat, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                                Omzet Lokal Meningkat.
                            </span>
                        </h1>
                        <p className="text-xl text-pink-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Jangan biarkan pelanggan di Pontianak menemukan kompetitor Anda duluan. Kami buatkan website yang ramah Google Maps dan mudah ditemukan warga lokal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="https://wa.me/6289678386070" className="px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-pink-500/20 active:scale-95">
                                Konsultasi Bisnis Lokal <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Local SEO? */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Mengapa Bisnis Lokal <br />Wajib Punya Website?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-600">
                                        <Search className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2 dark:text-white">Muncul di Pencarian Google</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Warga Pontianak mencari &quot;Jasa terdekat&quot; setiap hari. Kami pastikan bisnis Anda yang muncul di urutan atas.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-600">
                                        <Star className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2 dark:text-white">Bangun Kepercayaan Instan</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Website profesional menunjukkan bisnis Anda serius dan terpercaya dibandingkan yang hanya punya media sosial.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-600">
                                        <MessageSquare className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2 dark:text-white">Mudahkan Kontak Langsung</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Integrasi WhatsApp memudahkan pelanggan memencet tombol &quot;Hubungi Sekarang&quot; tanpa perlu simpan nomor.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-pink-600 to-rose-700 p-12 rounded-[3.5rem] text-white shadow-2xl relative z-10">
                                <h3 className="text-3xl font-black mb-8 italic uppercase tracking-tighter">Local SEO Power</h3>
                                <p className="text-lg mb-8 text-pink-100">Optimasi khusus untuk kata kunci lokal:<br />&quot;Jasa [Bisnis Anda] di Pontianak&quot;</p>
                                <ul className="space-y-4">
                                    {["Integrasi Google Maps", "Schema Markup Alamat", "Mobile Friendly Score 90+", "Kecepatan Akses Instan"].map(item => (
                                        <li key={item} className="flex items-center gap-3 font-bold">
                                            <CheckCircle2 className="w-5 h-5 text-pink-300" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Niche Sectors */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Apapun Usaha Anda Kami Siap Bantu</h2>
                        <p className="text-slate-600 dark:text-slate-400">Pilihan tepat untuk berbagai sektor bisnis di Pontianak.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {niches.map((niche, i) => (
                            <motion.div
                                key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                                className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-100 dark:border-zinc-800 shadow-sm"
                            >
                                <h3 className="text-xl font-black text-pink-600 mb-6 flex items-center gap-2">
                                    <Rocket className="w-5 h-5" /> {niche.title}
                                </h3>
                                <ul className="space-y-3">
                                    {niche.items.map(item => (
                                        <li key={item} className="text-slate-600 dark:text-slate-400 flex items-center gap-2 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Value */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { i: Clock, t: "Proses Kilat", d: "Selesai dalam 5-7 hari kerja untuk paket standard." },
                            { i: DollarSign, t: "Harga Terjangkau", d: "Investasi mulai dari Rp 1.XXX.XXX termasuk Domain & Hosting." },
                            { i: Layers, t: "Mudah Dikelola", d: "Kami ajarkan cara ganti konten sendiri tanpa perlu IT." }
                        ].map((v, idx) => (
                            <div key={idx} className="text-center p-8">
                                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 mx-auto mb-6">
                                    <v.i className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-black mb-4 dark:text-white">{v.t}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{v.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* Local FAQ */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-5xl font-black dark:text-white">Tanya Jawab (FAQ) Bisnis Lokal</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { q: "Apakah bisa diajarkan cara kelola website?", a: "Pasti. Kami berikan sesi tutorial singkat agar Anda bisa mandiri update promo atau harga layanan." },
                            { q: "Kenapa website saya belum muncul di halaman 1 Google?", a: "SEO butuh waktu untuk index, namun kami gunakan teknik optimasi lokal agar dalam 1-3 bulan website mulai merangkak naik." },
                            { q: "Bisakah website diintegrasikan ke Google Business Profile?", a: "Sangat bisa. Kami bahkan sangat merekomendasikan ini untuk sinkronisasi alamat dan ulasan pelanggan." }
                        ].map((faq, f) => (
                            <div key={f} className="p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-slate-100 dark:border-zinc-800 shadow-sm">
                                <h4 className="text-lg font-black dark:text-white mb-4">Q: {faq.q}</h4>
                                <p className="text-slate-600 dark:text-slate-400">A: {faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-pink-600 text-white overflow-hidden relative">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 italic italic uppercase tracking-tighter">Dominasi Pasar Pontianak Sekarang</h2>
                    <p className="text-pink-100 mb-12 text-xl max-w-2xl mx-auto">Konsultasi gratis, bisa ketemuan di kafe sekitaran Pontianak untuk bahas project Anda!</p>
                    <Link href="https://wa.me/6289678386070" className="px-12 py-5 bg-white text-pink-700 font-black rounded-2xl shadow-2xl hover:scale-105 transition-all inline-flex items-center uppercase tracking-widest text-sm">
                        Hubungi Tim JasaWeb Sekarang
                    </Link>
                </div>
            </section>
        </div>
    );
}
