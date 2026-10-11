import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { extraServices, facilities, images } from "@/data/hotel";

const highlights = facilities.slice(0, 4);

export function Facilities() {
  return (
    <section id="fasilitas" className="grain bg-forest text-sand">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        {/* Fasilitas unggulan: teks + kolase foto */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
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
              {highlights.map((item) => (
                <div key={item.name} className="flex gap-5 py-5">
                  <Icon
                    name={item.icon}
                    className="mt-1 h-5 w-5 shrink-0 text-brass-soft"
                  />
                  <div>
                    <p className="title-display text-xl text-sand">{item.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-sand/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140} className="grid gap-4 sm:grid-cols-2">
            <div className="zoom-frame relative aspect-[3/2] overflow-hidden rounded-sm sm:col-span-2">
              <Image
                src={images.poolTerrace}
                alt="Kolam utama dan terras Arunika menghadap pepohonan"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="zoom-frame relative aspect-[2/1] overflow-hidden rounded-sm sm:col-span-2">
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

        {/* Delapan fasilitas utama */}
        <div className="mt-20 sm:mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Daftar lengkap"
                tone="dark"
                title="Delapan fasilitas utama"
                description="Buka setiap hari untuk tamu yang menginap, tanpa biaya tambahan kecuali yang tertera."
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item, i) => (
              <Reveal key={item.name} delay={(i % 4) * 70} className="h-full">
                <div className="flex h-full flex-col rounded-sm border border-sand/15 bg-forest/60 p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-brass/40 text-brass-soft">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="title-display mt-5 text-xl text-sand">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-sand/65">
                    {item.description}
                  </p>
                  {item.hours ? (
                    <p className="mt-4 flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.2em] text-brass-soft">
                      <Icon name="clock" className="h-3.5 w-3.5" />
                      {item.hours}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Layanan tambahan */}
        <div className="mt-20 grid gap-12 border-t border-sand/12 pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20 sm:mt-24">
          <Reveal>
            <SectionHeading
              eyebrow="Layanan tambahan"
              tone="dark"
              title="Hal kecil yang bisa kami urus"
              description="Katakan kebutuhanmu saat memesan — kami siapkan sebelum kamu tiba."
            />
            <Link
              href="#kontak"
              className="link-underline mt-8 inline-flex text-[0.72rem] uppercase tracking-[0.24em] text-brass-soft"
            >
              Kirim permintaan
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {extraServices.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 rounded-sm border border-sand/15 px-5 py-4 text-sm text-sand/80"
                >
                  <Icon name="sparkle" className="h-4 w-4 shrink-0 text-brass-soft" />
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
