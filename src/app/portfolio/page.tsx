import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Portfolio Project Website & Aplikasi | DevStudio",
    description: "Lihat hasil karya terbaik kami. Studi kasus pembuatan website, aplikasi web, dan aplikasi mobile yang telah terbukti membantu klien.",
};

const projects = [
    {
        title: 'Sistem Informasi Akademik',
        category: 'Web App',
        desc: 'Platform manajemen sekolah terintegrasi dengan modul kesiswaan dan keuangan.',
        img: '/image/web1.webp',
        tech: ['Laravel', 'MySQL']
    },
    {
        title: 'E-Commerce Fashion',
        category: 'Web Development',
        desc: 'Toko online modern dengan fitur multi-vendor dan payment gateway.',
        img: '/image/web2.webp',
        tech: ['Laravel', 'MySQL']
    },
    {
        title: 'AI Analytics Dashboard',
        category: 'Web App',
        desc: 'Dashboard analitik data realtime dengan prediksi berbasis AI.',
        img: '/image/web3.webp',
        tech: ['Next.js', 'PostgreSQL', 'Python']
    },
    {
        title: 'Company Profile BUMN',
        category: 'Web Development',
        desc: 'Website korporat profesional dengan CMS custom untuk pengelolaan konten.',
        img: '/image/web4.webp',
        tech: ['Laravel', 'MySQL']
    },
    {
        title: 'Movie Streaming Platform',
        category: 'Web App',
        desc: 'Website nonton film dengan fitur streaming adaptif dan subscription membership.',
        img: '/image/web5.webp',
        tech: ['Next.js']
    },
    {
        title: 'IPTV Web Player',
        category: 'Web App',
        desc: 'Aplikasi web player IPTV dengan dukungan multi-playlist dan EPG realtime.',
        img: '/image/web6.webp',
        tech: ['Next.js']
    },
];

export default function PortfolioPage() {
    return (
        <div className="bg-white dark:bg-black min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Portfolio Kami</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Dedikasi kami dalam menghadirkan kualitas terbaik di setiap baris kode.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div key={i} className="group rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex flex-col">
                            <div className="h-64 relative bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Punya Ide Project?</h3>
                    <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                        Mulai Diskusi Project
                    </Link>
                </div>

            </div>
        </div>
    );
}
