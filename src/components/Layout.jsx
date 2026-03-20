import { navItems, site } from '../data/siteData';

export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-24 left-[-4rem] h-80 w-80 rounded-full bg-teal-200/25 blur-3xl" />
      <div className="absolute top-20 right-[-3rem] h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-amber-100/25 blur-3xl" />
    </div>
  );
}

export function Header({ route }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <a href="#/home" className="min-w-0">
          <div className="truncate text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">{site.name}</div>
          <div className="hidden truncate text-xs text-slate-500 md:block">{site.subtitle}</div>
        </a>

        <nav className="hidden xl:flex items-center gap-5 text-sm text-slate-700">
          {navItems.map(([label, key]) => (
            <a
              key={key}
              href={`#/${key}`}
              className={`transition-colors hover:text-teal-700 ${route === key ? 'text-teal-700 font-medium' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#/contact" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow transition hover:opacity-95">
          Connect With Us
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#eef4f0]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-12">
        <div>
          <div className="text-2xl font-semibold text-slate-900">Liuli Society</div>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.
          </p>
          <p className="mt-3 max-w-3xl leading-7 text-slate-500">
            Liuli Society is developing its nonprofit wellness innovation work within the broader innovation environment of UNH BIC.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            This website is dedicated to the nonprofit mission of education, research, and community support. It does not function as a commercial product website.
          </p>
        </div>
        <div className="grid min-w-[260px] grid-cols-2 gap-x-10 gap-y-3 text-sm text-slate-700">
          {navItems.slice(1).map(([label, key]) => (
            <a key={key} href={`#/${key}`} className="hover:text-teal-700">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function AppShell({ children, route }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f8f2_0%,#f4faf7_36%,#fbfaf5_100%)] text-slate-800">
      <BackgroundGlow />
      <Header route={route} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
