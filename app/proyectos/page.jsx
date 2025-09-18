import Navbar from '../(site)/components/Navbar';
import Footer from '../(site)/components/Footer';
import ScrollReveal from '../(site)/components/ScrollReveal';

export default function Proyectos(){
  return (
    <main>
      <Navbar />
      <section className='container py-24'>
        <h1 className='text-4xl mb-4'>Proyectos</h1>
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {['Planta Alimenticia — ahorro 20%','Data Center — uptime 99,9%','Hotel 5★ — confort y eficiencia','Edificio Corporativo — VRF','Hospital — filtración HEPA','Residencial Premium — diseño'].map((t,i)=>(
              <div key={i} className="card">
                <h3 className='text-cyan-300 mb-2'>{t.split(" — ")[0]}</h3>
                <p className='text-slate-300'>{t.split(" — ")[1]}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  );
}
