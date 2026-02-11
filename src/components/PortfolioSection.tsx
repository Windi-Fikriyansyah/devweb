'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
// Data fetching handled via API from database

interface PortfolioSectionProps {
    title?: string;
    subtitle?: string;
    showFilter?: boolean;
    limit?: number;
    bgClass?: string;
    showFooterLink?: boolean;
}

export default function PortfolioSection({
    title = "Karya Terbaru Kami",
    subtitle = "Inspirasi solusi digital untuk memperkuat kehadiran online bisnis Anda.",
    showFilter = true,
    limit,
    bgClass = "bg-gray-50 dark:bg-zinc-950",
    showFooterLink = true
}: PortfolioSectionProps) {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const res = await fetch('/api/portfolios');
                if (res.ok) {
                    const data = await res.json();
                    setItems(data);
                }
            } catch (error) {
                console.error('Error fetching portfolios:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPortfolios();
    }, []);

    const filteredItems = activeCategory === "All"
        ? items
        : items.filter(item => item.category === activeCategory);

    const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

    if (loading) {
        return (
            <section className={`pt-4 pb-16 md:pt-1 md:pb-5 overflow-hidden ${bgClass}`} id="portfolio">
                <div className="container mx-auto px-4 text-center py-20">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                    <p className="mt-4 text-gray-500 font-bold uppercase tracking-widest text-xs">Memuat Portfolio...</p>
                </div>
            </section>
        );
    }

    return (
        <section className={`pt-1 pb-16 md:pt-10 md:pb-8 overflow-hidden ${bgClass}`} id="portfolio">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-6 md:mb-8"
                    >
                        {subtitle}
                    </motion.p>

                    {showFilter && (
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex p-1 bg-gray-200/50 dark:bg-zinc-800/50 rounded-2xl border border-gray-200 dark:border-zinc-800 backdrop-blur-sm overflow-x-auto max-w-full">
                                {["All", ...Array.from(new Set(items.map(i => i.category)))].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all duration-300 whitespace-nowrap ${activeCategory === cat
                                            ? "bg-white dark:bg-zinc-800 text-blue-600 shadow-md transform scale-105"
                                            : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                            }`}
                                        aria-label={`Filter portfolio by ${cat}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {displayItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border-4 border-gray-100 dark:border-zinc-800 shadow-xl flex flex-col p-4"
                            >
                                <div className="relative h-64 overflow-hidden rounded-[1.5rem] border-2 border-gray-50 dark:border-zinc-800 shadow-inner">
                                    <Image
                                        src={item.image}
                                        alt={item.image_alt || item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <Link href="/portfolio" className="bg-white text-zinc-900 px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl" aria-label={`Lihat detail ${item.title}`}>
                                            Detail {item.title} <ExternalLink size={16} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pt-6 pb-2 px-2 text-left">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-200 dark:border-blue-800">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 italic">
                                        &quot;{item.desc}&quot;
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {showFooterLink && (
                    <div className="mt-16 text-center">
                        <Link href="/portfolio" className="inline-flex items-center text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold tracking-widest text-sm uppercase transition-colors">
                            Lihat Seluruh Karya Kami <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
