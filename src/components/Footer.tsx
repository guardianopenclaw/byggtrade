export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-white text-2xl font-light tracking-[0.2em] uppercase">
              Nordic<span className="font-semibold">Floor</span>
            </span>
            <p className="mt-4 text-white/40 font-light leading-relaxed max-w-md">
              Norsk leverandør av premium klikk-vinyl med HD Mineral Core teknologi. 
              Vanntette, slitesterke gulv for hjem og næring.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-4">
              Sider
            </h4>
            <div className="space-y-3">
              {["Kolleksjoner", "Fordeler", "Om oss", "Inspirasjon", "Kontakt"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className="block text-white/40 hover:text-[#c8a87c] transition-colors text-sm font-light"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-4">
              Kontakt
            </h4>
            <div className="space-y-3 text-white/40 text-sm font-light">
              <p>post@nordicfloor.no</p>
              <p>+47 22 33 44 55</p>
              <p>Oslo, Norge</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-light">
            © 2026 Nordic Floor. Alle rettigheter reservert.
          </p>
          <div className="flex gap-6 text-white/30 text-sm font-light">
            <a href="#" className="hover:text-[#c8a87c] transition-colors">Personvern</a>
            <a href="#" className="hover:text-[#c8a87c] transition-colors">Vilkår</a>
            <a href="#" className="hover:text-[#c8a87c] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
