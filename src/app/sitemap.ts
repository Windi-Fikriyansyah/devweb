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
    "/jasa-pembuatan-website",
    "/jasa-pembuatan-website-toko-online",
    "/jasa-website-ekspor",
    "/jasa-pembuatan-website-travel",
    "/jasa-pembuatan-aplikasi-pontianak",
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
