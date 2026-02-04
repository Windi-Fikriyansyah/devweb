import Link from 'next/link';
import Image from 'next/image'; // For optimization
import {
  ArrowRight, CheckCircle2, Globe, Smartphone, Monitor, Star,
  Code2, Layers, Rocket, MessageSquare, ChevronDown, Zap
} from 'lucide-react';

export default function Home() {
  const processSteps = [
    { title: 'Discovery', desc: 'Kami pelajari model bisnis & target audience Anda.', icon: MessageSquare },
    { title: 'UI/UX Design', desc: 'Perancangan wireframe & desain visual interaktif.', icon: Layers },
    { title: 'Development', desc: 'Coding dengan Next.js & teknologi modern.', icon: Code2 },
    { title: 'Launch', desc: 'Testing, deployment, & handover source code.', icon: Rocket },
  ];

  const faqs = [
    { q: "Berapa lama pengerjaan?", a: "Tergantung kompleksitas. Company profile 1-2 minggu, Sistem custom 1-3 bulan." },
    { q: "Apakah dapat source code?", a: "Ya, 100% source code menjadi hak milik Anda setelah pelunasan." },
    { q: "Apakah ada garansi?", a: "Kami berikan garansi bug fix gratis selama 3 bulan setelah peluncuran." },
    { q: "Harganya berapa?", a: "Kami menawarkan solusi custom. Hubungi kami untuk penawaran terbaik sesuai budget." },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section (The Hook) */}
      <section className="relative px-4 py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black"></div>
        <div className="relative z-10 container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full animate-pulse"></span>
            Software House Profesional
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            Jasa Pembuatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Website & Aplikasi</span> <br className="hidden md:block" />
            Skalabel & Berkualitas
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Ubah ide bisnis Anda menjadi produk digital kelas dunia dengan teknologi terkini.
            Kami membangun sistem yang cepat, aman, dan disukai pengguna.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar (Social Proof) */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Dipercaya Oleh Teknologi Modern</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Tech Stack Logos (Text for placeholder) */}
            <span className="text-xl font-bold font-mono">NEXT.js</span>
            <span className="text-xl font-bold font-mono">React</span>
            <span className="text-xl font-bold font-mono">Flutter</span>
            <span className="text-xl font-bold font-mono">AWS</span>
            <span className="text-xl font-bold font-mono">Vercel</span>
            <span className="text-xl font-bold font-mono">Google Cloud</span>
          </div>
        </div>
      </section>

      {/* 3. Services Section (The Solution) */}
      <section className="py-20 bg-white dark:bg-black" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Solusi Digital Lengkap</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Pilih layanan yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/web" className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-blue-500 transition-all hover:shadow-2xl">
              <Globe className="h-12 w-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Company Profile & Landing Page performa tinggi untuk branding bisnis.</p>
              <span className="text-blue-600 font-semibold group-hover:underline flex items-center">Lihat Detail <ArrowRight className="ml-2 w-4 h-4" /></span>
            </Link>
            <Link href="/services/web-app" className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-purple-500 transition-all hover:shadow-2xl">
              <Monitor className="h-12 w-12 text-purple-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Web Apps (SaaS)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Dashboard, CRM, & Sistem Informasi kompleks berbasis web.</p>
              <span className="text-purple-600 font-semibold group-hover:underline flex items-center">Lihat Detail <ArrowRight className="ml-2 w-4 h-4" /></span>
            </Link>
            <Link href="/services/mobile-app" className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-pink-500 transition-all hover:shadow-2xl">
              <Smartphone className="h-12 w-12 text-pink-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mobile Apps</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Aplikasi Android & iOS (React Native/Flutter) yang cepat & stabil.</p>
              <span className="text-pink-600 font-semibold group-hover:underline flex items-center">Lihat Detail <ArrowRight className="ml-2 w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Process Section (How We Work) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Proses Kerja Transparan</h2>
            <p className="text-gray-600 dark:text-gray-400">Dari ide mentah hingga aplikasi siap pakai, kami pandu Anda setiap langkah.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white dark:bg-black rounded-full shadow-lg flex items-center justify-center mb-6 z-10 border-2 border-blue-100 dark:border-blue-900">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-0"></div>}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Portfolio Section (The Evidence) */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Portfolio Pilihan</h2>
              <p className="text-gray-600 dark:text-gray-400">Hasil karya terbaik kami untuk klien.</p>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center text-blue-600 font-semibold hover:underline">
              Lihat Semua <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sistem Informasi Akademik',
                desc: 'Platform manajemen sekolah terintegrasi dengan modul kesiswaan dan keuangan.',
                img: '/image/web1.webp',
                tech: ['Laravel', 'MySQL']
              },
              {
                title: 'E-Commerce Fashion',
                desc: 'Toko online modern dengan fitur multi-vendor dan payment gateway.',
                img: '/image/web2.webp',
                tech: ['Laravel', 'MySQL']
              },
              {
                title: 'AI Analytics Dashboard',
                desc: 'Dashboard analitik data realtime dengan prediksi berbasis AI.',
                img: '/image/web3.webp',
                tech: ['Next.js', 'PostgreSQL', 'Python']
              },
              {
                title: 'Company Profile BUMN',
                desc: 'Website korporat profesional dengan CMS custom untuk pengelolaan konten.',
                img: '/image/web4.webp',
                tech: ['Laravel', 'MySQL']
              },
              {
                title: 'Movie Streaming Platform',
                desc: 'Website nonton film dengan fitur streaming adaptif dan subscription membership.',
                img: '/image/web5.webp',
                tech: ['Next.js']
              },
              {
                title: 'IPTV Web Player',
                desc: 'Aplikasi web player IPTV dengan dukungan multi-playlist dan EPG realtime.',
                img: '/image/web6.webp',
                tech: ['Next.js']
              },
            ].map((project, i) => (
              <div key={i} className="group rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="h-64 relative bg-gray-200 dark:bg-gray-800">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
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
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
              Lihat Semua Portfolio <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Tech Stack & Performance */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block py-1 px-3 rounded bg-blue-600/20 text-blue-400 text-sm font-semibold mb-4 border border-blue-500/30">BUILT WITH MODERN TECH</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Mengapa Kami Menggunakan <span className="text-blue-500">Next.js</span>?</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Kami tidak sekadar membuat website, kami membangun aset digital. Next.js memberikan kecepatan loading ekstrim, SEO yang lebih baik di Google, dan keamanan tingkat enterprise yang sulit didapat di Wordpress biasa.
              </p>
              <ul className="space-y-4">
                {['Google PageSpeed Score 90+', 'SEO Friendly (SSR/ISR)', 'Keamanan Enterprise Grade'].map(item => (
                  <li key={item} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">Performance Check</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded text-center">
                  <div className="text-4xl font-bold text-green-500 mb-1">98</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Performance</div>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <div className="text-4xl font-bold text-green-500 mb-1">100</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">SEO</div>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <div className="text-4xl font-bold text-green-500 mb-1">100</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Best Practices</div>
                </div>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <div className="text-4xl font-bold text-green-500 mb-1">100</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Accessibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Apa Kata Mereka?</h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-black p-8 md:p-12 rounded-2xl shadow-lg relative">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
            </div>
            <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              "Investasi terbaik untuk bisnis kami. Website yang dibangun DevStudio bukan cuma cantik, tapi benar-benar menghasilkan penjualan. Supportnya luar biasa!"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">AH</div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 dark:text-white">Andi Hermawan</h4>
                <p className="text-sm text-gray-500">Founder, KopiNusantara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section (Long-tail SEO) */}
      <section className="py-20 bg-white dark:bg-black" id="faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Jawaban untuk keraguan Anda</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer list-none bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="font-semibold text-gray-800 dark:text-white">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-5 text-gray-600 dark:text-gray-400 bg-white dark:bg-black text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
          {/* Schema JSON-LD for FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
              })
            }}
          />
        </div>
      </section>

      {/* 9. Blog/Resources Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Insight & Artikel</h2>
            <Link href="/blog" className="text-blue-600 font-semibold hover:underline hidden md:block">Lihat Semua</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Cara Memulai Bisnis Digital 2024', 'Mengapa Website Lambat Membunuh Bisnis', 'React Native vs Flutter: Mana Lebih Baik?'].map((title, i) => (
              <Link key={i} href="#" className="block group">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">5 min read • Tips Teknologi</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mewujudkan Proyek Impian Anda?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Jangan biarkan ide cemerlang Anda keduluan kompetitor. Mari diskusi santai hari ini.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              Hubungi Kami Sekarang
            </Link>
            <Link href="https://wa.me/6281234567890" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              WhatsApp (Fast Response)
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
