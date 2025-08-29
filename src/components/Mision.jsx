// src/components/Mision.jsx
import React from "react";

const Mision = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-2xl p-6 shadow-xl relative">
        
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-red-500"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Misión</h2>
        <p className="text-gray-700 mb-6">
          Mi misión es impulsar a emprendedores y negocios a tener presencia digital efectiva, 
          mediante sitios web profesionales, estrategias de marketing claras y soluciones prácticas 
          que generen resultados reales.
        </p>

        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Visión</h2>
        <p className="text-gray-700">
          Mi visión es convertirme en un aliado estratégico para quienes buscan crecer en Internet, 
          ofreciendo servicios accesibles, confiables y personalizados que transformen ideas en proyectos exitosos.
        </p>
      </div>
    </div>
  );
};

export default Mision;
