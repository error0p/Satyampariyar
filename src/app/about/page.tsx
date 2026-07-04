"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageReveal from "@/components/ImageReveal";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  const timeline = [
    {
      company: "Patil Group",
      role: "Creative Graphic Designer Lead",
      location: "Hyderabad",
      years: "Sept 2025 — Present",
      description: "Leading visual and branding directions for a 5,000+ employee infrastructure and manufacturing conglomerate. Overseeing the creation of high-impact marketing collateral, internal branding templates, and employer branding campaign systems.",
    },
    {
      company: "Book Transpo",
      role: "Graphic Designer",
      location: "Hyderabad",
      years: "Jul 2025 — Sept 2025",
      description: "Designed marketing assets and communication design guidelines for logistics and B2B transportation services. Translated complex operational logistics details into clear digital collateral.",
    },
    {
      company: "Raizada Infratech",
      role: "Graphic Designer Intern",
      location: "Siliguri",
      years: "Jan 2025 — Jun 2025",
      description: "Supported design operations for civil engineering and construction communication campaigns. Focused on B2B print materials, proposals, and identity consistency.",
    },
    {
      company: "Freelance",
      role: "Independent Graphic Designer",
      location: "Remote",
      years: "2022 — 2024",
      description: "Crafted brand identities, logos, guidelines, and social campaigns for various early-stage ventures, local businesses, and B2C brands.",
    },
  ];

  const capabilities = {
    disciplines: [
      "Brand Identity & Systems",
      "Campaign Design",
      "Employer Branding",
      "B2B Communication",
      "Typography & Layout",
      "Motion Graphics",
      "Print & Editorial",
      "Photography Direction",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "Figma",
      "Canva",
    ],
    strengths: [
      "Brand Consistency",
      "Creative Direction",
      "Cross-functional Collaboration",
      "B2B Marketing",
      "Visual Storytelling",
      "Campaign Leadership",
      "Quality Control",
    ],
  };

  const photography = [
    { src: "/assets/img/photography/_DSC5456.jpg", alt: "Architecture composition" },
    { src: "/assets/img/photography/_DSC9707.JPG", alt: "Structure abstract" },
    { src: "/assets/img/photography/_DSC5061.JPG", alt: "Minimalist street composition" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Portrait */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[3/4] bg-card border border-card-border overflow-hidden"
                >
                  <Image
                    src="/assets/img/profile.jpg"
                    alt="Satyam Pariyar portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>

              {/* Bio details */}
              <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-6">
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="t-label block mb-4"
                  >
                    About me
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="t-h1 text-foreground"
                  >
                    Brand.
                    <br />
                    Campaign.
                    <br />
                    System.
                  </motion.h1>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <p className="t-lead">
                    I&rsquo;m Satyam — a brand and graphic designer based in Hyderabad, currently leading creative at Patil Group, one of India&rsquo;s established infrastructure and manufacturing conglomerates.
                  </p>
                  <p className="t-body">
                    My work spans brand identity systems, employer branding campaigns, B2B communication design, and motion graphics. The common thread: translating large, complex organizations into visual systems that feel coherent, credible, and human.
                  </p>
                  <p className="t-body">
                    Before Patil Group, I designed at Book Transpo and interned at Raizada Infratech — and before that, three years of independent work for clients across logistics, technology, and professional services. I hold a BSc in Multimedia, Animation &amp; Graphics from Inspiria Knowledge Campus, Siliguri.
                  </p>
                </motion.div>

                {/* Metadata Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-6 pt-6 border-t border-card-border"
                >
                  <div>
                    <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest mb-1">
                      Based in
                    </span>
                    <span className="text-sm font-semibold text-foreground">Hyderabad / Bangalore</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest mb-1">
                      Available for
                    </span>
                    <span className="text-sm font-semibold text-foreground">Full-time &amp; Freelance</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest mb-1">
                      Experience
                    </span>
                    <span className="text-sm font-semibold text-foreground">3+ Years</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest mb-1">
                      Education
                    </span>
                    <span className="text-sm font-semibold text-foreground">BSc Multimedia, Animation &amp; Graphics</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Timeline Section */}
        <section className="py-24 bg-card">
          <div className="container-custom">
            <span className="t-label block mb-12">Career Timeline</span>
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-12 border-b border-card-border last:border-b-0 last:pb-0"
                >
                  <div className="md:col-span-3">
                    <span className="font-display font-semibold text-lg text-foreground block">
                      {item.company}
                    </span>
                    <span className="font-mono text-xs text-secondary block mt-1">
                      {item.years}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <span className="text-sm font-semibold text-foreground block">
                      {item.role}
                    </span>
                    <span className="text-xs text-secondary block mt-0.5">
                      {item.location}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-sm leading-relaxed text-secondary">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Capabilities Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <span className="t-label block mb-12">Capabilities</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Disciplines */}
              <div className="flex flex-col gap-6">
                <h3 className="font-display font-semibold text-base text-foreground pb-3 border-b border-card-border">
                  Disciplines
                </h3>
                <ul className="flex flex-col gap-3">
                  {capabilities.disciplines.map((item) => (
                    <li key={item} className="text-sm text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent/40 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="flex flex-col gap-6">
                <h3 className="font-display font-semibold text-base text-foreground pb-3 border-b border-card-border">
                  Tools
                </h3>
                <ul className="flex flex-col gap-3">
                  {capabilities.tools.map((item) => (
                    <li key={item} className="text-sm text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent/40 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strengths */}
              <div className="flex flex-col gap-6">
                <h3 className="font-display font-semibold text-base text-foreground pb-3 border-b border-card-border">
                  Strengths
                </h3>
                <ul className="flex flex-col gap-3">
                  {capabilities.strengths.map((item) => (
                    <li key={item} className="text-sm text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent/40 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Photography Showcase */}
        <section id="photography" className="py-24 bg-background">
          <div className="container-custom">
            <span className="t-label block mb-6">Secondary Strength</span>
            <h2 className="t-h2 text-foreground mb-16 max-w-xl">
              Creative discipline through photography.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {photography.map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <ImageReveal
                    src={item.src}
                    alt={item.alt}
                    aspectRatio="aspect-[3/4]"
                  />
                  <span className="font-mono text-[10px] text-secondary uppercase tracking-widest mt-1">
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
