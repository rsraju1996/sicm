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
  title: "SICM — Sikkim Integrated Case Management System",
  description:
    "Sikkim Integrated Case Management System (SICM), High Court of Sikkim: a unified digital platform for registering, managing, and monitoring cases—built for accountability, speed, and citizen trust.",
    openGraph: {
    title: "Sikkim Integrated Case Management System (SICM)",
    description:
      "Unified case management under the High Court of Sikkim—transparent workflows, secure access, and operational clarity.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
