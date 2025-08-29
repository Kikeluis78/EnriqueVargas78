// src/components/Biografia.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mision from "./Mision"; 
import "../scroll.css"; 

const Biografia = () => {
  const [openModal, setOpenModal] = useState(false);

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
      <div
        className="w-full md:w-2/3 md:pl-8 text-center md:text-left order-3 md:order-2"
        data-aos="fade-left"
      >
        <h2 className="text-3xl font-bold text-yellow-300 mb-4 normal-case">Sobre mí</h2>

        <p className="text-white text-lg mb-4 normal-case">
          Hola, soy <span className="font-semibold normal-case">Enrique Vargas</span>, diseñador web y especialista en marketing. 
          Me apasiona ayudar a emprendedores y negocios a crecer en Internet con páginas modernas, funcionales y adaptadas a dispositivos móviles.
        </p>

        <p className="text-gray-300 mb-4 normal-case">
          Con más de 15 años de experiencia trabajando directamente con personas y empresas, combino creatividad y estrategia 
          para que tu negocio se destaque en línea. Cada proyecto que desarrollo está orientado a maximizar resultados, mejorar 
          la presencia digital y brindar experiencias memorables a tus clientes.  
        </p>

        <p className="text-gray-300 mb-6 normal-case">
          Mi enfoque siempre busca generar una sinergia sólida entre negocio y cliente, construyendo relaciones basadas en confianza, 
          innovación y resultados sostenibles a largo plazo.
        </p>

        {/* Botón solo visible en desktop/tablet */}
        <button
          onClick={() => setOpenModal(true)}
          className="hidden md:inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
        >
          Misión y Visión
        </button>
      </div>

      {/* Foto con efecto hover */}
      <div
        className="w-full md:w-1/3 flex flex-col items-center mb-12 md:mb-0 order-2 md:order-1"
        data-aos="fade-right"
      >
        <img
          src="/foto.jpeg"
          alt="Enrique Vargas"
          className="rounded-full w-48 h-48 object-cover shadow-2xl border-4 border-yellow-300 transform transition-transform duration-500 hover:scale-105"
        />

        {/* Botón solo visible en móvil (full-width debajo de la foto) */}
        <button
          onClick={() => setOpenModal(true)}
          className="block md:hidden w-full mt-6 px-6 py-4 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 active:scale-95 transition-all duration-300"
        >
          Misión y Visión
        </button>
      </div>

      {/* Modal */}
      <Mision open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default Biografia;
