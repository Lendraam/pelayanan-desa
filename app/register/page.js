"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    nama: "",
    nik: "",
    alamat: "",
    nohp: "",
    email: "",
    password: "",
    ulangi: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    if (form.password !== form.ulangi) {
      setError("Kata sandi tidak sama");
      return;
    }
    if (form.nik.length !== 16 || !/^\d+$/.test(form.nik)) {
      setError("NIK harus 16 digit angka");
      return;
    }
    if (!form.email) {
      setError("Email wajib diisi");
      return;
    }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama: form.nama,
        nik: form.nik,
        alamat: form.alamat,
        nohp: form.nohp,
        email: form.email,
        password: form.password,
      }),
    });
    let data = {};
    try {
      data = await res.json();
    } catch (e) {
      setError("Terjadi kesalahan pada server. Silakan coba lagi.");
      return;
    }
    if (!res.ok) {
      setError(data.error || "Registrasi gagal");
    } else {
      setSuccess(true);
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  return (
    <section className="max-w-md mx-auto bg-white rounded-xl shadow p-8 mt-12">
      <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">Form Registrasi Akun Warga Desa</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <input type="text" name="nama" value={form.nama} onChange={handleChange} required className="w-full border rounded px-2 py-1" placeholder="Budi Santoso" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nomor Induk Kependudukan (NIK)</label>
          <input type="text" name="nik" value={form.nik} onChange={handleChange} required className="w-full border rounded px-2 py-1" maxLength={16} placeholder="16 digit di KTP" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Alamat Lengkap</label>
          <input type="text" name="alamat" value={form.alamat} onChange={handleChange} required className="w-full border rounded px-2 py-1" placeholder="Dusun, RT/RW, Desa" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nomor HP / WhatsApp</label>
          <input type="text" name="nohp" value={form.nohp} onChange={handleChange} required className="w-full border rounded px-2 py-1" placeholder="08xxxxxxxxxx" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-2 py-1" placeholder="email@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Buat Kata Sandi</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required className="w-full border rounded px-2 py-1" placeholder="Kata rahasia" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ulangi Kata Sandi</label>
          <input type="password" name="ulangi" value={form.ulangi} onChange={handleChange} required className="w-full border rounded px-2 py-1" placeholder="Ulangi kata sandi" />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-700 text-sm">Registrasi berhasil! Mengalihkan ke login...</div>}
        <button type="submit" className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition">Daftar</button>
      </form>
    </section>
  );
}
