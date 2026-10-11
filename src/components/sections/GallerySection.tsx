import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function GallerySection() {
  return (
    <section id="galeri" className="bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Galeri"
            title="Lihat Arunika apa adanya"
            description="Dua belas foto dari area resort. Filter berdasarkan kategori, klik untuk memperbesar, lalu gunakan tombol panah atau Escape."
          />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Gallery />
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-stone">
            Semua foto diambil di area resort tanpa penambahan dekorasi khusus.
            Foto taman dan kolam diperbarui setiap musim hujan dan kemarau karena
            kondisi tanaman berubah.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
