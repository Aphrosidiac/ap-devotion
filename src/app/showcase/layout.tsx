import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase — AP Devotion",
  description:
    "Experience what we can build. An interactive showcase of our web development capabilities.",
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
