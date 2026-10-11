import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { hotel, images, whatsappLink } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Kontak & Reservasi",
  description:
    "Hubungi Arunika Resort & Spa Ubud: telepon, WhatsApp, email, alamat, dan peta lokasi. Resepsionis 24 jam.",
};

const faqs = [
  {
    q: "Jam berapa check-in dan check-out?",
    a: `Check-in mulai pukul ${hotel.checkIn} dan check-out sebelum pukul ${hotel.checkOut}. Check-in lebih awal bisa diatur bila kamar tersedia — tanyakan saat memesan.`,
  },
  {
    q: "Apakah tarif sudah termasuk pajak dan sarapan?",
    a: "Ya. Harga yang kami sebutkan sudah termasuk sarapan, pajak, dan service charge. Tidak ada resort fee tambahan.",
  },
  {
    q: "Bisakah membatalkan atau mengubah tanggal?",
    a: "Pembatalan gratis sampai 3 hari sebelum tanggal check-in. Kurang dari itu dikenakan biaya satu malam. Perubahan tanggal bebas biaya selama kamar tersedia.",
  },
  {
    q: "Apakah tersedia antar-jemput bandara?",
    a: `Tersedia dengan biaya tambahan. Gratis untuk menginap minimal 3 malam di Canopy Suite dan Arunika Pool Villa. Kirim detail penerbangan ke ${hotel.email}.`,
  },
];

const contactCards = [
  {
    icon: "phone" as const,
    label: "Telepon",
    value: hotel.phoneDisplay,
    href: hotel.phoneHref,
    note: "Resepsionis 24 jam",
  },
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: hotel.whatsappDisplay,
    href: `https://wa.me/${hotel.whatsapp}`,
    note: "Dibalas rata-rata 15 menit",
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: hotel.email,
    href: `mailto:${hotel.email}`,
    note: "Untuk grup & acara",
  },
  {
    icon: "instagram" as const,
    label: "Instagram",
    value: hotel.instagram,
    href: hotel.instagramUrl,
    note: "Foto & cerita terbaru",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak & Reservasi"
        title="Mari bicara soal rencana menginapmu"
        description="Isi formulir di bawah, atau hubungi kami langsung. Kami menjawab pertanyaan panjang soal tanggal, kamar, dan acara dengan senang hati."
        image={images.lobbyBlueHour}
        imageAlt="Lounge penerimaan tamu Arunika pada waktu blue hour"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Hubungi kami"
              title="Empat cara menghubungi Arunika"
            />
            <div className="mt-10 space-y-3">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-sm border border-line/70 bg-white/65 px-5 py-4 transition-colors hover:border-brass/60"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brass/40 text-brass">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] uppercase tracking-[0.24em] text-stone">
                      {card.label}
                    </span>
                    <span className="block truncate text-sm text-ink">
                      {card.value}
                    </span>
                    <span className="block text-xs text-stone">{card.note}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-sm border border-line/70 bg-sand-deep/50 p-6">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                {hotel.address}
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-[0.68rem] uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2 text-stone">
                  <Icon name="clock" className="h-4 w-4 text-brass" />
                  Check-in {hotel.checkIn}
                </span>
                <span className="flex items-center gap-2 text-stone">
                  <Icon name="clock" className="h-4 w-4 text-brass" />
                  Check-out {hotel.checkOut}
                </span>
              </div>
              <a
                href={hotel.mapLink}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-5 inline-flex text-[0.68rem] uppercase tracking-[0.22em] text-jade"
              >
                Buka di peta
                <Icon name="arrow-right" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-sm border border-line/70 bg-white/70 p-7 sm:p-9">
              <span className="eyebrow">Formulir reservasi</span>
              <h2 className="title-display mt-4 text-3xl text-ink">
                Kirim permintaan menginap
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                Isi data perjalananmu, lalu pesan akan disusun otomatis dan
                dibuka di WhatsApp tim reservasi.
              </p>
              <div className="mt-8">
                <BookingForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Peta */}
      <section className="border-y border-line bg-sand-deep/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Lokasi"
              title="15 menit jalan kaki dari pusat Ubud"
              description="Di Jl. Raya Sanggingan, di antara Museum Neka dan pusat Ubud. Shuttle resort berangkat setiap dua jam."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-hidden rounded-sm border border-line/70">
              <iframe
                title="Peta lokasi Arunika Resort & Spa"
                src={hotel.mapEmbed}
                loading="lazy"
                className="h-[420px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Pertanyaan umum"
            title="Hal yang paling sering ditanyakan"
          />
        </Reveal>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[0.98rem] text-ink">
                {item.q}
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 shrink-0 text-brass transition-transform duration-300 group-open:rotate-90"
                />
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <Reveal delay={80}>
          <div className="mt-12 text-center">
            <a
              href={whatsappLink(
                "Halo Arunika, saya punya pertanyaan yang belum ada di FAQ.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-jade px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-sand transition-colors hover:bg-forest"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Tanya hal lain
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
