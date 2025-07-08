import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center p-6 h-[calc(100vh-4rem)]">
        <img
          src="/logo.png"
          alt="Logo Chabebe"
          className="h-40 object-contain mb-6"
        />
        <h1 className="text-4xl font-bold text-amber-700 mb-4">
          Bienvenido a Chabebe
        </h1>
        <p className="text-lg text-gray-600">Donde las macetas hablan por ti 🌱</p>
      </main>

      <section className="bg-white py-12 px-6 text-center">
  <h2 className="text-3xl font-bold text-amber-700 mb-8">Nuestras Macetas</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Producto 1 */}
    <div className="bg-gray-50 rounded-2xl shadow-md p-4">
      <img
        src="/maceta-dboe600.jpg"
        alt="Maceta DBOE600"
        className="w-full h-64 object-contain mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Modelo DBOE600</h3>
      <p className="text-sm text-gray-600 mb-4">
        Dimensiones: 595 × 395 × 380 mm
      </p>
      <div className="flex justify-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-[#A79E94]" title="S449"></div>
        <div className="w-6 h-6 rounded-full bg-[#B5B8B1]" title="Pantone 443U"></div>
        <div className="w-6 h-6 rounded-full bg-[#6B656D]" title="Pantone 2411U"></div>
        <div className="w-6 h-6 rounded-full bg-[#2D2D2D]" title="Pantone 419U"></div>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Ver más
      </button>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;