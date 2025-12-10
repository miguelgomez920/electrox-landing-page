/**
 * ProductCard Component
 *
 * Componente individual que muestra un producto en formato compacto.
 *
 * Contenido:
 *  - Imagen del producto.
 *  - Nombre y etiqueta principal.
 *  - Tooltip flotante con especificaciones (si existen).
 *
 * Funcionalidad:
 *  - Muestra un tooltip animado al hacer hover, usando `group-hover`.
 *  - Presenta la primera etiqueta del producto o un valor por defecto.
 *
 * Propósito:
 *  - Mostrar productos dentro de colecciones o grids de forma visual y minimalista.
 *  - Brindar información adicional sin recargar la tarjeta.
 *
 * Estilos:
 *  - Efectos de escala, sombras y transición de opacidad.
 *  - Tooltip posicionado absolutamente con animaciones suaves.
 */

import { products } from "../data/products";

function ProductCard({ product }) {
  return (
    <div className="relative group flex flex-row md:flex-col items-center justify-center bg-white/10 rounded-2xl gap-2 px-2 py-3">
      
      {/* Imagen del producto */}
      <img
        className="h-19 group-hover:scale-105 transition-transform duration-200 drop-shadow"
        src={product.img}
        alt={product.name}
      />

      {/* Información básica */}
      <div className="flex flex-col gap-2">
        <p className="text-[13px] md:text-[11px] text-gray-200 text-center">
          {product.name}
        </p>
        <span className="w-fit text-[11px] md:text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300 mt-auto">
          {product.tags?.[0] ?? "Producto"}
        </span>
      </div>

      {/* Tooltip de especificaciones */}
      {product.specs && (
        <div className="absolute pointer-events-none left-1/2 -translate-x-1/4 md:-translate-x-1/2 -top-1 -translate-y-full w-64 bg-primary opacity-0 group-hover:opacity-100 group-hover:-translate-y-[110%] transition-all duration-200 z-30">
          <div className="bg-black border border-white/15 rounded-2xl px-4 py-3">
            <h2 className="text-sm font-semibold mb-2 text-center">
              {product.name}
            </h2>
            <ul className="flex flex-col gap-1">
              {product.specs.map((spec, index) => (
                <li className="text-[12px] text-gray-200" key={index}>
                  • {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * CollectionSection Component
 *
 * Sección que muestra una colección seleccionada de productos, recibidos por ID.
 *
 * Contenido:
 *  - Encabezado con nombre de la colección.
 *  - Grid de productos filtrados.
 *  - Descripción del bundle y beneficios del pack.
 *  - Tarjeta de precio destacada con oferta.
 *
 * Funcionalidad:
 *  - Filtra los productos según los IDs proporcionados en `productIDs`.
 *  - Renderiza múltiples ProductCard dentro de un layout responsivo.
 *
 * Propósito:
 *  - Presentar un bundle premium (Setup Pro) de forma visual y clara.
 *  - Facilitar la decisión de compra del pack completo.
 *
 * Estilos:
 *  - Tarjeta de precio fija dentro del layout mediante posición absoluta.
 *  - Gradientes, sombras profundas y efectos de rotación.
 */

export default function CollectionSection({ productIDs = [] }) {
  // Filtrar solo los productos seleccionados por ID
  const visibleProducts = products.filter((p) => productIDs.includes(p.id));

  return (
    <>
      <section className="flex flex-col gap-4 py-12 px-2 md:px-4 lg:px-25">
        
        {/* ======================================
            Encabezado de la sección
           ======================================= */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-3xl font-semibold">Colección Setup Pro</h2>
          <p className="text-[15px] text-neutral-300">
            Un solo pack para cubrir audio, escritura y precisión.
          </p>
        </div>

        {/* ======================================
            Contenedor principal de la colección
           ======================================= */}
        <div className="relative flex flex-col md:flex-row gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl">
          
          {/* Grid de productos seleccionados */}
          <div className="md:w-[50%] flex flex-col gap-3 justify-center items-center">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <p className="text-[13px] text-neutral-400">
              Selección curada para streaming, gaming y trabajo híbrido
            </p>
          </div>

          {/* Descripción del pack */}
          <div className="md:w-[40%] flex flex-col justify-center gap-4 py-12">
            <p className="text-primary text-[13px] tracking-[0.25em]">
              SETUP PRO - ULTIMATE PACK
            </p>
            <h3 className="font-bold text-2xl">
              Un solo bundle para completar tu escritorio
            </h3>
            <p className="text-neutral-300 text-sm">
              Combina audio de estudio, escritura compacta y
              precisiónmilimétrica en un pack pensado para creadores, gamers y
              profesionales.
            </p>
            <ul className="border-l border-white/10 pl-4 text-sm text-neutral-300">
              <li>• Logitech G733 — sonido envolvente y cómodo.</li>
              <li>• Redragon K530 — teclado 60% que libera espacio.</li>
              <li>• Redragon M901 — mouse gamer de alto DPI..</li>
            </ul>
          </div>

          {/* ======================================
              Tarjeta flotante de precio y oferta
             ======================================= */}
          <div
            className="absolute -bottom-4 -right-4 md:-right-4 translate-y-6 md:translate-y-8 h-25 w-40 
                 md:h-30 md:w-50 p-2 md:p-4 border border-white/10 rounded-2xl bg-linear-to-br from-slate-900 via-black to-primary
                 shadow-[0_18px_45px_rgba(0,0,0,0.85)] -rotate-6 hover:rotate-1 
                 transition-transform duration-300"
          >
            <p className="text-xl md:text-2xl font-bold">$199.99</p>
            <p className="text-neutral-400 text-[12px] md:text-xs line-through">
              $229.99
            </p>
            <button className="bg-primary rounded-full text-[13px] md:text-[15px] font-semibold py-1 w-full mt-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition">
              Añadir
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
