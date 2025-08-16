// Admin Layout with sidebar
export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-800 text-white p-6">
        <h2 className="font-bold text-xl mb-6">Admin Desa</h2>
        <nav className="space-y-4">
          <a href="/admin" className="block hover:underline">Dashboard</a>
          <a href="/admin/pelayanan" className="block hover:underline">Pelayanan Surat</a>
          <a href="/admin/pengaduan" className="block hover:underline">Pengaduan Warga</a>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
