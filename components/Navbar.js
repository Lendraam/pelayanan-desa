// src/components/Navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  FileText,
  MessageCircle,
  LogIn,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo-desa.png"
            alt="Logo Desa"
            width={55}
            height={55}
            className="object-contain"
            priority
          />
          <Image
            src="/images/logo-bandungbedas.gif"
            alt="Logo Bandung Bedas"
            width={55}
            height={55}
            className="object-contain"
            priority
          />
          <h1 className="text-lg font-extrabold tracking-wide md:text-xl">
            Desa Linggar
          </h1>
        </div>

        {/* Menu Desktop */}
        <div className="hidden items-center space-x-6 font-medium md:flex">
          <Link href="/" className="flex items-center gap-1 hover:text-gray-200 transition">
            <Home className="h-4 w-4 md:h-5 md:w-5" />
            Beranda
          </Link>
          <Link href="/pelayanan" className="flex items-center gap-1 hover:text-gray-200 transition">
            <FileText className="h-4 w-4 md:h-5 md:w-5" />
            Pelayanan
          </Link>
          <Link href="/pelayanan/pengaduan" className="flex items-center gap-1 hover:text-gray-200 transition">
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
            Pengaduan
          </Link>
          {!isLoggedIn ? (
            <Link href="/login" className="flex items-center gap-1 hover:text-gray-200 transition">
              <LogIn className="h-4 w-4 md:h-5 md:w-5" />
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 hover:text-gray-200 transition"
            >
              <LogOut className="h-4 w-4 md:h-5 md:w-5" />
              Logout
            </button>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-2 bg-green-800 px-4 py-2 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-gray-200 transition">
            <Home className="h-4 w-4" /> Beranda
          </Link>
          <Link href="/pelayanan" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-gray-200 transition">
            <FileText className="h-4 w-4" /> Pelayanan
          </Link>
          <Link href="/pelayanan/pengaduan" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-gray-200 transition">
            <MessageCircle className="h-4 w-4" /> Pengaduan
          </Link>
          {!isLoggedIn ? (
            <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-gray-200 transition">
              <LogIn className="h-4 w-4" /> Login
            </Link>
          ) : (
            <button
              onClick={() => { setIsOpen(false); handleLogout(); }}
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
