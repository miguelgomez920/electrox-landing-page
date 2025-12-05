const Footer = () => {
  return (
    <>
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
              <li>
                <a className="hover:text-primary transition" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Productos
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:text-primary transition" href="#">
                  Términos
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Privacidad
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()} ElectroX · Todos los derechos reservados.
        </p>
      </footer>

      {/* mi codigo */}
      <footer>HOLA MUNDO</footer>
    </>
  );
};

export default Footer;
