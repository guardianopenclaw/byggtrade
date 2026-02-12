import FadeIn from "./FadeIn";

const collections = [
  {
    name: "Nordic Eik",
    desc: "Naturlig eik-look med varme toner og autentisk trestruktur. Perfekt for stue og soverom.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    tag: "Bestselger",
  },
  {
    name: "Urban Stein",
    desc: "Moderne betong- og stein-look for et industrielt, minimalistisk uttrykk. Ideell for kjøkken og entre.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format&fit=crop",
    tag: "Nyhet",
  },
  {
    name: "Moderne Grå",
    desc: "Tidløs grå farge med subtil tekstur. Passer til alle rom og interiørstiler.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80&auto=format&fit=crop",
    tag: "Populær",
  },
  {
    name: "Varm Natur",
    desc: "Lys og varm vinyl med naturlige fargenyanser. Gir rommet en skandinavisk og luftig følelse.",
    img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80&auto=format&fit=crop",
    tag: "Ny kolleksjon",
  },
];

export default function Products() {
  return (
    <section id="produkter" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-warm-500 font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            Våre kolleksjoner
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Klikk-vinyl for enhver stil
          </h2>
          <p className="text-nordic-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Utforsk våre håndplukkede kolleksjoner – designet for skandinaviske hjem.
            Alle gulv er 100% vanntette med patentert klikkesystem.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c, i) => (
            <FadeIn key={c.name} delay={i * 100}>
              <div className="group relative rounded-xl overflow-hidden bg-nordic-100 cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-nordic-950/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {c.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-nordic-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{c.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{c.desc}</p>
                  <div className="mt-3 flex items-center text-warm-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Se detaljer
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
