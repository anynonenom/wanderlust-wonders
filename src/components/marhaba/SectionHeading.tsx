import { Zellige } from "./Zellige";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${
        light ? "text-primary-foreground" : ""
      }`}
    >
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${light ? "text-accent" : "text-clay"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-balance leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"} text-balance`}>
          {description}
        </p>
      )}
      {align === "center" && <Zellige className={`mt-6 ${light ? "text-accent" : "text-clay"}`} />}
    </div>
  );
}
