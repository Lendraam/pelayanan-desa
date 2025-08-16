"use client";

// List Pengaduan Warga
export default function AdminPengaduanList() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Daftar Pengaduan Warga</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg border border-green-100">
          <thead>
            <tr className="text-green-700 border-b border-green-200 bg-green-50">
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">NIK</th>
              <th className="px-4 py-2 text-left">Isi Pengaduan</th>
              <th className="px-4 py-2 text-left">Tanggal</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Contoh data dummy */}
            <tr className="border-b border-green-100">
              <td className="px-4 py-2">Budi Santoso</td>
              <td className="px-4 py-2">3201234567890123</td>
              <td className="px-4 py-2">Jalan rusak di RT 03 RW 05</td>
              <td className="px-4 py-2">2025-08-10</td>
              <td className="px-4 py-2">Belum diproses</td>
            </tr>
            <tr className="border-b border-green-100">
              <td className="px-4 py-2">Siti Aminah</td>
              <td className="px-4 py-2">3201234567890456</td>
              <td className="px-4 py-2">Lampu jalan mati di RT 01</td>
              <td className="px-4 py-2">2025-08-12</td>
              <td className="px-4 py-2">Sudah ditindaklanjuti</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
