import type { MetadataRoute } from "next";

const baseUrl = "https://arunikaresort.id";

// Tanggal tetap: Cache Components melarang `new Date()` saat prerender.
// Perbarui manual setiap kali konten situs berubah signifikan.
const lastModified = new Date("2026-10-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  // Situs satu halaman: hanya ada satu URL.
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
