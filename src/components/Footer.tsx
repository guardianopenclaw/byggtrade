export default function Footer() {
  return (
    <footer className="bg-nordic-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Nordic<span className="text-warm-400">Floor</span>
            </h3>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Norges ledende leverandør av premium klikk-vinyl gulv.
              Skandinavisk design, enkel installasjon, ekstraordinær kvalitet.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-warm-400">Snarveier</h4>
            <ul className="space-y-2 text-white/50">
              <li><a href="#produkter" className="hover:text-white transition-colors">Produkter</a></li>
              <li><a href="#fordeler" className="hover:text-white transition-colors">Fordeler</a></li>
              <li><a href="#om-oss" className="hover:text-white transition-colors">Om oss</a></li>
              <li><a href="#galleri" className="hover:text-white transition-colors">Inspirasjon</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-warm-400">Kontakt</h4>
            <ul className="space-y-2 text-white/50">
              <li>Storgata 1, 0155 Oslo</li>
              <li>post@nordicfloor.no</li>
              <li>+47 22 00 00 00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Nordic Floor. Alle rettigheter reservert.
          </p>
          <div className="flex gap-6 text-white/30 text-sm">
            <a href="#" className="hover:text-white/60 transition-colors">Personvern</a>
            <a href="#" className="hover:text-white/60 transition-colors">Vilkår</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
