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

## Situs satu halaman

Semua isi ada di satu halaman (`/`). Menu navbar tidak berpindah halaman, tapi
menggulir halus ke bagian terkait, dan menu yang sedang terlihat disorot otomatis
(IntersectionObserver + `aria-current`). Section dan anchor-nya:

| Anchor | Section | Isi |
|---|---|---|
| `#beranda` | Hero | Layar penuh, judul, CTA, rating, penanda gulir |
| `#tentang` | Tentang | Statistik singkat + profil resort + 3 pilar, dua foto bertumpuk |
| `#kamar` | Kamar | 5 kartu kamar lengkap harga + daftar "sudah termasuk" |
| `#fasilitas` | Fasilitas | 4 fasilitas unggulan + kolase foto, 8 kartu fasilitas, layanan tambahan |
| `#galeri` | Galeri | 12 foto, filter kategori, lightbox (klik, panah, Escape) |
| `#testimoni` | Testimoni | 3 kutipan tamu |
| — | CTA | Ajakan reservasi di atas foto |
| `#kontak` | Kontak | Kartu kontak, formulir reservasi → WhatsApp, peta, FAQ |

Menu didefinisikan di `navLinks` (`src/data/hotel.ts`); menambah section baru
cukup dengan memberi `id` pada section dan menambah entri di sana. Jarak lompatan
diatur `section[id] { scroll-margin-top: 5.5rem }` di `globals.css` supaya judul
tidak tertutup navbar yang fixed.

Tidak ada rute lain — `/kamar`, `/galeri`, dan seterusnya tidak ada (404).
`not-found.tsx` mengarahkan kembali ke beranda dan ke anchor kamar.

## Struktur

```
src/
  app/
    layout.tsx          # font, metadata/OG, nav, footer, JSON-LD
    page.tsx            # merangkai delapan section jadi satu halaman
    globals.css         # token warna (@theme), utilitas, animasi reveal, scroll-margin
    sitemap.ts robots.ts not-found.tsx icon.svg
  components/
    Nav.tsx             # anchor + sorot menu aktif; solid setelah scroll; menu mobile
    Footer.tsx          # di-cache ("use cache") karena memakai tahun berjalan
    Gallery.tsx         # grid + filter + lightbox (dirender lewat portal)
    BookingForm.tsx     # validasi HTML + susun pesan WhatsApp
    RoomCard.tsx SectionHeading.tsx Reveal.tsx Icon.tsx
    sections/           # Hero, About, Rooms, Facilities, GallerySection,
                        # Testimonials, CtaBand, Contact
  data/hotel.ts         # SEMUA konten: identitas, kamar, fasilitas, galeri, testimoni, navLinks
  assets/images/        # 17 foto (1500px, JPEG)
public/og.jpg           # gambar preview 1500x833 untuk media sosial
CREDITS.md              # sumber & lisensi foto
```

`Reveal.tsx` membungkus isi section dengan animasi muncul saat masuk viewport
(menghormati `prefers-reduced-motion`).

## Mengubah konten

Hampir semua teks dan harga ada di `src/data/hotel.ts`:

- `hotel` — nama, tagline, alamat, telepon, WhatsApp, email, Instagram, jam check-in/out, koordinat & peta.
- `rooms` — tambah/hapus tipe kamar; `featured: true` dipakai untuk menandai kartu pilihan, `badge` mengisi label di sudut foto.
- `facilities`, `gallery`, `testimonials`, `stats`, `navLinks`, `roomInclusions`, `extraServices`.

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
