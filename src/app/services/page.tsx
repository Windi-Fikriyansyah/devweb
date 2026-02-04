import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Smartphone, Monitor, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: "Layanan Jasa Pembuatan Website & Aplikasi | DevStudio",
    description: "Daftar layanan lengkap kami: Jasa Web Design, Web Apps (SaaS), dan Mobile Apps (Android/iOS) dengan teknologi terkini.",
};

export default function ServicesPage() {
    const services = [
        {
            title: 'Web Development',
            icon: Globe,
            description: 'Solusi website company profile profesional untuk meningkatkan kredibilitas bisnis Anda di era digital.',
            features: ['Modern Responsive Design', 'SEO On-Page Optimization', 'Fast Loading Speed', 'CMS Integration'],
            link: '/services/web',
            color: 'text-blue-600',
            bgColor: 'bg-blue-100 dark:bg-blue-900/30'
        },
        {
            title: 'Web Applications',
            icon: Monitor,
            description: 'Sistem informasi berbasis web kompleks, dashboard, CRM, dan ERP untuk efisiensi operasional.',
            features: ['SaaS Architecture', 'Real-time Data', 'High Security', 'Scalable Database'],
            link: '/services/web-app',
            color: 'text-purple-600',
            bgColor: 'bg-purple-100 dark:bg-purple-900/30'
        },
        {
            title: 'Mobile Apps',
            icon: Smartphone,
            description: 'Aplikasi mobile native performance untuk Android & iOS menggunakan teknologi Cross-Platform.',
            features: ['React Native / Flutter', 'Publish PlayStore & AppStore', 'Push Notifications', 'Offline Mode'],
            link: '/services/mobile-app',
            color: 'text-pink-600',
            bgColor: 'bg-pink-100 dark:bg-pink-900/30'
        }
    ];

    return (
        <div className="bg-white dark:bg-black min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Layanan Kami</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Kami menyediakan solusi teknologi *end-to-end* untuk membantu bisnis Anda bertransformasi dan berkembang pesat.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col h-full p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                            <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                                <service.icon className={`h-8 w-8 ${service.color}`} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">{service.description}</p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={service.link}
                                className={`inline-flex items-center font-semibold ${service.color} hover:underline`}
                            >
                                Pelajari Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 p-10 bg-blue-600 rounded-3xl text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Bingung Memilih Solusi?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami. Kami akan bantu temukan solusi teknologi yang paling tepat dan efisien.</p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        Hubungi Tim Konsultan
                    </Link>
                </div>

            </div>
        </div>
    );
}
