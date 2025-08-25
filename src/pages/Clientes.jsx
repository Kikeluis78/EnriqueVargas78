// src/pages/Clientes.jsx
import ModalConstruccion from "../components/ModalConstruccion";

export default function Clientes() {
  const clientes = Array.from({ length: 8 }, (_, i) => i + 1); // Genera números del 1 al 8

  return (
    <>
      <ModalConstruccion />

      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-900 via-black to-black text-gray-200 min-h-screen flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-amber-400 drop-shadow-md">
            Nuestros Clientes
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-400 leading-relaxed">
            Estas son algunas de las marcas y empresas que han confiado en mi trabajo.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-center">
            {clientes.map((i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={`https://via.placeholder.com/150x80?text=Cliente+${i}`}
                  alt={`Cliente ${i}`}
                  className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
