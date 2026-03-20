export function Container({ children, className = '' }) {
  return <div className={`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionTitle({ eyebrow, title, subtitle, dark = false }) {
  return (
    <div className="max-w-3xl">
      <div className={`text-sm font-semibold uppercase tracking-[0.25em] ${dark ? 'text-teal-300' : 'text-teal-700'}`}>{eyebrow}</div>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight md:text-5xl ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {subtitle ? <p className={`mt-5 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p> : null}
    </div>
  );
}

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-white/60 bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export function PageLayout({ eyebrow, title, subtitle, children }) {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
