import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="section">
          <div className="container grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Aire acondicionado claro y sin vueltas</h1>
              <p className="mt-4 text-lg text-slate-700">Instalación, mantenimiento y reparación. Precios transparentes, visita rápida y garantía escrita.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://wa.me/54911XXXXXXXX?text=Hola%20quiero%20un%20presupuesto" className="btn btn-primary">Pedir presupuesto</a>
                <a href="#servicios" className="btn">Ver servicios</a>
                <a href="tel:+54XXXXXXXXXX" className="btn" aria-label="Llamar">Llamar</a>
              </div>
              <ul className="mt-4 text-sm text-slate-600 list-disc pl-4">
                <li>Atendemos hoy mismo • Cobertura: TODO: zonas</li>
                <li>Trabajos con factura • Garantía por escrito</li>
              </ul>
            </div>
            <div className="card">
              <div className="aspect-video w-full bg-slate-100 rounded-md flex items-center justify-center text-slate-400">
                <span>FOTO PRINCIPAL / VIDEO (TODO)</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">Preparado para que subas tus fotos buenas (calidad alta).</p>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section bg-slate-50">
          <div className="container">
            <h2 className="text-2xl font-semibold">Servicios</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {t: "Instalación Split / Multisplit", d: "Colocación prolija, vacío con manómetro y puesta a punto."},
                {t: "Mantenimiento y limpieza", d: "Lavado profundo, desinfección y control de gas."},
                {t: "Reparación", d: "Diagnóstico y reparación de fallas eléctricas o de gas."},
                {t: "Reubicación de equipos", d: "Mudanza y reinstalación con garantía."},
                {t: "Centrales VRF / conductos", d: "TODO: si aplica—sino eliminar esta tarjeta."},
                {t: "Commercial / edificios", d: "Planes de mantenimiento para empresas."},
              ].map((s) => (
                <div key={s.t} className="card">
                  <div className="font-medium">{s.t}</div>
                  <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ZONAS */}
        <section id="zonas" className="section">
          <div className="container">
            <h2 className="text-2xl font-semibold">Zonas de cobertura</h2>
            <p className="mt-2 text-slate-700">TODO: lista clara de barrios / ciudades. Ej: CABA, Zona Sur, Quilmes, Berazategui, Avellaneda, etc.</p>
            <div className="mt-6 card">
              <div className="aspect-[16/9] w-full bg-slate-100 rounded flex items-center justify-center text-slate-400">
                <span>Mapa incrustado (opcional)</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">Podemos reemplazar esto por un embed de Google Maps de tu ubicación/taller.</p>
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section className="section bg-slate-50">
          <div className="container">
            <h2 className="text-2xl font-semibold">Trabajamos con</h2>
            <p className="mt-2 text-slate-700">Surrey, BGH, Philco, Samsung, LG, TCL, Carrier, Hitachi, Daikin, Midea, etc.</p>
          </div>
        </section>

        {/* CTA / CONTACTO */}
        <section id="contacto" className="section">
          <div className="container grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Contacto</h2>
              <p className="mt-2 text-slate-700">Respondemos rápido por WhatsApp o formulario.</p>
              <ul className="mt-4 text-slate-700">
                <li>📞 <a className="underline" href="tel:+54XXXXXXXXXX">+54 XX XXXXXXXX</a></li>
                <li>💬 <a className="underline" href="https://wa.me/54911XXXXXXXX?text=Hola%20quiero%20un%20presupuesto">WhatsApp directo</a></li>
                <li>✉️ <a className="underline" href="mailto:info@serviclim.ar">info@serviclim.ar</a></li>
              </ul>
            </div>
            <form className="card space-y-3" action="https://formspree.io/f/TODO_FORM_ID" method="POST">
              <div>
                <label>Nombre</label>
                <input name="nombre" required placeholder="Tu nombre" />
              </div>
              <div>
                <label>Teléfono</label>
                <input name="telefono" required placeholder="11 3XXX XXXX" />
              </div>
              <div>
                <label>Zona</label>
                <input name="zona" placeholder="Ej: Quilmes / CABA" />
              </div>
              <div>
                <label>Consulta</label>
                <textarea name="mensaje" rows={4} placeholder="Contanos qué necesitás"></textarea>
              </div>
              <input type="text" name="_gotcha" className="hidden" aria-hidden="true" /> {/* honeypot */}
              <button className="btn btn-primary w-full" type="submit">Enviar</button>
              <small className="hint">Al enviar aceptás ser contactadx por Serviclima.</small>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
