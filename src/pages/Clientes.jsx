import ModalConstruccion from "../components/ModalConstruccion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Clientes() {
  const clientes = Array.from({ length: 8 }, (_, i) => i + 1); // Números del 1 al 8

  return (
    <>
      <ModalConstruccion />

      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-900 via-black to-black text-gray-200 min-h-screen flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto text-center">
          <h1
            translate="no"
            className="text-4xl md:text-5xl font-extrabold mb-6 text-amber-400 drop-shadow-md"
          >
            Nuestros Clientes
          </h1>

          <p
            translate="no"
            className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-400 leading-relaxed"
          >
            Estas son algunas de las marcas y empresas que han confiado en mi trabajo.
          </p>

          {/* Swiper horizontal para móviles y desktop */}
          <Swiper
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {clientes.map((i) => (
              <SwiperSlide key={i}>
                <div
                  className="flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform hover:scale-105 flex-shrink-0"
                >
                  <img
                    src={`https://via.placeholder.com/150x80?text=Cliente+${i}`}
                    alt={`Cliente ${i}`}
                    className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                    loading="lazy"
                    translate="no"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
