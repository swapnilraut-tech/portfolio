import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swapnil Raut | Full Stack & Mobile Engineer",
  description:
    "Full Stack & Frontend Engineer specializing in React.js, Next.js 16, React Native (Expo), TypeScript, Node.js & Frappe Framework. Open to full-time and remote opportunities.",
  keywords: [
    "Swapnil Raut",
    "Full Stack Developer",
    "Next.js Developer",
    "React Native Expo",
    "TypeScript",
    "Node.js",
    "Frappe Framework",
    "Solapur Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Swapnil Raut" }],
  creator: "Swapnil Raut",
  openGraph: {
    title: "Swapnil Raut | Full Stack Developer",
    description:
      "Building high-performance web apps and cross-platform mobile solutions with React, Next.js, and Node.js.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
