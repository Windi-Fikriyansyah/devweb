'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubItem {
    name: string;
    href: string;
}

interface DropdownItem {
    name: string;
    items?: SubItem[];
    href?: string;
}

interface NavItem {
    name: string;
    href: string;
    dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
        name: 'Layanan',
        href: '#',
        dropdown: [
            { name: 'Umum', items: [{ name: 'Company Profile', href: '/services/company-profile' }, { name: 'Landing Page', href: '/services/landing-page' }] },
            { name: 'Spesialis', items: [{ name: 'Website Ekspor & Supplier', href: '/jasa-website-ekspor-pontianak' }, { name: 'Website Toko Online (E-commerce)', href: '/jasa-toko-online-pontianak' }] },
        ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Harga', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                        <span>Webkite</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">
                                            <span>{item.name}</span>
                                            <ChevronDown className="h-4 w-4" />
                                        </button>
                                        <div className="absolute left-0 mt-0 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="p-4 space-y-4">
                                                {item.dropdown.map((sub, idx) => (
                                                    <div key={idx}>
                                                        {sub.items ? (
                                                            <>
                                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{sub.name}</p>
                                                                <div className="space-y-1">
                                                                    {sub.items.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.href}
                                                                            href={subItem.href}
                                                                            className="block px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={sub.href!}
                                                                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact"
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg",
                                "bg-blue-600 text-white hover:bg-blue-700",
                                "dark:bg-blue-600 dark:hover:bg-blue-500"
                            )}
                        >
                            Hubungi Kami
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 absolute inset-x-0 top-16 shadow-lg h-[calc(100vh-4rem)] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <div className="space-y-1">
                                        <div className="px-4 py-3 text-base font-bold text-gray-900 dark:text-white border-b border-gray-50 dark:border-gray-900 mb-2">
                                            {item.name}
                                        </div>
                                        <div className="pl-4 space-y-2">
                                            {item.dropdown.map((sub, idx) => (
                                                <div key={idx}>
                                                    {sub.items ? (
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] font-bold text-gray-400 uppercase px-4 py-1">{sub.name}</p>
                                                            {sub.items.map((subItem) => (
                                                                <Link
                                                                    key={subItem.href}
                                                                    href={subItem.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <Link
                                                            href={sub.href!}
                                                            onClick={() => setIsOpen(false)}
                                                            className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-4 py-3 rounded-lg text-base font-bold bg-blue-600 text-white"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
