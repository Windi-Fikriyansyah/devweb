'use client';

import { Check, MessageSquare, Code2, Cpu, Globe2, Sparkles, Zap, Smartphone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingContent() {
    const benefits = [
        "Fitur Sesuai Kebutuhan",
        "Desain Eksklusif & Unik",
        "Terima Jadi & Langsung Online",
        "Integrasi Sistem Khusus",
        "Optimasi Kecepatan Sesuai Budget",
        "Dukungan Teknis Prioritas"
    ];

    const steps = [
        {
            title: "Konsultasi",
            desc: "Diskusikan ide dan kebutuhan fitur website Anda dengan tim kami.",
            icon: MessageSquare
        },
        {
            title: "Penawaran",
            desc: "Kami berikan estimasi biaya transparan mulai dari 999rb saja.",
            icon: Sparkles
        },
        {
            title: "Pengerjaan",
            desc: "Proses development dengan teknologi modern & clean code.",
            icon: Code2
        },
        {
            title: "Launch",
            desc: "Website siap online dan mendukung pertumbuhan bisnis Anda.",
            icon: Zap
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white dark:from-zinc-950 dark:to-black text-slate-900 dark:text-slate-100 pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Hero Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        Custom Project Solution
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-6"
                    >
                        Website <span className="text-blue-600">Custom</span> <br className="hidden md:block" /> Sesuai Budget Anda
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base leading-relaxed"
                    >
                        Punya kebutuhan khusus yang tidak ada di paket standar? Kami bantu bangun sistem website kustom mulai dari Landing Page simple hingga Web App kompleks.
                    </motion.p>
                </div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-2xl mb-20"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -mr-48 -mt-48"></div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="mb-10">
                                <div className="flex items-baseline gap-3 mb-4">
                                    <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Harga Mulai</span>
                                    <span className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter">Rp 999rb</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Bebas request fitur, tampilan, dan integrasi apapun.</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                                            <Check className="w-3 h-3 stroke-[4]" />
                                        </div>
                                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="https://wa.me/6289678386070?text=Halo,%20saya%20tertarik%20dengan%20layanan%20custom%20website%20mulai%20999rb"
                                className="flex items-center justify-center md:inline-flex gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/30 active:scale-95 group"
                            >
                                <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span className="uppercase tracking-widest text-sm">Konsultasi Sekarang</span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Code2, label: "Tech Stack Modern", color: "text-blue-500" },
                                { icon: ShieldCheck, label: "Security First", color: "text-emerald-500" },
                                { icon: Smartphone, label: "Ultra Responsive", color: "text-purple-500" },
                                { icon: Cpu, label: "Performance Tuned", color: "text-orange-500" },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-slate-50 dark:bg-zinc-800/40 rounded-3xl border border-gray-100 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-800 transition-colors group">
                                    <item.icon className={`w-8 h-8 ${item.color} mb-4 transition-transform group-hover:scale-110`} />
                                    <h4 className="text-sm font-black uppercase tracking-tighter text-gray-900 dark:text-white leading-tight">{item.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Steps Section */}
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-8"
                        >
                            <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-black uppercase tracking-tighter mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.3em] bg-white dark:bg-zinc-900 py-4 px-10 rounded-full inline-block border border-gray-100 dark:border-zinc-800 shadow-sm">
                        ⚡ Melayani Pengembangan Website Baru maupun Penambahan Fitur Website Lama
                    </p>
                </div>
            </div>
        </div>
    );
}
