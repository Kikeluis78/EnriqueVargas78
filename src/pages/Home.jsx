// src/pages/Home.jsx
import { useEffect, useState } from "react";
import Biografia from "../components/Biografia";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const phrases = [
  "Visitantes en clientes",
  "Diseños increíbles",
  "Marketing digital",
];

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Typing effect
  useEffect(() => {
    let interval;

    if (typing) {
      interval = setInterval(() => {
        setCurrentText(phrases[phraseIndex].substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);

      if (charIndex >= phrases[phraseIndex].length) {
        setTyping(false);
        clearInterval(interval);
        setTimeout(() => setCharIndex(phrases[phraseIndex].length - 1), 600);
      }
    } else {
      interval = setInterval(() => {
        setCurrentText(phrases[phraseIndex].substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);

      if (charIndex <= 0) {
        clearInterval(interval);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTyping(true);
      }
    }

    return () => clearInterval(interval);
  }, [charIndex, typing, phraseIndex]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      // Limitar movimiento en móviles
      setOffsetY(scroll < 300 ? scroll * 0.3 : 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex-grow w-full overflow-x-hidden">
      {/* Banner Hero con Parallax */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/banner 1.jpg')",
          backgroundPositionY: `-${offsetY}px`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-6 h-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-xl leading-tight mt-20 text-center tracking-wide"
            data-aos="fade-down"
          >
            <span className="block text-gray-200 mb-2">Diseño y Desarrollo</span>
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Web & Android
            </span>
          </h1>

          <p
            className="text-base sm:text-xl md:text-3xl text-yellow-300 mt-4 font-semibold"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <span className="text-blue-100">{currentText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </section>

      {/* Sección Biografía con Swiper */}
      <section className="bg-black text-white w-full py-12" id="Secc2">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-300">
            Mi Trayectoria
          </h2>

          <Swiper
            spaceBetween={16}
            slidesPerView={"auto"}
            className="py-4"
          >
            <SwiperSlide className="w-[300px] md:w-[400px]">
              <Biografia title="Experiencia Frontend" content="React, Vue, Tailwind CSS, Animaciones y Microinteracciones." />
            </SwiperSlide>
            <SwiperSlide className="w-[300px] md:w-[400px]">
              <Biografia title="Desarrollo Móvil" content="Apps Android nativas y con Capacitor/React Native." />
            </SwiperSlide>
            <SwiperSlide className="w-[300px] md:w-[400px]">
              <Biografia title="Backend y APIs" content="Node.js, Python, bases de datos y APIs REST." />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
