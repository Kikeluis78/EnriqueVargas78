// src/pages/Precios.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Layout,
  Smartphone,
  MessageCircle,
  Mail,
  MapPin,
  Server,
  Lock,
  LifeBuoy,
} from "lucide-react";

export default function Precios() {
  const [mostrarBotonScroll, setMostrarBotonScroll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 100,
    });

    const handleScroll = () => {
      const primerBoton = document.getElementById("boton-contratar");
      if (!primerBoton) return;
      const rect = primerBoton.getBoundingClientRect();
      setMostrarBotonScroll(rect.top < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicios = [
    { icon: Layout, text: "Diseño profesional y moderno" },
    { icon: CheckCircle, text: "Hasta 4 secciones (Inicio, Nosotros, Servicios, Contacto)" },
    { icon: Smartphone, text: "100% adaptable a celulares, tablets y computadoras" },
    { icon: MessageCircle, text: "Botón de WhatsApp para mensajes directos" },
    { icon: Mail, text: "Formulario de contacto (mensajes a correo o WhatsApp)" },
    { icon: MapPin, text: "Ubicación con Google Maps" },
    { icon: Server, text: "Hosting + dominio gratis por 1 año" },
    { icon: Lock, text: "Certificado SSL (candado de seguridad en tu web)" },
    { icon: LifeBuoy, text: "Soporte técnico básico" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-16 flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-5xl p-8 bg-gray-800/70 backdrop-blur-lg rounded-3xl shadow-2xl">
        
        {/* Tabs navegación */}
        <div className="flex justify-center gap-6 mb-12" data-aos="fade-down">
          <Link to="/Precios">
            <button className="px-6 py-2 rounded-xl font-bold text-sm transition shadow-md
              bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-black normal-case">
              ⭐ Plan Básico
            </button>
          </Link>
          <Link to="/Precios2">
            <button className="px-6 py-2 rounded-xl font-bold text-sm transition shadow-md
              bg-gray-700 text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-yellow-400 hover:text-black normal-case">
              🚀 Planes Pro
            </button>
          </Link>
        </div>

        {/* Título */}
        <h1
          className="text-3xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 drop-shadow-lg normal-case"
          data-aos="fade-down"
        >
          ¡Página WEB Básica!
        </h1>

        {/* Plan */}
        <h2
          className="text-2xl font-bold text-yellow-300 mb-4 text-center drop-shadow-md normal-case"
          data-aos="fade-up"
        >
          Super precio
        </h2>

        {/* Precio */}
        <p className="flex justify-center items-baseline mb-6 text-center normal-case">
          <span className="text-lg md:text-xl mr-1 text-gray-200">$</span>
          <span
            className="text-5xl md:text-6xl font-extrabold mx-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            2,400
          </span>
          <span className="text-lg md:text-xl ml-1 text-gray-200">MXN</span>
        </p>

        {/* Notas adicionales */}
        <p className="text-center text-gray-400 text-sm mb-10 normal-case" data-aos="fade-up">
          Tiempo de Entrega{" "}
          <span className="text-yellow-300 font-semibold normal-case">máximo 7 días hábiles</span>.
        </p>

        {/* Carrusel horizontal de servicios en móvil, grid en escritorio */}
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory p-2 md:grid md:grid-cols-2 md:gap-6 no-scrollbar">
          {servicios.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 snap-center flex items-center gap-4 p-5 bg-gray-900/70 rounded-xl shadow-md hover:scale-105 transition-transform min-w-[220px]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <IconComponent className="text-green-400 w-7 h-7 flex-shrink-0" />
                <p className="text-gray-200 font-medium text-sm sm:text-base normal-case">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Botón Contratar */}
        <div className="flex justify-center mt-12">
          <Link to="/Contacto">
            <button
              id="boton-contratar"
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer whitespace-nowrap normal-case"
            >
              <span className="whitespace-nowrap normal-case">Contratar Plan</span>
            </button>
          </Link>
        </div>

        {/* Botón Más Informes */}
        {mostrarBotonScroll && (
          <div className="flex justify-center mt-8">
            <Link to="/Precios2">
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform animate-bounce cursor-pointer normal-case">
                <span className="block normal-case">Ver más</span>
                <span className="block normal-case">Precios y Paquetes</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
