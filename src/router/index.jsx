// src/router/index.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Precios from "../pages/Precios";
import Clientes from "../pages/Clientes";
import Contacto from "../pages/Contacto";
import Secc2 from "../pages/Secc2";
import Precios2 from "../pages/Precios2";

export default function AppRouter() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/secc2" element={<Secc2 />} />
          <Route path="/precios2" element={<Precios2 />} />
      </Routes>
  
  );
}
