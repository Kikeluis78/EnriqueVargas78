import React, { useState, useEffect } from "react";
import whatsappLogo from "../assets/whatsapp.svg";

export default function WhatsAppButton() {
  const [isLarge, setIsLarge] = useState(false);
  const whatsappUrl = "https://wa.me/5611001627";

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLarge((prev) => !prev);
    }, 15000); // alterna cada 15 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-26 right-0 z-40 flex flex-col items-center">
      {/* Texto dinámico */}
      {isLarge && (
        <span className="mb-2 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm transition-all duration-500">
          ¿Necesitas ayuda?
        </span>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* Onda pulsante */}
          <span
            className={`absolute rounded-full bg-green-400 opacity-30 animate-ping 
                        ${isLarge ? "w-28 h-28" : "w-24 h-24"} `}
          ></span>

          {/* Botón principal */}
          <div
            className={`flex items-center justify-center rounded-full border-2 border-green-400
                        bg-green-500 transition-all duration-700 transform
                        ${isLarge ? "w-20 h-20 scale-90 shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(34,197,94,0.3)]"
                                   : "w-16 h-16 scale-80 shadow-[0_0_12px_rgba(34,197,94,0.4),0_0_24px_rgba(34,197,94,0.2)]"} 
                        hover:scale-105`}
          >
            <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8 object-contain" />
          </div>
        </div>
      </a>
    </div>
  );
}
