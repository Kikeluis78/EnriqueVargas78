// src/components/Mision.jsx
import React from "react";
import { X } from "lucide-react"; // icono pro para cerrar (de lucide-react)

const Mision = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <div className="bg-gradient-to-b from-gray-900 to-black w-11/12 md:w-2/3 lg:w-1/2 rounded-2xl p-8 shadow-2xl border border-yellow-400/30 relative text-gray-200">
        
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-yellow-400 hover:text-red-500 transition-colors"
        >
          <X size={28} />
        </button>

        {/* Encabezado */}
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Misión & Visión</h2>

        {/* Sección Misión */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-3 border-l-4 border-yellow-400 pl-3">
            Misión
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Mi misión es impulsar a emprendedores y negocios a alcanzar una presencia digital sólida y efectiva,
            a través del diseño de sitios web profesionales, estrategias de marketing claras y soluciones prácticas
            que generen resultados reales tanto a corto como a largo plazo.
          </p>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Busco brindar a cada cliente las herramientas necesarias para destacar en un mercado competitivo,
            ofreciendo acompañamiento personalizado y soluciones accesibles que combinen creatividad, innovación y estrategia.
            Mi compromiso es transformar ideas en proyectos digitales exitosos, capaces de conectar con las personas correctas
            y de generar un impacto positivo en el crecimiento de cada negocio.
          </p>
        </div>

        {/* Divisor */}
        <div className="w-full h-px bg-yellow-400/30 mb-8"></div>

        {/* Sección Visión */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-300 mb-3 border-l-4 border-yellow-400 pl-3">
            Visión
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Mi visión es convertirme en un aliado estratégico para pequeños y medianos negocios que desean crecer en Internet,
            ofreciéndoles servicios accesibles, confiables y personalizados que conviertan sus ideas en proyectos exitosos.
          </p>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Quiero trabajar de manera cercana, de persona a persona, entendiendo las necesidades reales de cada emprendedor
            y creando soluciones que se adapten a su realidad. Mi filosofía es clara: un verdadero ganar-ganar, donde tanto
            el negocio como yo crecemos juntos.  
          </p>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Mi objetivo es que cada cliente sienta confianza, acompañamiento y resultados tangibles, logrando que su presencia
            digital no solo sea funcional, sino también un motor que impulse su crecimiento y el de su comunidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mision;
