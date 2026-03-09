import type { Metadata } from "next";
import LandingPageContent from "./LandingPageContent";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Landing Page Pontianak | Konversi Penjualan Tinggi",
    description: "Butuh Landing Page untuk iklan atau promo? Kami buatkan Landing Page yang cepat, persuasif, dan Mobile-First untuk tingkatkan penjualan bisnis Anda di Pontianak.",
};

export default function LandingPageService() {
    return <LandingPageContent />;
}
