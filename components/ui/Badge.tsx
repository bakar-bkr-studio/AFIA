import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "outline";
}) {
  const variants: Record<string, string> = {
    default: "bg-surface-muted text-text-secondary",
    primary: "bg-primary-100 text-primary-800",
    outline: "border border-border text-text-secondary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
