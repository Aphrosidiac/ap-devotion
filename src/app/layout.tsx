import type { Metadata } from "next";
import {
  Inter,
  Sora,
  Space_Grotesk,
  Manrope,
  Plus_Jakarta_Sans,
  Outfit,
  Poppins,
} from "next/font/google";
import "./globals.css";
import AmbientOrbs from "@/components/AmbientOrbs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AP Devotion — Custom Systems & Web Development",
  description:
    "We build custom systems and websites for Malaysian SMEs. From ERPs to landing pages, we craft digital solutions that run your business.",
  keywords: [
    "web development Malaysia",
    "custom systems",
    "ERP Malaysia",
    "website development",
    "AP Devotion",
  ],
  openGraph: {
    title: "AP Devotion — Custom Systems & Web Development",
    description:
      "We build custom systems and websites for Malaysian SMEs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} ${manrope.variable} ${plusJakarta.variable} ${outfit.variable} ${poppins.variable}`}
    >
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased relative`}
      >
        <AmbientOrbs />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
