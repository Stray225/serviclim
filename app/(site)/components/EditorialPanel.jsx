// app/(site)/components/EditorialPanel.jsx
export default function EditorialPanel({ image, title, copy, cta, href }) {
  return (
    <article className="group relative overflow-hidden rounded-xl2 shadow-card bg-night-800">
      <div className="relative aspect-[16/9] min-h-[260px]">
        <img src={image} alt={title}
             className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-night-800/70" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-[15px] text-slate-200 mb-4">{copy}</p>
          <a href={href}
             className="inline-block rounded-pill bg-brand-cta px-5 py-2 text-night-900 font-semibold shadow-brand hover:bg-brand-cta-hover">
            {cta}
          </a>
        </div>
      </div>
    </article>
  );
}
