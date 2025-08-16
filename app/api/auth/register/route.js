import clientPromise from "@/lib/mongodb";
import { hashPassword } from "@/models/User";

export async function POST(req) {
  const { nama, nik, alamat, nohp, email, password } = await req.json();
  if (!nama || !nik || !alamat || !nohp || !email || !password) {
    return new Response(JSON.stringify({ error: "Semua field wajib diisi" }), { status: 400 });
  }
  const client = await clientPromise;
  const db = client.db();
  // Cek email atau nik sudah terdaftar
  const existing = await db.collection("users").findOne({ $or: [ { email }, { nik } ] });
  if (existing) {
    return new Response(JSON.stringify({ error: "Email atau NIK sudah terdaftar" }), { status: 400 });
  }
  const hash = await hashPassword(password);
  await db.collection("users").insertOne({ nama, nik, alamat, nohp, email, password: hash });
  return new Response(JSON.stringify({ success: true }), { status: 201 });
}
