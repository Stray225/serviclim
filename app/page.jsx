// app/page.jsx
import Link from "next/link";
import Navbar from "./(site)/components/Navbar";
import Footer from "./(site)/components/Footer";
import Hero from "./(site)/components/Hero";
import SectionTitle from "./(site)/components/SectionTitle";
import EditorialPanel from "./(site)/components/EditorialPanel";
import Marquee from "./(site)/components/Marquee";

/* =========================
   SEO por página (Home)
   ========================= */
export const metadata = {
  title: "Serviclima — Climatización industrial y residencial",
  description:
    "Ingeniería, instalación y mantenimiento HVAC: VRF, Chillers, Rooftops, ductos y ventilación industrial.",
  openGraph: {
    title: "Serviclima — Climatización profesional",
    description:
      "Soluciones HVAC con eficiencia y continuidad operativa.",
    url: "https://serviclim.com.ar/", // ⛳️ dominio real
    siteName: "Serviclima",
    images: [
      {
        url: "/og-cover.jpg", // ⚠️ asegurate que exista en /public (1200×630)
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#0b1220] text-slate-100">
      {/* Navbar fijo con blur */}
      <Navbar />

      {/* HERO con video + poster */}
      <Hero />

      {/* Marquee editorial (claim bar) */}
      <div className="border-y border-white/5 bg-[#0d1526]">
        <div className="mx-auto w-full max-w-[120rem] px-4">
          <Marquee>
            Ingeniería de precisión • Eficiencia energética • Respuesta 24/7 • Auditorías & Certificaciones • Instalaciones Clase A
          </Marquee>
        </div>
      </div>

      {/* Servicios destacados */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-[120rem] px-4">
          <SectionTitle
            kicker="Servicios"
            title="Soluciones de alto rendimiento"
            sub="Diseñamos, instalamos y mantenemos sistemas HVAC con enfoque en eficiencia y continuidad operativa."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "/editorial/serv-ingenieria.png",
                title: "Ingeniería & Proyecto",
                copy:
                  "Cálculo térmico, selección y documentación ejecutiva.",
                href: "/servicios#ingenieria",
              },
              {
                img: "/editorial/serv-instalacion.png",
                title: "Instalación de sistemas",
                copy:
                  "VRF, Chillers, Rooftops, Ductos y Ventilación industrial.",
                href: "/servicios#instalacion",
              },
              {
                img: "/editorial/serv-mantenimiento.png",
                title: "Mantenimiento 24/7",
                copy:
                  "Planes preventivos y correctivos con métricas de desempeño.",
                href: "/servicios#mantenimiento",
              },
            ].map((it, i) => (
              <EditorialPanel
                key={i}
                image={it.img}
                title={it.title}
                copy={it.copy}
                cta="Ver más"
                href={it.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-[120rem] px-4 text-center">
          {/* línea decorativa */}
          <div className="mx-auto mb-8 h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-blue-600" />
          <Link
            href="/contacto"
            className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-3 font-semibold shadow hover:from-cyan-300 hover:to-blue-500"
          >
            Solicitar asesoría
          </Link>
        </div>
      </section>
            <section className="border-y border-white/5 bg-[#0d1526]">
      <div className="mx-auto w-full max-w-[120rem] px-4 py-10">
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          <img src="/brands/surrey-logo.svg" alt="Surrey" className="h-8" />
          {/* Si del PDF sacamos sellos: */}
          {/* <img src="/brands/sello-eficiencia.png" alt="Eficiencia" className="h-8" /> */}
          {/* <img src="/brands/sello-garantia.png" alt="Garantía" className="h-8" /> */}
        </div>
      </div>
    </section>

      <Footer />
          <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "name": "Serviclima",
          "url": "https://serviclim.com.ar",
          "telephone": "+54 11 5555-5555",
          "areaServed": ["Avellaneda","Quilmes","Lomas de Zamora","Lanús","Berazategui","Zona Sur"],
          "image": "https://serviclim.com.ar/og-cover.jpg",
          "logo": "https://serviclim.com.ar/logo-serviclima.svg",
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-18:00",
          "sameAs": [
            "https://www.google.com/maps/?q=Serviclima",
            "https://www.linkedin.com/company/serviclima"
          ],
          "address": { "@type":"PostalAddress","addressCountry":"AR" },
          "makesOffer": [{
            "@type":"Offer",
            "itemOffered":{
              "@type":"Service",
              "name":"Climatización industrial",
              "areaServed":"Zona Sur de Buenos Aires"
            }
          }]
        }),
      }}
    />

    </main>
  );
}
