// src/components/Button.js
export default function Button({ children, onClick, type = "button", full = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-700 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-800 transition ${
        full ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
