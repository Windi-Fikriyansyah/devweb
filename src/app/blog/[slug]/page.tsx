import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Share2, ChevronRight, Bookmark, Facebook, Twitter, Instagram, Rocket } from 'lucide-react';
import db from '@/lib/db';
import ReadingProgress from '@/components/ReadingProgress';

export const dynamic = 'force-dynamic';


async function getArticleBySlug(slug: string) {
    try {
        const [rows] = await db.query('SELECT * FROM articles WHERE slug = ?', [slug]);
        const articles = rows as any[];
        return articles[0] || null;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

async function getRelatedArticles(category: string, currentSlug: string) {
    try {
        const [rows] = await db.query(
            'SELECT title, slug, image_url, category FROM articles WHERE category = ? AND slug != ? LIMIT 2',
            [category, currentSlug]
        );
        return rows as any[];
    } catch (error) {
        return [];
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = await getRelatedArticles(article.category, slug);

    return (
        <article className="min-h-screen bg-white dark:bg-zinc-950 pb-24 selection:bg-blue-100 selection:text-blue-900">
            <ReadingProgress />

            {/* Elegant Background Aura */}
            <div className="absolute top-0 inset-x-0 h-[1000px] pointer-events-none overflow-hidden z-0">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50/50 dark:bg-blue-900/10 blur-[120px] rounded-full" />
                <div className="absolute top-[5%] -right-[10%] w-[30%] h-[30%] bg-purple-50/50 dark:bg-purple-900/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10 pt-12">
                {/* Navigation & Actions */}
                <div className="flex items-center justify-between mb-16">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-all font-bold uppercase text-[10px] tracking-[0.2em] group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Kembali ke Blog
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-full border border-gray-100 dark:border-zinc-800 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
                            <Bookmark className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Hero Header */}
                <header className="mb-16">
                    <div className="inline-flex items-center gap-2 mb-8 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-2xl border border-blue-100/50 dark:border-blue-800/30">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.15em]">
                            {article.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-10 leading-[1.05] tracking-tighter">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-10 gap-y-6 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest pb-12">

                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <div>
                                <p className="text-[10px] text-gray-400 mb-0.5">Diterbitkan</p>
                                <p className="text-gray-900 dark:text-gray-200">{new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <div>
                                <p className="text-[10px] text-gray-400 mb-0.5">Waktu Baca</p>
                                <p className="text-gray-900 dark:text-gray-200">5 Menit</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Image */}
                <div className="relative aspect-[16/9] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden mb-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                    <Image
                        src={article.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>

                {/* Content Area */}
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Sticky Socials Side */}
                    <aside className="hidden lg:flex flex-col gap-8 sticky top-32 h-fit">
                        <div className="flex flex-col gap-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 [writing-mode:vertical-lr] mb-4">Bagikan</p>
                            {[Share2, Facebook, Twitter, Instagram].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 dark:border-zinc-800 text-gray-400 hover:text-blue-600 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Article Body */}
                    <div
                        className="flex-1 max-w-3xl prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-black prose-headings:tracking-tight prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-blue prose-img:rounded-3xl prose-a:text-blue-600 dark:prose-a:text-blue-400"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>

                {/* Bottom Author Section */}
                <div className="mt-32 p-10 md:p-16 bg-gray-50 dark:bg-zinc-900/50 rounded-[3rem] border border-gray-100 dark:border-zinc-800 flex flex-col items-center text-center gap-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.1] group-hover:scale-110 transition-transform duration-700">
                        <Rocket className="w-64 h-64 text-blue-600" />
                    </div>

                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-blue-600/20 ring-[12px] ring-white dark:ring-zinc-900">
                        DS
                    </div>

                    <div className="max-w-xl">
                        <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Punya pertanyaan tentang artikel ini?</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                            Konsultasikan kebutuhan digital anda bersama tim spesialis kami secara gratis. Kami siap membantu UMKM go-digital dengan profesional.
                        </p>
                        <Link
                            href={`https://wa.me/6289678386070?text=Halo,%20saya%20sudah%20membaca%20artikel%20"${article.title}"%20dan%20ingin%20konsultasi.`}
                            className="inline-flex items-center gap-4 px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-widest"
                        >
                            Hubungi Spesialis Kami <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <div className="mt-32">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight uppercase italic">Baca Juga</h3>
                            <Link href="/blog" className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                                Lihat Semua <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedArticles.map((rel) => (
                                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800">
                                    <Image src={rel.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800'} alt={rel.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                                        <div className="mb-3">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                                                {rel.category}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-black text-white leading-tight group-hover:text-blue-300 transition-colors">
                                            {rel.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}


