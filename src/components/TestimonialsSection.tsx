'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsSectionProps {
    title?: string;
    description?: string;
}

export default function TestimonialsSection({
    title = "Testimoni",
    description = "Testimoni real dari WhatsApp — tanpa edit, tanpa rekayasa."
}: TestimonialsSectionProps) {
    const testimonialImages = [
        "/image/testimoni/wa1.webp",
        "/image/testimoni/wa2.webp",
        "/image/testimoni/wa3.webp",
        "/image/testimoni/wa4.webp",
        "/image/testimoni/wa5.webp",
        "/image/testimoni/wa6.webp",
    ];

    const scroll = (direction: 'left' | 'right') => {
        const carousel = document.getElementById("wa-carousel-component");
        if (carousel) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                    {title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    {description}
                </p>

                <div className="relative max-w-6xl mx-auto">
                    {/* Arrow Left */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 shadow-lg p-3 rounded-full hover:scale-110 transition"
                        aria-label="Slide sebelumnya"
                    >
                        <ChevronLeft />
                    </button>

                    {/* Carousel */}
                    <div
                        id="wa-carousel-component"
                        className="flex gap-6 overflow-x-auto px-10 scrollbar-hide snap-x snap-mandatory"
                    >
                        {testimonialImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative min-w-[220px] md:min-w-[260px] h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all snap-center"
                            >
                                <Image
                                    src={img}
                                    alt={`Testimoni ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Arrow Right */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 shadow-lg p-3 rounded-full hover:scale-110 transition"
                        aria-label="Slide berikutnya"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
