import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

import LenisProvider from "./LenisProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashi Shekhar / Portfolio",
  description: "Showcasing the portfolio of Shashi Shekhar",
  openGraph: {
    title: "Shashi Shekhar / Portfolio",
    description: "Frontend engineer & ML lead — showcasing projects and experience.",
    url: "https://shashishkr-dev-portfolio-pi.vercel.app/", 
    siteName: "Shashi Shekhar Portfolio",
    images: [
      {
        url: "https://shashishkr-dev-portfolio-pi.vercel.app/og.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio preview of Shashi Shekhar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sashi_tw", 
    images: ["https://shashishkr-dev-portfolio-pi.vercel.app/og.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider enableSystem={true} defaultTheme="system">
          <LenisProvider>
            {children}
            <SpeedInsights />
            <Analytics />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
