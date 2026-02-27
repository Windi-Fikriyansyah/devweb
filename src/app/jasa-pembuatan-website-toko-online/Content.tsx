'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    ShoppingCart, Zap, MessageSquare, CreditCard, Smartphone,
    ArrowRight, CheckCircle2, Package, TrendingUp, Search,
    ShieldCheck, LayoutDashboard, Globe, Rocket, Star,
    Clock, Users, Award, Heart, Monitor, Truck, Coffee,
    Layers, Settings, BarChart3, Target, ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
};

export default function TokoOnlineLandingContent() {
    const whyNeedWebsite = [
        { text: "Brand terlihat lebih profesional", icon: Award },
        { text: "Kontrol penuh atas tampilan & data pelanggan", icon: Settings },
        { text: "Tidak tergantung marketplace", icon: Globe },
        { text: "Bebas biaya komisi tinggi", icon: CreditCard },
        { text: "Bisa muncul di halaman 1 Google", icon: Search },
    ];

    const features = [
        { t: "Desain Modern & Mobile Friendly", d: "Tampilan profesional yang responsif di semua perangkat, dari desktop hingga smartphone.", i: Smartphone },
        { t: "Keranjang Belanja & Checkout Otomatis", d: "Sistem belanja yang mulus dari pilih produk hingga checkout tanpa hambatan.", i: ShoppingCart },
        { t: "Payment Gateway Terintegrasi", d: "QRIS, transfer bank, e-wallet — semua metode pembayaran siap digunakan.", i: CreditCard },
        { t: "Manajemen Produk & Stok", d: "Kelola katalog produk, stok, dan harga dengan mudah dari satu dashboard.", i: Package },
        { t: "Integrasi WhatsApp", d: "Notifikasi pesanan langsung ke WhatsApp admin dan pelanggan secara otomatis.", i: MessageSquare },
        { t: "SEO Optimization", d: "Optimasi mesin pencari agar toko online Anda mudah ditemukan di Google.", i: Search },
        { t: "Kecepatan Loading Tinggi", d: "Website super cepat dengan performa tinggi untuk pengalaman belanja terbaik.", i: Zap },
        { t: "Hosting & Domain", d: "Tersedia layanan hosting dan domain opsional untuk kemudahan Anda.", i: Globe },
    ];

    const seoFeatures = [
        "Struktur SEO yang rapi",
        "Meta title & description optimal",
        "Optimasi kecepatan",
        "Mobile-first design",
        "Schema markup dasar",
    ];

    const businessTypes = [
        { name: "Bisnis Fashion", icon: Heart },
        { name: "Toko Skincare & Kosmetik", icon: Star },
        { name: "Produk Digital", icon: Monitor },
        { name: "Makanan & Minuman", icon: Coffee },
        { name: "Elektronik", icon: Smartphone },
        { name: "UMKM & Brand Lokal", icon: Users },
        { name: "Distributor & Reseller", icon: Truck },
    ];

    const whyChooseUs = [
        "Proses cepat & transparan",
        "Harga terjangkau",
        "Support after sales",
        "Bisa request custom desain",
        "Bisa upgrade fitur kapan saja",
        "Garansi revisi sesuai kesepakatan",
    ];

    const processSteps = [
        { step: "01", title: "Konsultasi Kebutuhan Bisnis", desc: "Diskusi mendalam untuk memahami kebutuhan dan target bisnis Anda." },
        { step: "02", title: "Riset & Perencanaan", desc: "Riset pasar dan perencanaan struktur website yang optimal." },
        { step: "03", title: "Desain & Development", desc: "Proses pembuatan desain dan pengembangan website profesional." },
        { step: "04", title: "Testing & Optimasi", desc: "Pengujian menyeluruh dan optimasi performa website." },
        { step: "05", title: "Launching Website", desc: "Website Anda siap go live dan menerima pesanan." },
        { step: "06", title: "Support & Maintenance", desc: "Dukungan teknis berkelanjutan setelah website berjalan." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] -mr-32 -mb-32"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px]"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-sm">
                            <Rocket className="w-3.5 h-3.5" />
                            <span>Website Toko Online Profesional</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                            Jasa Pembuatan Website <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                                Toko Online Profesional
                            </span> <br />
                            <span className="text-2xl md:text-3xl lg:text-4xl text-white/90">& Siap Jualan</span>
                        </h1>
                        <p className="text-base md:text-lg text-purple-100/70 mb-3 max-w-3xl mx-auto leading-relaxed">
                            Tingkatkan Penjualan dengan Jasa Pembuatan Website Toko Online yang Siap Pakai
                        </p>
                        <p className="text-sm md:text-base text-purple-100/50 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Ingin punya website toko online profesional yang langsung bisa menerima pesanan, pembayaran otomatis, dan terlihat terpercaya? Dengan sistem yang cepat, responsif, dan SEO-friendly, website Anda siap bersaing di Google.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20ingin%20konsultasi%20tentang%20jasa%20pembuatan%20website%20toko%20online" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-95 hover:-translate-y-0.5 text-sm">
                                Mulai Bangun Toko Online <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#fitur" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl flex items-center justify-center transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm text-sm">
                                Lihat Fitur Lengkap
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Social Proof */}
            <section className="py-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white border-y border-purple-800/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { l: "Loading Speed", v: "< 2s" },
                            { l: "Klien Puas", v: "100+" },
                            { l: "Metode Bayar", v: "10+" },
                            { l: "SEO Score", v: "95+" }
                        ].map((stat, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                                <div className="text-3xl md:text-4xl font-black mb-1 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">{stat.v}</div>
                                <div className="text-xs text-purple-300/70 uppercase tracking-widest">{stat.l}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kenapa Bisnis Anda Butuh Website Toko Online */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Target className="w-4 h-4" />
                            <span>Mengapa Harus Punya Website?</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Kenapa Bisnis Anda Butuh <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Website Toko Online?</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Di era digital, hanya mengandalkan marketplace tidak cukup. Dengan menggunakan jasa pembuatan website toko online, Anda mendapatkan:
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {whyNeedWebsite.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-5 p-5 mb-4 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-purple-500/50 transition-all group hover:shadow-lg hover:shadow-purple-500/5"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-bold text-slate-800 dark:text-white">{item.text}</span>
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto flex-shrink-0" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.p {...fadeUp} className="text-center mt-10 text-xl font-black text-purple-600 dark:text-purple-400">
                        Website toko online bukan lagi pilihan — tapi kebutuhan.
                    </motion.p>
                </div>
            </section>

            {/* Fitur Website Toko Online */}
            <section id="fitur" className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Zap className="w-4 h-4" />
                            <span>Fitur Lengkap</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Layanan Jasa Pembuatan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Website Toko Online</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Kami tidak hanya membuat website. Kami membangun <span className="font-bold text-slate-900 dark:text-white">mesin penjualan digital</span>.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.08 }}
                                className="group p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                    <item.i className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-black mb-3 text-slate-900 dark:text-white">{item.t}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p {...fadeUp} className="text-center mt-12 text-slate-500 dark:text-slate-400 text-base max-w-2xl mx-auto">
                        Dengan pengalaman dalam jasa pembuatan website toko online, kami memastikan website Anda <span className="font-bold text-slate-900 dark:text-white">siap digunakan tanpa ribet</span>.
                    </motion.p>
                </div>
            </section>

            {/* SEO Section */}
            <section className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6">
                                <BarChart3 className="w-4 h-4" />
                                <span>SEO Optimized</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                Website Toko Online yang <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">SEO Friendly</span> & Mudah <br />
                                Ditemukan di Google
                            </h2>
                            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                                Kami memahami pentingnya optimasi mesin pencari. Setiap proyek jasa pembuatan website toko online kami dilengkapi dengan:
                            </p>
                            <div className="space-y-4">
                                {seoFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        {...fadeUp}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                        <span className="text-lg font-medium">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeUp}
                            transition={{ delay: 0.3 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="p-10 bg-gradient-to-br from-emerald-600/90 to-cyan-700/90 rounded-[3rem] shadow-2xl relative z-10 backdrop-blur-sm border border-emerald-500/20">
                                <Search className="w-16 h-16 text-emerald-200/50 mb-6" />
                                <h3 className="text-3xl font-black mb-4">Hasilnya?</h3>
                                <p className="text-emerald-100 text-xl mb-8 leading-relaxed">
                                    Website Anda lebih mudah ditemukan calon pembeli di halaman pertama Google.
                                </p>
                                <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                        <span className="text-sm text-emerald-200">Google Search Result</span>
                                    </div>
                                    <div className="font-bold text-lg mb-1">tokoanda.com</div>
                                    <div className="text-sm text-emerald-200/70">Toko Online Terpercaya — Belanja mudah dengan harga terbaik dan pengiriman cepat ke seluruh Indonesia.</div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
                            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-48 h-48 bg-cyan-500/15 rounded-full blur-[60px]"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cocok Untuk Berbagai Jenis Bisnis */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Layers className="w-4 h-4" />
                            <span>Untuk Semua Bisnis</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Cocok Untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Berbagai Jenis Bisnis</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Layanan jasa pembuatan website toko online kami cocok untuk:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {businessTypes.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.08 }}
                                className="group flex flex-col items-center p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg cursor-default"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40 rounded-2xl flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <span className="text-sm font-bold text-slate-800 dark:text-white text-center">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p {...fadeUp} className="text-center mt-12 text-lg text-slate-600 dark:text-slate-400">
                        Apapun produk Anda, kami bantu tampilkan secara <span className="font-bold text-slate-900 dark:text-white">profesional</span>.
                    </motion.p>
                </div>
            </section>

            {/* Kenapa Harus Kami */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div {...fadeUp} className="lg:w-1/2">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-bold uppercase tracking-widest mb-6">
                                <Star className="w-4 h-4" />
                                <span>Keunggulan Kami</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                Kenapa Harus Menggunakan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Jasa Kami?</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                                Kami fokus pada hasil: website yang menghasilkan penjualan, bukan sekadar tampilan bagus.
                            </p>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:w-1/2">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {whyChooseUs.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        {...fadeUp}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-amber-500/50 transition-all group hover:shadow-md"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-sm text-slate-800 dark:text-white">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Proses Pembuatan */}
            <section className="py-24 bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Rocket className="w-4 h-4" />
                            <span>Proses Kerja</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6">
                            Proses Pembuatan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Website Toko Online</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Dengan sistem yang terstruktur, kami memastikan hasil maksimal.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {processSteps.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-8 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                            >
                                <div className="text-5xl font-black text-purple-500/20 mb-4 group-hover:text-purple-500/40 transition-colors">{item.step}</div>
                                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Template Website Section */}
            <section className="py-24 bg-white dark:bg-black overflow-hidden" id="templates">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Layers className="w-4 h-4" />
                            <span>Pilihan Desain</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Template Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Toko Online</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                            Pilih template yang paling sesuai dengan karakter brand Anda. Semua template sudah dioptimasi untuk <span className="font-bold text-slate-900 dark:text-white">konversi tinggi</span>.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Fashion Store Premium", category: "Fashion & Lifestyle", image: "/image/template/fashion.png" },
                            { title: "Beauty Care Specialist", category: "Skincare & Cosmetics", image: "/image/template/skincare.png" },
                            { title: "Culinary Delight", category: "Food & Beverage", image: "/image/template/food.png" },
                            { title: "Tech Gadget Hub", category: "Electronics", image: "/image/template/electronics.png" },
                            { title: "Local Hero UMKM", category: "UMKM & Brand Lokal", image: "/image/template/umkm.png" },
                            { title: "Digital Product Hub", category: "Produk Digital", image: "/image/template/digital.png" },
                        ].map((template, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-slate-50 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-zinc-800 flex flex-col p-4 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="relative h-64 overflow-hidden rounded-[1.8rem] border border-slate-100 dark:border-zinc-800 shadow-inner">
                                    <Image
                                        src={template.image}
                                        alt={template.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20tertarik%20dengan%20template%20website%20toko%20online" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:bg-blue-600 hover:text-white">
                                            Lihat Template <ExternalLink size={16} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pt-6 pb-2 px-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">
                                        {template.category}
                                    </span>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{template.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        Template responsif dan modern untuk memaksimalkan penjualan bisnis {template.category.toLowerCase()} Anda.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} className="mt-16 text-center">
                        <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20ingin%20melihat%20pilihan%20template%20toko%20online%20lainnya" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold tracking-widest text-sm uppercase transition-colors">
                            Lihat Pilihan Template Lainnya <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] -ml-32 -mt-32"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] -mr-32 -mb-32"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-widest mb-8">
                            <Target className="w-4 h-4" />
                            <span>Siap Memulai?</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
                            Siap Punya Website <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Toko Online Profesional?</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            Jangan biarkan calon pelanggan memilih kompetitor hanya karena bisnis Anda belum memiliki website sendiri.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                            Sekarang waktunya menggunakan <span className="font-bold text-slate-900 dark:text-white">jasa pembuatan website toko online terpercaya</span> dan mulai meningkatkan omzet secara digital.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20jasa%20pembuatan%20website%20toko%20online" className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 active:scale-95 hover:-translate-y-0.5">
                                Konsultasi Gratis Sekarang <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20ingin%20mendapatkan%20penawaran%20terbaik%20untuk%20website%20toko%20online" className="px-10 py-5 bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-900 dark:text-white font-black rounded-2xl flex items-center justify-center transition-all border border-slate-200 dark:border-zinc-800 hover:-translate-y-0.5">
                                Dapatkan Penawaran Terbaik
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
