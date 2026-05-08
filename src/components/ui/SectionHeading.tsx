import { cn } from "@/lib/cn";
import type { ElementType } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  as?: ElementType;
  align?: "left" | "center";
  id?: string;
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Comp = "h2",
  align = "center",
  id,
  theme = "light",
}: SectionHeadingProps) {
  const dark = theme === "dark";
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em]",
            dark ? "text-emerald-200/90" : "text-emerald-800",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Comp
        id={id}
        className={cn(
          "font-display text-balance text-3xl tracking-tight sm:text-4xl md:text-[2.65rem]",
          dark ? "text-white" : "text-stone-900",
        )}
      >
        {title}
      </Comp>
      {subtitle ? (
        <p
          className={cn(
            "text-pretty text-lg leading-relaxed",
            dark ? "text-stone-300" : "text-stone-600",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
