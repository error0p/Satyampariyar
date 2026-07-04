"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { Download, Printer } from "lucide-react";

export default function ResumePage() {
  const experiences = [
    {
      company: "Patil Group",
      role: "Creative Graphic Designer Lead",
      location: "Hyderabad, India",
      period: "Sept 2025 — Present",
      bullets: [
        "Lead design direction and quality control for a 5,000+ employee infrastructure conglomerate across railway, logistics, and hospitality sectors.",
        "Engineered the 'Meet The Team' employer branding campaign system, scaling organic LinkedIn engagement and impressions by 32.7M+.",
        "Architected repeatable social template systems and brand direction guidelines, reducing external agency design dependencies.",
        "Oversee the conceptualization and production of B2B brochures, executive presentations, and B2B communication materials.",
      ],
    },
    {
      company: "Book Transpo",
      role: "Graphic Designer",
      location: "Hyderabad, India",
      period: "Jul 2025 — Sept 2025",
      bullets: [
        "Crafted marketing collateral, social posts, and digital assets supporting corporate B2B logistics campaigns.",
        "Developed structured brand assets and typography systems aligned with client requirements.",
      ],
    },
    {
      company: "Raizada Infratech",
      role: "Graphic Designer Intern",
      location: "Siliguri, India",
      period: "Jan 2025 — Jun 2025",
      bullets: [
        "Assisted in maintaining and designing B2B proposals, corporate brochures, and site banners.",
        "Coordinated with marketing teams to maintain brand uniformity across regional infrastructure campaigns.",
      ],
    },
  ];

  const education = [
    {
      degree: "BSc in Multimedia, Animation & Graphics",
      school: "Inspiria Knowledge Campus",
      location: "Siliguri, India",
      year: "2025",
    },
  ];

  const skills = [
    { category: "Disciplines", items: ["Brand Identity & Systems", "Campaign Design", "Employer Branding", "B2B Communication", "Typography & Layout", "Motion Graphics", "Print & Editorial", "Photography Direction"] },
    { category: "Software & Tools", items: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe After Effects", "Adobe Premiere Pro", "Figma", "Canva"] },
    { category: "Core Strengths", items: ["Brand Consistency", "Creative Direction", "B2B Marketing Systems", "Visual Storytelling", "Campaign Quality Control"] },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Hide navigation on print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="flex-grow pt-32 pb-24 print:pt-0 print:pb-0">
        <div className="container-custom max-w-4xl">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-12 border-b border-card-border pb-6 print:hidden">
            <div className="flex flex-col gap-2">
              <span className="t-label">Curriculum Vitae</span>
              <h1 className="t-h2 text-foreground">Interactive Resume</h1>
            </div>
            <div className="flex gap-4">
              <Button onClick={handlePrint} variant="secondary" className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </Button>
            </div>
          </div>

          {/* Resume Sheet */}
          <article className="bg-background border border-card-border p-8 md:p-12 shadow-sm print:border-none print:p-0 print:shadow-none">
            {/* Header info */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-card-border pb-8 mb-8">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
                  Satyam Pariyar
                </h2>
                <p className="text-sm font-mono uppercase tracking-widest text-accent mt-2">
                  Brand &amp; Marketing Designer
                </p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-secondary font-mono md:text-right">
                <span>satyampariyar275@gmail.com</span>
                <span>+91 972089c268</span>
                <span>Hyderabad / Bangalore, India</span>
                <span className="print:hidden">
                  <a
                    href="https://linkedin.com/in/satyam-pariyar-77336b21a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent underline"
                  >
                    linkedin.com/in/satyam-pariyar
                  </a>
                </span>
              </div>
            </div>

            {/* Profile summary */}
            <section className="mb-10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-secondary border-b border-card-border/50 pb-2 mb-4">
                Profile Summary
              </h3>
              <p className="text-sm leading-relaxed text-secondary">
                Creative Designer with 3+ years of experience translating corporate B2B strategy into visual systems. Specializing in brand identity, high-reach employer branding campaigns, and structured marketing collateral. Proven track record leading visual direction for Patil Group, driving over 32.7M+ organic social campaign reach. Expert in Swiss editorial aesthetics, typography, and motion graphics.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-secondary border-b border-card-border/50 pb-2 mb-4">
                Professional Experience
              </h3>
              <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h4 className="font-display font-bold text-base text-foreground">
                        {exp.company}
                      </h4>
                      <span className="text-xs font-mono text-secondary">{exp.period}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-secondary italic mb-2">
                      <span>{exp.role}</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-xs leading-relaxed text-secondary">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-secondary border-b border-card-border/50 pb-2 mb-4">
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-baseline flex-wrap gap-2">
                    <div>
                      <h4 className="font-display font-semibold text-sm text-foreground">
                        {edu.degree}
                      </h4>
                      <span className="text-xs text-secondary">{edu.school}</span>
                    </div>
                    <div className="text-xs font-mono text-secondary md:text-right">
                      <span>{edu.year}</span>
                      <span className="block italic text-[10px]">{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills & Capabilities */}
            <section className="mb-0">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-secondary border-b border-card-border/50 pb-2 mb-4">
                Skills &amp; Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h4 className="font-display font-semibold text-xs text-foreground uppercase tracking-wider border-b border-card-border/30 pb-1">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {skill.items.map((item, j) => (
                        <span
                          key={j}
                          className="text-[10px] font-mono border border-card-border px-2 py-0.5 text-secondary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Hide footer on print */}
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
