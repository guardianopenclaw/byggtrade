import FadeIn from "./FadeIn";

const collections = [
  {
    name: "Nordic Oak Collection",
    desc: "Tidløs eik i varme naturtoner. Skandinavisk eleganse som passer i ethvert rom.",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80&auto=format&fit=crop",
    colors: "Naturlig eik, Honning eik, Hvitvasket eik, Røkt eik",
  },
  {
    name: "Nordic Stone Collection",
    desc: "Stein- og betong-look for den moderne minimalisten. Rene linjer, kul eleganse.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop",
    colors: "Carrara, Betong grå, Skifer, Kalkstein",
  },
  {
    name: "Nordic Urban Collection",
    desc: "Moderne grå-toner med urban karakter. For deg som tør å skille deg ut.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format&fit=crop",
    colors: "Storm grå, Grafitt, Antrasitt, Dusk",
  },
  {
    name: "Nordic Nature Collection",
    desc: "Autentisk tre-look med rustikk sjarm. Naturen inn i hjemmet ditt.",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80&auto=format&fit=crop",
    colors: "Villmark, Drivved, Bjørk, Furu",
  },
];

export default function Collections() {
  return (
    <section id="kolleksjoner" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#c8a87c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Våre kolleksjoner
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
              Finn din <span className="font-semibold">stil</span>
            </h2>
            <p className="mt-4 text-nordic-500 max-w-2xl mx-auto text-lg font-light">
              Fire unike kolleksjoner med over 50 dekorer. Alle med HD Mineral Core, 
              vanntett kjerne og klikkesystem for enkel installasjon.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((c, i) => (
            <FadeIn key={c.name} delay={i * 150}>
              <div className="group relative overflow-hidden bg-nordic-50 cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
                    {c.name}
                  </h3>
                  <p className="text-nordic-500 font-light leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <p className="text-sm text-nordic-400">
                    <span className="text-[#c8a87c] font-medium">Dekorer:</span> {c.colors}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#c8a87c] text-sm font-medium tracking-wider uppercase">
                    <span>Se kolleksjonen</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
