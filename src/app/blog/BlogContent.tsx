'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogContent({ articles }: { articles: any[] }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-black pt-12 pb-24">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter">
                        Digital <span className="text-blue-600">Insights</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        Temukan artikel terbaru seputar teknologi, bisnis ekspor, e-commerce, dan tips digital marketing untuk UMKM di Pontianak.
                    </p>
                </div>

                {articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, i) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={article.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-xs mb-4 font-bold uppercase tracking-wider">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5" />
                                            {article.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${article.slug}`}
                                        className="inline-flex items-center text-blue-600 font-black text-xs uppercase tracking-[0.2em] group-hover:gap-3 transition-all"
                                    >
                                        Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white dark:bg-zinc-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-zinc-800">
                        <h3 className="text-2xl font-black text-gray-400 dark:text-zinc-700 uppercase italic">Belum ada artikel saat ini</h3>
                        <p className="text-gray-500 mt-2">Nantikan update terbaru dari kami segera!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
