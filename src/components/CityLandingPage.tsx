'use client';

import Link from 'next/link';
import {
    Rocket, Clock, DollarSign, Layers, ArrowRight,
    CheckCircle2, MapPin, Search, Star, MessageSquare,
    HelpCircle, Shield, Zap, Globe, Smartphone, MousePointer2, Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

interface CityLandingPageProps {
    city: string;
    areas?: string;
}

export default function CityLandingPage({ city, areas }: CityLandingPageProps) {
    const categories = [
        "Toko Online", "Skincare", "Dealer Mobil Bekas", "Mebel Dan Furniture", "Jasa Pinjaman Dana",
        "Booking Hotel", "Instansi Pemerintah", "Jasa Tenaga Kerja", "Jasa Pencucian Mobil / Motor",
        "Resto Dan Rumah Makan", "Tempat Ibadah", "Yayasan", "Konstruksi", "Sewa Kost", "Hotel",
        "Produk/Jasa", "Sekolah", "Sales Mobil", "Sales Property", "Jasa Legalitas", "Toko Buah",
        "Booking Wisata", "Perusahaan Percetakan", "Toko Bangunan", "Penerbit Buku", "Kopi Shop Caffe",
        "Portal Berita", "Produk Perawatan", "Logistik", "Resort", "Ekspor", "Profil Perusahaan",
        "Sales Motor", "Portofolio Fotografer", "Jasa Leasing", "Personal", "Tour And Travel",
        "Aksesoris Otomotif", "Bengkel Mobil/motor", "Katalog Produk", "Konsultan", "Pajak",
        "Company Profile", "Reseller", "Rental Mobil", "Cargo", "Production House"
    ];


    const team = [
        { name: "Mas Yonok", role: "CEO" },
        { name: "M. Nur Faizi", role: "Web Developer" },
        { name: "Kartiman S.E", role: "Web Developer" },
        { name: "M. Akbar A", role: "Web Developer" },
        { name: "Pamungkas", role: "Web Developer" },
        { name: "M. Ihza Faridzi", role: "Web Dev, Designer" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -mr-24 -mb-24"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8">
                                <MapPin className="w-4 h-4" />
                                <span>Jasa Website {city}</span>
                            </span>
                            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                                Jasa Pembuatan Website {city} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    Mulai Rp 999.000 Terima Jadi
                                </span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                                Kami menyediakan layanan jasa pembuatan website {city} dan sekitarnya bagi para UMKM maupun perusahaan. Jika Anda merupakan UKM di {city} yang ingin memiliki website atau perusahaan yang berencana untuk membuat profil perusahaan, kami siap membantu Anda.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="#portfolio" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                                    Lihat Portofolio <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link href={`https://wa.me/6289678386070?text=Halo,%20saya%20ingin%20buat%20website%20di%20${city}`} className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black rounded-2xl flex items-center justify-center transition-all backdrop-blur-xl">
                                    Konsultasi Gratis
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-white dark:bg-black border-y border-slate-100 dark:border-zinc-800">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">
                                Bantu Ratusan Pelanggan di {city} Raih Sukses Online
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Telah dipercayai oleh lebih dari 100 pelanggan. Kami berkomitmen untuk mendukung UMKM di {city} agar dapat beralih ke platform digital.
                            </p>
                            <Link href="https://wa.me/6289678386070" className="inline-flex items-center text-blue-600 font-black text-lg group">
                                Ya. Saya ingin berkembang di Era Digital
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { count: "100+", label: "Pelanggan Puas", icon: Star },
                                { count: "100%", label: "Responsive Design", icon: Smartphone },
                                { count: "24/7", label: "Support Teknis", icon: MessageSquare },
                                { count: "Fast", label: "SSD NVMe Speed", icon: Zap }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800">
                                    <stat.icon className="w-8 h-8 text-blue-600 mb-4" />
                                    <h4 className="text-3xl font-black dark:text-white">{stat.count}</h4>
                                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section (Extracted from user instruction) */}
            <PricingSection />

            {/* Portfolio Section */}
            <PortfolioSection
                title="Portofolio Website Pelanggan Kami"
                subtitle="Kami telah menghandel website 100++ Perusahaan dan UMKM yang ada di Indonesia, kini giliran Anda!"
            />

            {/* Area Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black dark:text-white mb-8">
                            Area Jasa Pembuatan Website di {city}
                        </h2>
                        <div className="p-10 bg-white dark:bg-zinc-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-zinc-800 text-left">
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                Area kami dalam pembuatan website murah di {city} meliputi:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {areas ? areas.split(',').map((area, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold font-medium">
                                        {area.trim()}
                                    </span>
                                )) : (
                                    <span className="text-slate-600 dark:text-slate-400 italic">
                                        Melayani seluruh wilayah {city} dan kecamatan sekitarnya.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-24 bg-white dark:bg-black font-sans">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black dark:text-white mb-6">Kategori Jasa Pembuatan Website di {city}</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Kami memiliki banyak kategori website yang dapat Anda pilih berdasarkan usaha dan bisnis Anda di {city}.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map((cat, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group cursor-default">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span className="text-slate-700 dark:text-zinc-300 font-bold text-sm group-hover:text-blue-600 transition-colors">{cat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight">Keunggulan Teknologi <br />Website Kami</h2>
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                                        <Settings className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-2">CMS (Content Management System)</h4>
                                        <p className="text-slate-400 leading-relaxed">Anda dapat memperbarui konten website Anda di {city} atau di mana pun Anda berada dengan mudah, tanpa terikat waktu, selama Anda memiliki koneksi internet.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center">
                                        <Smartphone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-2">Responsive Design</h4>
                                        <p className="text-slate-400 leading-relaxed">Tampilan website akan menyesuaikan desainnya ketika dibuka di desktop komputer, laptop, tablet, dan smartphone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/5">
                            <h3 className="text-2xl font-black mb-8 italic uppercase tracking-wider text-blue-400">Fitur Premium Lainnya</h3>
                            <ul className="space-y-8">
                                <li className="flex gap-4">
                                    <Shield className="w-6 h-6 text-emerald-400 shrink-0" />
                                    <div>
                                        <h5 className="font-black text-lg mb-1">Gratis Sertifikat SSL</h5>
                                        <p className="text-sm text-slate-400 leading-relaxed">Domain Anda akan beralih menjadi https://, membantu optimasi SERP dan keamanan.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Zap className="w-6 h-6 text-yellow-400 shrink-0" />
                                    <div>
                                        <h5 className="font-black text-lg mb-1">Penyimpanan SSD NVMe</h5>
                                        <p className="text-sm text-slate-400 leading-relaxed">Penyimpanan 10x lebih cepat daripada HDD konvensional untuk akses instan.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <MousePointer2 className="w-6 h-6 text-rose-400 shrink-0" />
                                    <div>
                                        <h5 className="font-black text-lg mb-1 text-slate-300 italic line-through decoration-rose-500">Google Ads (Opsional)</h5>
                                        <p className="text-sm text-slate-400 leading-relaxed italic">Layanan iklan pencarian instan terpisah dari paket pembuatan website.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsSection
                title={`Dipercaya 100++ Pelanggan ${city}`}
                description="Ratusan pelanggan telah membuktikan sendiri kehebatan layanan Juragan Website, kini giliran Anda!"
            />

            {/* Team Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">

                    <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -mr-48 -mt-48"></div>
                        <h3 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Optimalkan Seluruh Potensi Online Pada Bisnis Anda Sekarang!</h3>
                        <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto">Kami hadir di sini untuk membantu Anda mengoptimalkannya!</p>
                        <Link href="https://wa.me/6289678386070" className="px-12 py-5 bg-white text-blue-700 font-black rounded-2xl shadow-2xl hover:scale-105 transition-all inline-block uppercase tracking-widest text-sm">
                            Mulai Sekarang
                        </Link>
                    </div>
                </div>
            </section>

            {/* City List Footer Section */}
            <section className="py-24 bg-white dark:bg-black border-t border-slate-100 dark:border-zinc-800">
                <div className="container mx-auto px-4">
                    <h3 className="text-xl font-black dark:text-white mb-8">Jasa Pembuatan Website lainnya di Kalimantan Barat</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            'Sambas', 'Landak', 'Sanggau', 'Sintang', 'Sekadau', 'Kayong Utara',
                            'Mempawah', 'Bengkayang', 'Pontianak', 'Ketapang', 'Kapuas Hulu',
                            'Melawi', 'Kubu Raya', 'Singkawang'
                        ].map(c => (
                            <Link key={c} href={`/jasa-pembuatan-website-${c.toLowerCase().replace(' ', '-')}`} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-red-500" /> Jasa pembuatan website di {c}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
