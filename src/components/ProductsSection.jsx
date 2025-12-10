/**
 * ProductsSection Component
 *
 * Sección encargada de mostrar los productos destacados del catálogo.
 *
 * Contenido:
 *  - Encabezado con título, descripción y botón para ver todo el catálogo.
 *  - Grid responsiva que renderiza cada producto desde `products` (data externa).
 *
 * Funcionalidad:
 *  - Itera sobre la lista de productos y genera tarjetas dinámicas.
 *  - Cada tarjeta muestra imagen, nombre, categoría, descripción breve, tags y precio.
 *  - Incluye botón de acción para ver más detalles del producto.
 *
 * Propósito:
 *  - Mostrar ofertas destacadas y facilitar la navegación por productos visualmente.
 *  - Resaltar información clave en un diseño limpio, moderno y responsivo.
 *
 * Estilos:
 *  - Grid flexible para adaptar de 1 a 3 columnas según el tamaño de pantalla.
 *  - Efectos visuales al hover, sombras, elevación y cambios de color.
 */

import { products } from "../data/products";

const ProductsSection = () => {
  return (
    <section id="productos" className="scroll-mt-10 py-12 space-y-6">
      
      {/* ======================================
          Encabezado de la sección
         ======================================= */}
      <div className="flex gap-3 justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Productos destacados</h2>
          <p className="text-[15px] text-neutral-300">
            Lo más recomendado para actualizar tu setup
          </p>
        </div>

        <button className=" text-primary pt-6 text-[13px] md:text-sm hover:underline md:pr-12">
          Ver todo el catálogo
        </button>
      </div>

      {/* ======================================
          Grid de productos
         ======================================= */}
      <div className="grid grid-cols-1 gap-5 lg:gap-15 sm:grid-cols-2 md:grid-cols-3 md:px-5 lg:px-10">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-4 rounded-2xl bg-neutral-950 border border-white/10 p-4 hover:bg-neutral-900 hover:border-primary/70 hover:-translate-y-1 transition"
          >
            
            {/* Imagen del producto */}
            <div className="flex justify-center items-center h-34 text-4xl rounded-xl bg-linear-to-r from-primary to-neutral-500">
              <img
                className="h-full w-full object-contain"
                src={product.img}
                alt={product.name}
              />
            </div>

            {/* Información del producto */}
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-[12px] text-neutral-400">{product.category}</p>
              <p className="text-sm text-neutral-300">{product.description}</p>
            </div>

            {/* Tags del producto */}
            <div className="flex flex-wrap gap-1 text-neutral-400">
              {product.tags.map((tags, index) => (
                <span
                  key={index}
                  className="text-[12px] px-2 py-[2px] bg-neutral-800 rounded-full"
                >
                  {tags}
                </span>
              ))}
            </div>

            {/* Precio + botón */}
            <div className="flex justify-between mt-auto">
              <p className="font-semibold text-lg">$ {product.price}</p>

              <button className="text-[13px] text-black font-semibold bg-primary rounded-full px-4 py-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition">
                Ver producto
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductsSection;
