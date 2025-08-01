import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

   return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
  <img
    src="/logo.png"
    alt="Logo Chabeve"
    className="h-10 w-auto"
  />
  <span className="text-2xl font-semibold text-gray-800">Chabeve</span>
</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li className="hover:text-green-600 cursor-pointer">Inicio</li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen("catalogo")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            Catálogo
            <ul
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded transition-opacity duration-200 ${
                dropdownOpen === "catalogo" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-green-50">Macetas Pequeñas</li>
              <li className="px-4 py-2 hover:bg-green-50">Macetas Grandes</li>
              <li className="px-4 py-2 hover:bg-green-50">Set de Macetas</li>
              <li className="px-4 py-2 hover:bg-green-50">Macetas con Plantas</li>
            </ul>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen("inspiracion")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            Inspiración
            <ul
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded transition-opacity duration-200 ${
                dropdownOpen === "inspiracion" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-green-50">Ideas de Decoración</li>
              <li className="px-4 py-2 hover:bg-green-50">Cuidado de Plantas</li>
              <li className="px-4 py-2 hover:bg-green-50">Tendencias</li>
            </ul>
          </li>

          <li className="hover:text-green-600 cursor-pointer">Sobre Nosotros</li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen("servicios")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            Servicios
            <ul
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded transition-opacity duration-200 ${
                dropdownOpen === "servicios" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-green-50">Asesoría en Diseño</li>
              <li className="px-4 py-2 hover:bg-green-50">Envíos y Garantías</li>
            </ul>
          </li>

          <li className="hover:text-green-600 cursor-pointer">Contacto</li>
        </ul>

        {/* Call to Action Button Desktop */}
        <button className="hidden md:block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
          Compra Ahora
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4 font-medium text-gray-700">
            <li className="cursor-pointer hover:text-green-600">Inicio</li>

            <li>
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === "catalogo" ? null : "catalogo")
                }
                className="flex justify-between w-full focus:outline-none"
              >
                Catálogo
                <span>{dropdownOpen === "catalogo" ? "▲" : "▼"}</span>
              </button>
              {dropdownOpen === "catalogo" && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li className="hover:text-green-600 cursor-pointer">Macetas Pequeñas</li>
                  <li className="hover:text-green-600 cursor-pointer">Macetas Grandes</li>
                  <li className="hover:text-green-600 cursor-pointer">Sets de Macetas</li>
                  <li className="hover:text-green-600 cursor-pointer">Macetas con Plantas</li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === "inspiracion" ? null : "inspiracion")
                }
                className="flex justify-between w-full focus:outline-none"
              >
                Inspiración
                <span>{dropdownOpen === "inspiracion" ? "▲" : "▼"}</span>
              </button>
              {dropdownOpen === "inspiracion" && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li className="hover:text-green-600 cursor-pointer">Ideas de Decoración</li>
                  <li className="hover:text-green-600 cursor-pointer">Cuidado de Plantas</li>
                  <li className="hover:text-green-600 cursor-pointer">Tendencias</li>
                </ul>
              )}
            </li>

            <li className="hover:text-green-600 cursor-pointer">Sobre Nosotros</li>

            <li>
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === "servicios" ? null : "servicios")
                }
                className="flex justify-between w-full focus:outline-none"
              >
                Servicios
                <span>{dropdownOpen === "servicios" ? "▲" : "▼"}</span>
              </button>
              {dropdownOpen === "servicios" && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li className="hover:text-green-600 cursor-pointer">Asesoría en Diseño</li>
                  <li className="hover:text-green-600 cursor-pointer">Envíos y Garantías</li>
                </ul>
              )}
            </li>

            <li className="hover:text-green-600 cursor-pointer">Contacto</li>

            <li>
              <button className="w-full bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
                Compra Ahora
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
