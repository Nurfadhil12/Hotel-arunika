import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri foto Arunika Resort & Spa Ubud: kolam infinity, kamar, taman tropis, dan Dapur Nusantara.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Lihat Arunika apa adanya"
        description="Dua belas foto dari area resort. Klik untuk memperbesar, gunakan tombol panah untuk berpindah."
        image={images.gardenPath}
        imageAlt="Tangga batu menuju taman tropis Arunika"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <Gallery />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-stone">
            Semua foto diambil di area resort tanpa penambahan dekorasi khusus.
            Foto taman dan kolam diperbarui setiap musim hujan dan kemarau
            karena kondisi tanaman berubah.
          </p>
        </Reveal>
      </section>
    </>
  );
}
