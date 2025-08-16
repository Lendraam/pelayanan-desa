// List Pengajuan Surat
export default function AdminPelayananList() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Daftar Pengajuan Surat</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr className="text-cyan-400 border-b border-gray-700">
              <th className="px-4 py-2 text-left">Jenis Surat</th>
              <th className="px-4 py-2 text-left">Nama/NIK Pelapor</th>
              <th className="px-4 py-2 text-left">Field Khusus</th>
              <th className="px-4 py-2 text-left">Tanggal Pengajuan</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Contoh data dummy untuk berbagai jenis surat */}
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Keterangan Kematian</td>
              <td className="px-4 py-2">Budi Santoso / 3201234567890123</td>
              <td className="px-4 py-2">KTP Pelapor: Ada, KTP Almarhum: Ada, Tgl Meninggal: 2025-08-01, Jam: 10:00</td>
              <td className="px-4 py-2">2025-08-02</td>
              <td className="px-4 py-2">Diproses</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Keterangan Kelahiran</td>
              <td className="px-4 py-2">Siti Aminah / 3201234567890456</td>
              <td className="px-4 py-2">Nama Anak: Bayu, Nama Ayah: Andi, Nama Ibu: Siti, Tgl Lahir: 2025-08-10</td>
              <td className="px-4 py-2">2025-08-11</td>
              <td className="px-4 py-2">Selesai</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Keterangan Usaha</td>
              <td className="px-4 py-2">Agus Pratama / 3201234567890111</td>
              <td className="px-4 py-2">Nama Usaha: Toko Maju, Alamat: Jl. Melati, Tujuan: Kredit, Foto: Ada</td>
              <td className="px-4 py-2">2025-08-09</td>
              <td className="px-4 py-2">Diproses</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Penghasilan Orang Tua</td>
              <td className="px-4 py-2">Dewi Lestari / 3201234567890222</td>
              <td className="px-4 py-2">Nama Ayah: Sumarno, Penghasilan: 2jt/bln, Foto Struk: Ada</td>
              <td className="px-4 py-2">2025-08-13</td>
              <td className="px-4 py-2">Selesai</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Belum Menikah</td>
              <td className="px-4 py-2">Rina / 3201234567890333</td>
              <td className="px-4 py-2">Nama Belum Menikah: Rina, Tujuan: Melamar Kerja</td>
              <td className="px-4 py-2">2025-08-14</td>
              <td className="px-4 py-2">Diproses</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Pernah Menikah (Janda/Duda)</td>
              <td className="px-4 py-2">Samsul / 3201234567890444</td>
              <td className="px-4 py-2">Menikah dgn: Siti, Tgl Menikah: 2010-01-01, Tgl Cerai: 2020-01-01, Tujuan: Data Dukcapil</td>
              <td className="px-4 py-2">2025-08-15</td>
              <td className="px-4 py-2">Selesai</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Domisili</td>
              <td className="px-4 py-2">Dedi / 3201234567890555</td>
              <td className="px-4 py-2">Alamat: Jl. Mawar, Foto RT/RW: Ada, Foto KK: Ada, Foto KTP: Ada, Tujuan: Sekolah</td>
              <td className="px-4 py-2">2025-08-16</td>
              <td className="px-4 py-2">Diproses</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Pindah</td>
              <td className="px-4 py-2">Wawan / 3201234567890666</td>
              <td className="px-4 py-2">Alamat Asal: Jl. Kenanga, Tujuan: Bandung, KK: Ada, KTP: Ada, Jenis: Antar Kota</td>
              <td className="px-4 py-2">2025-08-17</td>
              <td className="px-4 py-2">Diproses</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Kurang Mampu</td>
              <td className="px-4 py-2">Sari / 3201234567890777</td>
              <td className="px-4 py-2">Foto KTP: Ada, Foto KK: Ada, Pengantar RT/RW: Ada, Penghasilan: 1jt/bln, Tujuan: Bantuan</td>
              <td className="px-4 py-2">2025-08-18</td>
              <td className="px-4 py-2">Diproses</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-4 py-2">Beda Identitas</td>
              <td className="px-4 py-2">Rudi / 3201234567890888</td>
              <td className="px-4 py-2">Data Salah: Nama, Foto Salah: Ada, Data Benar: Nama, Foto Benar: Ada, Tujuan: Perbaikan</td>
              <td className="px-4 py-2">2025-08-19</td>
              <td className="px-4 py-2">Diproses</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
