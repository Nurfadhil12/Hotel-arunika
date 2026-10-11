"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { hotel, navLinks } from "@/data/hotel";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "border-b border-line/80 bg-sand/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black/55 to-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            className={[
              "flex items-center gap-3 transition-colors",
              overlay ? "text-sand" : "text-ink",
            ].join(" ")}
            aria-label={`${hotel.name} — beranda`}
          >
            <span
              className={[
                "grid h-9 w-9 place-items-center rounded-full border text-[0.95rem]",
                overlay ? "border-sand/50 text-sand" : "border-brass/60 text-brass",
              ].join(" ")}
            >
              <span className="title-display translate-y-[1px] text-lg">A</span>
            </span>
            <span className="leading-tight">
              <span className="title-display block text-xl tracking-wide">
                Arunika
              </span>
              <span
                className={[
                  "block text-[0.58rem] uppercase tracking-[0.34em]",
                  overlay ? "text-sand/70" : "text-stone",
                ].join(" ")}
              >
                Resort &amp; Spa
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "link-underline text-[0.78rem] uppercase tracking-[0.2em] transition-colors",
                    overlay
                      ? "text-sand/90 hover:text-sand"
                      : active
                        ? "text-brass"
                        : "text-ink/80 hover:text-ink",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={hotel.phoneHref}
              className={[
                "hidden items-center gap-2 text-[0.78rem] tracking-wide md:flex",
                overlay ? "text-sand/85" : "text-stone",
              ].join(" ")}
            >
              <Icon name="phone" className="h-4 w-4" />
              {hotel.phoneDisplay}
            </a>
            <Link
              href="/kontak"
              className={[
                "hidden rounded-full px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.22em] transition-colors sm:inline-flex",
                overlay
                  ? "border border-sand/50 text-sand hover:bg-sand hover:text-ink"
                  : "bg-jade text-sand hover:bg-forest",
              ].join(" ")}
            >
              Reservasi
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className={[
                "grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden",
                overlay
                  ? "border-sand/45 text-sand"
                  : "border-line bg-white/60 text-ink",
              ].join(" ")}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={[
          "fixed inset-0 z-40 bg-jade text-sand transition-all duration-500 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="title-display border-b border-sand/15 py-4 text-3xl"
                style={{
                  transition: "opacity .4s ease, transform .4s ease",
                  transitionDelay: `${i * 45}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3 text-sm text-sand/80">
            <a className="flex items-center gap-3" href={hotel.phoneHref}>
              <Icon name="phone" className="h-4 w-4 text-brass-soft" />
              {hotel.phoneDisplay}
            </a>
            <a className="flex items-center gap-3" href={`mailto:${hotel.email}`}>
              <Icon name="mail" className="h-4 w-4 text-brass-soft" />
              {hotel.email}
            </a>
            <p className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 text-brass-soft" />
              {hotel.address}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
