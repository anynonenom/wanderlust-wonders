import { Squiggle } from "./Squiggle";

export function SectionHeading({
  kicker,
  title,
  script,
  description,
  align = "center",
  light = false,
}: {
  kicker?: string;
  title: string;
  /** A short word rendered in handwritten script, placed inline with title */
  script?: string;
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
      {kicker && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""} mb-4`}>
          <Squiggle className={`w-10 h-2 ${light ? "text-mustard" : "text-coral"}`} />
          <p className={`text-[11px] uppercase tracking-[0.32em] font-bold ${light ? "text-mustard" : "text-coral"}`}>
            {kicker}
          </p>
          <Squiggle className={`w-10 h-2 ${light ? "text-mustard" : "text-coral"}`} />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] text-balance">
        {title}
        {script && (
          <>
            {" "}
            <span className="font-script text-coral text-[1.15em] leading-none align-baseline">{script}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"} text-balance leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
