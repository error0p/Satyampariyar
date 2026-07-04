"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Collaboration",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="container-custom">
          {/* Page Hero */}
          <section className="py-16">
            <span className="t-label block mb-4">Get in Touch</span>
            <h1 className="t-hero text-foreground mb-6 leading-none select-none">
              Let&rsquo;s connect.
            </h1>
            <p className="t-lead max-w-xl">
              I am open to discuss brand identity systems, corporate campaigns, full-time leadership opportunities, and strategic creative commissions.
            </p>
          </section>

          {/* Contact Layout Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-green-500/20 bg-green-500/5 p-8 text-center flex flex-col items-center gap-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500 animate-bounce" />
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-secondary max-w-md">
                    Thank you for reaching out. Satyam will get back to you within 24 hours at the email address provided.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", subject: "Collaboration", message: "" });
                    }}
                    variant="secondary"
                    size="sm"
                    className="mt-2"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="t-xs text-secondary">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="bg-card border border-card-border p-4 text-sm text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="t-xs text-secondary">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="bg-card border border-card-border p-4 text-sm text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="t-xs text-secondary">
                      Project Type
                    </label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="bg-card border border-card-border p-4 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Collaboration">Full-time Recruitment</option>
                      <option value="Branding Project">Brand Identity &amp; Systems</option>
                      <option value="Campaign Project">Employer Branding Campaign</option>
                      <option value="Other">Consultation / Other</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="t-xs text-secondary">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, timing, and details..."
                      className="bg-card border border-card-border p-4 text-sm text-foreground placeholder:text-secondary/40 focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Message
                  </Button>
                </form>
              )}
            </div>

            {/* Right: Info & Contact details */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-10">
              {/* Direct email card */}
              <div className="flex flex-col gap-3">
                <h3 className="t-xs text-secondary">Direct Channel</h3>
                <a
                  href="mailto:satyampariyar275@gmail.com"
                  className="font-display font-semibold text-lg md:text-xl text-foreground hover:text-accent flex items-center gap-2 group transition-colors"
                >
                  <span>satyampariyar275@gmail.com</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Location details */}
              <div className="flex flex-col gap-3">
                <h3 className="t-xs text-secondary">Coordinates</h3>
                <span className="text-sm font-medium text-foreground">
                  Hyderabad / Bangalore, India
                </span>
                <span className="text-xs text-secondary font-mono">
                  17.3850° N, 78.4867° E
                </span>
              </div>

              {/* Social List */}
              <div className="flex flex-col gap-4 border-t border-card-border pt-8">
                <h3 className="t-xs text-secondary">Social Networks</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://linkedin.com/in/satyam-pariyar-77336b21a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center text-sm text-secondary hover:text-foreground pb-2 border-b border-card-border/50 group"
                  >
                    <span className="font-semibold">LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/404_error.op/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center text-sm text-secondary hover:text-foreground pb-2 border-b border-card-border/50 group"
                  >
                    <span className="font-semibold">Instagram</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://www.behance.net/mrscribe007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center text-sm text-secondary hover:text-foreground pb-2 border-b border-card-border/50 group"
                  >
                    <span className="font-semibold">Behance</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
