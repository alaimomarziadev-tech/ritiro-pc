"use client";

import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function ButtonLink({
  className,
  variant = "primary",
  external,
  children,
  ...rest
}: Props) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" &&
          "bg-emerald-950 text-white shadow-[0_10px_30px_-14px_rgb(15_118_110)] hover:bg-emerald-900 active:translate-y-[1px] focus-visible:outline-emerald-700",
        variant === "secondary" &&
          "border border-emerald-900/20 bg-white text-emerald-950 hover:border-emerald-800 hover:bg-emerald-50 focus-visible:outline-emerald-700",
        variant === "ghost" &&
          "text-stone-800 hover:bg-stone-100 focus-visible:outline-stone-400",
        className,
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
