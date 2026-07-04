"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Bangalore/Kolkata timezone
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setLocalTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-card-border bg-card py-16 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
          {/* Left Column: Last Updated */}
          <div className="flex flex-col gap-2">
            <span className="t-label text-xs">Last Updated</span>
            <span className="text-sm font-medium">July 2026</span>
          </div>

          {/* Center Column: Mascot, Note, Socials */}
          <div className="flex flex-col items-center text-center">
            {/* Mascot */}
            <div className="w-32 h-32 mb-6 group cursor-pointer">
              <svg
                className="w-full h-full text-foreground transition-transform duration-500 hover:rotate-6"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Wavy body */}
                <path
                  className="fill-background stroke-foreground stroke-[3.5] stroke-round join-round"
                  d="M40 160 C40 80, 60 40, 100 40 C140 40, 160 80, 160 160 C160 170, 150 180, 140 180 C130 180, 120 170, 110 175 C100 180, 90 170, 80 175 C70 180, 60 170, 40 160 Z"
                />
                {/* Glasses */}
                <circle cx="80" cy="90" r="16" className="stroke-foreground stroke-[3.5] fill-transparent" />
                <circle cx="120" cy="90" r="16" className="stroke-foreground stroke-[3.5] fill-transparent" />
                <path d="M96 90 H104" className="stroke-foreground stroke-[3.5]" />
                <path d="M64 90 H54" className="stroke-foreground stroke-[3.5]" />
                <path d="M136 90 H146" className="stroke-foreground stroke-[3.5]" />
                {/* Eyes */}
                <circle cx="80" cy="90" r="4.5" className="fill-foreground" />
                <circle cx="120" cy="90" r="4.5" className="fill-foreground" />
                {/* Cheeks */}
                <circle cx="58" cy="102" r="5" fill="#ff6b8b" className="opacity-60" />
                <circle cx="142" cy="102" r="5" fill="#ff6b8b" className="opacity-60" />
                {/* Mouth */}
                <path d="M92 108 Q100 115 108 108" className="stroke-foreground stroke-3 stroke-round" />
                <path d="M95 110 C95 119, 105 119, 105 110 Z" fill="#ff6b8b" className="stroke-foreground stroke-[2.5]" />
                {/* Hand waving */}
                <g className="origin-[148px_135px] group-hover:animate-bounce">
                  <path d="M148 135 Q160 128 165 118" className="stroke-foreground stroke-[3.5] stroke-round" />
                  <circle cx="165" cy="112" r="7" className="fill-background stroke-foreground stroke-[3.5]" />
                  <path d="M162 106 V93" className="stroke-foreground stroke-[3.5] stroke-round" />
                  <path d="M168 106 V90" className="stroke-foreground stroke-[3.5] stroke-round" />
                </g>
              </svg>
            </div>

            {/* Note Card */}
            <div className="border border-card-border bg-background p-6 rounded-sm max-w-sm mb-6 shadow-sm">
              <span className="block text-[10px] font-mono tracking-widest text-secondary uppercase mb-2">
                A note from Satyam
              </span>
              <p className="text-sm leading-relaxed text-foreground font-medium mb-1">
                Hi, thank you for being here &lt;3
              </p>
              <p className="text-sm leading-relaxed text-secondary mb-4">
                Design, to me, is care and intentionality. If something here stayed with you, say hello.
              </p>
              <a
                href="mailto:satyampariyar275@gmail.com"
                className="text-sm font-semibold hover:text-accent transition-colors duration-200"
              >
                satyampariyar275@gmail.com
              </a>
            </div>

            {/* Social tiles */}
            <div className="flex gap-4">
              <a
                href="mailto:satyampariyar275@gmail.com"
                className="p-3 border border-card-border rounded-sm hover:bg-foreground hover:text-background transition-colors text-foreground"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/satyam-pariyar-77336b21a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-card-border rounded-sm hover:bg-foreground hover:text-background transition-colors text-foreground"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/404_error.op/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-card-border rounded-sm hover:bg-foreground hover:text-background transition-colors text-foreground"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.behance.net/mrscribe007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-card-border rounded-sm hover:bg-foreground hover:text-background transition-colors text-foreground"
                aria-label="Behance"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.2 5c1.4 0 2.5.3 3.3 1 .7.6 1 1.5 1 2.6 0 1.2-.5 2-1.5 2.5 1.2.4 1.8 1.4 1.8 2.8 0 1.3-.4 2.3-1.2 3-.9.7-2.1 1.1-3.7 1.1H3V5h5.2zm-.2 5.2c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.5-1.2s-.2-.9-.5-1.1c-.3-.3-.9-.4-1.6-.4H5.3v3.1H8zm.4 5.9c.7 0 1.3-.1 1.6-.4.3-.3.5-.8.5-1.4 0-.6-.2-1.1-.5-1.4-.3-.3-.9-.4-1.7-.4H5.3v3.6h3.1zm10.7-3.9h-4.9c0 .7.2 1.3.6 1.6.4.4.9.5 1.5.5.8 0 1.4-.3 1.8-1l1.1.7c-.7 1.1-1.7 1.7-3 1.7-1.3 0-2.3-.4-3-1.2-.7-.8-1-1.9-1-3.3 0-1.4.3-2.5 1-3.3s1.7-1.2 2.9-1.2c1.2 0 2.2.4 2.8 1.1.7.7.9 1.8.9 3.2l-.7.2zm-.7-1c0-.7-.2-1.2-.5-1.5-.3-.3-.8-.5-1.3-.5s-.9.2-1.2.5c-.3.3-.5.8-.5 1.5h3.5zm-3.6-5.8h3v.8h-3v-.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Currently Time */}
          <div className="flex flex-col gap-2 md:items-end md:text-right">
            <span className="t-label text-xs">Currently</span>
            <span className="text-sm font-medium">☀️ Bangalore, IN</span>
            {localTime && (
              <span className="font-mono text-xs text-secondary mt-1 tracking-wider uppercase">
                {localTime}
              </span>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs text-secondary font-mono tracking-tight">
            © 2026 Satyam Pariyar · 17.3850° N, 78.4867° E
          </span>

          <div className="flex items-center gap-3 bg-background border border-card-border px-4 py-2 rounded-sm">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-card-border">
              <Image
                src="/assets/img/profile.jpg"
                alt="Satyam Pariyar"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold leading-none">Satyam Pariyar</span>
              <span className="text-[10px] text-secondary mt-0.5">Available for work</span>
            </div>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
