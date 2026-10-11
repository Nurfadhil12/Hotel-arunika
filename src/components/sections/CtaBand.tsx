import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { hotel, images, whatsappLink } from "@/data/hotel";

export function CtaBand() {
  return (
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
            Tim reservasi kami membalas dalam 15 menit pada jam kerja. Tanyakan
            ketersediaan, paket bulan madu, atau sewa seluruh resort.
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
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-sand/45 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-sand transition-colors hover:border-sand hover:bg-sand/10"
            >
              Formulir reservasi
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
