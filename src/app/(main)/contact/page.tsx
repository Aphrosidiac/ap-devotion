"use client";

import { motion } from "motion/react";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+60 13-907 8719",
    href: "https://wa.me/60139078719",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@apdevotion.com",
    href: "mailto:hello@apdevotion.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kuala Terengganu, Malaysia",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission (API route or external service)
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-accent glass-accent mb-4">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Together</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Have a project in mind? Tell us about it and we&apos;ll get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="glass rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-text-primary hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-primary">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-5">
              <p className="text-sm text-text-secondary leading-relaxed">
                Prefer a quick chat? WhatsApp is the fastest way to reach us.
                We typically respond within a few hours during business days.
              </p>
              <a
                href="https://wa.me/60139078719"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-sm transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-text-secondary text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-glass border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-glass border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-glass border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                      What do you need?
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-glass border border-border text-sm text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="system">Custom System / ERP</option>
                      <option value="website">Website Development</option>
                      <option value="webapp">Web Application</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                      Tell us more
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-glass border border-border text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      placeholder="Describe your project — what problem are you trying to solve?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-dark transition-colors glow"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
