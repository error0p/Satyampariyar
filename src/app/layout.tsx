import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satyam Pariyar — Brand & Marketing Designer",
  description: "Senior Brand & Marketing Designer based in Hyderabad. Specializing in brand identity, campaign design, and visual systems for B2B organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Satyam Pariyar",
    "url": "https://satyampariyar.com",
    "image": "https://satyampariyar.com/assets/img/profile.jpg",
    "jobTitle": "Brand & Marketing Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Patil Group",
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Book Transpo",
      },
      {
        "@type": "Organization",
        "name": "Raizada Infratech",
      }
    ],
    "sameAs": [
      "https://linkedin.com/in/satyam-pariyar-77336b21a",
      "https://www.instagram.com/404_error.op/",
      "https://www.behance.net/mrscribe007"
    ],
    "knowsAbout": [
      "Brand Identity",
      "Campaign Design",
      "Visual Systems",
      "Employer Branding",
      "B2B Marketing"
    ],
    "location": {
      "@type": "Place",
      "name": "Hyderabad, India"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-Flash Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('sp-theme') || 'dark';
                document.documentElement.setAttribute('data-theme', savedTheme);
              })();
            `,
          }}
        />

        {/* Structured Schema Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Google Analytics 4 (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GA4MEASURE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GA4MEASURE', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","clarityid123");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}


