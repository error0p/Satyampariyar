"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { journalPosts } from "@/data/journal";
import { ArrowUpRight } from "lucide-react";

export default function JournalPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { label: "All Insights", value: "all" },
    { label: "Branding", value: "Branding" },
    { label: "Design Systems", value: "Design" },
    { label: "Photography", value: "Photography" },
    { label: "B2B Marketing", value: "Marketing" },
  ];

  const postsArray = Object.values(journalPosts);

  const filteredPosts =
    activeFilter === "all"
      ? postsArray
      : postsArray.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Page Hero */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <span className="t-label block mb-4">Writings &amp; Insights</span>
            <h1 className="t-hero text-foreground mb-6 select-none leading-none">
              Journal
            </h1>
            <p className="t-lead max-w-xl">
              Strategic thoughts on design systems, typography grids, corporate campaigns, and branding restraint in B2B markets.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-y border-card-border bg-card">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3">
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

        {/* Article Grid */}
        <section className="py-20 bg-background min-h-[50vh]">
          <div className="container-custom max-w-5xl">
            <div className="flex flex-col gap-12">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group border border-card-border bg-card p-8 md:p-12 hover:border-foreground/15 transition-all duration-300 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 items-start"
                  >
                    {/* Meta info */}
                    <div className="md:col-span-3 flex flex-col gap-2">
                      <Badge variant="accent" className="w-fit">
                        {post.category}
                      </Badge>
                      <span className="font-mono text-xs text-secondary mt-1">{post.date}</span>
                      <span className="font-mono text-[10px] text-secondary/70 uppercase tracking-wider">{post.readTime}</span>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-9 flex flex-col gap-4">
                      <h2 className="font-display font-semibold text-xl md:text-2xl text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                        <Link href={`/journal/${post.slug}`} className="cursor-pointer">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-sm leading-relaxed text-secondary mb-4">
                        {post.description}
                      </p>
                      <Link
                        href={`/journal/${post.slug}`}
                        className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5 hover:text-accent w-fit mt-auto border-b border-foreground/20 pb-0.5"
                      >
                        <span>Read Article</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-20 border border-dashed border-card-border text-secondary">
                  <span>No articles published under this category yet.</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
