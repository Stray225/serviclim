export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0a2540] text-slate-200 border-t border-white/10">
      <div className="container py-10 grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] items-start">
        <div className="flex items-start gap-3">
          <img src="/logo-serviclima.svg" alt="Serviclima" className="w-8 h-8 mt-1" />
          <div>
            <div className="text-lg font-semibold">Serviclima</div>
            <p className="text-slate-400">
              Climatización profesional — Industrial &amp; Residencial.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2 md:justify-center">
          {[
            ['Inicio','/'],
            ['Servicios','/servicios'],
            ['Industrias','/industrias'],
            ['Proyectos','/proyectos'],
            ['Contacto','/contacto'],
          ].map(([t,h]) => (
            <a key={h} href={h}
               className="px-4 py-2 rounded-full border border-white/10 bg-white/5
               hover:border-cyan-300 hover:bg-cyan-300/10 transition-colors">
              {t}
            </a>
          ))}
        </nav>

        <ul className="space-y-2 md:justify-self-end">
          <li>📧 <a className="hover:text-cyan-300" href="mailto:info@serviclima.com.ar">info@serviclima.com.ar</a></li>
          <li>☎️ <a className="hover:text-cyan-300" href="tel:+541155555555">+54 11 5555-5555</a></li>
          <li>🕒 Lun a Vie · 9–18hs</li>
        </ul>
      </div>

      <div className="py-4 text-center text-sm text-slate-400 border-t border-white/10">
        © {new Date().getFullYear()} Serviclima. Todos los derechos reservados.
      </div>
    </footer>
  )
}
