"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ nikOrEmail: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);
    let body = {};
    if (/^\d{16}$/.test(form.nikOrEmail)) {
      body = { nik: form.nikOrEmail, password: form.password };
    } else {
      body = { email: form.nikOrEmail, password: form.password };
    }
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let data = {};
    try {
      const text = await res.text();
      data = text ? JSON.parse(text) : {};
    } catch (err) {
      data = {};
    }
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Login gagal");
    } else {
      // Simpan status login sebelum redirect
      if (typeof window !== "undefined") {
        localStorage.setItem("isLoggedIn", "true");
      }
      // Jika role admin, redirect ke dashboard admin
      if (data.role === "admin" || (data.user && data.user.role === "admin")) {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <section className="max-w-md mx-auto bg-white rounded-xl shadow p-8 mt-12">
      <div className="flex flex-col items-center mb-4">
        <Image src="/images/logo-desa.png" alt="Logo Desa" width={60} height={60} className="mb-2 object-contain" priority />
      </div>
      <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">Login Akun Warga Desa</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">NIK / Email</label>
          <input
            type="text"
            name="nikOrEmail"
            value={form.nikOrEmail}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1"
            placeholder="Masukkan NIK (16 digit) atau Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Kata Sandi</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required className="w-full border rounded px-2 py-1" placeholder="Kata sandi" />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button type="submit" className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition" disabled={loading}>{loading ? "Memproses..." : "Login"}</button>
      </form>
      <div className="text-center mt-4 text-sm">
        Belum punya akun? <a href="/register" className="text-green-700 underline">Daftar di sini</a>
      </div>
    </section>
  );
}
