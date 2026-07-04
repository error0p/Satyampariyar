import { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { journalPosts } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://satyampariyar.com"; // portfolio domain

  const staticUrls = ["", "/work", "/about", "/journal", "/resume", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? (1.0 as const) : (0.8 as const),
  }));

  const caseStudyUrls = Object.keys(caseStudies).map((slug) => ({
    url: `${baseUrl}/case-study/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7 as const,
  }));

  const journalUrls = Object.keys(journalPosts).map((slug) => ({
    url: `${baseUrl}/journal/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.6 as const,
  }));

  return [...staticUrls, ...caseStudyUrls, ...journalUrls];
}
