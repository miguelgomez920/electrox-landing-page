import { useState } from "react";

export default function Peticion() {
  const [noSize, setNoSize] = useState(120); // tamaño inicial en px
  const [noClicks, setNoClicks] = useState(0);
  const [disappeared, setDisappeared] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoClick = () => {
    if (noSize <= 20) {
      setDisappeared(true);
      return;
    }

    setNoSize((prev) => Math.max(prev - 20, 10));
    setNoClicks((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  const getMessage = () => {
    if (yesClicked) return "Sabía que no te ibas a resistir 😎💘";
    if (disappeared) return "Ups… ya no puedes decir que no 😌❤️";
    if (noClicks === 0) return "Intenta darle al NO… si puedes 👀";
    if (noClicks < 3) return "Se te está encogiendo el no 😏";
    if (noClicks < 6) return "Ya casi ni se ve ese no 😂";
    return "Acepta de una vez, no seas terco 😭";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-orange-400">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center text-white">
        {!yesClicked ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow">
              ¿Quieres ser mi novia? 💖
            </h1>
            <p className="text-sm md:text-base text-pink-100 mb-6">
              Este sistema cuenta con protección anti-&quot;No&quot; avanzada 😌
            </p>

            <p className="text-xs md:text-sm text-pink-100 mb-8 italic">
              {getMessage()}
            </p>

            <div className="flex flex-col gap-6 items-center">
              {/* Botón SÍ */}
              <button
                onClick={handleYesClick}
                className="px-10 py-3 rounded-full bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-semibold shadow-lg transition transform active:scale-95"
              >
                Sí 💓
              </button>

              {/* Botón NO que se hace chiquito */}
              {!disappeared && (
                <button
                  onClick={handleNoClick}
                  style={{
                    width: `${noSize}px`,
                    height: `${noSize * 0.6}px`,
                    fontSize: `${Math.max(noSize / 6, 10)}px`,
                  }}
                  className="rounded-full bg-rose-600 hover:bg-rose-700 shadow-md transition-all duration-150 flex items-center justify-center select-none active:scale-95"
                >
                  No 💔
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Dijiste que SÍ! 🥹💘
            </h2>
            <p className="text-sm md:text-base text-pink-100 mb-3">
              El botón de &quot;No&quot; nunca tuvo oportunidad de verdad 😏
            </p>
            <p className="text-xs text-pink-200">
              Cláusula 1: estás oficialmente atrapada/o en este meme romántico.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
