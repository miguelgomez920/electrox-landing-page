import headsetImg from "../assets/Hero/headset.png";
import mouseImg from "../assets/Hero/mouse.png";
import keyboardImg from "../assets/Hero/keyboard.png";
import microphoneImg from "../assets/Hero/microphone.png";
import monitorImg from "../assets/Hero/monitor-screen.png";
import ssdImg from "../assets/Hero/ssd.png";


const Hero = () => {
  return (
    // <section
    //   id="inicio"
    //   className="pt-10 sm:pt-16 lg:pt-20 pb-12 flex flex-col lg:flex-row items-center gap-10"
    // >
    //   {/* div de eleva tu experiencia */}
    //   <div className="flex-1 space-y-6">
    //     <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary/80">
    //     Setup · Audio · Periféricos
    //     </p>
    //     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
    //       Eleva tu experiencia con{" "}
    //       <span className="text-primary">dispositivos electrónicos</span>{" "}
    //       diseñados para rendir.
    //     </h1>
    //     <p className="text-gray-300 max-w-xl">
    //       Audífonos, teclados mecánicos, mouses y accesorios para que tu setup
    //       se vea y suene como siempre quisiste. Calidad seleccionada y envío
    //       rápido.
    //     </p>
    //     <div className="flex flex-wrap gap-4">
    //       <a
    //         href="#productos"
    //         className="bg-primary px-6 py-3 rounded-full font-medium text-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition"
    //       >
    //         Explorar productos
    //       </a>
    //       <a
    //         href="#ofertas"
    //         className="border border-white/20 px-6 py-3 rounded-full font-medium text-sm text-gray-200 hover:border-primary/70 hover:text-primary transition"
    //       >
    //         Ver ofertas especiales
    //       </a>
    //     </div>
    //     <div className="flex gap-8 pt-4 text-sm text-gray-400">
    //       <div>
    //         <span className="block font-semibold text-white">+5000</span>
    //         Clientes satisfechos
    //       </div>
    //       <div>
    //         <span className="block font-semibold text-white">24h</span>
    //         Envíos rápidos
    //       </div>
    //       <div>
    //         <span className="block font-semibold text-white">4.9★</span>
    //         Calificación promedio
    //       </div>
    //     </div>
    //   </div>

    //   {/* div de la card */}
    //   <div className="flex-1 w-full">
    //     <div className="relative max-w-md mx-auto">
    //       <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary/40 via-fuchsia-500/30 to-cyan-400/30 blur-2xl opacity-60" />

    //       <div className="relative bg-darkCard rounded-3xl border border-white/10 p-6 sm:p-8 shadow-xl">
    //         <div className="flex flex-col gap-5">
    //           <div className="flex items-center justify-between">
    //             <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
    //               Producto destacado
    //             </span>
    //             <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
    //               Nuevo
    //             </span>
    //           </div>
    //           <div className="h-40 sm:h-48 rounded-2xl bg-gradient-to-br from-primary/20 via-white/5 to-fuchsia-500/20 flex items-center justify-center">
    //             <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/20 bg-gradient-to-br from-black via-darkCard to-primary/40 shadow-lg flex items-center justify-center text-4xl sm:text-5xl">
    //               🎧
    //             </div>
    //           </div>
    //           <div className="space-y-1">
    //             <h2 className="text-lg sm:text-xl font-semibold">
    //               KZ ZA12 In-Ear Monitors
    //             </h2>
    //             <p className="text-sm text-gray-300">
    //               Sonido de alta fidelidad con 12 drivers híbridos, ideal para
    //               música, gaming y mezcla.
    //             </p>
    //           </div>
    //           <div className="flex items-center justify-between">
    //             <div>
    //               <p className="text-xs text-gray-400 uppercase">Desde</p>
    //               <p className="text-xl font-semibold">$79.99</p>
    //             </div>
    //             <button className="bg-white text-black text-sm px-4 py-2 rounded-full font-medium hover:scale-105 transition">
    //               Añadir al carrito
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="inicio" className="scroll-mt-20 flex flex-col md:flex-row md:justify-around gap-16 py-12  ">
      {/* div de eleva tu experiencia */}
      <div className="flex flex-col gap-6 md:w-[50%] ">
        <span className="text-[13px] sm:text-sm text-primary tracking-[0.25em]">
          SETUP · AUDIO · PERIFÉRICOS
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold ">
          Eleva tu experiencia con{" "}
          <span className="text-primary">dispositivos electrónicos </span>
          diseñados para rendir.
        </h1>
        <p className="text-[15px] sm:text-[1rem] text-neutral-400">
          Audífonos, teclados mecánicos, mouses y accesorios para que tu setup
          se vea y suene como siempre quisiste. Calidad seleccionada y envío
          rápido.
        </p>
        <div className="flex flex-wrap items-start gap-3">
          <a
            href="#productos"
            className="text-sm font-medium bg-primary px-3 py-2 md:py-3 md:px-5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition"
          >
            Explorar productos
          </a>
          <a
            href="#ofertas"
            className="text-sm font-medium border px-3 py-2 md:py-3 md:px-5 rounded-full hover:border-primary hover:text-primary transition"
          >
            Ver ofertas especiales
          </a>
        </div>
        <div className="flex gap-6">
          <div>
            <h1 className="text-sm">+5000</h1>
            <p className="text-sm text-neutral-400 ">Clientes satisfechos</p>
          </div>
          <div>
            <h1 className="text-sm">24h</h1>
            <p className="text-sm text-neutral-400">Envíos rápidos</p>
          </div>
          <div>
            <h1 className="text-sm">4.9⭐</h1>
            <p className="text-sm text-neutral-400">Calificación promedio</p>
          </div>
        </div>
      </div>

      {/* div de carta */}
      <div className="relative md:w-[40%]">
        {/* Glow morado externo */}
        <div className="absolute -inset-1 rounded-4xl bg-linear-to-r from-primary/40 via-fuchsia-500/30 to-cyan-400/30 blur-2xl opacity-60"></div>

        <div className="relative  flex flex-col  gap-5 p-4">
          <div className="flex gap-5 justify-between">
            <span className="text-sm text-gray-400">
              TU ESCRITORIO · TU ESTILO
            </span>
            <span className="text-sm">
              Envíos a <span className="text-primary">Colombia</span>
            </span>
          </div>

          <div className=" md:h-70 flex justify-center items-center p-4 bg-linear-to-br from-primary/20 via-white/5 to-fuchsia-500/20 border border-white/10 rounded-4xl">
            <div className="grid grid-cols-4 grid-rows-3 gap-3">
              <div className="col-span-3  text-3xl flex justify-center items-center bg-black/40 rounded-lg p-2 ">
                 <img
                    className="w-10 h-10"
                    src={headsetImg}
                    alt="headset"                  
                  />
              </div>
              <div className="row-span-2 text-3xl  flex justify-center items-center bg-black/40 rounded-lg p-2 ">
                 <img
                    className="w-10 h-10"
                    src={mouseImg}
                    alt="mouse"                  
                  />
              </div>
              <div className="row-span-2 text-3xl  flex justify-center items-center bg-black/40 rounded-lg p-2">
                <img
                    className="w-10 h-10"
                    src={keyboardImg}
                    alt="keyboard"                  
                  />
              </div>
              <div className="col-span-2 text-3xl flex justify-center items-center bg-black/40 rounded-lg p-2">
                 <img
                    className="w-10 h-10"
                    src={microphoneImg}
                    alt="microphone"                  
                  />
              </div>
              <div className="col-span-1 text-3xl flex justify-center items-center bg-black/40 rounded-lg p-2">
                 <img
                    className="w-10 h-10"
                    src={monitorImg}
                    alt="monitor-screen"                  
                  />
              </div>
              <div className="col-span-2 text-3xl flex justify-center items-center bg-black/40 rounded-lg p-2">
                <img
                    className="w-10 h-10"
                    src={ssdImg}
                    alt="ssd"                  
                  />
              </div>
            </div>
          </div>

          <div className="flex gap-5  justify-between  ">
            <div  >
              <h1 className="text-sm">Entrega segura</h1>
              <p className="text-sm text-neutral-400">
                Empaque protegido y rastreo
              </p>
            </div>
            <div className="pl-15 lg:pl-0" >
              <h1 className="text-sm text-green-400  ">Pagos seguros</h1>
              <p className="text-sm text-neutral-400 ">
                Tus datos siempre protegidos
              </p>
            </div>
          </div>
        </div>
      </div>






    </section>
     
  );
};

export default Hero;
