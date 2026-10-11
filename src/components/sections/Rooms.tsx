import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeading } from "@/components/SectionHeading";
import { hotel, roomInclusions, rooms, whatsappLink } from "@/data/hotel";

export function Rooms() {
  return (
    <section id="kamar" className="border-y border-line bg-sand-deep/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Kamar & Suite"
            title="Pilih ruang sesuai ritme liburanmu"
            description="Lima tipe kamar dengan tarif transparan, dari Garden Room 38 m² sampai Arunika Pool Villa dengan kolam infinity pribadi 12 meter. Semua tarif sudah termasuk sarapan."
          />
          <Link
            href="#kontak"
            className="link-underline text-[0.72rem] uppercase tracking-[0.24em] text-jade"
          >
            Cek ketersediaan
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={(i % 3) * 90} className="h-full">
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>

        {/* Hak yang sudah termasuk */}
        <Reveal delay={80}>
          <div className="mt-16 rounded-sm border border-line/70 bg-white/60 p-7 sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Sudah termasuk</span>
                <h3 className="title-display mt-4 text-3xl text-ink">
                  Semua tarif mencakup hal-hal ini
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-stone">
                Tanpa biaya tersembunyi, tanpa resort fee. Harga yang kami
                sebutkan adalah harga yang kamu bayar.
              </p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roomInclusions.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-sm text-ink/85"
                >
                  <Icon
                    name={item.icon}
                    className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
            <p className="w-full text-[0.95rem] text-stone sm:w-auto">
              Butuh bantuan memilih kamar?
            </p>
            <a
              href={whatsappLink(
                `Halo ${hotel.shortName}, boleh bantu rekomendasi kamar untuk rencana perjalanan saya?`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-jade px-6 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-sand transition-colors hover:bg-forest"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Tanya lewat WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
