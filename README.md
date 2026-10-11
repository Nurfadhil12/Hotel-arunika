# Arunika Resort & Spa — Company Profile

Situs company profile hotel (resort butik di Ubud) sebagai contoh portofolio.
Dibangun dengan **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, tanpa
backend — semua halaman statis dan satu formulir yang menyusun pesan WhatsApp.

> Nama hotel, alamat, tarif, ulasan, dan testimoni bersifat **fiktif**. Foto
> berasal dari Wikimedia Commons (lihat `CREDITS.md`).

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build produksi (semua halaman jadi statis)
npm start          # jalankan hasil build di port 3000
npm run lint       # ESLint (config Next)
npx tsc --noEmit   # cek tipe
```

## Halaman

| Rute | Isi |
|---|---|
| `/` | Hero layar penuh, statistik, tentang, 3 kamar favorit, fasilitas, galeri, testimoni, CTA |
| `/kamar` | 5 tipe kamar dengan detail, fasilitas, harga, tombol pesan per kamar |
| `/fasilitas` | 8 fasilitas utama, 4 di antaranya dibahas bergantian gambar/teks |
| `/galeri` | Grid 12 foto + filter kategori + lightbox (klik, panah, Escape) |
| `/kontak` | Kartu kontak, formulir reservasi → WhatsApp, peta OpenStreetMap, FAQ |

Tambahan: `sitemap.xml`, `robots.txt`, favicon SVG (`src/app/icon.svg`),
JSON-LD `Resort` untuk SEO, dan halaman 404 khusus.

## Struktur

```
src/
  app/
    layout.tsx          # font, metadata/OG, nav, footer, JSON-LD
    page.tsx            # beranda
    kamar|fasilitas|galeri|kontak/page.tsx
    globals.css         # token warna (@theme), utilitas, animasi reveal
    sitemap.ts robots.ts not-found.tsx icon.svg
  components/
    Nav.tsx             # nav transparan di hero, solid setelah scroll, menu mobile
    Footer.tsx          # di-cache ("use cache") karena memakai tahun berjalan
    Gallery.tsx         # grid + filter + lightbox (dirender lewat portal)
    BookingForm.tsx     # validasi HTML + susun pesan WhatsApp
    RoomCard.tsx PageHero.tsx SectionHeading.tsx Reveal.tsx Icon.tsx
  data/hotel.ts         # SEMUA konten: identitas, kamar, fasilitas, galeri, testimoni
  assets/images/        # 17 foto (1500px, JPEG)
public/og.jpg           # gambar preview 1500x833 untuk media sosial
CREDITS.md              # sumber & lisensi foto
```

## Mengubah konten

Hampir semua teks dan harga ada di `src/data/hotel.ts`:

- `hotel` — nama, tagline, alamat, telepon, WhatsApp, email, Instagram, jam check-in/out, koordinat & peta.
- `rooms` — tambah/hapus tipe kamar; `featured: true` menampilkannya di beranda, `badge` mengisi label di sudut foto.
- `facilities`, `gallery`, `testimonials`, `stats`, `navLinks`.

Nomor WhatsApp memakai format internasional tanpa `+` (`6281239008800`).

## Palet & tema

Token warna didefinisikan sekali di `src/app/globals.css` blok `@theme`
(`--color-jade`, `--color-brass`, `--color-sand`, …) sehingga bisa dipakai sebagai
utilitas Tailwind (`bg-jade`, `text-brass`). Ganti nilai di sana untuk mengubah
seluruh situs sekaligus.

## Catatan teknis (Next.js 16)

- `cacheComponents: true` aktif di `next.config.ts`. **Tidak boleh** memakai nilai
  non-deterministik (mis. `new Date()`) langsung saat prerender — build akan gagal.
  `Footer.tsx` memakai `"use cache"` untuk itu.
- Animasi `reveal` memakai `transform`, yang menjadi containing block bagi
  `position: fixed`. Overlay lightbox karena itu dirender lewat `createPortal`
  ke `document.body`.

## Deploy

Cocok langsung untuk Vercel (tanpa konfigurasi tambahan, tanpa database):

```bash
npx vercel        # atau hubungkan repo lalu deploy otomatis
```

Sebelum dipakai komersial: ganti foto dengan foto properti sendiri dan perbarui
`CREDITS.md`, serta ganti domain di `metadataBase` (`src/app/layout.tsx`),
`sitemap.ts`, dan `robots.ts`.
