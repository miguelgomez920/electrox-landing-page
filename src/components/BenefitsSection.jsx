import packageImg from "../assets/Benefits/package.png"
import securityImg from "../assets/Benefits/security.png"
import supportImg from "../assets/Benefits/support.png"


const Benefits = () => {
  return (
    <>
      {/* <section id="ofertas" className="py-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/3 space-y-4">
              <h2 className="text-2xl font-bold">¿Qué ganas con ElectroX?</h2>
              <p className="text-sm text-gray-300">
                Una experiencia premium desde que compras hasta que usas tu
                dispositivo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:w-2/3 gap-4">
              <div className="flex-1 p-4 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 border border-white/10">
                <span className="text-xs bg-primary/30 px-2 py-1 rounded-full">
                  Envíos
                </span>
                <p className="font-semibold mt-2">Envíos 24h</p>
                <p className="text-gray-300 text-xs mt-1">
                  Llegan más rápido que la competencia.
                </p>
              </div>

              <div className="flex-1 p-4 rounded-xl bg-linear-to-br from-fuchsia-500/20 to-fuchsia-500/5 border border-white/10">
                <span className="text-xs bg-fuchsia-500/30 px-2 py-1 rounded-full">
                  Seguridad
                </span>
                <p className="font-semibold mt-2">Pagos garantizados</p>
                <p className="text-gray-300 text-xs mt-1">
                  Protección avanzada en cada transacción.
                </p>
              </div>

              <div className="flex-1 p-4 rounded-xl bg-linear-to-br from-cyan-400/20 to-cyan-400/5 border border-white/10">
                <span className="text-xs bg-cyan-400/30 px-2 py-1 rounded-full">
                  Soporte
                </span>
                <p className="font-semibold mt-2">Garantía extendida</p>
                <p className="text-gray-300 text-xs mt-1">
                  Te acompañamos en cada paso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="ofertas" className="scroll-mt-20 flex flex-col md:flex-row gap-5  py-12  ">
        <div className="flex flex-col md:w-[33%] gap-3 ">
          <h2 className="text-3xl font-bold">¿Qué ganaras con ElectroX?</h2>
          <p className="text-[15px] text-gray-300">
            Una experiencia premium desde que compras hasta que usas tu
            dispositivo.
          </p>
        </div>

        <div className=" flex flex-col md:flex-row gap-4">
          <div className="relative overflow-hidden flex-1 flex flex-col gap-2  bg-linear-to-br from-primary/20 to-primary/5 border border-white/10 rounded-xl p-3 ">
            <img
              src={packageImg}
              alt="package"
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-20 rotate-[10deg] opacity-90"
            />
            <span className="w-fit text-sm bg-[#2A4471] rounded-full px-2 py-1">
              Envíos
            </span>
            <h1 className="z-10 text-[17px] font-semibold ">Envíos 24h</h1>
            <p className="z-10  text-[13px]">Llegan más rápido que la competencia</p>
          </div>

          <div className="relative overflow-hidden flex-1  flex flex-col  gap-2  bg-linear-to-br from-fuchsia-500/20 to-fuchsia-500/5 border border-white/10 rounded-xl p-3 ">
            <img
              src={securityImg}
              alt="security"
              className="absolute -right-5  top-1/2  -translate-y-1/2 w-20 rotate-[10deg] opacity-90"
            />
            <span className="w-fit text-sm bg-[#681A73] rounded-full px-2 py-1">
              Seguridad
            </span>
            <h1 className="z-10 text-[17px] font-semibold ">Pagos garantizados</h1>
            <p className="z-10 text-[13px]">Protección avanzada en cada transacción.</p>
          </div>

          <div className="relative overflow-hidden flex-1  flex flex-col gap-2  bg-linear-to-br from-cyan-400/20 to-cyan-400/5 border border-white/10 rounded-xl p-3 ">
            <img
              src={supportImg}
              alt="support"
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-20 rotate-[10deg] opacity-90"
            />
            <span className="w-fit text-sm bg-[#096271] rounded-full px-2 py-1">
              Soporte
            </span>
            <h1 className="z-10 text-[17px] font-semibold ">Garantía extendida</h1>
            <p className="z-10 text-[13px]">Te acompañamos en cada paso.</p>
          </div>
        </div>
      </section>



     


        
          




    </>
  );
};

export default Benefits;
