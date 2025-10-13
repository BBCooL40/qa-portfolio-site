import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Anton • QA / Automation",
  description: "QA портфолио и CV – API/UI автоматизация, CI/CD, репорти.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100`}>
        {/* Top navigation */}
        <header className="border-b border-slate-800">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold">
              Anton QA
            </Link>
            <div className="flex gap-3">
              <Link href="/" className="rounded-lg px-3 py-2 hover:bg-slate-900">
                Home
              </Link>
              <Link href="/projects" className="rounded-lg px-3 py-2 hover:bg-slate-900">
                Projects
              </Link>
              <Link href="/contact" className="rounded-lg px-3 py-2 hover:bg-slate-900">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
