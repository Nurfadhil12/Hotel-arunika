import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8">
      <span className="eyebrow eyebrow-center">404</span>
      <h1 className="title-display mt-6 text-5xl text-ink">
        Halaman ini tidak ada
      </h1>
      <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-stone">
        Mungkin tautannya berubah. Kembali ke beranda, atau langsung lihat tipe
        kamar dan fasilitas kami.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-jade px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-sand transition-colors hover:bg-forest"
        >
          <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
          Beranda
        </Link>
        <Link
          href="/kamar"
          className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:border-jade hover:text-jade"
        >
          Lihat kamar
        </Link>
      </div>
    </section>
  );
}
