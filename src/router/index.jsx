import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Precios from "../pages/Precios";
import Precios2 from "../pages/Precios2";
import Clientes from "../pages/Clientes";
import Contacto from "../pages/Contacto";
import Secc2 from "../pages/Secc2";
import NotFound from "../pages/NotFound"; // Página 404 personalizada

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/precios" element={<Precios />} />
      <Route path="/precios2" element={<Precios2 />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/secc2" element={<Secc2 />} />

      {/* Ruta para cualquier otro caso */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
