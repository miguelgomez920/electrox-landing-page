

import logitechG733Img from "../assets/Products/logitechG733.png";
import redragonM901Img from "../assets/Products/redragon_M901.png";
import redragonK530Img from "../assets/Products/redragon_K530.png";

const CollectionSection = () => {
    return (

        <>
        
       

        <section className="py-20 bg-black/90">
  <div className="max-w-4xl mx-auto relative px-4">

    {/* Tarjeta principal */}
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Visual productos */}
        <div className="flex flex-col items-center md:items-start gap-5">
          <div className="grid grid-cols-3 gap-4 w-full">
            {/* Audífonos */}
            <div className="bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between">
              <img
                src={logitechG733Img}
                alt="Audífonos Logitech G733"
                className="h-16 sm:h-20 object-contain drop-shadow"
              />
              <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
                Logitech G733
              </p>
              <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
                Audio Pro
              </span>
            </div>

            {/* Mouse */}
            <div className="bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between">
              <img
                src={redragonM901Img}
                alt="Mouse Redragon M901"
                className="h-16 sm:h-20 object-contain drop-shadow"
              />
              <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
                Redragon M901
              </p>
              <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
                Precisión
              </span>
            </div>

            {/* Teclado */}
            <div className="bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between">
              <img
                src={redragonK530Img}
                alt="Teclado Redragon K530"
                className="h-16 sm:h-20 object-contain drop-shadow"
              />
              <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
                Redragon K530
              </p>
              <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
                60% Compacto
              </span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 text-center md:text-left">
            Selección curada para streaming, gaming y trabajo híbrido.
          </p>
        </div>

        {/* Texto */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
            Setup Pro — Ultimate Pack
          </p>

          <h3 className="text-xl sm:text-2xl font-bold">
            Un solo bundle para completar tu escritorio
          </h3>

          <p className="text-sm text-gray-300">
            Combina audio de estudio, escritura compacta y precisión milimétrica
            en un pack pensado para creadores, gamers y profesionales.
          </p>

          <div className="border-l border-white/10 pl-4 space-y-1 text-sm text-gray-300">
            <p>• Logitech G733 — sonido envolvente y cómodo.</p>
            <p>• Redragon K530 — teclado 60% que libera espacio.</p>
            <p>• Redragon M901 — mouse gamer de alto DPI.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-gray-300">
            <span className="px-2 py-1 rounded-full bg-white/5">Streaming</span>
            <span className="px-2 py-1 rounded-full bg-white/5">Gaming</span>
            <span className="px-2 py-1 rounded-full bg-white/5">Home Office</span>
          </div>
        </div>
      </div>
    </div>

    {/* Tarjeta flotante precio */}
    <div className="absolute bottom-0 right-0 translate-y-1/3 bg-black/85 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl w-[210px]">
    
      <p className="text-2xl font-bold leading-none">$199.99</p>
      <p className="text-gray-400 text-xs line-through mt-1">$229.99</p>
      <button className="mt-3 w-full bg-primary py-1.5 rounded-full text-sm hover:scale-105 transition">
        Añadir
      </button>
    </div>

  </div>
        </section>

        </>
    )
}

export default CollectionSection;