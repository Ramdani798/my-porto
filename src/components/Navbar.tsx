"use client"; // Wajib ditambahkan karena kita menggunakan interaksi klik (useState)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  // State untuk mengontrol nyala/matinya mode Zoom
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tighter text-white"
          >
            My<span className="text-blue-500">Porto</span>.
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            {/* UPDATE: Menggunakan tag <a> alih-alih <Link> untuk navigasi satu halaman */}
            <a
              href="#work"
              className="hover:text-white transition-colors duration-300"
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Profile Picture Trigger (Menggantikan Let's Talk) */}
          <button
            onClick={() => setIsZoomed(true)}
            className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 focus:outline-none"
          >
            <Image
              src="/images/pas_foto.jpeg" // Ganti dengan nama file foto profil Tuan
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </button>
        </div>
      </nav>

      {/* Mode Zoom (Modal Lightbox) - Hanya muncul jika isZoomed bernilai true */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsZoomed(false)} // Klik di mana saja untuk menutup
        >
          {/* Tombol Tutup Silang */}
          <button
            className="absolute top-6 right-6 text-white text-xl font-bold p-4 hover:text-blue-500 transition-colors"
            onClick={() => setIsZoomed(false)}
          >
            ✕
          </button>

          {/* Kontainer Gambar Besar */}
          <div
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Mencegah klik pada gambar ikut menutup modal
          >
            <Image
              src="/images/pas_foto.jpeg" // Harus sama dengan path di atas
              alt="Profile Picture Zoomed"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
