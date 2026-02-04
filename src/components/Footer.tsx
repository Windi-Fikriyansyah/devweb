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
                            <span>DevStudio</span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                            Kami membantu bisnis Anda bertransformasi digital dengan website modern, aplikasi web handal, dan aplikasi mobile berkinerja tinggi.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Layanan Kami</h3>
                        <ul className="space-y-3">
                            {['Jasa Pembuatan Website', 'Aplikasi Web Custom', 'Aplikasi Mobile (iOS/Android)', 'UI/UX Design', 'Maintenance & SEO'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Link Cepat</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Portfolio', 'Blog', 'Contact Us', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Hubungi Kami</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                                <span>Jl. Teknologi No. 123, Jakarta Selatan, Indonesia 12345</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                                <span>info@devstudio.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} DevStudio. All rights reserved. Built with Next.js & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
