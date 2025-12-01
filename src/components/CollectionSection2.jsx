import { products } from "../data/products";
// import redragonK530Img from "../assets/Products/redragon_K530.png";



// function ProductCard({ product }) {
//   return (
//     <div className="relative group bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between overflow-hidden">
//       <img
//         src={product.img}
//         alt={product.name}
//         className="h-16 sm:h-20 object-contain drop-shadow transition-transform duration-200 group-hover:scale-105"
//       />
//       <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
//         {product.name}
//       </p>
//       <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
//         {product.tags?.[0] ?? "Producto"}
//       </span>

//       {product.specs && (
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
//           <div className="w-full h-full bg-black/90/95 backdrop-blur-md border border-white/15 rounded-2xl px-3 py-3 flex flex-col justify-center text-center">
//             <p className="font-semibold text-[11px] text-gray-100 mb-1">
//               {product.name}
//             </p>

//             <ul className="space-y-1 text-[11px] text-gray-300 max-h-24 overflow-y-auto pr-1">
//               {product.specs.map((spec, index) => (
//                 <li key={index} className="flex gap-1 text-left">
//                   <span className="mt-[3px] text-[9px]">•</span>
//                   <span>{spec}</span>
//                 </li>
//               ))}
//             </ul>

//             <p className="mt-2 text-[10px] text-gray-500">
//               Pasa el mouse fuera para volver
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ProductCard({ product }) {
//   return (
//     <div className="relative group bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between overflow-visible">
//       <img
//         src={product.img}
//         alt={product.name}
//         className="h-16 sm:h-20 object-contain drop-shadow transition-transform duration-200 group-hover:scale-105"
//       />
//       <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
//         {product.name}
//       </p>
//       <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
//         {product.tags?.[0] ?? "Producto"}
//       </span>

//       {product.specs && (
//         <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-[110%] transition-all duration-200 z-30">
//           <div className="bg-black/95 border border-white/15 rounded-2xl px-3 py-2 text-[11px] text-gray-200 shadow-xl backdrop-blur-md w-56 max-h-32 overflow-y-auto">
//             <p className="font-semibold mb-1">{product.name}</p>
//             <ul className="space-y-1 text-gray-300">
//               {product.specs.map((spec, index) => (
//                 <li key={index} className="flex gap-1">
//                   <span className="mt-[3px] text-[9px]">•</span>
//                   <span>{spec}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ProductCard({ product }) {
//   return (
//     <div className="relative group bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between overflow-hidden">
//       <img
//         src={product.img}
//         alt={product.name}
//         className="h-16 sm:h-20 object-contain drop-shadow transition-transform duration-200 group-hover:scale-105"
//       />
//       <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
//         {product.name}
//       </p>
//       <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
//         {product.tags?.[0] ?? "Producto"}
//       </span>

//       {product.specs && (
//         <div className="mt-2 w-full overflow-hidden">
//           <div className="max-h-0 group-hover:max-h-28 transition-all duration-300 ease-out">
//             <div className="bg-black/80 border border-white/15 rounded-xl p-2 text-[10px] text-gray-200 shadow-md backdrop-blur-md">
//               <p className="font-semibold mb-1 truncate">{product.name}</p>
//               <ul className="space-y-1 text-gray-300 max-h-20 overflow-y-auto pr-1">
//                 {product.specs.map((spec, index) => (
//                   <li key={index} className="flex gap-1">
//                     <span className="mt-[3px] text-[8px]">•</span>
//                     <span>{spec}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ProductCard({ product }) {
//   return (
//     <div className="relative group bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between overflow-visible">
//       <img
//         src={product.img}
//         alt={product.name}
//         className="h-16 sm:h-20 object-contain drop-shadow transition-transform duration-200 group-hover:scale-105"
//       />
//       <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
//         {product.name}
//       </p>
//       <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
//         {product.tags?.[0] ?? "Producto"}
//       </span>

//       {product.specs && (
//         <div className="pointer-events-none absolute top-1/2 left-full ml-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-30">
//           <div className="bg-black/95 border border-white/15 rounded-2xl px-3 py-2 text-[11px] text-gray-200 shadow-xl backdrop-blur-md w-52 max-h-32 overflow-y-auto">
//             <p className="font-semibold mb-1 line-clamp-1">{product.name}</p>
//             <ul className="space-y-1 text-gray-300">
//               {product.specs.map((spec, index) => (
//                 <li key={index} className="flex gap-1">
//                   <span className="mt-[3px] text-[9px]">•</span>
//                   <span>{spec}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function ProductCard({ product }) {
//   const maxVisibleSpecs = 2;
//   const extraCount = product.specs ? Math.max(product.specs.length - maxVisibleSpecs, 0) : 0;

//   return (
//     <div className="relative group bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between overflow-visible">
//       {/* Tooltip compacto arriba */}
//       {product.specs && (
//         <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-[110%] transition-all duration-200 z-30">
//           <div className="bg-black/95 border border-white/15 rounded-2xl px-3 py-2 text-[11px] text-gray-200 shadow-xl backdrop-blur-md w-56">
//             <p className="font-semibold mb-1 line-clamp-1">{product.name}</p>
//             <ul className="space-y-1 text-gray-300">
//               {product.specs.slice(0, maxVisibleSpecs).map((spec, index) => (
//                 <li key={index} className="flex gap-1">
//                   <span className="mt-[3px] text-[9px]">•</span>
//                   <span>{spec}</span>
//                 </li>
//               ))}
//             </ul>
//             {extraCount > 0 && (
//               <p className="mt-1 text-[10px] text-gray-500">
//                 +{extraCount} especificación(es) más
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Contenido principal */}
//       <img
//         src={product.img}
//         alt={product.name}
//         className="h-16 sm:h-20 object-contain drop-shadow transition-transform duration-200 group-hover:scale-105"
//       />
//       <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
//         {product.name}
//       </p>
//       <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
//         {product.tags?.[0] ?? "Producto"}
//       </span>
//     </div>
//   );
// }

function ProductCard({ product }) {
  return (
    <div className="relative group bg-white/10 rounded-2xl p-3 flex flex-col items-center justify-between overflow-visible">
      {/* Imagen */}
      <img
        src={product.img}
        alt={product.name}
        className="h-16 sm:h-20 object-contain drop-shadow transition-transform duration-200 group-hover:scale-105"
      />

      {/* Nombre */}
      <p className="mt-2 text-[11px] text-gray-200 text-center leading-tight">
        {product.name}
      </p>

      {/* Etiqueta */}
      <span className="mt-1 text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300">
        {product.tags?.[0] ?? "Producto"}
      </span>

      {/* Caja de especificaciones en hover (arriba y más ancha) */}
      {product.specs && (
        <div className="
          pointer-events-none 
          absolute 
          left-1/2 
          -translate-x-1/2
          -top-2 
          -translate-y-full
          opacity-0 
          group-hover:opacity-100 
          group-hover:-translate-y-[120%]
          transition-all 
          duration-200 
          z-30
        ">
          <div className="
            bg-black/95 
            border border-white/15 
            rounded-2xl 
            px-4 
            py-3 
            text-[11px] 
            text-gray-200 
            shadow-2xl 
            backdrop-blur-xl
            w-64              /* más ancho */
            max-h-40          /* control de altura */
            overflow-y-auto   /* scroll interno */
          ">
            <p className="font-semibold mb-2 text-center">
              {product.name}
            </p>

            <ul className="space-y-1 text-gray-300">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex gap-2 text-left">
                  <span className="mt-[3px] text-[9px]">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard2({ product }) {
  return (
    <div key={product.id} className="relative group flex flex-row md:flex-col items-center justify-center  group bg-white/10 rounded-2xl gap-2 px-2 py-3">
      <img className="h-19 group-hover:scale-105 transition-transform duration-200" src={product.img} alt={product.name} />
      <div>
        <p className="text-[11px] text-gray-200 text-center mt-auto">{product.name}</p>
        <span className="w-fit text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-gray-300 mt-auto">{product.tags?.[0] ?? "Producto"}</span>
      </div>

      {product.specs && (
        <div className="absolute pointer-events-none  left-1/2 -translate-x-1/2 -top-1 -translate-y-full  w-64 bg-primary  opacity-0 group-hover:opacity-100 group-hover:-translate-y-[110%] transition-all duration-200 z-30">
          <div className="bg-black border border-white/15 rounded-2xl px-4 py-3 ">
            <h2 className="text-xs font-semibold mb-2 text-center">{product.name}</h2>
            <ul className="flex flex-col gap-1">
              {product.specs.map((spec, index)=>(
                <li className="text-[11px] text-gray-200" key={index} >• {spec}</li>
              ))}
            </ul>
          </div>
        </div>)}
      
    </div>
  )
 }







export default function CollectionSection2({ productIDs = [] }) {

  // Filtrar solo los productos seleccionados por ID
  const visibleProducts = products.filter(p => productIDs.includes(p.id));

  return (

    <>

    <section className="py-20 bg-black/90">
      <div className="max-w-4xl mx-auto relative px-4">

        {/* Tarjeta principal */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Visual productos */}
            <div className="flex flex-col items-center md:items-start gap-5">
              <div className="grid grid-cols-3 gap-4 w-full">

                {visibleProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}

              </div>

              <p className="text-[11px] text-gray-400 text-center md:text-left">
                Selección curada para streaming, gaming y trabajo híbrido.
              </p>
            </div>

            {/* Texto */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
                Setup Pro — Ultimate Pack
              </p>

              <h3 className="text-xl sm:text-2xl font-bold">
                Un solo bundle para completar tu escritorio
              </h3>

              <p className="text-sm text-gray-300">
                Combina audio de estudio, escritura compacta y precisión
                milimétrica en un pack pensado para creadores, gamers y
                profesionales.
              </p>

              <div className="border-l border-white/10 pl-4 space-y-1 text-sm text-gray-300">
                <p>• Logitech G733 — sonido envolvente y cómodo.</p>
                <p>• Redragon K530 — teclado 60% que libera espacio.</p>
                <p>• Redragon M901 — mouse gamer de alto DPI.</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-gray-300">
                <span className="px-2 py-1 rounded-full bg-white/5">Streaming</span>
                <span className="px-2 py-1 rounded-full bg-white/5">Gaming</span>
                <span className="px-2 py-1 rounded-full bg-white/5">Home Office</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tarjeta flotante precio */}
        <div className="absolute bottom-0 right-0 translate-y-1/3 bg-black/85 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl w-[210px]">
          <p className="text-2xl font-bold leading-none">$199.99</p>
          <p className="text-gray-400 text-xs line-through mt-1">$229.99</p>
          <button className="mt-3 w-full bg-primary py-1.5 rounded-full text-sm hover:scale-105 transition">
            Añadir
          </button>
        </div>
      </div>
    </section>

     <section className="flex flex-col gap-4 py-12 px-2 md:px-4 lg:px-25">
            <div className="flex flex-col gap-2 justify-center items-center">
                <h2 className="text-2xl font-semibold">Colección Setup Pro</h2>
                <p className="text-sm text-neutral-300">Un solo pack para cubrir audio, escritura y precisión.</p>
            </div>

            <div className="relative flex flex-col md:flex-row gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl ">

                <div className="flex flex-col gap-3">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3  ">
                    {products.map((product)=>(
                      <ProductCard2 product={product}/>
                    ))}
                    </div>
                    <p className="text-xs text-neutral-400">Selección curada para streaming, gaming y trabajo híbrido</p>
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <p className="text-primary text-xs tracking-[0.25em]">SETUP PRO - ULTIMATE PACK</p>
                    <h3 className="font-bold text-2xl">Un solo bundle para completar tu escritorio</h3>
                    <p className="text-neutral-300 text-sm">Combina audio de estudio, escritura compacta y precisiónmilimétrica en un pack pensado para creadores, gamers y profesionales.</p>
                    <ul className="border-l border-white/10 pl-4 text-sm text-neutral-300 ">
                      <li>• Logitech G733 — sonido envolvente y cómodo.</li>
                      <li>• Redragon K530 — teclado 60% que libera espacio.</li>
                      <li>• Redragon M901 — mouse gamer de alto DPI..</li>
                    </ul>
                </div>

                <div className="absolute  -bottom-4 -right-4  md:-right-4 translate-y-14 md:translate-y-8 h-25 w-40  md:h-30 md:w-50 p-2 md:p-4 border border-white/10 rounded-2xl bg-black">
                      <p className="text-xl md:text-2xl font-bold">$199.99</p>
                      <p className="text-neutral-400 text-[11px] md:text-xs line-through">$229.99</p>
                      <button className="bg-primary rounded-full text-xs md:text-[16px] font-semibold py-1 w-full mt-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition">Añadir</button>
                </div>
            </div>
     </section>

        {/* prueba imagen */}
        {/* <div className="mt-20 mb-100">

          <div className="flex flex-col bg-amber-300 border-4 border-red-500  w-[800px] ">
           <img className="  " src={redragonK530Img} alt="redragon" />
          </div>

          <img className=" h-[300px] w-[200px] mt-10  " src={redragonK530Img} alt="redragon" />
          
        </div> */}
    </>



    
  );
}
