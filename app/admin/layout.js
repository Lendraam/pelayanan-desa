// Admin Layout with sidebar
export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-green-50">
      <aside className="w-64 bg-white border-r border-green-200 flex flex-col shadow-md">
        <div className="flex flex-col items-center p-4 border-b border-green-100">
          <div className="flex flex-row items-center justify-center gap-3 mb-2">
            <img src="/images/logo-desa.png" alt="Logo Desa" className="h-12 w-auto" />
            <img src="/images/logo-bandungbedas.gif" alt="Logo Bandung Bedas" className="h-10 w-auto" />
          </div>
          <div className="text-2xl font-bold text-green-700">Admin Desa</div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <a href="/admin" className="block py-2 px-3 rounded-lg text-green-800 font-semibold hover:bg-green-100 transition">Dashboard</a>
          <a href="/admin/pelayanan" className="block py-2 px-3 rounded-lg text-green-800 font-semibold hover:bg-green-100 transition">Pelayanan Surat</a>
          <a href="/admin/pengaduan" className="block py-2 px-3 rounded-lg text-green-800 font-semibold hover:bg-green-100 transition">Pengaduan Warga</a>
        </nav>
        <div className="p-4 text-xs text-green-500 text-center border-t border-green-100">
          © 2025 Desa Linggar
        </div>
      </aside>
      <main className="flex-1 bg-green-50 p-8">{children}</main>
    </div>
  );
}
