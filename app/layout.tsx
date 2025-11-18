import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anton | QA Automation Engineer",
  description: "QA Automation portfolio of Anton – projects, CV, and contact information.",
  metadataBase: new URL("https://anton-qa-portfolio.vercel.app"),
  openGraph: {
    title: "Anton | QA Automation Engineer",
    description: "Modern QA Automation portfolio site – projects, CV, contact.",
    url: "https://anton-qa-portfolio.vercel.app",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
