// src/components/SidebarMenu.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Wallet, UsersRound, Mail } from "lucide-react";

export default function SidebarMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile) setMenuOpen(false);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuClose = () => {
    if (isMobile) setMenuOpen(false);
  };

  const links = [
    {
      icon: <Home className="h-8 w-8 text-white transition-colors duration-300" />,
      label: "Home",
      to: "/",
      bg: "bg-blue-600 hover:bg-blue-800",
    },
    {
      icon: <Wallet className="h-8 w-8 text-white transition-colors duration-300" />,
      label: "Precios",
      to: "/precios",
      bg: "bg-green-600 hover:bg-green-800",
    },
    {
      icon: <UsersRound className="h-8 w-8 text-white transition-colors duration-300" />,
      label: "Clientes",
      to: "/clientes",
      bg: "bg-orange-500 hover:bg-orange-700",
    },
    {
      icon: <Mail className="h-8 w-8 text-white transition-colors duration-300" />,
      label: "Contacto",
      to: "/contacto",
      bg: "bg-purple-600 hover:bg-purple-800",
    },
  ];

  return (
    <div>
      {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-md focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen.toString()}
        aria-label="Abrir menú de navegación"
      >
        {!menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Overlay móvil */}
      {menuOpen && isMobile && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={handleMenuClose}
        ></div>
      )}

      {/* Menú lateral */}
      {(menuOpen || !isMobile) && (
        <div
          className={`fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40 transition-all duration-500 bg-white/10 backdrop-blur-md p-2 rounded-xl shadow-xl
          ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16 md:opacity-100 md:translate-x-0"}`}
        >
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              onClick={handleMenuClose}
              className={`group flex items-center rounded-full ${link.bg} w-14 h-14 hover:w-52 transition-all duration-500 ease-out cursor-pointer overflow-hidden`}
            >
              <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
                {link.icon}
              </div>
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap text-lg font-bold">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
