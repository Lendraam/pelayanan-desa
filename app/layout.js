// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Pelayanan Online Desa Linggar",
  description: "Website resmi untuk pelayanan surat dan pengaduan Desa Linggar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {/* Jarak kecil dari Navbar */}
        <main className="min-h-screen pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
