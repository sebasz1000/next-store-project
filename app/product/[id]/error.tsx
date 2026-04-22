"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-1 border-white p-10">
      <h2 className="text-2xl font-bold text-red-600">¡Algo salió mal!</h2>
      <p className="text-gray-500 my-4">{error.message}</p>
      <button
        onClick={() => reset()} // Intenta volver a renderizar el componente
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Reintentar
      </button>
    </div>
  );
}