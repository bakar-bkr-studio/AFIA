import * as React from "react";
import { cn } from "@/lib/utils";

/* Art Gallery spacing — generous vertical rhythm */
export function Section({
  className,
  containerClassName,
  children,
  id,
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div
        className={cn(
          "mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
