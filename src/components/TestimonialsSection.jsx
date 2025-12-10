/**
 * TestimonialsSection Component
 *
 * Sección dedicada a mostrar testimonios reales de clientes utilizando un carrusel.
 *
 * Contenido:
 *  - Título y descripción introductoria.
 *  - Carrusel Swiper con navegación, paginación y autoplay.
 *  - Testimonios individualmente dentro de tarjetas estilizadas.
 *
 * Funcionalidad:
 *  - Render dinámico de testimonios desde el arreglo `testimonials`.
 *  - Uso de Swiper para mostrar varios testimonios dependiendo del viewport.
 *  - Estrellas generadas dinámicamente según el rating de cada usuario.
 *
 * Propósito:
 *  - Proveer validación social y aumentar la confianza del usuario.
 *  - Mostrar experiencias positivas de clientes con productos de ElectroX.
 *
 * Estilos:
 *  - Tarjetas con gradientes, bordes suaves y diseño moderno.
 *  - Flechas personalizadas usando estilos inyectados.
 *  - Layout responsivo con breakpoints en Swiper.
 */

// Data
import { testimonials } from "../data/testimonials";

// Iconos
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Swiper funcional
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper estilos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  return (
    <section className="py-12 space-y-4">
      
      {/* ======================================
          Encabezado de la sección
         ======================================= */}
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-semibold">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-neutral-300 text-[15px]">
          Personas que ya mejoraron su experiencia con ElectroX.
        </p>
      </div>

      {/* ======================================
          Estilos personalizados para flechas Swiper
         ======================================= */}
      <style>
        {`
        /* Botones base */
        .swiper-button-next, .swiper-button-prev {
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
          border: 2px solid rgba(255,255,255,0.2);
          transition: 0.2s ease-in-out;
        }
        /* Hover */
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: rgba(0,0,0,0.7);
          border-color: rgba(255,255,255,0.4);
        }
        /* Iconos más gruesos */
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        `}
      </style>

      {/* ======================================
          Carrusel de testimonios (Swiper)
         ======================================= */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        grabCursor={true} // Hace que el cursor sea "mano"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-10 mt-10"
      >
        
        {/* ======================================
            Testimonios individuales
           ======================================= */}
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="flex flex-col bg-linear-to-br h-[205px] from-primary/10 to-neutral-900 border border-white/15 rounded-xl overflow-hidden">

              {/* Barra superior decorativa */}
              <div className="h-2 bg-linear-to-r from-primary to-primary/30"></div>

              {/* Contenido del testimonio */}
              <div className="flex flex-col gap-4 p-4">
                
                {/* Información del usuario */}
                <div className="flex gap-5 items-center">
                  <div
                    className="h-15 w-15 bg-linear-to-br from-blue-800 via-blue-600 to-blue-500 border-2 border-primary rounded-full overflow-hidden"
                    aria-label={`Calificación de ${t.rating} sobre 5`}
                  >
                    <img
                      className="h-full w-full object-contain"
                      src={t.img}
                      alt={t.name}
                    />
                  </div>

                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>

                {/* Separador */}
                <div className="h-[2px] bg-linear-to-r from-transparent via-neutral-700/60 to-transparent"></div>

                {/* Texto + Estrellas */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-300">"{t.quote}"</p>

                  <div className="flex gap-1 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < t.rating ? <AiFillStar /> : <AiOutlineStar />}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
