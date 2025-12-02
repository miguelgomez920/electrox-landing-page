import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductsSection from "./components/ProductsSection";
import Benefits from "./components/BenefitsSection";
import CollectionSection from "./components/CollectionSection";
import CollectionSection2 from "./components/CollectionSection2";
import Peticion from "./components/Peticion";
import Peticion2 from "./components/Peticion2";

function App() {
  // ===== DATA =====
 
  const testimonials = [
    {
      id: 1,
      name: "Laura G.",
      role: "Streamer",
      quote:
        "Los audífonos mejoraron mi experiencia en directos. Excelente calidad.",
    },
    {
      id: 2,
      name: "Carlos M.",
      role: "Desarrollador",
      quote: "El teclado mecánico es cómodo, compacto y potente.",
    },
    {
      id: 3,
      name: "Ana P.",
      role: "Diseñadora",
      quote: "El envío fue rápido y la calidad superó mis expectativas.",
    },
  ];

  // ===== RETURN UI =====
  return (
    // bg-gradient-to-b from-black via-[#0b0b0b] to-black
    <div className="min-h-screen bg-linear-to-b from-black via-[#0b0b0b] to-black overflow-x-hidden">
      <Navbar/> 
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <Hero/>
        <Benefits/>
        <CategorySection/>
        <ProductsSection/>
        {/* <Peticion/>
        <Peticion2/> */}
  {/* <CollectionSection/> */}
        <CollectionSection2 productIDs={[5, 2, 3]} />

     
        {/* TESTIMONIALS */}

    <section className="py-10">
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
    <div>
      <h2 className="text-2xl font-semibold">Lo que dicen nuestros clientes</h2>
      <p className="text-sm text-gray-300">
        Personas que ya mejoraron su experiencia con ElectroX.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {testimonials.map((t) => (
      <article
        key={t.id}
        className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4 hover:border-primary/60 hover:-translate-y-1 transition"
      >
        <div className="text-primary text-3xl leading-none">“</div>
        <p className="text-sm text-gray-200">{t.quote}</p>

        <div className="mt-auto pt-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-gray-400">{t.role}</p>
          </div>
          <div className="flex text-xs text-yellow-400 gap-0.5">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </article>
    ))}
  </div>
    </section>



        {/* ===== NEWSLETTER ===== */}
       
      
        <section id="contacto" className="py-16">
  <div className="grid sm:grid-cols-2 gap-6 bg-darkCard bg-gradient-to-r from-primary/20 via-darkCard to-black  border border-white/10 p-8 rounded-3xl">

    {/* Texto */}
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Recibe contenido exclusivo</h2>
      <p className="text-sm text-gray-300">
        Suscríbete para obtener acceso anticipado a lanzamientos y consejos para tu setup.
      </p>
    </div>

    {/* Formulario */}
    <div className="flex gap-3">
      <input
        type="email"
        placeholder="Introduce tu correo"
        className="bg-black/40 border border-white/20 px-4 py-2 rounded-full flex-1 text-sm"
      />
      <button className="bg-primary px-5 py-2 rounded-full text-sm hover:scale-105 transition">
        Enviar
      </button>
    </div>

  </div>
        </section>


     

      </main>

      

    

      {/* FOOTER */}

      <footer className="mt-12 border-t border-white/10 py-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-3 text-xs text-gray-400">

    {/* About */}
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-white">ElectroX</h3>
      <p className="max-w-xs">
        Tecnología premium y periféricos seleccionados para tu setup.
      </p>
    </div>

    {/* Links */}
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-white">Enlaces</h3>
      <ul className="space-y-1">
        <li><a className="hover:text-primary transition" href="#">Inicio</a></li>
        <li><a className="hover:text-primary transition" href="#">Productos</a></li>
        <li><a className="hover:text-primary transition" href="#">Ofertas</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-white">Legal</h3>
      <ul className="space-y-1">
        <li><a className="hover:text-primary transition" href="#">Términos</a></li>
        <li><a className="hover:text-primary transition" href="#">Privacidad</a></li>
        <li><a className="hover:text-primary transition" href="#">Soporte</a></li>
      </ul>
    </div>

  </div>

  <p className="mt-8 text-center text-[11px] text-gray-500">
    © {new Date().getFullYear()} ElectroX · Todos los derechos reservados.
  </p>
      </footer>


    </div>
  );
}

export default App;
