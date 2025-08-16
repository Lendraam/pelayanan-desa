// src/app/pelayanan/page.js
"use client";
import { useRouter } from "next/navigation";
import CardSurat from "../../components/CardSurat";
import {
  Heart,
  Baby,
  Briefcase,
  Wallet,
  UserX,
  Users,
  Home,
  MapPin,
  AlertCircle,
  IdCard,
} from "lucide-react";

export default function PelayananPage() {
  const router = useRouter();
  const suratList = [
    {
      title: "Keterangan Kematian",
      description: "Surat untuk keterangan kematian warga.",
      href: "/pelayanan/surat/kematian",
      icon: <Heart className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Keterangan Kelahiran",
      description: "Surat untuk keterangan kelahiran anak.",
      href: "/pelayanan/surat/kelahiran",
      icon: <Baby className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Keterangan Usaha",
      description: "Surat keterangan kepemilikan usaha.",
      href: "/pelayanan/surat/usaha",
      icon: <Briefcase className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Penghasilan Orang Tua",
      description: "Surat keterangan penghasilan orang tua.",
      href: "/pelayanan/surat/penghasilan",
      icon: <Wallet className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Keterangan Belum Menikah",
      description: "Surat keterangan status belum menikah.",
      href: "/pelayanan/surat/belum-menikah",
      icon: <UserX className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Keterangan Pernah Menikah",
      description: "Surat untuk janda/duda.",
      href: "/pelayanan/surat/pernah-menikah",
      icon: <Users className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Keterangan Domisili",
      description: "Surat keterangan domisili untuk keperluan administrasi.",
      href: "/pelayanan/surat/domisili",
      icon: <Home className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Keterangan Pindah",
      description: "Surat pindah antar desa, kecamatan, atau provinsi.",
      href: "/pelayanan/surat/pindah",
      icon: <MapPin className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Keterangan Kurang Mampu",
      description: "Surat keterangan ekonomi kurang mampu.",
      href: "/pelayanan/surat/kurang-mampu",
      icon: <AlertCircle className="h-8 w-8 text-green-700" />,
    },
    {
      title: "Beda Identitas",
      description: "Surat keterangan beda identitas untuk administrasi.",
      href: "/pelayanan/surat/beda-identitas",
      icon: <IdCard className="h-8 w-8 text-green-700" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Pelayanan Surat Desa Linggar
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Silakan pilih jenis surat yang ingin Anda ajukan. Pastikan Anda sudah
        menyiapkan dokumen persyaratan sesuai kebutuhan.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {suratList.map((item, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => router.push(item.href)}
            onKeyDown={e => { if (e.key === "Enter") router.push(item.href); }}
            className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-700 rounded"
          >
            <CardSurat
              title={item.title}
              description={item.description}
              href={item.href}
            >
              {item.icon}
            </CardSurat>
          </div>
        ))}
      </div>
    </section>
  );
}
