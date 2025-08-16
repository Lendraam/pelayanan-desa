// Detail Pengajuan Surat/Pengaduan
export default function AdminDetailPage({ params }) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Detail Pengajuan/Pengaduan</h1>
      <p>ID: {params.id}</p>
      <p>Detail pengajuan surat atau pengaduan warga akan tampil di sini.</p>
    </div>
  );
}
