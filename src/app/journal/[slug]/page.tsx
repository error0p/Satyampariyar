import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { journalPosts } from "@/data/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(journalPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts[slug];

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} — Journal Insights`,
    description: post.description,
    openGraph: {
      title: `${post.title} — Journal Insights`,
      description: post.description,
      type: "article",
    },
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = journalPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <article className="container-custom max-w-3xl">
          {/* Article Header */}
          <header className="flex flex-col gap-6 mb-12 border-b border-card-border pb-8">
            <div className="flex items-center gap-4">
              <Badge variant="accent">{post.category}</Badge>
              <span className="font-mono text-xs text-secondary">{post.date}</span>
              <span className="font-mono text-xs text-secondary/60">·</span>
              <span className="font-mono text-xs text-secondary/70">{post.readTime}</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg leading-relaxed text-secondary italic">
              {post.description}
            </p>
          </header>

          {/* Article Body */}
          <div
            className="prose prose-neutral dark:prose-invert max-w-none text-secondary leading-relaxed space-y-6 text-base"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Article Navigation */}
          <footer className="border-t border-card-border pt-12 mt-16">
            <div className="flex items-center justify-between">
              {post.prevSlug ? (
                <Link
                  href={`/journal/${post.prevSlug}`}
                  className="flex flex-col gap-1 group text-left max-w-[45%]"
                >
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-widest flex items-center gap-1.5">
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                    <span>Previous</span>
                  </span>
                  <span className="font-display font-semibold text-xs md:text-sm text-foreground group-hover:text-accent transition-colors">
                    {post.prevTitle}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {post.nextSlug ? (
                <Link
                  href={`/journal/${post.nextSlug}`}
                  className="flex flex-col gap-1 group text-right max-w-[45%] items-end"
                >
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-widest flex items-center gap-1.5">
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="font-display font-semibold text-xs md:text-sm text-foreground group-hover:text-accent transition-colors">
                    {post.nextTitle}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </>
  );
}
