export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-slate-600">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-semibold text-slate-800">Serviclima</div>
            <p className="mt-2">Instalación y servicio técnico de aire acondicionado split y central.</p>
            <p className="mt-2">Tel: <a className="underline" href="tel:+54XXXXXXXXXX">+54 XX XXXXXXXX</a></p>
            <p>Email: <a className="underline" href="mailto:info@serviclim.ar">info@serviclim.ar</a></p>
            <p className="mt-2">Dirección: <span className="italic">TODO: Dirección exacta</span></p>
          </div>
          <div>
            <div className="font-semibold text-slate-800">Horarios</div>
            <p className="mt-2">Lunes a Sábado 8–19 h</p>
            <p>Urgencias: <span className="italic">TODO definir</span></p>
          </div>
          <div>
            <div className="font-semibold text-slate-800">Legal</div>
            <p className="mt-2">© {new Date().getFullYear()} Serviclima. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
