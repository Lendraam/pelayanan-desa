// src/app/pelayanan/pengaduan/page.js
"use client";
import { useState } from "react";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";

export default function PengaduanPage() {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    alamat: "",
    nohp: "",
    kategori: "",
    deskripsi: "",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pengaduan berhasil dikirim (simulasi)!");
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Form Pengaduan & Pertanyaan
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Sampaikan pertanyaan atau pengaduan Anda melalui formulir ini. Data Anda akan kami tindaklanjuti sesegera mungkin.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
        encType="multipart/form-data"
      >
        <FormInput
          label="Nama Pelapor"
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <FormInput
          label="NIK (opsional)"
          type="text"
          name="nik"
          value={formData.nik}
          onChange={handleChange}
        />
        <FormInput
          label="Alamat"
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Nomor HP / WhatsApp"
          type="text"
          name="nohp"
          value={formData.nohp}
          onChange={handleChange}
          required
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Pengaduan</label>
          <select
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            required
            className="block w-full border rounded px-2 py-1"
          >
            <option value="">Pilih Kategori</option>
            <option value="Infrastruktur">Infrastruktur</option>
            <option value="Sosial">Sosial</option>
            <option value="Lingkungan">Lingkungan</option>
            <option value="Keamanan">Keamanan</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <FormInput
          label="Deskripsi Pengaduan"
          type="textarea"
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          required
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Foto Bukti (opsional)</label>
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange}
            className="block w-full border rounded px-2 py-1"
          />
        </div>
        <Button type="submit">Kirim</Button>
      </form>
    </section>
  );
}
