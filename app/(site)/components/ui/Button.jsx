// app/(site)/components/ui/Button.jsx
export default function Button({ as='a', href='#', children, className='', variant='primary', ...rest }) {
  const base = "inline-flex items-center justify-center rounded-pill px-5 py-2.5 font-semibold transition-all";
  const variants = {
    primary: "bg-brand-cta text-night-900 shadow-brand hover:bg-brand-cta-hover",
    outline: "border border-brand-500 text-brand-200 hover:bg-brand-500/10",
    ghost:   "text-brand-200 hover:bg-white/5",
  };
  const Comp = as === 'button' ? 'button' : 'a';
  return (
    <Comp href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Comp>
  )
}
