// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-green-700 text-white text-center py-4 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} Desa Linggar. Semua Hak Dilindungi.
      </p>
    </footer>
  );
}
