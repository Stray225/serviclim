// app/(site)/components/Hero.jsx
"use client";


export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* FONDO: imagen siempre (fallback instantáneo) */}
      <div className="absolute inset-0 bg-[url('/hero-poster.png')] bg-cover bg-center" />

      {/* VIDEO: se muestra si carga bien y si el usuario no pide menos movimiento */}
      <video
        className="absolute inset-0 hidden motion-safe:block w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.png"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      >
        {/* Tenés ambos formatos, el navegador elige */}
        <source src="/videos/serviclima-hero.webm" type="video/webm" />
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay para contraste/legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0b1220]/80" />

      {/* Contenido encima del video */}
      <div className="relative z-10 container px-4">
        <img
          src="/logo-serviclima.svg"
          alt="Serviclima"
          className="mx-auto w-24 md:w-28 mb-6 opacity-95"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Climatización profesional
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
          Industrial &amp; Residencial — Aire acondicionado, ventilación y refrigeración.
        </p>
        <a
          href="/contacto"
          className="btn-primary mt-8 inline-flex px-8 py-3 rounded-full"
        >
          Solicitar asesoría
        </a>
      </div>
    </section>
  );
}
