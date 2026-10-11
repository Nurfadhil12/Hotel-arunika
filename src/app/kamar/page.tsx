import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { formatRupiah, hotel, images, rooms, whatsappLink } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Kamar & Suite",
  description:
    "Lima tipe kamar dan suite Arunika Resort & Spa Ubud, dari Garden Room 38 m² sampai Arunika Pool Villa 140 m² dengan kolam infinity pribadi.",
};

const included = [
  { icon: "breakfast" as const, text: "Sarapan à la carte untuk seluruh tamu di kamar" },
  { icon: "wifi" as const, text: "WiFi fiber 300 Mbps di seluruh area resort" },
  { icon: "spa" as const, text: "Akses kolam utama, spa pool indoor, dan kelas yoga" },
  { icon: "shuttle" as const, text: "Shuttle harian ke pusat Ubud setiap dua jam" },
  { icon: "bell" as const, text: "Concierge 24 jam & layanan kamar sampai pukul 23.00" },
  { icon: "check-circle" as const, text: "Pembatalan gratis sampai 3 hari sebelum check-in" },
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kamar & Suite"
        title="Ruang untuk setiap cara berlibur"
        description="Lima tipe kamar dengan tarif transparan. Semua sudah termasuk sarapan, akses kolam, dan spa pool indoor."
        image={images.poolSuite}
        imageAlt="Suite dengan kolam plunge pribadi di Arunika Resort & Spa"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="space-y-20 sm:space-y-28">
          {rooms.map((room, index) => (
            <Reveal key={room.slug}>
              <article
                id={room.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={[
                    "zoom-frame relative aspect-[4/3] overflow-hidden rounded-sm",
                    index % 2 === 1 ? "lg:order-2" : "",
                  ].join(" ")}
                >
                  <Image
                    src={room.image}
                    alt={`${room.name} — ${room.subtitle}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-sand/95 px-4 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-jade">
                    {room.size} · {room.guests}
                  </span>
                </div>

                <div>
                  <span className="eyebrow">Mulai {formatRupiah(room.price)}</span>
                  <h2 className="title-display mt-4 text-4xl text-ink">
                    {room.name}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-brass">
                    {room.subtitle}
                  </p>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-stone">
                    {room.description}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-stone">
                        <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-jade" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
                    <p>
                      <span className="title-display text-3xl text-jade">
                        {formatRupiah(room.price)}
                      </span>
                      <span className="ml-2 text-[0.7rem] uppercase tracking-[0.18em] text-stone">
                        {room.priceNote}
                      </span>
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={whatsappLink(
                          `Halo Arunika, saya ingin memesan ${room.name}. Tanggal rencana: `,
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-jade px-6 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-sand transition-colors hover:bg-forest"
                      >
                        <Icon name="whatsapp" className="h-4 w-4" />
                        Pesan kamar
                      </a>
                      <Link
                        href="/kontak"
                        className="link-underline text-[0.68rem] uppercase tracking-[0.22em] text-jade"
                      >
                        Cek tanggal
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-sand-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Sudah termasuk"
              title="Semua tarif mencakup hal-hal ini"
              description="Tanpa biaya tersembunyi, tanpa resort fee. Harga yang kami sebutkan adalah harga yang kamu bayar."
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={item.text} delay={i * 60}>
                <p className="flex items-start gap-3 rounded-sm border border-line/70 bg-white/70 px-5 py-4 text-sm text-ink/85">
                  <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <Reveal>
          <h2 className="title-display text-4xl text-ink">
            Butuh bantuan memilih?
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-stone">
            Ceritakan rencana perjalananmu — jumlah tamu, tanggal, dan hal yang
            paling kamu cari. Tim {hotel.shortName} akan mengusulkan kamar yang
            paling sesuai, bukan yang paling mahal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(
                "Halo Arunika, boleh bantu rekomendasi kamar untuk rencana perjalanan saya?",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-jade px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-sand transition-colors hover:bg-forest"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Tanya lewat WhatsApp
            </a>
            <a
              href={hotel.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:border-jade hover:text-jade"
            >
              <Icon name="phone" className="h-4 w-4" />
              {hotel.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
