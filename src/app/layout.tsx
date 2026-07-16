import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
  title: "Afiya Zannuba Jaleel | Full Stack Developer | React, Next.js, Shopify",
  description:
    "Full Stack Developer with 3 years of experience building scalable web applications using React, Next.js, Node.js, Shopify, and WordPress. Specialized in frontend performance, SEO, and modern UI/UX. Based in Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
