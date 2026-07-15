import type { Metadata } from "next";
import { Zain, Nunito } from "next/font/google";
import "./globals.css";

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "India Web Designs | Conversion-First Digital Studio",
  description:
    "Custom websites, high-performance web & mobile apps, and AI-powered automation for rapid business growth.",
  keywords: [
    "web design india",
    "app development",
    "AI automation",
    "custom software",
    "digital marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zain.variable} ${nunito.variable} ${nunito.className} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        {children}
      </body>
    </html>
  );
}
