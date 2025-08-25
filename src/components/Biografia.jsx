// src/components/Biografia.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Biografia() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-black flex flex-col-reverse md:flex-row items-center px-4 md:px-12 py-12 md:py-16">
      
      {/* Texto */}
      <div className="w-full md:w-2/3 md:pl-8 text-center md:text-left order-3 md:order-2" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Sobre mí</h2>
        <p className="text-white text-lg mb-4">
          Hola, soy <span className="font-semibold">Enrique Vargas</span>, diseñador web y especialista en marketing digital. 
          Me apasiona ayudar a emprendedores y negocios a crecer en Internet con páginas funcionales, atractivas y adaptadas a móviles.
        </p>
        <p className="text-gray-300 mb-4">
          Con más de X años de experiencia, combino creatividad y estrategia para que tu negocio se destaque online. 
          Cada proyecto que desarrollo busca maximizar resultados y brindar experiencias memorables a tus clientes.
        </p>
      </div>

      {/* Foto con efecto hover */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 order-2 md:order-1" data-aos="fade-right">
        <img
          src="/foto.jpeg"
          alt="Enrique Vargas"
          className="rounded-full w-48 h-48 object-cover shadow-2xl border-4 border-yellow-300 transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
