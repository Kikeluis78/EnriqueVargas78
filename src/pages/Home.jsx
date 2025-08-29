// src/pages/Home.jsx
import { useEffect, useState } from "react";
import Biografia from "../components/Biografia";

const phrases = [
  "Visitantes en clientes",
  "Diseños increíbles ",
  "Marketing digital",
];

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0); // Parallax

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
      setOffsetY(window.scrollY * 0.5); // ajuste de velocidad del parallax
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex-grow w-full">
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

      {/* Sección Biografía */}
      <section className="bg-black text-white w-full overflow-x-hidden" id="Secc2">
        <Biografia />
      </section>
    </main>
  );
}
