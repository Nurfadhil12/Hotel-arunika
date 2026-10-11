import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image: StaticImageData;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-forest pt-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
        <span className="eyebrow animate-fade">{eyebrow}</span>
        <h1 className="title-display animate-rise mt-5 max-w-3xl text-5xl text-sand sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="animate-rise mt-6 max-w-xl text-[0.98rem] leading-relaxed text-sand/75">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
