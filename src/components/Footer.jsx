import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>

      {/* mi codigo */}
      <footer className="border-t-2 border-white/10 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-7 px-6 sm:grid-cols-4 py-12">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">ElectroX</h3>
              <p className="text-xs text-gray-400">
                Tecnología premium, gaming y periféricos seleccionados para
                elevar tu experiencia digital.
              </p>
              <a
                className="text-[11px] text-primary font-medium hover:text-primary/80 hover:underline transition "
                href="#"
              >
                Conócenos →
              </a>
            </div>

            <div>
              <h3 className="text-sm mb-2 font-semibold">Explorar</h3>
              <ul className="md:space-y-1 ">
                <li>
                  <a
                    className="text-gray-400 text-xs  hover:text-primary transition"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 text-xs  hover:text-primary transition"
                    href="#productos"
                  >
                    Productos
                  </a>{" "}
                </li>
                <li>
                  <a
                    className="text-gray-400 text-xs  hover:text-primary transition"
                    href="#ofertas"
                  >
                    Ofertas
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 text-xs  hover:text-primary transition"
                    href="#"
                  >
                    Novedades
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm mb-2 font-semibold">Soporte</h3>
              <ul className="md:space-y-1">
                <li>
                  <a
                    className="text-xs text-gray-400  hover:text-primary transition"
                    href="#"
                  >
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-400  hover:text-primary transition"
                    href="#"
                  >
                    Garantías
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-400  hover:text-primary transition"
                    href="#"
                  >
                    Envíos y Devoluciones
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-400  hover:text-primary transition"
                    href="#contacto"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm mb-2 font-semibold">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-1 text-xs text-gray-400">
                  <MdEmail />
                  contacto@tusitio.com
                </li>
                <li className="flex items-center gap-1  text-xs text-gray-400">
                  <FaPhoneAlt />
                  +57 300 000 0000
                </li>
                <li className="flex items-center gap-1  text-xs text-gray-400">
                  <IoLocationSharp />
                  Pereira, Risaralda, Colombia
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                <a
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition"
                  href="#"
                >
                  <FaInstagram /> Instagram
                </a>
                <a
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition"
                  href="#"
                >
                  <FaFacebookF />
                  Facebook
                </a>
                <a
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition"
                  href="#"
                >
                  <FaTiktok />
                  Tiktok
                </a>
              </div>
            </div>
          </div>

          <div className="h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col gap-2 items-center mt-4">
            <p className="text-[11px] text-gray-500">
              © {new Date().getFullYear()} ElectroX · Todos los derechos
              reservados.
            </p>
            <p className="text-[11px] text-gray-500">
              Términos · Privacidad · Cookies
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
