"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "./ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  year: string;
  index: string;
  imageSrc?: string;
  scrollImages?: string[];
  bgClassName?: string;
  className?: string;
}

export default function ProjectCard({
  slug,
  title,
  category,
  year,
  index,
  imageSrc,
  scrollImages,
  bgClassName,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group flex flex-col w-full", className)}
    >
      <Link href={`/case-study/${slug}`} className="flex flex-col w-full cursor-pointer">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] bg-card border border-card-border overflow-hidden mb-5">
          {scrollImages && scrollImages.length > 0 ? (
            /* Infinite Scrolling Strip for Meet The Team */
            <div className="absolute inset-0 flex items-center overflow-hidden bg-[#0d0305]">
              <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
                {/* Render two sets of images for seamless loop */}
                {[...scrollImages, ...scrollImages].map((img, i) => (
                  <div key={i} className="relative w-28 h-36 flex-shrink-0 md:w-36 md:h-48 border border-white/10 rounded-sm overflow-hidden">
                    <Image
                      src={img}
                      alt={`${title} snippet ${i}`}
                      fill
                      sizes="(max-width: 768px) 112px, 144px"
                      className="object-cover"
                      priority={i < 4}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : bgClassName ? (
            /* Premium Gradient Background with Logo Overlay */
            <div className={cn("absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden", bgClassName)}>
              {/* Radial Highlight Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
              {imageSrc && (
                <div className="relative w-1/3 aspect-square max-w-[120px] transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ) : (
            /* Standard Static Project Image */
            imageSrc && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500"
                />
              </motion.div>
            )
          )}


          {/* Hover Overlay Button */}
          <div className="absolute inset-0 bg-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-background text-foreground text-[10px] font-mono font-bold tracking-widest uppercase px-5 py-2.5 shadow-md border border-card-border pointer-events-none transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
              View Case Study
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-none shadow-sm text-foreground">
              {category}
            </Badge>
          </div>
        </div>

        {/* Metadata Footer */}
        <div className="flex justify-between items-start border-b border-card-border pb-4">
          <div className="flex flex-col gap-1 max-w-[80%]">
            <span className="font-mono text-[10px] text-secondary tracking-widest leading-none">
              {index}
            </span>
            <h3 className="font-display font-semibold text-lg md:text-xl text-foreground tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-secondary">{year}</span>
            <motion.div
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 2, y: -2 },
              }}
              className="text-foreground"
            >
              <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
