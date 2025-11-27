import { useState } from "react";

export default function Peticion2() {
  const [noPos, setNoPos] = useState({ top: "70%", left: "50%" });
  const [yesClicked, setYesClicked] = useState(false);

  const escape = () => {
    const randomTop = Math.random() * 80 + 10; // 10% - 90%
    const randomLeft = Math.random() * 80 + 10;

    setNoPos({
      top: `${randomTop}%`,
      left: `${randomLeft}%`
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200 relative">
      {!yesClicked ? (
        <div className="text-center bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-pink-300 max-w-sm relative overflow-hidden">
          {/* Corazón animado */}
          <div className="absolute top-0 left-0 right-0 mx-auto w-20 h-20 animate-bounce">
            ❤️
          </div>

          <h1 className="mt-16 text-3xl font-bold text-pink-600 drop-shadow">
            ¿Quieres ser mi novia? 💖
          </h1>

          <p className="text-pink-500 mt-3 text-sm">
            Prometo no molestarte (mucho) 😳
          </p>

          <div className="relative h-52 mt-10">
            {/* Botón SI */}
            <button
              onClick={() => setYesClicked(true)}
              className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 rounded-full font-semibold shadow-lg transition active:scale-95"
            >
              Sí 😍
            </button>

            {/* Botón NO que se mueve */}
            <button
              onMouseEnter={escape}
              onClick={escape}
              style={{
                position: "absolute",
                top: noPos.top,
                left: noPos.left,
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              className="px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-full shadow-md text-white active:scale-95"
            >
              No 😭
            </button>
          </div>
        </div>
      ) : (
        // Pantalla final
        <div className="flex flex-col items-center text-center bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-pink-300">
          <h2 className="text-4xl font-bold text-pink-600">🥰💘</h2>
          <h2 className="text-2xl mt-3 font-semibold text-pink-700">
            ¡Sabía que dirías que sí!
          </h2>

          <p className="text-pink-500 mt-3">
            Te ganaste un novio 100% legal 🔥😎
          </p>

          <p className="text-xs text-pink-400 mt-2">
            (Las cláusulas del contrato incluyen abrazos obligatorios.)
          </p>
        </div>
      )}
    </div>
  );
}
