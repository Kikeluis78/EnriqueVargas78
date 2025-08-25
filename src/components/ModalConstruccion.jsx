import { useState } from "react";

export default function ModalConstruccion() {
  const [show, setShow] = useState(true); // Cambiar a false si no quieres mostrar al inicio

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-500">
      <div
        className="bg-gradient-to-br from-blue-800 via-purple-800 to-pink-700 text-white text-center p-3 rounded-3xl shadow-2xl max-w-lg w-[90%] relative transform scale-100 transition-transform duration-300 ease-out"
      >
        <h2 className="text-2xl sm:text-3xl text-yellow-400 font-extrabold mb-4 drop-shadow-lg">
          🚧 Sección en Construcción 🚧
        </h2>
        <p className="text-gray-200 text-base sm:text-lg mb-6 leading-relaxed">
          Esta sección aún no está disponible. ¡Estamos trabajando para que esté lista pronto!
        </p>
        <button
          onClick={() => setShow(false)}
          className="mt-2 inline-block px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
