
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

function Navbar() {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (

    <>
    {/* <header className="sticky top-0 z-30 bg-linear-to-b from-dark/90 to-dark/60 backdrop-blur border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
         <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-primary">ElectroX</span>
            <span className="text-xs text-gray-500">Tecnología que inspira</span>
         </div>

          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <li><a className="hover:text-primary transition" href="#inicio">Inicio</a></li>
            <li><a className="hover:text-primary transition" href="#productos">Productos</a></li>
            <li><a className="hover:text-primary transition" href="#ofertas">Ofertas</a></li>
            <li><a className="hover:text-primary transition" href="#contacto">Contacto</a></li>
          </ul>
       
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm text-gray-300 hover:text-primary transition">
            Iniciar sesión
          </button>
          <button className="text-sm bg-primary px-4 py-2 rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition">
            Crear cuenta
          </button>
        </div>
      </nav>
    </header> */}

    <header className="sticky top-0 z-50 h-16 backdrop-blur border-b border-neutral-500">

      <nav className="flex h-full max-w-6xl mx-auto justify-between items-center px-5 ">

          <div className="flex flex-col">
            <span className="text-primary text-xl font-bold" >ElectroX</span>
            <span className="text-xs text-neutral-500">Tecnología que inspira</span>
          </div>
          <div>
            <ul className="hidden md:flex gap-5 "> 
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#inicio">Inicio</a></li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#productos">Productos</a></li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#ofertas">Ofertas</a></li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="hidden md:flex gap-3 items-center">
            <button className="text-sm text-neutral-300 hover:text-primary" >Iniciar sesión</button>
            <button className="text-sm font-semibold bg-primary py-2 px-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition" >Crear cuenta</button>
          </div>

          <button className="md:hidden text-2xl" aria-label="Toggle menu" onClick={toggleNavbar}>{mobileDrawerOpen?<IoCloseSharp/>:<IoMdMenu/>}</button>

      </nav>
    </header>

        {mobileDrawerOpen && (
          <div className="fixed w-full top-14 z-40 flex flex-col justify-center items-center gap-3 bg-neutral-900/60 backdrop-blur border-b border-neutral-500 py-3 ">
             <ul className="flex flex-col gap-3 py-3 "> 
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#inicio">Inicio</a></li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#">Productos</a></li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#ofertas">Ofertas</a></li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition"><a href="#">Contacto</a></li>
            </ul>

            <div className="flex gap-3">
                <button className="text-sm text-neutral-300 hover:text-primary" href="#">Iniciar sesión</button>
            <button className="text-sm font-semibold bg-primary py-2 px-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition" href="#">Crear cuenta</button>
            </div>
          </div>
        )}

    </>

  );
}

export default Navbar;
