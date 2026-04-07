import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Projects", href: "/#projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Systems", href: "/#services" },
      { label: "Web Development", href: "/#services" },
      { label: "Showcase", href: "/showcase" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050a15]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold font-[family-name:var(--font-sora)] tracking-tight">
              <span className="text-accent">AP</span>
              <span className="text-text-primary ml-1.5">Devotion</span>
            </span>
            <p className="mt-5 text-text-secondary text-sm leading-relaxed max-w-sm">
              We build custom systems and websites that help Malaysian businesses
              run smarter. From internal tools to customer-facing platforms.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://wa.me/60139078719"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                WhatsApp
              </a>
              <span className="text-white/10">|</span>
              <a
                href="mailto:hello@apdevotion.com"
                className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                Email
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-text-primary mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} AP Devotion. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Kuala Terengganu, Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
