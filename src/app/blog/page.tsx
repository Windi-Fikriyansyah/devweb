import { Metadata } from 'next';
import db from '@/lib/db';
import BlogContent from './BlogContent';

export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
    title: "Blog & Insight Digital Pontianak | Tips Bisnis & Teknologi",
    description: "Baca artikel terbaru seputar jasa pembuatan website, strategi ekspor UMKM, tips toko online, dan tren teknologi digital di Pontianak.",
    alternates: {
        canonical: "/blog",
    },
};

async function getArticles() {
    try {
        const [rows] = await db.query('SELECT * FROM articles ORDER BY created_at DESC');
        return rows as any[];
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}

export default async function BlogPage() {
    const articles = await getArticles();
    return <BlogContent articles={articles} />;
}
