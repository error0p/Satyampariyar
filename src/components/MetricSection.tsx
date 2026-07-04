"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

interface MetricItemProps {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  delay: number;
}

function MetricItem({ value, suffix, decimals = 0, label, delay }: MetricItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Trigger delay
    const timeout = setTimeout(() => {
      const controls = animate(0, value, {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(latest);
        },
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  const formattedNumber = displayValue.toFixed(decimals);

  return (
    <div
      ref={ref}
      className="flex flex-col border-l border-card-border pl-6 md:pl-8 py-4"
    >
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground flex items-baseline"
      >
        <span>{formattedNumber}</span>
        <span className="text-accent ml-0.5">{suffix}</span>
      </motion.span>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="text-xs font-mono uppercase tracking-widest text-secondary mt-3 leading-relaxed"
      >
        {label}
      </motion.p>
    </div>
  );
}

export default function MetricSection() {
  const metrics = [
    { value: 32.7, suffix: "M+", decimals: 1, label: "Campaign Reach" },
    { value: 50, suffix: "K+", decimals: 0, label: "Engagement Growth" },
    { value: 50, suffix: "+", decimals: 0, label: "Marketing Assets" },
    { value: 7, suffix: "+", decimals: 0, label: "Brands Supported" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m, i) => (
            <MetricItem
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              decimals={m.decimals}
              label={m.label}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
