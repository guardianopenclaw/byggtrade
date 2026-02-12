export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Byggtrade</h3>
            <p className="text-sm leading-relaxed">
              Kvalitetsgulv til norske hjem og bedrifter siden 2003.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Produkter</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#produkter" className="hover:text-white transition-colors">Parkett</a></li>
              <li><a href="#produkter" className="hover:text-white transition-colors">Laminat</a></li>
              <li><a href="#produkter" className="hover:text-white transition-colors">Vinyl</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Selskapet</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#om-oss" className="hover:text-white transition-colors">Om oss</a></li>
              <li><a href="#prosjekter" className="hover:text-white transition-colors">Prosjekter</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>+47 22 00 00 00</li>
              <li>post@byggtrade.no</li>
              <li>Storgata 12, 0155 Oslo</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-warm-800 pt-8 text-center text-xs text-warm-500">
          © {new Date().getFullYear()} Byggtrade AS. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
}
