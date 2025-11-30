import { products } from "../data/products";

const ProductsSection = () => {
  return (

    <>
    {/* <section id="productos" className="py-12 space-y-6">
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
    </section> */}

    <section id="productos" className="scroll-mt-10 py-12 space-y-6">

      <div className="flex gap-3 justify-between">
        <div >
          <h2 className="text-2xl font-semibold">Productos destacados</h2>
          <p className="text-sm text-neutral-300">Lo más recomendado para actualizar tu setup</p>        
        </div>
        <button className=" text-primary pt-6 text-xs md:text-sm hover:underline md:pr-12">Ver todo el catálogo</button>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:gap-15 sm:grid-cols-2 md:grid-cols-3  md:px-5 lg:px-10">
        {products.map((product)=>(
      
          <div key={product.id} className="flex flex-col gap-4 rounded-2xl bg-neutral-950 border border-white/10 p-4 hover:bg-neutral-900 hover:border-primary/70 hover:-translate-y-1 transition">
            <div className=" flex justify-center items-center h-34 text-4xl rounded-xl  bg-linear-to-r from-primary to-neutral-500">
                  <img className="h-full w-full object-contain " src={product.img} alt={product.name} />
            </div>

            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-[12px] text-neutral-400">{product.category}</p>
              <p className="text-sm text-neutral-300 ">{product.description}</p>
            </div>

            <div className="flex flex-wrap gap-1 text-neutral-400">
              {product.tags.map((tags, index)=>(
                <span key={index} className="text-[11px] px-2 py-[2px] bg-neutral-800 rounded-full">{tags}</span>
              ))}
 
            </div>

            <div className="flex justify-between mt-auto">
              <p className="font-semibold text-lg">{product.price}</p>
              <button className="text-[12px] text-black font-semibold bg-primary rounded-full px-4 py-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition">Ver producto</button>
            </div>

          </div>

        )) }
 
      </div>
   </section>

     </>
  );
};

export default ProductsSection;
