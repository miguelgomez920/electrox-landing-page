import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const ContactSection = () => {
  return (
    <>
     

    

      {/* mi codigo */}
      <section id="contacto" className="scroll-mt-10 space-y-6 gap-6 py-12  px-4">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-semibold">Contactanos</h2>
                    <p className="text-[15px] text-neutral-300">Déjanos un mensaje y te responderemos lo antes posible. Cuéntanos qué necesitas y cómo podemos ayudarte.</p>
                </div>

                <div className=" flex flex-col lg:flex-row gap-7   ">

                    <div className=" flex-1  border border-white/15 bg-[#0e0e0e] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)] rounded-xl p-6 s">
                        <form className="space-y-6" 
                              onSubmit={(e) => {
                                    e.preventDefault();
                                    // Aquí puedes manejar el submit (fetch/axios/etc)
                                    console.log("Form submitted");
                                    }}>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 flex flex-col space-y-1">
                                    <label className="font-medium text-sm" htmlFor="nombre">Nombre completo  </label>
                                    <input id="nombre" className="border border-white/15 rounded-xl p-2 " type="text" placeholder="Tu nombre" required/>
                                </div>
                                <div className="flex-1 flex flex-col space-y-1">
                                    <label className="font-medium text-sm" htmlFor="correo">Correo electrónico</label>
                                    <input id="correo" className="border border-white/15 rounded-xl p-2 " type="email" placeholder="tucorreo@ejemplo.com" required />
                                </div>                          
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="font-medium text-sm" htmlFor="asunto">Asunto</label>
                                <input id="asunto" className="border border-white/15 rounded-xl p-2 " type="text" placeholder="¿Sobre qué quieres hablar?" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="font-medium text-sm" htmlFor="mensaje">Mensaje</label>
                                <textarea id="mensaje" rows={7} className="border border-white/15 rounded-xl p-2 resize-none " placeholder="Cuéntanos brevemente qué necesitas..." required />
                            </div>
                            <div className=" flex flex-col md:flex-row items-center gap-3">
                                <p className="w-[70%]  text-sm text-neutral-400">Al enviar este formulario aceptas que te contactemos al correo proporcionado.</p>
                                <button type="submit" className="border p-2 rounded-full bg-linear-to-r from-primary to-primary/60 text-black font-semibold 
                                                   shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200">Enviar mensaje</button>
                            </div>
                            
                        </form>
                    </div>

                    <div className=" flex-1  border border-white/15 bg-[#0e0e0e] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)] rounded-xl p-6 space-y-3">
                        <h4>Información de contacto</h4>
                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <div className="bg-linear-to-br from-primary to-primary/15 p-2 rounded-full">
                                  < MdEmail size={20}/>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-medium ">Correo</p>
                                    <p className="text-neutral-300">contacto@tusito.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-linear-to-br from-primary to-primary/15 p-2 rounded-full">
                                  < FaPhoneAlt size={20}/>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-medium ">Teléfono/Whatsapp</p>
                                    <p className="text-neutral-300">+57 300 000 0000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-linear-to-br from-primary to-primary/15 p-2 rounded-full">
                                  < IoLocationSharp size={20}/>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-medium ">Ubicación</p>
                                    <p className="text-neutral-300">Pereira, Risaralda, Colombia</p>
                                </div>
                            </div>


                        </div>

                        <div className="space-y-3">
                            <p className="text-neutral-400 text-xs tracking-[0.2em]">REDES</p>
                            <div className="flex flex-wrap gap-1 justify-evenly md:gap-3">
                                <a className="flex-1 flex items-center gap-1 text-sm px-2 md:px-3 py-1.5 border border-white/15 rounded-full hover:text-primary hover:border-primary transition" href=""><FaInstagram/> Instagram</a>
                                <a className="flex-1 flex items-center gap-1 text-sm px-2 md:px-3 py-1.5 border border-white/15 rounded-full hover:text-primary hover:border-primary transition" href=""><FaFacebookF/>Facebook</a>
                                <a className="flex-1 flex items-center gap-1 text-sm px-2 md:px-3 py-1.5 border border-white/15 rounded-full hover:text-primary hover:border-primary transition" href=""><FaTiktok/>Tiktok</a>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-neutral-400 text-xs tracking-[0.2em]">UBICACIÓN EN MAPA</p> 
                           
                                <div className="aspect-video border rounded-2xl overflow-hidden">
                                    <iframe
                                        title="mapa-ubicacion"
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


                



      </section>
    </>
  );
};

export default ContactSection;
