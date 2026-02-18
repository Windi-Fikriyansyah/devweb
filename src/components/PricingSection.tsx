'use client';

import { Check, Zap, Globe, ShoppingCart, Rocket, Settings } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingSection() {
    const pricingData = [
        {
            name: "Express",
            price: "Rp 800rb",
            desc: "Halaman Promosi",
            features: {
                target: "UMKM Mikro",
                tech: "Sangat Ringan (Sat-set)",
                pages: "5 Halaman",
                wa: true,
                seo: "Gampang Dicari",
                payment: false,
                support: "1 Minggu",
            },
            icon: Zap
        },
        {
            name: "Startup",
            price: "Rp 1.5jt - 2.5jt",
            desc: "Profil Bisnis",
            features: {
                target: "Jasa & UKM",
                tech: "Bisa Edit Mandiri",
                pages: "Up to 8 Hal",
                wa: true,
                seo: "Jagoan Pontianak",
                payment: false,
                support: "1 Bulan",
            },
            icon: Rocket
        },
        {
            name: "Business",
            price: "Rp 3.5jt - 5.5jt",
            desc: "Pasar Luar Negeri",
            features: {
                target: "Supplier & Ekspor",
                tech: "Performa Bintang 5",
                pages: "Up to 20 Hal",
                wa: true,
                seo: "Tampil se-Dunia",
                payment: false,
                support: "3 Bulan",
            },
            popular: true,
            icon: Globe
        },
        {
            name: "E-Commerce",
            price: "Rp 7.0jt++",
            desc: "Toko Online",
            features: {
                target: "Jualan Produk",
                tech: "Sistem Otomatis",
                pages: "Tak Terbatas",
                wa: true,
                seo: "Standar Google",
                payment: true,
                support: "6 Bulan",
            },
            icon: ShoppingCart
        },
        {
            name: "Custom",
            price: "By Quote",
            desc: "Sistem Khusus",
            features: {
                target: "Perusahaan Besar",
                tech: "Sesuai Pesanan",
                pages: "Bisa Ditambah",
                wa: true,
                seo: "Sesuai Target",
                payment: true,
                support: "Prioritas",
            },
            icon: Settings
        }
    ];

    const rows = [
        { label: "Harga", key: "price", isTopLevel: true },
        { label: "Untuk Siapa", key: "target" },
        { label: "Kecanggihan", key: "tech" },
        { label: "Isi Halaman", key: "pages" },
        { label: "Tombol WA", key: "wa", type: "check" },
        { label: "Gampang Dicari", key: "seo" },
        { label: "Bayar di Web", key: "payment", type: "check" },
        { label: "Bantuan", key: "support" },
    ];

    return (
        <section className="py-24 bg-white dark:bg-black overflow-hidden" id="pricing">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">
                        Pilihan <span className="text-blue-600">Paket</span> Website
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Hadir untuk membantu Anda dalam mewujudkan website untuk usaha UMKM hingga Perusahaan supaya Go Online.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-zinc-800"
                >
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full min-w-[800px] border-collapse text-left table-fixed">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-zinc-800">
                                    <th className="p-6 w-[140px] bg-gray-50 dark:bg-zinc-800/50 sticky left-0 z-20">
                                        <span className="text-[10px] font-black uppercase text-gray-400">Fitur</span>
                                    </th>
                                    {pricingData.map((pkg, i) => (
                                        <th key={i} className={`p-6 relative ${pkg.popular ? 'bg-blue-50/50 dark:bg-blue-500/5' : ''}`}>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className={`text-sm font-black uppercase truncate ${pkg.popular ? 'text-blue-600' : 'text-gray-900 dark:text-white'}`}>
                                                    {pkg.name}
                                                </h3>
                                            </div>
                                            <div className="text-[10px] text-gray-500 font-medium">
                                                {pkg.desc}
                                            </div>
                                            {pkg.popular && (
                                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] px-3 py-1 rounded-bl-lg font-black uppercase tracking-widest transform">
                                                    Best
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="text-[12px]">
                                {rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="border-b border-gray-50 dark:border-zinc-800/50 hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors">
                                        <td className="p-4 font-bold text-gray-500 dark:text-gray-400 bg-gray-50/50 dark:bg-zinc-900/80 sticky left-0 z-10 border-r border-gray-100 dark:border-zinc-800/50">
                                            {row.label}
                                        </td>
                                        {pricingData.map((pkg: any, cIdx) => (
                                            <td key={cIdx} className={`p-4 ${pkg.popular ? 'bg-blue-50/50 dark:bg-blue-500/5' : ''}`}>
                                                {row.type === 'check' ? (
                                                    pkg.features[row.key] ? (
                                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'}`}>
                                                            <Check className="w-3 h-3" />
                                                        </div>
                                                    ) : (
                                                        <span className="text-gray-200 dark:text-zinc-800">—</span>
                                                    )
                                                ) : (
                                                    <span className={`block truncate ${row.key === 'price' ? 'font-black text-gray-900 dark:text-white text-base' : 'font-medium'}`}>
                                                        {row.isTopLevel ? pkg[row.key] : pkg.features[row.key]}
                                                    </span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                <tr>
                                    <td className="p-6 bg-gray-50/50 dark:bg-zinc-900/80 sticky left-0"></td>
                                    {pricingData.map((pkg, i) => (
                                        <td key={i} className={`p-6 ${pkg.popular ? 'bg-blue-50/50 dark:bg-blue-500/5' : ''}`}>
                                            <Link
                                                href={`https://wa.me/6289678386070?text=Halo,%20saya%20tertarik%20dengan%20paket%20website%20${pkg.name}`}
                                                className={`flex items-center justify-center w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${pkg.popular
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20'
                                                    : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-gray-200'
                                                    }`}
                                            >
                                                Pilih Paket
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.3em]">
                        Semua paket sudah termasuk Domain & Hosting Premium 1 Tahun
                    </p>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section >
    );
}
