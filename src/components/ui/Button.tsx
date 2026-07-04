import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
};

export type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
export type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkProps>(
  ({ className, variant = "primary", size = "md", href, external, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-medium tracking-wide uppercase transition-all duration-300 rounded-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent";

    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98]",
      secondary:
        "border border-card-border bg-transparent text-foreground hover:border-foreground hover:bg-card active:scale-[0.98]",
      ghost: "bg-transparent text-foreground hover:text-accent p-0 border-none hover:bg-transparent",
    };

    const sizes = {
      sm: "text-[10px] px-4 py-2 tracking-widest",
      md: "text-xs px-6 py-3 tracking-wider",
      lg: "text-sm px-8 py-4 tracking-widest",
    };

    const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={combinedClass}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref as any}
            {...(props as any)}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClass} ref={ref as any} {...(props as any)}>
          {children}
        </Link>
      );
    }

    return (
      <button className={combinedClass} ref={ref as any} {...(props as any)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
