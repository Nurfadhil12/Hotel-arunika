import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { facilities, images, whatsappLink } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Fasilitas",
  description:
    "Infinity pool, Arunika Spa, Dapur Nusantara, perpustakaan, sunrise yoga deck, dan layanan antar-jemput di Arunika Resort & Spa Ubud.",
};

const highlightNames = ["Infinity Pool", "Arunika Spa", "Dapur Nusantara", "Perpustakaan & Lounge"];

const highlights = facilities.filter((item) =>
  highlightNames.includes(item.name),
);

const extraServices = [
  "Laundry & dry cleaning 24 jam",
  "Sewa skuter & sepeda",
  "Kelas memasak masakan Bali",
  "Penitipan anak (dengan pemesanan)",
  "Ruang rapat 20 orang",
  "Paket upacara & bulan madu",
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fasilitas"
        title="Fasilitas yang membuat betah tinggal lama"
        description="Satu lembah berisi kolam, spa, dapur, dan taman. Semua dalam jarak jalan kaki tiga menit dari kamar mana pun."
        image={images.poolTerrace}
        imageAlt="Kolam utama dan terras Arunika Resort & Spa"
      />

      {/* Ringkasan 8 fasilitas */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Sekilas"
            title="Delapan fasilitas utama"
            description="Buka setiap hari untuk tamu yang menginap, tanpa biaya tambahan kecuali yang tertera."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item, i) => (
            <Reveal key={item.name} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-sm border border-line/70 bg-white/70 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-brass/40 text-brass">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="title-display mt-5 text-xl text-ink">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
                  {item.description}
                </p>
                {item.hours ? (
                  <p className="mt-4 flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.2em] text-brass">
                    <Icon name="clock" className="h-3.5 w-3.5" />
                    {item.hours}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detail fasilitas unggulan */}
      <section className="border-y border-line bg-sand-deep/50">
        <div className="mx-auto max-w-7xl space-y-20 px-5 py-20 sm:px-8 sm:py-24 sm:space-y-28">
          {highlights.map((item, index) => (
            <Reveal key={item.name}>
              <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div
                  className={[
                    "zoom-frame relative aspect-[4/3] overflow-hidden rounded-sm",
                    index % 2 === 1 ? "lg:order-2" : "",
                  ].join(" ")}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name} di Arunika Resort & Spa`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <span className="eyebrow">{item.hours ?? "Setiap hari"}</span>
                  <h2 className="title-display mt-4 text-4xl text-ink">
                    {item.name}
                  </h2>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-stone">
                    {item.description}
                  </p>
                  <ul className="mt-7 space-y-3 text-sm text-stone">
                    {detailPoints[item.name]?.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-jade" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Layanan tambahan */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Layanan tambahan"
              title="Hal kecil yang bisa kami urus"
              description="Katakan kebutuhanmu saat memesan — kami siapkan sebelum kamu tiba."
            />
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {extraServices.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 rounded-sm border border-line/70 bg-white/60 px-5 py-4 text-sm text-ink/85"
                >
                  <Icon name="sparkle" className="h-4 w-4 shrink-0 text-brass" />
                  {service}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink(
                  "Halo Arunika, saya ingin bertanya tentang layanan tambahan.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-jade px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-sand transition-colors hover:bg-forest"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Tanya layanan
              </a>
              <Link
                href="/kamar"
                className="link-underline text-[0.7rem] uppercase tracking-[0.22em] text-jade"
              >
                Lihat tipe kamar
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const detailPoints: Record<string, string[]> = {
  "Infinity Pool": [
    "Kolam 25 m dengan kedalaman bertingkat untuk anak",
    "Bar air dan handuk kolam gratis",
    "Kursi santai terbatas 24 unit — tidak pernah penuh",
  ],
  "Arunika Spa": [
    "Empat ruang perawatan ganda untuk pasangan",
    "Pijat Bali 60/90 menit dengan minyak kelapa kunyit",
    "Kolam indoor berpemanas dan sauna herbal",
  ],
  "Dapur Nusantara": [
    "Menu sarapan à la carte, bukan buffet",
    "80% bahan dari kebun resort dan pasar pagi Ubud",
    "Pilihan menu vegetarian, halal, dan bebas gluten",
  ],
  "Perpustakaan & Lounge": [
    "Koleksi buku seni, arsitektur, dan sastra Indonesia",
    "Piringan hitam gamelan dan jazz klasik",
    "Jamuan teh sore gratis setiap hari pukul 16.00",
  ],
};
