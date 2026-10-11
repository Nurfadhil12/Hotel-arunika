import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { formatRupiah, whatsappLink, type Room } from "@/data/hotel";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-line/70 bg-white/70 shadow-[0_18px_40px_-34px_rgba(15,21,18,0.5)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-34px_rgba(15,21,18,0.55)]">
      <div className="zoom-frame relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} di Arunika Resort & Spa`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        {room.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-sand/95 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-jade">
            {room.badge}
          </span>
        ) : null}
        <p className="absolute bottom-4 left-4 text-sand">
          <span className="title-display text-2xl">
            {formatRupiah(room.price)}
          </span>
          <span className="ml-1 text-[0.68rem] uppercase tracking-[0.2em] text-sand/80">
            / malam
          </span>
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="title-display text-2xl text-ink">{room.name}</h3>
        <p className="mt-1 text-sm text-stone">{room.subtitle}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.74rem] uppercase tracking-[0.14em] text-stone">
          <span className="flex items-center gap-2">
            <Icon name="size" className="h-4 w-4 text-brass" />
            {room.size}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="guests" className="h-4 w-4 text-brass" />
            {room.guests}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="bed" className="h-4 w-4 text-brass" />
            {room.bed}
          </span>
        </div>

        <div className="hairline my-5" />

        <ul className="space-y-2 text-sm text-stone">
          {room.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-jade" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-4 pt-1">
          <Link
            href={`/kamar#${room.slug}`}
            className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-jade"
          >
            Detail kamar
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink(
              `Halo Arunika, saya ingin bertanya ketersediaan ${room.name}.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="text-[0.72rem] uppercase tracking-[0.22em] text-brass transition-colors hover:text-jade"
          >
            Reservasi
          </a>
        </div>
      </div>
    </article>
  );
}
