import Navbar from '../(site)/components/Navbar';
import Footer from '../(site)/components/Footer';
import ScrollReveal from '../(site)/components/ScrollReveal';

export default function Industrias(){
  return (
    <main>
      <Navbar />
      <section className='container py-24'>
        <h1 className='text-4xl mb-4'>Industrias</h1>
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {['Alimentos y Bebidas','Farmacéutica','Centros de Datos','Retail & Shoppings','Hotelería','Edificios Corporativos','Salud','Residencial Premium'].map((t,i)=>(
              <div key={i} className="card">
                <h3 className='text-cyan-300 mb-2'>{t}</h3>
                <p className='text-slate-300'>Soluciones específicas para el sector.</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  );
}
