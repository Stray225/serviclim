export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Serviclima</span>
          <span className="text-xs text-slate-500">• Aire acondicionado</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <a href="#servicios" className="hover:text-black">Servicios</a>
          <a href="#zonas" className="hover:text-black">Zonas</a>
          <a href="#contacto" className="hover:text-black">Contacto</a>
        </nav>
        <a href="https://wa.me/54911XXXXXXXX?text=Hola%20quiero%20un%20presupuesto" className="btn btn-primary text-xs md:text-sm" aria-label="WhatsApp">
          WhatsApp
        </a>
      </div>
    </header>
  );
}
