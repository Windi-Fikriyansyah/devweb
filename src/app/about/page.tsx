'use client';

import { motion } from 'framer-motion';
import {
    Users, Target, Award, Rocket,
    MessageSquare, Heart, CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-white dark:bg-black overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                                Membangun Masa Depan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Digital Pontianak.
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                                Kami adalah kolektif kreatif dan teknis yang berdedikasi untuk membantu bisnis lokal menembus pasar global melalui teknologi website tercanggih.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp} className="space-y-8">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
                                    <Target className="w-4 h-4 mr-2" /> Visi Kami
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 italic">Menjadi jembatan digital utama bagi UMKM dan Perusahaan di Kalimantan Barat untuk dikenal dunia.</h2>
                                <p className="text-gray-600 dark:text-gray-400 italic font-medium leading-relaxed">
                                    Kami percaya bahwa setiap bisnis, sekecil apapun, layak memiliki kehadiran online yang profesional dan kompetitif di kancah internasional.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
                                    <Heart className="text-rose-500" /> Misi Kami:
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Menghadirkan teknologi website Next.js & React untuk performa maksimal.",
                                        "Memberikan edukasi digital bagi pelaku usaha lokal.",
                                        "Membangun ekosistem e-commerce yang otomatis dan efisien.",
                                        "Memberikan layanan purna jual yang solutif dan bersahabat."
                                    ].map((misi, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                            <span>{misi}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative aspect-square"
                        >
                            <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] rotate-3 -z-10 opacity-20"></div>
                            <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border border-slate-200 dark:border-zinc-800 shadow-2xl h-full flex flex-col justify-center">
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { v: "50+", l: "Project Selesai", i: Award },
                                        { v: "100%", l: "Client Satisfaction", i: Heart },
                                        { v: "24/7", l: "System Monitoring", i: Rocket },
                                        { v: "1-on-1", l: "Konsultasi Personal", i: MessageSquare }
                                    ].map((stat, s) => (
                                        <div key={s} className="text-center">
                                            <stat.i className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                            <div className="text-3xl font-black text-gray-900 dark:text-white">{stat.v}</div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{stat.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeUp} className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">Kenapa Partner Dengan Kami?</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Kami tidak hanya memberikan kode, kami memberikan solusi pertumbuhan bisnis.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                t: "Keahlian Lokal, Standar Global",
                                d: "Kami mengerti kultur bisnis di Pontianak, namun menerapkan standar teknis yang digunakan startup kelas dunia.",
                                i: Globe
                            },
                            {
                                t: "Transparansi Penuh",
                                d: "Tidak ada biaya tersembunyi. Semua progres dilaporkan secara berkala dan terdokumentasi dengan baik.",
                                i: Search
                            },
                            {
                                t: "Dukungan Berkelanjutan",
                                d: "Kami tidak akan meninggalkan Anda setelah website jadi. Kami siap membantu saat Anda ingin melakukan update atau scaling.",
                                i: Laptop
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx} {...fadeUp} transition={{ delay: idx * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800"
                            >
                                <h3 className="text-xl font-black mb-4 dark:text-white">{feature.t}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// Dummy components to avoid import errors if not existing in context but usually they are from lucide-react or similar
const Globe = (props: any) => <Users {...props} />
const Search = (props: any) => <Award {...props} />
const Laptop = (props: any) => <Rocket {...props} />
