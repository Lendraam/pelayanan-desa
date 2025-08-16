"use client";
import { useState } from "react";
import { Home, FileText, Users, Settings } from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  const menus = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/admin" },
    { name: "Kelola Surat", icon: <FileText size={20} />, path: "/admin/pelayanan" },
    { name: "Data Warga", icon: <Users size={20} />, path: "/admin/data-warga" },
    { name: "Pengaturan", icon: <Settings size={20} />, path: "/admin/pengaturan" },
  ];
  const [active, setActive] = useState(menus[0].name);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-4 text-2xl font-bold text-center text-cyan-400">
          Admin Desa
        </div>
        <nav className="flex-1 px-2 space-y-2">
          {menus.map((menu) => (
            <button
              key={menu.name}
              onClick={() => {
                setActive(menu.name);
                router.push(menu.path);
              }}
              className={`flex items-center w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                active === menu.name
                  ? "bg-cyan-500 text-black shadow-lg"
                  : "hover:bg-gray-700"
              }`}
            >
              <span className="mr-3">{menu.icon}</span>
              {menu.name}
            </button>
          ))}
        </nav>
        <div className="p-4 text-sm text-gray-400 text-center border-t border-gray-700">
          © 2025 Desa Linggar
        </div>
      </div>

      {/* Konten Utama */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-cyan-400">{active}</h1>
        <div className="mt-4 p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <p className="text-gray-300">
            Ini adalah halaman <span className="font-semibold">{active}</span>.
            Konten akan ditampilkan di sini.
          </p>
        </div>
      </div>
    </div>
  );
}
