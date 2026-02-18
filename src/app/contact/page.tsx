import type { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami | Webkite",
  description:
    "Konsultasikan kebutuhan digital Anda gratis. Hubungi kami via WhatsApp, Email, atau kunjungi kantor kami.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hubungi Kami
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Siap memulai proyek besar Anda? Mari berdiskusi tentang ide dan
            kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Informasi Kontak
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Kantor Pusat
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Jl. Ketapang, Benua Melayu Darat, Kec. Pontianak Sel,
                    <br />
                    pontianak, Kalimantan Barat 78243
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Telepon / WhatsApp
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    +62 896 7838 6070 (Fast Response)
                    <br />
                    Senin - Jumat, 09:00 - 17:00
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    info@webkite.online
                    <br />
                    support@webkite.online
                  </p>
                </div>
              </div> */}
            </div>


          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Kirim Pesan
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Layanan yang Diminati
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 block w-full rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                >
                  <option>Web Development</option>
                  <option>Web App / SaaS</option>
                  <option>Mobile App (Android/iOS)</option>
                  <option>UI/UX Design</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Pesan / Detail Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full rounded-lg bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Ceritakan sedikit tentang kebutuhan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-8 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                Kirim Pesan <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
