"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRightCircle,
  Landmark,
  FileText,
  MessageCircle,
  Users,
} from "lucide-react";
import Button from "../components/Button";

export default function HomePage() {
  const slides = [
    {
      src: "/images/desalinggarutama.jpg",
      alt: "Desa Linggar Utama",
    },
    {
      src: "/images/Medsosweb.jpg",
      alt: "Medsos Web Desa",
    },
  ];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-12 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="flex items-center justify-center gap-2 text-3xl md:text-5xl font-extrabold tracking-wide">
            <Landmark className="w-10 h-10 md:w-14 md:h-14" />
            Pelayanan Online Desa Linggar
          </h1>
          <p className="mt-3 text-lg md:text-2xl italic text-green-100">
            &quot;Linggar Manunggal&quot;
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-green-200">
            Website ini hadir untuk memudahkan masyarakat Desa Linggar dalam
            mengakses layanan administrasi dan pengaduan secara cepat, efisien,
            dan transparan.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="flex-1 container mx-auto px-4 py-10">
        {/* Foto Utama Slider */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg bg-white relative">
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              width={1980}
              height={1080}
              className="object-cover w-full h-64 sm:h-80 md:h-[420px] transition-all duration-500"
              priority
            />
            {/* Tombol navigasi */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-700 bg-opacity-70 text-white rounded-full p-2 hover:bg-green-800"
              aria-label="Sebelumnya"
            >&#8592;</button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-700 bg-opacity-70 text-white rounded-full p-2 hover:bg-green-800"
              aria-label="Selanjutnya"
            >&#8594;</button>
          </div>
        </div>

        {/* Penjelasan Singkat */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Kenapa Memilih Pelayanan Online Desa?
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-gray-700">
            Dengan adanya sistem pelayanan online ini, warga Desa Linggar dapat
            mengajukan berbagai jenis surat dan menyampaikan pengaduan tanpa
            harus datang langsung ke kantor desa, sehingga lebih cepat, efisien,
            dan nyaman.
          </p>
        </div>

        {/* Highlight Fitur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Pelayanan Surat
            </h3>
            <p className="text-sm text-gray-600">
              Ajukan berbagai surat administrasi seperti kelahiran, kematian,
              domisili, dan lainnya secara online.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Pengaduan & Pertanyaan
            </h3>
            <p className="text-sm text-gray-600">
              Sampaikan keluhan, aspirasi, atau pertanyaan Anda langsung kepada
              perangkat desa.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Transparansi & Akses Mudah
            </h3>
            <p className="text-sm text-gray-600">
              Semua layanan dirancang untuk transparan dan dapat diakses kapan
              saja serta di mana saja.
            </p>
          </div>
        </div>

        {/* Alamat */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-green-700 mb-3">
            <MapPin className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Alamat Kantor Desa</h2>
          </div>
          <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-gray-700 mb-6">
            Jl. Warung Cina No. 26, Desa Linggar, Kec. Rancaekek, Kab. Bandung,
            Jawa Barat
          </p>

          {/* Google Maps */}
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Lokasi Kantor Desa di Peta
          </h3>
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.370267896284!2d107.79517167499701!3d-6.965572893034967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c459f335cdf7%3A0x204ef4cac5655797!2sKantor%20Desa%20Linggar!5e0!3m2!1sid!2sid!4v1754225953494!5m2!1sid!2sid"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Tombol Masuk */}
        <div className="text-center">
          <Link href="/pelayanan">
            <Button full>
              Masuk Pelayanan Desa
              <ArrowRightCircle className="ml-2 inline-block w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
