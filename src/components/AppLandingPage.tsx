'use client';

import Link from 'next/link';
import {
    Rocket, ArrowRight, CheckCircle2, MapPin, Star, MessageSquare,
    Shield, Zap, Smartphone, Code2, Cpu, Globe2, Sparkles,
    ShoppingCart, Database, BarChart3, Users, Layers, Settings,
    Monitor, Tablet
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

export default function AppLandingPage() {
    const appTypes = [
        { icon: ShoppingCart, title: "Aplikasi Kasir / POS", desc: "Sistem point of sale modern untuk toko & resto." },
        { icon: Database, title: "Inventory Management", desc: "Kelola stok barang secara real-time dan otomatis." },
        { icon: BarChart3, title: "Aplikasi Dashboard", desc: "Monitoring bisnis dengan grafik & laporan lengkap." },
        { icon: Users, title: "HR & Absensi", desc: "Manajemen karyawan, absensi, dan penggajian." },
        { icon: Globe2, title: "Aplikasi Web Custom", desc: "Web app sesuai kebutuhan spesifik bisnis Anda." },
        { icon: Smartphone, title: "Progressive Web App", desc: "Aplikasi mobile-like yang bisa diakses via browser." },
    ];

    const processSteps = [
        { step: "01", title: "Konsultasi & Analisis", desc: "Diskusi kebutuhan fitur, alur kerja, dan target pengguna aplikasi Anda." },
        { step: "02", title: "UI/UX Design", desc: "Desain antarmuka yang intuitif dan mudah digunakan oleh semua kalangan." },
        { step: "03", title: "Development", desc: "Proses pengembangan dengan teknologi modern, clean code, dan best practice." },
        { step: "04", title: "Testing & Launch", desc: "Pengujian menyeluruh sebelum deployment dan pendampingan pasca-launch." },
    ];

    const techStack = [
        "React / Next.js", "Node.js", "Laravel", "PostgreSQL",
        "MySQL", "REST API", "Firebase", "Tailwind CSS", "Golang", "Python"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -mr-24 -mb-24"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold uppercase tracking-widest mb-8">
                                <Code2 className="w-4 h-4" />
                                <span>Jasa Aplikasi Pontianak</span>
                            </span>
                            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                                Jasa Pembuatan Aplikasi Pontianak <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                    Terima Jadi
                                </span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                                Kami membantu bisnis Anda di Pontianak untuk memiliki aplikasi custom yang handal, mulai dari aplikasi kasir, inventory, dashboard, hingga sistem informasi berbasis web & mobile.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="#app-types" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                                    Lihat Layanan <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link href="https://wa.me/6289678386070?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20aplikasi%20di%20Pontianak" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black rounded-2xl flex items-center justify-center transition-all backdrop-blur-xl">
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
                                Solusi Aplikasi Digital untuk Bisnis di Pontianak
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Kami telah berpengalaman membangun berbagai jenis aplikasi untuk UMKM dan perusahaan. Dari sistem sederhana hingga platform kompleks, kami siap mengerjakan aplikasi impian Anda.
                            </p>
                            <Link href="https://wa.me/6289678386070?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20aplikasi" className="inline-flex items-center text-blue-600 font-black text-lg group">
                                Konsultasi kebutuhan aplikasi Anda
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { count: "100+", label: "Proyek Selesai", icon: Star },
                                { count: "100%", label: "Responsive App", icon: Smartphone },
                                { count: "24/7", label: "Support Teknis", icon: MessageSquare },
                                { count: "Fast", label: "Modern Stack", icon: Zap }
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

            {/* App Types Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950" id="app-types">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Jenis Aplikasi yang Kami Buat
                        </motion.h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Berbagai jenis aplikasi yang dapat disesuaikan dengan kebutuhan bisnis Anda di Pontianak dan sekitarnya.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {appTypes.map((app, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-zinc-800 hover:border-blue-500/50 transition-all group"
                            >
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <app.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{app.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <PricingSection />

            {/* Process Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Proses Pembuatan Aplikasi
                        </motion.h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Alur kerja kami yang terstruktur memastikan aplikasi Anda selesai tepat waktu dan sesuai kebutuhan.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {processSteps.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-zinc-800"
                            >
                                <span className="text-5xl font-black text-blue-100 dark:text-blue-500/10 absolute top-4 right-6">{item.step}</span>
                                <div className="relative z-10">
                                    <h3 className="text-base font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight">Teknologi Modern <br />untuk Aplikasi Anda</h2>
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                                        <Layers className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-2">Full-Stack Development</h4>
                                        <p className="text-slate-400 leading-relaxed">Kami menangani frontend dan backend sekaligus, memastikan aplikasi Anda terintegrasi sempurna dari tampilan hingga database.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center">
                                        <Smartphone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-2">Multi-Platform</h4>
                                        <p className="text-slate-400 leading-relaxed">Aplikasi berjalan lancar di desktop, tablet, dan smartphone. Bisa juga dijadikan PWA (Progressive Web App) agar terasa seperti native app.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/5">
                            <h3 className="text-2xl font-black mb-8 italic uppercase tracking-wider text-purple-400">Tech Stack Kami</h3>
                            <div className="flex flex-wrap gap-3 mb-10">
                                {techStack.map((tech, i) => (
                                    <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-300">{tech}</span>
                                ))}
                            </div>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <Shield className="w-6 h-6 text-emerald-400 shrink-0" />
                                    <div>
                                        <h5 className="font-black text-lg mb-1">Keamanan Terjamin</h5>
                                        <p className="text-sm text-slate-400 leading-relaxed">Best practice security: enkripsi, validasi, dan proteksi dari serangan umum.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Zap className="w-6 h-6 text-yellow-400 shrink-0" />
                                    <div>
                                        <h5 className="font-black text-lg mb-1">Performa Optimal</h5>
                                        <p className="text-sm text-slate-400 leading-relaxed">Aplikasi dioptimasi untuk loading cepat dan pengalaman pengguna terbaik.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection
                title="Karya Aplikasi & Website Kami"
                subtitle="Kami telah menghandel 100++ proyek aplikasi dan website untuk bisnis di Indonesia."
            />

            {/* Testimonials Section */}
            <TestimonialsSection
                title="Dipercaya 100++ Pelanggan Pontianak"
                description="Ratusan pelanggan telah membuktikan sendiri kehebatan layanan Juragan Website, kini giliran Anda!"
            />

            {/* CTA Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -mr-48 -mt-48"></div>
                        <h3 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">Wujudkan Aplikasi Impian Bisnis Anda Sekarang!</h3>
                        <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto">Konsultasikan kebutuhan aplikasi Anda dengan tim kami, gratis dan tanpa komitmen!</p>
                        <Link href="https://wa.me/6289678386070?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20aplikasi%20custom%20di%20Pontianak" className="px-12 py-5 bg-white text-blue-700 font-black rounded-2xl shadow-2xl hover:scale-105 transition-all inline-block uppercase tracking-widest text-sm">
                            Konsultasi via WhatsApp
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Services Footer */}
            <section className="py-24 bg-white dark:bg-black border-t border-slate-100 dark:border-zinc-800">
                <div className="container mx-auto px-4">
                    <h3 className="text-xl font-black dark:text-white mb-8">Layanan Lainnya di Pontianak</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: "Jasa Pembuatan Website Pontianak", href: "/jasa-pembuatan-website-pontianak" },
                            { label: "Jasa Toko Online Pontianak", href: "/jasa-toko-online-pontianak" },
                            { label: "Jasa Website Ekspor Pontianak", href: "/jasa-website-ekspor-pontianak" },
                        ].map(service => (
                            <Link key={service.href} href={service.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-red-500" /> {service.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
