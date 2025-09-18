'use client';
import Navbar from '../(site)/components/Navbar';
import Footer from '../(site)/components/Footer';

export default function Contacto(){
  const onSubmit = (e)=>{
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const okEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(data.email||'');
    if(!data.nombre || data.nombre.length < 2) return alert('El nombre es muy corto.');
    if(!okEmail) return alert('Email inválido.');
    if(!data.mensaje || data.mensaje.length < 10) return alert('El mensaje es muy corto.');
    alert('¡Gracias! (Validación local ok)');
    form.reset();
  };
  return (
    <main>
      <Navbar />
      <section className='container py-24'>
        <h1 className='text-4xl mb-4'>Contacto</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="card space-y-4">
            <h3 className="text-cyan-300">Solicitar asesoría</h3>
            <label className="block">
              <span className="text-slate-300">Nombre</span>
              <input name="nombre" className="w-full mt-1 bg-white/10 border border-slate-700 rounded-lg p-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tu nombre" />
            </label>
            <label className="block">
              <span className="text-slate-300">Email</span>
              <input name="email" type="email" className="w-full mt-1 bg-white/10 border border-slate-700 rounded-lg p-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="tu@email.com" />
            </label>
            <label className="block">
              <span className="text-slate-300">Empresa (opcional)</span>
              <input name="empresa" className="w-full mt-1 bg-white/10 border border-slate-700 rounded-lg p-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Empresa" />
            </label>
            <label className="block">
              <span className="text-slate-300">Mensaje</span>
              <textarea name="mensaje" rows="4" className="w-full mt-1 bg-white/10 border border-slate-700 rounded-lg p-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Contanos tu necesidad" />
            </label>
            <button className="btn-primary w-full" type="submit">Enviar</button>
          </form>
          <div className="card">
            <h3 className="text-cyan-300 mb-2">Datos de contacto</h3>
            <p>📧 info@serviclima.com.ar</p>
            <p>☎️ +54 11 5555-5555</p>
            <p>🕒 Lun a Vie · 9–18hs</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <a className="btn bg-green-400 hover:bg-green-500 text-slate-900 px-4 py-2 rounded-full font-bold" href="https://wa.me/541155555555" target="_blank">WhatsApp</a>
              <a className="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-bold" href="tel:+541155555555">Llamar</a>
              <a className="btn border border-slate-600 text-slate-200 px-4 py-2 rounded-full font-bold" href="mailto:info@serviclima.com.ar">Enviar email</a>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-white/10 mt-4">
              <iframe className="w-full h-64" src="https://www.google.com/maps?q=Obelisco%20CABA&output=embed" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
