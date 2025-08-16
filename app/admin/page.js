export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center justify-center gap-6 mb-6">
        <img src="/images/logo-desa.png" alt="Logo Desa" className="h-16 w-auto" />
        <img src="/images/logo-bandungbedas.gif" alt="Logo Bandung Bedas" className="h-16 w-auto" />
      </div>
      <h1 className="text-3xl font-bold text-green-700 mb-6">Dashboard Admin</h1>
      <div className="bg-white rounded-xl shadow p-8 border border-green-100">
        <p className="text-gray-700 text-lg mb-2">Selamat datang di dashboard admin Desa Linggar.</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Kelola pengajuan surat warga</li>
          <li>Kelola pengaduan warga</li>
          <li>Kelola data warga dan pengaturan lainnya</li>
        </ul>
      </div>
    </div>
  );
}
