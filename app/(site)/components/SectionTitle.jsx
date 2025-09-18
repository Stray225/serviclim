export default function SectionTitle({ kicker, title, sub }) {
  return (
    <div className="text-center mb-10">
      {kicker && <div className="uppercase tracking-[0.2em] text-[12px] text-[var(--gold)] mb-2">{kicker}</div>}
      <h2 className="text-4xl md:text-5xl font-black">{title}</h2>
      {sub && <p className="text-[var(--ink-sub)] max-w-2xl mx-auto mt-3">{sub}</p>}
      <div className="hr-gold mt-6"></div>
    </div>
  )
}