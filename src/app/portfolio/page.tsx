'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PortfolioSection from '@/components/PortfolioSection';

export default function PortfolioPage() {
    return (
        <div className="pt-16 md:pt-20 pb-16">
            <PortfolioSection
                title="Portfolio Kami"
                subtitle="Dedikasi kami dalam menghadirkan kualitas terbaik di setiap baris kode."
                bgClass="bg-white dark:bg-black"
                showFooterLink={false}
            />

            <div className="container mx-auto px-4 text-center mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Punya Ide Project?</h3>
                <Link href="https://wa.me/6289678386070" className="inline-flex items-center px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                    Mulai Diskusi Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}
