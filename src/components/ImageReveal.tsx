"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  className,
  aspectRatio = "aspect-video",
  priority = false,
}: ImageRevealProps) {
  return (
    <div className={cn("relative overflow-hidden w-full", aspectRatio, className)}>
      {/* Background slide cover */}
      <motion.div
        initial={{ y: "0%" }}
        whileInView={{ y: "-100%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-card z-10"
      />
      {/* Zoomed image */}
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
