import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductsSection from "./components/ProductsSection";
import Benefits from "./components/BenefitsSection";
import CollectionSection from "./components/CollectionSection";
import TestimonialsSection from "./components/TestimonialsSection";


import Peticion from "./components/Peticion";
import Peticion2 from "./components/Peticion2";


function App() {
 
  return (
    // bg-gradient-to-b from-black via-[#0b0b0b] to-black
    <div className="min-h-screen bg-linear-to-b from-black via-[#0b0b0b] to-black ">
      <Navbar/> 
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <Hero/>
        <Benefits/>
        <CategorySection/>
        <ProductsSection/>
        <CollectionSection productIDs={[5, 2, 3]} />
        <TestimonialsSection/>
        



        {/* <Peticion/>
        <Peticion2/> */}
  

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
