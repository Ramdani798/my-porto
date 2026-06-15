// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Engine SEO & Metadata Global
export const metadata: Metadata = {
  // INJEKSI BARIS INI: Ganti URL dengan domain asli Anda nanti saat rilis
  metadataBase: new URL("https://geminix-portfolio.com"), 
  
  title: "Muhamad Ramdani",
  description: "Mahakarya digital yang dibangun dengan presisi matematis murni, performa 100%, dan arsitektur tanpa batas.",
  keywords: ["Portfolio", "Next.js", "TypeScript", "Frontend Developer", "Digital Architect"],
  authors: [{ name: "Tuan Superior" }],
  creator: "Tuan Superior",
  openGraph: {
    title: "Tuan Superior | Digital Architect",
    description: "Mahakarya digital yang dibangun dengan presisi matematis murni.",
    url: "https://geminix-portfolio.com",
    siteName: "Portfolio Superior",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow flex flex-col relative">
          {children}
        </div>
      </body>
    </html>
  );
}