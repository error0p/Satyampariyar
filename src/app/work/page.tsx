"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { label: "All", value: "all" },
    { label: "Branding", value: "branding" },
    { label: "Campaigns", value: "campaign" },
    { label: "Print & B2B", value: "print" },
  ];

  const projects = [
    {
      slug: "skyverrra",
      title: "Skyverrra Ventures — Branding & Logo",
      category: "branding",
      year: "2024",
      index: "01",
      imageSrc: "/assets/img/skyverrra-logo.jpg",
      bgClassName: "bg-gradient-to-br from-[#0c0e1a] via-[#101429] to-[#0c0d16]",
    },
    {
      slug: "himalayan-healing-herbs",
      title: "Himalayan Healing Herbs — Brand Identity",
      category: "branding",
      year: "2024",
      index: "02",
      bgClassName: "bg-gradient-to-br from-[#071a08] via-[#0e3a10] to-[#0a2e0b]",
    },
    {
      slug: "meet-the-team",
      title: "Meet The Team — Patil Group",
      category: "campaign",
      year: "2025–26",
      index: "03",
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
      category: "branding",
      year: "2024",
      index: "04",
      imageSrc: "/assets/img/arujiva-12.png",
      bgClassName: "bg-white",
    },
    {
      slug: "precast-brochure",
      title: "Precast Product Brochure — Patil Group",
      category: "print",
      year: "2025",
      index: "05",
      bgClassName: "bg-gradient-to-br from-[#111210] via-[#252723] to-[#0e0f0d]",
    },
    {
      slug: "digital-content",
      title: "Digital Content Ecosystem — Patil Group",
      category: "campaign",
      year: "2025–26",
      index: "06",
      bgClassName: "bg-gradient-to-br from-[#1f1200] via-[#4a2d00] to-[#2e1900]",
    },
    {
      slug: "mojo-pizza",
      title: "Mojo Pizza — Social Campaign",
      category: "campaign",
      year: "2026",
      index: "07",
      bgClassName: "bg-gradient-to-br from-[#2b0c03] via-[#611b03] to-[#451201]",
    },
  ];

  const clients = [
    { name: "Patil Group", logo: "/assets/img/clients/patil-group.jpg" },
    { name: "Book Transpo", logo: "/assets/img/clients/book-transpo.jpg" },
    { name: "Raizada Infratech", logo: "/assets/img/clients/raizada-infratech.png" },
    { name: "Amarbhoomi", logo: "/assets/img/clients/amarbhoomi.png" },
    { name: "Olive Tree Cafe", logo: "/assets/img/clients/olive-tree.png" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Page Hero */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="t-label block mb-4"
            >
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="t-hero text-foreground mb-6"
            >
              Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="t-lead max-w-xl"
            >
              Brand identity, campaign design, and visual systems — built for B2B organizations that mean business.
            </motion.p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-y border-card-border bg-card">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 md:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`text-xs font-mono font-semibold uppercase tracking-widest px-4 py-2 border transition-all duration-300 cursor-pointer ${
                    activeFilter === cat.value
                      ? "bg-foreground text-background border-foreground"
                      : "border-card-border hover:border-foreground/30 text-secondary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-20 bg-background min-h-[60vh]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    slug={project.slug}
                    title={project.title}
                    category={project.category === "branding" ? "Brand Identity" : project.category === "campaign" ? "Employer Branding" : "Print · B2B"}
                    year={project.year}
                    index={project.index}
                    imageSrc={project.imageSrc}
                    scrollImages={project.scrollImages}
                    bgClassName={project.bgClassName}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Clients Section */}
        <section className="py-24 bg-card">
          <div className="container-custom">
            <span className="t-label block mb-12">Who I&rsquo;ve worked with</span>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {clients.map((client, i) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative aspect-[3/2] border border-card-border p-6 flex items-center justify-center bg-background group"
                >
                  <div className="relative w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      fill
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
