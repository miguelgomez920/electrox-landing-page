/**
 * CategorySection Component
 *
 * Sección encargada de mostrar las categorías principales del catálogo.
 *
 * Contenido:
 *  - Título y texto introductorio.
 *  - Render dinámico de categorías provenientes de `categories` (data externa).
 *
 * Funcionalidad:
 *  - Itera sobre un arreglo de categorías para generar tarjetas visuales.
 *  - Cada tarjeta incluye imagen, nombre, descripción y un botón de navegación.
 *  - Efectos de hover que mejoran la interacción: elevación, colores y animaciones.
 *
 * Propósito:
 *  - Facilitar exploración del usuario por tipo de producto.
 *  - Crear una interfaz clara, responsiva y visualmente atractiva.
 *
 * Estilos:
 *  - Tailwind CSS con gradientes, animaciones y layout flexible.
 *  - Diseño responsivo mediante `flex-col` en móvil y `flex-row` en pantallas grandes.
 */

import { categories } from "../data/categories";

const CategorySection = () => {
  return (
    <section className="flex flex-col py-12">
      
      {/* ======================================
          Encabezado de la sección
         ======================================= */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Explora por categorías</h2>
        <p className="text-[15px] text-neutral-400 mt-4">
          Todo lo que necesitas para mejorar tu experiencia.
        </p>
      </div>

      {/* ======================================
          Contenedor de tarjetas de categoría
         ======================================= */}
      <div className="flex flex-col sm:flex-row justify-evenly gap-3 mt-10 px-4">
        
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group flex-1 flex flex-col items-center  gap-5 p-5 py-7 bg-linear-to-br from-white/5 to-darkCard border border-white/10 rounded-3xl hover:from-primary/20 hover:to-darkCard hover:border-primary/50 hover:-translate-y-1 transition"
          >

            {/* ======================================
                Imagen de la categoría
               ======================================= */}
            <div className="flex justify-center w-40 bg-neutral-950 p-3 border border-white/10 rounded-2xl ">
              <img
                className=" w-17 h-17 object-contain transition-transform duration-300 group-hover:rotate-13 group-hover:scale-120"
                src={cat.img}
                alt={cat.name}
              />
            </div>

            {/* ======================================
                Información de la categoría
               ======================================= */}
            <div className="flex flex-col items-center ">
              <h3 className="text-[1.1rem] font-semibold">{cat.name}</h3>
              <p className="text-[15px] text-neutral-400">{cat.description}</p>
            </div>

            {/* ======================================
                Botón accionable
               ======================================= */}
            <button className="text-primary text-sm font-medium  group-hover:underline group-hover:translate-x-1 transition">
              Ver más →{" "}
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default CategorySection;
