"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetricSection from "@/components/MetricSection";
import ProjectCard from "@/components/ProjectCard";
import ImageReveal from "@/components/ImageReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  const marqueeItems = [
    "Brand Identity",
    "Campaign Design",
    "Visual Systems",
    "Employer Branding",
    "Brand Guidelines",
    "Typography",
    "B2B Communication",
    "Creative Direction",
    "Print Design",
    "Motion Graphics",
  ];

  const featuredProjects = [
    {
      slug: "meet-the-team",
      title: "Meet The Team — Patil Group",
      category: "Employer Branding",
      year: "2025–26",
      index: "01",
      scrollImages: [
        "/assets/img/meet the team 1.png",
        "/assets/img/meet the team 2.png",
        "/assets/img/meet the team 3.png",
        "/assets/img/meet the team 4.png",
        "/assets/img/meet the team 5.png",
        "/assets/img/meet the team 6.png",
        "/assets/img/meet the team 7.png",
        "/assets/img/meet the team 8.png",
        "/assets/img/meet the team 9.png",
        "/assets/img/meet the team 10.png",
      ],
    },
    {
      slug: "arujiva",
      title: "Arujiva — Brand Identity System",
      category: "Brand Identity",
      year: "2024",
      index: "02",
      imageSrc: "/assets/img/arujiva-12.png",
    },
    {
      slug: "skyverrra",
      title: "Skyverrra Ventures — Branding & Logo",
      category: "Brand Identity",
      year: "2024",
      index: "03",
      imageSrc: "/assets/img/skyverrra-logo.jpg",
    },
    {
      slug: "digital-content",
      title: "Digital Content Ecosystem — Patil Group",
      category: "Content Design",
      year: "2025–26",
      index: "04",
      imageSrc: "/assets/img/layer3.png", // Use hero background or generic asset
    },
  ];

  const services = [
    {
      num: "01",
      title: "Brand Identity",
      desc: "Logo development, color systems, typography, and comprehensive brand guidelines. Built for longevity and consistent applications from business cards to billboard scales.",
    },
    {
      num: "02",
      title: "Campaign Design",
      desc: "Multi-channel creative campaigns for digital, social, and print. Employer branding, corporate awareness, and product rollouts tied together with strict visual systems.",
    },
    {
      num: "03",
      title: "B2B Communication",
      desc: "Pitch decks, annual reports, brochures, and technical collateral that translate complex systems into clear, credible visual narratives for B2B decision makers.",
    },
    {
      num: "04",
      title: "Creative Direction",
      desc: "Visual direction, design systems governance, photography direction, and templates design that enable in-house marketing teams to scale execution independently.",
    },
  ];

  const journalPreviews = [
    {
      category: "Branding",
      title: "The Power of Restraint in B2B Branding",
      date: "June 2026",
      slug: "power-of-restraint",
    },
    {
      category: "Strategy",
      title: "Designing Visual Systems for 5,000-Person Conglomerates",
      date: "May 2026",
      slug: "designing-visual-systems",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-between py-12 md:py-20 bg-background overflow-hidden border-b border-card-border">
          {/* Background Layer (Full Bleed) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/assets/img/layer3.png"
              alt="Sunset mountains landscape"
              fill
              className="object-cover object-center opacity-85 dark:opacity-30 transition-opacity duration-300"
              priority
            />
            {/* Theme-aware overlays for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/15 to-background/65" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-background)_90%)]" />
            {/* Center vignette to pop the text */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />
          </div>

          {/* Top spacer */}
          <div className="h-4" />

          {/* Middle: Content Stack */}
          <div className="container-custom z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-10 my-auto">
            {/* Status indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono uppercase tracking-widest text-secondary"
            >
              <div className="flex items-center gap-2 bg-card border border-card-border px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Open to opportunities</span>
              </div>
              <span>·</span>
              <span>Hyderabad / Bangalore, India</span>
            </motion.div>

            {/* Giant Title */}
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="t-hero text-foreground select-none text-center tracking-tight leading-none"
              >
                Satyam
                <br />
                Pariyar
              </motion.h1>
            </div>

            {/* Subtitle / Tagline & CTA Buttons */}
            <div className="flex flex-col items-center gap-8 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl font-medium text-secondary leading-relaxed text-center"
              >
                Brand &amp; Marketing Designer.<br />
                <span className="text-foreground italic">Brands built to last.</span><br />
                Campaigns built to land.
              </motion.p>

              {/* Minimal CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center gap-4 mt-2"
              >
                <Button href="/work" variant="primary" className="px-6 py-3 text-xs tracking-wider">
                  View Work
                </Button>
                <Button href="/contact" variant="secondary" className="px-6 py-3 text-xs tracking-wider bg-background/50 backdrop-blur-xs">
                  Say Hello
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Bottom: Scroll explorer (natural flow) */}
          <div className="container-custom z-10 flex flex-col items-center mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center gap-3 font-mono text-[9px] text-secondary uppercase tracking-widest"
            >
              <span>Scroll to explore</span>
              <div className="w-[1px] h-8 bg-secondary/35"></div>
            </motion.div>
          </div>
        </section>

        {/* Marquee Section */}
        <div className="w-full overflow-hidden border-b border-card-border py-4 bg-card select-none">
          <div className="flex w-max gap-8 animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8 font-mono text-xs font-semibold uppercase tracking-widest text-secondary">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 bg-accent/40 rounded-full"></span>
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Highlights */}
        <MetricSection />

        <div className="divider"></div>

        {/* Selected Work Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-16">
              <div className="flex flex-col gap-2">
                <span className="t-label">Selected Work</span>
                <h2 className="t-h2 text-foreground">Featured Projects</h2>
              </div>
              <Button href="/work" variant="ghost" className="flex items-center gap-2 group cursor-pointer text-secondary hover:text-foreground">
                <span>View all work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  index={project.index}
                  imageSrc={project.imageSrc}
                  scrollImages={project.scrollImages}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Services Section */}
        <section className="py-24 bg-card">
          <div className="container-custom">
            <span className="t-label block mb-6">What I do</span>
            <h2 className="t-h2 text-foreground mb-16 max-w-xl">
              Visual systems built to bridge strategy &amp; business growth.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col border border-card-border p-8 bg-background shadow-sm hover:border-foreground/15 transition-all duration-300"
                >
                  <span className="font-mono text-xs font-bold text-accent mb-6">
                    {service.num}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Design Philosophy Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex flex-col gap-2">
                <span className="t-label">Design Philosophy</span>
                <h2 className="t-h2 text-foreground">Core Principles</h2>
              </div>
              <div className="lg:col-span-8 border-l border-card-border pl-6 md:pl-12 py-4">
                <p className="font-display font-medium text-2xl md:text-3xl text-foreground leading-snug tracking-tight mb-8">
                  &ldquo;Design is not decoration. Design is structure. A strong visual system is an argument — a precise, considered point of view about who an organization is and why they deserve to be trusted.&rdquo;
                </p>
                <p className="text-secondary leading-relaxed max-w-xl">
                  I believe in editorial Swiss layout principles, restraint as a trust signal, and the strategic placement of visual elements. Every decision must solve a business problem and make B2B organizations feel coherent, credible, and human.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Photography Preview Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-16">
              <div className="flex flex-col gap-2">
                <span className="t-label">Secondary Discipline</span>
                <h2 className="t-h2 text-foreground">Photography</h2>
              </div>
              <Button href="/about#photography" variant="ghost" className="flex items-center gap-2 group text-secondary hover:text-foreground">
                <span>View gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ImageReveal
                src="/assets/img/photography/_DSC5456.jpg"
                alt="Architecture and space photography by Satyam"
                aspectRatio="aspect-[4/5]"
              />
              <ImageReveal
                src="/assets/img/photography/_DSC9707.JPG"
                alt="Abstract structures photography by Satyam"
                aspectRatio="aspect-[4/5]"
              />
              <ImageReveal
                src="/assets/img/photography/_DSC5061.JPG"
                alt="Documentary photography by Satyam"
                aspectRatio="aspect-[4/5]"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Journal Preview Section */}
        <section className="py-24 bg-card">
          <div className="container-custom">
            <div className="flex justify-between items-end mb-16">
              <div className="flex flex-col gap-2">
                <span className="t-label">Writings</span>
                <h2 className="t-h2 text-foreground">Journal Insights</h2>
              </div>
              <Button href="/journal" variant="ghost" className="flex items-center gap-2 group text-secondary hover:text-foreground">
                <span>All articles</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {journalPreviews.map((post) => (
                <Link
                  key={post.slug}
                  href={`/journal/${post.slug}`}
                  className="group flex flex-col border border-card-border p-8 bg-background hover:border-foreground/15 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-6">
                    <Badge variant="accent">{post.category}</Badge>
                    <span className="font-mono text-xs text-secondary">{post.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg md:text-xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-foreground uppercase tracking-widest mt-auto pt-4 border-t border-card-border/50">
                    <span>Read article</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-background border-t border-card-border">
          <div className="container-custom text-center flex flex-col items-center gap-8">
            <span className="t-label">Get in Touch</span>
            <h2 className="t-hero text-foreground select-none max-w-4xl text-center leading-none">
              Let&rsquo;s Build
              <br />
              Something Real.
            </h2>
            <p className="text-secondary max-w-md mx-auto text-sm leading-relaxed mb-4">
              Have a branding project or campaign that needs a solid strategic and visual system? Let&rsquo;s start a conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Start Project
              </Button>
              <Button href="mailto:satyampariyar275@gmail.com" variant="secondary" size="lg">
                Email Directly
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
