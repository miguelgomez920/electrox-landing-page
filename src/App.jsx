import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductsSection from "./components/ProductsSection";
import Benefits from "./components/BenefitsSection";
import CollectionSection from "./components/CollectionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";


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
        <ContactSection/>
           {/* ===== NEWSLETTER ===== */}
   
   <section id="contact" className="bg-slate-950 text-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
          {/* Encabezado */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
              Contact us
            </h2>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Hablemos sobre tu proyecto
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-400">
              Déjanos un mensaje y te responderemos lo antes posible. Cuéntanos
              qué necesitas y cómo podemos ayudarte.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            {/* Card del formulario */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/30 backdrop-blur">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Aquí puedes manejar el submit (fetch/axios/etc)
                  console.log("Form submitted");
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm md:text-base text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/60 transition"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm md:text-base text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/60 transition"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm md:text-base text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/60 transition"
                    placeholder="¿Sobre qué quieres hablar?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm md:text-base text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/60 transition resize-none"
                    placeholder="Cuéntanos brevemente qué necesitas…"
                  />
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-xs md:text-sm text-slate-500">
                    Al enviar este formulario aceptas que te contactemos al
                    correo proporcionado.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm md:text-base font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98] transition"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>

            {/* Columna de info de contacto + redes + mapa */}
            <div className="space-y-6">
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-7">
                <h4 className="text-base md:text-lg font-semibold mb-4">
                  Información de contacto
                </h4>

                <div className="space-y-4 text-sm md:text-base">
                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-lg">
                      ✉️
                    </span>
                    <div>
                      <p className="font-medium">Correo</p>
                      <p className="text-slate-400 text-sm md:text-base">
                        contacto@tusitio.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-lg">
                      📞
                    </span>
                    <div>
                      <p className="font-medium">Teléfono / WhatsApp</p>
                      <p className="text-slate-400 text-sm md:text-base">
                        +57 300 000 0000
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-lg">
                      📍
                    </span>
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-slate-400 text-sm md:text-base">
                        Pereira, Risaralda, Colombia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Redes */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                    Redes
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {/* Reemplaza # por tus enlaces */}
                    <a
                      href="#"
                      className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Mapa responsive */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                    Ubicación en mapa
                  </p>
                  <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60">
                    <div className="aspect-video">
                      <iframe
                        title="mapa-ubicacion"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.811839697637!2d-75.69035592419266!3d4.813076840241553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38871a8baa0e7f%3A0xefd01c6eac0b568!2sPereira%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1700000000000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        

        {/* <Peticion/>
        <Peticion2/> */}

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
