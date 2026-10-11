import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { hotel, images } from "@/data/hotel";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest"
    >
      <Image
        src={images.heroSunset}
        alt="Resort tropis Arunika saat matahari terbenam, kolam memantulkan langit jingga"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8">
        <span className="eyebrow animate-fade text-brass-soft">
          Ubud · Bali · Indonesia
        </span>
        <h1 className="title-display animate-rise mt-6 max-w-4xl text-[2.9rem] leading-[1.03] text-sand sm:text-6xl lg:text-7xl">
          Ketenangan tropis di
          <span className="italic text-brass-soft"> jantung Ubud</span>
        </h1>
        <p className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-sand/80 sm:text-[1.05rem]">
          32 kamar dan suite di tepi lembah Sanggingan. Kolam infinity menghadap
          hutan, dapur yang memasak hasil kebun sendiri, dan pelayanan yang tidak
          perlu kamu minta dua kali.
        </p>

        <div className="animate-rise mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full bg-sand px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink transition-colors hover:bg-brass-soft"
          >
            Reservasi sekarang
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <Link
            href="#kamar"
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

      <Link
        href="#tentang"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sand/60 transition-colors hover:text-sand sm:flex"
        aria-label="Gulir ke bagian tentang"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Gulir</span>
        <span className="animate-cue h-8 w-px bg-sand/45" />
      </Link>
    </section>
  );
}
