export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-300 px-4">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-6">Página no encontrada</p>
      <a
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-black rounded-xl font-bold hover:scale-105 transition-transform"
      >
        Volver al inicio
      </a>
    </div>
  );
}
