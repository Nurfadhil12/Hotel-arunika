import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { hotel, images, stats } from "@/data/hotel";

const pillars = [
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
];

export function About() {
  return (
    <section id="tentang" className="bg-sand">
      {/* Statistik singkat */}
      <div className="border-b border-line">
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
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
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
              {pillars.map((item) => (
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
              href="#fasilitas"
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
      </div>
    </section>
  );
}
