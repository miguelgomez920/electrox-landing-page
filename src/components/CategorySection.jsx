import { categories } from "../data/categories";


const CategorySection = () => {
  return (

    <>

    {/* <section className="py-12 space-y-8">
    <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold">Explora por categorías</h2>
        <p className="text-gray-300 text-sm">
        Todo lo que necesitas para mejorar tu experiencia.
        </p>
    </div>

    <div className="grid sm:grid-cols-3 gap-6">
        {categories.map((cat) => (
        <div
            key={cat.id}
            className="rounded-3xl p-6 bg-gradient-to-br from-white/5 to-darkCard border border-white/10 hover:from-primary/20 hover:to-darkCard hover:border-primary/50 hover:-translate-y-1 transition flex flex-col gap-4"
        >
            <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-2xl bg-black/30 text-3xl shadow-md">
            {cat.icon}
            </div>

            <div className="text-center space-y-1">
            <h3 className="font-semibold text-lg">{cat.name}</h3>
            <p className="text-sm text-gray-300">{cat.description}</p>
            </div>

            <button className="mt-auto text-sm text-primary font-medium hover:underline text-center">
            Ver más →
            </button>
        </div>
        ))}
    </div>
    </section> */}

    <section className="flex flex-col py-12">

      <div className="text-center">
        <h2 className="text-3xl font-semibold">Explora por categorías</h2>
        <p className="text-sm text-neutral-400 mt-4">Todo lo que necesitas para mejorar tu experiencia.</p>
      </div>


      <div className="flex flex-col sm:flex-row justify-evenly gap-3 mt-10 px-4 ">

        { categories.map((cat)=>(
        <div key={cat.id} className="group flex-1 flex flex-col items-center gap-5 p-5 py-7 bg-linear-to-br from-white/5 to-darkCard border border-white/10 rounded-3xl hover:from-primary/20 hover:to-darkCard hover:border-primary/50 hover:-translate-y-1 transition">
          <div className="flex justify-center w-40 bg-neutral-950 p-3 border border-white/10 rounded-2xl ">
            <img className="w-15 h-15 object-contain transition-transform duration-300 group-hover:rotate-13 group-hover:scale-120  " src={cat.img} alt="headset" />
          </div>
          <div className="text-center">
            <h3 className="text-[1.1rem] font-semibold">{cat.name}</h3>
            <p className="text-sm text-neutral-400">{cat.description}</p>
          </div>
          <button className="text-primary text-sm font-medium  group-hover:underline group-hover:translate-x-1 transition">Ver más → </button>
        </div>
        ))}

      </div>


    </section>

    </>


  );
};

export default CategorySection;
