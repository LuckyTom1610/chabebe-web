import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-yellow-100 p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Chabebe</h1>
        <p className="text-lg">Macetas con carácter. Importación directa de diseño europeo.</p>
        <button className="mt-6 px-6 py-2 bg-yellow-400 text-white rounded-2xl shadow">
          Ver Catálogo
        </button>
      </section>

      {/* Catálogo */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Catálogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ejemplo de tarjeta de producto */}
          <div className="border p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/maceta-dboe600.jpg"
              alt="Maceta DBOE600"
              className="mb-4 rounded-xl"
            />
            <h3 className="text-lg font-semibold">DBOE600</h3>
            <p className="text-sm">595 × 395 × 380 mm</p>
            <p className="text-sm text-gray-500">Colores: S449, 443U, 2411U, 419U</p>
            <button className="mt-4 w-full py-1 bg-gray-900 text-white rounded-xl">
              Cotizar
            </button>
          </div>
          {/* Más tarjetas se pueden agregar aquí */}
        </div>
      </section>

      {/* Nosotros */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-2xl font-bold mb-4">Sobre Chabebe</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Chabebe nace con la idea de ofrecer macetas con diseño europeo a precios
          accesibles en Ecuador. Importamos directamente modelos seleccionados por su
          estética, durabilidad y estilo.
        </p>
      </section>

      {/* Contacto */}
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="p-2 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Correo"
            className="p-2 border rounded-xl"
          />
          <textarea
            placeholder="Mensaje"
            className="p-2 border rounded-xl"
            rows="4"
          ></textarea>
          <button className="py-2 bg-yellow-400 text-white rounded-xl">Enviar</button>
        </form>
      </section>
    </main>
  );
}