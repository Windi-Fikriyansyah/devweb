import Link from 'next/link';
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                            <span>Webkite</span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                            Bantu UMKM dan Perusahaan di Pontianak Go-Digital dengan website yang cepat, elegan, dan menghasilkan penjualan. Partner digital terpercaya Anda.
                        </p>
                        {/* <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div> */}
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Layanan Kami</h3>
                        <ul className="space-y-3">
                            <li><Link href="/jasa-website-ekspor-pontianak" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Website Ekspor</Link></li>
                            <li><Link href="/jasa-toko-online-pontianak" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Toko Online</Link></li>
                            <li><Link href="/jasa-pembuatan-website-pontianak" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">Website Bisnis Umum</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Link Cepat</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Portfolio', href: '/portfolio' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact Us', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Hubungi Kami</h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                                <span>Jl. Ketapang, Benua Melayu Darat, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78243</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                                <span>0896-7838-6070</span>
                            </li>
                        </ul>
                        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 h-48">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127674.18481530368!2d109.18566615619638!3d-0.008592399560061553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e2f18fe4296967%3A0xdd405b8433eedcd3!2sJasa%20Pembuatan%20Website%20di%20Pontianak%2F%20Jasa%20Pembuatan%20Aplikasi%20Web!5e0!3m2!1sid!2sid!4v1771692841685!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Jasa Pembuatan Website Pontianak"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 dark:text-gray-500 text-sm" suppressHydrationWarning>
                        &copy; {new Date().getFullYear()} Webkite. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
