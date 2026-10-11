import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/hotel";

export function Testimonials() {
  return (
    <section id="testimoni" className="border-y border-line bg-sand-deep/70">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Kata tamu"
            title="Cerita mereka setelah menginap"
          />
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col rounded-sm border border-line/70 bg-white/75 p-7">
                <Icon name="quote" className="h-6 w-6 text-brass/70" />
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <span className="flex items-center gap-1 text-brass">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-3.5 w-3.5" />
                    ))}
                  </span>
                  <p className="mt-3 text-sm font-medium text-ink">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone">
                    {item.origin} · {item.stay}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
