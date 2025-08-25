// ================================
// 🔹 Lógica para "Tienda Online"
// ================================

// Submenú de opciones para Tienda Online
export const submenuTienda = [
  "Características",
  "Tiempo de Entrega",
  "Formas de Pago",
  "Garantía",
  "Soporte Técnico",
  "Alojamiento",
  "Dominio",
  "SEO Avanzado",
  "Carrito de Compras",
  "Mantenimiento",
];

// 🔹 Menú principal completo (mismo que en todas las lógicas)
export const menuPrincipal = [
  "Página Básica",
  "Tienda Online",
  "Aplicación Android",
  "Página Personalizada",
  "Página Gratis",
  "Aplicación Android Gratis",
  "Sitio Web de Reservas",
];

// ================================
// 📌 Función de lógica
// ================================
export default function logicaTiendaOnline(mensaje) {
  const normalizado = mensaje.toLowerCase();

  // Respuestas del submenú de Tienda Online
  if (normalizado.includes("caracter")) {
    return {
      texto:
        "🛒 Una *Tienda Online* incluye: catálogo ilimitado de productos, carrito de compras, gestión de inventario, integración con pagos en línea y diseño adaptable.",
      submenu: submenuTienda,
    };
  }

  if (normalizado.includes("tiempo")) {
    return {
      texto:
        "⏳ El *tiempo de entrega* de una Tienda Online es de 10 a 15 días hábiles, dependiendo de la cantidad de productos iniciales que desees cargar.",
      submenu: submenuTienda,
    };
  }

  if (normalizado.includes("pago")) {
    return {
      texto:
        "💳 *Formas de pago*: aceptamos tarjeta de crédito/débito, PayPal, Stripe y transferencias bancarias. También puedes habilitar pagos contra entrega si lo prefieres.",
      submenu: submenuTienda,
    };
  }

  if (normalizado.includes("garant")) {
    return {
      texto:
        "🛡️ Todas nuestras Tiendas Online tienen *60 días de garantía*, para corregir errores técnicos y ajustar la configuración inicial.",
      submenu: submenuTienda,
    };
  }

  if (normalizado.includes("soporte")) {
    return {
      texto:
        "🤝 Incluye *soporte técnico básico por 60 días*. También ofrecemos planes de soporte mensual con actualizaciones de seguridad y gestión de productos.",
      submenu: submenuTienda,
    };
  }

  // === Preguntas abiertas ===
  if (
    normalizado.includes("alojamiento") ||
    normalizado.includes("hosting") ||
    normalizado.includes("server")
  ) {
    return {
      texto:
        "☁️ Para una Tienda Online recomendamos *alojamiento especializado en e-commerce*, rápido y seguro. Podemos asesorarte con los mejores proveedores.",
      submenu: submenuTienda,
    };
  }

  if (normalizado.includes("dominio") || normalizado.includes("url")) {
    return {
      texto:
        "🌐 El *dominio* no está incluido, pero lo gestionamos por ti. Generalmente cuesta entre 10 y 15 USD al año.",
      submenu: submenuTienda,
    };
  }

  if (normalizado.includes("seo") || normalizado.includes("posicionamiento")) {
    return {
      texto:
        "🔍 Para Tiendas Online recomendamos *SEO avanzado*: optimización de fichas de producto, meta etiquetas y velocidad. Ofrecemos planes profesionales.",
      submenu: submenuTienda,
    };
  }

  if (normalizado.includes("carrito") || normalizado.includes("compras")) {
    return {
      texto:
        "🛍️ La Tienda Online incluye *carrito de compras* con actualización en tiempo real, gestión de stock y posibilidad de cupones de descuento.",
      submenu: submenuTienda,
    };
  }

  if (
    normalizado.includes("mantenimiento") ||
    normalizado.includes("actualizacion") ||
    normalizado.includes("update")
  ) {
    return {
      texto:
        "🛠️ Ofrecemos planes de *mantenimiento mensual* que incluyen actualizaciones de seguridad, carga de productos y mejoras personalizadas.",
      submenu: submenuTienda,
    };
  }

  // Default
  return {
    texto:
      "🤔 No encontré una respuesta exacta, pero puedo ayudarte con información sobre Tiendas Online. Intenta con otra pregunta o selecciona una opción del menú.",
    submenu: submenuTienda,
  };
}
