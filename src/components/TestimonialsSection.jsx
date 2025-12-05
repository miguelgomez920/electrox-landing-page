import { testimonials } from "../data/testimonials";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  return (
    <>
      
      {/* <section className="py-14">
        <h2 className="text-3xl font-bold mb-6">Testimonios</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl bg-linear-to-br from-primary/10 to-neutral-900 border border-neutral-700 overflow-hidden"
            >
              <div className="h-2 bg-linear-to-r from-primary to-primary/30"></div>

              <div className="p-6 flex items-center gap-4 ">
                <div className=" w-15 h-15 rounded-full border-2 border-primary overflow-hidden ">
                  <img src={t.img} alt={t.name} className="w-15 h-15  " />
                </div>
                <div className=" ">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              <div className="h-[2px] bg-linear-to-r from-transparent via-neutral-700/60 to-transparent " />

              <div className="p-6">
                <p className="text-gray-300 text-sm">“{t.quote}”</p>
                <div className="mt-4 text-yellow-400 text-xs">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* mi codigo */}
      <section className="py-12 space-y-4">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-semibold">Lo que dicen nuestros clientes</h2>
          <p className="text-neutral-300 text-[15px]">Personas que ya mejoraron su experiencia con ElectroX.</p>
        </div>

        {/* FLECHAS PERSONALIZADAS */}
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




      

      <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          grabCursor={true}              // Hace que el cursor sea "mano"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-10 mt-10"
      >
            {testimonials.map((t)=>(
            <SwiperSlide key={t.id}>
              <div className="flex flex-col bg-linear-to-br h-[205px] from-primary/10 to-neutral-900 border border-white/15 rounded-xl overflow-hidden">
                <div className="h-2 bg-linear-to-r from-primary to-primary/30 "></div>
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex gap-5 items-center">
                    <div className=" h-15 w-15 bg-linear-to-br from-blue-800 via-blue-600 to-blue-500 border-2 border-primary rounded-full overflow-hidden" aria-label={`Calificación de ${t.rating} sobre 5`}>
                      <img className="h-full w-full object-contain " src={t.img} alt={t.name} />
                    </div>      
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>

                  <div className="h-[2px] bg-linear-to-r from-transparent via-neutral-700/60 to-transparent "></div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-300">
                     "{t.quote}"
                    </p>
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
    </>
  );
};

export default TestimonialsSection;
