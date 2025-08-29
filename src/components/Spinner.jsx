import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/Android.png";
import img2 from "../assets/Capacitor.png";
import img3 from "../assets/Node.png";
import img4 from "../assets/js.png";
import img5 from "../assets/Vite.png";
import img6 from "../assets/python.png";

export default function Spinner() {
  const images = [img1, img2, img3, img4, img5, img6];
  const phrases = [
    "Diseñamos interfaces claras y atractivas.",
    "Maquetamos con semántica y accesibilidad.",
    "Performance primero: cargas rápidas.",
    "Responsive perfecto en todos los dispositivos.",
    "Microinteracciones que enamoran.",
    "De idea a prototipo… y a producción.",
  ];

  const durationPerStep = 1000; // ms
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 5 + 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoaded(true), 800);
      }
      setProgress(current);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loaded) {
      const interval = setInterval(() => {
        setTick((prev) => (prev + 1) % images.length);
      }, durationPerStep);
      return () => clearInterval(interval);
    }
  }, [loaded, images.length]);

  if (!loaded) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 px-4">
        <h1
          data-aos="zoom-in"
          className="mb-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 tracking-wide text-center max-w-[90%] break-words"
        >
          Enrique Vargas
        </h1>

        <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`tech-${i}`}
              className={`absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg transition-all duration-800 ease-in-out ${
                i === tick ? "opacity-100 scale-110" : "opacity-0 scale-75"
              }`}
            />
          ))}
        </div>

        <div className="w-full max-w-md h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div
            className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p
          key={tick}
          className="text-center font-semibold text-lg sm:text-xl bg-clip-text text-transparent transition-opacity duration-500"
          style={{ backgroundImage: "linear-gradient(90deg, #f472b6, #a78bfa, #60a5fa)" }}
        >
          {phrases[tick]}
        </p>
      </div>
    );
  }

  return null;
}
