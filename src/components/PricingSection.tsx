'use client';

import { Check, MessageSquare, Code2, Cpu, Globe2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingSection() {
    const benefits = [
        "Fitur Sesuai Kebutuhan",
        "Desain Eksklusif & Unik",
        "Terima Jadi & Langsung Online",
        "Integrasi Sistem Khusus",
        "Optimasi Kecepatan Sesuai Budget",
        "Dukungan Teknis Prioritas"
    ];

    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden" id="pricing">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <Sparkles className="w-3 h-3" />
                        Solusi Custom
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">
                        Punya <span className="text-blue-600">Ide</span> Proyek?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                        Kami siap merealisasikan website impian Anda dengan sistem yang fleksibel dan budget yang bisa disesuaikan.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Background Decorative Blur */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">

                            {/* Left Side: Content */}
                            <div className="lg:col-span-7">
                                <div className="space-y-8">
                                    <div className="inline-block">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Mulai dari</span>
                                            <span className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter">Rp 999Rb</span>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium mt-2 text-sm">Budget fleksibel sesuai kompleksitas fitur yang Anda inginkan.</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {benefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center">
                                                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[4]" />
                                                </div>
                                                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="pt-6">
                                        <Link
                                            href="https://wa.me/6289678386070?text=Halo,%20saya%20ingin%20konsultasi%20proyek%20custom%20website%20dengan%20budget%20mulai%20999rb"
                                            className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 group/btn"
                                        >
                                            <MessageSquare className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                                            <span className="uppercase tracking-widest text-sm">Konsultasi via WhatsApp</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Visual decoration */}
                            <div className="lg:col-span-5 hidden lg:block">
                                <div className="relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-3xl border border-gray-100 dark:border-zinc-700">
                                                <Code2 className="w-8 h-8 text-blue-600 mb-4" />
                                                <p className="text-xs font-black uppercase text-gray-400 tracking-tighter">Clean Code</p>
                                            </div>
                                            <div className="p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-3xl border border-gray-100 dark:border-zinc-700 translate-x-8">
                                                <Cpu className="w-8 h-8 text-purple-600 mb-4" />
                                                <p className="text-xs font-black uppercase text-gray-400 tracking-tighter">Performance</p>
                                            </div>
                                        </div>
                                        <div className="pt-12 space-y-4">
                                            <div className="p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-3xl border border-gray-100 dark:border-zinc-700">
                                                <Globe2 className="w-8 h-8 text-emerald-600 mb-4" />
                                                <p className="text-xs font-black uppercase text-gray-400 tracking-tighter">Scalability</p>
                                            </div>
                                            <div className="p-6 bg-blue-600 rounded-3xl shadow-xl shadow-blue-600/30 -translate-x-4">
                                                <Sparkles className="w-8 h-8 text-white mb-4" />
                                                <p className="text-xs font-black uppercase text-white/50 tracking-tighter">Modern UI</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

                <div className="mt-16 text-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.3em] bg-gray-50 dark:bg-zinc-900/50 py-4 px-8 rounded-full inline-block border border-gray-100 dark:border-zinc-800">
                        ⚡ Kami juga melayani pengerjaan fitur spesifik atau maintenance website lama
                    </p>
                </div>
            </div>
        </section>
    );
}
