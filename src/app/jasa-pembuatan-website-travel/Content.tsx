'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    Palmtree, Map, Compass, Calendar, Plane, Globe,
    ShieldCheck, CheckCircle2, ArrowRight, Rocket, Zap,
    Award, Heart, Monitor, Truck, Coffee, Layers,
    Settings, BarChart3, Target, ExternalLink, MessageSquare,
    Smartphone, Search, Clock, Users, Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function TravelLandingContent() {
    const travelFeatures = [
        { t: "Manajemen Paket Tour", d: "Kelola rincian itinerary, harga, dan fasilitas paket tour dengan sangat mudah.", i: Map },
        { t: "Sistem Booking WhatsApp", d: "Calon pembeli bisa langsung booking dan konsultasi via WhatsApp otomatis.", i: MessageSquare },
        { t: "Mobile Friendly & Cepat", d: "Website tampil sempurna di HP dan loading super cepat agar pembeli betah.", i: Smartphone },
        { t: "Galeri Destinasi Mewah", d: "Tampilkan foto dan video destinasi wisata Anda dengan layout yang estetik.", i: Palmtree },
        { t: "SEO Wisata Optimal", d: "Optimasi khusus kata kunci wisata agar website Anda mudah muncul di Google.", i: Search },
        { t: "Integrasi Google Maps", d: "Memudahkan pelanggan melihat lokasi titik kumpul atau destinasi wisata.", i: Globe },
        { t: "Testimonial Pelanggan", d: "Fitur ulasan untuk meningkatkan kepercayaan calon pelanggan baru.", i: Users },
        { t: "Keamanan Website", d: "SSL gratis dan perlindungan dari serangan hacker untuk kenyamanan bisnis Anda.", i: ShieldCheck },
    ];

    const tourTypes = [
        { name: "Open Trip / Group Tour", icon: Users },
        { name: "Private Tour & Honeymoon", icon: Heart },
        { name: "Rental Mobil & Transport", icon: Truck },
        { name: "Wisata Religi & Umroh", icon: Star },
        { name: "Adventure & Trekking", icon: Compass },
        { name: "Corporate / Outing", icon: Award },
    ];

    const processSteps = [
        { step: "01", title: "Konsultasi Ide", desc: "Diskusi mengenai jenis layanan travel dan target pasar Anda." },
        { step: "02", title: "Penyusunan Konten", desc: "Kami bantu susun paket tour awal agar website langsung siap isi." },
        { step: "03", title: "Desain Eksklusif", desc: "Proses pembuatan website dengan nuansa liburan yang menarik." },
        { step: "04", title: "Optimasi & Training", desc: "Setting SEO dan kami ajarkan cara update paket tour sendiri." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-600/15 rounded-full blur-[150px] -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] -mr-32 -mb-32"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[200px]"></div>

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
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-sm">
                            <Palmtree className="w-3.5 h-3.5" />
                            <span>Jasa Buat Website Travel Profesional</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                            Ubah Bisnis Travel Anda <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-400">
                                Jadi Mesin Booking Otomatis
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-teal-100/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Buktikan profesionalitas agen travel Anda dengan website modern yang estetik,
                            mobile-friendly, dan mudah ditemukan di Google.
                        </p>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 inline-block px-6 py-3 rounded-2xl mb-10">
                            <p className="text-teal-200 font-bold mb-1 uppercase tracking-tighter text-sm">Promo Harga Spesial</p>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white flex flex-wrap items-center justify-center gap-2">
                                <span className="text-lg sm:text-xl text-white/60 font-medium">Mulai</span>
                                800 Ribu
                                <span className="text-[10px] sm:text-xs bg-emerald-500 text-white px-2 py-1 rounded-lg animate-pulse">SEKALI BAYAR</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20ingin%20pesan%20jasa%20website%20travel%20800rb" className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 active:scale-95 hover:-translate-y-0.5">
                                Pesan Website Sekarang <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#portfolio" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl flex items-center justify-center transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm">
                                Lihat Portfolio Travel
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-teal-900 text-white border-y border-teal-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { l: "Design Style", v: "Modern" },
                            { l: "Setup Time", v: "3-5 Hari" },
                            { l: "SEO Score", v: "98+" },
                            { l: "Support", v: "Gratis" }
                        ].map((stat, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                                <div className="text-2xl md:text-3xl font-black mb-1 text-teal-300">{stat.v}</div>
                                <div className="text-[10px] text-teal-400/70 uppercase tracking-widest">{stat.l}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kenapa Butuh Website Travel */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Compass className="w-4 h-4" />
                            <span>Mengapa Harus Go Digital?</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Agen Travel Tanpa Website <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Bagaikan Kapal Tanpa Layar</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Di tahun 2026, pelanggan mencari paket liburan lewat Google. Jika Anda tidak ada di sana, Anda sedang memberikan pelanggan Anda kepada kompetitor.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { t: "Tingkatkan Kepercayaan", d: "Website profesional membuat agen travel Anda terlihat jauh lebih terpercaya dibanding hanya pakai sosmed.", i: ShieldCheck },
                            { t: "Booking 24 Jam", d: "Biarkan pelanggan melihat jadwal dan booking kapanpun mereka mau, bahkan saat Anda sedang tidur.", i: Clock },
                            { t: "Katalog Terorganisir", d: "Tampilkan puluhan paket tour dengan rapi berdasarkan destinasi, harga, atau kategori.", i: Layers }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-teal-500/50 transition-all group"
                            >
                                <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                    <item.i className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white">{item.t}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-24 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Monitor className="w-4 h-4" />
                            <span>Portfolio Kami</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Contoh Desain <span className="text-teal-600">Premium</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Pilih desain yang paling cocok dengan karakter agen travel Anda. Semua responsif dan cepat!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Tropical Paradise Agency", type: "Travel Agency", image: "https://ik.imagekit.io/tg7tsodt8/travel-1.png" },
                            { title: "Adventure Peak", type: "Mountaineering & Trekking", image: "https://ik.imagekit.io/tg7tsodt8/travel-2.png" },
                            { title: "Luxury Horizon", type: "Luxury Resort & Tours", image: "https://ik.imagekit.io/tg7tsodt8/travel-3.png" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-xl"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <div className="text-white">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-teal-300 mb-1">{item.type}</div>
                                            <div className="text-xl font-black">{item.title}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20tertarik%20dengan%20model%20website%20travel%20seperti%20ini" className="w-full py-3 bg-slate-100 dark:bg-zinc-800 hover:bg-teal-500 hover:text-white text-slate-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                                        Ingin Seperti Ini <ExternalLink size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fitur Lengkap */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-bold uppercase tracking-widest mb-6">
                            <Zap className="w-4 h-4" />
                            <span>Fitur Mewah</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Layanan Tanpa Kompromi
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Website travel Anda akan dilengkapi dengan fitur-fitur modern:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {travelFeatures.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.08 }}
                                className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-teal-500/50 transition-all"
                            >
                                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-xl flex items-center justify-center mb-6 text-teal-600 transition-transform group-hover:scale-110">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black mb-3 text-slate-900 dark:text-white">{item.t}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cocok Untuk... */}
            <section className="py-24 bg-teal-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Solusi Untuk <span className="text-teal-600">Semua Lini Travel</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {tourTypes.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.05 }}
                                className="flex flex-col items-center p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-black text-center text-slate-800 dark:text-white uppercase tracking-tighter">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proses Kerja */}
            <section className="py-24 bg-gradient-to-br from-teal-950 to-blue-950 text-white">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">4 Langkah Punya Website</h2>
                        <p className="text-teal-200/70 text-lg">Hanya butuh beberapa hari untuk agen Anda go digital.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-teal-500/20 z-0"></div>

                        {processSteps.map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10 text-center"
                            >
                                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-teal-500/20 border-4 border-teal-950">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                                <p className="text-teal-100/60 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-teal-500/10 text-teal-600 text-sm font-black uppercase tracking-widest mb-8 border border-teal-500/20">
                            TUNGGU APA LAGI?
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                            Bawa Bisnis Travel Anda <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Ke Level Berikutnya</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Dapatkan penawaran terbaik hanya hari ini. Website travel profesional, cepat,
                            dan siap mendatangkan banyak orderan.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20ingin%20konsultasi%20jasa%20website%20travel%20sekarang" className="group px-12 py-5 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-teal-500/20 hover:-translate-y-1">
                                Konsultasi Gratis (WhatsApp) <MessageSquare className="ml-3 w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/6289678386070?text=Halo%20Webkite%2C%20saya%20siap%20order%20website%20travel%20harga%20800rb" className="px-12 py-5 bg-slate-900 dark:bg-zinc-800 text-white font-black rounded-2xl flex items-center justify-center transition-all border border-slate-800 hover:-translate-y-1">
                                Order Sekarang
                            </Link>
                        </div>

                        <p className="mt-8 text-slate-400 text-sm flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Slot promo terbatas untuk bulan ini
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
