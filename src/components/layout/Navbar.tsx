import { NavLink } from "react-router-dom";

const navLinkClasses =
  "text-sm md:text-base font-medium px-2 md:px-3 py-1 rounded hover:bg-slate-100 transition";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">
            {/* Uni<span className="text-unidalRed">Dal</span> */}
            <img src="/images/logo_unidal_editado.png" alt="UniDal" className="h-12 md:h-14 w-auto" />
          </span>
        </NavLink>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/sobre-nos" className={navLinkClasses}>
            Sobre Nós
          </NavLink>
          <NavLink to="/servicos" className={navLinkClasses}>
            Serviços
          </NavLink>
          <NavLink to="/projetos" className={navLinkClasses}>
            Projetos
          </NavLink>
          <NavLink to="/contactos" className={navLinkClasses}>
            Contactos
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">

          <a
            href="https://instagram.com/unidallda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-unidalRed transition"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>

          <a
            href="https://facebook.com/profile.php?id=61557585008530"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-unidalRed transition"
          >
            <i className="fab fa-facebook text-xl"></i>
          </a>

          <a
            href="https://wa.me/351913626404"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-unidalRed transition"
          >
            <i className="fab fa-whatsapp text-xl"></i>
          </a>

        </div>

        {/* CTA */}
        <a
          href="/contactos"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-unidalRed hover:opacity-90 transition"
        >
          Pedir Orçamento
        </a>
      </div>
    </header>
  );
}
