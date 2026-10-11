import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={[
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      ].join(" ")}
    >
      <span className={`eyebrow ${isCenter ? "eyebrow-center" : ""}`}>
        {eyebrow}
      </span>
      <h2
        className={[
          "title-display mt-5 text-4xl sm:text-5xl",
          tone === "dark" ? "text-sand" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-5 text-[0.98rem] leading-relaxed",
            tone === "dark" ? "text-sand/70" : "text-stone",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
