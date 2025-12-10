/**
 * Hero Component
 *
 * Sección principal del landing page (hero section).
 * 
 * Este componente muestra:
 *  - Mensaje principal de marca y propuesta de valor.
 *  - Botones de navegación hacia productos y ofertas.
 *  - Métricas sociales (clientes, envíos, calificaciones).
 *  - Una tarjeta visual con íconos de productos (headset, mouse, teclado, etc.).
 * 
 * Funcionalidades / Propósito:
 *  - Atraer la atención inicial del usuario.
 *  - Guiar a secciones clave mediante botones con anclas.
 *  - Mostrar elementos visuales que refuerzan la temática tecnológica.
 * 
 * Estilizado usando Tailwind CSS:
 *  - Diseño responsive (stack en mobile, dos columnas en desktop).
 *  - Efectos de blur, gradientes y fondo translúcido.
 */

import headsetImg from "../assets/Hero/headset.png";
import mouseImg from "../assets/Hero/mouse.png";
import keyboardImg from "../assets/Hero/keyboard.png";
import microphoneImg from "../assets/Hero/microphone.png";
import monitorImg from "../assets/Hero/monitor-screen.png";
import ssdImg from "../assets/Hero/ssd.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="scroll-mt-20 flex flex-col md:flex-row md:justify-around gap-16 py-12  "
    >
      {/* ======================================
          Lado Izquierdo — Texto y llamada a acción
         ======================================= */}
      <div className="flex flex-col gap-6 md:w-[50%] ">
        {/* Categorías superiores */}
        <span className="text-[13px] sm:text-sm text-primary tracking-[0.25em]">
          SETUP · AUDIO · PERIFÉRICOS
        </span>

        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold ">
          Eleva tu experiencia con{" "}
          <span className="text-primary">dispositivos electrónicos </span>
          diseñados para rendir.
        </h1>

        {/* Descripción del Hero */}
        <p className="text-[15px] sm:text-[1rem] text-neutral-400">
          Audífonos, teclados mecánicos, mouses y accesorios para que tu setup
          se vea y suene como siempre quisiste. Calidad seleccionada y envío
          rápido.
        </p>

        {/* Botones principales (CTA) */}
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

        {/* Métricas / Social Proof */}
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
            <h1 className="text-sm">4.9 ⭐</h1>
            <p className="text-sm text-neutral-400">Calificación promedio</p>
          </div>
        </div>
      </div>

      {/* ======================================
          Lado Derecho — Tarjeta con íconos del setup
         ======================================= */}
      <div className="relative md:w-[40%]">
        {/* Glow morado externo */}
        <div className="absolute -inset-1 rounded-4xl bg-linear-to-r from-primary/40 via-fuchsia-500/30 to-cyan-400/30 blur-2xl opacity-60"></div>

        <div className="relative  flex flex-col  gap-5 p-4">
          {/* Encabezado de la tarjeta */}
          <div className="flex gap-5 justify-between">
            <span className="text-sm text-gray-400">
              TU ESCRITORIO · TU ESTILO
            </span>
            <span className="text-sm">
              Envíos a <span className="text-primary">Colombia</span>
            </span>
          </div>

          {/* Cuadrícula de íconos de productos */}
          <div className=" md:h-70 flex justify-center items-center p-4 bg-linear-to-br from-primary/20 via-white/5 to-fuchsia-500/20 border border-white/10 rounded-4xl">
            <div className="grid grid-cols-4 grid-rows-3 gap-3">
              <div className="col-span-3  text-3xl flex justify-center items-center bg-black/40 rounded-lg p-2 ">
                <img className="w-10 h-10" src={headsetImg} alt="headset" />
              </div>
              <div className="row-span-2 text-3xl  flex justify-center items-center bg-black/40 rounded-lg p-2 ">
                <img className="w-10 h-10" src={mouseImg} alt="mouse" />
              </div>
              <div className="row-span-2 text-3xl  flex justify-center items-center bg-black/40 rounded-lg p-2">
                <img className="w-10 h-10" src={keyboardImg} alt="keyboard" />
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
                <img className="w-10 h-10" src={ssdImg} alt="ssd" />
              </div>
            </div>
          </div>

          {/* Beneficios inferiores */}
          <div className="flex gap-5 justify-between  ">
            <div>
              <h1 className="text-sm">Entrega segura</h1>
              <p className="text-sm text-neutral-400">
                Empaque protegido y rastreo
              </p>
            </div>
            <div className="pl-15 lg:pl-0">
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
