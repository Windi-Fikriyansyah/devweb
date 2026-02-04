import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Smartphone, Zap, Shield, ArrowRight, HelpCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
    title: "Jasa Pembuatan Aplikasi Mobile (Android & iOS) | React Native & Flutter",
    description: "Buat aplikasi mobile bisnis Anda dengan teknologi React Native & Flutter. Performa cepat, desain modern, dan siap publish ke Play Store & App Store.",
};

const faqs = [
    {
        question: "Berapa lama waktu pembuatan aplikasi mobile?",
        answer: "Waktu pengerjaan bervariasi tergantung kompleksitas fitur. Untuk aplikasi standar biasanya memakan waktu 1-2 bulan, sedangkan aplikasi kompleks bisa 3-6 bulan."
    },
    {
        question: "Apakah aplikasi bisa untuk Android dan iOS?",
        answer: "Ya! Kami menggunakan teknologi Cross-Platform (React Native / Flutter) sehingga satu kali pengembangan bisa berjalan native di kedua platform (Android & iOS) dengan performa tinggi."
    },
    {
        question: "Apakah saya mendapatkan source code?",
        answer: "Tentu, Anda memiliki hak penuh atas source code aplikasi yang kami bangun setelah pelunasan pembayaran."
    },
    {
        question: "Bagaimana dengan maintenance setelah rilis?",
        answer: "Kami memberikan garansi bug fix gratis selama 3 bulan pertama. Setelah itu, kami menawarkan paket maintenance bulanan untuk update fitur dan keamanan."
    }
];

const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function MobileAppPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="bg-white dark:bg-black min-h-screen">

                {/* Header / Hero Service */}
                <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-full mb-6 max-w-xs mx-auto backdrop-blur-sm border border-blue-500/30">
                            <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-200 font-medium text-sm">Mobile App Development Expert</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Jasa Pembuatan Aplikasi Mobile Terpercaya</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Ubah bisnis Anda menjadi lebih mudah diakses pelanggan melalui genggaman tangan.
                        </p>
                    </div>
                </section>

                {/* PAS: Problem */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Apakah Bisnis Anda "Hilang" dari Radar Pelanggan?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                Di era digital ini, <strong>70% pengguna internet</strong> mengakses layanan melalui smartphone mereka.
                                Jika bisnis Anda hanya mengandalkan website desktop atau toko fisik, Anda setiap hari kehilangan potensi pelanggan yang mencari solusi instan melalui aplikasi.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PAS: Agitation */}
                <section className="py-16 bg-red-50 dark:bg-red-900/10 border-y border-red-100 dark:border-red-900/20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-red-200 dark:bg-red-800 blur-2xl opacity-20 rounded-full"></div>
                                    <h3 className="relative text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                        Kompetitor Anda Sudah Ada di Saku Pelanggan
                                    </h3>
                                    <p className="relative text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                        Bayangkan pelanggan setia Anda beralih ke kompetitor hanya karena mereka memiliki aplikasi yang memudahkan pemesanan dan transaksi.
                                        Tanpa aplikasi mobile, bisnis Anda terlihat <strong>kurang profesional</strong> dan <strong>sulit dijangkau</strong>.
                                        Marketplace dan startup besar mendominasi karena mereka memprioritaskan <em>User Experience</em> di mobile. Apakah Anda siap tertinggal?
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-1 gap-4">
                                {['Kehilangan Brand Awareness', 'Engagement Rendah', 'Profit Stagnan', 'Kalah Persaingan Digital'].map((item, i) => (
                                    <div key={i} className="flex items-center p-4 bg-white dark:bg-black rounded-lg shadow-sm border border-red-100 dark:border-red-900/30">
                                        <Shield className="w-6 h-6 text-red-500 mr-3" />
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PAS: Solution */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Solusi Kami</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                                Dominasi Pasar dengan Aplikasi Mobile Canggih
                            </h2>
                            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                                Kami membangun aplikasi mobile berkinerja tinggi yang disukai pengguna dan menguntungkan bisnis.
                                Satu aplikasi, berjalan mulus di Android dan iOS.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">React Native & Flutter</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    Teknologi terbaru yang digunakan Facebook, Instagram, dan Google. Hemat biaya pengembangan hingga 40% dengan performa setara Native.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                                    <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">User Friendly UI/UX</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    Desain antarmuka yang intuitif dan menarik, memastikan pengguna betah berlama-lama menggunakan aplikasi Anda.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Siap Publish</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    Kami bantu urus submission ke Google Play Store dan Apple App Store sampai aplikasi Anda live dan bisa di-download.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Konsultasikan Ide Aplikasi Anda
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section with Schema Markup */}
                <section className="py-20 bg-gray-50 dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className="text-center mb-12">
                            <div className="flex justify-center mb-4">
                                <HelpCircle className="w-10 h-10 text-gray-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Pertanyaan Sering Diajukan (FAQ)</h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                    <details className="group">
                                        <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                                            <span className="transition-transform group-open:rotate-180">
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-900/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
