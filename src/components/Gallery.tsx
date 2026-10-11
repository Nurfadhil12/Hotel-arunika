"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/Icon";
import { gallery, type GalleryItem } from "@/data/hotel";

const categories = ["Semua", "Kolam", "Kamar", "Taman", "Kuliner", "Arsitektur"] as const;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Semua");
  const [active, setActive] = useState<number | null>(null);

  const items: GalleryItem[] = useMemo(
    () =>
      filter === "Semua"
        ? gallery
        : gallery.filter((item) => item.category === filter),
    [filter],
  );

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((current) =>
        current === null
          ? current
          : (current + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  const current = active === null ? null : items[active] ?? null;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setFilter(category);
              setActive(null);
            }}
            className={[
              "rounded-full border px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors",
              filter === category
                ? "border-jade bg-jade text-sand"
                : "border-line text-stone hover:border-jade hover:text-jade",
            ].join(" ")}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[215px] lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={`${item.image.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className="zoom-frame group relative h-full overflow-hidden rounded-sm bg-sand-deep"
            aria-label={`Perbesar: ${item.alt}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
            <span className="absolute bottom-3 left-3 rounded-full bg-sand/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-jade opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        item={current}
        index={active}
        total={items.length}
        onClose={close}
        onStep={step}
      />
    </div>
  );
}

/**
 * Lightbox dirender lewat portal ke document.body.
 * Leluhurnya memakai `transform` (animasi .reveal) yang akan menahan
 * position:fixed sehingga overlay tidak menutup viewport kalau dirender di dalam pohon ini.
 */
function Lightbox({
  item,
  index,
  total,
  onClose,
  onStep,
}: {
  item: GalleryItem | null;
  index: number | null;
  total: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  // Tidak perlu penanda "mounted": state `active` selalu null saat render server,
  // jadi portal hanya mungkin dipanggil di klien.
  if (!item || index === null || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="animate-fade fixed inset-0 z-[80] flex flex-col bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau foto"
    >
      <div className="flex items-center justify-between px-5 py-4 text-sand sm:px-8">
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-sand/70">
          {item.category} · {index + 1}/{total}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="grid h-10 w-10 place-items-center rounded-full border border-sand/30 text-sand transition-colors hover:border-brass hover:text-brass-soft"
          aria-label="Tutup pratinjau"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex-1">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="100vw"
          className="object-contain p-4 sm:p-10"
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-5 pb-8 sm:px-8">
        <button
          type="button"
          onClick={() => onStep(-1)}
          className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-sand/80 transition-colors hover:text-brass-soft"
        >
          <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
          Sebelumnya
        </button>
        <p className="hidden max-w-lg text-center text-sm text-sand/70 sm:block">
          {item.alt}
        </p>
        <button
          type="button"
          onClick={() => onStep(1)}
          className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-sand/80 transition-colors hover:text-brass-soft"
        >
          Berikutnya
          <Icon name="arrow-right" className="h-4 w-4" />
        </button>
      </div>
    </div>,
    document.body,
  );
}
