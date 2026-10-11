import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/Icon";

import heroSunset from "@/assets/images/hero-sunset.jpg";
import poolMainBuilding from "@/assets/images/pool-main-building.jpg";
import poolTerrace from "@/assets/images/pool-terrace.jpg";
import lobbyBlueHour from "@/assets/images/lobby-blue-hour.jpg";
import restaurant from "@/assets/images/restaurant.jpg";
import library from "@/assets/images/library.jpg";
import poolSuite from "@/assets/images/pool-suite.jpg";
import suiteCanopy from "@/assets/images/suite-canopy.jpg";
import roomPoolSuite from "@/assets/images/room-pool-suite.jpg";
import roomGardenSuite from "@/assets/images/room-garden-suite.jpg";
import roomDeluxe from "@/assets/images/room-deluxe.jpg";
import spaPool from "@/assets/images/spa-pool.jpg";
import diningTable from "@/assets/images/dining-table.jpg";
import gardenPool1 from "@/assets/images/garden-pool-1.jpg";
import gardenPath from "@/assets/images/garden-path.jpg";
import gardenGate from "@/assets/images/garden-gate.jpg";
import poolPalms from "@/assets/images/pool-palms.jpg";

export const images = {
  heroSunset,
  poolMainBuilding,
  poolTerrace,
  lobbyBlueHour,
  restaurant,
  library,
  poolSuite,
  suiteCanopy,
  roomPoolSuite,
  roomGardenSuite,
  roomDeluxe,
  spaPool,
  diningTable,
  gardenPool1,
  gardenPath,
  gardenGate,
  poolPalms,
};

export const hotel = {
  name: "Arunika Resort & Spa",
  shortName: "Arunika",
  tagline: "Ketenangan tropis di jantung Ubud",
  intro:
    "Arunika adalah resort butik 32 kamar di tepi lembah Sanggingan, Ubud. Kami menerjemahkan keramahan Bali menjadi pengalaman menginap yang tenang, hangat, dan tanpa keributan — kolam infinity menghadap hutan, dapur yang memasak hasil kebun sendiri, dan spa yang memakai rempah dari pasar pagi Ubud.",
  address: "Jl. Raya Sanggingan No. 88, Ubud, Gianyar, Bali 80571",
  phoneDisplay: "+62 361 908 8800",
  phoneHref: "tel:+623619088800",
  whatsappDisplay: "+62 812 3900 8800",
  whatsapp: "6281239008800",
  email: "reservasi@arunikaresort.id",
  instagram: "@arunikaresort",
  instagramUrl: "https://www.instagram.com/arunikaresort",
  checkIn: "14.00",
  checkOut: "12.00",
  rating: 4.9,
  reviews: 386,
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=115.2355%2C-8.5230%2C115.2895%2C-8.4905&layer=mapnik&marker=-8.5069%2C115.2625",
  mapLink:
    "https://www.openstreetmap.org/?mlat=-8.5069&mlon=115.2625#map=15/-8.5069/115.2625",
};

export const stats = [
  { value: "32", label: "Kamar & suite" },
  { value: "1,2 ha", label: "Taman tropis" },
  { value: "4,9/5", label: `${hotel.reviews} ulasan tamu` },
  { value: "15 mnt", label: "Ke pusat Ubud" },
];

export type Room = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  priceNote: string;
  size: string;
  guests: string;
  bed: string;
  image: StaticImageData;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const rooms: Room[] = [
  {
    slug: "garden-room",
    name: "Garden Room",
    subtitle: "Tenang, terang, menghadap taman",
    price: 1250000,
    priceNote: "per malam, termasuk sarapan 2 orang",
    size: "38 m²",
    guests: "2 tamu",
    bed: "King bed",
    image: roomDeluxe,
    description:
      "Kamar terang dengan jendela besar, teras kecil menghadap taman heliconia, dan kamar mandi marmer dengan air panas 24 jam. Pilihan tepat untuk pasangan yang ingin tinggal lebih lama.",
    features: [
      "Sarapan untuk 2 orang",
      "AC & kipas langit-langit",
      "WiFi fiber 300 Mbps",
      "Teras taman pribadi",
      "Ketel & kopi single origin Kintamani",
    ],
  },
  {
    slug: "pool-suite",
    name: "Pool Suite",
    subtitle: "Kolam plunge pribadi di teras",
    price: 2350000,
    priceNote: "per malam, termasuk sarapan 2 orang",
    size: "62 m²",
    guests: "2 tamu",
    bed: "King bed",
    image: roomPoolSuite,
    description:
      "Suite dengan ruang tamu terpisah, bath tub outdoor di bawah langit Bali, dan kolam plunge 6 meter yang menghadap pepohonan. Cocok untuk honeymoon atau liburan panjang.",
    features: [
      "Kolam plunge pribadi 6 m",
      "Bath tub outdoor",
      "Ruang tamu terpisah",
      "Butler on call 24 jam",
      "Layanan pijat di kamar",
    ],
    featured: true,
    badge: "Favorit tamu",
  },
  {
    slug: "garden-suite",
    name: "Garden Suite",
    subtitle: "Ruang keluarga & taman privat",
    price: 2950000,
    priceNote: "per malam, termasuk sarapan 3 orang",
    size: "78 m²",
    guests: "3 tamu",
    bed: "King + single",
    image: roomGardenSuite,
    description:
      "Suite luas dengan ruang duduk, meja makan, dan taman privat berpagar batu. Ideal untuk keluarga kecil yang ingin anak-anak tetap punya ruang bermain sendiri.",
    features: [
      "Ruangan terpisah 2 area",
      "Taman privat berpagar",
      "Boks bayi & extra bed tersedia",
      "Minibar lengkap",
      "Jamuan sore (tea time) harian",
    ],
    featured: true,
    badge: "Untuk keluarga",
  },
  {
    slug: "canopy-suite",
    name: "Canopy Suite",
    subtitle: "Kasur canopy warisan, dua kamar",
    price: 3850000,
    priceNote: "per malam, termasuk sarapan 4 orang",
    size: "96 m²",
    guests: "4 tamu",
    bed: "2 king bed",
    image: suiteCanopy,
    description:
      "Suite dua kamar di lantai atas dengan kasur canopy kayu jati, beranda panjang, dan pemandangan lembah. Pilihan favorit tamu yang bepergian bersama keluarga atau sahabat.",
    features: [
      "2 kamar tidur",
      "Beranda menghadap lembah",
      "Kasur canopy kayu jati",
      "Ruang makan pribadi",
      "Antar-jemput bandara gratis (min. 3 malam)",
    ],
  },
  {
    slug: "arunika-pool-villa",
    name: "Arunika Pool Villa",
    subtitle: "Vila privat dengan kolam infinity",
    price: 5500000,
    priceNote: "per malam, termasuk sarapan 4 orang",
    size: "140 m²",
    guests: "4 tamu",
    bed: "2 king bed",
    image: poolSuite,
    description:
      "Vila terpisah di ujung kebun dengan kolam infinity 12 meter, paviliun makan, dan dapur kecil. Tersedia private chef serta rencana makan lengkap bila diminta.",
    features: [
      "Kolam infinity privat 12 m",
      "Paviliun & dapur kecil",
      "Private chef (opsional)",
      "Gazebo pijat di taman",
      "Mobil dengan sopir 8 jam/hari",
    ],
    featured: true,
    badge: "Vila privat",
  },
];

export type Facility = {
  name: string;
  description: string;
  icon: IconName;
  image?: StaticImageData;
  hours?: string;
};

export const facilities: Facility[] = [
  {
    name: "Infinity Pool",
    description:
      "Kolam utama 25 meter di tepi lembah, dengan bar air dan kursi santai menghadap hutan.",
    icon: "pool",
    image: poolTerrace,
    hours: "06.00 – 21.00",
  },
  {
    name: "Arunika Spa",
    description:
      "Empat ruang perawatan dan kolam renang indoor berpemanas. Pijat Bali 90 menit dengan minyak kelapa kunyit buatan sendiri.",
    icon: "spa",
    image: spaPool,
    hours: "09.00 – 21.00",
  },
  {
    name: "Dapur Nusantara",
    description:
      "Restoran 40 kursi yang menyajikan menu Bali dan Indonesia dari hasil kebun resort sendiri. Sarapan à la carte, bukan buffet.",
    icon: "restaurant",
    image: restaurant,
    hours: "07.00 – 23.00",
  },
  {
    name: "Perpustakaan & Lounge",
    description:
      "Ruang baca kayu dengan koleksi buku seni, majalah, dan piringan hitam gamelan. Teh sore gratis setiap hari.",
    icon: "library",
    image: library,
    hours: "08.00 – 22.00",
  },
  {
    name: "Sunrise Yoga Deck",
    description:
      "Dek kayu menghadap sawah tempat kelas yoga gratis setiap pagi sebelum sarapan.",
    icon: "sun",
    image: poolMainBuilding,
    hours: "06.00 setiap hari",
  },
  {
    name: "Private Dining",
    description:
      "Meja pribadi di taman, sawah, atau tepi kolam. Menyusun menu bersama koki dua hari sebelumnya.",
    icon: "sparkle",
    image: diningTable,
    hours: "Pesan H-2",
  },
  {
    name: "Antar-Jemput",
    description:
      "Antar-jemput bandara Ngurah Rai dan shuttle harian ke pusat Ubud setiap dua jam.",
    icon: "shuttle",
    hours: "05.00 – 22.00",
  },
  {
    name: "Valet & Parkir",
    description:
      "Parkir teduh untuk 20 kendaraan, valet 24 jam, dan sewa skuter di lobi.",
    icon: "parking",
    hours: "24 jam",
  },
];

export type GalleryItem = {
  image: StaticImageData;
  alt: string;
  category: "Kolam" | "Kamar" | "Taman" | "Kuliner" | "Arsitektur";
};

export const gallery: GalleryItem[] = [
  { image: poolMainBuilding, alt: "Kolam utama dan bangunan utama resort saat senja", category: "Kolam" },
  { image: gardenGate, alt: "Gerbang batu dengan bunga kamboja di jalan taman", category: "Taman" },
  { image: roomPoolSuite, alt: "Suite dengan kolam plunge pribadi", category: "Kamar" },
  { image: poolPalms, alt: "Kolam biru diapit pohon kelapa", category: "Kolam" },
  { image: lobbyBlueHour, alt: "Lounge penerimaan tamu pada blue hour", category: "Arsitektur" },
  { image: suiteCanopy, alt: "Kasur canopy kayu di suite dua kamar", category: "Kamar" },
  { image: gardenPool1, alt: "Kolam taman dengan kursi santai dan payung", category: "Taman" },
  { image: poolTerrace, alt: "Teras kolam utama pada pagi hari", category: "Arsitektur" },
  { image: diningTable, alt: "Meja makan ditata untuk private dining", category: "Kuliner" },
  { image: gardenPath, alt: "Tangga batu menuju taman tropis", category: "Taman" },
  { image: library, alt: "Perpustakaan kayu dengan koleksi buku seni", category: "Arsitektur" },
  { image: restaurant, alt: "Ruang restoran dengan meja bundar berkelambu putih", category: "Kuliner" },
];

export type Testimonial = {
  quote: string;
  name: string;
  origin: string;
  stay: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kami memesan tiga malam dan memperpanjang jadi enam. Sarapan di teras menghadap kolam, lalu jalan kaki ke sawah — tidak ada yang perlu diperbaiki.",
    name: "Ayu & Bagas",
    origin: "Jakarta",
    stay: "Pool Suite, 6 malam",
  },
  {
    quote:
      "Pelayanannya tenang dan tepat waktu. Saya meminta meja kerja menghadap taman dan itu sudah siap sebelum saya turun untuk sarapan.",
    name: "Maria L.",
    origin: "Lisbon, Portugal",
    stay: "Garden Suite, 4 malam",
  },
  {
    quote:
      "Spa-nya yang paling saya ingat: pijat 90 menit dengan rempah lokal, lalu berenang di kolam indoor yang hangat. Saya kembali bulan depan.",
    name: "Kenji T.",
    origin: "Tokyo, Jepang",
    stay: "Canopy Suite, 3 malam",
  },
];

export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kamar", label: "Kamar" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

/** Hak yang sudah termasuk di setiap tarif kamar. */
export const roomInclusions = [
  { icon: "breakfast" as const, text: "Sarapan à la carte untuk seluruh tamu di kamar" },
  { icon: "wifi" as const, text: "WiFi fiber 300 Mbps di seluruh area resort" },
  { icon: "spa" as const, text: "Akses kolam utama, spa pool indoor, dan kelas yoga" },
  { icon: "shuttle" as const, text: "Shuttle harian ke pusat Ubud setiap dua jam" },
  { icon: "bell" as const, text: "Concierge 24 jam & layanan kamar sampai pukul 23.00" },
  { icon: "check-circle" as const, text: "Pembatalan gratis sampai 3 hari sebelum check-in" },
];

/** Layanan tambahan di luar kamar dan fasilitas utama. */
export const extraServices = [
  "Laundry & dry cleaning 24 jam",
  "Sewa skuter & sepeda",
  "Kelas memasak masakan Bali",
  "Penitipan anak (dengan pemesanan)",
  "Ruang rapat 20 orang",
  "Paket upacara & bulan madu",
];

export function formatRupiah(value: number) {
  return "Rp " + value.toLocaleString("id-ID");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;
}
