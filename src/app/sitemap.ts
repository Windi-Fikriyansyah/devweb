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
    "/jasa-toko-online-pontianak",
    "/jasa-website-ekspor-pontianak",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
