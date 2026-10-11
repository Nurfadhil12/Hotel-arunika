import Link from "next/link";
import { Icon } from "@/components/Icon";
import { hotel, navLinks } from "@/data/hotel";

export async function Footer() {
  "use cache";
  // Tahun dibekukan saat build (Cache Components menolak waktu berjalan saat prerender).
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-sand/75">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-brass/60">
                <span className="title-display translate-y-[1px] text-xl text-brass-soft">
                  A
                </span>
              </span>
              <span>
                <span className="title-display block text-2xl text-sand">
                  Arunika
                </span>
                <span className="block text-[0.58rem] uppercase tracking-[0.34em] text-sand/55">
                  Resort &amp; Spa
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {hotel.tagline}. 32 kamar, satu lembah, dan dapur yang memasak
              hasil kebun sendiri.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={hotel.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-sand/25 transition-colors hover:border-brass hover:text-brass-soft"
                aria-label="Instagram Arunika Resort & Spa"
              >
                <Icon name="instagram" className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`https://wa.me/${hotel.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-sand/25 transition-colors hover:border-brass hover:text-brass-soft"
                aria-label="WhatsApp reservasi"
              >
                <Icon name="whatsapp" className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-soft">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-sand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-soft">
              Kontak
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-sand/50" />
                <span>{hotel.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-sand/50" />
                <a href={hotel.phoneHref} className="hover:text-sand">
                  {hotel.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-sand/50" />
                <a href={`mailto:${hotel.email}`} className="hover:text-sand">
                  {hotel.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-soft">
              Jam Layanan
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Icon name="clock" className="h-4 w-4 shrink-0 text-sand/50" />
                Check-in {hotel.checkIn} · Check-out {hotel.checkOut}
              </li>
              <li className="flex items-center gap-3">
                <Icon name="bell" className="h-4 w-4 shrink-0 text-sand/50" />
                Resepsionis 24 jam
              </li>
              <li className="flex items-center gap-3">
                <Icon name="breakfast" className="h-4 w-4 shrink-0 text-sand/50" />
                Dapur Nusantara 07.00 – 23.00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-sand/12 pt-6 text-xs text-sand/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {hotel.name}. Situs contoh untuk portofolio — data,
            alamat, dan tarif bersifat fiktif.
          </p>
          <p>Foto: Wikimedia Commons (lisensi CC) — lihat CREDITS.md</p>
        </div>
      </div>
    </footer>
  );
}
