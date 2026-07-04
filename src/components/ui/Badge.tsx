import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "outline" | "accent";
}

export function Badge({ className, variant = "outline", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase border rounded-none transition-colors",
        variant === "outline" && "border-card-border text-secondary bg-transparent",
        variant === "accent" && "border-accent/30 text-accent bg-accent/5",
        className
      )}
      {...props}
    />
  );
}

export default Badge;
