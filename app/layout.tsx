import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "prismjs/themes/prism-tomorrow.css";
import "./globals.css";

import LenisProvider from "./LenisProvider"; // 👈 import it

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashi Shekhar / Portfolio",
  description: "Showcasing the portfolio of Shashi Shekhar",
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
          <LenisProvider>   {/* 👈 wrap children here */}
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
