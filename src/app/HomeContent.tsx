'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, Globe, Smartphone, Monitor, Star,
    Rocket, Zap, MapPin, ChevronDown, ChevronLeft, ChevronRight
} from 'lucide-react';
import PortfolioSection from '@/components/PortfolioSection';

export default function HomeContent() {
    const faqs = [
        {
            q: "Berapa lama proses pembuatan website?",
            a: "Tergantung tingkat kerumitan, rata-rata 7-14 hari kerja untuk hasil yang maksimal."
        },
        {
            q: "Apakah saya bisa mengelola website sendiri nanti?",
            a: "Tentu. Kami berikan panduan cara edit konten agar Anda bisa mandiri mengelola website tanpa bantuan teknis setiap saat."
        },
        {
            q: "Apakah website sudah termasuk SEO?",
            a: "Ya, kami melakukan optimasi SEO dasar agar website Anda mulai merangkak naik di pencarian Google, terutama untuk kata kunci lokal Pontianak."
        },
    ];

    return (
        <div className="flex flex-col min-h-screen selection:bg-blue-100 selection:text-blue-900">

            {/* Section 1: Hero Section (Bagian Paling Atas) */}
            <section className="relative px-4 pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-28 lg:pb-40 overflow-hidden text-center">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black"></div>
                <div className="relative z-10 container mx-auto">
                    <div>
                        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
                            <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full animate-pulse"></span>
                            Partner Digital Kreatif Anda di Pontianak
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                            Jasa Pembuatan Website Profesional di <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-500 dark:to-purple-500">Pontianak</span> – Hadirkan Bisnis Anda di Halaman 1 Google.
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                            Bantu UMKM dan Perusahaan di Pontianak Go-Digital dengan website yang cepat, elegan, dan menghasilkan penjualan. <strong>Bisa ketemuan langsung untuk konsultasi!</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="https://wa.me/6289678386070"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                aria-label="Konsultasi Gratis via WhatsApp"
                            >
                                Konsultasi via WhatsApp - Gratis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Trust Bar (Section Logo) */}
            <section className="py-12 bg-gray-50 dark:bg-zinc-900/50 border-y border-gray-100 dark:border-zinc-800">
                <div className="container mx-auto px-4">
                    <h2 className="sr-only">Klien dan Partner Kami</h2>
                    <p className="text-center text-xs font-bold text-gray-500 mb-10 uppercase tracking-widest">Dipercaya oleh Pelaku Usaha & Digital Kreator:</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90 hover:opacity-100 transition-all duration-500 px-4">
                        <div className="relative w-32 h-12">
                            <Image src="/image/agmr.webp" alt="AGMR Logo" fill className="object-contain" sizes="128px" />
                        </div>
                        <div className="relative w-40 h-14">
                            <Image src="/image/ptsumberniaga.webp" alt="PT Sumber Niaga Logo" fill className="object-contain" sizes="160px" />
                        </div>

                        <div className="relative w-56 h-20">
                            <Image src="/image/kelassatu.webp" alt="Kelas satu Logo" fill className="object-contain" sizes="224px" />
                        </div>
                        <div className="relative w-60 h-35">
                            <Image src="/image/sekolah.webp" alt="Sekolah Partner Logo" fill className="object-contain" sizes="240px" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Value Proposition (Kenapa Harus Kami?) */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="sr-only">Keunggulan Layanan Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-900 dark:text-white">
                        {[
                            { title: "Partner Lokal Terpercaya", icon: MapPin, color: "blue", desc: "Kami berbasis di Pontianak. Siap diajak bertemu langsung untuk mendiskusikan strategi digital bisnis Anda." },
                            { title: "Website High-Performance", icon: Smartphone, color: "green", desc: "Website buatan kami ringan, responsif di HP, dan menggunakan standar keamanan terbaru." },
                            { title: "Siap Terima Beres", icon: Rocket, color: "purple", desc: "Mulai dari domain, hosting, hingga optimasi SEO awal agar website Anda mudah ditemukan di Google." }
                        ].map((prop, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center p-8 bg-gray-50 dark:bg-zinc-900/50 rounded-[2rem] border border-gray-100 dark:border-zinc-800"
                            >
                                <div className={`w-16 h-16 bg-${prop.color}-100 dark:bg-${prop.color}-900/30 rounded-2xl flex items-center justify-center mb-8`}>
                                    <prop.icon className={`w-8 h-8 text-${prop.color}-700 dark:text-${prop.color}-400`} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{prop.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Advanced Portfolio Grid - ELEGANT & MODERN */}
            <PortfolioSection />

            {/* Section 5: Area Layanan Kami (Pintu Masuk Niche) */}
            <section className="py-24 bg-white dark:bg-black" id="services">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Solusi Digital untuk Berbagai Kebutuhan</h2>
                        <p className="text-gray-600 dark:text-gray-400">Apapun bidang usaha Anda, kami punya solusi websitenya.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        {[
                            { title: "Profil Perusahaan", icon: Monitor, color: "blue", desc: "Untuk Instansi, Jasa, & Kantor. Tampilkan kredibilitas secara profesional.", href: "/jasa-pembuatan-website-pontianak" },
                            { title: "Toko Online", icon: Smartphone, color: "purple", desc: "Sistem penjualan otomatis 24 jam dengan integrasi payment gateway & ongkir.", href: "/jasa-toko-online-pontianak" },
                            { title: "Website Ekspor", icon: Globe, color: "green", desc: "Standar internasional untuk pasar global. Multibahasa dan SEO Global.", href: "/jasa-website-ekspor-pontianak" },
                            { title: "Landing Page", icon: Zap, color: "pink", desc: "Fokus konversi tinggi untuk iklan & promo. Cocok untuk kampanye spesifik.", href: "/services" }
                        ].map((service, i) => (
                            <div key={i} className="p-8 bg-gray-50 dark:bg-zinc-900/50 rounded-3xl border border-gray-100 dark:border-zinc-800 hover:border-blue-500/50 transition-all group">
                                <div className={`w-12 h-12 bg-${service.color}-100 dark:bg-${service.color}-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{service.desc}</p>
                                <Link href={service.href} className={`text-${service.color}-700 dark:text-${service.color}-400 font-bold text-sm inline-flex items-center hover:underline`} aria-label={`Info Detail tentang ${service.title}`}>Info Detail <ArrowRight className="ml-2 w-4 h-4" /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Social Proof / Carousel WhatsApp */}
            <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                        Testimoni
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Testimoni real dari WhatsApp — tanpa edit, tanpa rekayasa.
                    </p>

                    <div className="relative max-w-6xl mx-auto">

                        {/* Arrow Left */}
                        <button
                            onClick={() => {
                                document.getElementById("wa-carousel")?.scrollBy({
                                    left: -300,
                                    behavior: "smooth",
                                });
                            }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 shadow-lg p-3 rounded-full hover:scale-110 transition"
                            aria-label="Slide sebelumnya"
                        >
                            <ChevronLeft />
                        </button>

                        {/* Carousel */}
                        <div
                            id="wa-carousel"
                            className="flex gap-6 overflow-x-auto px-10 scrollbar-hide snap-x snap-mandatory"
                        >
                            {[
                                "/image/testimoni/wa1.webp",
                                "/image/testimoni/wa2.webp",
                                "/image/testimoni/wa3.webp",
                                "/image/testimoni/wa4.webp",
                                "/image/testimoni/wa5.webp",
                                "/image/testimoni/wa6.webp",
                            ].map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative min-w-[220px] md:min-w-[260px] h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all snap-center"
                                >
                                    <Image
                                        src={img}
                                        alt={`Testimoni ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Arrow Right */}
                        <button
                            onClick={() => {
                                document.getElementById("wa-carousel")?.scrollBy({
                                    left: 300,
                                    behavior: "smooth",
                                });
                            }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 shadow-lg p-3 rounded-full hover:scale-110 transition"
                            aria-label="Slide berikutnya"
                        >
                            <ChevronRight />
                        </button>

                    </div>
                </div>
            </section>



            {/* Section 7: FAQ (Pertanyaan Umum) - Bagus untuk SEO */}
            <section className="py-24 bg-white dark:bg-black" id="faq">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Pertanyaan Umum</h2>
                        <p className="text-gray-600 dark:text-gray-400">Jawaban untuk hal-hal yang sering ditanyakan klien kami.</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-100 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm">
                                <details className="group">
                                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-gray-50 dark:bg-zinc-900/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
                                        <span className="font-bold text-gray-800 dark:text-white md:text-lg">{faq.q}</span>
                                        <ChevronDown className="w-6 h-6 text-gray-500 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="p-6 text-gray-600 dark:text-gray-400 bg-white dark:bg-black leading-relaxed border-t border-gray-100 dark:border-zinc-800">
                                        {faq.a}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Tech Stack (Optional/Decorative) */}
            <section className="py-20 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 text-left">
                        <div className="md:w-1/2">
                            <span className="inline-block py-1 px-3 rounded bg-blue-600/20 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/30 uppercase tracking-widest text-[10px]">Tech Stack Unggulan</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Kecepatan Adalah <br /><span className="text-blue-500">Segalanya.</span></h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Next.js memberikan kecepatan loading ekstrim, SEO yang lebih baik di Google, dan keamanan tingkat enterprise yang sulit didapat di platform biasa.
                            </p>
                            <ul className="space-y-4">
                                {['Google PageSpeed Score 90+', 'SEO Friendly (SSR/ISR)', 'Keamanan Enterprise Grade'].map(item => (
                                    <li key={item} className="flex items-center text-gray-300 font-semibold text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-gray-900 p-8 rounded-[2rem] border border-gray-800 shadow-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Performance", val: "98" },
                                    { label: "SEO", val: "100" },
                                    { label: "Best Practices", val: "100" },
                                    { label: "Accessibility", val: "100" }
                                ].map(stat => (
                                    <div key={stat.label} className="bg-gray-800 p-6 rounded-2xl text-center border border-gray-700">
                                        <div className="text-4xl font-black text-green-500 mb-1">{stat.val}</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Final CTA */}
            <section className="py-24 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">SIAP DIGITALISASI BISNIS ANDA?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Mari diskusi santai untuk kembangkan strategi digital yang tepat sasaran.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm">
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
