import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border border-card-border bg-card p-6 transition-all duration-300 hover:border-foreground/20",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export default Card;
