import type { MetadataRoute } from "next";

const baseUrl = "https://arunikaresort.id";

// Tanggal tetap: Cache Components melarang `new Date()` saat prerender.
// Perbarui manual setiap kali konten situs berubah signifikan.
const lastModified = new Date("2026-10-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/kamar", "/fasilitas", "/galeri", "/kontak"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
