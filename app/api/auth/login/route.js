import clientPromise from "@/lib/mongodb";
import { comparePassword } from "@/models/User";

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email dan password wajib diisi" }), { status: 400 });
  }
  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: "Email tidak ditemukan" }), { status: 400 });
  }
  const valid = await comparePassword(password, user.password);
  if (!valid) {
    return new Response(JSON.stringify({ error: "Password salah" }), { status: 400 });
  }
  // Sesi sederhana: return user tanpa password
  const { password: _, ...userData } = user;
  // Pastikan isAdmin dan email dikirim ke frontend
  return new Response(
    JSON.stringify({
      success: true,
      isAdmin: userData.isAdmin || false,
      email: userData.email,
      user: userData,
    }),
    { status: 200 }
  );
}
