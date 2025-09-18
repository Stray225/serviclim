"use client";
export default function MobileCTA(){
  return (
    <div className="fixed bottom-3 left-0 right-0 z-50 flex justify-center md:hidden">
      <div className="flex gap-2 rounded-full bg-black/60 backdrop-blur px-2 py-2">
        <a href="tel:+541155555555" className="rounded-full bg-white/10 px-4 py-2">☎️ Llamar</a>
        <a href="https://wa.me/5491155555555?text=Hola%20Serviclima,%20necesito%20asesor%C3%ADa%20HVAC."
           target="_blank" rel="noreferrer"
           className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 font-semibold text-night-900">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
