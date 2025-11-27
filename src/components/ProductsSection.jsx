import { products } from "../data/products";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-12 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Productos destacados</h2>
          <p className="text-gray-300 text-sm">
            Lo más recomendado para actualizar tu setup.
          </p>
        </div>
        <button className="text-sm text-primary hover:underline">
          Ver todo el catálogo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-4 hover:bg-white/10 hover:border-primary/70 hover:-translate-y-1 transition"
          >
            {product.tag && (
              <span className="self-start text-[10px] uppercase bg-primary/20 text-primary px-2 py-1 rounded-full">
                {product.tag}
              </span>
            )}

            <div className="h-32 rounded-xl bg-gradient-to-br from-primary/15 via-darkCard to-white/10 flex items-center justify-center text-5xl">
              {product.category === "Audio" && "🎧"}
              {product.category === "Teclados" && "⌨️"}
              {product.category === "Mouses" && "🖱️"}
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-base">{product.name}</h3>
              <p className="text-xs text-gray-400">{product.category}</p>
              <p className="text-sm text-gray-300 line-clamp-2">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="font-semibold text-lg">
                ${product.price.toFixed(2)}
              </p>
              <button className="text-xs bg-primary text-black px-4 py-2 rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition">
                Añadir al carrito
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
