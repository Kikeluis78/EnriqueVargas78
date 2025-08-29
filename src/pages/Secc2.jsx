import React, { useEffect } from "react";
import { Cpu, Smartphone, LayoutGrid } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const serviciosExtras = [
  {
    icon: Cpu,
    title: "Tiendas Online",
    description: "Integración de catálogo de productos, carrito de compras y pagos seguros.",
  },
  {
    icon: Smartphone,
    title: "Apps Android",
    description: "Aplicaciones móviles personalizadas para Android, con diseño nativo.",
  },
  {
    icon: LayoutGrid,
    title: "Páginas Especiales",
    description: "Secciones adicionales, animaciones, formularios avanzados o integración API.",
  },
];

export default function Seccion2() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section
      id="Secc2"
      className="bg-black text-white min-h-screen py-12 px-4 flex flex-col justify-center"
    >
      <h2
        className="text-4xl font-extrabold text-center text-yellow-300 mb-12 drop-shadow-lg"
        data-aos="fade-down"
      >
        Servicios Adicionales
      </h2>

      {/* Desktop grid */}
      <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {serviciosExtras.map((servicio, index) => {
          const Icon = servicio.icon;
          return (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-start hover:scale-105 transition-transform"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Icon className="w-6 h-6 text-yellow-300 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{servicio.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{servicio.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile swiper */}
      <div className="lg:hidden max-w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {serviciosExtras.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <SwiperSlide key={index}>
                <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-start hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-yellow-300 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{servicio.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{servicio.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div
        className="flex justify-center mt-12"
        data-aos="fade-up"
        data-aos-delay={serviciosExtras.length * 200 + 200}
      >
        <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}
