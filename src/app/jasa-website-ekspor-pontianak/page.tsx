'use client';

import Link from 'next/link';
import {
    Shield, Globe, MapPin, Zap, ArrowRight, CheckCircle2,
    Search, Languages, BarChart3, HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import PortfolioSection from '@/components/PortfolioSection';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function ExportLandingPage() {
    const steps = [
        { title: "Konsultasi Strategis", desc: "Menganalisis target pasar negara tujuan dan kebutuhan teknis bisnis Anda." },
        { title: "Desain Berstandar Trust", desc: "Membangun tampilan yang memberikan kesan kredibel bagi calon buyer." },
        { title: "Optimasi Global SEO", desc: "Memastikan website muncul di mesin pencari luar negeri (Google.com / Google.co.uk)." },
        { title: "Launch & Support", desc: "Website live dengan server internasional dan dukungan teknis berkelanjutan." }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8">
                            <Globe className="w-4 h-4" />
                            <span>Pontianak to Global Market</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
                            Website Ekspor <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Kredibilitas Tanpa Batas.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
                            Kami tidak hanya membuat website, kami membangun identitas digital yang memenangkan kepercayaan <span className="text-white italic underline">International Buyer</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="https://wa.me/6289678386070" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-blue-500/20">
                                Konsultasi Project Ekspor <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Mengapa Website Biasa Tidak Cukup?</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Buyer internasional memiliki standar tinggi dalam menilai partner bisnis baru.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { t: "Isu Kecepatan (Latency)", d: "Server lokal Indonesia lambat diakses dari Eropa/Amerika. Kami gunakan Global CDN." },
                            { t: "Desain Berantakan", d: "Tampilan yang tidak profesional menurunkan 'Trust Score' bisnis Anda dalam 3 detik." },
                            { t: "Informasi Tidak Jelas", d: "Integrasi katalog produk & sertifikasi yang tidak standar membuat buyer ragu." }
                        ].map((item, i) => (
                            <motion.div
                                key={i} {...fadeUp}
                                className="p-8 rounded-[2rem] bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800"
                            >
                                <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-6 text-rose-600">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white">{item.t}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
                        <motion.div {...fadeUp}>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Standar Teknis Website Ekspor Kami</h2>
                            <div className="space-y-4">
                                {[
                                    { i: Languages, t: "Multilingual System", d: "Navigasi dalam bahasa Inggris, Mandarin, atau Arab secara native." },
                                    { i: Search, t: "International SEO", d: "Optimasi khusus agar ranking di Google region luar negeri." },
                                    { i: Shield, t: "Enterprise Security", d: "Enkripsi tingkat tinggi untuk menjaga data rahasia perusahaan." },
                                    { i: MapPin, t: "Google Maps Verified", d: "Integrasi lokasi gudang/pabrik untuk verifikasi buyer." }
                                ].map((f, idx) => (
                                    <div key={idx} className="flex gap-5 p-4 rounded-2xl hover:bg-white dark:hover:bg-zinc-900 transition-colors">
                                        <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                                            <f.i className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black dark:text-white">{f.t}</h4>
                                            <p className="text-sm text-slate-500">{f.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-600/20 rounded-[3rem] blur-2xl group-hover:bg-blue-600/30 transition-all"></div>
                            <div className="relative bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-slate-200 dark:border-zinc-800 shadow-2xl">
                                <h3 className="text-2xl font-black mb-6 dark:text-white flex items-center gap-3">
                                    <BarChart3 className="text-blue-600" /> Kesiapan Digital
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { l: "Desain Professional", p: "100%" },
                                        { l: "Kecepatan Akses Global", p: "98%" },
                                        { l: "Keamanan Sertifikasi SSL", p: "100%" },
                                        { l: "Mobile Responsiveness", p: "100%" }
                                    ].map((stat, s) => (
                                        <div key={s}>
                                            <div className="flex justify-between text-sm font-bold mb-2">
                                                <span className="dark:text-white">{stat.l}</span>
                                                <span className="text-blue-600">{stat.p}</span>
                                            </div>
                                            <div className="w-full h-2 bg-slate-100 dark:bg-zinc-800 rounded-full">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: stat.p }}
                                                    className="h-full bg-blue-600 rounded-full"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4 text-center text-left">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 dark:text-white text-center">Process to Global</h2>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-zinc-800 -z-10"></div>
                        {steps.map((step, i) => (
                            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-8 shadow-lg shadow-blue-600/30">
                                    {i + 1}
                                </div>
                                <h4 className="text-xl font-black mb-4 dark:text-white">{step.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-5xl font-black dark:text-white">FAQ Website Ekspor</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { q: "Apa bedanya dengan website biasa?", a: "Website ekspor menggunakan server dengan CDN global agar cepat diakses dari luar negeri, serta struktur data yang ramah untuk buyer B2B internasional." },
                            { q: "Apakah dibantu untuk copywriting bahasa Inggris?", a: "Ya, tim kami dapat membantu menyusun teks yang profesional dan istilah bisnis yang tepat dalam bahasa Inggris." },
                            { q: "Bagaimana jika buyer ingin cek keaslian pabrik?", a: "Kami mengintegrasikan galeri video, foto proses produksi, dan Google Maps yang sudah terverifikasi." }
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
            <section className="py-20 bg-blue-600 text-white overflow-hidden relative">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 italic italic">Siap Menembus Pasar Global?</h2>
                    <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto">Jangan biarkan website yang buruk menghalangi deal jutaan dollar Anda.</p>
                    <Link href="https://wa.me/6289678386070" className="px-12 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-2xl hover:scale-105 transition-all inline-flex items-center">
                        Hubungi Spesialis Ekspor Sekarang
                    </Link>
                </div>
            </section>
        </div>
    );
}
