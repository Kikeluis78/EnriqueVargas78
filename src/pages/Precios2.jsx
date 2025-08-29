// src/pages/Precios2.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../styles/scroll.css"; // importa el CSS de scroll

export default function Precios2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const paquetes = [
    {
      titulo: "🛒 Tienda Online",
      colorTitulo: "text-pink-400",
      descripcion: "Ideal para negocios que quieren vender en internet con un sistema de pagos integrado.",
      features: [
        "✅ Carrito de compras",
        "✅ Integración con PayPal / Stripe",
        "✅ Gestión de productos y categorías",
        "✅ Panel de administración",
      ],
      precio: "$6,500 MXN",
      botonTexto: "Contratar Tienda Online",
      botonGradient: "from-yellow-400 via-pink-500 to-purple-500",
    },
    {
      titulo: "✨ Páginas Personalizadas",
      colorTitulo: "text-purple-400",
      descripcion: "Perfectas para proyectos únicos que requieren funciones o diseño a medida.",
      features: [
        "✅ Portafolios profesionales",
        "✅ Restaurantes con menú digital",
        "✅ Escuelas con control de alumnos",
        "✅ Inmobiliarias con catálogos dinámicos",
        "✅ Blogs o revistas digitales",
      ],
      precio: "Desde $4,800 MXN",
      botonTexto: "Cotizar Proyecto",
      botonGradient: "from-purple-400 via-pink-500 to-yellow-400",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-16 flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl p-8 bg-gray-800/70 backdrop-blur-lg rounded-3xl shadow-2xl">

        {/* Tabs navegación */}
        <div className="flex justify-center gap-6 mb-12" data-aos="fade-down">
          <Link to="/Precios">
            <button className="px-6 py-2 rounded-xl font-bold text-sm transition shadow-md
              bg-gray-700 text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-pink-500 hover:text-black normal-case">
              ⭐ Plan Básico
            </button>
          </Link>
          <Link to="/Precios2">
            <button className="px-6 py-2 rounded-xl font-bold text-sm transition shadow-md
              bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-black normal-case">
              🚀 Planes Avanzados
            </button>
          </Link>
        </div>

        {/* Título */}
        <h1
          className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 drop-shadow-lg normal-case"
          data-aos="fade-down"
        >
          Planes Avanzados
        </h1>

        {/* Paquetes - Carrusel horizontal en móvil */}
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory p-2 md:grid md:grid-cols-2 md:gap-8 no-scrollbar scroll-smooth">
          {paquetes.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center bg-gray-900/70 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform min-w-[260px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className={`text-2xl font-bold mb-4 ${item.colorTitulo} normal-case`}>
                {item.titulo}
              </h3>
              <p className="text-gray-300 mb-6 normal-case">{item.descripcion}</p>
              <ul className="text-gray-300 space-y-2 text-sm mb-6 normal-case">
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p className="text-3xl font-extrabold text-yellow-300 mb-4 normal-case">{item.precio}</p>
              <Link to="/Contacto">
                <button
                  className={`px-6 py-3 bg-gradient-to-r ${item.botonGradient} text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform normal-case`}
                >
                  {item.botonTexto}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Aplicaciones Android */}
        <div
          className="mt-16 bg-gradient-to-r from-blue-600/60 via-indigo-600/60 to-purple-600/60 rounded-2xl shadow-lg p-8 text-center"
          data-aos="zoom-in"
        >
          <h3 className="text-2xl font-bold text-white mb-4 normal-case">📱 Aplicaciones Android</h3>
          <p className="text-gray-200 mb-6 normal-case">
            Lleva tu negocio al siguiente nivel con una aplicación móvil personalizada.
          </p>
          <ul className="text-gray-100 space-y-2 text-sm mb-6 normal-case">
            <li>✅ Aplicaciones para negocios</li>
            <li>✅ Integración con tu página web</li>
            <li>✅ Publicación en Google Play</li>
            <li>✅ Notificaciones push</li>
          </ul>
          <p className="text-3xl font-extrabold text-yellow-300 mb-4 normal-case">Desde $12,000 MXN</p>
          <Link to="/Contacto">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform normal-case">
              Cotizar App
            </button>
          </Link>
        </div>

        {/* CTA final */}
        <div className="flex justify-center mt-12">
          <Link to="/Contacto">
            <button className="px-8 py-3 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform normal-case">
              📞 Agenda una asesoría gratuita
            </button>
          </Link>
        </div>
      </div>

      {/* Preguntas Frecuentes */}
      <section className="mt-20 w-full max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 normal-case">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4">
          {[
            {
              pregunta: "¿Qué pasa después del primer año con el hosting y dominio?",
              respuesta:
                "El primer año está incluido. A partir del segundo año, puedes renovarlo con nosotros o directamente con el proveedor. Te ayudamos en el proceso para que no pierdas tu web.",
            },
            {
              pregunta: "¿Puedo pedir más secciones o funciones personalizadas?",
              respuesta:
                "¡Claro! Los planes básicos incluyen lo anunciado, pero siempre puedes solicitar extras como más secciones, integración con pasarelas de pago, reservas, chat en línea, etc.",
            },
            {
              pregunta: "¿En cuánto tiempo entregan la página?",
              respuesta:
                "Dependiendo de la complejidad, un sitio básico se entrega en 5 a 7 días hábiles. Tiendas en línea o proyectos personalizados pueden tardar entre 10 y 20 días.",
            },
            {
              pregunta: "¿Qué métodos de pago aceptan?",
              respuesta:
                "Aceptamos transferencias bancarias, depósitos y pagos vía PayPal. También podemos ofrecer pagos parciales según el proyecto.",
            },
            {
              pregunta: "¿Ofrecen soporte después de la entrega?",
              respuesta:
                "Sí. Incluimos soporte técnico básico y asesoría inicial para que manejes tu sitio. También puedes contratar planes de mantenimiento mensual si lo deseas.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group bg-gray-900/70 p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-200 group-open:text-yellow-300 normal-case">
                {item.pregunta}
                <span className="ml-2 text-yellow-400">{">"}</span>
              </summary>
              <p className="mt-3 text-gray-400 leading-relaxed normal-case">{item.respuesta}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
