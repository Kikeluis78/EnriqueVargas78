// src/pages/Contacto.jsx
import { useRef, useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contacto() {
  const formRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = formRef.current;

    const nombre = formEl["nombre"].value.trim();
    const negocio = formEl["negocio"].value.trim();
    const giro = formEl["giro"].value.trim();
    const telefono = formEl["telefono"].value.trim();
    const correo = formEl["correo"].value.trim();

    if (!nombre || !negocio || !giro || !telefono || !correo) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de enviar.",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!isValidEmail(correo)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Introduce un correo electrónico válido (ej. usuario@dominio.com).",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

    const isValidPhone = (phone) => /^\d{10}$/.test(phone);
    if (!isValidPhone(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Teléfono inválido",
        text: "El número debe tener exactamente 10 dígitos (solo números).",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

    Swal.fire({
      title: "Enviando...",
      allowOutsideClick: false,
      showConfirmButton: false,
      background: "#1f2937",
      color: "#f9fafb",
      didOpen: () => {
        Swal.showLoading();
        setTimeout(() => {
          formEl.submit();
          Swal.fire({
            icon: "success",
            title: "Datos enviados",
            text: "Tus datos fueron enviados exitosamente.",
            confirmButtonColor: "#2563EB",
            background: "#1f2937",
            color: "#f9fafb",
          });
          formEl.reset();
        }, 800);
      },
    });
  };

  const steps = [
    "Manda tus datos",
    "Firma tu contrato",
    "50% de anticipo",
    "Revisa y apruebas",
    "Tu web o app online",
    "Liquida tu pago",
  ];

  return (
    <div className="min-h-screen bg-black text-yellow-300 flex flex-col items-center px-4 py-8 md:py-10">
      <h1
        className="text-2xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg normal-case"
        data-aos="fade-down"
      >
        ¿Listo para comenzar tu Web?
      </h1>
      <p
        className="text-gray-300 text-center max-w-xl mb-6 md:mb-8 text-base md:text-lg normal-case"
        data-aos="fade-up"
      >
        Solo necesito algunos datos para comenzar a trabajar en tu proyecto.
      </p>

      {/* Timeline */}
      <div className="w-full max-w-5xl mb-10 md:mb-12">
        {/* Desktop: timeline horizontal */}
        <div className="hidden md:flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-600"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-1/6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg normal-case"
              data-aos="zoom-in"
            >
              <div className="circle-pulse w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold z-10">
                {index + 1}
              </div>
              <p className="mt-2 text-gray-300 text-sm md:text-base">{step}</p>
            </div>
          ))}
        </div>

        {/* Mobile: timeline horizontal scroll */}
        <div className="flex gap-4 md:hidden overflow-x-auto snap-x snap-mandatory p-2 scroll-smooth no-scrollbar">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center bg-gray-900 border border-blue-500 rounded-lg p-4 shadow-sm min-w-[140px] text-center normal-case"
              data-aos="fade-up"
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-2">
                {index + 1}
              </div>
              <p className="text-gray-300 text-[11px]">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <form
        ref={formRef}
        target="dummyFrame"
        action="https://script.google.com/macros/s/AKfycbxRLOBv59HTTmL_zhVDuH-8cCNzZEoNLbDCJIMoS9by8VNLdJREX79DdR3OnerkVFKdPw/exec"
        method="POST"
        onSubmit={handleSubmit}
        className="bg-gray-900 border-2 border-blue-500 rounded-xl w-full max-w-md p-4 md:p-6 space-y-3 normal-case"
        style={{ boxShadow: "0 0 10px #00bfae, 0 0 20px #00bfae" }}
        noValidate
        data-aos="fade-up"
      >
        <iframe name="dummyFrame" style={{ display: "none" }}></iframe>

        {["nombre", "negocio", "giro", "telefono", "correo"].map((field) => (
          <input
            key={field}
            type={field === "correo" ? "email" : "text"}
            name={field}
            placeholder={
              field === "correo"
                ? "Correo Electrónico"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            className="w-full px-3 py-2 md:py-3 bg-black border border-blue-500 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200 text-sm md:text-base normal-case"
          />
        ))}

        <button
          type="submit"
          className="w-full font-semibold py-3 md:py-3 rounded-full text-white normal-case transition-transform duration-300 hover:scale-105 text-sm md:text-base"
          style={{ background: "linear-gradient(to right, #f472b6, #a78bfa, #60a5fa)" }}
        >
          Enviar
        </button>
      </form>

      {/* Animación CSS para pulsos */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.7); }
          70% { box-shadow: 0 0 0 15px rgba(59,130,246,0); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        .circle-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
