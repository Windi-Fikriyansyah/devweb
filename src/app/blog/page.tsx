import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Blog Teknologi & Bisnis Digital | DevStudio",
    description: "Insight terbaru seputar pengembangan website, mobile apps, startup, dan strategi bisnis digital.",
};

const posts = [
    {
        title: 'Mengapa Next.js Lebih Baik dari WordPress untuk Bisnis Skala Besar?',
        excerpt: 'Pelajari keunggulan performa, keamanan, dan skalabilitas Next.js dibandingkan CMS tradisional.',
        date: '12 Jan 2024',
        category: 'Technology',
        readTime: '5 min read'
    },
    {
        title: 'React Native vs Flutter: Mana yang Harus Anda Pilih di 2024?',
        excerpt: 'Perbandingan mendalam dua framework cross-platform terpopuler untuk pengembangan aplikasi mobile.',
        date: '08 Jan 2024',
        category: 'Mobile Dev',
        readTime: '7 min read'
    },
    {
        title: '5 Fitur Wajib Aplikasi E-Commerce untuk Meningkatkan Konversi',
        excerpt: 'Jangan lewatkan fitur-fitur krusial ini jika Anda ingin membangun toko online yang sukses.',
        date: '03 Jan 2024',
        category: 'Business',
        readTime: '4 min read'
    },
    {
        title: 'Pentingnya UI/UX Design dalam Membangun Brand Digital',
        excerpt: 'Desain bukan sekadar estetika, tapi tentang bagaimana user berinteraksi dengan produk Anda.',
        date: '28 Dec 2023',
        category: 'Design',
        readTime: '6 min read'
    },
    {
        title: 'Mengenal SEO Technical: Cara Agar Website Anda Disukai Google',
        excerpt: 'Panduan dasar optimasi teknis website agar mudah di-crawl dan di-index oleh search engine.',
        date: '20 Dec 2023',
        category: 'SEO',
        readTime: '8 min read'
    },
    {
        title: 'Biaya Pembuatan Aplikasi Mobile Premium: Breakdown Lengkap',
        excerpt: 'Transparansi komponen biaya dalam pengembangan aplikasi mobile profesional.',
        date: '15 Dec 2023',
        category: 'Guide',
        readTime: '5 min read'
    }
];

export default function BlogPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Blog & Insight</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Artikel pilihan untuk menambah wawasan teknologi dan bisnis digital Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <article key={i} className="flex flex-col bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                            {/* Dummy Thumbnail Image */}
                            <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                                    Article Thumbnail
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 mb-3 space-x-2">
                                    <span className="font-bold uppercase tracking-wider">{post.category}</span>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-gray-500">{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                                    <Link href="#">{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto text-xs text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    Diposting pada {post.date}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
}
