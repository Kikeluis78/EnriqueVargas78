import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Inicio", href: "https://ejemplo.com/inicio" },
    { label: "Sobre mí", href: "https://ejemplo.com/sobre-mi" },
    { label: "Portafolio", href: "https://ejemplo.com/portafolio" },
    { label: "Blog", href: "https://ejemplo.com/blog" },
    { label: "Contacto", href: "https://ejemplo.com/contacto" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/share/16GF1dVBJK/" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/enrique_vargas78/profilecard/?igsh=MWRkZXp2c3A1cHN0OQ==" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@enriqueg_v078?si=yNkYuswDl_eSaM_b" },
  ];

  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="mb-2 text-sm text-gray-400">&copy; 2025 Enrique Vargas. Todos los derechos reservados.</div>

      <nav className="mb-2 flex justify-center gap-4">
        {links.map((link, i) => (
          <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex justify-center gap-20 text-white text-lg">
        {socialLinks.map((social, i) => (
          <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
