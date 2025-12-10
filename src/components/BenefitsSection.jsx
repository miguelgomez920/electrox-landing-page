/**
 * Benefits Component
 *
 * Sección enfocada en mostrar los beneficios principales que ofrece ElectroX.
 *
 * Contenido:
 *  - Título introductorio explicando el valor agregado de la marca.
 *  - Tres tarjetas de beneficio: Envíos, Seguridad y Soporte.
 * 
 * Funcionalidad / Propósito:
 *  - Resaltar ventajas competitivas de manera visual y breve.
 *  - Utilizar imágenes decorativas posicionadas absolutamente para dar dinamismo.
 *  - Dar confianza al usuario mediante características clave del servicio.
 * 
 * Estilos:
 *  - Tailwind CSS con gradientes suaves, bordes translúcidos y tarjetas responsivas.
 *  - Distribución en columna para móvil y filas distribuidas en desktop.
 */

import packageImg from "../assets/Benefits/package.png";
import securityImg from "../assets/Benefits/security.png";
import supportImg from "../assets/Benefits/support.png";

const Benefits = () => {
  return (
    <section
      id="ofertas"
      className="scroll-mt-10 flex flex-col md:flex-row gap-5  py-12  "
    >
      {/* ======================================
          Columna izquierda — Título y descripción
         ======================================= */}
      <div className="flex flex-col md:w-[33%] gap-3 ">
        <h2 className="text-3xl font-bold">¿Qué ganaras con ElectroX?</h2>
        <p className="text-[15px] text-gray-300">
          Una experiencia premium desde que compras hasta que usas tu
          dispositivo.
        </p>
      </div>

      {/* ======================================
          Columna derecha — Tarjetas de beneficios
         ======================================= */}
      <div className=" flex flex-col md:flex-row gap-4">
        {/* Tarjeta 1 — Envíos */}
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
          <p className="z-10  text-[13px]">
            Llegan más rápido que la competencia
          </p>
        </div>

        {/* Tarjeta 2 — Seguridad */}
        <div className="relative overflow-hidden flex-1  flex flex-col  gap-2  bg-linear-to-br from-fuchsia-500/20 to-fuchsia-500/5 border border-white/10 rounded-xl p-3 ">
          <img
            src={securityImg}
            alt="security"
            className="absolute -right-5  top-1/2  -translate-y-1/2 w-20 rotate-[10deg] opacity-90"
          />
          <span className="w-fit text-sm bg-[#681A73] rounded-full px-2 py-1">
            Seguridad
          </span>
          <h1 className="z-10 text-[17px] font-semibold ">
            Pagos garantizados
          </h1>
          <p className="z-10 text-[13px]">
            Protección avanzada en cada transacción.
          </p>
        </div>

        {/* Tarjeta 3 — Soporte */}
        <div className="relative overflow-hidden flex-1  flex flex-col gap-2  bg-linear-to-br from-cyan-400/20 to-cyan-400/5 border border-white/10 rounded-xl p-3 ">
          <img
            src={supportImg}
            alt="support"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-20 rotate-[10deg] opacity-90"
          />
          <span className="w-fit text-sm bg-[#096271] rounded-full px-2 py-1">
            Soporte
          </span>
          <h1 className="z-10 text-[17px] font-semibold ">
            Garantía extendida
          </h1>
          <p className="z-10 text-[13px]">Te acompañamos en cada paso.</p>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
