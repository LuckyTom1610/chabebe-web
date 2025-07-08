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
    </div>
  );
}

export default App;