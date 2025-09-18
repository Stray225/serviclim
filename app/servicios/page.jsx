import Navbar from '../(site)/components/Navbar';
import Footer from '../(site)/components/Footer';
import ScrollReveal from '../(site)/components/ScrollReveal';

export default function Servicios(){
  return (
    <main>
      <Navbar />
      <section className='container py-24'>
        <h1 className='text-4xl mb-4'>Servicios</h1>
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {['Ingeniería y Proyecto','Instalación','Mantenimiento Preventivo','Service y Reparación','Auditorías de Eficiencia','Ductos y Ventilación'].map((t,i)=>(
              <div key={i} className="card">
                <h3 className='text-cyan-300 mb-2'>{t}</h3>
                <p className='text-slate-300'>Detalle de servicio orientado a impacto y confiabilidad.</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  );
}
