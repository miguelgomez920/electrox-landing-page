/**
 * Navbar Component
 *
 * Este componente representa la barra de navegación principal del sitio.
 * Incluye:
 *  - Logo y eslogan
 *  - Enlaces de navegación para vista desktop
 *  - Botones de iniciar sesión y crear cuenta
 *  - Menú hamburguesa para dispositivos móviles
 *  - Drawer móvil (menú desplegable)
 *
 * Funcionalidades:
 *  - Abre y cierra el menú móvil mediante un estado booleano.
 *  - Cierra automáticamente el menú cuando el usuario hace scroll.
 */

import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

function Navbar() {
  /* Estado que controla si el menú móvil (drawer) se encuentra abierto o cerrado.*/
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  /*Alterna el estado del menú móvil. Si está abierto, lo cierra; si está cerrado, lo abre.*/
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  /* useEffect: Escucha el evento de scroll. Cada vez que el usuario hace scroll, se cierra el menú móvil. Esto evita que el menú quede abierto accidentalmente.*/
  useEffect(() => {
    const handleScroll = () => setMobileDrawerOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Se ejecuta solo una vez al montar el componente.

  return (
    <>
      {/* HEADER PRINCIPAL — Navbar fija en la parte superior */}
      <header className="sticky top-0 z-50 h-16 backdrop-blur border-b border-neutral-500">
        <nav className="flex h-full max-w-6xl mx-auto justify-between items-center px-5 ">
          {/* LOGO + ESLOGAN */}
          <div className="flex flex-col">
            <span className="text-primary text-xl font-bold">ElectroX</span>
            <span className="text-xs text-neutral-500">
              Tecnología que inspira
            </span>
          </div>

          {/* MENÚ DESKTOP (se oculta en móvil) */}
          <div>
            <ul className="hidden md:flex gap-5 ">
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#inicio">Inicio</a>
              </li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#productos">Productos</a>
              </li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#ofertas">Ofertas</a>
              </li>
              <li className="text-sm text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>

          {/* BOTONES (solo desktop) */}
          <div className="hidden md:flex gap-3 items-center">
            <button className="text-sm text-neutral-300 hover:text-primary">
              Iniciar sesión
            </button>
            <button className="text-sm font-semibold bg-primary py-2 px-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition">
              Crear cuenta
            </button>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
            onClick={toggleNavbar}
          >
            {mobileDrawerOpen ? <IoCloseSharp /> : <IoMdMenu />}
          </button>
        </nav>
      </header>

      {/* MENÚ MÓVIL — Drawer */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-40 "
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed w-full top-14 z-40 flex flex-col justify-center items-center gap-3 bg-neutral-900/60 backdrop-blur border-b border-neutral-500 py-3 "
          >
            {/* LINKS DEL MENÚ MÓVIL */}
            <ul className="flex flex-col gap-3 py-3 text-[18px] ">
              <li className=" text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#inicio" onClick={() => setMobileDrawerOpen(false)}>
                  Inicio
                </a>
              </li>
              <li className=" text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#productos" onClick={() => setMobileDrawerOpen(false)}>
                  Productos
                </a>
              </li>
              <li className=" text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#ofertas" onClick={() => setMobileDrawerOpen(false)}>
                  Ofertas
                </a>
              </li>
              <li className=" text-neutral-300 hover:text-primary font-semibold transition">
                <a href="#contacto" onClick={() => setMobileDrawerOpen(false)}>
                  Contacto
                </a>
              </li>
            </ul>

            {/* BOTONES DEL MENÚ MÓVIL */}
            <div className="flex gap-3">
              <button
                className="text-[18px] text-neutral-300 hover:text-primary"
                href="#"
              >
                Iniciar sesión
              </button>
              <button
                className="text-[18px] font-semibold bg-primary py-2 px-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition"
                href="#"
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
