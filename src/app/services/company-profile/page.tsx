import type { Metadata } from "next";
import CompanyProfileContent from "./CompanyProfileContent";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Company Profile Pontianak | Bangun Kredibilitas Bisnis",
    description: "Buat profil perusahaan profesional di Pontianak. Desain elegan, responsif, dan SEO ready untuk meningkatkan kepercayaan klien dan mitra bisnis Anda.",
};

export default function CompanyProfilePage() {
    return <CompanyProfileContent />;
}
