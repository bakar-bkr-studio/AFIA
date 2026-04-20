"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants: Record<string, string> = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary-hover",
      secondary:
        "bg-primary-100 text-primary-800 hover:bg-primary-200",
      outline:
        "border border-border text-text-primary hover:border-primary hover:text-primary",
      ghost:
        "text-text-secondary hover:text-primary hover:bg-primary-50",
    };

    const sizes: Record<string, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base font-medium",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97, y: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
