import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Rubik_Mono_One } from "next/font/google";
import Footer from "@/componentes/Footer/Footer";

const rubikMono = Rubik_Mono_One({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: "400",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ludmila Sanchez",
  description: "Portafolio Ludmila Sanchez Analista de Datos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${rubikMono.variable} ${geistMono.variable} antialiased bg-gray-200`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
