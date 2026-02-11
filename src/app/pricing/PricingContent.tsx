'use client';

import { Check, Zap, Globe, ShoppingCart, Rocket, Settings } from 'lucide-react';
import Link from 'next/link';

export default function PricingContent() {
    const pricingData = [
        {
            name: "Express",
            price: "Rp 800rb",
            desc: "Landing Page",
            features: {
                target: "UMKM Mikro",
                tech: "Next.js Static",
                pages: "5 Halaman",
                wa: true,
                seo: "Basic",
                payment: false,
                support: "1 Minggu",
            },
            icon: Zap
        },
        {
            name: "Startup",
            price: "Rp 1.5jt - 2.5jt",
            desc: "Bisnis Lokal",
            features: {
                target: "Jasa & UKM",
                tech: "Next.js / WP",
                pages: "Up to 8 Hal",
                wa: true,
                seo: "Local SEO",
                payment: false,
                support: "1 Bulan",
            },
            icon: Rocket
        },
        {
            name: "Business",
            price: "Rp 3.5jt - 5.5jt",
            desc: "Ekspor & Supplier",
            features: {
                target: "Pasar Global",
                tech: "Next.js High",
                pages: "Up to 20 Hal",
                wa: true,
                seo: "Global SEO",
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
                tech: "Full-Stack",
                pages: "Unlimited",
                wa: true,
                seo: "Basic",
                payment: true,
                support: "6 Bulan",
            },
            icon: ShoppingCart
        },
        {
            name: "Custom",
            price: "By Quote",
            desc: "Sistem & App",
            features: {
                target: "Enterprise",
                tech: "Custom Stack",
                pages: "Scalable",
                wa: true,
                seo: "Custom",
                payment: true,
                support: "Priority",
            },
            icon: Settings
        }
    ];

    const rows = [
        { label: "Harga", key: "price", isTopLevel: true },
        { label: "Target", key: "target" },
        { label: "Tech", key: "tech" },
        { label: "Hal", key: "pages" },
        { label: "WhatsApp", key: "wa", type: "check" },
        { label: "SEO", key: "seo" },
        { label: "Payment", key: "payment", type: "check" },
        { label: "Support", key: "support" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-black text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-4 pt-24 pb-12">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                        Pilihan <span className="text-blue-600">Paket</span> Website
                    </h1>
                </div>

                <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-zinc-800">
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full min-w-[800px] border-collapse text-left table-fixed">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-zinc-800">
                                    <th className="p-4 w-[140px] bg-gray-50 dark:bg-zinc-800/50 sticky left-0 z-20">
                                        <span className="text-[10px] font-black uppercase text-gray-400">Fitur</span>
                                    </th>
                                    {pricingData.map((pkg, i) => (
                                        <th key={i} className={`p-4 relative ${pkg.popular ? 'bg-blue-50/50 dark:bg-blue-500/5' : ''}`}>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className={`text-sm font-black uppercase truncate ${pkg.popular ? 'text-blue-600' : 'text-gray-900 dark:text-white'}`}>
                                                    {pkg.name}
                                                </h3>
                                            </div>
                                            <div className="text-[10px] text-gray-500 font-medium">
                                                {pkg.desc}
                                            </div>
                                            {pkg.popular && (
                                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] px-2 py-0.5 rounded-bl-lg font-black uppercase transform">
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
                                        <td className="p-3 font-bold text-gray-500 dark:text-gray-400 bg-gray-50/50 dark:bg-zinc-900/80 sticky left-0 z-10 border-r border-gray-100 dark:border-zinc-800/50">
                                            {row.label}
                                        </td>
                                        {pricingData.map((pkg: any, cIdx) => (
                                            <td key={cIdx} className={`p-3 ${pkg.popular ? 'bg-blue-50/50 dark:bg-blue-500/5' : ''}`}>
                                                {row.type === 'check' ? (
                                                    pkg.features[row.key] ? (
                                                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${pkg.popular ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'}`}>
                                                            <Check className="w-2.5 h-2.5" />
                                                        </div>
                                                    ) : (
                                                        <span className="text-gray-200 dark:text-zinc-800">—</span>
                                                    )
                                                ) : (
                                                    <span className={`block truncate ${row.key === 'price' ? 'font-black text-gray-900 dark:text-white' : 'font-medium'}`}>
                                                        {row.isTopLevel ? pkg[row.key] : pkg.features[row.key]}
                                                    </span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                <tr>
                                    <td className="p-4 bg-gray-50/50 dark:bg-zinc-900/80 sticky left-0"></td>
                                    {pricingData.map((pkg, i) => (
                                        <td key={i} className={`p-4 ${pkg.popular ? 'bg-blue-50/50 dark:bg-blue-500/5' : ''}`}>
                                            <Link
                                                href={`https://wa.me/6289678386070?text=Halo,%20saya%20tertarik%20dengan%20${pkg.name}`}
                                                className={`flex items-center justify-center w-full py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${pkg.popular
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20'
                                                    : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-gray-200'
                                                    }`}
                                            >
                                                Pilih
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-[0.2em]">
                        Semua paket sudah termasuk Domain .com / .id & Hosting Premium 1 Tahun
                    </p>
                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}
