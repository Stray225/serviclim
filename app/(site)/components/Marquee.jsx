"use client";

export default function Marquee({ children }) {
  return (
    <div className="marquee bg-[#0f172a] border-y border-slate-700">
      <div className="marquee-track text-slate-200/80 tracking-wide">
        <span className="px-6">{children}</span>
        {/* Duplico el contenido para que el loop sea continuo */}
        <span className="px-6" aria-hidden="true">{children}</span>
      </div>
    </div>
  );
}