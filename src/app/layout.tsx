import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michele | Full Stack Developer | Discord Bot & Plugin Expert",
  description:
    "Portfolio of Michele, a Full Stack Developer specializing in modern websites, Discord bots, plugins, and Linux system administration. Explore my projects and skills.",
  keywords: [
    "full stack developer",
    "web developer portfolio",
    "discord bot developer",
    "plugin developer",
    "custom bot development",
    "system administration",
    "frontend developer",
    "backend developer",
    "modern web development",
    "michele developer",
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
        height: 1200,
        alt: "Michele's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: "#0F192C",
  width: "device-width",
  colorScheme: "dark",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Michele",
              url: "https://michelemanna.me",
              jobTitle: "Full Stack Developer",
              knowsAbout: [
                "Web Development",
                "Discord Bot Development",
                "Plugin Development",
                "Linux System Administration",
                "Frontend Development",
                "Backend Development",
              ],
              sameAs: [
                "https://github.com/Michelo11",
                "https://discord.com/users/573539095452844052",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
