// src/components/CardSurat.js
import Link from "next/link";

export default function CardSurat({ title, link, description, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold text-green-700">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <Link href={link || "#"}>
        <button className="bg-green-700 text-white mt-4 py-2 px-4 rounded-lg hover:bg-green-800 transition">
          Ajukan
        </button>
      </Link>
    </div>
  );
}
