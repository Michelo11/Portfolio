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
  title: "Michele's Portfolio",
  description: "My personal porfolio website showcasing my skills.",
  keywords: [
    "portfolio",
    "developer",
    "fullstack",
    "bots",
    "plugins",
    "web development",
    "system administration",
  ],
  authors: [{ name: "Michele" }],
  creator: "Michele",
  openGraph: {
    title: "Michele's Portfolio",
    description: "My personal portfolio website showcasing my skills.",
    url: "https://michelemanna.me",
    siteName: "Michele's Portfolio",
    images: [
      {
        url: "https://michelemanna.me/logo.png",
        width: 1200,
        height: 630,
        alt: "Michele's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
