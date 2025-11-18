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
    <html lang="bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 relative overflow-x-hidden`}
      >
        {/* --- Заден „grain“ слой --- */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-30 [background-image:radial-gradient(transparent_1px,rgba(255,255,255,0.04)_1px)] [background-size:24px_24px]"
        />

        {/* Top navigation */}
        <header className="border-b border-slate-800 backdrop-blur-sm bg-slate-950/70 sticky top-0 z-10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold text-emerald-400 hover:text-emerald-300">
              Anton QA
            </Link>
            <div className="flex gap-3">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 hover:bg-slate-900 hover:text-emerald-300 transition"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="rounded-lg px-3 py-2 hover:bg-slate-900 hover:text-emerald-300 transition"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-2 hover:bg-slate-900 hover:text-emerald-300 transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* --- Fade-in за основното съдържание --- */}
        <main className="relative z-10 animate-fade-in">{children}</main>

        {/* Footer с човешки щрих */}
        <footer className="border-t border-slate-800 mt-16 py-8 text-center text-slate-500 text-sm">
          <p>Създаден с ☕ и много дебъгване • Anton Tzonev © {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
