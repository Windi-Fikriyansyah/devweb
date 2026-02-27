import { MetadataRoute } from "next";

const baseUrl = "https://webkite.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/pricing",
    "/blog",
    "/contact",
    "/services/company-profile",
    "/services/landing-page",
    "/jasa-pembuatan-website-pontianak",
    "/jasa-pembuatan-website-sambas",
    "/jasa-pembuatan-website-landak",
    "/jasa-pembuatan-website-sanggau",
    "/jasa-pembuatan-website-sintang",
    "/jasa-pembuatan-website-sekadau",
    "/jasa-pembuatan-website-kayong-utara",
    "/jasa-pembuatan-website-mempawah",
    "/jasa-pembuatan-website-bengkayang",
    "/jasa-pembuatan-website-ketapang",
    "/jasa-pembuatan-website-kapuas-hulu",
    "/jasa-pembuatan-website-melawi",
    "/jasa-pembuatan-website-kubu-raya",
    "/jasa-pembuatan-website-singkawang",
    "/jasa-toko-online-pontianak",
    "/jasa-website-ekspor-pontianak",
    "/jasa-pembuatan-aplikasi-pontianak",
    "/jasa-pembuatan-website-toko-online",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
