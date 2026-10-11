import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  facilities,
  gallery,
  hotel,
  images,
  rooms,
  stats,
  testimonials,
  whatsappLink,
} from "@/data/hotel";

const featuredRooms = rooms.filter((room) => room.featured);
const homeFacilities = facilities.slice(0, 4);
const galleryPreview = gallery.slice(0, 5);

export default function HomePage() {
  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest">
        <Image
          src={images.heroSunset}
          alt="Resort tropis Arunika saat matahari terbenam, kolam memantulkan langit jingga"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/85" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8">
          <span className="eyebrow animate-fade text-brass-soft">
            Ubud · Bali · Indonesia
          </span>
          <h1 className="title-display animate-rise mt-6 max-w-4xl text-[2.9rem] leading-[1.03] text-sand sm:text-6xl lg:text-7xl">
            Ketenangan tropis di
            <span className="italic text-brass-soft"> jantung Ubud</span>
          </h1>
          <p className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-sand/80 sm:text-[1.05rem]">
            32 kamar dan suite di tepi lembah Sanggingan. Kolam infinity
            menghadap hutan, dapur yang memasak hasil kebun sendiri, dan
            pelayanan yang tidak perlu kamu minta dua kali.
          </p>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-sand px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink transition-colors hover:bg-brass-soft"
            >
              Reservasi sekarang
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <Link
              href="/kamar"
              className="inline-flex items-center gap-2 rounded-full border border-sand/45 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-sand transition-colors hover:border-sand hover:bg-sand/10"
            >
              Jelajahi kamar
            </Link>
          </div>

          <div className="animate-fade mt-14 flex flex-wrap items-center gap-6 text-sand/75">
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-brass-soft">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-3.5 w-3.5" />
                ))}
              </span>
              <span className="text-[0.72rem] uppercase tracking-[0.2em]">
                {hotel.rating} dari {hotel.reviews} ulasan
              </span>
            </span>
            <span className="hidden h-4 w-px bg-sand/25 sm:block" />
            <span className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em]">
              <Icon name="bell" className="h-4 w-4 text-brass-soft" />
              Concierge 24 jam
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sand/60 sm:flex">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Gulir</span>
          <span className="animate-cue h-8 w-px bg-sand/45" />
        </div>
      </section>

      {/* ------------------------------ STATS ------------------------------- */}
      <section className="border-b border-line bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <p className="title-display text-4xl text-jade">{stat.value}</p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-stone">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ TENTANG ----------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Tentang Arunika"
              title={
                <>
                  Rumah kedua yang
                  <span className="italic text-brass"> terasa jauh dari kota</span>
                </>
              }
              description={hotel.intro}
            />

            <ul className="mt-10 space-y-6">
              {[
                {
                  icon: "leaf" as const,
                  title: "Berkebun sendiri",
                  text: "Tiga petak kebun memasok sayur, rempah, dan buah untuk dapur kami setiap pagi.",
                },
                {
                  icon: "sparkle" as const,
                  title: "Rasio staf 1:2",
                  text: "Satu anggota tim untuk setiap dua kamar — perhatian terasa, tapi tidak mengganggu.",
                },
                {
                  icon: "sun" as const,
                  title: "Ritual harian",
                  text: "Yoga matahari terbit, jamuan teh sore, dan doa canang sari yang disiapkan tim kami.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brass/40 text-brass">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium tracking-wide text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/fasilitas"
              className="link-underline mt-10 inline-flex text-[0.72rem] uppercase tracking-[0.24em] text-jade"
            >
              Lihat semua fasilitas
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="zoom-frame relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={images.poolMainBuilding}
                alt="Kolam utama Arunika dan bangunan utama berlatar pepohonan"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-2/5 overflow-hidden rounded-sm border-4 border-sand shadow-soft sm:block lg:-left-14">
              <div className="zoom-frame relative aspect-[4/3]">
                <Image
                  src={images.lobbyBlueHour}
                  alt="Lounge penerimaan tamu Arunika pada waktu blue hour"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- KAMAR ------------------------------ */}
      <section className="border-y border-line bg-sand-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Kamar & Suite"
              title="Pilih ruang sesuai ritme liburanmu"
              description="Dari Garden Room 38 m² sampai Arunika Pool Villa dengan kolam infinity pribadi 12 meter. Semua tarif sudah termasuk sarapan."
            />
            <Link
              href="/kamar"
              className="link-underline text-[0.72rem] uppercase tracking-[0.24em] text-jade"
            >
              Semua tipe kamar
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 90} className="h-full">
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- FASILITAS ---------------------------- */}
      <section className="grain bg-forest text-sand">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Fasilitas"
                tone="dark"
                title={
                  <>
                    Semua yang kamu butuhkan,
                    <span className="italic text-brass-soft"> tanpa dipungut biaya</span>
                  </>
                }
                description="Kolam, spa, perpustakaan, dan kelas yoga sudah termasuk untuk setiap tamu yang menginap."
              />

              <div className="mt-10 divide-y divide-sand/12">
                {homeFacilities.map((item) => (
                  <div key={item.name} className="flex gap-5 py-5">
                    <Icon
                      name={item.icon}
                      className="mt-1 h-5 w-5 shrink-0 text-brass-soft"
                    />
                    <div>
                      <p className="title-display text-xl text-sand">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-sand/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/fasilitas"
                className="link-underline mt-10 inline-flex text-[0.72rem] uppercase tracking-[0.24em] text-brass-soft"
              >
                Selengkapnya
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={140} className="grid gap-4 sm:grid-cols-2">
              <div className="zoom-frame relative aspect-[4/5] overflow-hidden rounded-sm sm:col-span-2">
                <Image
                  src={images.poolTerrace}
                  alt="Kolam utama dan terras Arunika menghadap pepohonan"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="zoom-frame relative aspect-[4/3] overflow-hidden rounded-sm sm:col-span-2">
                <Image
                  src={images.restaurant}
                  alt="Restoran Dapur Nusantara dengan meja bundar"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ GALERI ------------------------------ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Galeri"
            title="Sekilas suasana Arunika"
            description="Dokumentasi kolam, taman, kamar, dan meja makan kami — tanpa filter berlebihan."
          />
          <Link
            href="/galeri"
            className="link-underline text-[0.72rem] uppercase tracking-[0.24em] text-jade"
          >
            Buka galeri lengkap
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryPreview.map((item, index) => (
            <Reveal
              key={`${item.alt}-${index}`}
              delay={index * 70}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <Link href="/galeri" className="block">
                <div
                  className={[
                    "zoom-frame relative overflow-hidden rounded-sm",
                    index === 0 ? "aspect-square" : "aspect-[4/3]",
                  ].join(" ")}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------- TESTIMONIAL --------------------------- */}
      <section className="border-y border-line bg-sand-deep/70">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Kata tamu"
              title="Cerita mereka setelah menginap"
            />
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 100} className="h-full">
                <figure className="flex h-full flex-col rounded-sm border border-line/70 bg-white/75 p-7">
                  <Icon name="quote" className="h-6 w-6 text-brass/70" />
                  <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <span className="flex items-center gap-1 text-brass">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Icon key={s} name="star" className="h-3.5 w-3.5" />
                      ))}
                    </span>
                    <p className="mt-3 text-sm font-medium text-ink">
                      {item.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone">
                      {item.origin} · {item.stay}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- CTA ------------------------------- */}
      <section className="relative overflow-hidden">
        <Image
          src={images.gardenPool1}
          alt="Kolam taman Arunika dengan kursi santai dan payung"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <span className="eyebrow eyebrow-center justify-center text-brass-soft">
              Reservasi
            </span>
            <h2 className="title-display mt-6 text-4xl text-sand sm:text-5xl">
              Rencanakan menginapmu di Arunika
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[0.98rem] leading-relaxed text-sand/75">
              Tim reservasi kami membalas dalam 15 menit pada jam kerja.
              Tanyakan ketersediaan, paket bulan madu, atau sewa seluruh resort.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink(
                  "Halo Arunika, saya ingin bertanya tentang ketersediaan kamar.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sand px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink transition-colors hover:bg-brass-soft"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                WhatsApp {hotel.whatsappDisplay}
              </a>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 rounded-full border border-sand/45 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-sand transition-colors hover:border-sand hover:bg-sand/10"
              >
                Formulir reservasi
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
