import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/ImageReveal";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  
  if (!study) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${study.title} — Satyam Pariyar`,
    description: study.introDesc,
    openGraph: {
      title: `${study.title} — Satyam Pariyar`,
      description: study.introDesc,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Project Hero Header */}
        <section className="relative w-full aspect-[16/6] min-h-[300px] bg-card border-b border-card-border overflow-hidden">
          {study.scrollImages && study.scrollImages.length > 0 ? (
            /* Meet The Team Scrolling Banner */
            <div className="absolute inset-0 flex items-center overflow-hidden bg-[#0d0305]">
              <div className="flex gap-4 w-max animate-marquee">
                {[...study.scrollImages, ...study.scrollImages].map((img, i) => (
                  <div key={i} className="relative w-36 h-48 md:w-48 md:h-64 border border-white/10 rounded-sm overflow-hidden">
                    <Image
                      src={img}
                      alt="Banner post snippet"
                      fill
                      sizes="200px"
                      className="object-cover"
                      priority={i < 5}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>
          ) : study.bgClassName ? (
            /* Custom Colored Background with Centered Image */
            <div className={cn("absolute inset-0 w-full h-full flex items-center justify-center", study.bgClassName)}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_65%)] pointer-events-none" />
              {study.imageSrc && (
                <div className="relative w-1/4 aspect-square max-w-[180px]">
                  <Image
                    src={study.imageSrc}
                    alt={study.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>
          ) : (
            /* Standard Static Full Bleed Cover */
            study.heroImage && (
              <Image
                src={study.heroImage}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
            )
          )}
        </section>

        {/* Intro Metadata Section */}
        <section className="py-20 bg-background border-b border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Heading */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <span className="t-label block">{study.category} · {study.year}</span>
                <h1 className="t-h1 text-foreground leading-none tracking-tight">
                  {study.title}
                </h1>
                <p className="t-lead max-w-2xl leading-relaxed">
                  {study.introDesc}
                </p>
              </div>

              {/* Right Column: Meta details */}
              <aside className="lg:col-span-4 grid grid-cols-2 gap-x-8 gap-y-6 bg-card border border-card-border p-8 rounded-none">
                <div>
                  <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5">
                    Client
                  </span>
                  <span className="text-sm font-semibold text-foreground">{study.client}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest mb-1.5">
                    Role
                  </span>
                  <span className="text-sm font-semibold text-foreground">{study.role}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest mb-2">
                    Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {study.deliverables.map((item) => (
                      <Badge key={item} variant="outline" className="bg-background">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Section 1: The Challenge */}
        <section className="py-20 bg-background border-b border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="t-label">01. The Challenge</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-8">
                <h2 className="t-h2 text-foreground">{study.challengeTitle}</h2>
                <div className="t-body space-y-6">
                  {study.challengeBody.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {study.challengeMetrics && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-card-border/50">
                    {study.challengeMetrics.map((metric, i) => (
                      <div key={i} className="bg-card border border-card-border p-6 rounded-none">
                        <span className="font-display font-bold text-3xl text-foreground block tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-xs text-secondary block mt-1.5 leading-snug">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Research */}
        <section className="py-20 bg-card border-b border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="t-label">02. Research &amp; Insight</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-6">
                <h2 className="t-h2 text-foreground">{study.researchTitle}</h2>
                <div className="t-body space-y-6">
                  {study.researchBody.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategy */}
        <section className="py-20 bg-background border-b border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="t-label">03. Brand Strategy</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-6">
                <h2 className="t-h2 text-foreground">{study.strategyTitle}</h2>
                <div className="t-body space-y-6">
                  {study.strategyBody.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Design Decisions */}
        <section className="py-20 bg-background border-b border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="t-label">04. Design Decisions</span>
              </div>
              <div className="lg:col-span-8">
                <h2 className="t-h2 text-foreground mb-12">{study.decisionsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {study.decisions.map((decision, i) => (
                    <div key={i} className="flex flex-col border border-card-border p-6 bg-card">
                      <span className="font-mono text-[10px] text-accent font-semibold tracking-wider block mb-4 uppercase">
                        Decision 0{i + 1}
                      </span>
                      <h3 className="font-display font-semibold text-base text-foreground mb-3 leading-snug">
                        {decision.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-secondary">
                        {decision.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Execution (Visual Gallery) */}
        <section className="py-20 bg-card border-b border-card-border">
          <div className="container-custom">
            <div className="flex flex-col gap-8 mb-12">
              <span className="t-label">05. Execution</span>
              <h2 className="t-h2 text-foreground">{study.executionTitle}</h2>
              <p className="t-body max-w-xl">{study.executionBody}</p>
            </div>

            {study.scrollImages && study.scrollImages.length > 0 && (
              /* Scrolling Strip Execution Details */
              <div className="relative w-full overflow-hidden py-10 bg-background border border-card-border rounded-none">
                <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
                  {[...study.scrollImages, ...study.scrollImages].map((img, i) => (
                    <div key={i} className="relative w-48 h-64 border border-card-border shadow-sm overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-102">
                      <Image
                        src={img}
                        alt={`Campaign asset ${i}`}
                        fill
                        sizes="250px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {study.images && study.images.length > 0 && (
              /* Standard Gallery grid (e.g. Arujiva pages) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.images.map((img, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <ImageReveal
                      src={img}
                      alt={`${study.title} asset preview ${i + 1}`}
                      aspectRatio="aspect-[4/3]"
                    />
                    <span className="font-mono text-[9px] text-secondary uppercase tracking-widest mt-1">
                      Asset Page 0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {study.sliderImages && study.sliderImages.length > 0 && (
              /* Slider / Carousel placeholders */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {study.sliderImages.map((img, i) => (
                  <div key={i} className="border border-card-border rounded-none overflow-hidden bg-background">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={img}
                        alt={`Slide ${i + 1}`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Business Results */}
        <section className="py-20 bg-background border-b border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="t-label">06. Business Results</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-8">
                <h2 className="t-h2 text-foreground">{study.resultsTitle}</h2>
                <div className="t-body space-y-6">
                  {study.resultsBody.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {study.resultsMetrics && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {study.resultsMetrics.map((metric, i) => (
                      <div key={i} className="bg-card border border-card-border p-6">
                        <span className="font-display font-bold text-3xl text-foreground block tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-xs text-secondary block mt-1.5 leading-snug">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reflection */}
        <section className="py-20 bg-card border-b border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="t-label">07. Reflection</span>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-6">
                <h2 className="t-h2 text-foreground">{study.reflectionTitle}</h2>
                <div className="t-body space-y-6">
                  {study.reflectionBody.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Navigation Footer */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="flex items-center justify-between border-t border-card-border pt-12">
              <Link
                href={`/case-study/${study.prevSlug}`}
                className="flex flex-col gap-1 group text-left max-w-[45%]"
              >
                <span className="text-[10px] font-mono text-secondary uppercase tracking-widest flex items-center gap-1.5">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Previous</span>
                </span>
                <span className="font-display font-semibold text-sm md:text-base text-foreground group-hover:text-accent transition-colors">
                  {study.prevTitle}
                </span>
              </Link>

              <Link
                href={`/case-study/${study.nextSlug}`}
                className="flex flex-col gap-1 group text-right max-w-[45%] items-end"
              >
                <span className="text-[10px] font-mono text-secondary uppercase tracking-widest flex items-center gap-1.5">
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="font-display font-semibold text-sm md:text-base text-foreground group-hover:text-accent transition-colors">
                  {study.nextTitle}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
