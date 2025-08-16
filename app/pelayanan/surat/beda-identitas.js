import { useState } from "react";

export default function BedaIdentitas() {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const syarat = [
    { label: "Nama Pelapor", name: "nama_pelapor", type: "text" },
    { label: "NIK", name: "nik", type: "text" },
    { label: "Foto KTP", name: "foto_ktp", type: "file" },
    { label: "Data yang Salah", name: "data_salah", type: "text" },
    { label: "Foto Data yang Salah", name: "foto_data_salah", type: "file" },
    { label: "Data yang Benar", name: "data_benar", type: "text" },
    { label: "Foto Data yang Benar", name: "foto_data_benar", type: "file" },
    { label: "Tujuan Pembuatan", name: "tujuan_pembuatan", type: "text" },
  ];

  function handleChange(e, name, type) {
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: e.target.files?.[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: e.target.value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-8 mt-8 text-center">
        <h2 className="text-green-700 text-xl font-bold mb-2">Pengajuan Berhasil!</h2>
        <p className="text-gray-700">Data pengajuan Surat Beda Identitas telah dikirim.</p>
      </div>
    );
  }

  return (
    <section className="max-w-lg mx-auto bg-white rounded-xl shadow p-8 mt-8">
      <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">Form Surat Beda Identitas</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {syarat.map((item) => (
          <div key={item.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{item.label}</label>
            {item.type === "file" ? (
              <input
                type="file"
                accept="image/*"
                onChange={e => handleChange(e, item.name, item.type)}
                className="block w-full border rounded px-2 py-1"
                required
              />
            ) : (
              <input
                type="text"
                value={form[item.name] || ""}
                onChange={e => handleChange(e, item.name, item.type)}
                className="block w-full border rounded px-2 py-1"
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition">Kirim Pengajuan</button>
      </form>
    </section>
  );
}
