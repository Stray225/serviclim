'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all
      ${scrolled ? 'bg-slate-900/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}
    `}>
      <nav className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo-serviclima.svg" alt="Serviclima" className="w-7 h-7" />
          <span className="font-semibold tracking-wide">SERVICLIMA</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-[15px]">
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+541155555555" className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-2">
              ☎️ (11) 5555-5555
            </a>
            <a
              href="https://wa.me/5491155555555?text=Hola%20Serviclima,%20necesito%20asesor%C3%ADa%20HVAC."
              target="_blank" rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 font-semibold text-night-900"
            >
              WhatsApp
            </a>
          </div>

          <li><a className="hover:text-cyan-300 transition-colors" href="/">Inicio</a></li>
          <li><a className="hover:text-cyan-300 transition-colors" href="/servicios">Servicios</a></li>
          <li><a className="hover:text-cyan-300 transition-colors" href="/industrias">Industrias</a></li>
          <li><a className="hover:text-cyan-300 transition-colors" href="/proyectos">Proyectos</a></li>
          <li>
            
            <a href="/contacto"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full
               bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-900 font-semibold
               hover:from-cyan-300 hover:to-blue-500 shadow-[0_8px_24px_rgba(34,211,238,.25)]">
              Solicitar asesoría
            </a>
                        {/* Badge Agente Oficial */}
            <a href="https://www.surrey.com.ar" target="_blank" rel="noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10">
              <img src="/brands/surrey-logo.svg" alt="Surrey" className="h-4 w-auto" />
              <span>Agente Oficial</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

